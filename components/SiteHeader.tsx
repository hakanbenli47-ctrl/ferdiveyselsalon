import Link from "next/link";

const links = [
  ["Ana Sayfa", "/"],
  ["Hizmetler", "/hizmetler"],
  ["Gelin & Davet", "/gelin"],
  ["Galeri", "/galeri"],
  ["Hakkımızda", "/hakkimizda"],
  ["İletişim", "/iletisim"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Ferdi Veysel Salon ana sayfa">
          <span className="brand-mark">FV</span>
          <span className="brand-type">
            <strong>FERDİ VEYSEL</strong>
            <small>HAIR & BEAUTY</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Ana menü">
          {links.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </nav>

        <a
          className="header-cta"
          href="https://wa.me/905437739198?text=Merhaba%2C%20randevu%20almak%20istiyorum."
          target="_blank"
          rel="noreferrer"
        >
          Randevu
        </a>

        <details className="mobile-menu">
          <summary aria-label="Menüyü aç">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobil menü">
            {links.map(([label, href]) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
            <a href="tel:+905437739198">Hemen ara</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
