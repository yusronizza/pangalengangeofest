export default function Navbar() {
  const menu_classname =
    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0";

  return (
    <nav className="bg-white border-gray-200 text-black fixed w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img src="/logo_pgf.png" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-1xl font-semibold whitespace-nowrap">
            Pangalengan Geotourism
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <a href="/" className={menu_classname} aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="/wisata" className={menu_classname}>
                Wisata
              </a>
            </li>
            <li>
              <a href="/umkm" className={menu_classname}>
                UMKM
              </a>
            </li>
            <li>
              <a href="/budaya" className={menu_classname}>
                Budaya
              </a>
            </li>
            <li>
              <a href="/tentang-kami" className={menu_classname}>
                Festival
              </a>
            </li>
            <li>
              <a href="/kontak" className={menu_classname}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
