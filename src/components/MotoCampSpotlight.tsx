/* eslint-disable @next/next/no-img-element */
import React from "react";

function MotoCampSpotlight() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center ">
          <div className="text-5xl font-bold mb-6">Moto Camp 2025</div>
          <div className="w-2/3">
            MotoCamp is a 2-day camp focusing on Motorcycle Riding, Touring
            Skills,Riding Gears, Basic First Aid, Basic Repairing, Explaining
            Tools, Workshops related to Technology.
          </div>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/5192886/pexels-photo-5192886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="h-[600px] w-full object-cover"
          />
        </div>
      </div>
      <div className="py-10 w-2/3 mx-auto text-center">
        MotoCamp designed and built by a Motorcycle Adventure Tourer who
        understands what riders need.Our ride experts, providing you with ride
        co-ordination, ride etiquette and mechanical classes. This Moto Camping
        experience is for everyone - for rider groups, women riders, partners,
        families and those who enjoy hitting the road. If you’re a punter or a
        noob, you’re welcome to join us for this awesome Moto Camp experience.
        You cannot lose this!
      </div>
    </div>
  );
}

export default MotoCampSpotlight;
