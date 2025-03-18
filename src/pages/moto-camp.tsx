import Footer from "@/components/Footer";
import MotoCampSpotlight from "@/components/MotoCampSpotlight";
import Navbar from "@/components/Navbar";

function MotoCap() {
  return (
    <div className="container mx-auto">
      <Navbar />
      {/* <PageHeader heading="MOTO CAMP" /> */}

      <MotoCampSpotlight />

      <Footer />
    </div>
  );
}

export default MotoCap;
