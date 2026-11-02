import { Phone, Mail, MapPin } from "lucide-react";
import Section from "./Section";

export default function Contact({ t }) {
  const c = t.contact;
  const items = [
    { icon: Phone, text: c.phone, href: `tel:${c.phone.replace(/\s/g, "")}`, ltr: true },
    { icon: Mail, text: c.email, href: `mailto:${c.email}`, ltr: true },
    { icon: MapPin, text: c.address },
  ];

  return (
    <>
      <Section id="contact" title={c.title} className="bg-linear-to-b from-navy to-brand-blue">
        <p className="mb-8 text-center text-white/85">{c.subtitle}</p>
        <div className="mx-auto grid max-w-3xl gap-4">
          {items.map(({ icon: Icon, text, href, ltr }) => {
            const body = (
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange text-navy-dark">
                  <Icon size={18} />
                </span>
                <span dir={ltr ? "ltr" : undefined}>{text}</span>
              </div>
            );
            return href ? (
              <a key={text} href={href} className="transition hover:opacity-80">
                {body}
              </a>
            ) : (
              <div key={text}>{body}</div>
            );
          })}
        </div>
      </Section>

      <footer className="bg-navy-dark py-6 text-center text-sm text-white/60">{t.footer}</footer>
    </>
  );
}
