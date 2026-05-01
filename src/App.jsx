import React from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import WhatsAppButton from "./components/common/WhatsAppButton";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <WhatsAppButton />
      <Footer />
      
    </>
  );
}




// import React from "react";
// import { useLocation } from "react-router-dom";
// import Navbar from "./components/common/Navbar";
// import Footer from "./components/common/Footer";
// import WhatsAppButton from "./components/common/WhatsAppButton";
// import AppRoutes from "./routes/AppRoutes";

// export default function App() {
//   const location = useLocation();

//   // Login page par layout hide hoga
//   const isLoginPage = location.pathname === "/login";

//   return (
//     <>
//       {!isLoginPage && <Navbar />}

//       <AppRoutes />

//       {!isLoginPage && <WhatsAppButton />}
//       {!isLoginPage && <Footer />}
//     </>
//   );
// }



