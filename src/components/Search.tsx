interface Props {
  term: string;
  onChange: (newValue: any) => void;
}

export default function Search({ term, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      className="mb-8 h-12 w-full border-0 bg-white p-4 shadow-sm focus-within:border-0 xl:mb-0 xl:w-auto"
      value={term}
      onChange={onChange}
    />
  );
}
