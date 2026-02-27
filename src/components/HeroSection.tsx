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
        <p className="text-primary font-semibold tracking-widest uppercase text-sm md:text-base mb-4 md:mb-6">Premium Quality</p>

        <div className="flex flex-col items-center justify-center mb-6">
          <div className="flex items-center justify-center gap-3 md:gap-6 relative">
            <div className="absolute -left-10 md:-left-20 opacity-50 hidden md:block">
              <UtensilsCrossed className="w-8 h-8 md:w-12 md:h-12 text-primary" />
            </div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] font-bold text-card tracking-wider text-center leading-none">HABIBA</h1>
            <div className="absolute -right-10 md:-right-20 opacity-50 hidden md:block">
              <UtensilsCrossed className="w-8 h-8 md:w-12 md:h-12 text-primary" />
            </div>
            {/* Mobile icon */}
            <UtensilsCrossed className="w-8 h-8 text-primary opacity-80 md:hidden" />
          </div>

          <div className="flex items-center gap-3 md:gap-4 mt-3 w-full justify-center">
            <div className="h-[2px] w-10 md:w-24 bg-primary/70 rounded-full"></div>
            <span className="text-primary font-bold tracking-[0.25em] md:tracking-[0.4em] uppercase text-xs md:text-lg">FROZEN ITEMS</span>
            <div className="h-[2px] w-10 md:w-24 bg-primary/70 rounded-full"></div>
          </div>
        </div>

        <p className="text-card/90 font-display text-xl md:text-3xl italic mb-8">Authentic Homemade Delights</p>
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
