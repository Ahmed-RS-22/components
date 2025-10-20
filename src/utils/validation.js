// A single, generic validation function for all fields.
export const validateField = (field, value) => {
  let error = "";
  if (field.required && !value) error = `${field.label} is required`;
  else if (field.pattern && !field.pattern.test(value)) error = `Invalid ${field.label}`;
  else if (field.minLength && value.length < field.minLength)
    error = `${field.label} must be at least ${field.minLength} characters`;
  else if (field.min && Number(value) < field.min)
    error = `${field.label} must be ≥ ${field.min}`;
  else if (field.max && Number(value) > field.max)
    error = `${field.label} must be ≤ ${field.max}`;
  return error;
};
