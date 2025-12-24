/* eslint-disable react-hooks/exhaustive-deps */
import MemberAvatar from "@/components/MemberAvatar";
import PageHeader from "@/components/PageHeader";
import { supabaseClient } from "@/config/supabase";
import Meta from "@/meta/meta";
import { useEffect, useState } from "react";

function Members() {
  const [allMemberList, setAllMemberList] = useState<
    {
      designation: string;
      designation_order: number;
      member_type: string;
      name: string;
      profile_image: string;
      insta_username: string;
    }[]
  >([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let { data: members, error } = await supabaseClient
      .from("members")
      .select(
        "designation,designation_order,member_type,name,profile_image,member_type,insta_username"
      );
    setAllMemberList(members as any);
  };

  return (
    <div>
      <Meta title="Members" favicon="/favicon.ico" />
      <PageHeader
        headingFirst="Our"
        headingSecond="Members"
        description="Our members are the backbone of this community"
      />

      <div className="py-20 mx-auto container">
        {/* BOARD MEMBERS */}
        <div className="text-3xl md:text-4xl font-semibold my-10 ">
          BOARD MEMBERS
        </div>

        <div className="flex flex-row flex-wrap gap-10">
          {allMemberList
            ?.filter((member) => member.member_type === "Board Member")
            ?.slice()
            .sort((a, b) => a.designation_order - b.designation_order)
            .map((obj) => (
              <div key={obj.name} className="flex justify-center">
                <MemberAvatar
                  instagram_handle={obj.insta_username}
                  name={obj.name}
                  profile_url={obj.profile_image}
                  designation={obj.designation}
                  ridePatches={[]}
                />
              </div>
            ))}
        </div>

        {/* RIDE CREW */}
        <div className="text-3xl md:text-4xl font-semibold my-10 ">
          RIDE CREW
        </div>

        <div className="flex ">
          {allMemberList
            ?.filter((member) => member.member_type === "Ride Crew")
            ?.map((obj) => (
              <div key={obj.name}>
                <MemberAvatar
                  instagram_handle={obj.insta_username}
                  name={obj.name}
                  profile_url={obj.profile_image}
                  designation={obj.designation}
                  ridePatches={[]}
                />
              </div>
            ))}
        </div>

        {/* MEMBERS */}
        <div className="text-3xl md:text-4xl font-semibold my-10 ">MEMBERS</div>

        <div className="flex flex-row flex-wrap gap-10">
          {allMemberList
            ?.filter((member) => member.member_type === "Member")
            ?.slice()
            ?.map((obj) => (
              <div key={obj.name}>
                <MemberAvatar
                  instagram_handle={obj.insta_username}
                  name={obj.name}
                  profile_url={obj.profile_image}
                  ridePatches={[]}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Members;
