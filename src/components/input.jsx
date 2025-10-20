import { cn } from "./utils/cn";
const Input = ({
  label,
  type = "text",
  value,
  className,
  defaultValue,
  onChange,
  error,
  success,
  required,
  disabled,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="font-medium">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          className,
          "border rounded-xl px-3 py-2 outline-none ",
          error
            ? "border-red-500"
            : success
            ? "border-green-500"
            : "border-gray-300",
          disabled
            ? "bg-gray-100 cursor-not-allowed"
            : "focus:ring-2 focus:ring-blue-400"
        )}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}
    </div>
  );
};

export default Input;
