import { useState } from "react";
import { Menu, X, ShoppingCart, UtensilsCrossed } from "lucide-react";
import CartDrawer from "./CartDrawer";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Menu", href: "#menu" },
    { label: "Ramazan Specials", href: "#specials" },
    { label: "Contact", href: "#contact" },
  ];

  const { totalItems, setIsCartOpen } = useCart();

  const handleOrderNowClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (totalItems > 0) {
      setIsCartOpen(true);
    } else {
      toast("Cart is empty", {
        description: "Please add items to your cart to order, or contact us using the details below for custom party packs.",
        duration: 5000,
      });
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close mobile menu if open
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-accent/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-primary/10 p-1.5 rounded-lg border border-primary/20 group-hover:border-primary/40 transition-colors">
            <UtensilsCrossed className="w-6 h-6 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-display font-bold text-accent-foreground leading-[1.1] tracking-wider group-hover:text-primary transition-colors">HABIBA</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent-foreground/70 font-semibold">Frozen Items</span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-accent-foreground/80 hover:text-primary transition-colors text-sm font-medium">
              {l.label}
            </a>
          ))}
          <button onClick={() => setIsCartOpen(true)} className="relative bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
            <ShoppingCart size={18} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <a href="#contact" onClick={handleOrderNowClick} className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity">
            Order Now
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={() => setIsCartOpen(true)} className="relative bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
            <ShoppingCart size={18} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button onClick={() => setOpen(!open)} className="text-accent-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-accent border-t border-border px-6 pb-6 space-y-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-accent-foreground/80 hover:text-primary transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={handleOrderNowClick} className="block bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold text-center">
            Order Now
          </a>
        </div>
      )}
      <CartDrawer />
    </nav>
  );
};

export default Navbar;
