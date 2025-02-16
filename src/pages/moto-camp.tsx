import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import React from "react";

function MotoCap() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <PageHeader heading="Moto Camp" />
      <Footer />
    </div>
  );
}

export default MotoCap;
