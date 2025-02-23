import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import React from "react";

function HallOfFame() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <PageHeader heading="Hall of Fame" />
      <Footer />
    </div>
  );
}

export default HallOfFame;
