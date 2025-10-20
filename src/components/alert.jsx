import React, { useState } from "react";
import { cn } from "./utils/cn";

const Alert = ({
  type = "info",
  title,
  message,
  children,
  onClose,
  className,
}) => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  const variants = {
    success: "bg-green-50 text-green-800 border-green-400",
    error: "bg-red-50 text-red-800 border-red-400",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-400",
    info: "bg-blue-50 text-blue-800 border-blue-400",
  };

  return (
    <div
      role="alert"
      className={cn(
        "border-l-4 p-4 rounded-xl shadow-sm transition-all duration-200 animate-fade-in flex justify-between items-start gap-3",
        variants[type],
        className
      )}
    >
      <div className="flex-1">
        {title && <h4 className="font-semibold mb-1">{title}</h4>}
        {message && <p className="text-sm">{message}</p>}
        {children}
      </div>

      {onClose && (
        <button
          onClick={() => {
            setVisible(false);
            onClose?.();
          }}
          className="text-gray-400 hover:text-gray-600 text-lg leading-none"
          aria-label="Close alert"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Alert;
