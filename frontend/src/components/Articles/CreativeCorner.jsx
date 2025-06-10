import React from 'react';
import InspirationHeader from './InspirationHeader';
import FeaturedArticles from './FeaturedArticles';
import LatestArticles from './LatestArticles';
import Footer from './Footer';
import SearchAndFilter from './SearchAndFilter';

const CreativeCorner = () => {
  return (
    // Main background color for the page
    <div className="bg-[#FCEED5] text-[#3B3021]">
      <InspirationHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold tracking-wide mb-6">FEATURED ARTICLES</h2>
        <FeaturedArticles />

        {/* Section for Latest Articles with its own title and search/filter */}
        <div className="mt-16">
           <h2 className="text-2xl font-bold tracking-wide mb-6">LATEST ARTICLES</h2>
           <SearchAndFilter />
           <div className="mt-6">
             <LatestArticles />
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default CreativeCorner;