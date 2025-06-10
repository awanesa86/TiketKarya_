import React from 'react';

// Bookmark Icon Component
const BookmarkIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-[#EE9D2B] hover:fill-[#EE9D2B] transition-colors duration-200">
        <path d="M17 3H7C5.89543 3 5 3.89543 5 5V21L12 18L19 21V5C19 3.89543 18.1046 3 17 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const articles = [
    { title: "Color & Emotion: The Hidden Psychology Behind Painting", author: "Sari Melinda", date: "June 3, 2025", image: "https://placehold.co/400x300/E8D9C5/3B3021?text=Painting" },
    { title: "A Beginner's Guide to Street Photography", author: "Irwan Adhasa", date: "June 3, 2025", image: "https://placehold.co/400x300/C1B6A9/3B3021?text=Photography" },
    { title: "Why Journaling is Still Relevant in a Digital World", author: "Fajar Lesati", date: "June 3, 2025", image: "https://placehold.co/400x300/D4C9BC/3B3021?text=Journaling" },
    { title: "Creative Confidence: Overcoming Fear of Starting", author: "Putu Purnamartani", date: "June 3, 2025", image: "https://placehold.co/400x300/EAE0D3/3B3021?text=Confidence" },
    { title: "From Side Hustle to Studio: Building a Craft Business", author: "Dipo Mahendra", date: "June 3, 2025", image: "https://placehold.co/400x300/D7CCC1/3B3021?text=Business" },
    { title: "Find Calm in Clay: How Pottery Became My Therapy", author: "Melisha Suwandi", date: "June 3, 2025", image: "https://placehold.co/400x300/C8BDB0/3B3021?text=Therapy" }
];

const Pagination = () => (
    <div className="col-span-full flex justify-center items-center mt-8 text-sm font-medium text-gray-700">
        <button className="px-4 py-2 hover:text-black">Previous</button>
        <button className="px-4 py-2 text-[#3B3021] font-bold underline mx-1">1</button>
        <button className="px-4 py-2 hover:text-black mx-1">2</button>
        <button className="px-4 py-2 hover:text-black mx-1">3</button>
        <span className="px-4 py-2">...</span>
        <button className="px-4 py-2 hover:text-black mx-1">68</button>
        <button className="px-4 py-2 hover:text-black">Next</button>
    </div>
);

const LatestArticles = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-3.5 flex flex-col cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
                <img src={article.image} alt={article.title} className="rounded-md w-full h-52 object-cover" />
                <button className="absolute top-2 right-2 bg-white/70 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EE9D2B]">
                    <BookmarkIcon />
                </button>
            </div>
            <div className="mt-4 flex flex-col flex-grow">
              <h4 className="text-lg font-bold text-[#3B3021] flex-grow">{article.title}</h4>
              <div className="text-xs text-gray-500 mt-2">{article.author} • {article.date}</div>
            </div>
          </div>
        ))}
      </div>
      <Pagination />
    </section>
  );
};
export default LatestArticles;