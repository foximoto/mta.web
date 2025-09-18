/* eslint-disable @next/next/no-img-element */
import { useServices } from "@/hooks/useServices";
import React, { useEffect, useState } from "react";

function Sponsors() {
  const [partnerList, setPartnerList] = useState<Array<any>>();
  const { getPartnersList } = useServices();

  useEffect(() => {
    getPartnersList().then((response) => {
      setPartnerList(response);
    });
  }, []);

  return (
    <div className="py-10">
      <div className="text-4xl font-semibold text-center">Our Partners</div>
      <div className="flex flex-wrap gap-6 items-center justify-center mt-6">
        {partnerList?.map((i) => (
          <React.Fragment key={i}>
            <img
              src={i?.logo?.url}
              className="w-40 h-40 object-contain"
              alt=""
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
