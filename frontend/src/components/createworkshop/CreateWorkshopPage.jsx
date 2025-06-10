// src/CreateWorkshop/CreateWorkshopPage.jsx
import React from 'react';
import SidebarMenu from './SidebarMenu';
import UploadCover from './UploadCover';
import GeneralInformation from './GeneralInformation';
import LocationAndTime from './LocationAndTime';
import TicketSection from './TicketSection';

const CreateWorkshopPage = () => {
  return (
    <div className="flex bg-[#FCEDDA] pl-6 pt-14 min-h-screen">
      <SidebarMenu />

      <div className="flex-1 p-8 space-y-16 overflow-y-auto">
        <div id="upload">
          <UploadCover />
        </div>
        <div id="general">
          <GeneralInformation />
        </div>
        <div id="location">
          <LocationAndTime />
        </div>
        <div id="ticket">
          <TicketSection />
        </div>
      </div>
    </div>
  );
};

export default CreateWorkshopPage;
