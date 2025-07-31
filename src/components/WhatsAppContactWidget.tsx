import React from "react";
import { Phone } from "lucide-react";

const WhatsAppContactWidget = () => {
  const phoneNumber = "14074429820";
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in your services. Can you help me?"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  const handleContactClick = () => {
    window.location.href = "/contact";
  };

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-10 z-50 space-y-3 flex flex-col items-end md:bottom-6 md:right-6">
      {/* WhatsApp Button */}
      <div className="relative group flex items-center space-x-2">
        <span className="hidden sm:block bg-green-600 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 shadow-md">
          Chat on WhatsApp
        </span>
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          title="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="white"
          >
            <path d="M16.006 3.012c-7.25 0-13.125 5.875-13.125 13.125 0 2.312.619 4.531 1.781 6.5l-1.875 6.875 7.062-1.844c1.844 1.031 3.938 1.562 6.125 1.562h.031c7.25 0 13.125-5.875 13.125-13.125s-5.875-13.125-13.125-13.125zm0 24.031c-1.906 0-3.75-.5-5.406-1.438l-.375-.219-4.188 1.094 1.094-4.063-.25-.406c-1.094-1.75-1.688-3.75-1.688-5.813 0-6.125 4.969-11.094 11.094-11.094s11.094 4.969 11.094 11.094-4.969 11.094-11.094 11.094zm6.375-8.188c-.344-.188-2.031-1-2.344-1.125-.312-.094-.531-.188-.75.188s-.875 1.125-1.094 1.375c-.219.25-.406.281-.75.094-.344-.188-1.438-.531-2.75-1.688-1.031-.938-1.719-2.125-1.906-2.469-.188-.375-.031-.562.156-.75.156-.156.344-.406.5-.594.156-.188.219-.312.344-.531.125-.219.062-.406 0-.594-.094-.188-.75-1.813-1.031-2.5-.25-.594-.5-.5-.75-.5h-.656c-.219 0-.562.094-.844.406s-1.094 1.063-1.094 2.594 1.125 3.031 1.281 3.25c.156.219 2.188 3.344 5.312 4.688.75.313 1.344.5 1.812.625.75.219 1.437.188 1.969.125.594-.094 1.813-.75 2.062-1.469.25-.719.25-1.344.188-1.469-.062-.125-.281-.188-.594-.344z" />
          </svg>
        </button>
      </div>

      {/* Contact Button */}
      <div className="relative group flex items-center space-x-2">
        <span className="hidden sm:block bg-blue-600 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 shadow-md">
          Order Now
        </span>
        <button
          onClick={handleContactClick}
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          title="Order Now"
        >
          <Phone className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppContactWidget;
