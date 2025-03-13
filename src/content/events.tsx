import GRGP2025 from "/images/blogs/GRGP2025/GRGP2025.jpg";
import Heritage2024 from "/images/blogs/Heritage2024/heritage2024.jpg";
import KantharPurCenturyRide from "/images/blogs/KantharPurCenturyRide/KantharPurCenturyRide.jpg";
import AnniversaryRide2025 from "/images/blogs/AnniversaryRide/AnniversaryRide2025.jpg";
import WomansdayRide2025 from "/images/blogs/WomansdayRide2025/WomansdayRide2025-4.jpg";

export const events = [
    {
        id: "mountain-parikrama",
        title: "Girnar Cycling Parikrama",
        date: "January 5, 2025",
        location: "Mount Girnar Junagadh",
        distance: "73km",
        participants: 210,
        image: GRGP2025,
        description: `GRGP2025 – Green Riders Girnar Parikrama 2025. History Created! Over 200 cyclists from Gujarat and Mumbai converged for a record-breaking 73 km cycling parikrama around the majestic Mount Girnar! This epic spiritual endurance ride took cyclists through Scenic routes, Quaint villages and Lush landscapes. Uniting cycling groups from various cities, the Green Riders Girnar Parikrama 2025 created an unforgettable experience in the historic city of Junagadh. A testament to human endurance, camaraderie, and the love of cycling!`
    },
    {
        id: "ahm-wall-city-ride",
        title: "Heritage Ride-1",
        date: "May 3, 2024",
        location: "Old City Ahmedabad",
        distance: "20 km",
        participants: 15,
        image: Heritage2024,
        description: `Discovering Hidden Gems: 20km Ahmedabad Walled City Heritage Ride We explored the vibrant streets of our own UNESCO World Heritage City! 20 Km Walled City Ride covered Key landmarks: Lakkhadiyo Bridge, Kalupur Swaminarayan Mandir, Poet Dalpatram Chowk, Kalupur Darwaja, Prem Darwaja, Dariyapur Darwaja, Delhi Darwaja, Hathising ni vadi. Special treat - Savoring traditional Navkarsi breakfast at the historic Hathising Dera! A memorable ride through Ahmedabad's rich cultural heritage!`
    },
    {
        id: "kantharpur-century-ride",
        title: "Kantharpur Banyan Tree Century Ride",
        date: "July 28, 2024",
        location: "Kantharpur",
        distance: "122 km",
        participants: 20,
        image: KantharPurCenturyRide,
        description: "Century Ride from Ahmedabad to Kantharpur. 120 Km Ride covering 2 heritage places -Halisha village’s Spiral Well and 500 years old Banyan Tree of Kantharpur. Out of 20, that was the first century ride of 10 riders. Enjoyed wonderful ride with nature passing through the greenery and farms of many villages on the route. Village Halisa on the route of Kantharpur is famous for their ''Spiral Step Well'' -called ''Bhbhammariyo Kuvo”, the unexplored heritage place – we visited this beautiful place. This stepwell is similar to the UNESCO World Heritage well in Portugal. Kantharpur Mahakali Vad, spread across over half an acre is the second largest Banyan tree after Kabirvad."
    },
    {
        id: "green-riders-anniversary-ride",
        title: "Green Riders 1st Anniversary Celebration Ride",
        date: "March 5, 2025",
        location: "Govind Cycle → Gandhi Ashram → Riverfront",
        distance: "18 Km",
        participants: "60+",
        image: AnniversaryRide2025,
        description: "Green Riders celebrated their 1st Anniversary with a special ride covering Govind Cycle, Gandhi Ashram, and the Riverfront. The event saw **100+ registrations and 60+ cyclists participating** in this memorable ride. The morning was filled with energy, camaraderie, and a delightful breakfast after the ride. It was a fantastic celebration of community, cycling, and fitness!"
    },
    {
        id: "womens-day-ride-2025",
        title: "Women's Day Ride",
        date: "March 8, 2025",
        location: "Ahmedabad",
        distance: "10 km",
        participants: "50+",
        image: WomansdayRide2025,
        description: "A special Women's Day Ride organized by Cyclone Cycling Club in association with Decathlon CG Road. Green Riders joined in this empowering 10 km ride celebrating the strength and spirit of women in cycling."
    }
];

export const sortingUtility = <T extends { date: string }>(data: T[], desc: boolean): T[] => {
    return [...data].sort((a, b) => {
        return desc
            ? new Date(b.date).getTime() - new Date(a.date).getTime() // Descending order
            : new Date(a.date).getTime() - new Date(b.date).getTime(); // Ascending order
    });
};
