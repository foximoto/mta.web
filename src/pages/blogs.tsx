/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import React from "react";

function blogs() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <PageHeader heading="Blogs" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 mb-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
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
                    Conquer Winter Spiti: The Ultimate Motorcycle Adventure
                  </h2>
                  <p>By Riki . 5 min read</p>
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

export default blogs;
