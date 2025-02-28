import { useParams } from "react-router-dom";
import { Calendar, MapPin, Users, ArrowLeft } from "lucide-react";
import { events } from "../content/events"; // Assuming you have an events data file
import { Link } from "react-router-dom";

export default function EventDetails() {
  const { eventId } = useParams();
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return <div className="flex items-center justify-center h-screen text-gray-600 text-xl">Event not found</div>;
  }

  return (
    <div className="min-h-screen  mx-auto p-6 bg-brand-50 flex flex-col">
      {/* Back Button */}
        <Link to="/events" className="text-brand-200 font-semibold flex items-center">
          <ArrowLeft className="h-5 w-5 mr-2" /> Back to Events
        </Link>

      {/* Main Event Content */}
      <div className="w-full h-full flex flex-col justify-center items-center p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl w-full">
          <img src={event.image} alt={event.title} className="w-full h-[40vh] object-cover" />
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{event.title}</h1>
            <p className="text-gray-600 mb-5 text-lg">{event.description}</p>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-6 w-6 text-brand-200 mr-2" />
                <span className="text-lg">{event.date}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-brand-200 mr-2" />
                <span className="text-lg">{event.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-brand-200 mr-2" />
                <span className="text-lg">{event.participants} riders participated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
