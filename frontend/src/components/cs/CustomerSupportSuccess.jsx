import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../layout/Navbar';

const CustomerSupportSuccess = () => {
  const navigate = useNavigate();

  const handleReturnToHome = () => {
    navigate('/');
  };

  return (
    <main className="flex flex-col min-h-screen bg-[#FAE6D1]">
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <div className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="text-center">
          {/* Ikon Centang */}
          <svg
            className="mx-auto h-24 w-24 text-black mb-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          {/* Judul */}
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            Your message has been received
          </h1>

          {/* Paragraf */}
          <p className="text-lg text-black mt-4 mb-10 max-w-xl mx-auto leading-relaxed">
            Thanks for contacting us! we’ve received your message. check on your email xxxxxxx@gmail.com for confirmation.
          </p>

          {/* Tombol */}
          <button
  onClick={handleReturnToHome}
  className="bg-black text-white text-lg font-semibold py-3 px-28 rounded-[50px] hover:bg-gray-800 transition-colors"
>
  Return to home
</button>
        </div>
      </div>
    </main>
  );
};

export default CustomerSupportSuccess;
