import { useState } from "react";
import { menuItems, type MenuCategory } from "@/data/menuData";
import MenuCard from "./MenuCard";
import AnimatedSection from "./AnimatedSection";

const filters: { label: string; value: MenuCategory | "all" }[] = [
  { label: "All Items", value: "all" },
  { label: "Kababs", value: "kababs" },
  { label: "Koftas", value: "koftas" },
  { label: "Wontons", value: "wontons" },
  { label: "Ramazan Specials", value: "specials" },
];

const MenuSection = () => {
  const [active, setActive] = useState<MenuCategory | "all">("all");

  const filtered =
    active === "all"
      ? menuItems
      : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="py-20 px-4">
      <div className="container max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Our Signature Menu
            </h2>
            <p className="text-primary font-medium mt-2 tracking-wider uppercase text-sm">
              Prices Per Dozen
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === f.value
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <AnimatedSection key={item.id}>
              <MenuCard item={item} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
