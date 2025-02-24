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
        <div className="overflow-x-auto md:overflow-hidden">
          <div className="flex flex-nowrap md:flex-wrap gap-6 w-max md:w-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((obj) => {
              return (
                <Link href={"/ride-detail"} key={obj} className="shrink-0">
                  <div className="flex flex-col items-center">
                    <img
                      src="https://longdistanceriders.net/wp-content/uploads/2015/06/500.gif"
                      alt=""
                      className="w-40 h-40 rounded-full object-cover"
                    />
                    <div className="text-center mt-2">
                      Ride name <br /> Year
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Rides;
