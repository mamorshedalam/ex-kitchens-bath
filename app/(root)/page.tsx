import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const dataArray = [
    {
      name: "IN-STOCK CABINETRY",
      description:
        "Looking for cabinets quick? Our in-stock cabinetry is available in a shaker door style in several colors, ready to be delivered to your project site asap!",
      image: "/product-1.jpg",
      link: "",
    },
    {
      name: "IN-STOCK CABINETRY",
      description:
        "Looking for cabinets quick? Our in-stock cabinetry is available in a shaker door style in several colors, ready to be delivered to your project site asap!",
      image: "/product-1.jpg",
      link: "",
    },
    {
      name: "IN-STOCK CABINETRY",
      description:
        "Looking for cabinets quick? Our in-stock cabinetry is available in a shaker door style in several colors, ready to be delivered to your project site asap!",
      image: "/product-1.jpg",
      link: "",
    },
    {
      name: "IN-STOCK CABINETRY",
      description:
        "Looking for cabinets quick? Our in-stock cabinetry is available in a shaker door style in several colors, ready to be delivered to your project site asap!",
      image: "/product-1.jpg",
      link: "",
    },
    {
      name: "IN-STOCK CABINETRY",
      description:
        "Looking for cabinets quick? Our in-stock cabinetry is available in a shaker door style in several colors, ready to be delivered to your project site asap!",
      image: "/product-1.jpg",
      link: "",
    },
    {
      name: "IN-STOCK CABINETRY",
      description:
        "Looking for cabinets quick? Our in-stock cabinetry is available in a shaker door style in several colors, ready to be delivered to your project site asap!",
      image: "/product-1.jpg",
      link: "",
    },
    {
      name: "IN-STOCK CABINETRY",
      description:
        "Looking for cabinets quick? Our in-stock cabinetry is available in a shaker door style in several colors, ready to be delivered to your project site asap!",
      image: "/product-1.jpg",
      link: "",
    },
    {
      name: "IN-STOCK CABINETRY",
      description:
        "Looking for cabinets quick? Our in-stock cabinetry is available in a shaker door style in several colors, ready to be delivered to your project site asap!",
      image: "/product-1.jpg",
      link: "",
    },
  ];
  const brandArray = [
    "/brand/brand-1.svg",
    "/brand/brand-2.svg",
    "/brand/brand-3.svg",
    "/brand/brand-4.svg",
    "/brand/brand-5.svg",
    "/brand/brand-7.svg",
    "/brand/brand-8.png",
    "/brand/brand-9.svg",
    "/brand/brand-10.svg",
    "/brand/brand-11.svg",
    "/brand/brand-12.svg",
    "/brand/brand-13.svg",
  ];
  return (
    <>
      <section className="section-container">
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-x-6 md:gap-x-4 gap-x-2.5 lg:gap-y-12 md:gap-y-9 gap-y-6">
          {dataArray &&
            dataArray.map((data, index) => (
              <div key={index} className="flex flex-col text-center h-full">
                <img
                  src={data.image}
                  alt="Item"
                  className="w-full lg:h-[25rem] md:h-80 h-60 object-cover rounded-sm"
                />
                <h2 className="font-semibold tracking-wider lg:text-xl sm:text-lg text-base uppercase md:mt-4 mt-2">
                  {data.name}
                </h2>
                <p className="mb-4">{data.description}</p>
                <div className="mt-auto">
                  <Link href={data.link} className="btn-black">
                    See more
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="section-container !py-0">
        <div className="section-banner bg-[url('/banner.jpg')]">
          <div className="relative z-10">
            <h1 className="font-semibold lg:text-5xl md:text-4xl text-2xl tracking-wider lg:mb-4 md:mb-2">
              Finance Your Home Project
            </h1>
            <Link href={`/`}>
              <button className="w-full flex items-center md:justify-start justify-center gap-2 md:text-xl text-lg hover:underline">
                <span>Explore your financing options</span>
                <MoveRight size={21} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title">Featured brands</h2>
        <div className="flex flex-wrap items-center justify-center">
          {brandArray &&
            brandArray.map((link, index) => (
              <div
                key={index}
                className="max-w-60 lg:w-1/6 w-1/4 md:px-6 px-2.5"
              >
                <img src={link} alt="Brand" className="w-full" />
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
