import React, { useState } from "react";
import { fieldConfigs } from "./FormFieldList";
import { validateField } from "./utils/validation";
import InputField from "./components/inputs";

export default function Form() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e, field) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field.name]: value }));
    setErrors((prev) => ({ ...prev, [field.name]: validateField(field, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    fieldConfigs.forEach((field) => {
      const error = validateField(field, formData[field.name]);
      if (error) newErrors[field.name] = error;
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("✅ Form submitted successfully!");
      console.log("Form Data:", formData);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-zinc-900 p-6 rounded-2xl shadow-2xl">
      <h2 className="text-2xl font-bold mb-4">Dynamic Smart Form</h2>
      <form onSubmit={handleSubmit}>
        {fieldConfigs.map((field) => (
          <InputField
            key={field.name}
            field={field}
            value={formData[field.name]}
            error={errors[field.name]}
            onChange={handleChange}
          />
        ))}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
