import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-meta">
        <span>Independent front-end engineer</span>
        <span>Based in Hiroshima, Japan</span>
      </div>
      <div className="hero-composition">
        <h1 id="hero-title" className="hero-title">
          <span className="hero-title-line">
            Mitsui<span className="accent">.</span>
          </span>
          <br />
          <span className="hero-outline hero-title-line">Portfolio</span>
        </h1>
        <div className="hero-note">
          <span className="hero-note-label">MY APPROACH</span>
          <p>
            使う人にとって心地よく、
            <br />
            育てていける実装を。
          </p>
          <span className="hero-note-mark">UI development / Front-end</span>
        </div>
      </div>
      <div className="hero-bottom">
        <p className="hero-caption">
          Thoughtful interfaces.
          <br />
          Considered code.
        </p>
        <div className="hero-intro">
          <p>
            TypeScript / React /
            Next.jsを中心に、生成AIも活用しながら開発しています。
            <br />
            ユーザビリティと保守性を両立するUI実装を心がけています。
          </p>
          <a href="#works" className="text-link">
            View works <ArrowDownRight size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hero-foot">
        <span>Design-minded development</span>
        <span>Scroll to explore ↓</span>
      </div>
    </section>
  );
}
