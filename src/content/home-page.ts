import { url } from "inspector";
import Image1 from "../images/Carousel/GR GROUP 1.jpg";
import Image2 from "../images/Carousel/GR GROUP 2.jpg";
import Image3 from "../images/Carousel/GR GROUP 3.jpg";
import { footer } from "./footer";

export const homePage = {
  heroSection: {
      slides: [
        {
          image: Image1,
          title: "Green Riders, Exploring Nature",
          content: "Join our community of passionate cyclists making a positive impact on the environment, one ride at a time.",
          button: { content: "Learn More", url: footer.section4.socialLinks.find(e => e.id == "strava") },
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
      ]
  },
  events: {
      title: "Upcoming Rides",
      rides: [
          {
            title: "Weekend Trail Ride",
            date: "March 15, 2024",
            location: "Green Valley Trail",
            participants: 12
          },
          {
            title: "City Night Ride",
            date: "March 20, 2024",
            location: "Downtown Loop",
            participants: 25
          },
          {
            title: "Mountain Challenge",
            date: "March 25, 2024",
            location: "Mount Green Peak",
            participants: 8
          }
      ]
  }
};