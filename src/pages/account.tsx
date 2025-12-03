import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import React from "react";

const Account = () => {
  return (
    <div>
      <Navbar />
      <PageHeader heading="Account" />
      <div className="container mx-auto pb-20">
        <div role="tablist" className="tabs tabs-lift">
          <a role="tab" className="tab tab-active">
            Rider Info
          </a>
          <a role="tab" className="tab ">
            Your Blogs
          </a>
          <a role="tab" className="tab ">
            Orders
          </a>
          <a role="tab" className="tab">
            Settings
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
