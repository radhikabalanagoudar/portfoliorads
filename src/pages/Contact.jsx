import "./pages.css";

function Contact() {
  const links = [
    { label: "email", value: "radhikabalanagoudar@gmail.com", href: "mailto:radhikabalanagoudar@gmail.com" },
    { label: "github", value: "github.com/radhikabalanagoudar", href: "https://github.com/radhika-balanagoudar" },
    { label: "linkedin", value: "linkedin.com/in/radhikabalanagoudar", href: "https://linkedin.com/in/radhikabalanagoudar" },
    { label: "phone", value: "+91 7892510675", href: "tel:+917892510675" }
  ];

  return (
    <div className="page container">
      <p className="eyebrow">04 — contact</p>
      <h2>Let's talk</h2>
      <p className="hero-lede">
        Feel free to reach out — whether it's about an internship, a project,
        or just to say hi.
      </p>

      <div className="contact-grid">
        {links.map((link) => (
          <a
            className="card contact-card"
            href={link.href}
            key={link.label}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
          >
            <span className="fact-label">{link.label}</span>
            <span className="fact-value">{link.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
