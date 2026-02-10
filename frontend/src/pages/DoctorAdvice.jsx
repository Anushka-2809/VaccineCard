import { useState } from "react";

export default function DoctorAdvice() {
  const [advice, setAdvice] = useState("");

  return (
    <div className="card">
      <h2>Doctor’s Advice</h2>

      <textarea
        placeholder="Enter advice for the patient..."
        value={advice}
        onChange={(e) => setAdvice(e.target.value)}
        rows={5}
      />

      <button className="btn-primary">Save Advice</button>
    </div>
  );
}
