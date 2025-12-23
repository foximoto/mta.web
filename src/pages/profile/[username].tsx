/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */

import MemberPatches from "@/components/MemberPatches";
import PageHeader from "@/components/PageHeader";
import { useServices } from "@/hooks/useServices";
import Meta from "@/meta/meta";
import { memberDetailsType } from "@/types/service";
import { Instagram } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

function MemberProfile() {
  const [memberData, setMemberData] = useState<memberDetailsType>();
  const router = useRouter();

  const { getMemberDetails } = useServices();

  useEffect(() => {
    if (!router.isReady) return;

    const username = Array.isArray(router.query.username)
      ? router.query.username[0]
      : router.query.username;

    if (username) {
      getMemberDetails(username).then((response) => {
        setMemberData(response?.data?.members);
      });
    }
  }, [router.isReady, router.query.username]);

  return (
    <div>
      <Meta title={memberData?.name || ""} favicon="/favicon.ico" />
      <PageHeader
        description="Every members are valuable for MTA"
        headingFirst="Our Proud"
        headingSecond="Member"
      />
      {memberData && (
        <div className="flex flex-row container mx-auto py-20">
          <div className="w-[400px]">
            <img
              src={memberData?.profileImage?.url}
              className="h-[400px] w-[400px] object-cover"
              alt=""
            />
            <div>
              <MemberPatches />
            </div>
            <div>
              <div className="text-2xl font-semibold mt-6 mb-2">Social</div>
              <a
                href={`https://instagram.com/${memberData.userName}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </div>
          </div>
          <div className="flex-1 px-6">
            <div className="text-2xl font-semibold">
              {memberData?.name} aka{" "}
              <span className="italic font-light">Fox</span>
            </div>
            <div className=" markdown">
              <Markdown>{memberData?.bio}</Markdown>
            </div>
            {memberData?.polarstepUrl && (
              <iframe
                src={memberData?.polarstepUrl}
                title="Example Website"
                className="w-full h-[600px]"
                frameBorder="0"
              ></iframe>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MemberProfile;
