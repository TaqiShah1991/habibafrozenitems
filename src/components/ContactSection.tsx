import { Phone, User, MapPin } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nOrder: ${form.message}`
    );
    window.open(`https://wa.me/923349422514?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 px-4 bg-accent text-accent-foreground">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection>
            <div>
              <h2 className="font-display text-4xl font-bold mb-4">Place Your Order</h2>
              <p className="text-accent-foreground/70 mb-8 leading-relaxed">
                We take pride in our personalized service. Reach out directly via phone or WhatsApp to place your order or inquire about custom party packs.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Phone className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-accent-foreground/50 uppercase tracking-wider">Call / WhatsApp</p>
                    <p className="font-bold text-lg">03349422514</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-accent-foreground/50 uppercase tracking-wider">Proprietor</p>
                    <p className="font-bold">Seema Zaidi</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-accent-foreground/50 uppercase tracking-wider">Location</p>
                    <p className="font-bold">Rawalpindi, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-primary font-semibold uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full mt-1 px-4 py-3 rounded-md bg-accent-foreground/5 border border-accent-foreground/10 text-accent-foreground placeholder:text-accent-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-xs text-primary font-semibold uppercase tracking-wider">Phone</label>
                  <input
                    type="tel"
                    placeholder="Your Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full mt-1 px-4 py-3 rounded-md bg-accent-foreground/5 border border-accent-foreground/10 text-accent-foreground placeholder:text-accent-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-primary font-semibold uppercase tracking-wider">Your Message / Order Details</label>
                <textarea
                  rows={4}
                  placeholder="What would you like to order?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full mt-1 px-4 py-3 rounded-md bg-accent-foreground/5 border border-accent-foreground/10 text-accent-foreground placeholder:text-accent-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
                Send Order Inquiry
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
