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

const ProfileCard: FC<Props> = ({
  instagram_handle,
  name,
  profile_url,
  designation,
  ridePatches,
}) => {
  return (
    <Link href={`profile/${instagram_handle}`} id="RouterNavLink">
      <div className="group w-[200px] bg-[#121212]  shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
        {/* Image */}
        <div className="w-full h-48 bg-gray-100">
          <img
            src={profile_url || "/placeholder.png"}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-4 py-4 text-center">
          <h3 className="text-lg font-semibold text-white">{name}</h3>

          {designation && (
            <p className="text-sm text-gray-500 mt-1">{designation}</p>
          )}

          {/* Instagram */}
          <div className="flex items-center justify-center gap-2 mt-1 text-gray-600">
            <span className="text-xs font-medium">@{instagram_handle}</span>
          </div>

          {/* Ride Patches */}
          {ridePatches?.length > 0 && (
            <div className="flex justify-center items-center mt-4 flex-wrap gap-1">
              {ridePatches.slice(0, 5).map((patch) => (
                <img
                  key={patch.url}
                  src={patch.url}
                  alt="Ride Patch"
                  className="w-6 h-6 object-contain"
                />
              ))}

              {ridePatches.length > 5 && (
                <span className="text-xs font-semibold text-gray-500 ml-1">
                  +{ridePatches.length - 5}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProfileCard;
