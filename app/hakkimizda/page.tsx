import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Ferdi Veysel Salon'un kişisel danışmanlık, özenli uygulama ve sakin salon deneyimi yaklaşımı.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero"><div className="shell page-hero-inner"><p className="eyebrow">HAKKIMIZDA</p><h1>Ustalık,<br /><em>iyi hissettirir.</em></h1><p>Her misafir için dinleyen, açıkça anlatan ve özenle uygulayan bir salon yaklaşımı.</p></div></section>

      <section className="shell about-story section-space">
        <div className="about-image"><Image src="/images/salon-hero-interior.png" alt="Ferdi Veysel Salon için temsili premium iç mekân" fill sizes="(max-width: 900px) 100vw, 52vw" /></div>
        <div className="about-copy"><p className="eyebrow">FERDİ VEYSEL SALON</p><h2>Güzel sonuç kadar, güzel bir deneyim.</h2><p>Ferdi Veysel Salon’da her randevuyu kişisel bir çalışma olarak ele alıyoruz. Beklentinizi dinliyor, uygulanabilecek seçenekleri şeffaf biçimde paylaşıyor ve saçın doğal yapısına saygı duyan bir sonuç hedefliyoruz.</p><p>Salonun ritmi; acele etmeyen danışmanlık, düzenli çalışma alanı ve detaylara gösterilen özen üzerine kurulu. Amacımız yalnızca çıktığınız gün değil, haftalar sonra da kolayca taşıyabildiğiniz bir görünüm oluşturmak.</p><Link className="text-link" href="/iletisim">Bizi ziyaret edin</Link></div>
      </section>

      <section className="values-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">YAKLAŞIMIMIZ</p><h2>Üç temel söz.</h2></div></div><div className="values-grid"><article><span>01</span><h3>Size özel</h3><p>Tek bir trendi herkese uygulamak yerine, yüzünüz ve yaşamınızla uyumlu tasarım.</p></article><article><span>02</span><h3>Açık iletişim</h3><p>İşlemin adımlarını, olasılıkları ve bakım gereksinimini önceden net biçimde paylaşmak.</p></article><article><span>03</span><h3>Özenli uygulama</h3><p>Saçın mevcut durumunu gözeten teknik kararlar ve her aşamada kontrollü ilerleme.</p></article></div></div></section>
    </>
  );
}
