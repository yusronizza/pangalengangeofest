"use client";
import Image from "next/image";
import { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import wisatas from "../api/data_wisata.json";

const namaDesas = [
  "Sukamanah",
  "Sukaluyu",
  "Margaluyu",
  "Margamukti",
  "Pulosari",
  "Banjarsari",
  "Pangalengan",
  "Wanasuka",
  "Lamajang",
  "Warnasari",
  "Margamekar",
  "Tribaktimulya",
  "Margamulya",
];

const jenisWisatas = ["Pegunungan", "Pantai"];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Wisata() {
  const [query, setQuery] = useState("");
  const [desa, setDesa] = useState("");
  const [jenis, setJenis] = useState("");

  const searchFilter = (array: any) => {
    console.log(query);
    const result = array.filter(
      (item: any) =>
        item.name.toLowerCase().includes(query.toLowerCase()) &&
        item.desa.toLowerCase().includes(desa.toLowerCase()) &&
        item.jenis.toLowerCase().includes(jenis.toLowerCase())
    );
    return result;
  };

  const searchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const selectDesa = (e: any) => {
    setDesa(e.target.value);
  };

  const selectJenis = (e: any) => {
    setJenis(e.target.value);
  };

  const filteredData = searchFilter(wisatas);

  return (
    <>
      <div className="bg-white pt-24 px-32 text-black">
        <h1 className="text-2xl font-bold text-center py-6">
          Wisata di Pangalengan
        </h1>
        <div className="w-full py-6 items-center content-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-10 gap-y-6">
          <div className="items-center">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search_wisata"
                className="p-4 pl-10 text-sm text-gray-900 rounded-full bg-gray-200"
                placeholder="Cari Nama Wisata"
                onChange={searchValue}
              />
            </div>
          </div>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-10 py-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                {desa ? desa : "Desa"}
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {namaDesas.map((namaDesa) => (
                    <Menu.Item>
                      {({ active }) => (
                        <option
                          onClick={selectDesa}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {namaDesa}
                        </option>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-10 py-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                {jenis ? jenis : "Jenis"}
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {jenisWisatas.map((jenisWisata) => (
                    <Menu.Item>
                      {({ active }) => (
                        <option
                          onClick={selectJenis}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {jenisWisata}
                        </option>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredData.map((wisata: any) => (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <a>
                <Image
                  width={500}
                  height={500}
                  className="rounded-t-lg"
                  src={"/wisata/" + wisata.imageSrc}
                  alt={wisata.imageAlt}
                />
              </a>
              <div className="p-5">
                <a>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {wisata.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {wisata.deskripsi_singkat}
                </p>
                <a
                  href={wisata.href}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
