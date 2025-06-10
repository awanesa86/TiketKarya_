import React from "react";
import PropTypes from "prop-types";

const AnalyticsCard = ({ imageUrl, title, lastUpdate }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      {/* Chart Image */}
      <div className="aspect-[1.6] relative rounded-lg overflow-hidden bg-white">
        <img
          src={imageUrl}
          alt={`${title} chart`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Last Update */}
      <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/8fbe41da19411ad9ac869a30e14b055e7acaa0b7"
          alt="Clock"
          className="w-5 h-5"
        />
        <span>{lastUpdate}</span>
      </div>
    </div>
  );
};

AnalyticsCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lastUpdate: PropTypes.string.isRequired,
};

export default AnalyticsCard;
