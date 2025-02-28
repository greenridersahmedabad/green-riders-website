import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import {quote} from "../content/quotes";

export default function QuoteSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % quote.quotes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? quote.quotes.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">{quote.title}</h2>

        {/* Quote Slider */}
        <div className="relative w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <p className="text-gray-600 mb-4">
                {quote.quotes[currentIndex].quote}
              </p>
              <div>
                <p className="font-semibold">{quote.quotes[currentIndex].author}</p>
                <p className="text-sm text-brand-200">
                  {quote.quotes[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevSlide}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {quote.quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full ${
                currentIndex === index ? "bg-brand-300" : "bg-gray-300"
              } transition`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
