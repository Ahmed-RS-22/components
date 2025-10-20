// A list of field configurations that define the form dynamically.
export const fieldConfigs = [
  { name: "name", label: "Full Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true, pattern: /^\S+@\S+\.\S+$/ },
  { name: "age", label: "Age", type: "number", required: true, min: 18, max: 100 },
  { name: "phone", label: "Phone", type: "tel", required: true, pattern: /^[0-9]{10}$/ },
  { name: "password", label: "Password", type: "password", required: true, minLength: 6 },
  { name: "confirmPassword", label: "Confirm Password", type: "password", required: true },
  { name: "city", label: "City", type: "text", required: true },
  { name: "country", label: "Country", type: "text", required: true },
  { name: "zip", label: "Zip Code", type: "text", required: true, pattern: /^[0-9]{5}$/ },
  { name: "dob", label: "Date of Birth", type: "date", required: true },
  { name: "gender", label: "Gender", type: "text", required: true },
  { name: "username", label: "Username", type: "text", required: true },
  { name: "website", label: "Website", type: "url" },
  { name: "bio", label: "Bio", type: "text" },
  { name: "linkedin", label: "LinkedIn", type: "url" },
  { name: "twitter", label: "Twitter", type: "url" },
  { name: "company", label: "Company", type: "text" },
  { name: "role", label: "Role", type: "text" },
  { name: "skills", label: "Skills", type: "text" },
  { name: "experience", label: "Experience (Years)", type: "number" },
];

