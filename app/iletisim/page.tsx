import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "İletişim & Randevu",
  description: "Ferdi Veysel Salon telefon, WhatsApp, adres ve yol tarifi bilgileri.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero page-hero-contact"><div className="shell page-hero-inner"><p className="eyebrow">İLETİŞİM</p><h1>Randevunuzu<br /><em>birlikte planlayalım.</em></h1><p>Hizmet, uygunluk ve ön görüşme için doğrudan telefon veya WhatsApp üzerinden ulaşabilirsiniz.</p></div></section>

      <section className="shell section-space contact-page-grid">
        <div className="contact-panel">
          <p className="eyebrow">FERDİ VEYSEL SALON</p>
          <h2>Size bir mesaj kadar yakınız.</h2>
          <div className="contact-links">
            <a href="tel:+905437739198"><span>Telefon</span><strong>0543 773 91 98</strong></a>
            <a href="https://wa.me/905437739198?text=Merhaba%2C%20randevu%20almak%20istiyorum." target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>Hızlı mesaj gönder</strong></a>
            <a href="https://www.google.com/maps/search/?api=1&query=Ferdi%20Veysel%20Bayan%20Kuaf%C3%B6r%C3%BC%20Batman" target="_blank" rel="noreferrer"><span>Konum</span><strong>Gap Mahallesi, Batman Merkez</strong></a>
          </div>
          <div className="contact-note"><h3>Randevu notu</h3><p>İşleminizi daha doğru planlayabilmemiz için WhatsApp mesajınıza güncel saç fotoğrafınızı ve istediğiniz görünümü ekleyebilirsiniz. Çalışma saatleri ve uygunluk için lütfen iletişime geçin.</p></div>
        </div>
        <div className="map-frame">
          <Image src="/images/salon-hero-interior.png" alt="Ferdi Veysel Salon için temsili salon atmosferi" fill sizes="(max-width: 900px) 100vw, 52vw" />
          <div className="map-card">
            <span>BATMAN · GAP MAHALLESİ</span>
            <h3>Salona gelmeden önce yolunuzu planlayın.</h3>
            <a href="https://www.google.com/maps/search/?api=1&query=Ferdi%20Veysel%20Bayan%20Kuaf%C3%B6r%C3%BC%20Batman" target="_blank" rel="noreferrer">Google Maps’te aç</a>
          </div>
        </div>
      </section>
    </>
  );
}
