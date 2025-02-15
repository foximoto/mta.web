import Footer from "@/components/Footer";
import MemberShipRow from "@/components/MemberShipRow";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import React from "react";

function Members() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <PageHeader heading="Members" />
      <MemberShipRow heading="Core Team" />
      <MemberShipRow heading="Executive Members" />
      <MemberShipRow heading="Members" />
      <Footer />
    </div>
  );
}

export default Members;
