import SearchBar from "@/components/SearchBar";
import CategoryTabs from "@/components/CategoryTabs";
import PropertyCard from "@/components/PropertyCard";
import BottomNavigation from "@/components/BottomNavigation";
import Icon from "@/components/ui/icon";

const Index = () => {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500",
      price: "5 500 000 ₽",
      title: "Просторная двухкомнатная квартира в центре",
      area: "65 м²",
      location: "ЖК Солнечный, Москва",
      rooms: 2,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500",
      price: "8 200 000 ₽",
      title: "Современная трёхкомнатная квартира",
      area: "85 м²",
      location: "Новосмоленская наб., Москва",
      rooms: 3,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500",
      price: "12 000 000 ₽",
      title: "Коттедж с участком и гаражом",
      area: "120 м²",
      location: "КП Зеленые холмы, МО",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500",
      price: "45 000 ₽/мес",
      title: "Однокомнатная квартира в аренду",
      area: "42 м²",
      location: "Красногорск, МО",
      rooms: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Недвижимость</h1>
          <button className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
            <Icon
              name="SlidersHorizontal"
              size={20}
              className="text-gray-600"
            />
          </button>
        </div>

        <SearchBar />

        <div className="mt-4">
          <CategoryTabs />
        </div>
      </div>

      {/* Property List */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Рекомендуемые</h2>
          <span className="text-sm text-gray-600">156 объектов</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Index;
