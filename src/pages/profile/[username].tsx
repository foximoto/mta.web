/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */

import MemberPatches from "@/components/MemberPatches";
import PageHeader from "@/components/PageHeader";
import { supabaseClient } from "@/config/supabase";
import Meta from "@/meta/meta";
import { Instagram } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

function MemberProfile() {
  const [userData, setUserData] = useState<{
    id: number;
    created_at: string;
    name: string;
    auth_id: string;
    insta_username: string;
    polarstep_url: string;
    profile_image: string;
    member_type: string;
    designation: string;
    rider_bio: string;
    designation_order: number;
    road_name: string;
  }>();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const username = Array.isArray(router.query.username)
      ? router.query.username[0]
      : router.query.username;

    if (username) {
      getData(username);
    }
  }, [router.isReady, router.query.username]);

  const getData = async (slug: string) => {
    let { data: members, error } = await supabaseClient
      .from("members")
      .select("*")
      .eq("insta_username", slug);
    setUserData(members?.[0]);
  };

  return (
    <div>
      <Meta title={userData?.name || ""} favicon="/favicon.ico" />
      <PageHeader
        description="Every members are valuable for MTA"
        headingFirst="Our Proud"
        headingSecond="Member"
      />
      {userData && (
        <div className="flex flex-row container mx-auto py-20">
          <div className="w-[400px]">
            <img
              src={userData?.profile_image}
              className="h-[400px] w-[400px] object-cover"
              alt=""
            />
            <div>
              <MemberPatches userName={userData?.name} />
            </div>
            <div>
              <div className="text-2xl font-semibold mt-6 mb-2">Social</div>
              <a
                href={`https://instagram.com/${userData?.insta_username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </div>
          </div>
          <div className="flex-1 px-6">
            <div className="text-2xl font-semibold">
              {userData?.name}{" "}
              {userData?.road_name && ` aka ${userData?.road_name}`}
            </div>
            <div className=" markdown">
              <Markdown>{userData?.rider_bio}</Markdown>
            </div>
            {userData?.polarstep_url && (
              <iframe
                src={userData?.polarstep_url}
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
