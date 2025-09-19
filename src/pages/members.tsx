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
  const [founder, setFounder] = useState<Array<boardOfDirectorsType>>();
  const [crew, setCrew] = useState<Array<boardOfDirectorsType>>();

  const {
    getBoardOfDirectorsList,
    getMembersList,
    getFounderList,
    getCrewList,
  } = useServices();

  useEffect(() => {
    getBoardOfDirectorsList().then((response) => {
      setBoardOfDirectorsList(response);
    });
    getMembersList().then((response) => {
      setMembersList(response);
    });
    getFounderList().then((response) => {
      setFounder(response);
    });
    getCrewList().then((response) => {
      setCrew(response);
    });
  }, []);

  console.log(crew);

  return (
    <div className="container mx-auto">
      <Meta title="Members" favicon="/favicon-home.ico" />
      <Navbar />
      <div className="p-2">
        <div className="text-4xl font-semibold my-20 text-center">FOUNDER</div>
        <div className="flex justify-center">
          {founder?.map((obj) => {
            return (
              <div key={obj.name} className="mb-10">
                <MemberAvatar
                  instagram_handle={obj.userName}
                  name={obj.name}
                  profile_url={obj.profileImage?.url}
                  designation={obj.designation}
                  ridePatches={obj.ridePatches}
                />
              </div>
            );
          })}
        </div>
        <div className="text-4xl font-semibold my-20 text-center">
          BOARD MEMBERS
        </div>
        <div className="grid grid-cols-3 ">
          {boardOfDirectorsList
            ?.sort((a, b) => a.order - b.order)
            .map((obj) => {
              return (
                <div key={obj.name} className="mb-10">
                  <MemberAvatar
                    instagram_handle={obj.userName}
                    name={obj.name}
                    profile_url={obj.profileImage?.url}
                    designation={obj.designation}
                    ridePatches={obj.ridePatches}
                  />
                </div>
              );
            })}
        </div>

        <div className="text-4xl font-semibold my-20 text-center">
          RIDE CREW
        </div>
        <div className="flex justify-center">
          {crew?.map((obj) => {
            return (
              <div key={obj.name} className="mb-10">
                <MemberAvatar
                  instagram_handle={obj.userName}
                  name={obj.name}
                  profile_url={obj.profileImage?.url}
                  designation={obj.designation}
                  ridePatches={obj.ridePatches}
                />
              </div>
            );
          })}
        </div>

        <div className="text-4xl font-semibold my-20 text-center">MEMBERS</div>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {membersList
            ?.slice()
            ?.sort(
              (a, b) =>
                (b.ridePatches?.length || 0) - (a.ridePatches?.length || 0)
            )
            ?.map((obj) => {
              return (
                <div key={obj.name} className="mb-10">
                  <MemberAvatar
                    instagram_handle={obj.userName}
                    name={obj.name}
                    profile_url={obj.profileImage?.url}
                    ridePatches={obj.ridePatches}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Members;
