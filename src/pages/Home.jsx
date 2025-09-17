import React, { useRef, useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import Search from "../component/Search";
import { Box, Button, Flex } from "@radix-ui/themes";
import Frame from "../assets/frame.png";

const FrameData = [
  { id: 1, url: Frame, alt: "Frame 1" },
  { id: 2, url: Frame, alt: "Frame 1" },
  { id: 3, url: Frame, alt: "Frame 1" },
];

export default function Home() {
  const [slider, setSlider] = useState(null);
  const [sliderTerdekat, setSliderTerdekat] = useState(null);
  const [sliderFitur, setSliderFitur] = useState(null);
  const sliderRef = useRef(null);
  const sliderTerdekatRef = useRef(null);
  const sliderFiturRef = useRef(null);

  useEffect(() => {
    const newSlider = new KeenSlider(sliderRef.current, {
      loop: true,
      slidesPerView: 1,
      spacing: 10,
      centered: true,
    });
    setSlider(newSlider);

    return () => newSlider.destroy();
  }, []);

  useEffect(() => {
    const newSliderTerdekat = new KeenSlider(sliderTerdekatRef.current, {
      loop: true,
      rtl: true,
      slides: {
        perView: 3,
        spacing: 20,
      },
    });
    setSliderTerdekat(newSliderTerdekat);

    return () => newSliderTerdekat.destroy();
  }, []);

  useEffect(() => {
    const newSliderFitur = new KeenSlider(sliderFiturRef.current, {
      mode: "free-snap",
      slides: {
        origin: "center",
        preView: 2,
        spacing: 15,
      },
    });
    setSliderFitur(newSliderFitur);

    return () => newSliderFitur.destroy();
  }, []);

  return (
    <div>
      <div className="relative my-10">
        <Search />
        <div className="keen-slider mt-8" ref={sliderRef}>
          {FrameData.map((frame) => (
            <div key={frame.id} className="keen-slider__slide">
              <img src={frame.url} alt={frame.alt} className="w-full h-auto" />
            </div>
          ))}
        </div>
        {slider && (
          <div className="flex items-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-between w-full px-4">
              <Button onClick={() => slider.prev()} variant="ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414z"
                  />
                </svg>
              </Button>
              <Button onClick={() => slider.next()} variant="ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"
                  />
                </svg>
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-30">
        <div className="flex justify-between mx-10">
          <div className="w-1 h-1" />
          <div className="">
            <h3 className="font-medium text-2xl">Rumah Terdekat</h3>
            <h3 className="flex justify-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="M12.004 11.73q.667 0 1.14-.475t.472-1.143t-.476-1.14t-1.143-.472t-1.14.476t-.472 1.143t.475 1.14t1.144.472M12 19.677q2.82-2.454 4.458-4.991t1.638-4.39q0-2.744-1.737-4.53Q14.62 3.981 12 3.981T7.641 5.766t-1.737 4.53q0 1.852 1.638 4.39T12 19.677m0 1.342q-3.525-3.117-5.31-5.814q-1.786-2.697-1.786-4.909q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 2.212-1.785 4.909q-1.786 2.697-5.311 5.814m0-10.903"
                  />
                </svg>
              </span>
              Jakarta
            </h3>
          </div>
          <div>
            <a href="" className="bg-yellow-200 px-5 py-1.5 rounded-lg">
              Lihat Semua
            </a>
          </div>
        </div>
        <div className="keen-slider mt-20" ref={sliderTerdekatRef}>
          <div className="keen-slider__slide max-w-xs rounded-xl overflow-hidden shadow-lg">
            <div className="w-full bg-gray-300 h-[200px]" />
            <div className="flex bg-gray-100 items-center justify-between p-2.5 gap-2.5">
              <div className="">
                <h3 className="text-xl font-semibold text-gray-800">
                  Perumahan Griya
                </h3>
                <p className="text-gray-700">Jakarta Timur</p>
                <p className="text-sm text-gray-400 mt-2">
                  LT 97m² | LB 78m² | L1
                </p>
              </div>
              <div className="">
                <h3 className="text-gray-800 rounded-lg font-semibold text-lg bg-yellow-400 px-8">
                  Rp 2.589.500
                </h3>
                <h3 className="text-gray-700 text-sm text-end">Transaksi</h3>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide max-w-xs rounded-xl overflow-hidden shadow-lg">
            <div className="w-full bg-gray-300 h-[200px]" />
            <div className="flex bg-gray-100 items-center justify-between p-2.5 gap-2.5">
              <div className="">
                <h3 className="text-xl font-semibold text-gray-800">
                  Perumahan Griya
                </h3>
                <p className="text-gray-700">Jakarta Timur</p>
                <p className="text-sm text-gray-400 mt-2">
                  LT 97m² | LB 78m² | L1
                </p>
              </div>
              <div className="">
                <h3 className="text-gray-800 rounded-lg font-semibold text-lg bg-yellow-400 px-8">
                  Rp 2.589.500
                </h3>
                <h3 className="text-gray-700 text-sm text-end">Transaksi</h3>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide max-w-xs rounded-xl overflow-hidden shadow-lg">
            <div className="w-full bg-gray-300 h-[200px]" />
            <div className="flex bg-gray-100 items-center justify-between p-2.5 gap-2.5">
              <div className="">
                <h3 className="text-xl font-semibold text-gray-800">
                  Perumahan Griya
                </h3>
                <p className="text-gray-700">Jakarta Timur</p>
                <p className="text-sm text-gray-400 mt-2">
                  LT 97m² | LB 78m² | L1
                </p>
              </div>
              <div className="">
                <h3 className="text-gray-800 rounded-lg font-semibold text-lg bg-yellow-400 px-8">
                  Rp 2.589.500
                </h3>
                <h3 className="text-gray-700 text-sm text-end">Transaksi</h3>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide max-w-xs rounded-xl overflow-hidden shadow-lg">
            <div className="w-full bg-gray-300 h-[200px]" />
            <div className="flex bg-gray-100 items-center justify-between p-2.5 gap-2.5">
              <div className="">
                <h3 className="text-xl font-semibold text-gray-800">
                  Perumahan Griya
                </h3>
                <p className="text-gray-700">Jakarta Timur</p>
                <p className="text-sm text-gray-400 mt-2">
                  LT 97m² | LB 78m² | L1
                </p>
              </div>
              <div className="">
                <h3 className="text-gray-800 rounded-lg font-semibold text-lg bg-yellow-400 px-8">
                  Rp 2.589.500
                </h3>
                <h3 className="text-gray-700 text-sm text-end">Transaksi</h3>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide max-w-xs rounded-xl overflow-hidden shadow-lg">
            <div className="w-full bg-gray-300 h-[200px]" />
            <div className="flex bg-gray-100 items-center justify-between p-2.5 gap-2.5">
              <div className="">
                <h3 className="text-xl font-semibold text-gray-800">
                  Perumahan Griya
                </h3>
                <p className="text-gray-700">Jakarta Timur</p>
                <p className="text-sm text-gray-400 mt-2">
                  LT 97m² | LB 78m² | L1
                </p>
              </div>
              <div className="">
                <h3 className="text-gray-800 rounded-lg font-semibold text-lg bg-yellow-400 px-8">
                  Rp 2.589.500
                </h3>
                <h3 className="text-gray-700 text-sm text-end">Transaksi</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-30 mx-10 md:block hidden">
        <div className="flex justify-center xl:gap-14 lg:gap-8 md:gap-2 gap-2">
          <div>
            <div className="bg-gray-300 xl:w-[486px] lg:w-[386px] w-[286px] xl:h-[409px] lg:h-[309px] h-[209px] rounded-2xl" />
          </div>
          <div className="flex justify-center items-center text-center">
            <div className="xl:space-y-20 space-y-8">
              <h3 className="xl:text-3xl lg:text-3xl text-xl xl:w-[600px] w-auto">
                Mau cari rekomendasi rumah yang cepat sesuai konsepmu?
              </h3>
              <a className="bg-blue-400 font-medium px-20 py-2.5 rounded-xl shadow-md cursor-pointer">
                CHATBOT
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="my-30 mx-10 md:block hidden">
        <div className="flex justify-center xl:gap-14 lg:gap-8 md:gap-2 gap-2">
          <div className="flex justify-center items-center text-center">
            <div className="xl:space-y-20 space-y-8">
              <h3 className="xl:text-3xl lg:text-3xl text-xl xl:w-[600px] w-auto">
                Mau hitung KPR rumah yang cepat dan sesuai?
              </h3>
              <a className="bg-blue-400 font-medium px-20 py-2.5 rounded-xl shadow-md cursor-pointer">
                KALKULATOR KPR
              </a>
            </div>
          </div>
          <div>
            <div className="bg-gray-300 xl:w-[486px] lg:w-[386px] w-[286px] xl:h-[409px] lg:h-[309px] h-[209px] rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden block">
        <div className="keen-slider my-10 mx-5" ref={sliderFiturRef}>
          <div className="keen-slider__slide flex flex-col md:flex-row justify-center items-center gap-8 bg-white p-5 rounded-2xl shadow-lg">
            <div className="bg-gray-300 w-full h-[209px] rounded-2xl" />
            <div className="flex justify-center items-center text-center w-full md:w-auto">
              <div className="space-y-5 mb-2">
                <h3 className="text-xl">
                  Mau cari rekomendasi rumah yang cepat sesuai konsepmu?
                </h3>
                <a className="bg-blue-400 font-medium px-12 py-3 md:px-20 md:py-2.5 rounded-xl shadow-md cursor-pointer">
                  CHATBOT
                </a>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide flex flex-col md:flex-row justify-center items-center gap-8 bg-white p-5 rounded-2xl shadow-lg">
            <div className="bg-gray-300 w-full h-[209px] rounded-2xl" />
            <div className="flex justify-center items-center text-center w-full md:w-auto">
              <div className="space-y-5 mb-2">
                <h3 className="text-xl">
                  Mau hitung KPR rumah yang cepat dan sesuai?
                </h3>
                <a className="bg-blue-400 font-medium px-12 py-3 md:px-20 md:py-2.5 rounded-xl shadow-md cursor-pointer">
                  KALKULATOR KPR
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
