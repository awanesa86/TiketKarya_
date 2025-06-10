import React, { useState } from "react";
import WorkshopReview from "./ViewWorkshopReview";
import ReviewForm from "./ReviewForm";

const InfoBox = ({ icon, text, highlight = false }) => (
  <div className="flex w-[255px] rounded-sm overflow-hidden">
    <div className="flex items-center justify-center w-[80px] bg-[#FF5126]">
      <img src={icon} alt="icon" className="w-7 h-7" />
    </div>
    <div
      className={`flex items-center px-4 py-4 text-sm font-medium w-full ${
        highlight ? "bg-[#FF570C] text-white" : "bg-[#FFE0B7] text-black"
      }`}
    >
      {text}
    </div>
  </div>
);

const ViewWorkshopDetail = () => {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="flex h-screen overflow-hidden font-Roboto">
      {/* Kiri: Gambar */}
      <div className="w-1/2 hidden md:block">
        <img
          src="/img/pict1.svg"
          alt="Workshop"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Kanan: Konten */}
      <div className="w-full md:w-1/2 bg-[#FCEDDA] overflow-y-auto p-6 md:p-10">
        {/* === TAB CONTENT === */}
        {activeTab === "review-form" ? (
          <div className="max-w-xl mx-auto mt-10">
            <ReviewForm onClose={() => setActiveTab("reviews")} />
          </div>
        ) : (
          <>
            {/* Judul & Deskripsi */}
            <h1 className="text-2xl md:text-3xl font-bold mt-20 mb-5">
              Wheel Throwing for Beginners
            </h1>
            <p className="text-sm md:text-base mb-4 text-justify">
              Learn the basics of pottery on the wheel in this beginner-friendly class...
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-[#FF570C] text-[40px]">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="text-sm font-semibold">(5.0)</span>
              <span className="text-xs underline text-gray-600 cursor-pointer ml-2">
                21 Reviews
              </span>
            </div>

            {/* Creator & Harga */}
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-2 bg-[#FFDEB5] rounded-full px-4 py-3">
                <img src="/img/icon_profil.svg" alt="creator" className="w-8 h-8" />
                <span className="font-medium text-sm">Tierra Ceramics</span>
              </div>
              <div className="flex overflow-hidden rounded-full text-[#2C2C2C] mr-8 text-xl font-bold">
                <div className="bg-[#FF5126] px-4 py-3 text-white text-xl flex items-center">Rp</div>
                <div className="bg-[#FFDEB5] px-5 py-3 tracking-wide">350,000</div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-6 mb-8 text-base font-xl">
              {["details", "benefits", "reviews"].map((tab) => (
                <div
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer pb-1 ${
                    activeTab === tab
                      ? "border-b-4 border-black text-black"
                      : "text-gray-500"
                  } capitalize`}
                >
                  {tab}
                </div>
              ))}
            </div>

            {activeTab === "details" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <InfoBox icon="/img/location_icon.svg" text="Jakarta, Indonesia" />
                  <InfoBox icon="/img/clock_icon.svg" text="3 Hours" />
                  <InfoBox icon="/img/calender_icon.svg" text="June 5, 2025" />
                  <InfoBox icon="/img/language_icon.svg" text="Bahasa Indonesia" />
                </div>

                <div className="mb-6">
                  <p className="font-semibold mb-1">Description :</p>
                  <p className="text-sm leading-relaxed text-justify">
                    Get your hands muddy and discover the basics of wheel-thrown pottery...
                  </p>
                </div>

                <div className="mb-12">
                  <p className="font-semibold mb-1">Location :</p>
                  <p className="text-sm font-bold">Tierra Ceramics Studio</p>
                  <p className="text-sm">Jl. Kemang Selatan VIII No. 15, Jakarta, Indonesia</p>
                </div>
              </>
            )}

            {activeTab === "benefits" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* What You'll Learn */}
                <div className="flex rounded-md overflow-hidden shadow-md">
                  <div className="bg-[#FF5126] w-16 md:w-20 flex items-start justify-center py-4">
                    <img src="/img/palette_icon.svg" alt="palette" className="w-6 md:w-10 mt-26" />
                  </div>
                  <div className="bg-[#FFE0B7] px-4 py-4 flex-1">
                    <h3 className="font-bold text-lg mb-2">What You’ll Learn</h3>
                    <ul className="text-sm list-disc list-inside space-y-1">
                      <li>How to prepare and center clay on the wheel</li>
                      <li>Basic throwing techniques</li>
                      <li>Firing of one finished piece</li>
                      <li>How to trim and refine</li>
                      <li>Tips on pottery care</li>
                    </ul>
                  </div>
                </div>

                {/* What's Included */}
                <div className="flex rounded-md overflow-hidden shadow-md">
                  <div className="bg-[#FF5126] w-16 md:w-20 flex items-start justify-center py-4">
                    <img src="/img/gift_icon.svg" alt="gift" className="w-6 md:w-10 mt-26" />
                  </div>
                  <div className="bg-[#FFE0B7] px-4 py-4 flex-1">
                    <h3 className="font-bold text-lg mb-2">What’s Included</h3>
                    <ul className="text-sm list-disc list-inside space-y-1">
                      <li>Pottery wheel & tools</li>
                      <li>Clay (2 pieces)</li>
                      <li>Firing 1 piece</li>
                      <li>Aprons, towels</li>
                      <li>Refreshments</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <WorkshopReview onWriteReview={() => setActiveTab("review-form")} />
            )}

            {/* BUY TICKET */}
            {activeTab !== "reviews" && (
              <div className="flex justify-center">
                <button className="bg-[#FF5126] text-white px-20 py-3 rounded-md text-sm font-bold shadow-md hover:bg-[#e65000] transition">
                  BUY TICKET
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ViewWorkshopDetail;
