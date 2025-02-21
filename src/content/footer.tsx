import { Instagram, Bike, Mail, MapPin, Youtube } from "lucide-react";

export const whatsappNumber = "919825556300";
const message = "Hi Green Riders! I'm excited to join your cycling community and start pedaling with like-minded riders.";

export const footer = {
  copyright: `© ${new Date().getFullYear()} Green Riders. All rights reserved. Version: ${__APP_VERSION__}`,
  section1: {
    title: "Green Riders",
    content:
      "Join our community of cycling enthusiasts and make a positive impact on the environment.",
  },
  section2: {
    title: "Quick Links",
    links: [
      {
        label: "About Us",
        url: "/about",
      },
      {
        label: "Blog",
        url: "/blog",
      },
      {
        label: "Events",
        url: "/events",
      },
      {
        label: "Contact",
        url: "#contact",
      },
    ],
  },
  section3: {
    title: "Contact Us",
    contactList: [
      {
        icon: <Mail className="h-5 w-5" />,
        title: "greenriders.ahmedabad@gmail.com",
        link: "mailto:greenriders.ahmedabad@gmail.com",
        target: "_blank"
      },
      {
        icon: <MapPin className="h-5 w-5" />,
        title: "Ahmedabad",
        link: "https://www.google.com/maps/place/Ahmedabad,+Gujarat/@23.0204741,72.4149339,66406m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395e848aba5bd449:0x4fcedd11614f6516!8m2!3d23.022505!4d72.5713621!16zL20vMDFkODhj?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D",
        target: "_blank"
      },
    ],
  },
  section4: {
    title: "Follow Us",
    socialLinks: [
      {
        id: "instagram",
        icon: <Instagram className="h-6 w-6" />,
        link: "https://www.instagram.com/green_riders_ahmedabad",
        target: "_blank"

      },
      {
        id: "strava",
        icon: <Bike className="h-6 w-6" />,
        link: "https://www.strava.com/clubs/green-riders-ahmedabad",
        target: "_blank"

      },
      {
        id: "youtube",
        icon: <Youtube className="h-6 w-6" />,
        link: "https://youtube.com/@greenriderscyclinggroupamdavad",
        target: "_blank"
      },
    ],
    sl : {
      instagram:{
          id: "instagram",
          icon: <Instagram className="h-6 w-6" />,
          link: "https://www.instagram.com/green_riders_ahmedabad",
          target: "_blank"
  
        },
        strava:{
          id: "strava",
          icon: <Bike className="h-6 w-6" />,
          link: "https://www.strava.com/clubs/green-riders-ahmedabad",
          target: "_blank"
  
        },
        youtube: {
          id: "youtube",
          icon: <Youtube className="h-6 w-6" />,
          link: "https://youtube.com/@greenriderscyclinggroupamdavad",
          target: "_blank"
        },
    },

  },
  joinUs: {
    whatsappRedirect: {
      url: `https://wa.me/${whatsappNumber}?text=${message}`
    },
    stravaRedirect:{
      url: `https://www.strava.com/clubs/green-riders-ahmedabad`
    }
  }
};
