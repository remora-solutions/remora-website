"use client";

import { whatsappLink } from "../lib/site";
import { Icons } from "./Icons";
import BackboneArt from "./BackboneArt";
import { useLanguage } from "../lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-copy">
          <h1>{t.hero.title}</h1>
          <p className="lead">{t.hero.lead}</p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.WhatsApp /> {t.hero.cta1}
            </a>
            <a className="btn btn-ghost" href="#backbone">
              {t.hero.cta2}
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <BackboneArt />
        </div>
      </div>
    </section>
  );
}
