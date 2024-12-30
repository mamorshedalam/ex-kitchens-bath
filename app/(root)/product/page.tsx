"use client";
import { useState } from "react";
import ProductView from "@/components/ProductView";
import { Mail, MessageSquareText, Phone } from "lucide-react";

export default function ProductPage() {
  const [showView, setShowView] = useState(false);
  const [ViewImage, setViewImage] = useState("");

  const dataArray = [
    {
      img: "/item-1.jpg",
      name: "Admiration Engineered - Maple",
      price: "2,999",
    },
    {
      img: "/item-2.jpg",
      name: "Admiration Engineered - Maple",
      price: "2,999",
    },
    {
      img: "/item-3.jpg",
      name: "Admiration Engineered - Maple",
      price: "2,999",
    },
    {
      img: "/item-4.jpg",
      name: "Admiration Engineered - Maple",
      price: "2,999",
    },
    {
      img: "/item-5.jpg",
      name: "Admiration Engineered - Maple",
      price: "2,999",
    },
    {
      img: "/item-6.jpg",
      name: "Admiration Engineered - Maple",
      price: "2,999",
    },
  ];

  const handleClick = (data: string) => {
    setViewImage(data);
    setShowView(true);
  };
  return (
    <>
      <section className="relative bg-cover bg-center bg-no-repeat bg-[url(/banner.jpg)] before:absolute before:inset-0 before:w-full before:h-full before:bg-black before:opacity-25 before:z-0">
        <div className="section-container text-white relative z-10">
          <h2 className="font-semibold lg:text-5xl sm:text-4xl text-3xl">
            Kitchen Design
          </h2>
        </div>
      </section>
      <section className="section-container">
        <div className="flex flex-wrap justify-center">
          {dataArray &&
            dataArray.map((data, index) => (
              <div key={index} className="w-1/4 px-2 mb-4">
                <div
                  onClick={() => handleClick(data.img)}
                  className="relative rounded overflow-hidden text-white cursor-pointer"
                >
                  <img src={data.img} alt="" />
                  <div className="absolute bottom-0 left-0 w-full p-2">
                    <h3 className="font-medium text-center text-lg">
                      {data.name}
                    </h3>
                    <p className="text-center text-2xl">${data.price}</p>
                  </div>
                  <div className="absolute top-2 right-2 flex flex-col gap-1">
                    <a href="sms:(267)4004003" className="btn-icon h-6 w-6">
                      <MessageSquareText size={12} />
                    </a>
                    <a
                      href="mailto:info@expresskitchensandbath.com"
                      className="btn-icon h-6 w-6"
                    >
                      <Mail size={12} />
                    </a>
                    <a href="tel:(267)4004003" className="btn-icon h-6 w-6">
                      <Phone size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
      {showView && (
        <ProductView imgLink={ViewImage} setShowView={setShowView} />
      )}
    </>
  );
}
