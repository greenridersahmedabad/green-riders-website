import React, { useState } from "react";
import { Calendar, MapPin, Users, ArrowRight, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { sortingUtility, events } from "../content/events";
import { Link } from "react-router-dom";

const Events = () => {
  const [isDescending, setIsDescending] = useState(true);

  const toggleSortOrder = () => {
    setIsDescending(!isDescending);
  };

  return (
    <div className="bg-brand-50 min-h-screen">
      {/* Header */}
      <section className="bg-brand-200 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Events</h1>
          <p className="text-xl">Our cycling adventure!</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Past Events */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              Past Events
              <button
                onClick={toggleSortOrder}
                className={`ml-2 px-2 py-1 bg-brand-200  text-white rounded-full bg-brand-300 transition`}
              >{isDescending ? <ArrowUp className="h-5 w-5" /> : <ArrowDown className="h-5 w-5" />}
              </button>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sortingUtility(events, isDescending).map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{event.title}</h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-brand-200 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-brand-200 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-brand-200 mr-2" />
                      <span>{event.participants} riders participated</span>
                    </div>
                  </div>
                  <Link
                    to={`/events/${event.id}`}
                    className="text-brand-200 font-semibold hover:text-brand-300 inline-flex items-center"
                  >
                    View Recap <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
