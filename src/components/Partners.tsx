/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { supabaseClient } from "@/config/supabase";
import React, { useEffect, useState } from "react";

function Partners() {
  const [partnerList, setPartnerList] = useState<Array<any>>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let { data: collabs, error } = await supabaseClient
      .from("collabs")
      .select("logo, url")
      .eq("collab_type", "partner");
    setPartnerList(collabs || []);
  };

  return (
    <div className="py-20 bg-[#121212]">
      <div className="text-4xl font-semibold text-center">Our Partners</div>
      <div className="flex flex-wrap gap-6 items-center justify-center mt-6">
        {partnerList?.map((i) => (
          <React.Fragment key={i}>
            <a href={i?.url || "#"}>
              <div className="w-40 h-40 bg-black flex justify-center items-center">
                <img
                  src={i?.logo}
                  className="w-36 h-36 object-contain"
                  alt=""
                />
              </div>
            </a>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Partners;
