import React from "react";

const InputField = ({ field, value, error, onChange }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="font-semibold mb-1" htmlFor={field.name}>
        {field.label}
      </label>
      <input
        id={field.name}
        name={field.name}
        type={field.type}
        value={value || ""}
        onChange={(e) => onChange(e, field)}
        className={`border p-2 rounded ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
