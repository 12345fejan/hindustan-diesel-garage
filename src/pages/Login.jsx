import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // login ke baad home par bhej dega
    } catch (err) {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Your Account</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}


// import React, { useState } from "react";
// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../firebase";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const handleGoogleLogin = async () => {
//     try {
//       setLoading(true);
//       await signInWithPopup(auth, provider);
//       navigate("/");
//     } catch (error) {
//       alert("Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-card">
//         <h2>Sign In</h2>
//         <p className="login-subtitle">Access your account</p>

//         <button
//           className="google-btn"
//           onClick={handleGoogleLogin}
//           disabled={loading}
//         >
//           {loading ? "Signing in..." : "Continue with Google"}
//         </button>

//         <div className="divider">
//           <span>OR</span>
//         </div>

//         <input type="email" placeholder="Email address" />
//         <input type="password" placeholder="Password" />

//         <button className="email-btn">Login</button>
//       </div>
//     </div>
//   );
// }
