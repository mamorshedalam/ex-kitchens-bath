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
    </>
  );
}
