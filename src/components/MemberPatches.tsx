/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useServices } from "@/hooks/useServices";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

const MemberPatches: FC = () => {
  const [patchDetails, setPatchDetails] = useState<any>();
  const router = useRouter();

  const { getAchievementForUser } = useServices();

  useEffect(() => {
    if (!router.isReady) return;

    const username = Array.isArray(router.query.username)
      ? router.query.username[0]
      : router.query.username;

    getAchievementForUser(username as string).then((response) => {
      setPatchDetails(response);
    });
  }, [router.isReady, router.query.username]);

  console.log({ patchDetails });

  return (
    <div>
      {patchDetails?.achievements?.map((obj: any) => {
        console.log(obj);

        return (
          <img
            key={obj.url}
            src={obj.rideDetails?.rideLogo?.url || obj?.rideImage?.url}
            alt="ride patch"
            className="w-32 h-32 inline-block object-cover m-2"
          />
        );
      })}
    </div>
  );
};

export default MemberPatches;
