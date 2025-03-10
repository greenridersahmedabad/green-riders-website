import React, { useState, useMemo } from "react";
import { Trophy, Medal, Calendar, User, Filter } from "lucide-react";
import { awards } from "../content/awards";

const Awards = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<number>(0);

  const categories = [
    "all",
    "SR Champion",
    "Legend on Wheels Award",
    "Golden Pedals Awards",
    "Ultra Distance Challenger",
    "Golden Gear Award",
    "Trailblazer Award",
    "Pedal Force Award",
    "Consistent Green Rider Award",
    "Helping Hands Award",
    "Shining Pedal Star Award",
  ];
  const years = [...new Set(awards.map((award) => award.year))].sort(
    (a, b) => b - a
  );

  const filteredAwards = useMemo(() => {
    return awards.filter((award) => {
      const categoryMatch =
        selectedCategory === "all" || award.category === selectedCategory;
      const yearMatch = selectedYear === 0 || award.year === selectedYear;
      return categoryMatch && yearMatch;
    });
  }, [selectedCategory, selectedYear]);
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "SR Champion":
        return "🚴‍♂️";
      case "Legend on Wheels Award":
        return "🏅";
      case "Golden Pedals Awards":
        return "🥇";
      case "Ultra Distance Challenger":
        return "⏳";
      case "Golden Gear Award":
        return "⚙️";
      case "Trailblazer Award":
        return "🔥";
      case "Pedal Force Award":
        return "💪";
      case "Consistent Green Rider Award":
        return "♻️";
      case "Helping Hands Award":
        return "🤝";
      case "Shining Pedal Star Award":
        return "✨";
      default:
        return "🎖️";
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-brand-200 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="h-16 w-16" />
          </div>
          <h1 className="text-4xl font-bold text-center mb-4">Our Champions</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Celebrating the outstanding achievements and contributions of our
            dedicated riders
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white shadow-md py-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-brand-200" />
              <span className="text-gray-600">Filter by:</span>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? "bg-brand-200 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Year Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedYear(0)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedYear === 0
                    ? "bg-brand-200 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Years
              </button>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedYear === year
                      ? "bg-brand-200 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAwards.map((award, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
              >
                <div className="relative h-48">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <span
                      className="text-2xl"
                      role="img"
                      aria-label={award.category}
                    >
                      {getCategoryIcon(award.category)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-brand-200 text-sm font-semibold">
                      {award.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {award.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                  <div className="flex items-center mb-4 text-gray-600">
                    <User className="h-4 w-4 mr-2" />
                    <span>{award.recipient}</span>
                  </div>
                  <p className="text-gray-600">{award.description}</p>
                  <div className="mt-4 flex items-center justify-end">
                    <Medal className="h-5 w-5 text-brand-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards;
