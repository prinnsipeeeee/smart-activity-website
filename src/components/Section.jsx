export default function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4">
        {title && (
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl text-brand-orange">{title}</h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded bg-brand-orange/60" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
