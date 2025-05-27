import Icon from "@/components/ui/icon";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <Icon
        name="Search"
        size={20}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      />
      <input
        type="text"
        placeholder="Поиск по названию или локации..."
        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
      />
    </div>
  );
};

export default SearchBar;
