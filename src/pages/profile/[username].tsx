/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useServices } from "@/hooks/useServices";
import Meta from "@/meta/meta";
import { memberDetailsType } from "@/types/service";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
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
      console.log(username);
      getMemberDetails(username).then((response) => {
        setMemberData(response?.data?.members);
      });
    }
  }, [router.isReady, router.query.username]);

  return (
    <div className="container mx-auto">
      <Meta title={memberData?.name || ""} favicon="/favicon-home.ico" />
      <Navbar />
      <div
        className="hero h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/cXQJcM0S/Whats-App-Image-2025-02-27-at-12-33-12-AM.jpg)",
        }}
      />
      {memberData && (
        <>
          <div className="flex justify-center items-center">
            <img
              alt=""
              src={memberData?.profileImage?.url || "/placeholder.png"}
              className="avatar w-60 h-60 rounded-full mt-[-120px] border-2 border-white object-cover "
            />
          </div>
          <div className="text-3xl font-semibold text-center mt-6">
            {memberData.name}
          </div>
          <a
            href={`https://instagram.com/${memberData.userName}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center mt-2">
              <img src="/icons/instagram.svg" className="w-4 h-4" alt="" />
              <div className="text-xs">{memberData.userName}</div>
            </div>
          </a>

          <div className="w-full md:w-2/3 mx-auto  my-10">
            <div className="px-4 md:col-span-2 markdown">
              <Markdown>{memberData?.bio}</Markdown>
            </div>
            <div>
              {memberData?.ridePatches?.length
                ? memberData?.ridePatches?.map((obj) => {
                    return (
                      <img
                        key={obj.url}
                        src={obj.url}
                        alt="ride patch"
                        className="w-32 h-32 inline-block object-cover m-2"
                      />
                    );
                  })
                : null}
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default MemberProfile;
