import {Link} from "react-router-dom";
import { useState } from "react";
import {useMutation} from '@tanstack/react-query'

async function addData(data){
  const response = await fetch('http://localhost:3000/api/user/register', {
    method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
  })
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || "Signup failed");
  }

  return result;
}

function Signup(){
    const [data, setData] = useState({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

    const mutation = useMutation({
      mutationFn: addData,
      onSuccess: (result) => {
        console.log("Signup successful:", result);

        setData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: ""
        });
      },

      onError: (error) => {
        console.log("Signup error:", error.message);
      }
    });

    function handleSubmit(e){
        e.preventDefault()
        mutation.mutate(data);
    }
  
    return(
        <>
         <div className="auth-container">
        <div className="auth-card">
          <p className="auth-label">JOIN OUR COMMUNITY</p>

          <h1>Create Account</h1>

          <p className="auth-subtitle">Create your account and start sharing your stories.</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input type="text" name="fullName" placeholder="Enter your full name" value={data.fullName}
              onChange={(e) =>
                setData({
                  ...data,
                  fullName: e.target.value
                })
              } 
              required />

            <label>Email Address</label>
            <input type="email" name="email" placeholder="Enter your email" value={data.email}
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value
                })
              } required />

            <label>Password</label>
            <input type="password" name="password" placeholder="Create a password" value={data.password}
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value
                })
              } required />

            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" placeholder="Confirm your password"  value={data.confirmPassword}
              onChange={(e) =>
                setData({
                  ...data,
                  confirmPassword: e.target.value
                })
              } required />

            <button type="submit" className="auth-submit" disabled={mutation.isPending}>{mutation.isPending ? "Creating..." : "Create Account"}</button>
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