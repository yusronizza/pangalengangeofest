"use client";

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

const jenisUmkms = ["Baju", "Makanan", "Kerajinan"];

import Image from "next/image";
import { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const products = [
  {
    id: 1,
    name: "Kerajinan Kayu",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    jenis: "Baju",
    desa: "Sukamanah",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    jenis: "Makanan",
    desa: "Sukaluyu",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    jenis: "$35",
    desa: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    jenis: "$35",
    desa: "Black",
  },
];

export default function Umkm() {
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

  const filteredData = searchFilter(products);
  console.log(desa);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
          UMKM Pangalengan
        </h2>
        <div className="w-full flex items-center content-center gap-x-10 ">
          <div className="py-6 items-center">
            <label
              htmlFor="label_search"
              className="mb-2 text-sm font-medium text-black sr-only"
            >
              Search
            </label>
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
                id="search_umkm"
                className="block p-4 pl-10 text-sm text-gray-900 rounded-full bg-gray-200"
                placeholder="Cari Nama UMKM"
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
                  {jenisUmkms.map((jenisUmkm) => (
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
                          {jenisUmkm}
                        </option>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredData.map((product: any) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  height={100}
                  width={100}
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 font-bold">
                    <a href={product.href}>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 font-bold"
                      />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.desa}</p>
                </div>
                <p className="text-sm font-medium text-gray-900 font-bold">
                  {product.jenis}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
