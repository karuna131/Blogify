import{Link} from "react-router-dom";

function Signup(){
    return(
        <>
         <div className="auth-container">
        <div className="auth-card">
          <p className="auth-label">JOIN OUR COMMUNITY</p>

          <h1>Create Account</h1>

          <p className="auth-subtitle">Create your account and start sharing your stories.</p>

          <form className="auth-form">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />

            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>
            <input type="password" placeholder="Create a password" required />

            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" required />

            <button type="submit" className="auth-submit"> Create Account</button>
          </form>

          <p className="auth-switch">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
        </>
    )
}
export default Signup;