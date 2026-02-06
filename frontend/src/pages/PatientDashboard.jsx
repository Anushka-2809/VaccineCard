import { useState, useEffect } from "react";

function PatientDashboard() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const [prescription, setPrescription] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("prescription"));
    if (saved) setPrescription(saved);
  }, []);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = {
      patientName: user.name,
      fileName: file.name,
      uploadedAt: new Date().toLocaleDateString(),
    };

    localStorage.setItem("prescription", JSON.stringify(data));
    setPrescription(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Patient Dashboard
        </h1>

        <p className="text-center mb-4 text-gray-600">
          Upload your prescription to avoid manual data entry
        </p>

        <input
          type="file"
          accept=".pdf,.jpg,.png"
          onChange={handleUpload}
          className="w-full mb-4"
        />

        {prescription && (
          <div className="bg-green-50 p-4 rounded-lg text-sm">
            <p><b>Uploaded File:</b> {prescription.fileName}</p>
            <p><b>Date:</b> {prescription.uploadedAt}</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default PatientDashboard;
