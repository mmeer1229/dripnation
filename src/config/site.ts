// Static content config. No database — this is the single source of truth
// for nav, categories, and copy until real inventory/business details land.
// Anything marked "placeholder" below is safe to edit without touching
// component code.

export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "Shop", href: "/shop" },
  { label: "Brands", href: "/brands" },
  { label: "Mystery Box", href: "/mystery-box" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
}

// Placeholder categories based on the product photos we have. Inventory is
// still TBD — add/remove/rename freely, the shop grid and nav read from
// this list.
export const categories: Category[] = [
  {
    slug: "tops",
    name: "Tops",
    description: "Graphic tees and crewnecks",
    image: "/images/hero-stack/merch-1.jpg",
  },
  {
    slug: "bottoms",
    name: "Bottoms",
    description: "Denim, shorts, and jeans",
    image: "/images/hero-stack/merch-4.jpg",
  },
  {
    slug: "footwear",
    name: "Footwear",
    description: "Sneakers and slides",
    image: "/images/hero-stack/merch-3.jpg",
  },
  {
    slug: "headwear",
    name: "Headwear",
    description: "Caps and hats",
    image: "/images/hero-stack/merch-2.jpg",
  },
  {
    slug: "accessories",
    name: "Accessories",
    description: "Bags, belts, and jewelry",
    image: "/images/hero-stack/merch-5.jpg",
  },
  {
    slug: "sale",
    name: "Sale",
    description: "Marked-down drops",
    image: "/images/hero-stack/merch-1.jpg",
  },
];

export interface Brand {
  id: string;
  name: string;
}

// No confirmed brand partners yet — leave empty until real ones are
// signed off, rather than showing placeholder logos. The Brands section
// hides itself (see BrandsSection) when this is empty.
export const brands: Brand[] = [];

export interface MysteryBoxTier {
  id: string;
  name: string;
  price: number;
  description: string;
}

// Placeholder pricing/copy — swap in real tiers once decided.
export const mysteryBox = {
  tagline: "One box. Curated drip. You won't know what's inside until it lands.",
  description:
    "Every Mystery Box is packed with real pieces from the shop floor, picked for that box's price tier. No filler, no expired stock.",
  tiers: [
    {
      id: "starter",
      name: "Starter Box",
      price: 40,
      description: "2-3 items, streetwear staples",
    },
    {
      id: "heavy-hitter",
      name: "Heavy Hitter Box",
      price: 75,
      description: "4-5 items, includes at least one graphic tee and one accessory",
    },
    {
      id: "drip-nation",
      name: "Drip Nation Box",
      price: 120,
      description: "Full fit, footwear included",
    },
  ] satisfies MysteryBoxTier[],
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
