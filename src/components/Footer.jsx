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
          <a href="tel:+917417789506">+91 74177 89506</a>
        </div>

        <p className="footer__copy">© {year} Scroll Soup. All rights reserved.</p>
      </div>
    </footer>
  );
}
