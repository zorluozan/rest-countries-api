export default function Header() {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-6 drop-shadow-sm xl:px-10">
      <h1 className="text-xl font-extrabold text-black xl:text-2xl">
        Where in the world?
      </h1>
      <button className="text-xs font-semibold xl:text-xl">Dark Mode</button>
    </div>
  );
}
