/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Sponsors() {
  return (
    <div className="py-10">
      <div className="text-4xl font-semibold text-center">
        Our Official Sponsors
      </div>
      <div className="flex flex-row flex-wrap gap-3 items-center justify-center mt-6">
        {[1, 2, 3].map((i) => (
          <>
            <img
              src="https://i.ibb.co/dsrKpkzr/id-Kil5px-So-logos.jpg"
              className="w-24 h-24"
              alt=""
              key={i}
            />
            <img
              src="https://i.ibb.co/gFgH5mxK/Gulf-Oil-id-MUv4h2gu-1.png"
              alt=""
              className="w-24 h-24"
            />
            <img
              src="https://i.ibb.co/gbZVP6hr/id-Njp-Jc-ALc-1739604532789.jpg"
              alt=""
              className="w-24 h-24"
            />
          </>
        ))}
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
