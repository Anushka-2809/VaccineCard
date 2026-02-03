const VaccinationRecord = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-indigo-700 mb-4">
        Vaccination Records
      </h1>

      <table className="w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="p-3">Vaccine</th>
            <th className="p-3">Dose</th>
            <th className="p-3">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="p-3">COVID-19</td>
            <td className="p-3">1st</td>
            <td className="p-3">12-06-2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VaccinationRecord;
