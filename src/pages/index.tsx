import React from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Spotlight from "@/components/Spotlight";
import JoinMta from "@/components/JoinMta";
import Sponsors from "@/components/Sponsors";
import CommunitySpotlight from "@/components/CommunitySpotlight";

function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />

      <Spotlight />
      <JoinMta />
      <CommunitySpotlight />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default Home;
