import React, { useState } from 'react';
import NotificationPopup from "../notification/NotificationPopup1";
import NotificationPopupForum from "../notification/NotificationPopupForum"; // ⬅️ Tambahkan ini

const NotificationCard1 = ({ onSeeMore }) => (
  <div className="bg-[#FEE4C4] p-4 flex gap-4 w-full">
    <div className="relative w-12 h-12 shrink-0">
      <img src="./img/frame1.png" alt="notif" className="w-full h-full object-cover" />
    </div>
    <div className="flex justify-between items-start w-full gap-4">
      <div className="flex-1">
        <h3 className="font-bold text-lg">Workshop Event Cancelled!</h3>
        <p className="text-sm text-gray-800 mt-1">
          We regret to inform you that the <strong>"Make Your Own Paper Wayang"</strong> scheduled
          for 14:00 on September 11th, 2001 has been cancelled.
        </p>
      </div>
      <div className="flex flex-col items-end min-w-fit text-sm text-gray-700 whitespace-nowrap">
        <p className="mb-8">14:00 | April, 11th, 2025</p>
        <button onClick={onSeeMore} className="text-black font-semibold underline">See More</button>
      </div>
    </div>
  </div>
);

const NotificationCard2 = ({ onSeeMore }) => (
  <div className="bg-[#FCEDDA] p-4 flex gap-4 w-full">
    <div className="relative w-12 h-12 shrink-0">
      <img src="./img/newforum.png" alt="notif" className="w-full h-full object-cover" />
    </div>
    <div className="flex justify-between items-start w-full gap-4">
      <div className="flex-1">
        <h3 className="font-bold text-lg">New Forum Reply</h3>
        <p className="text-sm text-gray-800 mt-1">
          You’ve received a new reply in your thread <strong>"Best materials for beginner pottery?"</strong>
        </p>
      </div>
      <div className="flex flex-col items-end text-sm text-gray-700 whitespace-nowrap">
        <p className="mb-8">12:00 | April, 30th, 2024</p>
        <button onClick={onSeeMore} className="text-black font-semibold underline">See More</button>
      </div>
    </div>
  </div>
);

const UnseenNotification = ({ onSeeMoreWorkshop, onSeeMoreForum }) => (
  <div className="space-y-2">
    <NotificationCard1 onSeeMore={onSeeMoreWorkshop} />
    <NotificationCard2 onSeeMore={onSeeMoreForum} />
  </div>
);

//
// ========== SEEN NOTIFICATIONS ==========
//

const NotificationCard3 = () => (
  <div className="bg-[#FEE4C4] p-4 flex gap-4 w-full">
    <div className="relative w-12 h-12 shrink-0">
      <img src="./img/frame2.png" alt="notif" className="w-full h-full object-cover" />
    </div>
    <div className="flex justify-between items-start w-full gap-4">
      <div className="flex-1">
        <h3 className="font-bold text-lg">Workshop Reminder (1day before)</h3>
        <p className="text-sm text-gray-800 mt-1">
          Just a reminder that <strong>'Traditional Herbal Soap Making'</strong> starts tomorrow at 10:00 AM in Jakarta.
        </p>
      </div>
      <div className="flex flex-col items-end text-sm text-gray-700 whitespace-nowrap">
        <p className="mb-8">10:00 | August, 9th, 2024</p>
        <a href="#" className="text-black font-semibold underline">See More</a>
      </div>
    </div>
  </div>
);

const NotificationCard4 = () => (
  <div className="bg-[#FCEDDA] p-4 flex gap-4 w-full">
    <div className="relative w-12 h-12 shrink-0">
      <img src="./img/draft.png" alt="notif" className="w-full h-full object-cover" />
    </div>
    <div className="flex justify-between items-start w-full gap-4">
      <div className="flex-1">
        <h3 className="font-bold text-lg">Draft Saved</h3>
        <p className="text-sm text-gray-800 mt-1">
          Your workshop listing draft for <strong>'DIY Wood Sign Lettering'</strong> is saved.
        </p>
      </div>
      <div className="flex flex-col items-end text-sm text-gray-700 whitespace-nowrap">
        <p className="mb-8">10:00 | August, 6th, 2024</p>
        <a href="#" className="text-black font-semibold underline">See More</a>
      </div>
    </div>
  </div>
);

const NotificationCard5 = () => (
  <div className="bg-[#FEE4C4] p-4 flex gap-4 w-full">
    <div className="relative w-12 h-12 shrink-0">
      <img src="./img/frame1.png" alt="notif" className="w-full h-full object-cover" />
    </div>
    <div className="flex justify-between items-start w-full gap-4">
      <div className="flex-1">
        <h3 className="font-bold text-lg">Ticket Purchase Confirmation</h3>
        <p className="text-sm text-gray-800 mt-1">
          Thanks for signing up! Your spot for <strong>'Traditional Herbal Soap Making'</strong> on August 10th, 2024 in Jakarta is confirmed.
        </p>
      </div>
      <div className="flex flex-col items-end text-sm text-gray-700 whitespace-nowrap">
        <p className="mb-8">14:00 | July, 11th, 2025</p>
        <a href="#" className="text-black font-semibold underline">See More</a>
      </div>
    </div>
  </div>
);

const NotificationCard6 = () => (
  <div className="bg-[#FCEDDA] p-4 flex gap-4 w-full">
    <div className="relative w-12 h-12 shrink-0">
      <img src="./img/newforum.png" alt="notif" className="w-full h-full object-cover" />
    </div>
    <div className="flex justify-between items-start w-full gap-4">
      <div className="flex-1">
        <h3 className="font-bold text-lg">New Forum Reply</h3>
        <p className="text-sm text-gray-800 mt-1">
          You’ve received a new reply in your thread <strong>"Best materials for beginner pottery?"</strong>
        </p>
      </div>
      <div className="flex flex-col items-end text-sm text-gray-700 whitespace-nowrap">
        <p className="mb-8">12:00 | April, 30th, 2024</p>
        <a href="#" className="text-black font-semibold underline">See More</a>
      </div>
    </div>
  </div>
);

const SeenNotification = () => (
  <div className="space-y-2">
    <NotificationCard3 />
    <NotificationCard4 />
    <NotificationCard5 />
    <NotificationCard6 />
  </div>
);

const Notification = () => {
  const [tab, setTab] = useState('unseen');
  const [showPopup, setShowPopup] = useState(false);
  const [showForumPopup, setShowForumPopup] = useState(false); // ⬅️ Tambahkan ini

  const handleSeeMoreWorkshop = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSeeMoreForum = () => {
    setShowForumPopup(true);
  };

  const handleCloseForumPopup = () => {
    setShowForumPopup(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 relative">
      {/* Tabs */}
      <div className="mb-4 flex space-x-8">
        <button
          onClick={() => setTab('unseen')}
          className={`font-semibold border-b-2 ${tab === 'unseen' ? 'border-black' : 'border-transparent'}`}
        >
          Unseen
        </button>
        <button
          onClick={() => setTab('seen')}
          className={`font-semibold border-b-2 ${tab === 'seen' ? 'border-black' : 'border-transparent'}`}
        >
          Seen
        </button>
      </div>

      {/* Content */}
      {tab === 'unseen' && (
        <UnseenNotification
          onSeeMoreWorkshop={handleSeeMoreWorkshop}
          onSeeMoreForum={handleSeeMoreForum}
        />
      )}
      {tab === 'seen' && <SeenNotification />}

      {/* Popups */}
      {showPopup && <NotificationPopup onClose={handleClosePopup} />}
      {showForumPopup && <NotificationPopupForum onClose={handleCloseForumPopup} />}
    </div>
  );
};

export default Notification;
