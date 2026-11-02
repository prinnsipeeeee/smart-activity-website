import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar({ t, toggleLang }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-dark/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-2">
          {/* Ilagay ang logo sa /public/logo.png */}
          <img src="/logo.png" alt="Smart Activity" className="h-10 w-auto rounded bg-white p-0.5" />
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {t.nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="text-sm transition hover:text-brand-orange">
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 rounded-full border border-brand-orange/60 px-3 py-1 text-sm text-brand-orange transition hover:bg-brand-orange hover:text-navy-dark"
          >
            <Globe size={14} /> {t.langLabel}
          </button>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-white/10 bg-navy-dark px-4 py-3 md:hidden">
          {t.nav.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-brand-orange"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
