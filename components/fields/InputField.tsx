// Custom components
function InputField(props: {
  id: string;
  label: string;
  extra?: string;
  placeholder: string;
  variant?: string;
  state?: string;
  disabled?: boolean;
  type?: string;
  onChange?: any;
  name?: any;
  required?: any;
}) {
  const { label, id, extra, type, placeholder, variant, state, disabled, onChange, name, required } = props;

  return (
    <div className={`${extra}`}>
      <label
        htmlFor={id}
        className={`text-sm text-navy-700 ${variant === 'auth' ? 'ml-1.5 font-medium' : 'ml-3 font-bold'}`}
      >
        {label}
      </label>
      <input
        onChange={onChange}
        disabled={disabled}
        type={type}
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
          disabled === true
            ? '!border-none !bg-gray-100'
            : state === 'error'
            ? 'border-red-500 text-red-500 placeholder:text-red-500'
            : state === 'success'
            ? 'border-green-500 text-green-500 placeholder:text-green-500'
            : 'border-gray-200'
        }`}
      />
    </div>
  );
}

export default InputField;
