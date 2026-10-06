import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Ferdi Veysel Salon saç, renk, gelin ve güzellik ilham galerisi.",
};

const gallery = [
  { src: "/images/salon-hero-interior.png", alt: "Lüks ve modern salon atmosferi", title: "Salon Ritüeli", className: "wide" },
  { src: "/images/balayage-editorial.png", alt: "Arkadan görünen karamel balyaj saç", title: "Boyutlu Renk", className: "tall" },
  { src: "/images/makeup-brushes-pexels.jpg", alt: "Profesyonel makyaj fırçaları", title: "Makyaj Detayları", className: "" },
  { src: "/images/bridal-updo-editorial.png", alt: "Arkadan görünen gelin topuzu", title: "Özel Gün", className: "tall" },
  { src: "/images/beauty-tools-pexels.jpg", alt: "Altın tepsi üzerinde güzellik araçları", title: "İnce İşçilik", className: "" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero"><div className="shell page-hero-inner"><p className="eyebrow">GALERİ</p><h1>İlham veren<br /><em>dokunuşlar.</em></h1><p>Renk, form, doku ve özel gün görünümlerinden seçkiler.</p></div></section>
      <section className="shell section-space">
        <div className="gallery-grid">
          {gallery.map((item) => (
            <figure className={`gallery-item ${item.className}`} key={item.title}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 720px) 100vw, 50vw" />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
        <p className="gallery-disclaimer">Galeri görselleri hizmetlerin estetik yönünü temsil eder; gerçek sonuç saç yapısı ve seçilen uygulamaya göre değişir. Makyaj ve araç görselleri: Pexels.</p>
      </section>
    </>
  );
}
