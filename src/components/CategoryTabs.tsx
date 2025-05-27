import { useState } from "react";

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("apartments");

  const tabs = [
    { id: "apartments", label: "Квартиры" },
    { id: "houses", label: "Дома" },
    { id: "commercial", label: "Коммерция" },
    { id: "rent", label: "Аренда" },
  ];

  return (
    <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            activeTab === tab.id
              ? "bg-white text-blue-600 shadow-sm"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
