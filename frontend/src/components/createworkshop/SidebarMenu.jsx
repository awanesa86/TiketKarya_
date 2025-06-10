// src/CreateWorkshop/SidebarMenu.jsx
import React from 'react';

const SidebarMenu = () => {
  const handleScrollTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-24 h-[calc(90vh-6rem)] w-64 bg-[#FFDEB5] p-6 flex-shrink-0 rounded-[10px] shadow-lg overflow-auto">
      <h2 className="font-bold text-xl mb-4 text-gray-900">Create an Event</h2>

      <div className="text-sm mb-4 p-3 rounded">
        <p className="text-gray-700">Last Updated</p>
        <p className="font-bold text-black">Monday, April 07 | 06:42 AM</p>
        <p className="mt-2 text-gray-700">Status</p>
        <p className="font-bold text-black">Draft</p>
      </div>

      <div className="mt-38 space-y-6 text-sm">
        <div>
          <p className="font-bold text-gray-800 mb-2 uppercase text-xs tracking-wider">
            Event Information
          </p>
          <div className="pl-2 space-y-2">
            <p
              onClick={() => handleScrollTo('upload')}
              className="cursor-pointer transition-colors font-medium text-gray-600 hover:text-black"
            >
              Upload Cover
            </p>
            <p
              onClick={() => handleScrollTo('general')}
              className="cursor-pointer transition-colors font-medium text-gray-600 hover:text-black"
            >
              General Information
            </p>
            <p
              onClick={() => handleScrollTo('location')}
              className="cursor-pointer transition-colors font-medium text-gray-600 hover:text-black"
            >
              Location and Time
            </p>
            <p
              onClick={() => handleScrollTo('ticket')}
              className="cursor-pointer transition-colors font-medium text-gray-600 hover:text-black"
            >
              Ticket
            </p>
          </div>

          <div className="border-b border-black my-4" />
        </div>

        <div>
          <p className="font-bold text-gray-800 mb-2 uppercase text-xs tracking-wider">
            Publish Event
          </p>
          <div className="pl-2 space-y-2">
            <p
              onClick={() => handleScrollTo('review')}
              className="cursor-pointer transition-colors font-medium text-gray-600 hover:text-black"
            >
              Review and Publish
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
