import PageHeader from "@/components/PageHeader";
import { changelogs } from "@/constants/changelog";
import React from "react";
import Markdown from "react-markdown";

const changelog = () => {
  return (
    <div>
      <PageHeader
        headingFirst="Website"
        description=""
        headingSecond="changelog"
      />
      <div className="py-20 container mx-auto markdown">
        <Markdown>{changelogs}</Markdown>
      </div>
    </div>
  );
};

export default changelog;
