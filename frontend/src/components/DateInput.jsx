export default function DateInput({ value, onChange }) {
  return (
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-slate-700 text-slate-100 p-2 rounded border border-slate-600"
    />
  );
}
