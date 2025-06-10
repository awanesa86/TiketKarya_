import React from "react";

const NotificationPopup1 = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/20 z-50 flex justify-end items-start pt-10"
      onClick={onClose} // Tutup saat klik di luar
    >
      <div
        className="w-[600px] h-[550px] bg-[#FCEDDA] mt-6 shadow-lg p-6 animate-slide-in"
        onClick={(e) => e.stopPropagation()} // Biar klik di card gak nutup
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-sm font-mono font-bold tracking-wide">Notification</h2>
          <button
            onClick={onClose}
            className="text-sm font-mono tracking-wide hover:text-black"
          >
            Close - X
          </button>
        </div>

        {/* Content */}
        <div className="flex gap-4 mt-10 mb-8">
          <div className="relative w-14 h-14 shrink-0 overflow-hidden">
            <img
              src="./img/frame1.png"
              alt="notif"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-xl">Workshop Event Cancelled!</h3>
            <p className="text-xs mt-2 text[#000000]">
              14:00 | April, 11th, 2025
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="text-md ml-18 mr-18 text-[#000000] space-y-4">
          <p>
            We regret to inform you that the <strong>"Make Your Own Paper Wayang"</strong> scheduled for 14:00 on February 12th, 2025 has been cancelled. We apologize for the inconvenience and appreciate your understanding. Stay tuned for updates on future events!
          </p>
          <p>
            If you have already registered, you are eligible for a full refund. Please click the button below to start the refund process.
          </p>

          <div className="text-center">
            <button className="bg-[#2B2B2B] text-white px-8 py-[10px] rounded-[5px] font-semibold hover:bg-[#FFDEB5] hover:text-[#2B2B2B] transition-colors duration-300">
              Request Refund
            </button>
          </div>

          <p>
            Thank you for your understanding and support. Stay tuned for updates on future events!
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default NotificationPopup1;
