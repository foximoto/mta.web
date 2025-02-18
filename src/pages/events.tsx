import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import React from "react";

function Events() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <PageHeader heading="Events" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-10">
        {[1, 2, 3, 4].map((i) => (
          <Link key={i} href={"blog-view"}>
            <div className="p-2">
              <div className="card bg-base-100 rounded-none shadow-xl">
                <figure>
                  <img
                    src="https://images.pexels.com/photos/5238634/pexels-photo-5238634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Offroad Training by MotorCycle Tourers Association
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Events;
