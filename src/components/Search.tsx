interface Props {
  term: string;
  onChange: (newValue: any) => void;
}

export default function Search({ term, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      className="h-12 bg-white shadow-sm p-4 border-0 focus-within:border-0"
      value={term}
      onChange={onChange}
    />
  );
}
