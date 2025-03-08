import { useState, useEffect, FC } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroCarouselPros {
  slides: {
    image: string;
    title: string;
    content: string;
    button: {
      content: string;
    };
  }[]
}


const HeroCarousel: FC<HeroCarouselPros> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === current && (
            <motion.div
              key={index}
              className="absolute inset-0 bg-cover bg-center flex items-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${slide.image}')`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white flex flex-col justify-end h-[90vh] pb-[10vh]">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                  {slide.content}
                </p>
                {/* <button className="bg-brand-200 text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-300 transition-colors inline-flex items-center space-x-2">
                  <span>{slide.button.content}</span>
                  <ArrowRight className="h-5 w-5" />
                </button> */}
              </div>

            </motion.div>
          )
        ))}
      </AnimatePresence>

      {!isMobile && (
        <>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-gray-700"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-gray-700"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </>
      )}
    </section>
  );
};

export default HeroCarousel;
