import { ShoppingCart, Plus, Minus, Trash2, MessageCircle, ArrowLeft, MapPin, LocateFixed } from "lucide-react";
import { useState } from "react";
import MapPicker from "./MapPicker";
import { useCart } from "@/context/CartContext";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";

const WHATSAPP_NUMBER = "923349422514";

const CartDrawer = () => {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart, isCartOpen, setIsCartOpen } = useCart();
  const [note, setNote] = useState("");
  const [isCheckout, setIsCheckout] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    contact: "",
    address: "",
    paymentMethod: "cod"
  });
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleLocationSelect = (lat: number, lng: number) => {
    const mapLink = `\nhttps://maps.google.com/?q=${lat},${lng}`;
    setCustomerDetails(prev => ({
      ...prev,
      address: prev.address ? prev.address + mapLink : mapLink.trim()
    }));
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => handleLocationSelect(pos.coords.latitude, pos.coords.longitude),
        (err) => alert("Could not get current location. Please ensure location services are enabled.")
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleWhatsAppOrder = () => {
    if (!customerDetails.name || !customerDetails.contact || !customerDetails.address) {
      alert("Please fill in all required fields (Name, Contact, Address).");
      return;
    }

    const lines = items.map(
      (ci) =>
        `• ${ci.item.name} × ${ci.quantity} doz — Rs. ${(ci.item.price * ci.quantity).toLocaleString()}/-`
    );
    let message = `🛒 *New Order from Habiba Website*\n\n`;
    message += `👤 *Customer Details:*\n`;
    message += `Name: ${customerDetails.name}\n`;
    message += `Contact: ${customerDetails.contact}\n`;
    message += `Address: ${customerDetails.address}\n\n`;

    message += `📦 *Order Items:*\n`;
    message += lines.join("\n");
    message += `\n\n💰 *Grand Total: Rs. ${totalPrice.toLocaleString()}/-*`;

    message += `\n\n💳 *Payment Method:* ${customerDetails.paymentMethod === "cod" ? "Cash on Delivery" : "Online Bank Transfer"}`;
    if (customerDetails.paymentMethod === "online") {
      message += `\n*(Please see attached payment receipt)*`;
    }

    if (note.trim()) {
      message += `\n\n📝 *Note:* ${note.trim()}`;
    }
    message += `\n\nPlease confirm availability and delivery details. Thank you!`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleDetailsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  };

  return (
    <Drawer open={isCartOpen} onOpenChange={setIsCartOpen}>
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader>
          <DrawerTitle className="font-display flex items-center gap-2">
            {isCheckout && (
              <button onClick={() => setIsCheckout(false)} className="hover:text-primary transition-colors">
                <ArrowLeft size={20} />
              </button>
            )}
            {isCheckout ? "Checkout Details" : "Your Cart"}
          </DrawerTitle>
          <DrawerDescription>
            {isCheckout
              ? "Please provide your details below to place the order."
              : totalItems === 0
                ? "Your cart is empty — browse the menu to add items."
                : `${totalItems} item${totalItems > 1 ? "s" : ""} in your cart`
            }
          </DrawerDescription>
        </DrawerHeader>

        {totalItems > 0 && !isCheckout && (
          <div className="px-4 overflow-y-auto flex-1 space-y-3 max-h-[40vh]">
            {items.map((ci) => (
              <div
                key={ci.item.id}
                className="flex items-center gap-3 bg-muted/50 rounded-lg p-3"
              >
                <img
                  src={ci.item.image}
                  alt={ci.item.name}
                  className="w-14 h-14 rounded-md object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground truncate">
                    {ci.item.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Rs. {ci.item.price.toLocaleString()}/- × {ci.quantity} doz
                  </p>
                  <p className="text-sm font-bold text-primary">
                    Rs. {(ci.item.price * ci.quantity).toLocaleString()}/-
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => updateQuantity(ci.item.id, ci.quantity - 1)}
                    className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-6 text-center text-sm font-semibold">
                    {ci.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(ci.item.id, ci.quantity + 1)}
                    className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                  <button
                    onClick={() => removeItem(ci.item.id)}
                    className="w-7 h-7 rounded-full bg-destructive/10 text-destructive flex items-center justify-center hover:bg-destructive/20 transition-colors ml-1"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}

            <div>
              <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Order Note (optional)
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={2}
                placeholder="Any special instructions?"
                className="w-full mt-1 px-3 py-2 rounded-md bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
              />
            </div>
          </div>
        )}

        {totalItems > 0 && isCheckout && (
          <div className="px-4 overflow-y-auto flex-1 space-y-4 max-h-[50vh] pb-4">
            <div>
              <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Name <span className="text-destructive">*</span></label>
              <input type="text" name="name" value={customerDetails.name} onChange={handleDetailsChange} placeholder="Enter your full name" className="w-full mt-1 px-3 py-2 rounded-md bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm" required />
            </div>
            <div>
              <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Contact Number <span className="text-destructive">*</span></label>
              <input type="tel" name="contact" value={customerDetails.contact} onChange={handleDetailsChange} placeholder="Enter your phone number" className="w-full mt-1 px-3 py-2 rounded-md bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm" required />
            </div>
            <div>
              <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Delivery Address <span className="text-destructive">*</span></label>
              <div className="relative mt-1">
                <textarea name="address" value={customerDetails.address} onChange={handleDetailsChange} rows={2} placeholder="Enter your delivery address" className="w-full px-3 py-2 pr-14 rounded-md bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none" required />
                <div className="absolute bottom-2 right-2 flex gap-1 bg-background/50 backdrop-blur-sm rounded-md p-1 border border-border">
                  <button type="button" onClick={() => setIsMapOpen(true)} className="text-primary hover:opacity-80 transition-opacity p-1 bg-background rounded" title="Pick on Map">
                    <MapPin size={16} />
                  </button>
                  <button type="button" onClick={getCurrentLocation} className="text-[hsl(142,70%,40%)] hover:opacity-80 transition-opacity p-1 bg-background rounded" title="Use Current Location">
                    <LocateFixed size={16} />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Payment Method</label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="paymentOption" checked={customerDetails.paymentMethod === "cod"} onChange={() => setCustomerDetails({ ...customerDetails, paymentMethod: "cod" })} className="w-4 h-4 text-primary bg-muted border-border focus:ring-primary focus:ring-2" />
                  <span className="text-sm font-medium">Cash on Delivery (COD)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="paymentOption" checked={customerDetails.paymentMethod === "online"} onChange={() => setCustomerDetails({ ...customerDetails, paymentMethod: "online" })} className="w-4 h-4 text-primary bg-muted border-border focus:ring-primary focus:ring-2" />
                  <span className="text-sm font-medium">Online Bank Transfer</span>
                </label>
              </div>

              {customerDetails.paymentMethod === "online" && (
                <div className="mt-3 p-3 bg-secondary/30 rounded-md border border-secondary text-sm">
                  <p className="font-semibold text-primary mb-1">Bank Details:</p>
                  <p><span className="text-muted-foreground">Bank Name:</span> Habib Bank Limited</p>
                  <p><span className="text-muted-foreground">Account No:</span> <span className="font-mono">1011-79018495-03</span></p>
                  <p className="mt-2 text-xs text-muted-foreground italic">Please send the payment receipt along with your order on WhatsApp.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {totalItems > 0 && (
          <DrawerFooter>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Grand Total</span>
              <span className="text-xl font-bold text-primary font-display">
                Rs. {totalPrice.toLocaleString()}/-
              </span>
            </div>

            {!isCheckout ? (
              <>
                <button
                  onClick={() => setIsCheckout(true)}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Proceed to Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-muted-foreground text-sm py-2 hover:text-destructive transition-colors"
                >
                  Clear Cart
                </button>
              </>
            ) : (
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-[hsl(142,70%,40%)] text-white py-3 rounded-md font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Place Order on WhatsApp
              </button>
            )}
          </DrawerFooter>
        )}

        {totalItems === 0 && (
          <DrawerFooter>
            <DrawerClose asChild>
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
                Browse Menu
              </button>
            </DrawerClose>
          </DrawerFooter>
        )}
      </DrawerContent>
      <MapPicker
        open={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        onSelect={handleLocationSelect}
      />
    </Drawer>
  );
};

export default CartDrawer;
