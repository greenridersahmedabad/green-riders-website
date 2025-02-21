import { useParams } from "react-router-dom";
import { Calendar, MapPin, Users, ArrowLeft } from "lucide-react";
import { events } from "../content/events"; // Assuming you have an events data file
import { Link } from "react-router-dom";

export default function EventDetails() {
  const { eventId } = useParams();
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    debugger;
    return <div className="text-center text-gray-600">Event not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/events" className="text-brand-200 font-semibold flex items-center mb-4">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Events
      </Link>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h1>
          <p className="text-gray-600 mb-4">{event.description}</p>
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
          {/* <button className="mt-4 bg-brand-200 text-white px-4 py-2 rounded-lg font-semibold hover:bg-brand-300">
            View Gallery
          </button> */}
        </div>
      </div>
    </div>
  );
}
