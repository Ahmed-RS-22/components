import { cn } from "./utils/cn"; // optional className helper

const Button = ({
  type,
  children,
  variant = "solid",
  size = "md",
  color = "blue",
  disabled = false,
  icon: Icon,
  onClick,
  className,
}) => {
  const base =
    "font-medium transition-all hover:cursor-pointer focus:outline-none flex items-center justify-center gap-2";

  const colorMap = {
    red: {
      solid: "bg-red-600 text-white hover:bg-red-900",
      outline: "border border-red-600 text-red-600 hover:bg-red-50",
      ghost: "text-red-600 hover:bg-red-100",
    },
    blue: {
      solid: "bg-blue-600 text-white hover:bg-blue-900",
      outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
      ghost: "text-blue-600 hover:bg-blue-100",
    },
    green: {
      solid: "bg-green-600 text-white hover:bg-green-900",
      outline: "border border-green-600 text-green-600 hover:bg-green-50",
      ghost: "text-green-600 hover:bg-green-100",
    },
    yellow: {
      solid: "bg-yellow-600 text-white hover:bg-yellow-900",
      outline: "border border-yellow-600 text-yellow-600 hover:bg-yellow-50",
      ghost: "text-yellow-600 hover:bg-yellow-100",
    },
    violet: {
      solid: "bg-violet-600 text-white hover:bg-violet-900",
      outline: "border border-violet-600 text-violet-600 hover:bg-violet-50",
      ghost: "text-violet-600 hover:bg-violet-100",
    },
    // add more colors as needed
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };
  const variantClass = colorMap[color][variant];
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        base,
        variantClass,
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};

export default Button;
