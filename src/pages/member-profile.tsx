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
      <div className="text-3xl font-semibold text-center mt-6">John Doe</div>
      <div className="w-2/3 mx-auto grid grid-cols-3 my-10">
        <div className="col-span-1 text-xl px-4">
          <div className="text-2xl font-semibold">Details</div>
          <div>
            Road Name: <span className="font-semibold">Rider Mind</span> <br />
            Years of Experience: <span className="font-semibold">3</span> <br />
            Ride Type: <span className="font-semibold">
              Off-Road, enduro
            </span>{" "}
            <br />
          </div>

          <div className="text-2xl font-semibold mt-4">Social</div>
          <div>
            <a href="#">Instagram-username</a> <br />
            <a href="#">Twitter-username</a>
          </div>

          <div className="text-2xl font-semibold mt-4">Motorcycle</div>
          <div>
            <img
              src="https://images.pexels.com/photos/2393818/pexels-photo-2393818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <div>Royal Enfield Classic 350</div>
          </div>
        </div>
        <div className="col-span-2 px-4 ">
          <div className=" text-xl leading-relaxed">
            John Doe is an International Certified Long Distance Rider /
            Motorcycle Tourer & India book of records Holder from Calicut in
            Gods Own Country.He has spent more than 2 decades behind the
            handlebar.He has travelled the length and breadth of India.He
            conquered the Mighty Khardung La 15 times and completed Iron Butt
            Associations Challenge 5 times.He completed many Motorcycle
            Challenge Rides.He is an active Member of MTA
          </div>

          <div className="text-2xl font-semibold mt-6">Achievements</div>
          <div className="flex flex-row items-center gap-8 flex-wrap mt-4">
            {[1, 2, 3, 4].map((obj) => {
              return (
                <div key={obj}>
                  <img
                    src="https://longdistanceriders.net/wp-content/uploads/2015/06/500.gif"
                    alt=""
                    className="w-40 h-40 rounded-full object-cover"
                  />
                  <div className="text-center text-sm font-semibold mt-2">
                    SaddelSore 1000
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-2xl font-semibold mt-6">Rider map</div>
          <img
            src="https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MemberProfile;
