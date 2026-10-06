import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <span className="footer-mark">FV</span>
          <h2>Ferdi Veysel Salon</h2>
          <p>Saç, güzellik ve özel gün hazırlığında kişisel dokunuş.</p>
        </div>
        <div>
          <h3>Keşfet</h3>
          <Link href="/hizmetler">Hizmetler</Link>
          <Link href="/gelin">Gelin & Davet</Link>
          <Link href="/galeri">Galeri</Link>
        </div>
        <div>
          <h3>Salon</h3>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/iletisim">İletişim</Link>
          <a href="tel:+905437739198">0543 773 91 98</a>
        </div>
        <div>
          <h3>Konum</h3>
          <p>Gap Mahallesi<br />Batman Merkez / Batman</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ferdi%20Veysel%20Bayan%20Kuaf%C3%B6r%C3%BC%20Batman"
            target="_blank"
            rel="noreferrer"
          >
            Yol tarifi
          </a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Ferdi Veysel Salon</span>
        <span>Görseller temsilidir.</span>
      </div>
    </footer>
  );
}
