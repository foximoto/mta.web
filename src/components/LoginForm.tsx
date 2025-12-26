import { supabaseClient } from "@/config/supabase";
import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    supabaseClient.auth.signInWithOAuth({ provider: "google" });
  };

  return (
    <div className="py-20 flex justify-center items-center flex-col gap-4">
      <button
        onClick={() => {
          onLogin();
        }}
        className="bg-red-700 px-4 py-2"
      >
        login with Google
      </button>
    </div>
  );
};

export default LoginForm;
