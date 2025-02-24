/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Sponsors() {
  return (
    <div className="py-10">
      <div className="text-4xl font-semibold text-center">
        Our Official Sponsors
      </div>

      <div className="hidden md:flex flex-wrap gap-3 items-center justify-center mt-6">
        {[1, 2, 3].map((i) => (
          <React.Fragment key={i}>
            <img
              src="https://i.ibb.co/dsrKpkzr/id-Kil5px-So-logos.jpg"
              className="w-24 h-24"
              alt=""
            />
            <img
              src="https://i.ibb.co/gFgH5mxK/Gulf-Oil-id-MUv4h2gu-1.png"
              className="w-24 h-24"
              alt=""
            />
            <img
              src="https://i.ibb.co/gbZVP6hr/id-Njp-Jc-ALc-1739604532789.jpg"
              className="w-24 h-24"
              alt=""
            />
          </React.Fragment>
        ))}
      </div>

      <div className="overflow-x-auto md:hidden mt-6">
        <div className="flex flex-nowrap gap-3 items-center w-max">
          {[1, 2, 3].map((i) => (
            <React.Fragment key={i}>
              <img
                src="https://i.ibb.co/dsrKpkzr/id-Kil5px-So-logos.jpg"
                className="w-24 h-24 flex-shrink-0"
                alt=""
              />
              <img
                src="https://i.ibb.co/gFgH5mxK/Gulf-Oil-id-MUv4h2gu-1.png"
                className="w-24 h-24 flex-shrink-0"
                alt=""
              />
              <img
                src="https://i.ibb.co/gbZVP6hr/id-Njp-Jc-ALc-1739604532789.jpg"
                className="w-24 h-24 flex-shrink-0"
                alt=""
              />
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Link href={"/contact-us"} className="btn mx-auto">
          Become a Sponsor
        </Link>
      </div>
    </div>
  );
}

export default Sponsors;
