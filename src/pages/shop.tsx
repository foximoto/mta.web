import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Meta from "@/meta/meta";
import React from "react";

const Shop = () => {
  return (
    <div className="container mx-auto ">
      <Meta title="Shop" favicon="/favicon-home.ico" />
      <Navbar />
      <PageHeader heading="Shop" />
      <div className="text-3xl font-semibold text-center">Coming Soon!</div>
      <Footer />
    </div>
  );
};

export default Shop;
