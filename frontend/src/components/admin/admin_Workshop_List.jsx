import React, { useState } from "react";
import { FaSearch, FaEye, FaEdit, FaTrash } from "react-icons/fa";

// Mock data untuk testing
const MOCK_WORKSHOPS = [
  {
    id: 1,
    topic: "Hand-Build Your Own Pottery",
    category: "Pottery",
    price: "Rp.100,000",
    quantity: 23,
    status: "Available",
  },
  {
    id: 2,
    topic: "Wheel Throwing for Beginners",
    category: "Pottery",
    price: "Rp.350,000",
    quantity: 17,
    status: "Available",
  },
  {
    id: 3,
    topic: "Crochet Your First Plushie",
    category: "Knitting",
    price: "Rp.200,000",
    quantity: 12,
    status: "Available",
  },
  {
    id: 4,
    topic: "Batik Tulis on Cotton",
    category: "Textiles",
    price: "Rp.300,000",
    quantity: 15,
    status: "Available",
  },
  {
    id: 5,
    topic: "Urban Sketching : Scenes of Jakarta",
    category: "Painting",
    price: "Rp.150,000",
    quantity: 30,
    status: "Available",
  },
];

const AdminWorkshopList = () => {
  const [workshops, setWorkshops] = useState(MOCK_WORKSHOPS);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();

    if (!query.trim()) {
      setWorkshops(MOCK_WORKSHOPS);
      return;
    }

    const filtered = MOCK_WORKSHOPS.filter(
      (workshop) =>
        workshop.topic.toLowerCase().includes(query) ||
        workshop.category.toLowerCase().includes(query)
    );

    setWorkshops(filtered);
    setCurrentPage(1);
  };

  // Status badge styling
  const getStatusStyle = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800";
      case "Sold Out":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 bg-[#E7E7E8] min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span>Admin</span>
          <span>/</span>
          <span>Workshop List</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Workshop List</h1>
        <p className="text-gray-600 mt-1">
          Kelola workshop, pantau penjualan, dan lihat statistik
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <form onSubmit={handleSearch} className="flex-1">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari workshop..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-white"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </form>
        <button className="px-4 py-2 bg-[#FF570C] text-white rounded-lg hover:bg-orange-600 transition-colors">
          Filter
        </button>
      </div>

      {/* Workshop Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#FFDEB5]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Topic
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {workshops.map((workshop, index) => (
                <tr
                  key={workshop.id}
                  className={
                    index % 2 === 0 ? "bg-white" : "bg-[#FFDEB5] bg-opacity-30"
                  }
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {workshop.topic}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {workshop.category}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {workshop.price}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {workshop.quantity}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusStyle(
                        workshop.status
                      )}`}
                    >
                      {workshop.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-3">
                      <button
                        className="text-blue-600 hover:text-blue-900"
                        title="View"
                      >
                        <FaEye />
                      </button>
                      <button
                        className="text-green-600 hover:text-green-900"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-900"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded bg-gray-100 text-gray-700 disabled:opacity-50"
            >
              Previous
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded ${
                  currentPage === page
                    ? "bg-[#FF570C] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((page) => page + 1)}
              disabled={currentPage === 3}
              className="px-3 py-1 rounded bg-gray-100 text-gray-700 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminWorkshopList;
