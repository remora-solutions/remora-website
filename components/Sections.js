"use client";

import { backboneNodes, audiences, outcomes, whatsappLink, emailLink, site } from "../lib/site";
import { Icons } from "./Icons";
import { useLanguage } from "../lib/LanguageContext";

const nodeIcons = [Icons.Erp, Icons.Automation, Icons.VoiceAi, Icons.Rag, Icons.Agentic];

export function Backbone() {
  const { t } = useLanguage();
  return (
    <section id="backbone" className="section">
      <div className="container">
        <div className="section-head reveal">
          <h2>{t.backbone.heading}</h2>
          <p className="lead">{t.backbone.lead}</p>
        </div>

        <div className="bb-list">
          {backboneNodes.map((n, i) => {
            const Icon = nodeIcons[i];
            const item = t.backbone.nodes[i];
            return (
              <div className={`bb-item c-${n.color} reveal`} key={n.key}>
                <div className="bb-item-icon">
                  <Icon />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function How() {
  const { t } = useLanguage();
  return (
    <section id="how" className="section">
      <div className="container">
        <div className="section-head reveal">
          <h2>{t.how.heading}</h2>
          <p className="lead">{t.how.lead}</p>
        </div>

        <div className="how-rows">
          {t.how.steps.map((h, i) => (
            <div className="how-row reveal" key={h.title}>
              <span className="how-step-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Who() {
  const { t } = useLanguage();
  return (
    <section id="who" className="section">
      <div className="container">
        <div className="section-head reveal">
          <h2>{t.who.heading}</h2>
        </div>

        <div className="who">
          {audiences.map((a, i) => {
            const item = t.who.items[i];
            return (
              <div key={a.color} className={`who-item c-${a.color} reveal`}>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Why() {
  const { t } = useLanguage();
  return (
    <section id="why" className="section">
      <div className="container why">
        <div className="why-lead reveal">
          <h2>{t.why.heading}</h2>
          <p className="lead">{t.why.lead}</p>
        </div>

        <ul className="why-list">
          {t.why.points.map((w) => (
            <li key={w.title} className="reveal">
              <span className="why-check">
                <Icons.Check />
              </span>
              <div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Outcomes() {
  const { t } = useLanguage();
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-head reveal">
          <h2>{t.outcomes.heading}</h2>
          <p className="lead">{t.outcomes.lead}</p>
        </div>

        <div className="outcomes">
          {outcomes.map((o, i) => {
            const item = t.outcomes.items[i];
            return (
              <figure key={o.color} className={`outcome c-${o.color} reveal`}>
                <figcaption>{item.tag}</figcaption>
                <blockquote>{item.text}</blockquote>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact reveal">
          <div className="contact-copy">
            <h2>{t.contact.heading}</h2>
            <p className="lead">{t.contact.lead}</p>
          </div>

          <div className="contact-actions">
            <a
              className="btn btn-primary btn-lg"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.WhatsApp /> {t.contact.wa}
            </a>
            <a className="btn btn-ghost btn-lg" href={emailLink}>
              <Icons.Mail /> {t.contact.email}
            </a>
            <p className="contact-mail">{site.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#top" className="brand" aria-label="Remora">
          <span className="brand-mark" aria-hidden="true">
            <i className="c-red" />
            <i className="c-yellow" />
            <i className="c-blue" />
            <i className="c-green" />
          </span>
          <span>Remora</span>
        </a>
        <p>© {new Date().getFullYear()} Remora. {t.footer.rights}</p>
      </div>
    </footer>
  );
}
