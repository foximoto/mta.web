/* eslint-disable @next/next/no-img-element */
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function JoinMta() {
  return (
    <div className="py-20 bg-black ">
      <div className="p-1 md:p-4 flex flex-col justify-center items-center mt-3 mt-md-0">
        <div className="text-white text-5xl font-semibold">
          Be Part of Our Story
        </div>
        <div className="text-lg text-white mt-4">
          Join thousands of riders who've found their tribe with MTA
        </div>
        <Link
          href="/join-mta"
          className=" flex justify-center items-center px-6 py-4 mt-8 text-white gap-2 bg-red-700"
        >
          Join MTA Today <MoveRight />
        </Link>
      </div>
    </div>
  );
}

export default JoinMta;
