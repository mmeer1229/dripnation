// Static content config. No database — this is the single source of truth
// for nav and copy until real business details land. Anything marked
// "placeholder" below is safe to edit without touching component code.

export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const sizes = ["S", "M", "L", "XL", "XXL"] as const;
export type Size = (typeof sizes)[number];

export interface MysteryBoxTier {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const mysteryBox = {
  tagline: "One box. Top-notch brands. You won't know what's inside until it lands.",
  description:
    "Every Mystery Box is packed with real pieces from the shop floor — top-notch, quality brands, all different styles. No filler, no expired stock.",
  heroImage: "/images/hero-stack/mastercubestore-pro-mystery-box-challenging-cube-puzzle-surprises-min-55-eur-in-value.png",
  howItWorks: [
    {
      title: "Pick a tier",
      description: "Choose your box and your size.",
    },
    {
      title: "We pack it",
      description: "Real pieces from top-notch, quality brands — different styles every time.",
    },
    {
      title: "It ships",
      description: "Straight to your door, no picking through a catalog.",
    },
  ],
  tiers: [
    {
      id: "starter",
      name: "Starter Box",
      price: 150,
      description: "2-3 items, streetwear staples",
    },
    {
      id: "heavy-hitter",
      name: "Heavy Hitter Box",
      price: 250,
      description: "4-5 items, includes at least one graphic tee and one accessory",
    },
    {
      id: "drip-nation",
      name: "Drip Nation Box",
      price: 350,
      description: "Full fit, footwear included",
    },
  ] satisfies MysteryBoxTier[],
  faq: [
    {
      question: "Can I choose what's in my box?",
      answer:
        "No — that's the point. Every box is a random mix of top-notch, quality brands in different styles. You do pick your size, so everything fits.",
    },
    {
      question: "What if something doesn't fit or isn't my style?",
      answer: "Reach out through the contact page and we'll sort out an exchange.",
    },
    {
      question: "How long does shipping take?",
      answer: "Add real shipping timeline here.",
    },
    {
      question: "Can I return items from a Mystery Box?",
      answer: "Add real return/exchange policy here.",
    },
  ],
};

export interface StoreInfo {
  name: string;
  address: string;
  hours: string;
  phone: string;
  email: string;
  social: { label: string; href: string }[];
}

// Placeholder — fill in the real address, hours, and social handles.
export const storeInfo: StoreInfo = {
  name: "Drip Nation Box",
  address: "Add store address here",
  hours: "Add store hours here",
  phone: "Add store phone here",
  email: "hello@dripnationbox.com",
  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Snapchat", href: "#" },
  ],
};

export const heroStackImages = [
  { src: "/images/hero-stack/merch-1.jpg", alt: "Red graphic tees, rhinestone shorts, and Jordan 1s" },
  { src: "/images/hero-stack/merch-2.jpg", alt: "Navy graphic tees, cap, and denim shorts" },
  { src: "/images/hero-stack/merch-3.jpg", alt: "Black and white graphic tees with sneakers and sandals" },
  { src: "/images/hero-stack/merch-4.jpg", alt: "Cream and orange graphic tees with jeans and a backpack" },
  { src: "/images/hero-stack/merch-5.jpg", alt: "Black graphic tees with light-wash jeans and sneakers" },
];
