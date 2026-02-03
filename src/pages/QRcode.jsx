const QRCode = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-indigo-700 mb-4">
        QR Code Verification
      </h1>

      <div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-lg">
        QR CODE
      </div>
    </div>
  );
};

export default QRCode;
