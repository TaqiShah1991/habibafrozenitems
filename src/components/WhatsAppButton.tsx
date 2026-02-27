import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "923349422514";

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[hsl(142,70%,40%)] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
    >
      <MessageCircle size={26} />
    </a>
  );
};

export default WhatsAppButton;
