"use client";

import { useEffect, useRef, useState } from "react";

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!dockRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div className="contact-dock" data-open={open} ref={dockRef}>
      <button
        className="contact-dock-trigger"
        type="button"
        aria-label="Hızlı iletişim menüsünü aç veya kapat"
        aria-expanded={open}
        aria-controls="floating-contact-actions"
        onClick={() => setOpen((current) => !current)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 10h10M7 14h7M12 3a9 9 0 0 0-7.3 14.25L4 21l3.75-.7A9 9 0 1 0 12 3Z" />
        </svg>
        <span>İletişim</span>
      </button>
      <div className="dock-actions" id="floating-contact-actions" aria-hidden={!open}>
        <a href="tel:+905437739198" aria-label="Telefonla ara" tabIndex={open ? 0 : -1}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.3 3.5 8.4 3l2 5-2.1 1.7a15.3 15.3 0 0 0 6 6l1.7-2.1 5 2-.5 3.1c-.2 1.2-1.3 2.1-2.5 2.1A14.8 14.8 0 0 1 3.2 6c0-1.2.9-2.3 2.1-2.5Z" /></svg>
          <span>Ara</span>
        </a>
        <a
          href="https://wa.me/905437739198?text=Merhaba%2C%20randevu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp'tan yaz"
          tabIndex={open ? 0 : -1}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.6a8 8 0 0 1-11.8 7L4 19.7l1.1-4.1A8 8 0 1 1 20 11.6Z" /><path d="M8.3 8.2c.5 3 2.1 4.7 5.4 5.7" /></svg>
          <span>WhatsApp</span>
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Ferdi%20Veysel%20Bayan%20Kuaf%C3%B6r%C3%BC%20Batman"
          target="_blank"
          rel="noreferrer"
          aria-label="Yol tarifi al"
          tabIndex={open ? 0 : -1}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.6 6-11a6 6 0 1 0-12 0c0 5.4 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></svg>
          <span>Konum</span>
        </a>
      </div>
    </div>
  );
}
