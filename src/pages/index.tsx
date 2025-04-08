import CommunitySpotlight from "@/components/CommunitySpotlight";
import Footer from "@/components/Footer";
import JoinMta from "@/components/JoinMta";
import Spotlight from "@/components/Spotlight";
import Navbar from "../components/Navbar";
import Meta from "@/meta/meta";

function Home() {
  return (
    <div className="container mx-auto">
      <Meta title="Home Page" favicon="/favicon-home.ico" />
      <Navbar />
      <div className="w-screen relative left-1/2 -translate-x-1/2">
        <Spotlight />
      </div>
      <JoinMta />
      <CommunitySpotlight />
      <Footer />
    </div>
  );
}

export default Home;
