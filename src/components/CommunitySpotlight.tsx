/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function CommunitySpotlight() {
  return (
    <div>
      <div className="text-4xl font-semibold mb-4 text-center">
        Hall of fame
      </div>
      <div className="grid grid-cols-5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="pr-2">
            <div className="card rounded-none bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://images.pexels.com/photos/217872/pexels-photo-217872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  MTA Member Completed Saddlesore 1000
                </h2>
              </div>
            </div>
          </div>
        ))}
        <Link
          href={"/hall-of-fame"}
          className="card bg-base-100 shadow-xl flex justify-center items-center rounded-none"
        >
          <div className="text-xl font-semibold text-center">
            View <br /> hall of fame
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CommunitySpotlight;
