import React from "react";
import { cn } from "./utils/cn";

const Card = ({
  title = "title",
  description = "description",
  image,
  footer,
  children,
  variant = "elevated", // 'elevated' | 'outlined'
  className,
}) => {
  const variantStyles = {
    elevated: " shadow-md hover:shadow-lg",
    outlined: "border border-gray-200  hover:border-gray-300",
  };

  return (
    <article
      className={cn(
        "rounded-2xl overflow-hidden transition-all duration-200 p-4 flex flex-col gap-3",
        variantStyles[variant],
        className
      )}
    >
      {image && (
        <div className="w-full h-48 overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title || "Card image"}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {(title || description) && (
        <header>
          {title && <h3 className="text-lg font-semibold ">{title}</h3>}
          {description && (
            <p className="text-gray-500 text-sm mt-1">{description}</p>
          )}
        </header>
      )}

      {children && (
        <div className="text-gray-700 text-sm flex-1">{children}</div>
      )}

      {footer && (
        <footer className="pt-3 border-t border-gray-100 text-sm text-gray-500">
          {footer}
        </footer>
      )}
    </article>
  );
};

export default Card;
