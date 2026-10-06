import Image from "next/image";
import Link from "next/link";

const signatureServices = [
  {
    number: "01",
    title: "Kesim & Tasarım",
    eyebrow: "FORM",
    text: "Yüz hattınız, saç dokunuz ve günlük rutininizle çalışan kişisel bir form.",
    image: "/images/salon-hero-interior.png",
    href: "/hizmetler",
  },
  {
    number: "02",
    title: "Renk & Işıltı",
    eyebrow: "TON",
    text: "Doğal görünen geçişler ve saç bütünlüğünü gözeten kontrollü renk planı.",
    image: "/images/balayage-editorial.png",
    href: "/hizmetler",
  },
  {
    number: "03",
    title: "Gelin & Davet",
    eyebrow: "RİTÜEL",
    text: "Prova sürecinden son dokunuşa kadar sakin ve bütünlüklü özel gün hazırlığı.",
    image: "/images/bridal-updo-editorial.png",
    href: "/gelin",
  },
];

const heroImages = [
  { src: "/images/salon-hero-interior.png", className: "hero-slide hero-slide-one" },
  { src: "/images/balayage-editorial.png", className: "hero-slide hero-slide-two" },
  { src: "/images/bridal-updo-editorial.png", className: "hero-slide hero-slide-three" },
];

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          {heroImages.map((image, index) => (
            <Image key={image.src} className={image.className} src={image.src} alt="" fill priority={index === 0} sizes="100vw" />
          ))}
        </div>
        <div className="hero-shade" />
        <div className="hero-frame" aria-hidden="true" />
        <div className="shell hero-inner">
          <div className="hero-copy">
            <div className="hero-meta"><span>FERDİ VEYSEL SALON</span><span>BATMAN · GAP MAHALLESİ</span></div>
            <p className="eyebrow">SAÇ & GÜZELLİK ATÖLYESİ</p>
            <h1 id="hero-title">Kendinizi<span>yeniden görün.</span></h1>
            <p className="hero-lede">Size benzeyen, kolay taşıdığınız ve her gün iyi hissettiren bir görünüm. Kişisel danışmanlıkla başlayan premium salon deneyimi.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="https://wa.me/905437739198?text=Merhaba%2C%20randevu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noreferrer">Randevunuzu planlayın</a>
              <Link className="text-link text-link-light" href="/hizmetler">Hizmetleri keşfedin</Link>
            </div>
          </div>
          <div className="hero-side-note">
            <span>01</span><p>Danışmanlık</p><span>02</span><p>Kişisel tasarım</p><span>03</span><p>Son dokunuş</p>
          </div>
        </div>
        <a className="hero-scroll" href="#kesfet" aria-label="Sayfanın devamını keşfet">
          <span>DEVAMINI KEŞFET</span>
          <svg viewBox="0 0 24 34" aria-hidden="true"><path d="M12 1v29M4.5 22.5 12 30l7.5-7.5" /></svg>
        </a>
      </section>

      <div className="marquee" aria-label="Salon hizmetleri">
        <div className="marquee-track">
          <span>KESİM</span><i>✦</i><span>RENK</span><i>✦</i><span>BALYAJ</span><i>✦</i><span>BAKIM</span><i>✦</i><span>GELİN</span><i>✦</i><span>MAKYAJ</span><i>✦</i>
          <span aria-hidden="true">KESİM</span><i aria-hidden="true">✦</i><span aria-hidden="true">RENK</span><i aria-hidden="true">✦</i><span aria-hidden="true">BALYAJ</span><i aria-hidden="true">✦</i><span aria-hidden="true">BAKIM</span><i aria-hidden="true">✦</i><span aria-hidden="true">GELİN</span><i aria-hidden="true">✦</i><span aria-hidden="true">MAKYAJ</span><i aria-hidden="true">✦</i>
        </div>
      </div>

      <section className="intro-band" id="kesfet">
        <div className="shell intro-grid">
          <div><p className="section-kicker">BİZİM YAKLAŞIMIMIZ</p><span className="intro-index">01 — 03</span></div>
          <div>
            <h2>Trendleri değil, <em>size yakışanı</em> tasarlıyoruz.</h2>
            <div className="intro-copy-row">
              <p>Her hizmet danışmanlıkla başlar. İhtiyacınızı dinler, doğru tekniği birlikte belirler ve günlük hayatınıza uyum sağlayan bir sonuç tasarlarız.</p>
              <Link className="round-link" href="/hakkimizda" aria-label="Yaklaşımımızı keşfedin"><span>FV</span>Yaklaşımımız</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="services-showcase shell section-space" aria-labelledby="services-title">
        <div className="section-heading editorial-heading">
          <div><p className="eyebrow">İMZA HİZMETLER</p><h2 id="services-title">Üç farklı ihtiyaç.<br /><em>Tek bir özen.</em></h2></div>
          <p className="heading-note">İşlemi değil, elde etmek istediğiniz hissi konuşarak başlıyoruz.</p>
        </div>
        <div className="visual-service-grid">
          {signatureServices.map((service) => (
            <Link className="visual-service-card" href={service.href} key={service.number}>
              <Image src={service.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" />
              <span className="visual-service-shade" />
              <div className="visual-service-top"><span>{service.number}</span><span>{service.eyebrow}</span></div>
              <div className="visual-service-copy"><h3>{service.title}</h3><p>{service.text}</p><span className="card-action">Detayları görün</span></div>
            </Link>
          ))}
        </div>
        <div className="center-link"><Link className="text-link" href="/hizmetler">Tüm hizmetleri inceleyin</Link></div>
      </section>

      <section className="editorial-feature shell section-space">
        <div className="editorial-image-stage">
          <div className="editorial-image-wrap"><Image src="/images/balayage-editorial.png" alt="Arkadan görünen, doğal karamel geçişli uzun saç" fill sizes="(max-width: 900px) 100vw, 56vw" /></div>
          <div className="image-seal" aria-hidden="true"><span>FV</span> COLOR ATELIER</div>
          <p className="image-caption">DOĞAL GEÇİŞ · BOYUTLU RENK · KİŞİSEL TON</p>
        </div>
        <div className="editorial-copy">
          <span className="chapter-no">02</span><p className="eyebrow">RENK UZMANLIĞI</p><h2>Saçınızın kendi ışığını ortaya çıkarın.</h2>
          <p>Ten alt tonu, saç geçmişi ve bakım rutininizi birlikte değerlendirir; ombre, sombre, balyaj ve bütünsel renklendirme planını size göre kurarız.</p>
          <ul className="quiet-list"><li><span>01</span> Renk ve saç analizi</li><li><span>02</span> Kişiye özel ton planı</li><li><span>03</span> Koruyucu bakım önerisi</li></ul>
          <Link className="text-link" href="/hizmetler">Renk hizmetlerini inceleyin</Link>
        </div>
      </section>

      <section className="experience-section">
        <div className="shell experience-grid">
          <div className="experience-heading"><p className="eyebrow">FERDİ VEYSEL DENEYİMİ</p><h2>Sadece sonuç değil, <em>süreç de güzel.</em></h2></div>
          <div className="experience-list">
            <article><span>01</span><div><h3>Sizi dinleyen danışmanlık</h3><p>İstediğiniz görünümü, saçınızın geçmişini ve günlük alışkanlıklarınızı birlikte değerlendiririz.</p></div></article>
            <article><span>02</span><div><h3>Kontrollü ve şeffaf plan</h3><p>Uygulanacak tekniği, olası sonucu ve bakım ihtiyacını işlem öncesinde açıkça konuşuruz.</p></div></article>
            <article><span>03</span><div><h3>Salondan sonra da yaşayan stil</h3><p>Görünümünüzü evde kolayca sürdürebilmeniz için size uygun bakım ve kullanım önerileri sunarız.</p></div></article>
          </div>
        </div>
      </section>

      <section className="lookbook shell section-space" aria-labelledby="lookbook-title">
        <div className="lookbook-copy"><p className="eyebrow">SEÇİLİ DOKUNUŞLAR</p><h2 id="lookbook-title">Detaylarda<br /><em>saklı güzellik.</em></h2><p>Renk, doku ve özel gün görünümlerinden oluşan görsel seçkiyi keşfedin.</p><Link className="button button-dark" href="/galeri">Galeriyi görün</Link></div>
        <div className="lookbook-collage">
          <figure className="lookbook-main"><Image src="/images/bridal-updo-editorial.png" alt="Zarif gelin topuzu" fill sizes="(max-width: 760px) 70vw, 34vw" /></figure>
          <figure className="lookbook-small"><Image src="/images/makeup-brushes-pexels.jpg" alt="Profesyonel makyaj fırçaları" fill sizes="(max-width: 760px) 45vw, 20vw" /></figure>
          <span className="lookbook-word" aria-hidden="true">BEAUTY</span>
        </div>
      </section>

      <section className="bridal-teaser">
        <div className="shell bridal-teaser-grid">
          <div className="bridal-copy-wrap"><span className="chapter-no">03</span><p className="eyebrow">ÖZEL GÜNLER</p><h2>En güzel gününüzde, kendiniz gibi.</h2><p>Gelin saçı, profesyonel makyaj ve davet hazırlığını prova, zamanlama ve son dokunuşlarla tek bir sakin akışta planlıyoruz.</p><Link className="button button-gold" href="/gelin">Gelin deneyimini keşfedin</Link></div>
          <div className="bridal-teaser-image"><Image src="/images/bridal-updo-editorial.png" alt="Arkadan görünen zarif gelin topuzu ve inci detaylı saç aksesuarı" fill sizes="(max-width: 900px) 100vw, 40vw" /><span className="image-vertical-note">BRIDAL · HAIR · MAKEUP</span></div>
        </div>
      </section>

      <section className="appointment-strip">
        <div className="shell appointment-inner"><p>Yeni görünümünüz için ilk adım</p><h2>Hayalinizdeki görünümü <em>birlikte tasarlayalım.</em></h2><div><a className="button button-light" href="tel:+905437739198">0543 773 91 98</a><a className="text-link text-link-light" href="https://wa.me/905437739198?text=Merhaba%2C%20randevu%20almak%20istiyorum." target="_blank" rel="noreferrer">WhatsApp’tan yazın</a></div></div>
      </section>
    </>
  );
}
