export default function PageHero({ eyebrow, title, description }: {
  eyebrow: string; title: string; description: string;
}) {
  return (
    <section className="page-hero">
      <div className="hero-orb" />
      <div className="container page-hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-description">{description}</p>
      </div>
    </section>
  );
}
