import React, { useState, useEffect } from "react";

const autoParts = [
  {
    title: "Engine Parts",
    desc: "Piston, liner, crankshaft, gasket set and complete engine parts.",
    category: "engine",
    img: "https://images.unsplash.com/photo-1429772011165-0c2e054367b8?q=80&w=870&auto=format&fit=crop",
  },
  {
    title: "Filters",
    desc: "Oil filter, diesel filter, air filter for all vehicles.",
    category: "filter",
    img: "https://i0.wp.com/narmadamotors.in/wp-content/uploads/2023/09/1__68984.webp",
  },
  {
    title: "Clutch & Brake Parts",
    desc: "Clutch plate, pressure plate, brake shoe and brake parts.",
    category: "brake",
    img: "https://media.istockphoto.com/id/2193808212/photo/a-closeup-picture-of-a-clutch-cover-and-clutch-ring-of-car.jpg?s=612x612&w=is&k=20&c=Uxm3JZZfe1d5clR4-5Z0Ch661LReDQqoMXO9uHLHgII=",
  },
  {
    title: "Bearings",
    desc: "High quality bearings for Tractor, JCB and Pickup vehicles.",
    category: "bearing",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR540Y48RDiHckDmArJj1hCKKUNskFa44S0uw&s",
  },
  {
    title: "Oils & Lubricants",
    desc: "Engine oil, hydraulic oil, gear oil and lubricants.",
    category: "oil",
    img: "https://media.istockphoto.com/id/1187582480/photo/auto-mechanic-showing-5w-30-engine-oil-in-the-auto-repair-shop.jpg?s=612x612&w=is&k=20&c=VWhokZi4FIzJIeo-Uy5NbVNCaXZGEVRZJFfQQxGmkb8=",
  },
  {
    title: "GEAR Parts",
    desc: "Self motor, alternator, wiring and electrical items.",
    category: "gear",
    img: "https://media.istockphoto.com/id/959964314/photo/close-up-internal-engine-gear-tractor-engine-walking-tractor.jpg?s=1024x1024&w=is&k=20&c=fJaudukZkP_MR980fMFttIQk6k3nalu_UPQNPjE3OXs=",
  },
  {
    title: "All category",
    desc: "View all available auto parts.",
    category: "all",
    img: "https://images.unsplash.com/photo-1635108198854-26645ffe6714?q=80&w=870&auto=format&fit=crop",
  },
];

export default function AutoParts() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  /* 🔍 Modal state */
  const [selectedPart, setSelectedPart] = useState(null);

  /* 🔍 Debounce typing */
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);

  /* 🔎 Filter logic */
  const filteredParts = autoParts.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      item.desc.toLowerCase().includes(debouncedSearch.toLowerCase());

    const matchCategory =
      activeCategory === "all" || item.category === activeCategory;

    return matchSearch && matchCategory;
  });

  return (
    <>
      {/* HERO */}
      <section className="autoparts-hero">
        <div className="autoparts-hero-content">
          <h1>Auto Parts</h1>
          <p>
            Genuine auto parts for Tractor, Pickup, Bolero & JCB — quality
            products you can trust.
          </p>
        </div>
      </section>

      {/* SEARCH */}
      <div className="autoparts-search">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search auto parts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* CATEGORY FILTER */}
      <div className="autoparts-filters">
        {["all", "engine", "filter", "brake", "bearing", "oil", "gear"].map(
          (cat) => (
            <button
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.toUpperCase()}
            </button>
          )
        )}
      </div>

      {/* GRID */}
      <section className="section autoparts-page">
        <div className="autoparts-page-grid">
          {filteredParts.length > 0 ? (
            filteredParts.map((item, index) => (
              <div
                key={index}
                className="autoparts-page-card"
                style={{ backgroundImage: `url(${item.img})` }}
                onClick={() => setSelectedPart(item)}   // 👈 open modal
              >
                <div className="autoparts-page-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-result">No auto parts found.</p>
          )}
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="autoparts-trust">
        <div className="autoparts-trust-grid">
          <div>✔ Genuine & Quality Parts</div>
          <div>✔ Suitable for Tractor, JCB & Pickup</div>
          <div>✔ Fair Pricing</div>
          <div>✔ Trusted by Local Customers</div>
        </div>
      </section>

      {/* 🪟 MODAL */}
      {selectedPart && (
        <div className="modal-overlay" onClick={() => setSelectedPart(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPart.img} alt={selectedPart.title} />
            <h2>{selectedPart.title}</h2>
            <p>{selectedPart.desc}</p>
            <button onClick={() => setSelectedPart(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
