import { app } from "@/config/firebase";
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onLogin = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(() => {
        toast.success("login success");
      })
      .catch(() => {
        toast.error("Invalid credentials");
      });
  };

  return (
    <div className="pb-10 flex flex-row justify-center">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login to your Account</h2>

          <label className="input">
            Email
            <input
              type="email"
              className="grow"
              placeholder="you@example.com"
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
          </label>
          <label className="input">
            Password
            <input
              type="password"
              className="grow"
              placeholder="********"
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
            />
          </label>
          <div className="card-actions justify-end">
            <button className="btn btn-block btn-primary" onClick={onLogin}>
              Login
            </button>
          </div>
          <div role="alert" className="alert alert-info alert-soft">
            <span>
              The login is restricted for MTA Members. Please contact the
              administrator for credentials
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
