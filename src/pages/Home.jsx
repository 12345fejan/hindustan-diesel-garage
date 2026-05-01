import React from "react";
import Hero from "../components/home/Hero";
import AutoPartsSection from "../components/home/AutoPartsSection";

export default function Home() {
  return (
    <>
      <Hero />

      {/* SERVICES SECTION */}
      <section className="section">
        <h2>Our Services</h2>
        <div className="services">
          <div className="service-card">
            <h3>Tractor Repairing</h3>
            <p>All tractor diesel engine and mechanical works.</p>
          </div>

          <div className="service-card">
            <h3>Pickup & Bolero</h3>
            <p>Complete servicing and spare parts available.</p>
          </div>

          <div className="service-card">
            <h3>JCB Repairing</h3>
            <p>Hydraulic, engine & genuine JCB spare parts.</p>
          </div>

          <div className="service-card">
            <h3>Diesel Engine Work</h3>
            <p>Overhauling, clutch, brake and engine repair.</p>
          </div>
        </div>
      </section>

      {/* AUTO PARTS SECTION – yahin add hota hai */}
      <AutoPartsSection />
    </>
  );
}
