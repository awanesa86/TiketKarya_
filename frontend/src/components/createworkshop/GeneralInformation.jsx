import React, { useState } from 'react';

const WorkshopDetailsSingleCard = () => {
  const [selectedCategory, setSelectedCategory] = useState('Lifestyle & Home');
  const [albumImages, setAlbumImages] = useState([]);

  // State untuk index yang sedang di hover, null kalau ga ada
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleAlbumUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setAlbumImages(prev => [...prev, ...imageUrls]);
  };

  const handleDeleteImage = (indexToDelete) => {
    setAlbumImages(prev => prev.filter((_, idx) => idx !== indexToDelete));
  };

  return (
    <div className=" p-6 text-black space-y-8">
      {/* General Information */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <img src="/img/icon_alert.svg" alt="Info Icon" className="w-8 h-8" />
          General Information
        </h2>

        {/* Name Field */}
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Terrarium Jar : Little Gardens Indoors"
            className="w-full bg-[#E8DCCF] border border-black rounded px-4 py-2 text-base"
          />
        </div>

        {/* Description Field */}
        <div>
          <label className="block text-lg font-semibold mb-1">
            Description
          </label>
          <p className="text-sm text-gray-700 mb-2 ">
            Provide essential workshop details
          </p>
          <textarea
            rows={6}
            placeholder="Enter description here..."
            className="w-full bg-[#E8DCCF] border border-black rounded px-4 py-2 text-base"
          />
        </div>
      </div>

      {/* Category and Album */}
      <div>
        {/* Category */}
        <div className="mb-8">
          <label className="block text-2xl font-bold mb-1">Category</label>
          <p className="text-sm text-gray-700 mb-2">
            Choose the category for your workshop
          </p>
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none w-full border border-black rounded px-12 py-3 bg-[#E8DCCF] text-base text-gray-800 cursor-pointer"
            >
              <option value="Lifestyle & Home">Lifestyle & Home</option>
              <option value="Art & Design">Art & Design</option>
              <option value="Food & Drink">Food & Drink</option>
              <option value="Business & Career">Business & Career</option>
            </select>
            {/* Icon di kiri */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <img src="/img/icon_home.svg" alt="Home Icon" className="w-5 h-5" />
            </div>
            {/* Arrow kanan */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <img src="/img/icon_arrow_down.svg" alt="Arrow Down" className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Album */}
        <div>
          <label className="block text-2xl font-bold mb-1">Album</label>
          <p className="text-sm text-gray-700 mb-2">
            Upload images for your workshop
          </p>
          <div className="flex flex-wrap gap-4">
            {/* Upload Button */}
            <label className="w-24 h-24 border border-black flex items-center justify-center text-4xl text-black rounded cursor-pointer hover:bg-[#FF5126] hover:text-white transition">
              +
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleAlbumUpload}
                className="hidden"
              />
            </label>

            {/* Preview Images */}
            {albumImages.map((url, index) => (
              <div
                key={index}
                className="w-24 h-24 border border-black rounded overflow-hidden relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={url} alt={`Album ${index}`} className="w-full h-full object-cover" />

                {/* Tombol hapus, muncul saat hover */}
                {hoveredIndex === index && (
                  <button
                    onClick={() => handleDeleteImage(index)}
                    className="absolute top-1 right-1 bg-black bg-opacity-70 text-white rounded-full p-1 hover:bg-red-600 transition"
                    aria-label="Delete image"
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopDetailsSingleCard;
