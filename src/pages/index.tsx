import Gallery from "@/components/gallery";
import JoinMtaHome from "@/components/JoinMtaHome";
import Partners from "@/components/Partners";
import Spotlight from "@/components/Spotlight";
import WhoWeAre from "@/components/WhoWeAre";
import Meta from "@/meta/meta";

function Home() {
  return (
    <>
      <Meta title="Home Page" favicon="/favicon.ico" />
      <div className="w-screen relative left-1/2 -translate-x-1/2">
        <Spotlight />
      </div>
      <WhoWeAre />
      <Partners />
      <JoinMtaHome />
    </>
  );
}

export default Home;
