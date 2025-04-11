/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useServices } from "@/hooks/useServices";
import { log } from "console";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { marked } from "marked";

function MemberProfile() {
  const [memberData, setMemberData] = useState<any>();
  const router = useRouter();

  const { getMemberDetails } = useServices();

  useEffect(() => {
    if (router?.query?.username) {
      const username = Array.isArray(router.query.username)
        ? router.query.username[0]
        : router.query.username;
      getMemberDetails(username).then((response) => {
        setMemberData(response?.data?.members);
      });
    }
  }, []);

  return (
    <div className="container mx-auto">
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
              src={memberData.profileImage.url}
              className="avatar w-60 h-60 rounded-full mt-[-120px] border-2 border-white object-cover "
            />
          </div>
          <div className="text-3xl font-semibold text-center mt-6">
            {memberData.name}
          </div>
          <a href="https://www.instagram.com/vepavicalicutchoppers/">
            <div className="flex items-center justify-center mt-2">
              <img src="/icons/instagram.svg" className="w-4 h-4" alt="" />
              <div className="text-xs">{memberData.userName}</div>
            </div>
          </a>
          <div className="w-full md:w-2/3 mx-auto  my-10">
            <div className="px-4 md:col-span-2">
              <div
                className="text-xl leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: marked.parse(memberData?.bio || ""),
                }}
              ></div>{" "}
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default MemberProfile;
