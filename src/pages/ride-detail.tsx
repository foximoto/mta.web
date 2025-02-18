import Faq from "@/components/faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import React from "react";

function RideDetail() {
  return (
    <div className="container mx-auto ">
      <Navbar />
      <div className="w-2/3 mx-auto pb-20">
        <PageHeader heading="SPICE COAST CHALLENGE" />
        <div>
          The Motorcycle TourersAssociation’sThe Spice Coast Challenge -Tour of
          Honourride is a self-directed, a season long ride to MTA’s accredited
          memorials, monuments, heritage sites, forts and museum around the
          beautiful God’s Own Country. Beginning on 1stJanuary 2019, to ride as
          many MTA’s accredited locationsyou want, with any route you
          choose.This truly is one of the most exhilarating motorcycle
          challenges in the world! <br /> <br />
          The Spice Coast Challenge -Tour of Honouris designed by Long Distance
          Riders to appeal to novice riders and those with multiday experience
          and to score the most points in the calendar year.You can ride as many
          or as few kilometres as you wish.You will be ranked every month to see
          what place you are in.You may be happy to simply finish the event and
          gain Finisher Status. Or you may wish to test your abilities and aim
          for high place finish.Most points per month will also be recognized.
          We are not claiming to be the baddest or toughest riders in the world
          but as a group there are quite a lot of miles ridden in the year.{" "}
          <br /> <br /> Where you go to is entirely up to you. You can ride
          around in circles picking up bonuses nearby or you can go on an
          adventure to far flung corners of this wonderful region. We can’t
          promise you’ll find it easy at times, but we can promise you’ll have a
          fantastic time and you’ll certainly visit some weird and wonderful
          places along the way too. <br /> <br /> This isn’t race, as it’s all
          about planning an efficient route, collecting the evidence required
          and coming back safe and sound. The main emphasis fun on two wheels.
          There are four main challenges for you once the rally has started:
          solve the navigation puzzle, chose the best route for you, ride your
          plan and get to the points and reach safe home. <br /> <br />
          How to Score your point? Simple. For all locations take a picture of
          your motorcycle at the sign indicating the point. Post the picture to
          the group, name the point, give us the total points for the month and
          total points for the year with every post. For distance points provide
          a track either with the REVER app or Spot Walla or any tracking you
          may use. You can also take pictures of gas receipts and odometer. ONLY
          ONE POINT PER LOCATION.However, points found while on a scenic byway
          will count. All locations can only be counted once for the year.{" "}
          <br />
          <br /> The Spice Coast Challenge -Tour of Honournot only gives you the
          opportunity to explore this magnificent country on two wheels, but it
          also allows you to experience the Kerala’s culture first hand and
          explore destinations and routes that normal tourists don’t get to
          explore.
        </div>
        <div className="text-3xl font-semibold my-4">REQUIREMENTS</div>
        <ul className="list-disc list-inside">
          <li>Rider’s Passion.</li>
          <li>18 years of age and above.</li>
          <li>Minimum 1years riding experience.</li>
          <li>Valid riding License.</li>
          <li>Registered Motorcycle.</li>
          <li>Valid Motorcycle Insurance</li>
          <li>Emission Certificate.</li>
          <li>Non-refundable Rally Deposit ₹1750/-*</li>
        </ul>
        <div className="text-3xl font-semibold my-4">REGISTRATION</div>
        Register between January 1st2019 and June 31st2019. <br />
        <br />
        Registration will be available @MTA’s website after January 1st2019 and
        will remain open until June 31st2019.Registration is a two-part process,
        please respond to the email from MTA to complete the registration.{" "}
        <br />
        <br />
        Registration fee is ₹1750/- which includes Rally Flag, Decal, Awards,
        and postage. <br />
        <br />
        Please note: Rally Flag will be custom printed and mailed once the
        registration process completed. <br />
        <br />
        We invite you to check out this unique adventure and register to enjoy
        an unforgettable experience. <br />
        <br />
        <button className="btn mx-auto">Register Now</button>
        <Faq />
      </div>
      <Footer />
    </div>
  );
}

export default RideDetail;
