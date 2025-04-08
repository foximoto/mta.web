import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import React from "react";

function ContactUs() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <PageHeader heading="Contact Us" />
      <div className="grid md:grid-cols-2 px-2 py-10">
        <div className="text-2xl leading-relaxed">
          Motorcycle Tourers Association <br /> 9/953D, Sajas Sameer Building{" "}
          <br />
          K.P Kesava Menon Road <br /> Poovalappu <br /> Calicut, Kerala <br />
          PIN:673001
        </div>
        <div className="mt-10 md:mt-0">
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input type="text" className="grow" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-4">
            Email
            <input type="email" className="grow" />
          </label>
          <label className="form-control mt-4">
            {/* <div className="label">
              <span className="label-text text-base">Message</span>
            </div> */}
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Enter your message"
            ></textarea>
          </label>
          <button className="btn btn-primary  w-full mt-4">Sent</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
