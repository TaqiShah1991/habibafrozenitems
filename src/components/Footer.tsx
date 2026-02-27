import { UtensilsCrossed } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent border-t border-accent-foreground/10 py-6 px-4">
      <div className="container max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 group cursor-pointer">
          <UtensilsCrossed className="text-primary w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
          <span className="text-accent-foreground font-display font-bold text-sm tracking-wide group-hover:text-primary transition-colors">HABIBA</span>
        </div>
        <p className="text-accent-foreground/50 text-sm">
          © 2025 Habiba Frozen Items. Handcrafted with pride in Rawalpindi, Pakistan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
