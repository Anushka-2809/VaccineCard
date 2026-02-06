import { useState, useEffect } from "react";

const PatientDashboard = () => {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    
  });

  // Load saved patients
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("patients")) || [];
    setPatients(saved);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPatient = {
      ...form,
      id: Date.now(),
      prescriptionName: form.prescription?.name || "Not uploaded",
    };

    const updatedPatients = [...patients, newPatient];
    setPatients(updatedPatients);
    localStorage.setItem("patients", JSON.stringify(updatedPatients));

    setForm({
      name: "",
      age: "",
      previousDose: "",
      upcomingDose: "",
      missedDose: "",
      prescription: null,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-50 p-6">
      
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Patient Dashboard
      </h1>

      {/* FORM CARD */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-lg mb-10"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Add Patient Details
        </h2>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Patient Name"
          className="w-full mb-3 p-3 border rounded-lg"
          required
        />

        <input
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          type="number"
          className="w-full mb-3 p-3 border rounded-lg"
          required
        />

        <input
          name="previousDose"
          value={form.previousDose}
          onChange={handleChange}
          placeholder="Previous Dose"
          className="w-full mb-3 p-3 border rounded-lg"
        />

        <input
          name="upcomingDose"
          value={form.upcomingDose}
          onChange={handleChange}
          placeholder="Upcoming Dose"
          className="w-full mb-3 p-3 border rounded-lg"
        />

        <input
          name="missedDose"
          value={form.missedDose}
          onChange={handleChange}
          placeholder="Missed Dose"
          className="w-full mb-3 p-3 border rounded-lg"
        />

        <input
          type="file"
          name="prescription"
          onChange={handleChange}
          accept=".pdf,image/*"
          className="w-full mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
        >
          Save Patient
        </button>
      </form>

      {/* PATIENT LIST */}
      <div className="w-full max-w-4xl grid gap-6 md:grid-cols-2">
        {patients.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-lg p-5"
          >
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              {p.name}
            </h3>
            <p><b>Age:</b> {p.age}</p>
            <p><b>Previous Dose:</b> {p.previousDose || "—"}</p>
            <p><b>Upcoming Dose:</b> {p.upcomingDose || "—"}</p>
            <p><b>Missed Dose:</b> {p.missedDose || "—"}</p>
            <p className="text-sm text-gray-500 mt-2">
              Prescription: {p.prescriptionName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientDashboard;
