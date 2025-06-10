import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TicketsDetail = () => {
  const navigate = useNavigate();

  const handleRefundClick = () => {
    navigate('/refund');
  };

  return (
    <div className="bg-[#FCEDDA] min-h-screen font-Roboto px-6 md:px-20 py-6">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="mt-14 mb-6 -ml-8 hover:underline">
        <img src="/img/arrow_back.svg" alt="Calender Icon" className="w-8 h-8" />
      </button>

      {/* Date & Title */}
      <div className="text-xs flex items-center gap-2 mb-1">
        <img src="/img/calender.svg" alt="Calender Icon" className="w-4 h-4" />
        June 5, 2025
      </div>
      <h1 className="text-2xl font-bold mb-6">Wheel Throwing for Beginners</h1>

      {/* Wrapper Gambar + InfoBox */}
      <div className="flex flex-col md:flex-row gap-6 mb-4 items-stretch">
        {/* KIRI: Gambar saja */}
        <div className="md:w-1/2">
          <img
            src="/img/WD.png"
            alt="Workshop"
            className="w-full h-full object-cover"
            style={{ aspectRatio: "2/1", objectFit: "cover" }}
          />
        </div>

        {/* KANAN: InfoBox */}
        <div className="md:w-1/2 center grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InfoBox
            icon="/img/calender.svg"
            title="DATE AND TIME"
            content={`June 5, 2025\nThursday | 10:00`}
          />
          <InfoBox
            icon="/img/clock.svg"
            title="DURATION"
            content="3 hours"
          />
          <InfoBox
            icon="/img/location.svg"
            title="PLACE"
            content="Jakarta, Indonesia"
          />
          <InfoBox
            icon="/img/ticket.svg"
            title="1 TICKETS"
            content="Email eTicket"
          />
        </div>
      </div>

      {/* Tombol */}
      <Link to="/workshop-detail">
        <button className="bg-[#FF570C] rounded-[5px] text-white px-3 py-1 text-[10px]">
          View Workshop Details
        </button>
      </Link>

      {/* Section: Ticket Detail */}
      <div className="mt-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Ticket (1) total: Rp. 350,000</h2>
          <button
            onClick={handleRefundClick}
            className="bg-[#FF570C] text-white text-sm px-[77px] py-2 rounded-[5px] hover:bg-opacity-90 mt-2 md:mt-0"
          >
            Refund Ticket
          </button>
        </div>

        {/* Ticket Box */}
        <div className="bg-[#FEE4C4] rounded-sm overflow-hidden flex flex-col md:flex-row">
          {/* Left Side: Ticket Info */}
          <div className="flex-1 w-full">
            <div className="flex items-center gap-2 mt-8 ml-8 mb-8 font-bold text-base">
              <img src="/img/ticket.svg" alt="Ticket Icon" className="w-7 h-7" />
              TICKET 1
            </div>

            <div className="ml-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
              <div>
                <p className="text-[#000000]">First Name</p>
                <p className="text-[#000000]">Nabila</p>
              </div>
              <div>
                <p className="text-[#000000]">Last Name</p>
                <p className="text-[#000000]">Sari</p>
              </div>
              <div>
                <p className="text-[#000000]">Email</p>
                <p className="text-[#000000] break-words">nabilasari4@gmail.com</p>
              </div>
              <div>
                <p className="text-[#000000]">Phone Number</p>
                <p className="text-[#000000]">(+62)555-2304-324</p>
              </div>
              <div>
                <p className="text-[#000000]">Code</p>
                <p className="font-bold">MRCE-32945</p>
              </div>
            </div>
          </div>

          {/* Right Side: QR Code */}
          <div className="bg-[#FF570C] flex items-center justify-center px-2 py-10 md:w-1/5">
            <img
              src="/img/qrcode_sementara.svg"
              alt="QR Code"
              className="w-24 h-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoBox = ({ icon, title, content }) => (
  <div className="bg-[#FEE4C4] p-4 shadow-md rounded-sm">
    <div className="mt-4 flex gap-6 ml-2">
      <img src={icon} alt={`${title} icon`} className="w-12 h-12 mt-2" />
      <div>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-base whitespace-pre-line">{content}</p>
      </div>
    </div>
  </div>
);

export default TicketsDetail;
