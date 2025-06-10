import React from "react";
import WorkshopCard from "./WorkshopCard";

const RecommendedSection = ({
  className = "",
  title,
  workshops = [],
  onJoin = () => {},
  onToggleFavorite = () => {},
}) => {
  const scrollLeft = () => {
    const container = document.getElementById("recommended-container");
    if (container) {
      container.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("recommended-container");
    if (container) {
      container.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className={`${className}`}>
      <h2 className="text-black text-4xl font-bold ml-[90px] mt-[52px] max-md:ml-2.5 max-md:mt-10">
        {title}
      </h2>

      <div className="flex w-full max-w-[1251px] items-center gap-[21px] justify-between flex-wrap mt-[42px] max-md:max-w-full max-md:mt-10">
        <button
          onClick={scrollLeft}
          aria-label="Scroll left"
          className="cursor-pointer hover:opacity-75 transition-opacity"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/7278fbf29d9071329e988c287a5b507cc57b9760"
            alt="Scroll left"
            className="aspect-[0.5] object-contain w-[26px] self-stretch shrink-0 my-auto"
          />
        </button>

        <div
          id="recommended-container"
          className="overflow-x-auto self-stretch flex min-w-60 items-stretch gap-[22px] overflow-hidden w-[1157px] my-auto max-md:max-w-full"
        >
          {workshops.map((workshop) => (
            <WorkshopCard
              key={workshop.id}
              workshop={workshop}
              variant="vertical"
              onJoin={onJoin}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>

        <button
          onClick={scrollRight}
          aria-label="Scroll right"
          className="cursor-pointer hover:opacity-75 transition-opacity"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/2a7a961f04c9ffd8177812a784acb2e736410459"
            alt="Scroll right"
            className="aspect-[0.5] object-contain w-[26px] self-stretch shrink-0 my-auto"
          />
        </button>
      </div>
    </section>
  );
};

export default RecommendedSection;
