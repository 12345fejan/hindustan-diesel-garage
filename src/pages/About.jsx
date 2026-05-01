import React from "react";

export default function About() {
  return (
    <>
      {/* TOP INTRO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Hindustan Diesel Garage & Auto Parts</h1>
          <p>
            Trusted diesel garage & auto parts shop serving farmers,
            transport owners and contractors with quality service and
            genuine spare parts.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section about-section">
        <div className="about-grid">

          {/* LEFT */}
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Hindustan Diesel Garage & Auto Parts is a reliable automobile
              service center dealing in Tractor, Pickup, Bolero and JCB
              repairing. With years of hands-on experience, we focus on
              quality workmanship, honest pricing and long-term customer
              satisfaction.
            </p>

            <p>
              We understand the importance of vehicles in daily work,
              especially for farming and construction. Our goal is to
              provide fast, dependable and affordable diesel solutions.
            </p>
          </div>

          {/* RIGHT */}
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Experienced Mechanics</h3>
              <p>Skilled team with strong knowledge of diesel engines.</p>
            </div>

            <div className="highlight-card">
              <h3>Genuine Spare Parts</h3>
              <p>Quality parts for Tractor, JCB, Pickup & Bolero.</p>
            </div>

            <div className="highlight-card">
              <h3>Fair Pricing</h3>
              <p>Transparent rates with no hidden charges.</p>
            </div>

            <div className="highlight-card">
              <h3>Trusted by Locals</h3>
              <p>Serving farmers & contractors with trust.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
