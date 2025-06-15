interface CropInfo {
  name: string;
  soilTypes: string[];
  idealTemp: {
    min: number;
    max: number;
  };
  rainfall: {
    min: number;
    max: number;
  };
  growthPeriod: number; // in days
  yield: string;
  procedure: string[];
  tags: string[];
  image: string; // Add image property
}

export const crops: CropInfo[] = [
  {
    name: "Rice",
    soilTypes: ["clay", "alluvial"],
    idealTemp: { min: 20, max: 35 },
    rainfall: { min: 150, max: 300 },
    growthPeriod: 120,
    yield: "4-6 tons per hectare",
    procedure: [
      "Prepare the field by plowing and leveling",
      "Soak seeds for 24 hours before sowing",
      "Maintain water level of 2-5 cm during growth",
      "Apply organic fertilizer after 30 days",
      "Watch for pests, especially in humid conditions"
    ],
    tags: ["Cereal", "Staple Food", "Water-Intensive"],
    image: "/images/rice.jpeg"
  },
  {
    name: "Wheat",
    soilTypes: ["alluvial", "black soil"],
    idealTemp: { min: 15, max: 25 },
    rainfall: { min: 75, max: 150 },
    growthPeriod: 140,
    yield: "3-5 tons per hectare",
    procedure: [
      "Deep plow the field before sowing",
      "Sow seeds in rows 20cm apart",
      "First watering after 21 days",
      "Apply fertilizer when plants are knee-high",
      "Harvest when crop turns golden"
    ],
    tags: ["Cereal", "Winter Crop", "Grain"],
    image: "images/wheat.jpg"
  },
  {
    name: "Cotton",
    soilTypes: ["black soil", "red soil"],
    idealTemp: { min: 21, max: 30 },
    rainfall: { min: 50, max: 100 },
    growthPeriod: 160,
    yield: "2-3 tons per hectare",
    procedure: [
      "Prepare soil with deep plowing",
      "Plant seeds after last frost",
      "Thin plants when they reach 15cm",
      "Regular weeding is important",
      "Watch for bollworms during flowering"
    ],
    tags: ["Fiber Crop", "Cash Crop", "Industrial"],
    image: "/images/cotton.jpg"
  },
  {
    name: "Maize (Corn)",
    soilTypes: ["alluvial", "red soil"],
    idealTemp: { min: 20, max: 32 },
    rainfall: { min: 50, max: 100 },
    growthPeriod: 90,
    yield: "5-8 tons per hectare",
    procedure: [
      "Plant seeds 4cm deep in rows",
      "Maintain proper spacing between plants",
      "Regular irrigation every 10-15 days",
      "Apply nitrogen-rich fertilizer",
      "Harvest when kernels are firm"
    ],
    tags: ["Cereal", "Feed Crop", "Versatile"],
    image: "/images/maize.jpg"
  },
  {
    name: "Soybeans",
    soilTypes: ["black soil", "alluvial"],
    idealTemp: { min: 20, max: 30 },
    rainfall: { min: 60, max: 120 },
    growthPeriod: 100,
    yield: "2.5-3.5 tons per hectare",
    procedure: [
      "Inoculate seeds with rhizobium",
      "Plant in well-drained soil",
      "Maintain proper row spacing",
      "Control weeds early in season",
      "Harvest when pods are brown"
    ],
    tags: ["Legume", "Protein Rich", "Oil Crop"],
    image: "/images/soybeans.jpg"
  },
  {
    name: "Tomatoes",
    soilTypes: ["red soil", "alluvial"],
    idealTemp: { min: 20, max: 27 },
    rainfall: { min: 40, max: 100 },
    growthPeriod: 90,
    yield: "25-30 tons per hectare",
    procedure: [
      "Start seeds in nursery",
      "Transplant after 3-4 weeks",
      "Stake plants for support",
      "Regular pruning of suckers",
      "Harvest when fruits are firm and red"
    ],
    tags: ["Vegetable", "High-Value", "Fresh Market"],
    image: "/images/tomatoes.jpg"
  },
  {
    name: "Potatoes",
    soilTypes: ["alluvial", "red soil"],
    idealTemp: { min: 15, max: 25 },
    rainfall: { min: 50, max: 75 },
    growthPeriod: 120,
    yield: "20-30 tons per hectare",
    procedure: [
      "Plant seed potatoes 10cm deep",
      "Hill soil around plants",
      "Maintain consistent moisture",
      "Watch for late blight",
      "Harvest when vines die back"
    ],
    tags: ["Tuber", "Root Crop", "Staple Food"],
    image: "/images/potatoes.jpg"
  },
  {
    name: "Sugarcane",
    soilTypes: ["alluvial", "black soil"],
    idealTemp: { min: 20, max: 35 },
    rainfall: { min: 150, max: 300 },
    growthPeriod: 365,
    yield: "60-100 tons per hectare",
    procedure: [
      "Prepare land deeply",
      "Plant cane sets in furrows",
      "Maintain proper irrigation",
      "Apply balanced fertilizer",
      "Harvest when fully mature"
    ],
    tags: ["Cash Crop", "Perennial", "Sugar Crop"],
    image: "/images/sugarcane.jpg"
  },
  {
    name: "Sunflower",
    soilTypes: ["black soil", "red soil", "alluvial"],
    idealTemp: { min: 18, max: 35 },
    rainfall: { min: 50, max: 75 },
    growthPeriod: 125,
    yield: "1.5-2.5 tons per hectare",
    procedure: [
      "Deep plowing and field preparation",
      "Sow seeds at proper depth",
      "Thin seedlings to maintain spacing",
      "Regular weeding and pest control",
      "Harvest when back of head turns brown"
    ],
    tags: ["Oil Crop", "Drought Tolerant", "Commercial"],
    image: "/images/sunflower.jpg"
  },
  {
    name: "Chickpeas",
    soilTypes: ["black soil", "alluvial"],
    idealTemp: { min: 15, max: 30 },
    rainfall: { min: 40, max: 100 },
    growthPeriod: 120,
    yield: "1.5-2 tons per hectare",
    procedure: [
      "Prepare well-drained soil",
      "Sow seeds at proper spacing",
      "Minimal irrigation needed",
      "Monitor for pod borers",
      "Harvest when plants turn yellow"
    ],
    tags: ["Pulse", "Drought Resistant", "Nitrogen Fixing"],
    image: "/images/chickpeas.jpg"
  },
  {
    name: "Groundnut",
    soilTypes: ["red soil", "alluvial"],
    idealTemp: { min: 20, max: 30 },
    rainfall: { min: 50, max: 125 },
    growthPeriod: 140,
    yield: "2-3 tons per hectare",
    procedure: [
      "Deep plowing essential",
      "Treat seeds before sowing",
      "Maintain soil moisture",
      "Earth up after flowering",
      "Harvest when leaves turn yellow"
    ],
    tags: ["Legume", "Oil Crop", "Cash Crop"],
     image: "/images/chickpeas.jpg"
  },
  {
    name: "Millet",
    soilTypes: ["red soil", "alluvial"],
    idealTemp: { min: 20, max: 35 },
    rainfall: { min: 40, max: 100 },
    growthPeriod: 90,
    yield: "2-3 tons per hectare",
    procedure: [
      "Minimal soil preparation needed",
      "Broadcast or line sowing",
      "Drought tolerant crop",
      "Remove weeds early",
      "Harvest when grains mature"
    ],
    tags: ["Cereal", "Drought Resistant", "Traditional Crop"],
     image: "/images/chickpeas.jpg"
  },
  {
    name: "Mustard",
    soilTypes: ["alluvial", "black soil"],
    idealTemp: { min: 15, max: 25 },
    rainfall: { min: 40, max: 75 },
    growthPeriod: 110,
    yield: "1-1.5 tons per hectare",
    procedure: [
      "Fine seedbed preparation",
      "Shallow sowing of seeds",
      "Light but frequent irrigation",
      "Watch for aphid attack",
      "Harvest when pods turn yellow"
    ],
    tags: ["Oil Crop", "Winter Crop", "Short Duration"],
     image: "/images/mustard.jpg"
  },
  {
    name: "Onion",
    soilTypes: ["alluvial", "black soil"],
    idealTemp: { min: 15, max: 25 },
    rainfall: { min: 50, max: 100 },
    growthPeriod: 130,
    yield: "25-30 tons per hectare",
    procedure: [
      "Raise seedlings in nursery",
      "Transplant at proper spacing",
      "Regular shallow cultivation",
      "Maintain consistent moisture",
      "Harvest when tops fall over"
    ],
    tags: ["Vegetable", "Cash Crop", "Storage Crop"],
     image: "/images/onion.jpg"
  },
  {
    name: "Garlic",
    soilTypes: ["alluvial", "red soil"],
    idealTemp: { min: 12, max: 24 },
    rainfall: { min: 40, max: 80 },
    growthPeriod: 150,
    yield: "10-15 tons per hectare",
    procedure: [
      "Plant cloves 5cm deep",
      "Maintain proper spacing",
      "Regular weeding essential",
      "Stop irrigation before harvest",
      "Harvest when leaves yellow"
    ],
    tags: ["Spice Crop", "Winter Crop", "High Value"],
    image: "/images/garlic.jpg"
  },
  {
    name: "Turmeric",
    soilTypes: ["red soil", "alluvial"],
    idealTemp: { min: 20, max: 30 },
    rainfall: { min: 150, max: 250 },
    growthPeriod: 270,
    yield: "20-25 tons per hectare",
    procedure: [
      "Plant rhizomes in raised beds",
      "Mulch after planting",
      "Regular weeding needed",
      "Earthing up at intervals",
      "Harvest when leaves yellow"
    ],
    tags: ["Spice Crop", "Cash Crop", "Long Duration"],
    image: "/images/turmeric.jpg"         
  },
  {
    name: "Ginger",
    soilTypes: ["red soil", "alluvial"],
    idealTemp: { min: 20, max: 32 },
    rainfall: { min: 150, max: 300 },
    growthPeriod: 240,
    yield: "15-20 tons per hectare",
    procedure: [
      "Plant rhizomes in furrows",
      "Apply organic mulch",
      "Regular weeding important",
      "Earthing up necessary",
      "Harvest when leaves dry"
    ],
    tags: ["Spice Crop", "Shade Tolerant", "High Value"],
    image: "/images/ginger.jpg"
  },
  {
    name: "Peas",
    soilTypes: ["alluvial", "black soil"],
    idealTemp: { min: 12, max: 24 },
    rainfall: { min: 40, max: 100 },
    growthPeriod: 90,
    yield: "4-5 tons per hectare",
    procedure: [
      "Sow seeds in rows",
      "Provide support for climbing",
      "Light irrigation needed",
      "Control powdery mildew",
      "Regular harvesting important"
    ],
    tags: ["Legume", "Winter Crop", "Quick Growing"],
    image: "/images/peas.jpg"
  }
];