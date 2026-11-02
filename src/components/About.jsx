import { Eye, Rocket } from "lucide-react";
import Section from "./Section";

export default function About({ t }) {
  const a = t.about;
  return (
    <Section id="about" title={a.title} className="bg-navy">
      <div className="space-y-4 text-center text-white/85 md:text-start">
        {a.paragraphs.map((p, i) => (
          <p key={i} className="leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Card icon={<Eye />} title={a.visionTitle} text={a.vision} />
        <Card icon={<Rocket />} title={a.missionTitle} text={a.mission} />
      </div>
    </Section>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-3 flex items-center gap-3 text-brand-orange">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="leading-relaxed text-white/80">{text}</p>
    </div>
  );
}
