export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center h-dvh 2xl:py-20 lg:py-12 md:py-9 py-5">
      <h1 className="md:text-2xl text-xl font-bold text-center">
        <span className="block md:text-5xl text-3xl text-red-600">Express</span>
        Kitchens & Bath
      </h1>
      <h2 className="lg:text-6xl md:text-4xl text-3xl uppercase font-semibold">
        coming soon
      </h2>
      <div className="text-sm text-center font-medium leading-tight">
        <p>(267) 400 4003</p>
        <p>info@expresskitchensandbath.com</p>
        <p>36 Chestnut Rd, Paoli, PA 19301</p>
      </div>
    </div>
  );
}
