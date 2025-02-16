import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import React from "react";

function Rides() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <PageHeader heading="Rides" />
      <Footer />
    </div>
  );
}

export default Rides;
