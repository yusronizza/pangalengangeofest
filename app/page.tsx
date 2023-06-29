import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-[url('/home.jpg')] bg-cover bg-center">
        <div className="w-full h-full flex  justify-center items-center bg-orange-800/10 backdrop-brightness-[.25]">
          <span className="text-white text-4xl w-1/2 text-center">
            Pangalengan Geotourism Festival
          </span>
        </div>
      </div>
      <div className="w-full bg-white p-10 text-black">
        <div className="flex">
          <div className="w-1/2 p-5">
            <div className="text-2xl">Pertunjukan Seni</div>
            <div>Deskripsiapayta</div>
          </div>
          <div className="w-1/2 p-5">Hai</div>
        </div>
        <div className="flex">
          <div className="w-1/2 p-5">Gambar</div>
          <div className="w-1/2 p-5 text-2xl">UMKM Expo</div>
        </div>
        <div className="flex">
          <div className="w-1/2 p-5 text-2xl">Program Kerja</div>
          <div className="w-1/2 p-5">Hai</div>
        </div>
        <div className="flex">
          <div className="w-1/2 p-5">Hai</div>
          <div className="w-1/2 p-5 text-2xl">Tempat Wisata</div>
        </div>
      </div>
    </>
  );
}
