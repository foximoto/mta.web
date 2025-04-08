import React, { FC } from "react";

interface Props {
  heading: string;
}

const PageHeader: FC<Props> = ({ heading }) => {
  return (
    <div className="text-xl md:text-4xl lg:text-6xl font-semibold text-center py-10">
      {heading}
    </div>
  );
};

export default PageHeader;
