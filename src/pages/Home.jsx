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
  const sliderRef = useRef(null);

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

  return (
    <div>
      <Box my="40px">
        <Search />
        <Box className="keen-slider" ref={sliderRef} mt="30px">
          {FrameData.map((frame) => (
            <Flex key={frame.id} className="keen-slider__slide">
              <img src={frame.url} alt={frame.alt} className="w-full" />
            </Flex>
          ))}
        </Box>
        {slider && (
          <Box className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
            <Flex justify="between">
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
            </Flex>
          </Box>
        )}
        {slider && (
          <Box className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
            <Flex justify="between">
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
            </Flex>
          </Box>
        )}
      </Box>
    </div>
  );
}
