import React from "react";

const ViewWorkshopReview = ({ onWriteReview }) => {
  const reviews = [
    {
      name: "Gail A.",
      time: "6 months ago",
      rating: 5,
      title: "Great Workshop Experience!",
      content: "I really enjoyed the workshop! The content was well-structured...",
      img: "https://i.pravatar.cc/40?img=1",
    },
    {
      name: "Rani Putri",
      time: "6 months ago",
      rating: 5,
      title: "So much fun and surprisingly relaxing!",
      content: "I never thought working with clay could be this calming...",
      img: "https://i.pravatar.cc/40?img=2",
    },
    {
      name: "Kevin W.",
      time: "6 months ago",
      rating: 5,
      title: "Great intro to pottery, loved the vibe",
      content: "The studio has such a chill atmosphere...",
      img: "https://i.pravatar.cc/40?img=3",
    },
  ];

  return (
    <div className="mb-16 max-w-2xl mx-auto">
      {/* Tombol filter & review */}
      <div className="flex items-center justify-start gap-4 mb-6">
        <button className="border border-black rounded-full px-4 py-3 text-sm font-medium flex items-center gap-2">
          <img src="/img/filters.icon.svg" alt="filter" className="w-4 h-4" />
          FILTERS
        </button>

        <button
          onClick={onWriteReview}
          className="bg-black text-white px-6 py-3 rounded-full font-semibold"
        >
          Write a Review
        </button>
      </div>

      {/* Sort dan jumlah review */}
      <div className="flex justify-between items-center mb-4 text-sm">
        <span>{reviews.length} reviews</span>
        <span className="underline cursor-pointer">Sort Most Helpful ▼</span>
      </div>

      {/* Daftar Review */}
      <div className="space-y-6">
        {reviews.map((review, i) => (
          <div key={i} className="border-b pb-4 flex gap-4">
            <img
              src={review.img}
              alt={review.name}
              className="rounded-full w-10 h-10"
            />
            <div>
              <div className="font-semibold">{review.name}</div>
              <div className="text-xs text-gray-500 mb-1">{review.time}</div>
              <div className="font-medium">{review.title}</div>
              <div className="text-sm text-gray-700">{review.content}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol SEE MORE */}
      <div className="flex justify-center mt-6">
        <button className="bg-black text-white px-8 py-2 rounded-full text-sm font-medium">
          SEE MORE
        </button>
      </div>
    </div>
  );
};

export default ViewWorkshopReview;
