import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import AutoParts from "../pages/AutoParts";
import Gallery from "../pages/Gallery";
// import Login from "../pages/Login";
// import Register from "../pages/Register";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/parts" element={<AutoParts />} />
      <Route path="/gallery" element={<Gallery />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}
    </Routes>
  );
}




// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import Home from "../pages/Home";
// import About from "../pages/About";
// import AutoParts from "../pages/AutoParts";
// import Gallery from "../pages/Gallery";
//  import Login from "../pages/Login";
// import Register from "../pages/Register";

// import ProtectedRoute from "./ProtectedRoute";

// export default function AppRoutes() {
//   return (
//     <Routes>
//       {/* Public Routes */}
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />

//       {/* Protected Routes */}
//       <Route
//         path="/parts"
//         element={
//           <ProtectedRoute>
//             <AutoParts />
//           </ProtectedRoute>
//         }
//       />

//       <Route
//         path="/gallery"
//         element={
//           <ProtectedRoute>
//             <Gallery />
//           </ProtectedRoute>
//         }
//       />
//     </Routes>
//   );
// }