import Icon from "@/components/ui/icon";

const BottomNavigation = () => {
  const navItems = [
    { id: "home", icon: "Home", label: "Главная", active: true },
    { id: "favorites", icon: "Heart", label: "Избранное" },
    { id: "add", icon: "Plus", label: "Добавить" },
    { id: "messages", icon: "MessageCircle", label: "Сообщения" },
    { id: "profile", icon: "User", label: "Профиль" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              item.active
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Icon
              name={item.icon}
              size={20}
              className={item.active ? "text-blue-600" : "text-gray-500"}
            />
            <span className="text-xs mt-1 font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
