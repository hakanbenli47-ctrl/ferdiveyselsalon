import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gelin Saçı & Özel Gün",
  description: "Batman'da gelin saçı, profesyonel makyaj, prova ve özel gün hazırlığı.",
};

export default function BridalPage() {
  return (
    <>
      <section className="bridal-page-hero">
        <div className="shell bridal-page-grid">
          <div className="bridal-page-copy">
            <p className="eyebrow">GELİN & ÖZEL GÜN</p>
            <h1>En güzel hâliniz,<br /><em>yine siz.</em></h1>
            <p>Gelin görünümünü tek bir model olarak değil; yüzünüz, elbiseniz, mekânınız ve günün akışıyla bütünleşen kişisel bir tasarım olarak ele alıyoruz.</p>
            <a className="button button-gold" href="https://wa.me/905437739198?text=Merhaba%2C%20gelin%20paketi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noreferrer">Görüşme planlayın</a>
          </div>
          <div className="bridal-page-image">
            <Image src="/images/bridal-updo-editorial.png" alt="Arkadan görünen zarif gelin topuzu" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
        </div>
      </section>

      <section className="shell section-space bridal-offers">
        <div className="section-heading"><div><p className="eyebrow">BÜTÜNSEL HAZIRLIK</p><h2>Özel gün hizmetleri</h2></div></div>
        <div className="offer-grid">
          <article><span>01</span><h3>Gelin saçı</h3><p>Elbise, duvak ve yüz oranlarına göre prova edilerek tasarlanan kalıcı ve fotojenik form.</p></article>
          <article><span>02</span><h3>Gelin makyajı</h3><p>Ten dokusunu koruyan, gün ışığında ve fotoğrafta dengeli görünen kişisel makyaj.</p></article>
          <article><span>03</span><h3>Prova</h3><p>Model, ayrım, aksesuar ve ton kararlarının düğün gününden önce birlikte netleştirilmesi.</p></article>
          <article><span>04</span><h3>Davet hazırlığı</h3><p>Nişan, kına, söz, mezuniyet ve davetler için saç–makyaj bütünlüğü.</p></article>
        </div>
      </section>

      <section className="bridal-timeline">
        <div className="shell timeline-grid">
          <div><p className="eyebrow">PLANLAMA</p><h2>Sakin ve kontrollü bir hazırlık.</h2><p>Yoğun bir günün içinde salon deneyiminizin aceleye dönüşmemesi için tüm ayrıntıları önceden belirliyoruz.</p></div>
          <ol>
            <li><strong>Ön görüşme</strong><span>Elbise, aksesuar, mekân ve beğenilerinizi konuşuruz.</span></li>
            <li><strong>Prova günü</strong><span>Saç formunu ve makyaj tonlarını birlikte test ederiz.</span></li>
            <li><strong>Hazırlık planı</strong><span>Randevu saati ve gün içi akışınızı netleştiririz.</span></li>
            <li><strong>Son dokunuş</strong><span>Görünümü ışık, kalıcılık ve bütünlük açısından tamamlarız.</span></li>
          </ol>
        </div>
      </section>

      <section className="appointment-strip compact-cta"><div className="shell appointment-inner"><p>Tarihinizi birlikte planlayalım</p><h2>Gelin görüşmesi için bize yazın.</h2><div><a className="button button-light" href="https://wa.me/905437739198?text=Merhaba%2C%20gelin%20sa%C3%A7%C4%B1%20ve%20makyaj%C4%B1%20i%C3%A7in%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum." target="_blank" rel="noreferrer">WhatsApp’tan yazın</a></div></div></section>
    </>
  );
}
