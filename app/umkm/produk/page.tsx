import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Produk() {
  const imageClass =
    "h-full w-full object-cover object-center group-hover:opacity-75";
  const h3ClassName = "mt-4 text-md text-gray-700";
  const priceClassName = "mt-1 text-md font-medium text-gray-900";
  const imageContainerClassName =
    "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7";

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="w-full flex text-black my-6 text-2xl gap-x-6">
            <div className="w-1/4">
              <Image
                width={300}
                height={400}
                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              />
            </div>
            <div className="w-3/4 py-2">
              <div className="text-3xl text-bold text-black mb-8 font-bold">
                Kerajinan Kayu
              </div>
              <p className="text-md">Kerajinan </p>
              <button className="rounded-full bg-gray-300 py-3 px-8 text-sm hover:bg-gray-200 my-4">
                Kontak Kami
              </button>
            </div>
          </div>
          <h1 className="text-center text-black text-2xl pb-8">Produk</h1>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className={imageContainerClassName}>
                  <Image
                    fill={true}
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className={imageClass}
                  />
                </div>
                <h3 className={h3ClassName}>{product.name}</h3>
                <p className={priceClassName}>{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
