import { ArrowUp, ArrowUpRight } from "lucide-react";
import { AUTHOR, CONTACT_FORM_URL } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="eyebrow">Get in touch</p>
            <a
              href={CONTACT_FORM_URL}
              aria-label="Googleフォームでお問い合わせ（新しいタブで開く）"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-cta"
            >
              Let’s talk
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <p>
            お問い合わせは、
            <br />
            Googleフォームよりご連絡ください。
          </p>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Mitsui’s portfolio</span>
          <a href={AUTHOR.github} target="_blank" rel="noreferrer noopener">
            GitHub ↗
          </a>
          <a href="#main">
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
