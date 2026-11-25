export interface ResortPhoto {
  id: number;
  url: string;
  title: string;
  category: 'exterior' | 'rooms' | 'pool' | 'nature' | 'dining';
  caption?: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  photoUrl: string;
  badge: string;
  iconName: string;
}

export interface ReviewItem {
  author: string;
  avatar: string;
  date: string;
  rating: number;
  content: string;
  highlight?: string;
}

export const getOptimizedPhotoUrl = (url: string, width = 800): string => {
  if (!url) return '';
  if (url.includes('googleusercontent.com')) {
    return url.replace(/=(s0|w\d+.*)?$/, `=w${width}-no`);
  }
  return url;
};

export const RESORT_INFO = {
  name: "Nature's Harmony Resort",
  tagline: "Where Nature Meets Your Soul",
  secondaryTagline: "Stay Close to Nature. Feel Closer to Yourself.",
  address: "On Chiplun Guhagar Road, A/p-Rampur, Tal-Chiplun, Jodhagaon, Maharashtra 415701, India",
  phone: "+91 7666173397",
  rawPhone: "917666173397",
  email: "contact@naturesharmonyresort.com",
  hours: "Monday – Sunday: 24 Hours Open",
  googleRating: 4.7,
  googleReviewCount: "628+",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJYQPBYFT86TsRAoM-S1ALipI",
  distance: {
    guhagarBeach: "Approx. 30 mins drive",
    chiplunStation: "Approx. 20 mins drive",
    mumbai: "Approx. 5.5 hours drive",
    pune: "Approx. 4.5 hours drive"
  }
};

// Curated genuine photos from the 72 extracted photos
export const RESORT_PHOTOS: ResortPhoto[] = [
  {
    id: 1,
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLcjDfWyeq_u1I-nl-xSRBdeJJmOhhEqAjnt7lmGPH0mfRkVOPo4vLahMu5sO77ml06Ni0FpGUGZsAvyFN8eKKSxAYB9bEmVwMqqCRTIbz1xXUR2QVVXSzXZdwU2X1GU2ma6LjOBHzXaxWDv=s0",
    title: "Resort Cottage & Balconies at Dusk",
    category: "exterior",
    caption: "Warm evening lights glowing on the red-brick Konkan architecture and wooden verandahs.",
    featured: true
  },
  {
    id: 2,
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLcK7U9p__FGK899uzGsc4C0kgsbnTN4hTnh79TnFLzUVsY_hyPAs7ryA8GH55YnXxrvHdzkABc6muyO1SW2hH6apV1ddakQ2IRUMDi-3cYE_uUGupfOA7OD3DbEsdrnP8q-6RiksRjINqMA=s0",
    title: "Scenic Canopy View from Resort Balcony",
    category: "nature",
    caption: "Panoramic overlook of the red-tiled roofs nestled inside lush betel-nut and coconut palms.",
    featured: true
  },
  {
    id: 3,
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLdGdaDGOkFipELVkpAJkjtRF6wT5w38Qa71I25St8oVR_juKQtY94ZhMVZ1vhyBi-Onmkktc-1neuAZnbZKgBlJxf-e1fOcdmIyUa5RHDoo2rnBlkvAlm_NcnfrH0ITg0C63NyqYnm9k4v9=s0",
    title: "Spacious AC Guest Suite",
    category: "rooms",
    caption: "Air-conditioned rooms with comfortable bedding, geyser, and peaceful garden views.",
    featured: true
  },
  {
    id: 4,
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLegWOvSmpf1uGLkZMVz3WEchYQSMnQBlthExEgH7TnF2zZQXajrt4UT-SkriSsIiWqSOEb4iR03zw4pYpC8IJiRaKqA5nrsSUdpIJNsKjOo0wcsUVUB_RH8NSufiz179cqHHjyeG0MTd-w6=s0",
    title: "Illuminated Garden Pathway at Night",
    category: "exterior",
    caption: "Lantern-lit stone trail meandering through tropical betel nut trees and flowering shrubs.",
    featured: true
  },
  {
    id: 5,
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLfEoCTUnKt2YWDPI5hFtY3g-MlJQpH575yBujL8nq9x3p4vYmZ_7jFoQITfn4tX2icZPeCkeP6Vs47TDNT83WnTiDADbb2f0X_NMLeiEiqJTO3YsawrU8OYHH9uxl9rlIgx4kAcJYEXn4DX=s0",
    title: "Family Celebration in Resort Gazebo",
    category: "dining",
    caption: "Heartwarming family celebrations and reunions hosted with Dr. Ravrane's personal touch.",
    featured: true
  },
  {
    id: 6,
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLfcCq7hpGTWScs3NW79y9gfcF_7Zle1EGZPx2rr7nEkDmSayINfFDtPd9mkbkXVZFokWfSDhZ1Tv4ZKHMChTl4WKHAArwiDxCm6BFunswQPu0inDaomX5yM7oHMXVZOXZsW-qIYmOR-FNw=s0",
    title: "Resort Aviary & Exotic Parrots",
    category: "nature",
    caption: "Colorful birds and friendly aviary in the center of the resort's lush grounds.",
    featured: true
  },
  {
    id: 7,
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLeF5uiXffYeohtJZNsr2z0ota-snCJ0e972qZoVgAnXPGiiVF9UQ2CxKBRDQjjKHVlyRRm38YQyedex3SGydTL16BaTfjtoZmVW-LQ_wgdU4B1bMbruLqWpcC_pW7CnF2RE3EdTCKmAjZJH=s0",
    title: "Night Garden Trail with Handcrafted Statues",
    category: "exterior",
    caption: "Serene night strolls with lantern-lit elephant statues along brick pathways.",
    featured: false
  },
  {
    id: 8,
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLf2Oo47orh0kE_FfCM_erIEKwcXljIc-B6Z2uCSbTY5oWuaQ6x1fYUWoSiwz9IHjUSL60pbS852TjsHDY8OZDvoGE-21ymyYeAXAPbeRAdxd6uaocXC_jE1FC9vFJvJ2VOlqfuXkcwFVeru=s0",
    title: "Floral Entrance Gate with Bougainvillea",
    category: "exterior",
    caption: "Welcoming wrought iron arch draped in vibrant blooming bougainvillea.",
    featured: false
  },
  {
    id: 9,
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLc5pW2ZEfY4jmcqX0jAZY0Vz3MrCnsT03hEmKbmksycSYyl0G_FuNCKwlDRumILF4CzKhG9Re6zPGM2BZCPzQuukk1yuE4d1HdOQ0bKcUu1-lNDOYaGrWliUDRtL9iOfEhpdufdllF-VcEs=s0",
    title: "Traditional Celebration Stage & Warli Art",
    category: "dining",
    caption: "Decorated event stage featuring traditional Konkani Warli art motifs for special functions.",
    featured: false
  },
  {
    id: 10,
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLe5kIfuebTaOdJR1b-RoKAOVgpYEeeLYp154Z_lEanqxphWi8-OZdhiSev3HL8HwwTpnI9teqMQYnR4bwuZcsMujwP-uxXQjKhub4ajntEArV4W2vOvXHmjgvEOwANKfCsRj9qADaxGw-c=s0",
    title: "Banquet & Gathering Hall",
    category: "dining",
    caption: "Long dining tables and celebration seating for college reunions and group get-togethers.",
    featured: false
  },
  {
    id: 11,
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLeJmO6grrLW7eezFK3AQLTpPdXOI-KCJGw9g3W_sY8Y6HcEmg4WujGJk-1AHNecSNUmmKfBKMYFnlfAXInTH4H_NI86RUlOiMTFKdx_w8XzyiI5o1wTitJMeiKc25ukFHBIl3hQKZFq4r8=s0",
    title: "Covered Swimming Pool",
    category: "pool",
    caption: "Protected covered swimming pool suitable for daytime recreation and all-weather swimming.",
    featured: true
  },
  {
    id: 12,
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLe4ESwTWH2EFVI39a66Hbk1YCMCSDgkhOfb8D1XAqkG6BLo3xyhbN1eBP-ZO6498jgA4Zpaft8USe2P08-RzWgd5RiOc3VPKtO7ZNf5D9Cv9xGLyUNLkEkuD94wxc1GvtOsaJPe0y9LtvFJ=s0",
    title: "Open-Air Garden Lounge & Carved Sofa",
    category: "exterior",
    caption: "Spacious wooden outdoor pavilion to relax with tea and conversation.",
    featured: false
  },
  {
    id: 13,
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLf7SdsfIsQ4Dmb-d047QcA6scwcCU2RuCXBr4tNZk43eK_gfUl7ml0QaDTSHK2QztkP9aiAeC6StyWgJyoPjAQGHW7U5Rjm7WiKLTImh-pLw5SmvyCDOy5eyNG_Lx5WXZqQVxlOAeYwTew=s0",
    title: "Fresh Farm Harvest — Sweet Starfruit",
    category: "dining",
    caption: "Organic fruit harvested directly from the resort's sprawling agro-tourism grounds.",
    featured: false
  },
  {
    id: 14,
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLeYpNBHae8WLKe-zSvI0HmDbyltsPJFgZ51xjeQjk4jGU-Kgr4RuQ_FHXVyzbiRY_pOjgU4v4qCIV7j-_Hgx8sfpBlbYM4Z6lpdRD0_AIMZtsZH8StdnLh2tBmMW6raXaZ6StQXofUn4g0=s0",
    title: "Traditional Bullock Cart Feature",
    category: "nature",
    caption: "Authentic rural Konkan photo backdrop surrounded by betel nut trees.",
    featured: false
  },
  {
    id: 15,
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLc1FK7vwjSciIfizIHhEL4uhnqMY9ABBY41GBBgJzp4ad-63TpuRvsOqYOMbKhhcRK9LcNriolD1p7qoZ6n4mXphROfVIs8iBmzKlegZYwTlR_-Nn63_Kc_9YsxTnEcBgqZoaPtWMm6u2E=s0",
    title: "Guests on the Nature Trail",
    category: "nature",
    caption: "Generations of families enjoying peaceful walks under tall palm canopies.",
    featured: false
  },
  {
    id: 16,
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLfiGW8VPAjzB_6Zf7kZeXSdQfIfSvVeDQHG_KiEMrIgc9KPqLBDOw8VOZpGxysl703yIb4ntKkCAmBLFye-omGCYGNMHhCjnj9ZiU9GFVDPEGOf3Dq1HP8xDGct93rRpoeksF2_CuUniio=s0",
    title: "Wild Orchid & Konkan Blossom",
    category: "nature",
    caption: "Delicate native flowering flora thriving in the moist, fertile red soil.",
    featured: false
  },
  {
    id: 17,
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLd_ZbQ2TFBHPOmt3CjPEjQBeerdltrMCc7-jYSl4XQ6d-3yWLukbcWeaMCLVHvwGEzRjtA8kqPH3Tv8yzyV1hqrOkZ70ENsCqvc47v-QBt4M1qd3rmBmwRKocNpsiVOTOHBsL7p2wXxgbw=s0",
    title: "Two-Story Wooden Balcony Cottage",
    category: "rooms",
    caption: "Traditional Konkan architecture with wooden balustrades and wrap-around verandahs.",
    featured: false
  },
  {
    id: 18,
    url: "https://lh3.googleusercontent.com/grass-cs/AABkmLeQjcjNlTUTNZFPT_UFGMLlS-alLoW5WRjsRyCAbeShCdxbR_XGf6uwnuJhGzLb6ybI6MjXtWkTnIVjrXpj4mySLw2xzCZAWQ_Ca3SN7dAUYHaqbgFnn8oXedOPlU8NbpKGaXdT31A6JfB6=s0",
    title: "Lotus Lily Pond in Resort Garden",
    category: "nature",
    caption: "Water lily pond reflecting the blue morning sky in the resort gardens.",
    featured: false
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "all-inclusive",
    title: "All Inclusive",
    shortDesc: "Complete stress-free package covering comfortable stay, all meals, welcome drink, and resort amenities.",
    fullDesc: "Experience the convenience of an all-inclusive stay at Nature's Harmony Resort. Includes comfortable AC room accommodation, welcome drink upon arrival, two full unlimited Konkani meals (lunch & dinner), evening tea, and hearty breakfast with freshly prepared delicacies.",
    photoUrl: "https://lh3.googleusercontent.com/grass-cs/AABkmLcjDfWyeq_u1I-nl-xSRBdeJJmOhhEqAjnt7lmGPH0mfRkVOPo4vLahMu5sO77ml06Ni0FpGUGZsAvyFN8eKKSxAYB9bEmVwMqqCRTIbz1xXUR2QVVXSzXZdwU2X1GU2ma6LjOBHzXaxWDv=s0",
    badge: "Popular Choice",
    iconName: "ShieldCheck"
  },
  {
    id: "family-stay",
    title: "Family Stay",
    shortDesc: "Spacious family accommodations, children's play area, safe pool, and warm home-like hospitality.",
    fullDesc: "Designed with families in mind, our resort provides a secure, natural sanctuary where children can play safely on open lawns, watch farm animals, splash in the covered pool, and enjoy wholesome home-cooked food prepared with love.",
    photoUrl: "https://lh3.googleusercontent.com/grass-cs/AABkmLe4ESwTWH2EFVI39a66Hbk1YCMCSDgkhOfb8D1XAqkG6BLo3xyhbN1eBP-ZO6498jgA4Zpaft8USe2P08-RzWgd5RiOc3VPKtO7ZNf5D9Cv9xGLyUNLkEkuD94wxc1GvtOsaJPe0y9LtvFJ=s0",
    badge: "Family Friendly",
    iconName: "Users"
  },
  {
    id: "holiday-resort",
    title: "Holiday Resort",
    shortDesc: "An idyllic holiday escape away from urban noise, tucked into the serene hills of Chiplun.",
    fullDesc: "Nature's Harmony is your weekend haven to disconnect from deadlines and reconnect with yourself. Wake up to the melody of chirping birds, stroll through fruit orchards, take a dip in the pool, and soak in the soothing Konkan climate.",
    photoUrl: "https://lh3.googleusercontent.com/grass-cs/AABkmLegWOvSmpf1uGLkZMVz3WEchYQSMnQBlthExEgH7TnF2zZQXajrt4UT-SkriSsIiWqSOEb4iR03zw4pYpC8IJiRaKqA5nrsSUdpIJNsKjOo0wcsUVUB_RH8NSufiz179cqHHjyeG0MTd-w6=s0",
    badge: "Serene Retreat",
    iconName: "Palmtree"
  },
  {
    id: "honeymoon",
    title: "Honeymoon",
    shortDesc: "Intimate and romantic nature stay surrounded by tranquil greenery and starry night skies.",
    fullDesc: "Celebrate the start of your journey together in privacy and natural elegance. Enjoy romantic candle-lit dining, peaceful walks under coconut groves, and personalized hospitality attentive to every special request.",
    photoUrl: "https://lh3.googleusercontent.com/grass-cs/AABkmLeF5uiXffYeohtJZNsr2z0ota-snCJ0e972qZoVgAnXPGiiVF9UQ2CxKBRDQjjKHVlyRRm38YQyedex3SGydTL16BaTfjtoZmVW-LQ_wgdU4B1bMbruLqWpcC_pW7CnF2RE3EdTCKmAjZJH=s0",
    badge: "Romantic Escape",
    iconName: "Heart"
  },
  {
    id: "nature-experience",
    title: "Nature Experience",
    shortDesc: "Immersive agro-tourism, flora, bird watching, and farm animals in a genuine Konkan nature reserve.",
    fullDesc: "Immerse your senses in pristine Konkan biodiversity. Discover local flora, betel nut plantations, ducks, hens, friendly domestic animals, and abundant native bird species while enjoying pollution-free fresh air.",
    photoUrl: "https://lh3.googleusercontent.com/grass-cs/AABkmLfcCq7hpGTWScs3NW79y9gfcF_7Zle1EGZPx2rr7nEkDmSayINfFDtPd9mkbkXVZFokWfSDhZ1Tv4ZKHMChTl4WKHAArwiDxCm6BFunswQPu0inDaomX5yM7oHMXVZOXZsW-qIYmOR-FNw=s0",
    badge: "Eco Immersion",
    iconName: "Leaf"
  },
  {
    id: "spa",
    title: "Spa & Wellness",
    shortDesc: "Unwind your body and mind in calm, peaceful natural surroundings. Enquire for wellness sessions.",
    fullDesc: "Complement your stay with restful relaxation. Enquire with our hosts about customized rejuvenation sessions, relaxation therapies, and wellness arrangements during your stay.",
    photoUrl: "https://lh3.googleusercontent.com/grass-cs/AABkmLd_ZbQ2TFBHPOmt3CjPEjQBeerdltrMCc7-jYSl4XQ6d-3yWLukbcWeaMCLVHvwGEzRjtA8kqPH3Tv8yzyV1hqrOkZ70ENsCqvc47v-QBt4M1qd3rmBmwRKocNpsiVOTOHBsL7p2wXxgbw=s0",
    badge: "Rejuvenation",
    iconName: "Sparkles"
  },
  {
    id: "swimming-pool",
    title: "Swimming Pool",
    shortDesc: "Clean, covered swimming pool suitable for relaxing laps, family fun, and all-weather swimming.",
    fullDesc: "Our covered swimming pool ensures refreshing fun protected from direct sun and monsoon rains. Thoroughly filtered and maintained for safety and hygiene, it's a favorite for kids and adults alike.",
    photoUrl: "https://lh3.googleusercontent.com/grass-cs/AABkmLeJmO6grrLW7eezFK3AQLTpPdXOI-KCJGw9g3W_sY8Y6HcEmg4WujGJk-1AHNecSNUmmKfBKMYFnlfAXInTH4H_NI86RUlOiMTFKdx_w8XzyiI5o1wTitJMeiKc25ukFHBIl3hQKZFq4r8=s0",
    badge: "All-Weather Covered",
    iconName: "Waves"
  },
  {
    id: "wedding-venue",
    title: "Wedding Venue & Get-Togethers",
    shortDesc: "Lush outdoor event lawn, gazebo, sound system, and catering for weddings, reunions, and celebrations.",
    fullDesc: "Host your intimate wedding, college reunion, birthday milestone, or family get-together amidst nature. Complete with in-built audio setup, microphone, open banquet lawn, gazebo, and authentic Konkani catering.",
    photoUrl: "https://lh3.googleusercontent.com/grass-cs/AABkmLe5kIfuebTaOdJR1b-RoKAOVgpYEeeLYp154Z_lEanqxphWi8-OZdhiSev3HL8HwwTpnI9teqMQYnR4bwuZcsMujwP-uxXQjKhub4ajntEArV4W2vOvXHmjgvEOwANKfCsRj9qADaxGw-c=s0",
    badge: "Celebrations",
    iconName: "Calendar"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    author: "Ashka Chauhan",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWV_jRVzYcGv0GvfOc2GtCrKE5hqeAZb-iQmtjmOxA9OVldKFJW=s120-c-rp-mo-br100",
    date: "November 2026",
    rating: 5,
    highlight: "Homemade food served with love, warmth, and care – truly feels like home!",
    content: "Beautiful ambience, delicious food, best owner with warm hospitality, excellent service, and clean, comfortable rooms – an overall wonderful experience.🌴 Dr. Sir, Ma’am, Khedekar Ji and Shree are truly wonderful people to interact with. Their warm behaviour, kindness, and welcoming nature make the experience even more special! Homemade food, freshly prepared by Dr. Ma’am and served with love, warmth, and care – truly feels like home!"
  },
  {
    author: "Jyotsana",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKFpoGRE7h8FcPhpUYUwfCPKl88AI8kigBq9f117W43moDDR-ao=s120-c-rp-mo-br100",
    date: "November 2026",
    rating: 5,
    highlight: "They make you feel like you are staying with your own family rather than at a resort.",
    content: "An amazing experience at Nature’s Harmony Resort!🌿 A perfect place surrounded by beautiful nature, offering delicious and tasty food with a wonderful homely touch. The staff is extremely caring, warm, and welcoming. They make you feel like you are staying with your own family rather than at a resort. Loved the peaceful atmosphere, natural surroundings, tasty food, and above all, the genuine hospitality."
  },
  {
    author: "Meghana Siddhe",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocK95AikmwtGzoGXrkIfrYyXJJtvapeENwpZq7jI69SXFy42bg=s120-c-rp-mo-br100",
    date: "November 2026",
    rating: 5,
    highlight: "The owner recited a beautiful poem on friendship. Clean pool, AC rooms, and unforgettable Ghawane!",
    content: "We had booked almost all the rooms at this resort for our college get-together, and we had an absolutely wonderful time! The biggest highlight was the exceptional hospitality. The owner personally monitored room services and food arrangements, and even joined us to recite a beautiful poem on friendship. Clean spacious rooms with AC and geysers, clean swimming pool, built-in sound system, and delicious food (especially the Ghawane and fish!). Highly recommended for family vacations and group get-togethers."
  },
  {
    author: "Runali Purohit",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWx0AAWXQH6-9et3EJlSW2ORAOp9jx55MMRGK3znp8Elafrbfgk=s120-c-rp-mo-br100",
    date: "October 2026",
    rating: 5,
    highlight: "Fresh farm-grown vegetables, lush greenery, and lovely animals on the property.",
    content: "What makes this place truly special is its delicious food, prepared using fresh, farm-grown vegetables, the lush greenery that attracts and shelters a variety of birds, and the lovely animals (ducks, dogs, cats, hens, etc.) on the property. It’s a perfect getaway for anyone looking to reconnect with nature. Special mention to Shree, Khedekar Sir and Doctor Sir for being such wonderful hosts!"
  },
  {
    author: "Dr. Anagha Kale",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXv654jcO1q53AQj1kzfYrYSXH8AUeEJ0OeAc_PTfV2F6wZH5MK=s120-c-rp-mo-br100",
    date: "November 2026",
    rating: 5,
    highlight: "Meeting professional standards of hospitality with purely personal touch.",
    content: "Meeting professional standards of hospitality industry with purely personal touch and homely environment. Amazing team! Looking forward to visit again."
  },
  {
    author: "Mithilesh Tawade",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocINsxkmvsBZonGIwFSE52md5qm4o_60XaWdHfo3s0WDD_v1FQ=s120-c-rp-mo-ba12-br100",
    date: "November 2026",
    rating: 5,
    highlight: "Staying amidst nature & the hospitality was amazingly friendly and pleasing.",
    content: "It was a wonderful experience to go and stay here with my kids. We were staying amidst nature and the hospitality was amazingly friendly and pleasing. The food was excellent and our stay was very comfortable."
  },
  {
    author: "Kavya Mulay",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXFFox1N4z0uJN6KpHrw4iKhjpu9Yoz7OFLs_7etYe_XylwlkDs7g=s120-c-rp-mo-br100",
    date: "November 2026",
    rating: 5,
    highlight: "Covered swimming pool, delicious local Konkani cuisine, owner's poetry, and ample parking.",
    content: "Lots of trees and natural surroundings, birds chirping, enjoyment with covered swimming pool, delicious local food including Konkani cuisine. Dr. Ravrane and staff are friendly and helpful. Enjoyed owner's poetry. A great cool place for the weekends away from city crowds."
  },
  {
    author: "Kirti Joshi",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJwPTFp7dGXm3R3vMDPjevQDDavaE2AVaGyor_bUlt_0LtUDA=s120-c-rp-mo-br100",
    date: "November 2026",
    rating: 5,
    highlight: "True to its name, we experienced all of nature's harmony.",
    content: "True to its name, we experienced all of nature’s harmony. The hospitality was absolutely warm and it felt just like home. We enjoyed a lot and will definitely visit again."
  }
];
