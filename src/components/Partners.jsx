import Section from "./Section";
import { partners } from "../content";

export default function Partners({ t }) {
  return (
    <Section id="partners" title={t.partners.title} className="bg-navy-dark">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {partners.map((p) => (
          <div
            key={p}
            className="flex h-24 items-center justify-center rounded-2xl bg-white p-3 text-center text-sm font-semibold text-brand-blue shadow"
          >
            {/* Palitan ng <img src="/partners/xxx.png" /> kapag nasa iyo na ang mga logo */}
            {p}
          </div>
        ))}
      </div>
    </Section>
  );
}
