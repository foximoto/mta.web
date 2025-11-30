/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "@/components/Footer";
import MemberAvatar from "@/components/MemberAvatar";
import Navbar from "@/components/Navbar";
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
    <div className="container mx-auto px-4">
      <Meta title="Members" favicon="/favicon-home.ico" />
      <Navbar />

      <div className="p-2 mt-10">
        {/* BOARD MEMBERS */}
        <div className="text-3xl md:text-4xl font-semibold my-10 text-center">
          BOARD MEMBERS
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
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
        <div className="text-3xl md:text-4xl font-semibold my-10 text-center">
          RIDE CREW
        </div>

        <div className="flex justify-center">
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
        <div className="text-3xl md:text-4xl font-semibold my-10 text-center">
          MEMBERS
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
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

      <Footer />
    </div>
  );
}

export default Members;
