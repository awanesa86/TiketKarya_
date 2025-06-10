import React, { useState } from "react";
import { FaEye, FaTrash, FaSearch } from "react-icons/fa";

// Mock data untuk testing
const MOCK_FORUMS = [
  {
    id: 1,
    topic: "What should I bring to a batik workshop?",
    replies: 4,
    author: "Nabila Sari",
  },
  {
    id: 2,
    topic: "Show us what you made! Share your finished pieces here",
    replies: 21,
    author: "Andika Mahesa",
  },
  {
    id: 3,
    topic: "Looking for textile workshops happening this month",
    replies: 12,
    author: "Maya Rizky",
  },
  {
    id: 4,
    topic: "How long does it take to get your fired pottery back?",
    replies: 3,
    author: "Nanda Fikri",
  },
  {
    id: 5,
    topic: "Can I join a workshop even if I'm not artistic?",
    replies: 43,
    author: "Joko Rahman",
  },
];

const AdminForumList = () => {
  const [forums, setForums] = useState(MOCK_FORUMS);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();

    if (!query.trim()) {
      setForums(MOCK_FORUMS);
      return;
    }

    const filtered = MOCK_FORUMS.filter(
      (forum) =>
        forum.topic.toLowerCase().includes(query) ||
        forum.author.toLowerCase().includes(query)
    );

    setForums(filtered);
    setCurrentPage(1);
  };

  return (
    <div className="p-6 min-h-screen bg-[#E7E7E8]">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span>Admin</span>
          <span>/</span>
          <span>Forum List</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Forum List</h1>
        <p className="text-gray-600 mt-1">
          Kelola forum, pantau diskusi, dan moderasi topik
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <form onSubmit={handleSearch} className="flex-1 max-w-xl">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari topik atau penulis..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-white"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </form>
        <button className="px-4 py-2 bg-[#FF570C] text-white rounded-lg hover:bg-orange-600 transition-colors">
          Filter
        </button>
      </div>

      {/* Forums Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#FFDEB5]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider w-1/2">
                  Topic
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Replies
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {forums.map((forum, index) => (
                <tr
                  key={forum.id}
                  className={
                    index % 2 === 0 ? "bg-white" : "bg-[#FFDEB5] bg-opacity-30"
                  }
                >
                  <td className="px-6 py-4 whitespace-normal">
                    <div className="text-sm font-medium text-gray-900 line-clamp-2">
                      {forum.topic}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{forum.replies}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{forum.author}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-3">
                      <button
                        className="text-blue-600 hover:text-blue-900 transition-colors"
                        title="View forum"
                      >
                        <FaEye size={18} />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-900 transition-colors"
                        title="Delete forum"
                      >
                        <FaTrash size={18} />
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
              className="px-3 py-1 rounded bg-gray-100 text-gray-700 disabled:opacity-50 hover:bg-gray-200 transition-colors"
            >
              Previous
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded transition-colors ${
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
              className="px-3 py-1 rounded bg-gray-100 text-gray-700 disabled:opacity-50 hover:bg-gray-200 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminForumList;
