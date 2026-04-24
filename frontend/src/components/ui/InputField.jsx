export default function InputField({
  value,
  onChange,
  placeholder,
}) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        w-full p-3 rounded-xl
        bg-white/10 text-black placeholder-gray-400
        border border-white/20
        focus:outline-none
        focus:border-cyan-400
        focus:ring-2 focus:ring-cyan-400/50
        transition duration-300
      "
    />
  );
}