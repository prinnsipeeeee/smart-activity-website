import { ShieldCheck, Lightbulb, Target, Award, Handshake } from "lucide-react";
import Section from "./Section";

const icons = { ShieldCheck, Lightbulb, Target, Award, Handshake };

export default function Values({ t }) {
  return (
    <Section id="values" title={t.values.title} className="bg-navy-dark">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
        {t.values.items.map((v) => {
          const Icon = icons[v.icon];
          return (
            <div
              key={v.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
            >
              <Icon size={36} className="text-brand-orange" />
              <span className="text-sm font-medium">{v.label}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
