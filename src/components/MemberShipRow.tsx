/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  heading?: string;
  data?: Array<{
    profile_url: string;
    name: string;
    instagram_handle: string;
    designation?: string;
  }>;
}

const MemberShipRow: FC<Props> = ({ heading, data }) => {
  return (
    <div className="mb-10">
      <div className="text-4xl font-semibold mb-5">{heading}</div>

      <div className=" md:overflow-hidden mt-4">
        <div className="flex flex-wrap gap-16 justify-center">
          {data?.map((obj) => {
            return (
              <Link href={"/member-profile"} key={obj.name} id="RouterNavLink">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={obj.profile_url}
                    className="avatar w-40 h-40 rounded-full object-cover"
                  />
                  <div className="text-xl font-semibold">{obj.name}</div>
                  <div className="text-sm font-semibold">{obj.designation}</div>
                  <div className="flex items-center justify-center mt-2">
                    <img
                      src="/icons/instagram.svg"
                      className="w-4 h-4"
                      alt=""
                    />
                    <div className="text-xs">{obj.instagram_handle}</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MemberShipRow;
