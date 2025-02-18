import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import React from "react";

function Rides() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <PageHeader heading="Rides" />
      <div className="py-10">
        <div className="flex flex-row flex-wrap gap-6">
          {[1, 2, 3, 4].map((obj) => {
            return (
              <Link href={"/ride-detail"} key={obj}>
                <img
                  src="https://longdistanceriders.net/wp-content/uploads/2015/06/500.gif"
                  alt=""
                  className="w-40 h-40 rounded-full object-cover"
                />
                <div className="text-center mt-2">
                  Ride name <br /> Year
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Rides;
