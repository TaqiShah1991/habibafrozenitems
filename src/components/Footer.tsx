import { UtensilsCrossed } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent border-t border-accent-foreground/10 py-6 px-4">
      <div className="container max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 md:gap-3 group cursor-pointer">
          <div className="bg-primary/10 p-1.5 rounded-lg border border-primary/20 group-hover:border-primary/40 transition-colors">
            <UtensilsCrossed className="text-primary w-5 h-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-bold text-accent-foreground leading-[1.1] tracking-wider group-hover:text-primary transition-colors">HABIBA</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-accent-foreground/70 font-semibold">Frozen Items</span>
          </div>
        </div>
        <p className="text-accent-foreground/50 text-sm">
          © 2025 Habiba Frozen Items. Handcrafted with pride in Rawalpindi, Pakistan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
