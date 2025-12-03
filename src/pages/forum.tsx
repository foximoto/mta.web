import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import toast from "react-hot-toast";

const Forum = () => {
  return (
    <div>
      <Navbar />
      <PageHeader heading="MTA Forum" />
      <div className="container mx-auto pb-20">
        <div className="flex justify-end">
          <button
            className="btn btn-primary"
            onClick={() =>
              toast.error(
                "You are not authorized to create a post. Please log in to continue."
              )
            }
          >
            Create New Forum Topic
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Forum;
