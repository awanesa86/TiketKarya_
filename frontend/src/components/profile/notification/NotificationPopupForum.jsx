import React from "react";

const NotificationPopupForum = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/20 z-50 flex justify-end items-start pt-10"
    >
      <div className="w-[600px] h-[550px] bg-[#FCEDDA] mt-6 shadow-lg p-6 animate-slide-in">
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
        <div className="flex gap-4 mt-12 mb-8">
          <div className="relative w-14 h-14 shrink-0 overflow-hidden">
            <img
              src="./img/newforum.png"
              alt="forum icon"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-xl text-[#000000]">New Forum Reply</h3>
            <p className="text-xs mt-2 text-[#000000]">14:00 | April, 11th, 2025</p>
          </div>
        </div>

        {/* Body */}
        <div>
        <div className="text-md ml-18 mr-12 text-[#000000] space-y-6">
          <p>
            Someone just replied to your post in the <strong>"What should I bring to a pottery workshop?"</strong> thread.
            Check it out and join the conversation.
          </p>
        </div>
          {/* Balasan */}
          <div className="bg-[#FFDEB5] mr-4 mt-8 mb-10 ml-[-18] px-4 py-3 flex gap-3 items-start">
            <img
              src="./img/ellipse.png"
              alt="Clay With Tama"
              className="w-10 h-10 rounded-full object-cover mt-1"
            />
            <div>
              <p className="font-bold">Clay With Tama</p>
              <p>
                Hi Nabila! I help assist at that workshop — we’ve got all the materials covered. Bring a water bottle
                and arrive 10 mins early so you can settle in. See you there! 👋
              </p>
            </div>
          </div>

          {/* Tombol */}
          <div className="text-center">
            <button className="bg-[#2B2B2B] text-white px-8 py-[10px] rounded-[5px] font-semibold hover:bg-[#FFDEB5] hover:text-[#2B2B2B] transition-colors duration-300">
              View Replies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopupForum;
