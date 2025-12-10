import Gallery from "@/components/gallery";
import JoinMta from "@/components/JoinMta";
import Sponsors from "@/components/Sponsors";
import Spotlight from "@/components/Spotlight";
import Meta from "@/meta/meta";

function Home() {
  return (
    <>
      <Meta title="Home Page" favicon="/favicon.ico" />
      <div className="w-screen relative left-1/2 -translate-x-1/2">
        <Spotlight />
      </div>
      <div className="container mx-auto">
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
        <Sponsors />
      </div>
    </>
  );
}

export default Home;
