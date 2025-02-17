import React from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Weekend Trail Ride",
      date: "March 15, 2024",
      time: "7:00 AM",
      location: "Green Valley Trail",
      distance: "30km",
      difficulty: "Intermediate",
      participants: 12,
      maxParticipants: 20,
      image: "https://images.unsplash.com/photo-1544191696-102ad421359b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "City Night Ride",
      date: "March 20, 2024",
      time: "8:00 PM",
      location: "Downtown Loop",
      distance: "20km",
      difficulty: "Beginner",
      participants: 25,
      maxParticipants: 30,
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const pastEvents = [
    {
      title: "Mountain Challenge",
      date: "February 28, 2024",
      location: "Mount Green Peak",
      distance: "45km",
      participants: 15,
      image: "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-brand-50 min-h-screen">
      {/* Header */}
      <section className="bg-brand-200 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl">Join us for our next cycling adventure!</p>
        </div>
      </section>

      {/* Event Filters */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 rounded-full bg-brand-200 text-white">All Events</button>
            <button className="px-4 py-2 rounded-full bg-white border border-gray-300 hover:border-brand-200 hover:text-brand-200">Adventure</button>
            <button className="px-4 py-2 rounded-full bg-white border border-gray-300 hover:border-brand-200 hover:text-brand-200">BRM</button>
            <button className="px-4 py-2 rounded-full bg-white border border-gray-300 hover:border-brand-200 hover:text-brand-200">Fun Rides</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-brand-200 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-brand-200 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-brand-200 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-brand-200 mr-2" />
                      <span>{event.participants}/{event.maxParticipants} riders</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-semibold text-gray-600">Distance:</span>
                      <span className="ml-2">{event.distance}</span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-600">Difficulty:</span>
                      <span className="ml-2">{event.difficulty}</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full bg-brand-200 text-white px-4 py-2 rounded-lg font-semibold hover:bg-brand-300 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
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
                  <button className="mt-4 text-brand-200 font-semibold hover:text-brand-300 inline-flex items-center">
                    View Recap <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
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