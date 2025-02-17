import React from "react";
import { ArrowRight, Calendar, Users, MapPin } from "lucide-react";
import { homePage } from "../content/home-page";
import HeroCarousel  from "./HeroCarousel";
import Image1 from "../images/Carousel/GR GROUP 1.jpg";
import Image2 from "../images/Carousel/GR GROUP 1.jpg";
import Image3 from "../images/Carousel/GR GROUP 1.jpg";

const dummySlides = [
  {
    image: Image1,
    title: "Explore the Beauty of Nature",
    content: "Discover breathtaking landscapes and immerse yourself in the tranquility of nature.",
    button: { content: "Learn More" },
  },
  {
    image: Image2,
    title: "Adventure Awaits",
    content: "Embark on an exciting journey and make unforgettable memories.",
    button: { content: "Start Now" },
  },
  {
    image: Image3,
    title: "Experience the City Lights",
    content: "Witness the vibrant nightlife and cultural richness of urban landscapes.",
    button: { content: "Discover More" },
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel slides={dummySlides} />
      {/* <section
        className="relative h-[80vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${homePage.heroSection.image}")`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {homePage.heroSection.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            {homePage.heroSection.content}
          </p>
          <button className="bg-brand-200 text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-300 transition-colors inline-flex items-center space-x-2">
            <span>{homePage.heroSection.button.content}</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section> */}

      {/* Upcoming Events */}
      <section className="py-16 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            {homePage.events.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homePage.events.rides.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-brand-200" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-brand-200" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-brand-200" />
                    <span>{event.participants} riders joined</span>
                  </div>
                </div>
                <button className="mt-4 text-brand-300 font-semibold hover:text-brand-400 inline-flex items-center space-x-1">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Riders Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Green Riders changed my perspective on cycling. It's not just about exercise, it's about community and environmental impact.",
                author: "Sarah Johnson",
                role: "Member since 2023",
              },
              {
                quote:
                  "The weekend rides are the highlight of my week. Great routes, amazing people, and a shared mission to protect our planet.",
                author: "Michael Chen",
                role: "Member since 2022",
              },
              {
                quote:
                  "I've made lifelong friends here. The community is supportive, and the rides are always well-organized.",
                author: "Emma Rodriguez",
                role: "Member since 2023",
              },
            ].map((testimonial, index) => (
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

      {/* Join Us CTA */}
      <section className="py-16 bg-brand-200 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of a movement that combines the joy of cycling with
            environmental consciousness.
          </p>
          <button className="bg-white text-brand-300 px-8 py-3 rounded-full font-semibold hover:bg-brand-50 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
