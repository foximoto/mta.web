import Footer from "@/components/Footer";
import JoinMta from "@/components/JoinMta";
import Spotlight from "@/components/Spotlight";
import Navbar from "../components/Navbar";
import Meta from "@/meta/meta";
import Gallery from "@/components/gallery";
import Partners from "@/components/Partners";
import { useEffect } from "react";
import useFetchContent from "@/hooks/useFetchContent";

function Home() {
  const { fetchPartners } = useFetchContent();

  useEffect(() => {
    fetchPartners();
  }, []);

  return (
    <div className="container mx-auto">
      <Meta title="Home Page" favicon="/favicon-home.ico" />
      <Navbar />
      <div className="w-screen relative left-1/2 -translate-x-1/2">
        <Spotlight />
      </div>
      <div className="flex flex-col gap-2 mb-4 mt-4">
        <Gallery
          leftImage="/images/asiabooks.jpeg"
          topRightImage="/images/r2r1.jpeg"
          bottomRightImage="/images/r2r3.jpeg"
          swap={false}
        />
        <Gallery
          leftImage="/images/ironrider.jpeg"
          topRightImage="/images/r2r2.jpg"
          bottomRightImage="/images/motocamp.jpg"
          swap={true}
        />
      </div>
      <JoinMta />
      <Partners />
      {/* <CommunitySpotlight /> */}

      <Footer />
    </div>
  );
}

export default Home;
