import React from 'react';

// NOTE: Using placeholder images. Replace URLs with your actual image paths.
const featuredData = [
  {
    title: "Discover the Timeless Art of Pottery",
    excerpt: "A world away from mass fast culture lies depth, warmth and clay molded by hand into beautiful shapes.",
    date: "June 3, 2025",
    image: "https://placehold.co/600x400/E2D5C3/3B3021?text=Pottery",
  },
  {
    title: "The Art of Collaboration: Why Creating Together Matters",
    author: "Indira Wahyuni",
    date: "June 3, 2025",
    image: "https://placehold.co/400x250/F0EAE0/3B3021?text=Collaboration"
  },
  {
    title: "Textile Traditions: How Modern Creators Honor Heritage",
    author: "Putri Andriani",
    date: "June 3, 2025",
    image: "https://placehold.co/400x250/D8C8B8/3B3021?text=Textiles"
  },
  {
    title: "5 DIY Crafts You Can Start This Weekend",
    author: "Rina Kusuman",
    date: "June 3, 2025",
    image: "https://placehold.co/400x250/C8BEB2/3B3021?text=DIY"
  }
];

const FeaturedArticles = () => {
  const mainArticle = featuredData[0];
  const sideArticles = featuredData.slice(1);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      {/* Main Featured Article */}
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col h-full cursor-pointer hover:shadow-xl transition-shadow duration-300">
        <img src={mainArticle.image} alt={mainArticle.title} className="rounded-md w-full h-80 object-cover" />
        <div className="mt-4 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-[#3B3021]">{mainArticle.title}</h3>
          <p className="text-md my-2 text-gray-600 flex-grow">{mainArticle.excerpt}</p>
          <div className="text-sm text-gray-500 mt-2">{mainArticle.date}</div>
        </div>
      </div>
      
      {/* Side Articles */}
      <div className="flex flex-col gap-4">
        {sideArticles.map((article, index) => (
          <div key={index} className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <img src={article.image} alt={article.title} className="w-32 h-24 rounded-md object-cover" />
            <div className="flex-grow">
              <h4 className="font-bold text-md text-[#3B3021] leading-tight">{article.title}</h4>
              <div className="text-xs text-gray-500 mt-2">{article.author} • {article.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default FeaturedArticles;