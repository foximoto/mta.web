import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { accountTabItems } from "@/constants/tabItem";
import Meta from "@/meta/meta";
import React from "react";

const Account = () => {
  return (
    <div className="container mx-auto">
      <Meta title="About us" favicon="/favicon.ico" />
      <Navbar />
      <PageHeader heading="Account" />
      <LoginForm />
      <div>
        <div role="tablist" className="tabs tabs-box">
          {accountTabItems.map((item) => (
            <a key={item} role="tab" className="tab">
              {item}
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
