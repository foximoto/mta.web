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

  const { getBoardOfDirectorsList, getMembersList } = useServices();

  useEffect(() => {
    getBoardOfDirectorsList().then((response) => {
      setBoardOfDirectorsList(response);
    });
    getMembersList().then((response) => {
      setMembersList(response);
    });
  }, []);

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="p-2">
        <div className="text-4xl font-semibold my-10 md:my-15 lg:my-20 text-center">
          BOARD OF DIRECTORS
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 ">
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

        <div className="text-4xl font-semibold mt-0 my-10 md:my-15 lg:my-20 text-center">
          MEMBERS
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {membersList?.map((obj) => {
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
      </div>
      <Footer />
    </div>
  );
}

export default Members;
