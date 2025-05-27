import { useState } from "react";
import Icon from "@/components/ui/icon";

interface PropertyCardProps {
  id: number;
  image: string;
  price: string;
  title: string;
  area: string;
  location: string;
  rooms?: number;
}

const PropertyCard = ({
  id,
  image,
  price,
  title,
  area,
  location,
  rooms,
}: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <Icon
            name={isFavorite ? "Heart" : "Heart"}
            size={18}
            className={
              isFavorite ? "text-red-500 fill-current" : "text-gray-600"
            }
          />
        </button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-900">{price}</h3>
          {rooms && (
            <span className="bg-gray-100 px-2 py-1 rounded-md text-sm text-gray-600">
              {rooms} комн.
            </span>
          )}
        </div>

        <h4 className="font-medium text-gray-800 mb-2 line-clamp-2">{title}</h4>

        <div className="flex items-center text-gray-600 text-sm mb-2">
          <Icon name="Home" size={16} className="mr-1" />
          <span>{area}</span>
        </div>

        <div className="flex items-center text-gray-600 text-sm">
          <Icon name="MapPin" size={16} className="mr-1" />
          <span className="truncate">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
