import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

export default function LoginModal({ close }) {

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      close();
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Login</h2>

        <button onClick={handleGoogleLogin} className="google-btn">
          Continue with Google
        </button>

        <span className="close-btn" onClick={close}>✖</span>
      </div>
    </div>
  );
}







// import React, { useState } from "react";

// export default function LoginModal({ close, setUser }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (password.length < 6) {
//       alert("Password must be at least 6 characters");
//       return;
//     }

//     const userData = {
//       name: email.split("@")[0],
//       email: email,
//       provider: "email",
//     };

//     localStorage.setItem("user", JSON.stringify(userData));
//     setUser(userData);
//     close();
//   };

//   const handleGoogleLogin = () => {
//     const userData = {
//       name: "Google User",
//       email: "googleuser@gmail.com",
//       provider: "google",
//     };

//     localStorage.setItem("user", JSON.stringify(userData));
//     setUser(userData);
//     close();
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-box">
//         <h2>Login</h2>

//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button type="submit" className="primary-btn">
//             Login
//           </button>
//         </form>

//         <div className="divider">OR</div>

//         <button onClick={handleGoogleLogin} className="google-btn">
//           Login with Google
//         </button>

//         <span className="close-btn" onClick={close}>✖</span>
//       </div>
//     </div>
//   );
// }
