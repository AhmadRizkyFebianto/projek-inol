import React, { useRef, useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import Search from "../component/Search";
import { Box, Button, Flex } from "@radix-ui/themes";
import Frame from "../assets/frame.png";
import ArrowLeft from "../assets/arrow-left.png";
import ArrowRight from "../assets/arrow-right.png";
import Location from "../assets/locat.png";

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
      mode: "free",
      slides: {
        origin: "center",
        perView: 3,
        spacing: 20,
        size: 0.6,
      },
      breakpoints: {
        "(width: 768px)": {
          loop: true,
          rtl: true,
          slides: {
            origin: "center",
            perView: 2,
            spacing: 20,
          },
        },
        "(width: 384px)": {
          loop: true,
          rtl: true,
          slides: {
            origin: "center",
            perView: 1,
            spacing: 20,
          },
        },
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
              <img
                src={frame.url}
                alt={frame.alt}
                className="w-full h-[500px]"
              />
            </div>
          ))}
        </div>
        {slider && (
          <div className="flex items-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-between w-full px-4">
              <Button onClick={() => slider.prev()} variant="ghost">
                <img src={ArrowLeft} width="30px" height="30px" />
              </Button>
              <Button onClick={() => slider.next()} variant="ghost">
                <img src={ArrowRight} width="30px" height="30px" />
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-30 mx-10">
        <div className="flex justify-between items-center">
          <div className="w-1 h-1 md:block hidden" />
          <div className="">
            <h3 className="font-semibold xl:text-2xl lg:text-2xl md:text-2xl text-lg">
              Rumah Terdekat
            </h3>
            <h3 className="flex xl:justify-center lg:justify-center md:justify-center justify-normal gap-1">
              <span>
                <img src={Location} width="25px" height="25px" />
              </span>
              Jakarta
            </h3>
          </div>
          <div>
            <a
              href=""
              className="bg-yellow-200 px-5 py-1.5 rounded-lg shadow-md"
            >
              Lihat Semua
            </a>
          </div>
        </div>
        <div
          className="keen-slider xl:mt-20 lg:mt-20 md:mt-20 mt-8"
          ref={sliderTerdekatRef}
        >
          <div className="keen-slider__slide max-w-xs rounded-xl overflow-hidden shadow-lg">
            <div className="w-full bg-gray-300 h-[200px]" />
            <div className="flex bg-gray-100 items-center justify-between p-2.5 gap-2.5">
              <div className="">
                <h3 className="xl:text-xl lg:text-xl md:text-xl text-md font-semibold text-gray-800">
                  Perumahan Griya
                </h3>
                <p className="text-gray-700 xl:text-base lg:text-base md:text-base text-sm">
                  Jakarta Timur
                </p>
                <p className="xl:text-sm lg:text-sm md:text-sm text-xs text-gray-400 mt-2">
                  LT 97m² | LB 78m² | L1
                </p>
              </div>
              <div className="">
                <h3 className="text-gray-800 rounded-lg font-semibold xl:text-lg lg:text-lg md:text-lg text-base bg-yellow-400 xl:px-8 lg:px-8 md:px-8 px-2">
                  Rp 2.589.500
                </h3>
                <h3 className="text-gray-700 xl:text-sm lg:text-sm md:text-sm text-xs text-end">
                  Transaksi
                </h3>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide max-w-xs rounded-xl overflow-hidden shadow-lg">
            <div className="w-full bg-gray-300 h-[200px]" />
            <div className="flex bg-gray-100 items-center justify-between p-2.5 gap-2.5">
              <div className="">
                <h3 className="xl:text-xl lg:text-xl md:text-xl text-md font-semibold text-gray-800">
                  Perumahan Griya
                </h3>
                <p className="text-gray-700 xl:text-base lg:text-base md:text-base text-sm">
                  Jakarta Timur
                </p>
                <p className="xl:text-sm lg:text-sm md:text-sm text-xs text-gray-400 mt-2">
                  LT 97m² | LB 78m² | L1
                </p>
              </div>
              <div className="">
                <h3 className="text-gray-800 rounded-lg font-semibold xl:text-lg lg:text-lg md:text-lg text-base bg-yellow-400 xl:px-8 lg:px-8 md:px-8 px-2">
                  Rp 2.589.500
                </h3>
                <h3 className="text-gray-700 xl:text-sm lg:text-sm md:text-sm text-xs text-end">
                  Transaksi
                </h3>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide max-w-xs rounded-xl overflow-hidden shadow-lg">
            <div className="w-full bg-gray-300 h-[200px]" />
            <div className="flex bg-gray-100 items-center justify-between p-2.5 gap-2.5">
              <div className="">
                <h3 className="xl:text-xl lg:text-xl md:text-xl text-md font-semibold text-gray-800">
                  Perumahan Griya
                </h3>
                <p className="text-gray-700 xl:text-base lg:text-base md:text-base text-sm">
                  Jakarta Timur
                </p>
                <p className="xl:text-sm lg:text-sm md:text-sm text-xs text-gray-400 mt-2">
                  LT 97m² | LB 78m² | L1
                </p>
              </div>
              <div className="">
                <h3 className="text-gray-800 rounded-lg font-semibold xl:text-lg lg:text-lg md:text-lg text-base bg-yellow-400 xl:px-8 lg:px-8 md:px-8 px-2">
                  Rp 2.589.500
                </h3>
                <h3 className="text-gray-700 xl:text-sm lg:text-sm md:text-sm text-xs text-end">
                  Transaksi
                </h3>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide max-w-xs rounded-xl overflow-hidden shadow-lg">
            <div className="w-full bg-gray-300 h-[200px]" />
            <div className="flex bg-gray-100 items-center justify-between p-2.5 gap-2.5">
              <div className="">
                <h3 className="xl:text-xl lg:text-xl md:text-xl text-md font-semibold text-gray-800">
                  Perumahan Griya
                </h3>
                <p className="text-gray-700 xl:text-base lg:text-base md:text-base text-sm">
                  Jakarta Timur
                </p>
                <p className="xl:text-sm lg:text-sm md:text-sm text-xs text-gray-400 mt-2">
                  LT 97m² | LB 78m² | L1
                </p>
              </div>
              <div className="">
                <h3 className="text-gray-800 rounded-lg font-semibold xl:text-lg lg:text-lg md:text-lg text-base bg-yellow-400 xl:px-8 lg:px-8 md:px-8 px-2">
                  Rp 2.589.500
                </h3>
                <h3 className="text-gray-700 xl:text-sm lg:text-sm md:text-sm text-xs text-end">
                  Transaksi
                </h3>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide max-w-xs rounded-xl overflow-hidden shadow-lg">
            <div className="w-full bg-gray-300 h-[200px]" />
            <div className="flex bg-gray-100 items-center justify-between p-2.5 gap-2.5">
              <div className="">
                <h3 className="xl:text-xl lg:text-xl md:text-xl text-md font-semibold text-gray-800">
                  Perumahan Griya
                </h3>
                <p className="text-gray-700 xl:text-base lg:text-base md:text-base text-sm">
                  Jakarta Timur
                </p>
                <p className="xl:text-sm lg:text-sm md:text-sm text-xs text-gray-400 mt-2">
                  LT 97m² | LB 78m² | L1
                </p>
              </div>
              <div className="">
                <h3 className="text-gray-800 rounded-lg font-semibold xl:text-lg lg:text-lg md:text-lg text-base bg-yellow-400 xl:px-8 lg:px-8 md:px-8 px-2">
                  Rp 2.589.500
                </h3>
                <h3 className="text-gray-700 xl:text-sm lg:text-sm md:text-sm text-xs text-end">
                  Transaksi
                </h3>
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
      <div className="md:hidden block mx-5">
        <div className="keen-slider my-10" ref={sliderFiturRef}>
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
