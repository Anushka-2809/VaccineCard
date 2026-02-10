export default function ScanPrescription() {
  return (
    <div className="card">
      <h2>Prescription Review</h2>

      <img
  src="/prescription.png"
  alt="Prescription"
  className="prescription-img"
/>

      <p>Prescription uploaded by patient.</p>

      <button className="btn-primary">Proceed to Advice</button>
    </div>
  );
}
