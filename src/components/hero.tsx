import { EmailForm } from "@/components/email-form";

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle className="instagram-dot" cx="17.4" cy="6.7" r="1" />
    </svg>
  );
}

export function Hero() {
  return (
    <main className="coming-soon">
      <div className="ambient-shape" aria-hidden="true" />

      <a
        className="instagram-link"
        href="https://instagram.com/sjonworld"
        target="_blank"
        rel="noreferrer"
        aria-label="Follow Sjón World on Instagram"
      >
        <InstagramIcon />
      </a>

      <section className="launch-content" aria-labelledby="title">
        <h1 id="title">
          Something is coming.
          <br />
          Be the first to know.
        </h1>
        <EmailForm />
      </section>

      <div className="brand-stage" aria-hidden="true">
        <div className="brand-marquee">
          <div className="brand-track">
            <span>Sjón World<sup>TM</sup></span>
            <span>Sjón World<sup>TM</sup></span>
            <span>Sjón World<sup>TM</sup></span>
            <span>Sjón World<sup>TM</sup></span>
          </div>
        </div>
      </div>
    </main>
  );
}
