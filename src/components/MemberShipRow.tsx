/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  heading: string;
  data?: Array<{
    profile_url: string;
    name: string;
    instagram_handle: string;
  }>;
}

const MemberShipRow: FC<Props> = ({ heading }) => {
  return (
    <div className="mb-10">
      <div className="text-4xl font-semibold mb-5">{heading}</div>

      {/* Scrollable container for small screens */}
      <div className="overflow-x-auto md:overflow-hidden mt-4">
        <div className="flex flex-nowrap gap-4 w-max">
          {[1, 2, 3].map((obj) => (
            <Link key={obj} href={"/member-profile"}>
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://images.pexels.com/photos/5238634/pexels-photo-5238634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="avatar w-40 h-40 rounded-full"
                />
                <div className="text-xl font-semibold">John Deo</div>
                <div className="text-xs">insta_id</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberShipRow;
