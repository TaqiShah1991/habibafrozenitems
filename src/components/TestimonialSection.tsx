import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "The Shami Kababs are exactly like my grandmother used to make. Finding such authentic, clean, and delicious homemade food is a blessing for busy families!",
    author: "Mariam Farooq",
    role: "Loyal Customer"
  },
  {
    quote: "Absolutely wonderful experience! The food is always fresh and you can taste the quality ingredients in every bite. Highly recommended.",
    author: "Zainab Ahmed",
    role: "Regular Customer"
  },
  {
    quote: "I've tried many frozen food options, but this is by far the best. It's so convenient without compromising on the authentic taste.",
    author: "Fatima Ali",
    role: "Busy Professional"
  }
];

const TestimonialSection = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="py-20 px-4">
      <AnimatedSection>
        <div className="container max-w-4xl text-center px-12 relative">
          <Quote className="mx-auto text-primary mb-6" size={40} />

          <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col items-center justify-center p-2">
                    <blockquote className="font-display text-2xl md:text-3xl italic text-foreground leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 md:-left-8" />
            <CarouselNext className="hidden md:flex -right-4 md:-right-8" />
          </Carousel>

        </div>
      </AnimatedSection>
    </section>
  );
};

export default TestimonialSection;
