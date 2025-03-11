import CommunitySpotlight from "@/components/CommunitySpotlight";
import Footer from "@/components/Footer";
import JoinMta from "@/components/JoinMta";
import Spotlight from "@/components/Spotlight";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="container mx-auto ">
      <Navbar />
      <Spotlight />
      <JoinMta />
      <CommunitySpotlight />
      <Footer />
    </div>
  );
}

export default Home;
