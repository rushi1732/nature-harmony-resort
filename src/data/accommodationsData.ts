export interface RatePlan {
  id: string;
  name: string;
  badge?: string;
  originalPrice: number;
  offerPrice: number;
  tax: number;
  totalPrice: number;
  mealPlan: string;
  inclusions: string[];
}

export interface RoomCategory {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  size?: string;
  bedType: string;
  maxOccupancy: {
    adults: number;
    children: number;
    total: number;
  };
  startingPrice: number;
  photos: string[];
  amenities: string[];
  keyHighlights: string[];
  ratePlans: RatePlan[];
  availabilityNote?: string;
  isPopular?: boolean;
  resAvenueRoomCode?: string;
}

export const RESAVENUE_ENGINE_URL = "https://bookings.resavenue.com/engine-ibe/rooms?regCode=RAAG0925";

export const RESORT_POLICIES = {
  checkInTime: "12:00 PM (Noon)",
  checkOutTime: "11:00 AM",
  cancellationPolicy: "Free cancellation up to 48 hours before check-in date. For same-day or last-minute modifications, please reach out directly to resort host Dr. Ravrane.",
  coupleFriendly: true,
  familyFriendly: true,
  idRequirement: "Valid Government-issued Photo ID (Aadhaar, Passport, Driving License, Voter ID) required for all adult guests at check-in.",
  childrenPolicy: "Children up to 5 years stay complimentary with existing bedding. Extra mattress available upon request."
};

export const DIRECT_BOOKING_BENEFITS = [
  {
    title: "Best Rate Guarantee",
    desc: "Direct 20% discount applied instantly via our website & ResAvenue engine."
  },
  {
    title: "Zero Hidden Booking Fees",
    desc: "Transparent room rates with explicit tax breakups — no surprise platform surcharges."
  },
  {
    title: "Personalized Konkani Hospitality",
    desc: "Direct communication with hosts Dr. Sir & Ma'am for special meal & celebration requests."
  },
  {
    title: "Flexible Rescheduling Support",
    desc: "Dedicated personal assistance via WhatsApp & phone call if travel dates shift."
  }
];

export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: "semi-deluxe-ac",
    name: "Semi Deluxe AC Room",
    subtitle: "Comfortable Stay in Nature's Lap",
    tagline: "Air-conditioned serenity with garden greenery views",
    description: "This room will consistently meet your satisfaction for hotel room comfort and make your stay pleasant. Surrounded by green foliage, tall betel-nut groves, and natural cross-ventilation, featuring modern split AC and comfortable bedding.",
    size: "280 sq. ft.",
    bedType: "1 Queen / Double Bed",
    maxOccupancy: {
      adults: 2,
      children: 1,
      total: 3
    },
    startingPrice: 3680,
    photos: [
      "/images/cozy-cottage-room.jpg",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdGdaDGOkFipELVkpAJkjtRF6wT5w38Qa71I25St8oVR_juKQtY94ZhMVZ1vhyBi-Onmkktc-1neuAZnbZKgBlJxf-e1fOcdmIyUa5RHDoo2rnBlkvAlm_NcnfrH0ITg0C63NyqYnm9k4v9=w1200-no",
      "/images/covered-swimming-pool.jpg"
    ],
    amenities: [
      "Individual Split Air Conditioning",
      "24-Hour Hot & Cold Water Geyser",
      "Complimentary High-Speed Wi-Fi",
      "Television with Satellite Channels",
      "En-suite Bathroom with Fresh Towels & Toiletries",
      "Daily Housekeeping Service",
      "Garden & Tropical Palm Views",
      "Complimentary Mineral Water on Arrival",
      "Access to Covered All-Weather Swimming Pool",
      "Secure Free On-Site Parking"
    ],
    keyHighlights: [
      "2 Guests Included (+1 Child/Extra)",
      "Split Air Conditioning",
      "Hot Geyser 24/7",
      "Garden Canopy View"
    ],
    ratePlans: [
      {
        id: "semi-room-only",
        name: "Room Only",
        badge: "Website Deal · 20% Off",
        originalPrice: 4600,
        offerPrice: 3680,
        tax: 184,
        totalPrice: 3864,
        mealPlan: "Accommodation Only",
        inclusions: [
          "Semi Deluxe AC Room accommodation for up to 2 guests",
          "Access to covered swimming pool, aviary, and walking trails",
          "Free Wi-Fi & on-site parking",
          "All standard room amenities"
        ]
      },
      {
        id: "semi-with-breakfast",
        name: "Room with Breakfast",
        badge: "Recommended · 20% Off",
        originalPrice: 5100,
        offerPrice: 4080,
        tax: 204,
        totalPrice: 4284,
        mealPlan: "Accommodation + Fresh Hot Breakfast",
        inclusions: [
          "Semi Deluxe AC Room accommodation for up to 2 guests",
          "Freshly prepared hot authentic Konkani breakfast (Ghawane, Poha, Upma, Tea/Coffee)",
          "Access to covered swimming pool, aviary, and walking trails",
          "Free Wi-Fi & on-site parking"
        ]
      }
    ],
    availabilityNote: "Only 2 rooms left for this category",
    isPopular: false
  },
  {
    id: "super-deluxe-ac",
    name: "Super Deluxe AC Room",
    subtitle: "Premium Space & Private Verandah Experience",
    tagline: "Expanded luxury quarters with private verandah and serene foliage outlook",
    description: "This room will consistently meet your satisfaction for hotel room comfort and make your stay pleasant. Features extra spacious floor layout, handcrafted timber elements, a private sit-out verandah facing the lush betel-nut trees, and modern comforts.",
    size: "360 sq. ft.",
    bedType: "1 King Bed + Extra Bed option",
    maxOccupancy: {
      adults: 2,
      children: 1,
      total: 3
    },
    startingPrice: 5480,
    photos: [
      "/images/nature-balcony-views.jpg",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfIU7VnAFJqrJU5clh3B1QNCVI80ICYOsSZQPYmSX8q62eSc-LNG4_lE3LYmyu7KMNmFOtPruLM6U9hfOLg64XDTpqcUk4sORaAWhyf6p3WiEUQyCielnM7OVSZQnyGiU3MozL5qMR0lj4=w1200-no",
      "/images/covered-swimming-pool.jpg"
    ],
    amenities: [
      "Private Sit-Out Verandah / Balcony",
      "Silent Split Air Conditioning",
      "Premium King Size Bedding & Ergonomic Mattresses",
      "24-Hour Hot & Cold Water Geyser",
      "High-Speed Wi-Fi Access",
      "Large Flat-screen Television",
      "Electric Tea & Coffee Kettle Setup",
      "Wardrobe & Luggage Storage Space",
      "En-suite Modern Bathroom with Premium Toiletries",
      "Daily Housekeeping Service",
      "Full Access to Covered Swimming Pool & Nature Reserve",
      "Complimentary Safe Parking"
    ],
    keyHighlights: [
      "Private Sit-Out Verandah",
      "King Size Bedding",
      "Tea/Coffee Maker",
      "High-Speed Wi-Fi"
    ],
    ratePlans: [
      {
        id: "super-room-only",
        name: "Room Only",
        badge: "Website Deal · 20% Off",
        originalPrice: 6850,
        offerPrice: 5480,
        tax: 274,
        totalPrice: 5754,
        mealPlan: "Accommodation Only",
        inclusions: [
          "Super Deluxe AC Room accommodation for up to 2 guests",
          "Private verandah sit-out with garden outlook",
          "Access to covered swimming pool, aviary, and walking trails",
          "Free Wi-Fi & on-site parking",
          "All luxury room amenities"
        ]
      },
      {
        id: "super-with-breakfast",
        name: "Room with Breakfast",
        badge: "Best Value · 20% Off",
        originalPrice: 7400,
        offerPrice: 5920,
        tax: 296,
        totalPrice: 6216,
        mealPlan: "Accommodation + Fresh Hot Breakfast",
        inclusions: [
          "Super Deluxe AC Room accommodation for up to 2 guests",
          "Freshly prepared hot authentic Konkani breakfast (Ghawane, Poha, Upma, Tea/Coffee)",
          "Private verandah sit-out with garden outlook",
          "Access to covered swimming pool, aviary, and walking trails",
          "Free Wi-Fi & on-site parking"
        ]
      }
    ],
    availabilityNote: "Available for instant booking",
    isPopular: true
  },
  {
    id: "two-story-cottage",
    name: "Two-Story Wooden Balcony Cottage",
    subtitle: "Signature Architectural Heritage Cottage",
    tagline: "Authentic Konkan red-brick and timber duplex with expansive double-decker balconies",
    description: "The flagship residence of Nature's Harmony Resort. A majestic two-story Konkan cottage featuring genuine red-brick masonry, exposed teakwood railings, upper and lower verandas overlooking the sprawling agro-farm, and ample space for joint families, friend reunions, or VIP getaways.",
    size: "620 sq. ft. Duplex",
    bedType: "2 King Beds + Additional Mattress Setup",
    maxOccupancy: {
      adults: 6,
      children: 3,
      total: 9
    },
    startingPrice: 8500,
    photos: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfIU7VnAFJqrJU5clh3B1QNCVI80ICYOsSZQPYmSX8q62eSc-LNG4_lE3LYmyu7KMNmFOtPruLM6U9hfOLg64XDTpqcUk4sORaAWhyf6p3WiEUQyCielnM7OVSZQnyGiU3MozL5qMR0lj4=w1200-no",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLd_ZbQ2TFBHPOmt3CjPEjQBeerdltrMCc7-jYSl4XQ6d-3yWLukbcWeaMCLVHvwGEzRjtA8kqPH3Tv8yzyV1hqrOkZ70ENsCqvc47v-QBt4M1qd3rmBmwRKocNpsiVOTOHBsL7p2wXxgbw=w1200-no",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLegWOvSmpf1uGLkZMVz3WEchYQSMnQBlthExEgH7TnF2zZQXajrt4UT-SkriSsIiWqSOEb4iR03zw4pYpC8IJiRaKqA5nrsSUdpIJNsKjOo0wcsUVUB_RH8NSufiz179cqHHjyeG0MTd-w6=w1200-no"
    ],
    amenities: [
      "Two-Story Duplex Layout with Internal Staircase",
      "Double Balconies with Panoramic Palm Canopy Views",
      "Multiple Air Conditioning Units",
      "Multiple En-suite Bathrooms with 24h Geysers",
      "Traditional Wooden Balustrades & Sit-Out Swings",
      "High-Speed Wi-Fi & Large TVs on both floors",
      "Electric Tea/Coffee Station & Mini Refrigerator",
      "Dedicated Room Service & Personal Host Attention",
      "Direct Lawn & Covered Pool Proximity",
      "Ample Secure Free Parking"
    ],
    keyHighlights: [
      "Duplex Two-Story Cottage",
      "Upper & Lower Verandahs",
      "Accommodates up to 8-9 Guests",
      "Custom All-Inclusive Package"
    ],
    ratePlans: [
      {
        id: "cottage-stay-breakfast",
        name: "Cottage Stay with Breakfast",
        badge: "Exclusive Family Unit",
        originalPrice: 10500,
        offerPrice: 8500,
        tax: 425,
        totalPrice: 8925,
        mealPlan: "Accommodation + Fresh Hot Breakfast",
        inclusions: [
          "Complete two-story cottage private booking",
          "Fresh Konkani breakfast for all registered occupants",
          "Unlimited access to covered pool, walking trails, and gazebo",
          "Complimentary tea & coffee setup"
        ]
      },
      {
        id: "cottage-all-inclusive",
        name: "All-Inclusive Family Package",
        badge: "Ultimate Konkani Experience",
        originalPrice: 14500,
        offerPrice: 12500,
        tax: 625,
        totalPrice: 13125,
        mealPlan: "All Meals Included (Breakfast, Lunch, High Tea, Dinner)",
        inclusions: [
          "Complete two-story cottage private booking",
          "Fresh Konkani lunch & dinner with authentic fish/veg thali delicacies",
          "Morning and evening tea with Konkan snacks",
          "Freshly prepared hot breakfast",
          "Full resort amenities & bonfire on request"
        ]
      }
    ],
    availabilityNote: "Signature cottage — advance reservation recommended",
    isPopular: false
  }
];
