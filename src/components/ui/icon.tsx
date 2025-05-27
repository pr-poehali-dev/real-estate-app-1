import React from "react";
import * as LucideIcons from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}) => {
  const IconComponent =
    (LucideIcons as any)[name] || (LucideIcons as any)[fallback];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found, using fallback "${fallback}"`);
    const FallbackIcon = (LucideIcons as any).CircleAlert;
    return <FallbackIcon size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
