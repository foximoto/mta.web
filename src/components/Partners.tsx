import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

function Sponsors() {
  const { partnerList } = useSelector((State: RootState) => State.partners);

  return (
    <div className="py-10">
      <div className="text-4xl font-semibold text-center">Our Partners</div>
      <div className="flex flex-wrap gap-6 items-center justify-center mt-6">
        {(partnerList as Array<{}>)?.map((i: any) => (
          <React.Fragment key={i}>
            <a href={i?.url || "#"}>
              <img src={i?.logo} className="w-40 h-40 object-contain" alt="" />
            </a>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
