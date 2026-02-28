import beefShamiKabab from "@/assets/beef-shami-kabab.jpg";
import chickenShamiKabab from "@/assets/chicken-shami-kabab.jpg";
import beefKofta from "@/assets/beef-kofta.jpg";
import chickenKofta from "@/assets/chicken-kofta.jpg";
import beefSamosa from "@/assets/beef-samosa.jpg";
import chickenVegSamosa from "@/assets/chicken-veg-samosa.jpg";
import chickenSpringRoll from "@/assets/chicken-spring-roll.jpg";
import chickenWontons from "@/assets/chicken-wontons.jpg";
import mashKiDaalBhallay from "@/assets/mash-ki-daal-bhallay.png";

export type MenuCategory = "kababs" | "koftas" | "wontons" | "specials";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  badge?: string;
  unit?: string;
}

export const menuItems: MenuItem[] = [
  {
    id: "beef-shami-kabab",
    name: "Beef Shami Kabab",
    description: "Traditional spice blend, tender beef",
    price: 1380,
    image: beefShamiKabab,
    category: "kababs",
    badge: "Best Seller",
  },
  {
    id: "chicken-shami-kabab",
    name: "Chicken Shami Kabab",
    description: "Soft, melt-in-mouth chicken patties",
    price: 1180,
    image: chickenShamiKabab,
    category: "kababs",
  },
  {
    id: "beef-kofta",
    name: "Beef Kofta",
    description: "Juicy beef meatballs with herbs",
    price: 1380,
    image: beefKofta,
    category: "koftas",
  },
  {
    id: "chicken-kofta",
    name: "Chicken Kofta",
    description: "Delicate and aromatic chicken meatballs",
    price: 1180,
    image: chickenKofta,
    category: "koftas",
  },
  {
    id: "beef-samosa",
    name: "Beef Samosa",
    description: "Crispy golden crust, savory beef filling",
    price: 1140,
    image: beefSamosa,
    category: "specials",
  },
  {
    id: "chicken-veg-samosa",
    name: "Chicken Veg Samosa",
    description: "Perfect mix of minced chicken and veggies",
    price: 960,
    image: chickenVegSamosa,
    category: "specials",
  },
  {
    id: "chicken-spring-roll",
    name: "Chicken Veg Spring Roll",
    description: "Crunchy rolls with classic filling",
    price: 960,
    image: chickenSpringRoll,
    category: "specials",
  },
  {
    id: "chicken-wontons",
    name: "Chicken Wontons",
    description: "Crispy parcels of flavored chicken",
    price: 780,
    image: chickenWontons,
    category: "wontons",
  },
  {
    id: "mash-ki-daal-bhallay",
    name: "Mash ki Dall k Bhallay",
    description: "Soft and delicious lentil dumplings",
    price: 690,
    image: mashKiDaalBhallay,
    category: "specials",
    unit: "15 Pieces",
  },
];
