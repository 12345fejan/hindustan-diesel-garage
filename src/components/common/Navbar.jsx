import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Hindustan Diesel Garage</h2>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/parts">Auto Parts</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
      </div>
    </nav>
  );
}



// import React from "react";
// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <h2>Hindustan Diesel Garage</h2>

//       <div className="nav-links">
//         <NavLink to="/" end>
//           Home
//         </NavLink>

//         <NavLink to="/about">
//           About
//         </NavLink>

//         <NavLink to="/parts">
//           Auto Parts
//         </NavLink>

//         <NavLink to="/gallery">
//           Gallery
//         </NavLink>
//       </div>
//     </nav>
//   );
// }
















