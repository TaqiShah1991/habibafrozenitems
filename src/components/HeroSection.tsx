import { UtensilsCrossed } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBanner}
        alt="Delicious Pakistani frozen food spread on a wooden table"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Homemade Frozen Delights</p>
        <div className="flex items-center justify-center gap-4 mb-4">
          <UtensilsCrossed className="w-10 h-10 md:w-14 md:h-14 text-primary" />
          <h1 className="font-display text-5xl md:text-7xl font-bold text-card tracking-wider">HABIBA</h1>
          <UtensilsCrossed className="w-10 h-10 md:w-14 md:h-14 text-primary" />
        </div>
        <p className="text-primary font-display text-xl md:text-2xl italic mb-6">Homemade Frozen Delights</p>
        <p className="text-card/80 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Bringing the authentic taste of home-cooked goodness to your freezer. Preservative-free, artisanal, and made with love.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#menu" className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
            Explore Menu
          </a>
          <a href="#contact" className="border-2 border-card text-card px-8 py-3 rounded-md font-semibold hover:bg-card/10 transition-colors">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
