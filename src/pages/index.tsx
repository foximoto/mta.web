import CommunitySpotlight from "@/components/CommunitySpotlight";
import Footer from "@/components/Footer";
import JoinMta from "@/components/JoinMta";
import Spotlight from "@/components/Spotlight";
import Navbar from "../components/Navbar";
import Meta from "@/meta/meta";
import Gallery from "@/components/gallery";

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
      <div className="flex flex-col gap-2 mb-4">
        <Gallery
          leftImage="https://images.pexels.com/photos/1133505/pexels-photo-1133505.jpeg"
          topRightImage="https://images.pexels.com/photos/1133505/pexels-photo-1133505.jpeg"
          bottomRightImage="https://images.pexels.com/photos/1133505/pexels-photo-1133505.jpeg"
          swap={false}
        />
        <Gallery
          leftImage="https://images.pexels.com/photos/1133505/pexels-photo-1133505.jpeg"
          topRightImage="https://images.pexels.com/photos/1133505/pexels-photo-1133505.jpeg"
          bottomRightImage="https://images.pexels.com/photos/1133505/pexels-photo-1133505.jpeg"
          swap={true}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
