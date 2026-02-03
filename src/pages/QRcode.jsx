const QRcode = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          QR Verification
        </h1>

        <div className="w-40 h-40 bg-gray-200 mx-auto flex items-center justify-center rounded-lg">
          QR CODE
        </div>

        <p className="mt-4 text-gray-600">
          Scan to verify vaccination record
        </p>
      </div>
    </div>
  );
};

export default QRcode;
