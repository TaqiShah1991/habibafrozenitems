import { Home, Leaf, Snowflake } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: Home,
    title: "Truly Homemade",
    description: "Every single item is hand-prepared in our family kitchen using traditional recipes passed down through generations.",
  },
  {
    icon: Leaf,
    title: "Premium Quality",
    description: "We use only the freshest lean meats and organic vegetables. No preservatives or artificial colors, ever.",
  },
  {
    icon: Snowflake,
    title: "Flash Frozen",
    description: "Our items are frozen immediately after preparation to lock in flavor, texture, and nutritional value.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <AnimatedSection key={f.title}>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <f.icon className="text-primary" size={26} />
                </div>
                <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
