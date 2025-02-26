import Footer from "@/components/Footer";
import MemberShipRow from "@/components/MemberShipRow";
import Navbar from "@/components/Navbar";

function Members() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="p-2">
        <div className="text-4xl font-semibold my-20 text-center">
          BOARD OF DIRECTORS
        </div>
        <MemberShipRow
          data={[
            {
              name: "JACKSON FERNANDEZ",
              designation: "PRESIDENT",
              instagram_handle: "jacksonfernandez58",
              profile_url: "/achayan.png",
            },
            {
              name: "VEPAVI",
              designation: "FOUNDER | SECRETARY",
              instagram_handle: "vepavicalicutchoppers",
              profile_url: "/vapavi.png",
            },
            {
              name: "SADIQ",
              designation: "TREASURER",
              instagram_handle: "sadiq_solorider",
              profile_url: "/sadiq.png",
            },
          ]}
        />
        <MemberShipRow
          data={[
            {
              name: "ARAVIND",
              designation: "VICE PRESIDENT",
              instagram_handle: "iam_wanderlust98",
              profile_url: "/aravind.png",
            },
            {
              name: "SAMAR",
              designation: "JOINT SECRETARY",
              instagram_handle: "storm_shadow72",
              profile_url: "/samar.png",
            },
            {
              name: "VIVEK",
              designation: "DIRECTOR",
              instagram_handle: "vivek_wildrides",
              profile_url: "/vivek.png",
            },
          ]}
        />
        <MemberShipRow
          data={[
            {
              name: "ANJITH",
              designation: "DIRECTOR",
              instagram_handle: "rider_hulk_131",
              profile_url: "/anjith.png",
            },
            {
              name: "ANAND",
              designation: "DIRECTOR",
              instagram_handle: "driftking_kl01",
              profile_url: "/anand.png",
            },
            {
              name: ".......",
              designation: "DIRECTOR",
              instagram_handle: "instagram_handle",
              profile_url: "/placeholder.png",
            },
          ]}
        />

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
