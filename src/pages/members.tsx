import Footer from "@/components/Footer";
import MemberAvatar from "@/components/MemberAvatar";
import Navbar from "@/components/Navbar";
import { useServices } from "@/hooks/useServices";
import { boardOfDirectorsType } from "@/types/service";
import { useEffect, useState } from "react";

function Members() {
  const [boardOfDirectorsList, setBoardOfDirectorsList] =
    useState<Array<boardOfDirectorsType>>();
  const [membersList, setMembersList] = useState<Array<boardOfDirectorsType>>();
  const [founder, setFounder] = useState<Array<boardOfDirectorsType>>();

  const { getBoardOfDirectorsList, getMembersList, getFounderList } =
    useServices();

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
  }, []);

  console.log(boardOfDirectorsList);

  return (
    <div className="container mx-auto">
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
                />
              </div>
            );
          })}
        </div>
        <div className="text-4xl font-semibold my-20 text-center">
          BOARD MEMBERS
        </div>
        <div className="grid grid-cols-3 ">
          {boardOfDirectorsList?.map((obj) => {
            return (
              <div key={obj.name} className="mb-10">
                <MemberAvatar
                  instagram_handle={obj.userName}
                  name={obj.name}
                  profile_url={obj.profileImage?.url}
                  designation={obj.designation}
                />
              </div>
            );
          })}
        </div>

        <div className="text-4xl font-semibold my-20 text-center">MEMBERS</div>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {membersList?.map((obj) => {
            return (
              <div key={obj.name} className="mb-10">
                <MemberAvatar
                  instagram_handle={obj.userName}
                  name={obj.name}
                  profile_url={obj.profileImage?.url}
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
