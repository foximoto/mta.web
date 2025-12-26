import { supabaseClient } from "@/config/supabase";
import { LogOut } from "lucide-react";
import React from "react";

const UserSettings = () => {
  return (
    <div className="py-20 container mx-auto">
      <button
        className="bg-red-700 px-4 py-2 flex gap-4 items-center"
        onClick={() => {
          supabaseClient.auth.signOut().then(() => {
            window.location.reload();
          });
        }}
      >
        logout <LogOut width={18} height={18} />
      </button>
    </div>
  );
};

export default UserSettings;
