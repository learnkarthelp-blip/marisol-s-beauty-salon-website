import { Phone } from 'lucide-react';

export default function StickyCallButton() {
  return (
    <a
      href="tel:7472798532"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:bottom-6 lg:hidden"
      aria-label="Call Marisol's Beauty Salon"
    >
      <div className="flex items-center gap-3 bg-rosegold hover:bg-rosegold-dark text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 min-h-[56px] min-w-[56px]">
        <Phone className="h-6 w-6" />
        <span className="font-semibold text-lg whitespace-nowrap">
          (747) 279-8532
        </span>
      </div>
    </a>
  );
}
