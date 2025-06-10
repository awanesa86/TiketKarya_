import React, { useState } from 'react';

const TicketSection = () => {
  const [ticketType, setTicketType] = useState('paid');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div className="p-6">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <img src="/icons/ticket.png" alt="Ticket Icon" className="w-6 h-6" />
        Ticket
      </h2>

      {/* Ticket Type: Paid / Free */}
      <div className="flex gap-4 mb-6">
        {/* Paid */}
        <label
          className={`mr-2 flex items-center px-5 py-4 border rounded cursor-pointer text-left grow max-w-[467px] relative ${
            ticketType === 'paid'
              ? 'bg-[#FA5A1E] text-white border-[#FA5A1E]'
              : 'bg-transparent border-[#FA5A1E] text-black'
          }`}
        >
          <span
            className={`w-4 h-4 inline-block mr-2 rounded-full border-2 ${
              ticketType === 'paid'
                ? 'border-white bg-white before:block before:w-2 before:h-2 before:rounded-full before:bg-[#FA5A1E] before:mx-auto before:my-[3px]'
                : 'border-[#FA5A1E]'
            }`}
          ></span>
          <input
            type="radio"
            name="ticketType"
            value="paid"
            checked={ticketType === 'paid'}
            onChange={() => setTicketType('paid')}
            className="absolute opacity-0 w-0 h-0"
          />
          Paid
        </label>

        {/* Free */}
        <label
          className={`flex items-center px-5 py-4 border rounded cursor-pointer text-left grow max-w-[467px] relative ${
            ticketType === 'free'
              ? 'bg-[#FA5A1E] text-white border-[#FA5A1E]'
              : 'bg-transparent border-[#FA5A1E] text-black'
          }`}
        >
          <span
            className={`w-4 h-4 inline-block mr-2 rounded-full border-2 ${
              ticketType === 'free'
                ? 'border-white bg-white before:block before:w-2 before:h-2 before:rounded-full before:bg-[#FA5A1E] before:mx-auto before:my-[3px]'
                : 'border-[#FA5A1E]'
            }`}
          ></span>
          <input
            type="radio"
            name="ticketType"
            value="free"
            checked={ticketType === 'free'}
            onChange={() => setTicketType('free')}
            className="absolute opacity-0 w-0 h-0"
          />
          Free
        </label>
      </div>

      {/* Quantity & Price */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium mb-1">Quantity</label>
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full bg-[#E8DCCF] border border-black rounded px-3 py-2"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Price"
            value={price}
            onChange={(e) => {
              const onlyNums = e.target.value.replace(/[^0-9]/g, '');
              setPrice(onlyNums);
            }}
            className="w-full bg-[#E8DCCF] border border-black rounded px-3 py-2 appearance-none"
            disabled={ticketType === 'free'}
          />
        </div>
      </div>

      {/* Sale Date Section */}
      <div>
        <h3 className="text-xl font-semibold mb-1">Sale date</h3>
        <p className="text-sm text-gray-600 mb-4">
          Set the sale time when your audience is able to purchase the tickets
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Start date</label>
            <input
              type="date"
              className="w-full bg-[#E8DCCF] border border-black rounded px-3 py-2"
            />
          </div>

          {/* Start Time */}
          <div>
            <label className="block text-sm font-medium mb-1">Start time</label>
            <input
              type="time"
              className="w-full bg-[#E8DCCF] border border-black rounded px-3 py-2"
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-medium mb-1">End date</label>
            <input
              type="date"
              className="w-full bg-[#E8DCCF] border border-black rounded px-3 py-2"
            />
          </div>

          {/* End Time */}
          <div>
            <label className="block text-sm font-medium mb-1">End time</label>
            <input
              type="time"
              className="w-full bg-[#E8DCCF] border border-black rounded px-3 py-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSection;
