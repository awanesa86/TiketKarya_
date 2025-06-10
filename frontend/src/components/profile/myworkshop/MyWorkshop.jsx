import React, { useState } from 'react';

const PublishedContent = () => (
  <div className="text-center mt-20">
    <p className="font-semibold text-lg">
      You don’t have any published workshops yet.
    </p>
    <p className="text-md mt-2">
      Continue your draft or create a new one to get started!
    </p>
  </div>
);

const DraftContent = () => (
  <div className="text-center mt-20">
    <p className="font-semibold text-lg">
      You have no draft workshops yet.
    </p>
    <p className="text-md mt-2">
      Start drafting your ideas and publish them when you're ready!
    </p>
  </div>
);

const MyWorkshop = () => {
  const [tab, setTab] = useState('published');

  return (
    <div className="relative w-full max-w-4xl ml-[-15px] mt-4 px-4">
      {/* Tabs kiri */}
      <div className="flex space-x-8 border-black mt-12 mb-2">
        <button
          onClick={() => setTab('published')}
          className={`pb-2 font-semibold border-b-2 ${
            tab === 'published' ? 'border-black' : 'border-transparent'
          }`}
        >
          Published
        </button>
        <button
          onClick={() => setTab('draft')}
          className={`pb-2 font-semibold border-b-2 ${
            tab === 'draft' ? 'border-black' : 'border-transparent'
          }`}
        >
          Draft
        </button>
      </div>

      {/* Content */}
      {tab === 'published' && <PublishedContent />}
      {tab === 'draft' && <DraftContent />}

      {/* Floating button */}
      <div className="mt-36 flex justify-end">
  <button className="bg-[#2B2B2B] text-[#FCEDDA] px-4 py-2 rounded-[5px] flex items-center gap-2 shadow-md">
    Create Workshop 
    <img src="/img/plusicon.svg" alt="plus icon" className="w-5 h-5" />
  </button>
</div>

    </div>
  );
};

export default MyWorkshop;
