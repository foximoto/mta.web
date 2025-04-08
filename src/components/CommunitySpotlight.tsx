/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function CommunitySpotlight() {
  return (
    <div className="pb-10">
      <h2 className="text-4xl font-semibold mb-4 text-center">Hall of Fame</h2>

      <div className="overflow-x-auto md:overflow-x-hidden">
        <div className="flex space-x-4 md:grid md:grid-cols-4 lg:grid-cols-5 md:gap-4">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="w-[250px] md:w-full flex-shrink-0">
              <div className="card rounded-none bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-full h-auto"
                    src="https://images.pexels.com/photos/217872/pexels-photo-217872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">
                    MTA Member Completed Saddlesore 1000
                  </h3>
                </div>
              </div>
            </div>
          ))}

          <Link
            href="/"
            className="w-[250px] md:w-full flex-shrink-0 card bg-base-100 shadow-xl flex justify-center items-center rounded-none p-4"
          >
            <span className="text-xl font-semibold text-center">
              View <br /> Hall of Fame
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CommunitySpotlight;
