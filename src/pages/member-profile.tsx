import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function MemberProfile() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div
        className="hero h-[400px]"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/5195498/pexels-photo-5195498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      />

      <Footer />
    </div>
  );
}

export default MemberProfile;
