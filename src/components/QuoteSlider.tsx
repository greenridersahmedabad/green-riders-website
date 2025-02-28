import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { quote } from "../content/quotes";

export default function QuoteSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % quote.quotes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? quote.quotes.length - 1 : prev - 1));
  };

  return (
    <section className="bg-white py-16 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-3xl font-bold mb-8">{quote.title}</h2>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition sm:left-4"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition sm:right-4"
        >
          <ArrowRight className="h-6 w-6" />
        </button>

        {/* Quote Slider */}
        <div className="relative w-full overflow-hidden min-h-[180px] flex items-center justify-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="p-6 max-w-full sm:max-w-md"
            >
              <p className="text-gray-600 mb-4">{quote.quotes[currentIndex].quote}</p>
              <div>
                {quote.quotes[currentIndex].strava ? (
                  <a
                    href={quote.quotes[currentIndex].strava}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-500 hover:underline"
                  >
                    {quote.quotes[currentIndex].author}
                  </a>
                ) : (
                  <p className="font-semibold">{quote.quotes[currentIndex].author}</p>
                )}
                <p className="text-sm text-brand-200">{quote.quotes[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {quote.quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full ${currentIndex === index ? "bg-brand-300" : "bg-gray-300"} transition`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
