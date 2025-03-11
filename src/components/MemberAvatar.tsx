/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  profile_url: string;
  name: string;
  instagram_handle: string;
  designation?: string;
}

const MemberAvatar: FC<Props> = ({
  instagram_handle,
  name,
  profile_url,
  designation,
}) => {
  return (
    <div>
      <Link href={"/member-profile"} id="RouterNavLink">
        <div className="flex flex-col justify-center items-center">
          <img
            src={profile_url}
            className="avatar w-40 h-40 rounded-full object-cover"
            alt=""
          />
          <div className="text-xl font-semibold">{name}</div>
          <div className="text-sm font-semibold">{designation}</div>
          <div className="flex items-center justify-center mt-2">
            <img src="/icons/instagram.svg" className="w-4 h-4" alt="" />
            <div className="text-xs">{instagram_handle}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MemberAvatar;
