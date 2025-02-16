/* eslint-disable @next/next/no-img-element */

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
            "url(https://images.pexels.com/photos/5205083/pexels-photo-5205083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      />
      <div className="flex justify-center items-center">
        <img
          alt=""
          src="https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="avatar w-60 h-60 rounded-full mt-[-120px] border-2 border-white object-cover"
        />
      </div>

      <div className="flex justify-center items-center pb-10">
        <div className="w-2/3 mx-auto">
          <div className="text-3xl font-semibold text-center mt-6">
            John Doe
          </div>
          <div className="mt-4 text-xl leading-relaxed">
            John Doe is an International Certified Long Distance Rider /
            Motorcycle Tourer & India book of records Holder from Calicut in
            Gods Own Country.He has spent more than 2 decades behind the
            handlebar.He has travelled the length and breadth of India.He
            conquered the Mighty Khardung La 15 times and completed Iron Butt
            Associations Challenge 5 times.He completed many Motorcycle
            Challenge Rides.He is an active Member of MTA
          </div>
        </div>
      </div>
      <div className="w-2/3 mx-auto pb-20">
        <div className="text-3xl font-semibold">Achievements</div>
      </div>

      <Footer />
    </div>
  );
}

export default MemberProfile;
