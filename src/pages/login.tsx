import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import toast from "react-hot-toast";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex justify-center py-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div role="alert" className="alert alert-info alert-soft">
              <span>
                Login is restricted for MTA members only. contact admin for
                credentials
              </span>
            </div>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email Id</legend>
              <input type="email" className="input" placeholder="Type here" />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input"
                placeholder="Type here"
              />
            </fieldset>

            <div className="mt-6">
              <button
                className="btn btn-primary btn-block"
                onClick={() => toast.success("Login successful")}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
