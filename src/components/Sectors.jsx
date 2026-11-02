import { Building2 } from "lucide-react";
import Section from "./Section";

export default function Sectors({ t }) {
  return (
    <Section id="sectors" title={t.sectors.title} className="bg-navy-dark">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {t.sectors.items.map((s) => (
          <div
            key={s}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
          >
            <Building2 size={18} className="shrink-0 text-brand-orange" />
            <span className="text-sm">{s}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
