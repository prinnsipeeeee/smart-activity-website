import { Users, Headset, FolderKanban, Megaphone, ChartColumnIncreasing } from "lucide-react";
import { motion } from "framer-motion";
import Section from "./Section";

const icons = { Users, Headset, FolderKanban, Megaphone, ChartColumnIncreasing };

export default function Services({ t }) {
  return (
    <Section id="services" title={t.services.title} className="bg-navy">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.services.items.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-navy-dark/60 p-6 transition hover:border-brand-orange/60"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-navy-dark">
                  <Icon size={24} />
                </span>
                <span className="text-3xl font-bold text-brand-orange/40">{i + 1}</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-white/75">{s.desc}</p>
              {s.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-brand-orange/50 px-3 py-1 text-xs text-brand-orange"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
