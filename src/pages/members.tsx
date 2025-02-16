import Footer from "@/components/Footer";
import JoinMta from "@/components/JoinMta";
import MemberShipRow from "@/components/MemberShipRow";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import React from "react";

function Members() {
  return (
    <div className="container mx-auto ">
      <Navbar />
      <PageHeader heading="Members" />
      <MemberShipRow heading="Core Team" />
      <MemberShipRow heading="Executive Members" />
      <MemberShipRow heading="Members" />
      <JoinMta />
      <Footer />
    </div>
  );
}

export default Members;
