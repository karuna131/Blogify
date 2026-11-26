
import { Link } from "react-router-dom";

function Login() {
  return (
    <>

      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-label">WELCOME BACK</p>

          <h1>Login to Blogify</h1>

          <p className="auth-subtitle"> Continue your journey of reading and sharing stories. </p>

          <form className="auth-form">

            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />

            <button type="submit" className="auth-submit"> Login </button>
          </form>

          <p className="auth-switch">
            Don't have an account?{" "}
            <Link to="/signup">Create Account</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;