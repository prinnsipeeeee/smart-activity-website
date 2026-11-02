import { CheckCircle2 } from "lucide-react";
import Section from "./Section";

export default function WhyUs({ t }) {
  const w = t.why;
  return (
    <Section id="why" title={w.title} className="bg-navy">
      <p className="mx-auto mb-10 max-w-3xl text-center text-white/85">{w.intro}</p>

      <div className="grid gap-4 md:grid-cols-2">
        {w.items.map((it) => (
          <div key={it.t} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <CheckCircle2 className="mt-1 shrink-0 text-brand-orange" size={20} />
            <div>
              <h3 className="font-semibold">{it.t}</h3>
              <p className="text-sm text-white/75">{it.d}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-xl text-brand-orange">{w.closing}</p>
    </Section>
  );
}
