import React from "react";
import { cn } from "./utils/cn";

const Modal = ({ isOpen, onClose, title, bgClass, className, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        bgClass,
        "fixed inset-0 flex w-full h-full   items-center justify-center z-50"
      )}
    >
      <div
        className={cn(className, "rounded-2xl  p-6 w-96 shadow-xl relative")}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        {title && <h2 className="text-xl font-semibold mb-3">{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default Modal;
