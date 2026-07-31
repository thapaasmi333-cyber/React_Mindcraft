export default function Navbar() {
  return (
    <>
      <nav className="bg-blue-800 text-white p-4 shadow-md">
        <h1 className="text-2x1 font-bold inline">My App</h1>
        <ul className="float-right flex gap-6">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">About</li>
          <li className="hover:text-gray-200 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </>
  );
}
