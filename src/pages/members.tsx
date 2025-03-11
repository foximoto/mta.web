import Footer from "@/components/Footer";
import MemberAvatar from "@/components/MemberAvatar";
import MemberShipRow from "@/components/MemberShipRow";
import Navbar from "@/components/Navbar";
import { useServices } from "@/hooks/useServices";
import { boardOfDirectorsType } from "@/types/service";
import { useEffect, useState } from "react";

function Members() {
  const [boardOfDirectorsList, setBoardOfDirectorsList] =
    useState<Array<boardOfDirectorsType>>();
  const [membersList, setMembersList] = useState();

  const { getBoardOfDirectorsList } = useServices();

  useEffect(() => {
    getBoardOfDirectorsList().then((response) => {
      console.log(response?.data?.membersList);
      setBoardOfDirectorsList(response);
    });
  }, []);

  console.log(boardOfDirectorsList);

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="p-2">
        <div className="text-4xl font-semibold my-20 text-center">
          BOARD OF DIRECTORS
        </div>
        <div className="grid grid-cols-3 ">
          {boardOfDirectorsList?.map((obj) => {
            return (
              <div key={obj.name}>
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
        <MemberShipRow
          data={[
            {
              name: "AKSHAY SUDARSH",
              instagram_handle: "akshaysudarsh_",
              profile_url: "/akshay.png",
            },
            {
              name: "PRABHUL",
              instagram_handle: "prabhul.pradeep",
              profile_url: "/prabhul.png",
            },
            {
              name: "SUHAIL",
              instagram_handle: "suhail_ramrodz",
              profile_url: "/suhail.png",
            },
            {
              name: "AKHIL T A",
              instagram_handle: "t.a_vibranium",
              profile_url: "/akhil.jpeg",
            },
            {
              name: "TONY KANDATHIL",
              instagram_handle: "tonywingman",
              profile_url: "/tony.png",
            },
            {
              name: ".......",

              instagram_handle: "instagram_handle",
              profile_url: "/placeholder.png",
            },
            {
              name: ".......",

              instagram_handle: "instagram_handle",
              profile_url: "/placeholder.png",
            },
            {
              name: ".......",

              instagram_handle: "instagram_handle",
              profile_url: "/placeholder.png",
            },
            {
              name: ".......",

              instagram_handle: "instagram_handle",
              profile_url: "/placeholder.png",
            },
            {
              name: ".......",

              instagram_handle: "instagram_handle",
              profile_url: "/placeholder.png",
            },
            {
              name: ".......",

              instagram_handle: "instagram_handle",
              profile_url: "/placeholder.png",
            },
            {
              name: ".......",

              instagram_handle: "instagram_handle",
              profile_url: "/placeholder.png",
            },
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Members;
