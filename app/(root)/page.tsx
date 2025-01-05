import Gallery from "@/components/Gallery";
import Link from "next/link";

export default function Home() {
  const dataArray = [
    {
      name: "Kitchen Design",
      image: "/Kitchen Design.jpeg",
      link: "https://tribecacabinetry.com",
    },
    {
      name: "Closet Design",
      image: "/Closet Design.jpg",
      link: "https://saloni.furniture/collection/dressing-rooms",
    },
    {
      name: "Flooring",
      image: "/Flooring.jpg",
      link: "",
    },
    {
      name: "Blinds",
      image: "/Blinds.jpg",
      link: "",
    },
    {
      name: "Custom Art",
      image: "/Custom Art.jpeg",
      link: "https://www.instagram.com/arts.by.naz?igsh=ODNkYTh0M3I3NWk0",
    },
    {
      name: "Furniture",
      image: "/Furniture.jpg",
      link: "https://saloni.furniture",
    },
    {
      name: "Remodeling",
      image: "/product-1.jpg",
      link: "",
    },
    {
      name: "Finance Your Project",
      image: "/product-4.jpg",
      link: "",
    },
  ];
  const brandArray = [
    "/brand/brand-1.svg",
    "/brand/brand-2.svg",
    "/brand/brand-8.svg",
    "/brand/brand-3.svg",
    "/brand/brand-4.svg",
    "/brand/brand-5.svg",
    "/brand/brand-6.png",
    "/brand/brand-7.svg",
    "/brand/brand-9.jpg",
    "/brand/brand-10.png",
    "/brand/brand-11.png",
  ];
  const galleryArray = [
    "/item-1.jpg",
    "/item-2.jpg",
    "/item-3.jpg",
    "/item-4.jpg",
    "/item-5.jpg",
    "/item-6.jpg",
  ];
  return (
    <>
      <section className="section-container">
        <div className="flex flex-wrap justify-center w-full">
          {dataArray &&
            dataArray.map((data, index) => (
              <Link className="block xl:w-1/4 md:w-1/3 w-1/2 px-2 mb-4" href={data.link} key={index}>
                <div className="relative">
                  <img
                    src={data.image}
                    alt="Item"
                    className="w-full h-60 object-cover rounded-sm"
                  />
                  <div className="absolute bottom-4 w-full">
                    <h2 className="font-semibold text-center tracking-wider lg:text-xl sm:text-lg text-base uppercase text-white">
                      {data.name}{" "}
                      <span className="text-sm font-normal lowercase opacity-85 hover:opacity-100">
                        more..
                      </span>
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Gallery</h2>
        <Gallery dataArray={galleryArray} />
      </section>

      <section className="section-container">
        <h2 className="section-title">Featured brands</h2>
        <div className="flex flex-wrap items-center justify-center">
          {brandArray &&
            brandArray.map((link, index) => (
              <div
                key={index}
                className="max-w-60 lg:w-1/6 md:w-1/4 w-1/3 md:px-6 px-2.5 mb-2.5"
              >
                <img src={link} alt="Brand" className="w-full max-h-40 object-bottom object-cover" />
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
