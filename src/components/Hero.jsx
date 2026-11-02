import { motion } from "framer-motion";

export default function Hero({ t }) {
  const h = t.hero;
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center overflow-hidden bg-gradient-to-br from-navy via-navy-dark to-brand-blue"
    >
      {/* decorative glow */}
      <div className="pointer-events-none absolute -top-20 end-0 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 start-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl"
        >
          <span className="text-brand-orange">{h.title}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg text-white/80"
        >
          {h.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#contact"
            className="rounded-full bg-brand-orange px-6 py-3 font-semibold text-navy-dark transition hover:brightness-110"
          >
            {h.cta}
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/40 px-6 py-3 transition hover:border-brand-orange hover:text-brand-orange"
          >
            {h.cta2}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
