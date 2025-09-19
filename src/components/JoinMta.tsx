/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function JoinMta() {
  return (
    <div className="py-10 grid md:grid-cols-2">
      <div>
        <img
          src="https://images.pexels.com/photos/22129752/pexels-photo-22129752/free-photo-of-motorcycles-parked-along-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="h-[400px] w-full object-cover"
        />
      </div>
      <div className="p-1 md:p-4 flex flex-col justify-center items-center mt-3 mt-md-0">
        <div className="text-4xl font-semibold text-center">Join MTA</div>
        <p className="mb-5 w-md-2/3 mx-auto mt-4 w-100 text-justify p-2 md:p-0">
          Would you like to become a member of elite this motorcycle group? If
          you are a long distance motorcycle riding addict, you’ve come to the
          right place. Then welcome to the world of Motorcycle Tourers.
        </p>
        <Link href="/join-mta" className="btn bg-black text-yellow-600">
          Apply now
        </Link>
      </div>
    </div>
  );
}

export default JoinMta;
