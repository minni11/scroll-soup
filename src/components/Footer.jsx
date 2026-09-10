import logo from "../assets/scroll-soup-logo.png";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Scroll Soup" className="footer__logo" />
          <p className="footer__tagline">UGC &amp; visual content for hospitality.</p>
        </div>

        <div className="footer__links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="mailto:hello@scrollsoup.com">Email</a>
          <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>

        <p className="footer__copy">© {year} Scroll Soup. All rights reserved.</p>
      </div>
    </footer>
  );
}
