import { useState, useEffect } from "react";
import { content } from "./content";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Values from "./components/Values";
import Services from "./components/Services";
import Sectors from "./components/Sectors";
import WhyUs from "./components/WhyUs";
import Partners from "./components/Partners";
import Contact from "./components/Contact";

export default function App() {
  const [lang, setLang] = useState("en");
  const t = content[lang];

  // RTL para sa Arabic
  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
  }, [lang, t.dir]);

  return (
    <>
      <Navbar t={t} toggleLang={() => setLang(lang === "en" ? "ar" : "en")} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Values t={t} />
        <Services t={t} />
        <Sectors t={t} />
        <WhyUs t={t} />
        <Partners t={t} />
        <Contact t={t} />
      </main>
    </>
  );
}
