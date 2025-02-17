import hero from "../images/green-riders-hero.jpg";

export const homePage = {
  heroSection: {
      title: "Green Riders, Exploring Nature",
      content: "Join our community of passionate cyclists making a positive impact on the environment, one ride at a time.",
      button: {
          content: "Join Us Today",
          redirectUrl: "#"
      },
      image: hero
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