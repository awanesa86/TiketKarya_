import React from "react";
import WorkshopCard from "./WorkshopCard";

const NewWorkshopsSection = ({
  className = "",
  title,
  location,
  workshops = [],
  onJoin = () => {},
  onToggleFavorite = () => {},
}) => {
  const scrollLeft = () => {
    const container = document.getElementById("new-workshops-container");
    if (container) {
      container.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("new-workshops-container");
    if (container) {
      container.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className={`${className}`}>
      <h2 className="text-black text-4xl font-bold ml-[90px] mt-10 max-md:max-w-full">
        {title}
      </h2>

      <div className="flex w-full max-w-[1252px] items-center gap-6 justify-between flex-wrap mt-[38px] max-md:max-w-full">
        <button
          onClick={scrollLeft}
          aria-label="Scroll left"
          className="cursor-pointer hover:opacity-75 transition-opacity"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/0f1e14ada146973e15d8f8eb0720cc1946bd5c1c"
            alt="Scroll left"
            className="aspect-[0.49] object-contain w-[26px] self-stretch shrink-0 my-auto"
          />
        </button>

        <div
          id="new-workshops-container"
          className="overflow-x-auto self-stretch flex min-w-60 items-stretch gap-[30px] overflow-hidden w-[1151px] my-auto max-md:max-w-full"
        >
          {workshops.map((workshop) => (
            <div key={workshop.id} className="min-h-80 max-md:max-w-full">
              <WorkshopCard
                workshop={workshop}
                variant="vertical"
                onJoin={onJoin}
                onToggleFavorite={onToggleFavorite}
              />
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          aria-label="Scroll right"
          className="cursor-pointer hover:opacity-75 transition-opacity"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/6e814d2ab891cca74bd66dffc2fb21200be2cbb8"
            alt="Scroll right"
            className="aspect-[0.51] object-contain w-[27px] self-stretch shrink-0 my-auto"
          />
        </button>
      </div>
    </section>
  );
};

export default NewWorkshopsSection;
