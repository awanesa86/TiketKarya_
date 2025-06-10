import React from "react";
import { useNavigate } from "react-router-dom";

const Refund_Successful = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <main className="min-h-screen bg-[#FCEDDA] flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-2xl mx-auto text-center">

        {/* Success Icon */}
        <div className="mb-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/a698bdb8c61876e67b32bbd518c48fb0367d6e8b"
            alt="Success"
            className="w-28 h-28 mx-auto"
          />
        </div>

        {/* Success Message */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-6">
            Permintaan Refund Terkirim
          </h1>
          <div className="text-xl text-gray-700 leading-relaxed space-y-2">
            <p>Kami telah menerima permintaan Anda!</p>
            <p>
              Tim kami akan meninjau dan menghubungi Anda dalam waktu 3-5 hari kerja.
            </p>
            <p>
              Email konfirmasi telah dikirim ke{" "}
              <span className="font-medium">xxxxxxxx@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleReturnHome}
          className="bg-black text-white text-xl font-semibold px-12 py-4 rounded-[5px] hover:bg-opacity-90 transition-colors w-full max-w-md mx-auto"
        >
          Kembali ke Beranda
        </button>

        {/* Additional Info */}
        <div className="mt-8 text-sm text-gray-600">
          Ada pertanyaan?{" "}
          <a
            href="#"
            className="text-black underline hover:text-gray-700 transition-colors"
          >
            Hubungi customer support
          </a>
        </div>
      </div>
    </main>
  );
};

export default Refund_Successful;
