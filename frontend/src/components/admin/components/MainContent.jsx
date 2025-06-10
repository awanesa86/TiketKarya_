import React from "react";
import AnalyticsCard from "./AnalyticsCard";
import StatCard from "./StatCard";

const MainContent = () => {
  return (
    <div className="h-full py-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <span>Admin</span>
          <span>/</span>
          <span>Analytics</span>
        </div>
        <h1 className="text-4xl font-bold mt-4">Analytics</h1>
        <p className="text-gray-600 mt-2">
          Check the sales, user counts, and Topic Posted
        </p>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <AnalyticsCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/01fdcae14a51ba3ce373647407899816e95ce03e"
          title="Workshop Sales"
          lastUpdate="5 minutes ago"
        />
        <AnalyticsCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/43053b7b1120ff11de57a63a9e1f16f08606491a"
          title="User Growth"
          lastUpdate="5 minutes ago"
        />
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Orders"
          value="281"
          secondaryValue="14"
          secondaryLabel="Pending"
          percentChange="+21%"
          timeframe="Than last week"
        />

        <StatCard
          title="Today's Users"
          value="2,410"
          percentChange="+4%"
          timeframe="Than last month"
        />

        <StatCard
          title="Forum Posts"
          value="403"
          percentChange="+4%"
          timeframe="Than last month"
        />
      </div>
    </div>
  );
};

export default MainContent;
