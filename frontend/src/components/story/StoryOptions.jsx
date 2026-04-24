export default function StoryOptions({ options, onSelect, disabled }) {
  return (
    <div className="mt-6">

      <h3 className="text-gray-400 mb-3">
        What will you do?
      </h3>

      <div className="flex flex-col gap-3">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onSelect(opt.node_id)}
            disabled={disabled}
            className={`
              group w-full px-4 py-3 rounded-xl text-left
              bg-white/5 border border-white/10
              transition duration-300
              ${
                disabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:border-cyan-400 hover:bg-cyan-400/10"
              }
              hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]
            `}
          >
            <div className="flex items-center gap-3">

              <span className="text-cyan-400 group-hover:scale-125 transition">
                ⚡
              </span>

              <span className="flex-1">{opt.text}</span>

              <span className="opacity-0 group-hover:opacity-100">
                →
              </span>

            </div>
          </button>
        ))}
      </div>
    </div>
  );
}