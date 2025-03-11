/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import React from "react";

function Gallery() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <PageHeader heading="Gallery" />
      <div className="grid grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((ob) => {
          return (
            <img
              src="https://images.pexels.com/photos/5238634/pexels-photo-5238634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              key={ob}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
