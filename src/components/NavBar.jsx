/* eslint-disable react/prop-types */

function NavBar() {
  return (
    <header
      role="navbar"
      aria-label="navbar"
      className="sticky top-0 z-20  flex h-[12svh] w-full items-center justify-between bg-white px-4 shadow-md"
    >
      <h1 className=" font-extrabold md:text-2xl">🌍 Countries App</h1>
    </header>
  );
}

export default NavBar;
