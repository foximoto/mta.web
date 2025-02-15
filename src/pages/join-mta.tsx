import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import React from "react";

function JoinMta() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <PageHeader heading="Join MTA" />
      <div className="w-2/3 mx-auto">
        Hello, <br /> Thank you for your interest in joining the Motorcycle
        Tourers Association. First, it should be known that we are NOT a
        motorcycle club (M/C) and we have no desire to become one. We are a
        Tourers Association that happens to enjoy riding motorcycles, and ride
        we do! We ride not only to support our group but to assist other
        organization. <br /> <br /> If you are here for the sole reason of
        supporting motorcycle tourers then this is your association! We are
        looking for active participants in supporting rider's issues, not patch
        hunters that do not believe in our mission.
        <br /> <br />
        <b>Please take time to read the MTA's Rules.</b> <br />
        <div className="text-3xl font-semibold mt-6">Rules</div>
        <ol className="list-decimal list-inside ">
          <li>
            It doesn’t matter whether you’re male or female.But you got to have
            the passion traveling on Motorcycle.
          </li>
          <li>You should be above 21 years of age.</li>
          <li>You should have minimum 2 years riding experience.</li>
          <li>
            You should have a valid Driving License which has not expired.{" "}
          </li>
          <li>
            It doesn’t matter whether you’re male or female.But you got to have
            the passion traveling on Motorcycle. should have a registered road
            legal motorcycle.
          </li>
          <li>
            You should have valid Motorcycle Insurance and Emission Certificate.
          </li>
          <li> You should have valid PERSONAL ACCIDENT INSURANCE POLICY. </li>
          <li>
            Doesn't encourage any kind of racing, stunts, or rash driving.MTA's
            objective is to promote safe motorcycle riding.
          </li>
          <li>
            Consumption of Alcohol or any Intoxicating substance are not allowed
            in ANY ride of Motorcycle Tourers Association.
          </li>
        </ol>
        <div className="text-3xl font-semibold mt-6">Documents</div>
        <ol className="list-decimal list-inside ">
          <li>Original & Valid Driving Licence.</li>
          <li>Original Motorcycle Registration Certificate.</li>
          <li>Motorcycle Insurance Policy.</li>
          <li>Tax Receipt.</li>
          <li>Emission Certificate.</li>
          <li>Personal Accident Insurance Policy.</li>
        </ol>
        <div className="text-3xl font-semibold mt-6">Riding Gears</div>
        <ol className="list-decimal list-inside ">
          <li>Protective Riding Jacket.</li>
          <li>Full Face ISI / DOT / ECE Certified Helmet.</li>
          <li>Protective Riding Gloves.</li>
          <li>Riding Boots / High Ankle Boots.</li>
          <li>Riding Pant / Thick Denim With Kneepad.</li>
        </ol>
        <div className="mt-6">Be a Motorcycle Tourer Not Just A Rider!!</div>
        <div>
          <div className="text-3xl font-semibold mt-6">Application Form</div>
          <label className="input input-bordered flex items-center gap-2 mt-4">
            Name
            <input type="text" className="grow" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-4">
            Contact Number
            <input type="text" className="grow" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-4">
            Email ID
            <input type="email" className="grow" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-4">
            Instagram Username
            <input type="text" className="grow" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-4">
            Vehicle Make and Model
            <input type="text" className="grow" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-4">
            Vehicle Registration Number
            <input type="text" className="grow" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-4">
            License Number
            <input type="text" className="grow" />
          </label>
          <button className="btn my-6 w-full">Submit Application</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default JoinMta;
