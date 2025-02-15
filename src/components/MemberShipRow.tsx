import React, { FC } from "react";

interface Props {
  heading: string;
  data: Array<{
    profile_url: string;
    name: string;
    instagram_handle: string;
  }>;
}

const MemberShipRow: FC<Props> = ({ data, heading }) => {
  return (
    <div className="mb-10">
      <div className="text-4xl font-semibold"> {heading}</div>
    </div>
  );
};

export default MemberShipRow;
