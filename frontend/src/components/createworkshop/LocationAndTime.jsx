import React, { useState } from 'react';
import regionData from '../../data/region-indonesia.json'; // Pastikan path file ini benar

const LocationAndTime = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const provinces = Object.keys(regionData);
  const cities = selectedProvince ? regionData[selectedProvince] : [];

  const selectedCityData =
    selectedProvince && selectedCity
      ? cities.find((c) => c.city === selectedCity)
      : null;

  const mapLat = selectedCityData ? selectedCityData.lat : -6.9147; // default Bandung
  const mapLng = selectedCityData ? selectedCityData.lng : 107.6098;
  const bbox = `${mapLng - 0.02},${mapLat - 0.02},${mapLng + 0.02},${mapLat + 0.02}`;

  return (
    <div className="p-6">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <img src="/icons/location.png" alt="Location Icon" className="w-6 h-6" />
        Location and time
      </h2>

      {/* === LOCATION SECTION === */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-1">Location</h3>
        <p className="text-sm text-gray-600 mb-4">
          You can choose the location or pinpoint it on the map!
        </p>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Form Input */}
          <div className="flex-1 space-y-4">
            {/* Address */}
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                placeholder="Address"
                className="w-full bg-[#E8DCCF] border border-black rounded px-3 py-2 focus:border-black"
              />
            </div>

            {/* Region (Indonesia only) */}
            <div>
              <label className="block text-sm font-medium mb-1">Region</label>
              <select
                className="w-full border border-black rounded px-3 py-2 bg-[#E8DCCF]"
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setSelectedProvince('');
                  setSelectedCity('');
                }}
              >
                <option value="" disabled hidden>
                  Select Region
                </option>
                <option value="Indonesia">Indonesia</option>
              </select>
            </div>

            {/* Province */}
            <div>
              <label className="block text-sm font-medium mb-1">Province</label>
              <select
                className="w-full border border-black rounded px-3 py-2 bg-[#E8DCCF]"
                value={selectedProvince}
                onChange={(e) => {
                  setSelectedProvince(e.target.value);
                  setSelectedCity('');
                }}
                disabled={!selectedCountry}
              >
                <option value="">Select Province</option>
                {provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <select
                className="w-full border border-black rounded px-3 py-2 bg-[#E8DCCF]"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={!selectedProvince}
              >
                <option value="">Select City</option>
                {cities.map((item, index) => (
                  <option key={index} value={item.city}>
                    {item.city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Map */}
          <div className="flex-1">
            <div className="w-full h-[300px] rounded overflow-hidden border relative">
              <iframe
                title="Map"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&marker=${mapLat},${mapLng}&layer=mapnik`}
                className="w-full h-full"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* === TIME SECTION === */}
      <div>
        <h3 className="text-xl font-semibold mb-1">Time</h3>
        <p className="text-sm text-gray-600 mb-4">
          Choose the start time and end time for your event
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Time Zone (manual input) */}
          <div>
            <label className="block text-sm font-medium mb-1">Time Zone</label>
            <input
              type="text"
              placeholder="e.g. WIB (UTC+7)"
              className="w-full bg-[#E8DCCF] border border-black rounded px-3 py-2"
              value={timeZone}
              onChange={(e) => setTimeZone(e.target.value)}
            />
          </div>

          {/* Event Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Event Date</label>
            <input
              type="date"
              className="w-full bg-[#E8DCCF] border border-black rounded px-3 py-2"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>

          {/* Start Time */}
          <div>
            <label className="block text-sm font-medium mb-1">Start Time</label>
            <input
              type="time"
              className="w-full bg-[#E8DCCF] border border-black rounded px-3 py-2"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>

          {/* End Time */}
          <div>
            <label className="block text-sm font-medium mb-1">End Time</label>
            <input
              type="time"
              className="w-full bg-[#E8DCCF] border border-black rounded px-3 py-2"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAndTime;
