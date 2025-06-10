import React, { useState } from "react";
import SearchHeader from "../components/SearchHeader";
import TiketKaryaLogo from "../components/TiketKaryaLogo";
import SearchBar from "../components/SearchBar";
import FilterSidebar from "../components/FilterSidebar";
import SearchResults from "../components/SearchResults";
import CategorySection from "../components/CategorySection";
import RecommendedSection from "../components/RecommendedSection";
import NewWorkshopsSection from "../components/NewWorkshopsSection";
import Footer from "../components/Footer";
import WorkshopCard from "../components/WorkshopCard";

// Data awal untuk testing
const searchResults = [
  {
    id: "1",
    title: "Hand-Build Your Own Pottery",
    organizer: "Clay & Calm Studio",
    description:
      "Shape, sculpt, and glaze your own clay creation in this hands-on pottery workshop. No experience needed—just bring your creativity!",
    location: "Online (materials shipped)",
    date: "May 30, 2025",
    rating: "4.8",
    participants: "+21 People",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/8904473754d588dd53da8d14c2017211fde8bfae",
    isFavorite: true,
  },
  {
    id: "2",
    title: "Wheel Throwing for Beginners",
    organizer: "Tierra Ceramics",
    description:
      "Learn the basics of pottery on the wheel—from centering clay to shaping your first bowl or cup. Ideal for beginners looking to get their hands muddy!",
    location: "Jakarta, Indonesia",
    date: "June 5, 2025",
    rating: "4.8",
    participants: "+17 People",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/217ed05f3af64ab607f2add90b86a36775352016",
    isFavorite: false,
  },
];

const categories = [
  {
    id: "painting",
    name: "Painting",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/638e2de19dd3f8d4a5f1f89915d51e1251e1f85d",
  },
  {
    id: "pottery",
    name: "Pottery",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/f18af712f7cc1ba75e07f00803760359e97717f3",
  },
  {
    id: "textile",
    name: "Textile & Fabric",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/a7c8b17afa8fc563952e0dbfe320a4bc2de396e9",
  },
  {
    id: "music",
    name: "Music",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/b40b7435b8e63e9c6d5652c928d93249a2e5d9a1",
  },
];

const recommendedWorkshops = [
  {
    id: "4",
    title: "Crochet Your First Plushie",
    organizer: "WarmLoops Workshop",
    location: "Yogyakarta, Indonesia",
    date: "May 18, 2025",
    rating: "4.8",
    participants: "+10 People",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/f06b951d36dd6d82dd90dd177b07f519f09a6ecd",
    isFavorite: true,
  },
  {
    id: "5",
    title: "Natural Soap Crafting",
    organizer: "Rani Sari",
    location: "Bali, Indonesia",
    date: "June 20, 2025",
    rating: "4.8",
    participants: "+17 People",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/6628550609fd5f550036dbd96798cd540a52b7d6",
    isFavorite: false,
  },
];

const newWorkshops = [
  {
    id: "10",
    title: "Urban Sketching: Scenes of Jakarta",
    organizer: "Pak Rino Wibowo",
    location: "Tebet, South Jakarta",
    date: "July 25, 2025",
    rating: "4.8",
    participants: "+14 People",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/48a48145fa15ac8a038547f9cc35d2865947c5e0",
    isFavorite: false,
  },
  {
    id: "11",
    title: "Anyaman Bamboo Weaving Basics",
    organizer: "Titik Temu Studio",
    location: "Rawamangun, East Jakarta",
    date: "July 27, 2025",
    rating: "4.8",
    participants: "+15 People",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/bceff1d988426fa1b9542b0109b988ec02320968",
    isFavorite: false,
  },
];

const Search_HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("Jakarta, Indonesia");
  const [activeFilters, setActiveFilters] = useState({});

  const handleSearch = (query, location) => {
    setSearchQuery(query);
    setSearchLocation(location);
    console.log(`Mencari "${query}" di ${location}`);
    // Nanti akan diganti dengan API call untuk mencari data
  };

  const handleApplyFilters = (filters) => {
    setActiveFilters(filters);
    console.log("Filter yang diterapkan:", filters);
    // Nanti akan diganti dengan API call untuk filter data
  };

  const handleJoinWorkshop = (id) => {
    console.log(`Bergabung dengan workshop ID: ${id}`);
    // Nanti akan diganti dengan API call untuk join workshop
  };

  const handleToggleFavorite = (id) => {
    console.log(`Toggle favorit untuk workshop ID: ${id}`);
    // Nanti akan diganti dengan API call untuk toggle favorite
  };

  const handleCategoryClick = (id) => {
    console.log(`Kategori yang dipilih: ${id}`);
    // Nanti akan diganti dengan API call untuk filter by category
  };

  return (
    <div className="bg-[#FCEDDA] pt-1.5">
      <div className="flex w-full flex-col items-center px-[50px] max-md:max-w-full max-md:px-5">
        <SearchHeader />
        <TiketKaryaLogo />

        <SearchBar className="mt-[30px]" onSearch={handleSearch} />

        <div className="w-full max-w-[1205px] mt-[60px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {/* Sidebar Filter */}
            <div className="w-[24%] max-md:w-full max-md:ml-0">
              <FilterSidebar onApplyFilters={handleApplyFilters} />
            </div>

            {/* Search Results */}
            <div className="w-[76%] ml-5 max-md:w-full max-md:ml-0">
              <SearchResults
                results={searchResults}
                onJoin={handleJoinWorkshop}
                onToggleFavorite={handleToggleFavorite}
              />
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <CategorySection
          title="Jelajahi berdasarkan kategori"
          categories={categories}
          onCategoryClick={handleCategoryClick}
        />

        {/* Recommended Workshops */}
        <RecommendedSection
          title="Rekomendasi untuk Anda"
          workshops={recommendedWorkshops}
          onJoin={handleJoinWorkshop}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* New Workshops */}
        <NewWorkshopsSection
          title="Workshop baru di area Anda"
          location={searchLocation}
          workshops={newWorkshops}
          onJoin={handleJoinWorkshop}
          onToggleFavorite={handleToggleFavorite}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Search_HomePage;
