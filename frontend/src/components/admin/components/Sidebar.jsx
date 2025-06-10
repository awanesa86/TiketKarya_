import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import SidebarSection from "./SidebarSection";

const Sidebar = () => {
  const navigate = useNavigate();

  const [sections] = useState([
    {
      title: "WORKSHOPS",
      items: [
        { name: "Workshop List", path: "workshop-list" },
        { name: "Workshop Submissions", path: "workshop-submissions" },
      ],
    },
    {
      title: "PAYMENTS",
      items: [
        { name: "Order Request", path: "order-request" },
        { name: "Refund Request", path: "refund-request" },
      ],
    },
    {
      title: "OTHER FEATURES",
      items: [
        { name: "Forum List", path: "forum-list" },
        { name: "Creative Corner", path: "creative-corner" },
      ],
    },
  ]);

  // State untuk menyimpan nama admin
  const [adminName, setAdminName] = useState("Admin XYZ");

  // Efek untuk memuat data pengguna dari localStorage saat komponen dimuat
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      if (parsedUserData.username) {
        setAdminName(parsedUserData.username);
      }
    }
  }, []);

  return (
    <div className="mt-1 mb-1 bg-white rounded-lg shadow-lg h-screen sticky top-4 flex flex-col max-w-[280px]">
      {/* Header gambar logo */}
      <div className="bg-[#2B2B2B] rounded-t-lg py-6 px-4 flex justify-center items-center">
        <img
          src="/logo_hitamputih.svg"
          alt="Logo Tiket Karya"
          className="h-14 object-contain"
        />
      </div>

      {/* Admin Profile */}
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#FF5126] rounded-full flex items-center justify-center border-2 border-[#FFDEB5]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/97a09fd7d997b9e2073117bbe38f75ff22be3412"
              alt="Admin"
              className="w-8 h-8"
            />
          </div>
          <span className="text-lg font-medium truncate">{adminName}</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 overflow-y-auto">
        <SidebarItem to="/admin">Analytics</SidebarItem>

        {sections.map((section, index) => (
          <SidebarSection key={index} title={section.title} defaultOpen={true}>
            {section.items.map((item, itemIndex) => (
              <SidebarItem key={itemIndex} to={`/admin/${item.path}`}>
                {item.name}
              </SidebarItem>
            ))}
          </SidebarSection>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="px-4 py-4 border-t border-[#FCEDDA]">
        <button
          onClick={() => {
            localStorage.removeItem("userData");
            localStorage.removeItem("token");
            navigate("/login-admin");
          }}
          className="w-full text-center py-2 text-[#FF5126] hover:text-[#FF570C] transition-colors font-medium rounded-md hover:bg-[#FCEDDA]/50"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
