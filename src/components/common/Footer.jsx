import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrap">

        {/* LEFT */}
        <div className="footer-left">
          <h3>Hindustan Diesel Garage & Auto Parts</h3>
          <p>
            Trusted diesel garage for Tractor, Pickup, Bolero & JCB.  
            Genuine spare parts and experienced mechanics.
          </p>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <h4>Services</h4>
          <ul>
            <li>Tractor Repairing</li>
            <li>Pickup & Bolero Service</li>
            <li>JCB Repairing</li>
            <li>Diesel Engine Work</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h4>Contact</h4>
          <p>📞 <a href="tel:7583898598">7583898598</a></p>
          <p>💬 <a href="https://wa.me/7583898598">WhatsApp Chat</a></p>
          <p>🕘 Mon–Sun | 9:00 AM – 8:00 PM</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2000 Hindustan Diesel Garage & Auto Parts
      </div>
    </footer>
  );
}
