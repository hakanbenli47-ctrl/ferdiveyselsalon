import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hizmetler",
  description: "Saç kesimi, renklendirme, bakım, şekillendirme, makyaj ve güzellik uygulamalarımızı keşfedin.",
};

const services = [
  {
    no: "01",
    title: "Saç Kesimi & Tasarım",
    intro: "Saçın doğal hareketini ve günlük kullanımını merkeze alan kişisel tasarım.",
    items: ["Kadın saç kesimi", "Kakül ve form yenileme", "Katlı ve hacimli kesim", "Yıkama ve şekillendirme"],
  },
  {
    no: "02",
    title: "Renklendirme",
    intro: "Saç geçmişi, ten alt tonu ve hedef görünüm birlikte değerlendirilerek planlanır.",
    items: ["Dip ve bütünsel boya", "Ombre & sombre", "Balyaj & ışıltı", "Tonlama ve renk düzeltme"],
  },
  {
    no: "03",
    title: "Bakım Ritüelleri",
    intro: "İşlem görmüş, kuru veya mat saçların ihtiyacına göre destekleyici bakım seçenekleri.",
    items: ["Nem ve parlaklık bakımı", "Yoğun onarım", "Keratin destekli bakım", "Saç derisi arındırma"],
  },
  {
    no: "04",
    title: "Şekillendirme",
    intro: "Günlük zarafetten özel davetlere kadar saçın formunu tamamlayan dokunuşlar.",
    items: ["Fön ve maşa", "Dalga ve hacim", "Topuz tasarımı", "Örgü ve modern stiller"],
  },
  {
    no: "05",
    title: "Makyaj",
    intro: "Yüzün doğal dengesini koruyan, ışığa ve davetin karakterine göre tasarlanan görünüm.",
    items: ["Günlük makyaj", "Davet makyajı", "Gelin makyajı", "Prova ve ürün planı"],
  },
  {
    no: "06",
    title: "Kaş & Bakış",
    intro: "Yüz ifadesini sertleştirmeden, doğal oranları öne çıkaran tamamlayıcı uygulamalar.",
    items: ["Kaş şekillendirme", "Kaş tasarımı", "Kirpik bakımı", "Bakış bütünlüğü danışmanlığı"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero page-hero-services">
        <div className="shell page-hero-inner">
          <p className="eyebrow">HİZMETLER</p>
          <h1>Her detayda<br /><em>kişisel uzmanlık.</em></h1>
          <p>İyi bir sonuç, doğru sorularla başlar. Saçınızı, stilinizi ve beklentinizi birlikte okuyarak size ait bir plan oluşturuyoruz.</p>
        </div>
      </section>

      <section className="shell section-space">
        <div className="services-detail-grid">
          {services.map((service) => (
            <article className="service-detail" key={service.no}>
              <div className="service-detail-head">
                <span>{service.no}</span>
                <h2>{service.title}</h2>
              </div>
              <p>{service.intro}</p>
              <ul>
                {service.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className="service-note">Uygun işlem ve fiyat bilgisi; saç uzunluğu, yoğunluğu ve işlem geçmişi değerlendirildikten sonra netleştirilir.</p>
      </section>

      <section className="service-editorial">
        <div className="shell service-editorial-grid">
          <div className="service-editorial-image">
            <Image src="/images/balayage-editorial.png" alt="Yüz görünmeden arkadan çekilmiş karamel balyaj saç" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div>
            <p className="eyebrow">DANIŞMANLIK</p>
            <h2>Saçınızın bugününü anlar, yarınını birlikte planlarız.</h2>
            <p>İşlem öncesi görüşmede saç geçmişinizi, bakım alışkanlıklarınızı ve hedefinizi konuşuruz. Gerektiğinde tek seansta yoğun değişim yerine, saçın bütünlüğünü koruyan aşamalı bir yol haritası öneririz.</p>
            <a className="button button-gold" href="https://wa.me/905437739198?text=Merhaba%2C%20sa%C3%A7%20dan%C4%B1%C5%9Fmanl%C4%B1%C4%9F%C4%B1%20ve%20randevu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noreferrer">Danışmanlık isteyin</a>
          </div>
        </div>
      </section>

      <section className="shell section-space process-section">
        <div className="section-heading">
          <div><p className="eyebrow">SALON AKIŞI</p><h2>Randevunuz nasıl ilerler?</h2></div>
        </div>
        <ol className="process-grid">
          <li><span>01</span><h3>Dinliyoruz</h3><p>İstediğiniz görünümü ve günlük rutininizi konuşuyoruz.</p></li>
          <li><span>02</span><h3>Analiz ediyoruz</h3><p>Saç yapısı, işlem geçmişi ve yüz oranlarını değerlendiriyoruz.</p></li>
          <li><span>03</span><h3>Tasarlıyoruz</h3><p>Teknik, ton ve formu size özel bir plana dönüştürüyoruz.</p></li>
          <li><span>04</span><h3>Koruyoruz</h3><p>Sonucunuzu evde sürdürebilmeniz için bakım önerileri paylaşıyoruz.</p></li>
        </ol>
      </section>

      <section className="faq-section">
        <div className="shell faq-grid">
          <div><p className="eyebrow">MERAK EDİLENLER</p><h2>Randevu öncesi kısa notlar.</h2></div>
          <div className="faq-list">
            <details><summary>Renklendirme öncesi saçımı yıkamalı mıyım?</summary><p>Saç derisinin doğal koruyucu tabakasını korumak için çoğu işlem öncesinde aynı gün yıkama önermiyoruz. Özel durumunuzu randevu sırasında paylaşabilirsiniz.</p></details>
            <details><summary>İşlem süresi ne kadar?</summary><p>Süre, saçın uzunluğu, yoğunluğu ve seçilen tekniğe göre değişir. Randevu öncesinde yaklaşık süre bilgisi verilir.</p></details>
            <details><summary>Fotoğraf üzerinden fiyat alabilir miyim?</summary><p>WhatsApp üzerinden gün ışığında çekilmiş güncel saç fotoğrafınızı ve hedef görünümü iletebilirsiniz. Kesin plan salon değerlendirmesiyle netleşir.</p></details>
          </div>
        </div>
      </section>

      <section className="appointment-strip compact-cta">
        <div className="shell appointment-inner"><p>Size uygun hizmeti birlikte seçelim</p><h2>Danışmanlık için yazın.</h2><div><a className="button button-light" href="https://wa.me/905437739198" target="_blank" rel="noreferrer">WhatsApp</a><Link className="text-link text-link-light" href="/iletisim">İletişim bilgileri</Link></div></div>
      </section>
    </>
  );
}
