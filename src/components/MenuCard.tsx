import { ShoppingCart } from "lucide-react";
import type { MenuItem } from "@/data/menuData";
import { useCart } from "@/context/CartContext";

const MenuCard = ({ item }: { item: MenuItem }) => {
  const { addItem } = useCart();

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {item.badge && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-md">
            {item.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold text-lg text-card-foreground">{item.name}</h3>
        <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Per Dozen</span>
            <p className="text-primary font-bold text-lg">{item.price}/-</p>
          </div>
          <button
            onClick={() => addItem(item)}
            className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
            aria-label={`Add ${item.name} to cart`}
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
