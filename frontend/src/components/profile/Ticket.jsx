import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShareProfile from "../profile/shareprofile/ShareProfile";
import Notification from "../profile/notification/Notification";
import MyWorkshop from "../profile/myworkshop/MyWorkshop";
import Points from "../profile/points/Points";
import Settings from "../profile/settings/Settings";

// Konfigurasi base URL dari environment variable
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

const Ticket = () => {
  const [mainTab, setMainTab] = useState("ticket");
  const [activeTab, setActiveTab] = useState("upcoming");
  const [userData, setUserData] = useState({
    firstName: "Nabila",
    lastName: "Sari",
    username: "nabilasari4",
    email: "nabilasari4@email.com",
    phone: "(+62)555-2304-324",
    country: "Indonesia",
    language: "Bahasa Indonesia",
    about: "",
    workshopsAttended: 4,
    forumReplies: 11,
    profileImage: "/img/profile.png",
  });

  // Ambil data pengguna dari localStorage saat komponen dimuat
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        if (parsedUserData && typeof parsedUserData === "object") {
          setUserData((prev) => ({
            ...prev,
            firstName: parsedUserData.firstName || "Nabila",
            lastName: parsedUserData.lastName || "Sari",
            username: parsedUserData.username || "nabilasari4",
            email: parsedUserData.email || "nabilasari4@email.com",
            phone: parsedUserData.phone || "(+62)555-2304-324",
            country: parsedUserData.country || "Indonesia",
            language: parsedUserData.language || "Bahasa Indonesia",
            about: parsedUserData.about || "",
            workshopsAttended: parsedUserData.workshopsAttended || 4,
            forumReplies: parsedUserData.forumReplies || 11,
            profileImage: parsedUserData.profileImage
              ? `${API_BASE_URL}${parsedUserData.profileImage}`
              : "/img/profile.png",
          }));
        }
      } catch (error) {
        console.error("Error parsing userData from localStorage:", error);
        localStorage.removeItem("userData"); // Hapus data korup
      }
    }
  }, []);

  return (
    <div className="bg-[#FCEDDA] min-h-screen text-[#000000] pt-[2px] pl-2 pr-24 pb-8">
      <div className="flex flex-col md:flex-row gap-10 mt-24">
        {/* Sidebar profil */}
        <aside className="md:w-1/3 flex flex-col items-center text-center">
          <div className="relative w-36 h-36">
            <img
              src={userData.profileImage}
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "/img/profile.png"; // Fallback jika gambar gagal dimuat
              }}
            />
            <img
              src="/img/badge.png"
              alt="Verified"
              className="absolute bottom-0 right-0 w-[50px] h-[50px]"
            />
          </div>

          <div className="mt-[30px] flex items-center gap-2">
            <h2 className="text-3xl font-bold">
              {userData.firstName} {userData.lastName}
            </h2>
          </div>
          <p className="text-lg text-[#696767]">@{userData.username}</p>

          <ShareProfile />

          <div className="mt-10 space-y-2 w-full max-w-full sm:max-w-[300px] px-4">
            <div className="flex justify-between w-full">
              <span className="font-medium">Workshop Attended</span>
              <span className="text-gray-500">
                {userData.workshopsAttended}
              </span>
            </div>
            <div className="flex justify-between w-full">
              <span className="font-medium">Forum Replies</span>
              <span className="text-gray-500">{userData.forumReplies}</span>
            </div>
          </div>

          <div className="mt-10 px-6 md:ml-15 text-left md:text-left flex flex-col items-center md:block">
            <h4 className="font-semibold mb-2">INTEREST</h4>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full">
              <span className="mt-1 bg-[#FFDEB5] px-2 py-1 rounded-full text-sm">
                Pottery
              </span>
              <span className="mt-1 bg-[#FFDEB5] px-2 py-1 rounded-full text-sm">
                Lifestyle & Home
              </span>
              <span className="mt-1 bg-[#FFDEB5] px-2 py-1 rounded-full text-sm">
                Painting
              </span>
            </div>
          </div>
        </aside>

        {/* Konten utama */}
        <section className="flex-1 px-4 md:px-0">
          <div className="border-b border-black mb-10">
            <ul className="flex gap-6 text-sm font-robotoMono overflow-x-auto scrollbar-hide">
              <li
                onClick={() => setMainTab("ticket")}
                className={`cursor-pointer pb-2 whitespace-nowrap ${
                  mainTab === "ticket" ? "border-b-2 border-black" : ""
                }`}
              >
                <strong>Ticket</strong>
              </li>
              <li
                onClick={() => setMainTab("notification")}
                className={`cursor-pointer pb-2 whitespace-nowrap ${
                  mainTab === "notification" ? "border-b-2 border-black" : ""
                }`}
              >
                <strong>Notification</strong>
              </li>
              <li
                onClick={() => setMainTab("workshop")}
                className={`cursor-pointer pb-2 whitespace-nowrap ${
                  mainTab === "workshop" ? "border-b-2 border-black" : ""
                }`}
              >
                <strong>My Workshop</strong>
              </li>
              <li
                onClick={() => setMainTab("karya")}
                className={`cursor-pointer pb-2 whitespace-nowrap ${
                  mainTab === "karya" ? "border-b-2 border-black" : ""
                }`}
              >
                <strong>Karya Points</strong>
              </li>
              <li
                onClick={() => setMainTab("settings")}
                className={`cursor-pointer pb-2 whitespace-nowrap ${
                  mainTab === "settings" ? "border-b-2 border-black" : ""
                }`}
              >
                <strong>Settings</strong>
              </li>
            </ul>
          </div>

          {/* ===== TICKET TAB CONTENT ===== */}
          {mainTab === "ticket" && (
            <>
              <div className="mb-4 mt-12">
                <ul className="flex gap-6 text-l font-semibold overflow-x-auto scrollbar-hide">
                  <li
                    className={`cursor-pointer pb-2 whitespace-nowrap ${
                      activeTab === "upcoming" ? "border-b-2 border-black" : ""
                    }`}
                    onClick={() => setActiveTab("upcoming")}
                  >
                    Upcoming
                  </li>
                  <li
                    className={`cursor-pointer pb-2 whitespace-nowrap ${
                      activeTab === "used" ? "border-b-2 border-black" : ""
                    }`}
                    onClick={() => setActiveTab("used")}
                  >
                    Used
                  </li>
                </ul>
              </div>

              {activeTab === "upcoming" ? (
                <div className="bg-[#FEE4C4] overflow-hidden flex md:flex-row flex-col">
                  <div className="w-40 md:w-40 h-full">
                    <img
                      src="/img/pict1.svg"
                      alt="Workshop"
                      className="w-[160px] h-40 object-cover"
                    />
                  </div>
                  <div className="flex-1 px-3 py-3 relative">
                    <h3 className="font-bold text-lg font-robotoMono">
                      Wheel Throwing for Beginners
                    </h3>
                    <p className="text-sm text-gray-700 mt-1">
                      Learn the basics of pottery on the wheel—from centering
                      clay to shaping your first bowl or cup. Ideal for
                      beginners looking to get their hands muddy!
                    </p>
                    <div className="mt-10 flex justify-between items-center text-sm text-gray-600">
                      <div className="flex gap-6">
                        <span className="flex items-center gap-1">
                          <img
                            src="/img/location.svg"
                            alt="iconL"
                            className="w-4 h-4"
                          />
                          Jakarta, Indonesia
                        </span>
                        <span className="flex items-center gap-1">
                          <img
                            src="/img/calender.svg"
                            alt="iconC"
                            className="w-4 h-4"
                          />
                          June 5, 2025
                        </span>
                      </div>
                      <Link
                        to="/ticket/1"
                        className="text-sm font-semibold text-black underline"
                      >
                        See Ticket
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  {/* CARD 1 */}
                  <div className="bg-[#FEE4C4] overflow-hidden flex md:flex-row flex-col">
                    <div className="w-40 md:w-40 h-full">
                      <img
                        src="/img/pict2.png"
                        alt="Workshop"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 px-3 py-3 relative">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg font-robotoMono">
                          Make Your Own Paper Wayang
                        </h3>
                        <div className="text-md font-bold text-gray-700 flex items-center gap-1">
                          <span>N/A</span>
                          <img
                            src="/img/starline.svg"
                            alt="My Icon"
                            className="mb-1 w-7 h-7 object-contain"
                          />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                        Learn the basics of Indonesian weaving on a mini loom
                        and create your own patterned piece...
                      </p>
                      <div className="mt-10 flex justify-between items-center text-sm text-gray-600">
                        <div className="flex gap-6">
                          <span className="flex items-center gap-1">
                            <img
                              src="/img/location.svg"
                              alt="iconL"
                              className="w-4 h-4"
                            />
                            Jakarta, Indonesia
                          </span>
                          <span className="flex items-center gap-1">
                            <img
                              src="/img/calender.svg"
                              alt="iconC"
                              className="w-4 h-4"
                            />
                            February 12, 2025
                          </span>
                        </div>
                        <a
                          href="#"
                          className="text-sm font-semibold text-black underline"
                        >
                          Give a Review
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2 */}
                  <div className="bg-[#FCEDDA] overflow-hidden flex md:flex-row flex-col">
                    <div className="w-40 md:w-40 h-full">
                      <img
                        src="/img/pict3.png"
                        alt="Workshop"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 px-3 py-3 relative">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg font-robotoMono">
                          Make Your Own Paper Wayang
                        </h3>
                        <div className="text-md font-bold text-gray-700 flex items-center gap-1">
                          <span>4/5</span>
                          <img
                            src="/img/star.svg"
                            alt="My Icon"
                            className="mb-1 w-7 h-7 object-contain"
                          />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                        Learn the basics of Indonesian weaving on a mini loom
                        and create your own patterned piece...
                      </p>
                      <div className="mt-10 flex justify-between items-center text-sm text-gray-600">
                        <div className="flex gap-6">
                          <span className="flex items-center gap-1">
                            <img
                              src="/img/location.svg"
                              alt="iconL"
                              className="w-4 h-4"
                            />
                            Rawamangun, East Jakarta
                          </span>
                          <span className="flex items-center gap-1">
                            <img
                              src="/img/calender.svg"
                              alt="iconC"
                              className="w-4 h-4"
                            />
                            April 07, 2025
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* == NOTIFICATION == */}
          {mainTab === "notification" && (
            <div>
              <Notification />
            </div>
          )}

          {/* == MY WORKSHOP == */}
          {mainTab === "workshop" && (
            <div>
              <MyWorkshop />
            </div>
          )}

          {/* == KARYA POINTS == */}
          {mainTab === "karya" && (
            <div>
              <Points />
            </div>
          )}

          {/* == SETTINGS == */}
          {mainTab === "settings" && (
            <div>
              <Settings />
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Ticket;
