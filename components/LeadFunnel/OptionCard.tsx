import clsx from "clsx";

type Props = {
  label: string;
  sublabel?: string;
  selected: boolean;
  onClick: () => void;
};

export default function OptionCard({ label, sublabel, selected, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={clsx(
        "w-full text-left border rounded-sm px-4 py-3 transition-colors",
        selected
          ? "border-moss-600 bg-moss-50"
          : "border-char-100 hover:border-moss-300"
      )}
    >
      <span className="block font-medium text-char-900">{label}</span>
      {sublabel && <span className="block text-xs text-char-500 mt-0.5">{sublabel}</span>}
    </button>
  );
}
