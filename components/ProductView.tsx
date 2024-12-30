import { X } from "lucide-react";

type ProductViewProps = {
  setShowView: (show: boolean) => void;
  imgLink: string;
};

export default function ProductView({ setShowView, imgLink }: ProductViewProps) {
  return (
    <section className="fixed inset-0 w-full h-full flex items-center justify-center bg-black/15 backdrop-blur-sm z-[999]">
      <div className="relative w-4/5 max-w-screen-lg">
        <img src={imgLink} alt="" className="w-full rounded-md" />
        <button
          onClick={() => {
            setShowView(false);
          }}
          className="absolute -top-3 -right-3 p-2 bg-white shadow-lg rounded-full hover:bg-rose-600 hover:text-white transition-colors duration-300 ease-in"
        >
          <X size={21} />
        </button>
      </div>
    </section>
  );
}
