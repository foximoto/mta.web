/* eslint-disable react-hooks/exhaustive-deps */
import MemberAvatar from "@/components/MemberAvatar";
import PageHeader from "@/components/PageHeader";
import { useServices } from "@/hooks/useServices";
import Meta from "@/meta/meta";
import { boardOfDirectorsType } from "@/types/service";
import { useEffect, useState } from "react";

function Members() {
  const [boardOfDirectorsList, setBoardOfDirectorsList] =
    useState<Array<boardOfDirectorsType>>();
  const [membersList, setMembersList] = useState<Array<boardOfDirectorsType>>();
  const [crew, setCrew] = useState<Array<boardOfDirectorsType>>();

  const { getBoardOfDirectorsList, getMembersList, getCrewList } =
    useServices();

  useEffect(() => {
    getBoardOfDirectorsList().then(setBoardOfDirectorsList);
    getMembersList().then(setMembersList);
    getCrewList().then(setCrew);
  }, []);

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
          {boardOfDirectorsList
            ?.slice()
            .sort((a, b) => a.order - b.order)
            .map((obj) => (
              <div key={obj.name} className="flex justify-center">
                <MemberAvatar
                  instagram_handle={obj.userName}
                  name={obj.name}
                  profile_url={obj.profileImage?.url}
                  designation={obj.designation}
                  ridePatches={obj.ridePatches}
                />
              </div>
            ))}
        </div>

        {/* RIDE CREW */}
        <div className="text-3xl md:text-4xl font-semibold my-10 ">
          RIDE CREW
        </div>

        <div className="flex ">
          {crew?.map((obj) => (
            <div key={obj.name}>
              <MemberAvatar
                instagram_handle={obj.userName}
                name={obj.name}
                profile_url={obj.profileImage?.url}
                designation={obj.designation}
                ridePatches={obj.ridePatches}
              />
            </div>
          ))}
        </div>

        {/* MEMBERS */}
        <div className="text-3xl md:text-4xl font-semibold my-10 ">MEMBERS</div>

        <div className="flex flex-row flex-wrap gap-10">
          {membersList
            ?.slice()
            ?.sort(
              (a, b) =>
                (b.ridePatches?.length || 0) - (a.ridePatches?.length || 0)
            )
            ?.map((obj) => (
              <div key={obj.name}>
                <MemberAvatar
                  instagram_handle={obj.userName}
                  name={obj.name}
                  profile_url={obj.profileImage?.url}
                  ridePatches={obj.ridePatches}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Members;
