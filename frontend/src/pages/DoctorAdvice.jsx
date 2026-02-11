import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DoctorAdvice() {
  const [advice, setAdvice] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    if (!advice.trim()) {
      alert("Please enter advice before saving.");
      return;
    }

    alert("Advice saved successfully!");
    navigate("/doctor-dashboard");
  };

  return (
    <div className="car">
      <h2>Doctor’s Advice</h2>

      <textarea
        placeholder="Enter advice for the patient..."
        value={advice}
        onChange={(e) => setAdvice(e.target.value)}
        rows={5}
      />

      <button className="btn-primary" onClick={handleSave}>
        Save Advice
      </button>
    </div>
  );
}
