import React, { useEffect, useState } from "react";
import { quote } from "../content/quotes";

const Testimony = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalSlides = Math.ceil(quote.testimonials.length / 3);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           What Our Riders Say
//         </h2>
//         <div className="relative">
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//               {Array.from({ length: totalSlides }).map((_, slideIndex) => (
//                 <div
//                   key={slideIndex}
//                   className="w-full flex-shrink-0 flex gap-6"
//                 >
//                   {quote.testimonials
//                     .slice(slideIndex * 3, slideIndex * 3 + 3)
//                     .map((testimonial, index) => (
//                       <div
//                         key={index}
//                         className="flex-1 transition-all duration-300"
//                       >
//                         <div
//                           className={`bg-white rounded-lg shadow-md p-6 h-full flex flex-col transform transition-all duration-300 ${
//                             index === 1
//                               ? "scale-105 opacity-100 shadow-xl z-10"
//                               : "scale-95 opacity-60 blur-[0.5px]"
//                           }`}
//                         >
//                           <div className="relative">
//                             <img
//                               src={testimonial.image}
//                               alt={testimonial.author}
//                               className={`w-16 h-16 rounded-full mx-auto mb-4 object-cover transition-transform duration-300 ${
//                                 index === 1 ? "scale-110" : "scale-100"
//                               }`}
//                             />
//                             {index === 1 && (
//                               <div className="absolute inset-0 rounded-full ring-4 ring-brand-200 ring-opacity-50 animate-pulse"></div>
//                             )}
//                           </div>
//                           <p className="text-gray-600 text-sm italic mb-4 flex-grow">
//                             "{testimonial.quote}"
//                           </p>
//                           <div>
//                             <p className="font-semibold">
//                               {testimonial.author}
//                             </p>
//                             <p className="text-sm text-brand-200">
//                               {testimonial.role}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
    return (
    <section className="bg-white py-16">
      {/* quote.quotes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{quote.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quote.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-brand-200">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimony;


//   return (
//     <section className="bg-white py-16">
//       {/* quote.quotes */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center mb-12">{quote.title}</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {quote.testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-md p-6">
//               <p className="text-gray-600 mb-4">{testimonial.quote}</p>
//               <div>
//                 <p className="font-semibold">{testimonial.author}</p>
//                 <p className="text-sm text-brand-200">{testimonial.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );