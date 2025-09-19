/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  profile_url: string;
  name: string;
  instagram_handle: string;
  designation?: string;
  ridePatches: {
    url: string;
  }[];
}

const MemberAvatar: FC<Props> = ({
  instagram_handle,
  name,
  profile_url,
  designation,
  ridePatches,
}) => {
  return (
    <div>
      <Link href={`profile/${instagram_handle}`} id="RouterNavLink">
        <div className="flex flex-col justify-center items-center">
          <img
            src={profile_url || "/placeholder.png"}
            className="avatar w-40 h-40 rounded-full object-cover"
            alt=""
          />
          <div className="text-xl font-semibold">{name}</div>
          <div className="text-sm font-semibold">{designation}</div>
          <div className="flex items-center justify-center mt-2 gap-1">
            <img src="/icons/instagram.svg" className="w-4 h-4" alt="" />
            <div className="text-xs">{instagram_handle}</div>
          </div>
          <div>
            {ridePatches?.length > 0 && (
              <>
                {ridePatches?.slice(0, 5).map((obj) => (
                  <img
                    key={obj.url}
                    src={obj.url}
                    alt="ride patch"
                    className="w-6 h-6 inline-block object-contain mx-0.5"
                  />
                ))}

                {ridePatches?.length > 5 && (
                  <span className="ml-1 text-sm font-medium">
                    +{ridePatches?.length - 5}
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MemberAvatar;
