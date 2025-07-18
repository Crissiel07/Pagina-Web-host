"use client";

import { Button } from "@/components/ui/button";

export function ContactButton() {
  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button 
      className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-6 text-lg"
      onClick={handleClick}
    >
      Contáctanos ahora
    </Button>
  );
}
