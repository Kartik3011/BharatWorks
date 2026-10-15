// Demo data for BharatWorks. There is no backend yet (see DataContext), so
// this file is the single source of truth for categories and seed gigs —
// the navbar menu, footer links and gig filters all read from it.

export const categories = [
  { id: "marketing", title: "Digital Marketing & SEO", icon: "FiTrendingUp" },
  { id: "video", title: "Video Editing", icon: "FiVideo" },
  { id: "photography", title: "Photography", icon: "FiCamera" },
  { id: "technician", title: "Technician", icon: "FiTool" },
  { id: "teaching", title: "Teaching", icon: "FiBookOpen" },
  { id: "travel", title: "Travel Planning & Booking", icon: "FiCompass" },
  { id: "interior", title: "Home Improvement & Interior Design", icon: "FiHome" },
  { id: "business", title: "Business", icon: "FiBriefcase" },
  { id: "it", title: "IT Services", icon: "FiMonitor" },
];

export const categoryMap = Object.fromEntries(categories.map((c) => [c.id, c]));

export const seedGigs = [
  {
    id: "g1",
    title: "I will teach you full-stack web development in 6 weeks",
    category: "it",
    seller: "Tarun Singhal",
    city: "Delhi",
    price: 4500,
    rating: 4.9,
    reviewsCount: 65,
    deliveryDays: 7,
    description:
      "As a dedicated web developer, I specialize in creating dynamic and user-friendly websites that meet clients' needs. Over six weeks you'll go from HTML/CSS basics to building and deploying a full React + Node application, with live 1:1 sessions and code reviews along the way.",
    features: ["Live 1:1 sessions", "React & Node.js", "Deployment walkthrough", "Lifetime chat support"],
  },
  {
    id: "g2",
    title: "I will build an interactive Android app for your business",
    category: "it",
    seller: "Karan Mehta",
    city: "Bengaluru",
    price: 8000,
    rating: 4.7,
    reviewsCount: 41,
    deliveryDays: 10,
    description:
      "I design and develop native Android applications end-to-end — from wireframes to a Play Store-ready build. Comfortable working from a brief, a Figma file, or just a rough idea of what your business needs.",
    features: ["Kotlin & Jetpack Compose", "Play Store submission help", "3 rounds of revisions", "Source code included"],
  },
  {
    id: "g3",
    title: "I will develop a secure crypto exchange platform",
    category: "it",
    seller: "Shivani Kapoor",
    city: "Pune",
    price: 17500,
    rating: 4.8,
    reviewsCount: 23,
    deliveryDays: 21,
    description:
      "Expert in blockchain development and building exchange platforms with wallet integration, order matching, and security best practices baked in from day one.",
    features: ["Smart contract audit checklist", "Wallet integration", "Admin dashboard", "Post-launch support"],
  },
  {
    id: "g4",
    title: "I will run a full SEO audit and growth plan for your website",
    category: "marketing",
    seller: "Ananya Rao",
    city: "Hyderabad",
    price: 3200,
    rating: 4.8,
    reviewsCount: 88,
    deliveryDays: 5,
    description:
      "A complete technical + content SEO audit, competitor benchmarking, and a prioritized action plan you can hand straight to your team — no fluff, just what will actually move rankings.",
    features: ["Technical audit", "Keyword research", "Competitor benchmarking", "90-day action plan"],
  },
  {
    id: "g5",
    title: "I will manage your Instagram and Meta ad campaigns",
    category: "marketing",
    seller: "Rohit Malhotra",
    city: "Mumbai",
    price: 6000,
    rating: 4.6,
    reviewsCount: 52,
    deliveryDays: 3,
    description:
      "Performance-focused social media management — content calendar, ad creatives, and weekly reporting so you always know what your ad spend is doing.",
    features: ["Content calendar", "Ad creative design", "Weekly performance reports", "Budget optimisation"],
  },
  {
    id: "g6",
    title: "I will edit cinematic wedding and event videos",
    category: "video",
    seller: "Ishaan Verma",
    city: "Jaipur",
    price: 5000,
    rating: 5,
    reviewsCount: 34,
    deliveryDays: 6,
    description:
      "Cinematic-style edits for weddings, reels, and brand videos — colour grading, sound design, and pacing that keeps people watching to the end.",
    features: ["Colour grading", "Custom sound design", "Instagram-ready cuts", "2 revisions included"],
  },
  {
    id: "g7",
    title: "I will edit your YouTube videos and design thumbnails",
    category: "video",
    seller: "Priya Nair",
    city: "Kochi",
    price: 1800,
    rating: 4.9,
    reviewsCount: 120,
    deliveryDays: 2,
    description:
      "Fast-turnaround YouTube editing with jump cuts, captions, and scroll-stopping thumbnails — built to grow watch time and click-through rate.",
    features: ["Jump cuts & captions", "Thumbnail design", "24-48h turnaround", "Unlimited minor revisions"],
  },
  {
    id: "g8",
    title: "I will shoot and retouch your product photography",
    category: "photography",
    seller: "Devika Iyer",
    city: "Chennai",
    price: 4000,
    rating: 4.8,
    reviewsCount: 46,
    deliveryDays: 4,
    description:
      "Studio-quality product photography and retouching for e-commerce listings, catalogues, and ad creatives.",
    features: ["Studio lighting setup", "Background removal", "Colour-accurate retouching", "Web & print sizes"],
  },
  {
    id: "g9",
    title: "I will fix your home wiring and electrical faults",
    category: "technician",
    seller: "Suresh Yadav",
    city: "Lucknow",
    price: 800,
    rating: 4.7,
    reviewsCount: 96,
    deliveryDays: 1,
    description:
      "Licensed electrician available for wiring faults, switchboard upgrades, and general home electrical work — safe, tidy, and on time.",
    features: ["Same-day visits", "Safety certified", "Genuine parts", "90-day workmanship guarantee"],
  },
  {
    id: "g10",
    title: "I will teach you classical and Western vocals online",
    category: "teaching",
    seller: "Meera Joshi",
    city: "Pondicherry",
    price: 1200,
    rating: 5,
    reviewsCount: 29,
    deliveryDays: 1,
    description:
      "Personalised online vocal lessons for beginners to intermediate singers, covering breath control, pitch, and performance confidence.",
    features: ["1:1 video lessons", "Practice recordings", "Flexible scheduling", "Beginner friendly"],
  },
  {
    id: "g11",
    title: "I will plan a custom multi-city India itinerary for you",
    category: "travel",
    seller: "Arjun Kapoor",
    city: "Goa",
    price: 2500,
    rating: 4.6,
    reviewsCount: 18,
    deliveryDays: 3,
    description:
      "Hand-crafted travel itineraries based on your budget and interests — hotels, local guides, and hidden gems most tourists miss.",
    features: ["Day-by-day itinerary", "Local guide contacts", "Budget breakdown", "24/7 trip support"],
  },
  {
    id: "g12",
    title: "I will design a modern interior layout for your home",
    category: "interior",
    seller: "Nikhil Bansal",
    city: "Chandigarh",
    price: 9000,
    rating: 4.9,
    reviewsCount: 37,
    deliveryDays: 12,
    description:
      "Full interior design concept — space planning, 3D renders, and a shopping list of furniture and materials that fit your budget.",
    features: ["3D renders", "Material & furniture list", "Space planning", "2 concept revisions"],
  },
];

export const reviewSeed = [
  {
    id: "r1",
    name: "Manav",
    location: "Pondicherry",
    rating: 5,
    text: "Purchased this and can surely assure you it's worth it — the core concepts are taught well and the regular exercises bring real hands-on mastery.",
  },
  {
    id: "r2",
    name: "Rajat Singh",
    location: "Delhi",
    rating: 5,
    text: "Great experience end to end. Communication was clear, delivery was on time, and the final result matched the brief closely.",
  },
  {
    id: "r3",
    name: "Garbhit Sharma",
    location: "Uttar Pradesh",
    rating: 4,
    text: "Solid work overall — a couple of rounds of feedback and we landed exactly where we needed to be. Would hire again.",
  },
];

export const infoPages = {
  about: {
    title: "About BharatWorks",
    body: [
      "BharatWorks is a freelance marketplace built for India — connecting clients with developers, designers, technicians, teachers, and other independent professionals across the country.",
      "This build is a demo/portfolio project: gigs, orders, and messages you see are seed data or created locally in your browser, not on a live backend.",
    ],
  },
  privacy: {
    title: "Privacy Policy",
    body: [
      "This is a demo project and does not collect, store, or share personal data on a server. Any account details you enter (name, role) are kept only in your browser's local storage and never leave your device.",
      "If you connect a Groq API key to power the chatbot, messages you send it are sent directly to Groq's API to generate a reply — see Groq's own privacy policy for how they handle that data.",
    ],
  },
  terms: {
    title: "Terms of Service",
    body: [
      "BharatWorks, as shipped in this repository, is a demonstration marketplace template. There are no real transactions, payments, or contracts formed by using it.",
      "You're free to adapt this template for your own project — just make sure to add real terms of service before taking live payments or user data.",
    ],
  },
  contactSales: {
    title: "Contact Sales",
    body: [
      "This demo doesn't have a live sales team, but the codebase is set up so you can wire this page to a real contact form or CRM in minutes.",
      "For now, reach the project maintainer through whatever contact method you've set up for this deployment.",
    ],
  },
  help: {
    title: "Help & Support",
    body: [
      "Looking for a freelancer? Head to the Gigs page and filter by budget or category.",
      "Want to offer your own services? Create an account as a Freelancer, then use 'Post a Job' to add your first gig.",
      "Have a question the assistant in the bottom-right corner can't answer? This is a demo project, so support is limited to what's documented in the README.",
    ],
  },
  trust: {
    title: "Trust & Safety",
    body: [
      "This demo doesn't move real money — the 'payment protection' messaging mirrors a real marketplace's escrow flow for illustration purposes only.",
      "Before going live with real users and payments, add real identity verification, payment escrow, and dispute-resolution flows.",
    ],
  },
  accessibility: {
    title: "Accessibility",
    body: [
      "BharatWorks aims to be usable with a keyboard and a screen reader: interactive elements are real buttons and links, form fields have labels, and colour is never the only way information is conveyed.",
      "Spotted something that doesn't work well with assistive technology? This is a demo project without a live support inbox, but the codebase is a reasonable starting point to keep improving from.",
    ],
  },
  sellingGuide: {
    title: "Selling on BharatWorks",
    body: [
      "Create an account and choose 'I want to offer services' to unlock the seller tools.",
      "Use 'Post a Job' to publish a gig with a title, category, description, and price — it will immediately appear in Gigs and on your dashboard.",
      "Reply to buyer messages promptly — response time is one of the biggest factors in winning repeat work.",
    ],
  },
  buyingGuide: {
    title: "Buying on BharatWorks",
    body: [
      "Browse or search Gigs, compare a few sellers, and check their delivery time and rating before reaching out.",
      "Message the seller with a clear brief — the more specific you are, the more accurate their quote and timeline will be.",
    ],
  },
  stories: {
    title: "Customer Success Stories",
    body: [
      "This demo doesn't have real customer stories yet — once you connect a backend, this is a great place to showcase testimonials and case studies.",
    ],
  },
  community: {
    title: "BharatWorks Community Hub",
    body: ["A space for freelancers and clients to share tips, ask questions, and showcase work — coming soon."],
  },
  forum: {
    title: "BharatWorks Forum",
    body: ["Discussion threads for freelancers and clients will live here once the community features ship."],
  },
  events: {
    title: "BharatWorks Events",
    body: ["Workshops and meetups for the BharatWorks freelancer community will be listed here."],
  },
  invite: {
    title: "Invite a Friend",
    body: ["Referral tooling isn't wired up in this demo yet — but the button is ready for it whenever the backend is."],
  },
};

export function formatINR(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function initials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

// A small, stable palette so the same name always gets the same colour.
const AVATAR_COLORS = ["#c8962c", "#3b6e91", "#7a5c9e", "#3f8f5e", "#b5563d", "#4c6b8a"];

export function colorForName(name = "") {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}
