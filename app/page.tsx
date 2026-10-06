import Image from "next/image";
import Link from "next/link";

const signatureServices = [
  {
    number: "01",
    title: "Kesim & Tasarım",
    text: "Yüz hattı, saç dokusu ve günlük rutininize göre planlanan kişisel saç tasarımı.",
  },
  {
    number: "02",
    title: "Renk & Işıltı",
    text: "Boyutlu renkler, doğal geçişler ve saç bütünlüğünü gözeten profesyonel uygulamalar.",
  },
  {
    number: "03",
    title: "Gelin & Davet",
    text: "Prova sürecinden son dokunuşa kadar sakin ve özenli bir özel gün deneyimi.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <Image
          className="hero-image"
          src="/images/salon-hero-interior.png"
          alt="Koyu ahşap, taş ve pirinç detaylara sahip lüks kuaför salonu atmosferi"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">BATMAN · SAÇ & GÜZELLİK ATÖLYESİ</p>
            <h1 id="hero-title">
              Zarafet,
              <span>size özel.</span>
            </h1>
            <p className="hero-lede">
              Saçın karakterini koruyan modern teknikler, kişisel danışmanlık ve
              her ayrıntısı düşünülmüş sakin bir salon deneyimi.
            </p>
            <div className="hero-actions">
              <a
                className="button button-gold"
                href="https://wa.me/905437739198?text=Merhaba%2C%20randevu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp’tan randevu
              </a>
              <Link className="text-link text-link-light" href="/hizmetler">
                Hizmetleri keşfet
              </Link>
            </div>
          </div>
          <div className="hero-signature" aria-hidden="true">
            <span>FV</span>
            <p>HAIR · BEAUTY · RITUAL</p>
          </div>
        </div>
      </section>

      <section className="intro-band">
        <div className="shell intro-grid">
          <p className="section-kicker">İMZA DOKUNUŞLAR</p>
          <div>
            <h2>Görünümünüzü değil, enerjinizi yenileyen bir deneyim.</h2>
            <p>
              Her hizmet danışmanlıkla başlar. İhtiyacınızı dinler, doğru
              tekniği birlikte belirler ve sürdürülebilir bir sonuç tasarlarız.
            </p>
          </div>
        </div>
      </section>

      <section className="services-preview shell section-space" aria-labelledby="services-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">UZMANLIK ALANLARI</p>
            <h2 id="services-title">Size ait bir stil.</h2>
          </div>
          <Link className="text-link" href="/hizmetler">
            Tüm hizmetler
          </Link>
        </div>
        <div className="service-cards">
          {signatureServices.map((service) => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link href="/hizmetler" aria-label={`${service.title} ayrıntıları`}>
                İncele
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-feature shell section-space pt-0">
        <div className="editorial-image-wrap">
          <Image
            src="/images/balayage-editorial.png"
            alt="Arkadan görünen, doğal karamel geçişli uzun saç"
            fill
            sizes="(max-width: 900px) 100vw, 56vw"
          />
        </div>
        <div className="editorial-copy">
          <p className="eyebrow">RENK UZMANLIĞI</p>
          <h2>Her ton, saçın kendi ışığında.</h2>
          <p>
            Ten alt tonu, saç geçmişi ve bakım rutininizi birlikte değerlendirir;
            ombre, sombre, balyaj ve bütünsel renklendirme planını size göre kurarız.
          </p>
          <ul className="quiet-list">
            <li>Renk ve saç analizi</li>
            <li>Kişiye özel ton planı</li>
            <li>Koruyucu bakım önerisi</li>
          </ul>
          <Link className="text-link" href="/hizmetler">Renk hizmetlerini incele</Link>
        </div>
      </section>

      <section className="bridal-teaser">
        <div className="shell bridal-teaser-grid">
          <div>
            <p className="eyebrow">ÖZEL GÜNLER</p>
            <h2>En güzel gününüzde, kendiniz gibi.</h2>
            <p>
              Gelin saçı, profesyonel makyaj ve davet hazırlığını prova, zamanlama
              ve son dokunuşlarla tek bir sakin akışta planlıyoruz.
            </p>
            <Link className="button button-gold" href="/gelin">Gelin deneyimini keşfet</Link>
          </div>
          <div className="bridal-teaser-image">
            <Image
              src="/images/bridal-updo-editorial.png"
              alt="Arkadan görünen zarif gelin topuzu ve inci detaylı saç aksesuarı"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="appointment-strip">
        <div className="shell appointment-inner">
          <p>Yeni görünümünüz için ilk adım</p>
          <h2>Kısa bir danışmanlıkla başlayalım.</h2>
          <div>
            <a className="button button-light" href="tel:+905437739198">0543 773 91 98</a>
            <Link className="text-link text-link-light" href="/iletisim">Salona ulaşın</Link>
          </div>
        </div>
      </section>
    </>
  );
}
