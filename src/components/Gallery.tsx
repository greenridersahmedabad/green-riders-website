import { useState } from "react";
import { galleryImages } from "../content/gallery";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Photos" },
    { id: "group", label: "Group Rides" },
    { id: "adventure", label: "Adventures" },
    { id: "scenic", label: "Scenic Routes" },
  ];

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <>
      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Adventures
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore our collection of memorable moments, breathtaking trails,
            and community events that make Green Riders special.
          </p>

          {/* Gallery Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeFilter === filter.id
                    ? "bg-brand-200 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:border-brand-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-semibold text-lg">
                      {image.title}
                    </h3>
                    <p className="text-brand-100 text-sm capitalize">
                      {image.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;