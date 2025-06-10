import React from "react";
import WorkshopCard from "./WorkshopCard";

const SearchResults = ({
  className = "",
  results = [],
  onJoin = () => {},
  onToggleFavorite = () => {},
  onViewMore = () => {},
}) => {
  return (
    <div
      className={`flex w-full flex-col items-stretch mt-1.5 max-md:max-w-full max-md:mt-9 ${className}`}
    >
      <div className="text-black text-sm font-normal">
        <span className="font-extrabold">{results.length}</span> hasil ditemukan
      </div>

      <div className="flex flex-col gap-5 mt-[15px] max-md:max-w-full">
        {results.map((workshop) => (
          <WorkshopCard
            key={workshop.id}
            workshop={workshop}
            onJoin={onJoin}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>

      {results.length > 0 && (
        <button
          onClick={onViewMore}
          className="text-[#FCEDDA] min-h-[35px] gap-[5px] text-base font-normal bg-[#FF5126] mt-5 px-2.5 py-1.5 hover:bg-opacity-80 transition-colors"
        >
          Lihat Lainnya
        </button>
      )}
    </div>
  );
};

export default SearchResults;
