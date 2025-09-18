import React, { useRef, useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Search from "../component/Search";
import { Button } from "@radix-ui/themes";
import Frame from "../assets/frame.png";
import ArrowLeft from "../assets/arrow-left.png";
import ArrowRight from "../assets/arrow-right.png";
import Location from "../assets/locat.png";

const FrameData = [
  { id: 1, url: Frame, alt: "Frame 1" },
  { id: 2, url: Frame, alt: "Frame 1" },
  { id: 3, url: Frame, alt: "Frame 1" },
];

const cardData = [
  {
    title: "Perumahan Griya 1",
    location: "Jakarta Timur",
    price: "Rp 2.589.500",
    size: "LT 97m² | LB 78m² | L1",
  },
  {
    title: "Perumahan Griya 2",
    location: "Jakarta Barat",
    price: "Rp 2.100.000",
    size: "LT 90m² | LB 75m² | L2",
  },
  {
    title: "Perumahan Griya 3",
    location: "Jakarta Utara",
    price: "Rp 3.000.000",
    size: "LT 100m² | LB 85m² | L1",
  },
  {
    title: "Perumahan Griya 4",
    location: "Jakarta Selatan",
    price: "Rp 2.750.000",
    size: "LT 120m² | LB 90m² | L2",
  },
  {
    title: "Perumahan Griya 5",
    location: "Jakarta Timur",
    price: "Rp 2.300.000",
    size: "LT 110m² | LB 95m² | L1",
  },
];

export default function Home() {
  const [slider, setSlider] = useState(null);
  const [sliderTerdekat, setSliderTerdekat] = useState(null);
  const [sliderFitur, setSliderFitur] = useState(null);
  const sliderRef = useRef(null);
  const sliderTerdekatRef = useRef(null);
  const sliderFiturRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(3); // Menampilkan 3 slide per tampilan
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setSlidesPerView(1); // Menampilkan 1 slide pada layar kecil
      } else if (width >= 768 && width < 1024) {
        setSlidesPerView(2); // Menampilkan 2 slide pada layar ukuran tablet
      } else {
        setSlidesPerView(3); // Menampilkan 3 slide pada layar besar
      }
    };

    updateSlidesPerView(); // Mengatur nilai awal berdasarkan lebar jendela
    window.addEventListener("resize", updateSlidesPerView); // Mengupdate saat resize

    return () => window.removeEventListener("resize", updateSlidesPerView); // Membersihkan listener
  }, []);

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
        <div className="flex justify-center mt-20">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={slidesPerView}
            coverflowEffect={{
              rotate: 0, // Putar slide untuk efek 3D
              stretch: 0, // Mengatur jarak antar slide
              depth: 100, // Mengatur kedalaman 3D
              modifier: 2.5, // Meningkatkan atau mengurangi efek coverflow
            }}
            modules={[EffectCoverflow, Navigation]}
            className="swiper_container"
            ref={swiperContainerRef}
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="xl:w-[468px] lg:w-[400px] md:w-[400px] h-auto rounded-xl overflow-hidden shadow-lg">
                  <div className="w-full bg-gray-300 h-[200px]" />
                  <div className="flex bg-gray-100 items-center justify-between p-2.5 gap-2.5">
                    <div>
                      <h3 className="xl:text-xl lg:text-xl md:text-xl text-md font-semibold text-gray-800">
                        {card.title}
                      </h3>
                      <p className="text-gray-700 xl:text-base lg:text-base md:text-base text-sm">
                        {card.location}
                      </p>
                      <p className="xl:text-sm lg:text-sm md:text-sm text-xs text-gray-400 mt-2">
                        {card.size}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-gray-800 rounded-lg font-semibold xl:text-lg lg:text-lg md:text-lg text-base bg-yellow-400 xl:px-8 lg:px-8 md:px-8 px-2">
                        {card.price}
                      </h3>
                      <h3 className="text-gray-700 xl:text-sm lg:text-sm md:text-sm text-xs text-end">
                        Transaksi
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
