"use client";

import { useEffect, useRef, useState } from "react";
import { whatsappLink } from "../lib/site";
import { Icons } from "./Icons";
import { useLanguage } from "../lib/LanguageContext";

export default function Nav() {
  const { lang, setLang, t, languages } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const barRef = useRef(null);

  const links = [
    { href: "#backbone", label: t.nav.backbone },
    { href: "#how", label: t.nav.how },
    { href: "#who", label: t.nav.who },
    { href: "#why", label: t.nav.why },
    { href: "#work", label: t.nav.work },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (barRef.current) barRef.current.style.setProperty("--p", String(p));
      setScrolled(window.scrollY > 8);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Remora, back to top">
          <span className="brand-mark" aria-hidden="true">
            <i className="c-red" />
            <i className="c-yellow" />
            <i className="c-blue" />
            <i className="c-green" />
          </span>
          <span>Remora</span>
        </a>

        <nav className="nav-links" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <select
            className="lang-select"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            aria-label="Language"
          >
            {languages.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label}
              </option>
            ))}
          </select>
          <a
            className="btn btn-primary btn-sm"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.WhatsApp /> {t.nav.whatsapp}
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Icons.Close /> : <Icons.Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="mobile-menu">
          <div className="container">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <select
              className="lang-select lang-select-mobile"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              aria-label="Language"
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div className="progress" ref={barRef} aria-hidden="true" />
    </header>
  );
}
