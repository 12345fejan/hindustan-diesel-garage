import React, { useEffect, useState } from "react";

const heroImages = [
  {
    img: "https://plus.unsplash.com/premium_photo-1681426673022-db3d911ea11a?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Diesel Engine & Auto Parts",
    subtitle: "Tractor • Pickup • Bolero • JCB",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1658527057580-f473648a16d9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF1dG8lMjBwYXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Trusted Diesel Repair Experts",
    subtitle: "Engine • Clutch • Gear • Hydraulic",
  },
  {
    img: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Genuine Auto Parts Available",
    subtitle: "Quality Parts • Fair Pricing",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroImages.length);
    }, 2000); // ⏱ professional speed (not too fast)

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="hero-professional"
      style={{
        backgroundImage: `url(${heroImages[active].img})`,
      }}
    >
      <div className="hero-dark-overlay" />

      <div className="hero-content">
        <span className="hero-tag">Since 2010</span>

        <h1>{heroImages[active].title}</h1>
        <p>{heroImages[active].subtitle}</p>

        <div className="hero-actions">
          <a href="/parts" className="btn-primary">
            Explore Auto Parts
          </a>
          <a href="tel:7583898598" className="btn-outline">
            Call Now
          </a>
        </div>
      </div>
    </section>

  );
}





