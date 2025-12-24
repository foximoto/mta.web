/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { supabaseClient } from "@/config/supabase";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

interface Props {
  userName: string;
}

const MemberPatches: FC<Props> = ({ userName }) => {
  const [patchData, setPatchData] = useState<
    {
      mta_rides: {
        ride_logo: any;
      };
    }[]
  >();
  const router = useRouter();

  useEffect(() => {
    userName && getData();
  }, [userName]);

  const getData = async () => {
    let { data: achievements, error } = await supabaseClient
      .from("achievements")
      .select("mta_rides(ride_logo)")
      .eq("member", userName);

    setPatchData(achievements as any);
  };

  return (
    <div>
      <div className="text-2xl font-semibold mt-6">Achievement Patches</div>
      {patchData?.map((obj: any) => {
        console.log(obj);

        return (
          <img
            key={obj.url}
            src={obj.mta_rides?.ride_logo}
            alt="ride patch"
            className="w-20 h-20 inline-block object-cover m-2"
          />
        );
      })}
    </div>
  );
};

export default MemberPatches;
