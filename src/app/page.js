import Image from "next/image";
import ContactForm from "./contact-form";

const steps = [
  ["Sourced", "Selected from trusted origins around the world, chosen for genuine quality over convenience.", "/images/source.jpg", "Hands choosing fresh fruit at a market stall"],
  ["Verified", "Checked for authenticity and freshness at every step, before it ever reaches you.", "/images/newimg.jpg", "A hand reaching for a carefully crafted cocktail"],
  ["Experienced", "Brought to life through spaces and moments people can slow down and savour.", "/images/cafemockup.png", "Mireva cafe drinks served by a barista"],
];

const standards = [
  ["Authenticity first", "We don't chase trends, only what genuinely earns the name premium."],
  ["Origin, respected", "Every item carries the story of where it came from, not just where it's sold."],
  ["Quality, checked", "Nothing reaches you without being checked for freshness along the way."],
  ["Built to last", "Mireva is built as a lasting standard, not a single trend-led launch."],
];

function Brand() {
  return <a className="brand" href="#top" aria-label="Mireva, back to top"><Image src="/mireva-logo.png" width={90} height={123} alt="Mireva" priority /></a>;
}

function ArrowLink({ href, children }) {
  return <a className="arrow-link" href={href}>{children}<span aria-hidden="true">↗</span></a>;
}

function HeroIcon({ kind }) {
  if (kind === "cup") return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19h27v12a12 12 0 0 1-12 12h-3A12 12 0 0 1 9 31V19Z"/><path d="M36 22h4a5 5 0 0 1 0 10h-4M18 4c-4 4 4 6 0 10M26 4c-4 4 4 6 0 10"/><path d="M7 43h30"/></svg>;
  if (kind === "pin") return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M24 44S9 29 9 19a15 15 0 1 1 30 0c0 10-15 25-15 25Z"/><circle cx="24" cy="19" r="5"/></svg>;
  return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="19" y="4" width="10" height="10" rx="1"/><rect x="4" y="34" width="10" height="10" rx="1"/><rect x="19" y="34" width="10" height="10" rx="1"/><rect x="34" y="34" width="10" height="10" rx="1"/><path d="M24 14v10M9 34v-8h30v8M24 24v10"/></svg>;
}

export default function Home() {
  return <>
    <header className="site-header" id="top"><div className="page-shell header-inner"><Brand /><nav aria-label="Main navigation"><a href="#story">Our Story</a><a href="#approach">What We Do</a><a href="#cafe">The Mireva Cafe</a><a href="#franchise">Franchise</a></nav><a className="header-contact" href="#contact">Get in touch</a></div></header>
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-photo"><Image src="/mireva-arched-wall.png" alt="Warm arched wall at The Mireva Cafe" fill priority sizes="(max-width: 700px) 100vw, 54vw" /><Image className="hero-wall-logo" src="/mireva-logo.png" alt="" width={380} height={518} priority /></div>
        <div className="hero-content"><div className="hero-content-inner">
          <h1 id="hero-title">Curating Premium,<br /><em>Imported Experiences</em><br />for India</h1>
          <p className="hero-intro">Mireva sources and curates the world&apos;s finest premium, imported goods, brought to life through dedicated ventures, starting with The Mireva Cafe.</p>
          <div className="hero-actions"><a className="button button-primary" href="#story">Our Story <span aria-hidden="true">→</span></a><a className="button button-outline" href="#franchise">Franchise <span aria-hidden="true">→</span></a></div>
          <div className="hero-features"><div><HeroIcon kind="pin"/><span>From trusted<br />origins</span></div><div><HeroIcon kind="network"/><span>Selected<br />with care</span></div><div><HeroIcon kind="cup"/><span>Made to<br />experience</span></div></div>
        </div></div>
      </section>
      <section className="story section-space" id="story" aria-labelledby="story-title"><div className="page-shell story-grid"><div className="story-photo"><Image src="/images/img.png" alt="Mireva brand book beside a warmly lit cafe setting" fill sizes="(max-width: 700px) 100vw, 48vw" /></div><div className="story-copy"><h2 id="story-title">Why <em>Mireva</em></h2><div className="small-rule" /><p>Mireva was born from a simple belief: that India deserves the same premium, imported food experiences enjoyed around the world, without compromise. What started as a deeper step into the food industry became a mission: to source, curate, and bring genuinely exceptional imported goods to Indian tables. Every product we choose is selected with care, authenticity, and quality in mind, never for the sake of a label.</p></div></div></section>
      <section className="founders section-space" aria-labelledby="founders-title"><div className="page-shell"><div className="founders-grid"><div><h2 id="founders-title">The <em>Founders</em></h2></div><div><span className="quote-mark" aria-hidden="true">“</span><blockquote>Having built and run several businesses together, we saw a clear gap in India&apos;s food space, genuinely premium, imported goods that live up to what they promise. Mireva, and The Mireva Cafe as its flagship, is our answer to that gap.</blockquote></div></div><div className="founder-cards"><figure className="founder-card"><div className="founder-photo"><Image src="/images/founder.png" alt="Noufal Keedath" fill sizes="(max-width: 700px) 90vw, 40vw" /></div><figcaption><strong>Noufal Keedath</strong><span>Co-Founder, Mireva</span></figcaption></figure><figure className="founder-card founder-card-niyas"><div className="founder-photo"><Image src="/images/niyasfounder.jpg" alt="Niyas Ali" fill sizes="(max-width: 700px) 90vw, 40vw" /></div><figcaption><strong>Niyas Ali</strong><span>Co-Founder, Mireva</span></figcaption></figure></div></div></section>
      <section className="approach section-space" id="approach" aria-labelledby="approach-title"><div className="page-shell"><div className="section-heading"><h2 id="approach-title">Curated, <em>not mass-produced.</em></h2><p>We identify premium imported categories that are hard to find in India, and introduce them through experiences people can taste and feel.</p></div><div className="step-grid">{steps.map(([title, text, image, alt]) => <article className="step" key={title}><div className="step-image"><Image src={image} alt={alt} fill sizes="(max-width: 700px) 80vw, 30vw" /></div><div className="step-copy"><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
      <section className="cafe" id="cafe" aria-labelledby="cafe-title"><div className="cafe-image"><Image src="/mireva-evening-cafe.png" alt="Candlelit tables and the coffee bar at The Mireva Cafe in the evening" fill sizes="(max-width: 800px) 100vw, 55vw" /></div><div className="cafe-copy"><div className="cafe-copy-inner"><span className="cafe-tag">Our Flagship</span><h2 id="cafe-title">The <em>Mireva</em> Cafe</h2><p>Our flagship space brings Mireva&apos;s imported offerings to life: a place to taste, discover, and spend time with what we source from around the world.</p><ArrowLink href="#contact">Visit The Mireva Cafe</ArrowLink></div></div></section>
      <section className="franchise section-space" id="franchise" aria-labelledby="franchise-title"><div className="page-shell franchise-grid"><div><h2 id="franchise-title">Bring Mireva <em>to your city.</em></h2></div><div className="franchise-detail"><p className="franchise-intro">The Mireva Cafe is built to grow beyond its first home. If you share our standard for quality, authenticity, and care, we welcome conversations about bringing Mireva to new cities across India.</p><dl><div><dt>Model</dt><dd>Franchise-owned outlets</dd></div><div><dt>Led by</dt><dd>Founders of multiple ventures</dd></div><div><dt>Who we&apos;re looking for</dt><dd>Committed, quality-first partners</dd></div></dl><a className="button franchise-cta" href="#contact">Enquire About Franchising <span aria-hidden="true">→</span></a></div></div></section>
      <section className="standards section-space" id="standards" aria-labelledby="standards-title"><div className="page-shell standards-layout"><div className="standards-left"><h2 id="standards-title"><small>At</small> What premium <em>means to us.</em></h2><p>We don&apos;t chase trends, only what genuinely earns the name premium. Every standard below shapes what we source, serve and stand for.</p><div className="standards-photo"><Image src="/mireva-hero.png" alt="Premium imported olives, preserves and honey with espresso and a croissant" fill sizes="(max-width: 900px) 100vw, 40vw" /></div></div><div className="standards-grid">{standards.map(([title, text], i) => <article key={title} className={i === 3 ? "is-dark" : ""}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="contact section-space" id="contact" aria-labelledby="contact-title"><div className="page-shell contact-grid"><div><h2 id="contact-title">We&apos;d love to <em>hear from you.</em></h2><p>Whether it&apos;s a question about Mireva, a visit to the cafe, or a conversation about growing together, tell us what&apos;s on your mind.</p></div><ContactForm /></div></section>
    </main>
    <footer className="site-footer"><div className="page-shell"><div className="footer-main"><Brand /><p>Mireva: Premium, imported, for India.</p><div className="footer-links"><a href="#cafe">The Mireva Cafe</a><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram ↗</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Mireva. All rights reserved.</span><a href="#top">Back to top ↑</a></div></div></footer>
  </>;
}
