const menus = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Wisata",
    href: "/wisata",
  },
  {
    name: "UMKM",
    href: "/umkm",
  },
  {
    name: "Budaya",
    href: "/budaya",
  },
  {
    name: "Festival",
    href: "/pgf",
  },
  {
    name: "KKN",
    href: "/kkn",
  },
];

export default function Navbar() {
  const menu_classname =
    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0";

  return (
    <nav className="bg-gray-100 border-gray-200 text-black fixed w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img src="/logo_pgf.png" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-1xl font-semibold whitespace-nowrap">
            Pangalengan Geotourism
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {menus.map((menu) => (
              <li>
                <a
                  href={menu.href}
                  className={menu_classname}
                  aria-current="page"
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
