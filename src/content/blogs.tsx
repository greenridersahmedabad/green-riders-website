import { GRGP2025, AnniversaryRide2025, WomansdayRide2025, WomansdayRide202503, WomansdayRide202502,  } from "../images/blogs"

type BlogPost = {
  title: string;
  slug: string;
  highlightText: string;
  content: string;
  image: string; // Assuming this is a URL or an imported image path
  author: string;
  date: string; // ISO date format (e.g., "2025-01-10")
  category: string;
};


export const blogs:BlogPost[] = [
  {
    title: "GRGP2025: A Journey Around Girnar",
    slug: "grgp2025-journey",
    highlightText: "The Green Riders Girnar Parikrama 2025 ...",
    content: `<div >
      <h2 class="text-3xl font-bold text-brand-400">GRGP2025: A Journey Around Girnar</h2>
      <p class="mt-4 text-brand-500">
        The Green Riders Girnar Parikrama 2025 (GRGP2025) is an unforgettable two-day cycling expedition around the historic 
        <strong class="text-brand-300">Girnar mountain</strong>. Set in the heritage city of <strong class="text-brand-300">Junagadh</strong>, 
        this ride takes cyclists through a mesmerizing blend of nature, history, and endurance.
      </p>
      
      <h3 class="text-xl font-semibold mt-6 text-brand-400">The Route: A Ride Through History and Nature</h3>
      <p class="mt-2 text-brand-500">Starting from Junagadh, cyclists embark on a challenging loop encircling the Girnar range. 
        The route unfolds across diverse landscapes—steep climbs, forested pathways, and open roads offering breathtaking views.</p>

      <ul class="mt-4 space-y-2 text-brand-500">
        <li class="flex items-center"><span class="mr-2">🚴‍♂️</span><strong class="text-brand-300">Junagadh Start</strong> – A city rich in history and tradition.</li>
        <li class="flex items-center"><span class="mr-2">⛰</span><strong class="text-brand-300">Girnar Base</strong> – A towering peak of spiritual significance.</li>
        <li class="flex items-center"><span class="mr-2">🌳</span><strong class="text-brand-300">Gir Forest Trails</strong> – Ride through the lush Gir National Park.</li>
        <li class="flex items-center"><span class="mr-2">🏛</span><strong class="text-brand-300">Ancient Temples & Shrines</strong> – Pass by centuries-old temples.</li>
        <li class="flex items-center"><span class="mr-2">🌅</span><strong class="text-brand-300">Sunrise & Sunset Over Girnar</strong> – Experience magical hues of dawn and dusk.</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 text-brand-400">The Challenge of the Ride</h3>
      <p class="mt-2 text-brand-500">GRGP2025 is not just a test of endurance but also a tribute to the region’s heritage.</p>
      <ul class="mt-4 space-y-2 text-brand-500">
        <li><strong class="text-brand-300">Long-Distance Stretches</strong> – Covering <em>over 200 km</em>.</li>
        <li><strong class="text-brand-300">Elevation Gains</strong> – Climbs with stunning panoramic views.</li>
        <li><strong class="text-brand-300">Ever-Changing Terrain</strong> – Smooth tarmac, rolling hills, and rugged trails.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 text-brand-400">The Spirit of GRGP</h3>
      <p class="mt-2 text-brand-500">
        GRGP2025 is more than a ride—it’s an experience woven with camaraderie, adventure, and appreciation for the land. 
        As the wheels roll and the mountain stands tall, each cyclist becomes part of Girnar’s enduring legacy. 
        <strong class="text-brand-300">Pedal through history, embrace the challenge, and make GRGP2025 an unforgettable journey.</strong>
      </p>
    </div>`,
    image: GRGP2025,
    author: "Green Riders Team",
    date: "January 10, 2025",
    category: "Events",
  },
  {
    title: "Green Riders 1st Anniversary Ride: A Celebration on Wheels",
    slug: "green-riders-1st-anniversary-ride",
    highlightText: "Celebrating One Year of Green Riders with an Unforgettable Ride",
    content: `<div >
      <h1 class="text-3xl font-bold text-brand-400">Green Riders 1st Anniversary Ride: A Celebration on Wheels</h1>
      <p class="text-brand-500"><strong>Date:</strong> March 5, 2025</p>
      <p class="text-brand-500"><strong>Route:</strong> Govind Cycle → Gandhi Ashram → Riverfront</p>
      <p class="text-brand-500"><strong>Participants:</strong> 60+ Cyclists | 100+ Registrations</p>

      <h2 class="text-xl font-semibold mt-6 text-brand-400">A Morning to Remember 🚴✨</h2>
      <p class="mt-2 text-brand-500">
        The air was crisp, the streets were alive, and the spirit of cycling was stronger than ever as 
        <strong class="text-brand-300">Green Riders</strong> celebrated their 1st Anniversary with an unforgettable ride.
      </p>

      <h2 class="text-xl font-semibold mt-6 text-brand-400">The Ride: From Heritage to the Riverfront 🌳🏞️</h2>
      <p class="mt-2 text-brand-500">
        We kicked off from 
        <strong><a href="https://www.instagram.com/govindcyclesahmedabad" class="text-brand-300" target="_blank">Govind Cycle</a></strong>, where riders gathered and geared up. 
        The first stop was the historic <strong class="text-brand-300">Gandhi Ashram</strong>, symbolizing simplicity and resilience. 
        We then pedaled towards <strong class="text-brand-300">the Riverfront</strong>, enjoying the peaceful morning views.
      </p>

      <h2 class="text-xl font-semibold mt-6 text-brand-400">Celebration & Breakfast 🍽️🎊</h2>
      <p class="mt-2 text-brand-500">
        After the ride, we gathered for a well-deserved <strong class="text-brand-300">breakfast and celebration</strong>. Conversations flowed, 
        stories were shared, and friendships were strengthened over coffee and snacks.
      </p>

      <h2 class="text-xl font-semibold mt-6 text-brand-400">Looking Ahead 🚴💚</h2>
      <p class="mt-2 text-brand-500">
        Green Riders started as a small community, and today, it has grown into a thriving group. This ride was a reminder 
        of how far we’ve come and the adventures ahead.
      </p>

      <p class="mt-4 font-bold text-brand-300">
        Keep pedaling, keep inspiring! 🚴‍♂️💚
      </p>
    </div>`,
    image: AnniversaryRide2025,
    author: "Green Riders Team",
    date: "March 5, 2025",
    category: "Events",
  },
  {
    title: "Women's Day Ride",
    slug: "womens-day-ride-2025",
    highlightText: "Celebrating Women's Day on Wheels with Cyclone Cycling Club and Decathlon CG Road.",
    content: `<div>
        <h1 class="text-3xl font-bold text-brand-400">Celebrating Women's Day on Wheels: A Ride to Remember</h1>
        <p class="text-brand-500"><strong>Date:</strong> March 8, 2025</p>
        <p class="text-brand-500"><strong>Route:</strong> Gotila Garden → Decathlon CG Road</p>
        <p class="text-brand-500"><strong>Participants:</strong> Cyclists from multiple communities</p>
        
        <h2 class="text-xl font-semibold mt-6 text-brand-400">A Morning of Empowerment 🚴✨</h2>
        <p class="mt-2 text-brand-500">
        The air was filled with excitement as cyclists gathered at <strong class="text-brand-300">Gotila Garden, Sindhubhavan Road</strong>, ready to embark on a ride symbolizing unity and strength. 
        This <strong class="text-brand-300">10 km journey</strong> through the city streets, ending at <strong class="text-brand-300">Decathlon CG Road</strong>, was a true testament to the power and resilience of women in sports.
        </p>
        
        <img class="w-full h-64 object-cover rounded-lg mt-4" src=${WomansdayRide202503} alt="Women's Day Ride">

        <h2 class="text-xl font-semibold mt-6 text-brand-400">The Ride: Unity in Motion 🌍🚴‍♀️</h2>
        <p class="mt-2 text-brand-500">
            Riders from different backgrounds and skill levels joined together, sharing smiles, encouragement, and a collective passion for cycling. 
            The event showcased that <strong class="text-brand-300">cycling is for everyone</strong>, driven not by gender but by determination and enthusiasm.
        </p>

        <img class="w-full h-64 object-cover rounded-lg mt-4" src=${WomansdayRide202502} alt="Group of cyclists">
        <h2 class="text-xl font-semibold mt-6 text-brand-400">Celebrating Together 🎊💜</h2>
        <p class="mt-2 text-brand-500">
            The ride concluded with a gathering at <strong class="text-brand-300">Decathlon CG Road</strong>, where participants shared stories, enjoyed refreshments, and celebrated the growing presence of women in the cycling community. 
            A special thanks to <strong class="text-brand-300">Cyclone Cycling Club</strong> and <strong class="text-brand-300">Decathlon CG Road</strong> for organizing this memorable event.
        </p>

        <h2 class="text-xl font-semibold mt-6 text-brand-400">Looking Forward 🚴💚</h2>
        <p class="mt-2 text-brand-500">
            Green Riders, staying true to our spirit of <strong class="text-brand-300">'Exploring Nature'</strong>, embraced this ride with enthusiasm. 
            This event reinforced the importance of inclusivity in cycling and paved the way for many more rides to come.
        </p>

        <p class="mt-4 font-bold text-brand-300">
            Keep riding, keep inspiring! 🚴‍♀️💜
        </p>

        <img class="w-full h-64 object-cover rounded-lg mt-4" src=${WomansdayRide2025} alt="Group of cyclists">
        <h2 class="text-xl font-semibold mt-6 text-brand-400">Today's Ride: A Celebration of Strength 🚴‍♀️🔥</h2>
        <p class="mt-2 text-brand-500">
            Today was a special day for cycling enthusiasts as Cyclone Cycling Club, in association with Decathlon CG Road, organized an inspiring Women's Day Ride. 
            The event was a true celebration of strength, resilience, and the unbreakable spirit of women, bringing together riders from different cycling communities. 
            Green Riders were proud to be a part of this empowering ride, pedaling alongside many passionate cyclists to honor the occasion.
        </p>

        <h2 class="text-xl font-semibold mt-6 text-brand-400">A Ride to Remember 🌸</h2>
        <p class="mt-2 text-brand-500">
            As the ride concluded, a sense of accomplishment and joy filled the air. 
            The event successfully highlighted the importance of women in sports, reinforcing the message that <strong class="text-brand-300">cycling is for everyone</strong>. 
            A big shoutout to <strong class="text-brand-300">Cyclone Cycling Club</strong> and <strong class="text-brand-300">Decathlon CG Road</strong> for organizing such a fantastic event and for their efforts in promoting inclusivity in cycling.
        </p>

        <p class="mt-4 font-bold text-brand-300">
            Here's to many more rides that celebrate the power and resilience of women. Until next time, keep riding and keep inspiring! 🚴‍♀️💜
        </p>
    </div>`,
    image: WomansdayRide2025,
    author: "Green Riders Team",
    date: "2025-03-08",
    category: "Events"
}
];
