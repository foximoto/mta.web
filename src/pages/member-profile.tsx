/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function MemberProfile() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div
        className="hero h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/cXQJcM0S/Whats-App-Image-2025-02-27-at-12-33-12-AM.jpg)",
        }}
      />
      <div className="flex justify-center items-center">
        <img
          alt=""
          src="/vapavi.jpeg"
          className="avatar w-60 h-60 rounded-full mt-[-120px] border-2 border-white object-cover "
        />
      </div>
      <div className="text-3xl font-semibold text-center mt-6">VEPAVI</div>
      <a href="https://www.instagram.com/vepavicalicutchoppers/">
        <div className="flex items-center justify-center mt-2">
          <img src="/icons/instagram.svg" className="w-4 h-4" alt="" />
          <div className="text-xs">vepavicalicutchoppers</div>
        </div>
      </a>
      <div className="w-full md:w-2/3 mx-auto  my-10">
        <div className="px-4 md:col-span-2">
          <div className="text-xl leading-relaxed">
            Vijeesh, affectionately called Vepavi, by his friends, got his first
            adrenaline rush by speed on his bicycle with stabilizers .Since his
            childhood days he found his ultimate thrill in speed. It started
            with small bicycles, and with age graduated to motorcycles. He
            waited in anticipation for a driving license till the legal age of
            18. His father gifted him his first bike – Yezdi Roadking,
            propelling his passion for long distance rides. Since then, he has
            ridden on his bike to 28 states and covered more than 8 lakh kms,
            and still counting! <br /> An avid biker, Vepavi has travelled
            across the length and breadth of India from past two decades, met
            thousands of people, braved dangerous highways and extreme weather.
            All these have experiences have contributed in shaping his dynamic
            and versatile personality and career choices. Academically, he
            completed Diploma in Automobile Engineering course,specialisation in
            CNC/CAD/CAM and spent a good part of his life in manufacturing
            sector across South India. He worked as Regional Rider Manager in
            Bajaj Auto Ltd, Regional Office, Cochin.With his wealth of
            experience and a passion for challenging rides, Vepavi is
            well-equipped to tackle future enthusiastic and demanding journeys.
          </div>

          <div className="text-3xl uppercase font-semibold mt-6">
            Achievements
          </div>

          <ul className="list-disc list-outside mt-4 text-xl px-3">
            <li className="mb-1">
              He conducted 3 India Book of Records and 1 Asia Book of Records
              rides for Motorcycle Tourers Association.
            </li>
            <li className="mb-1">
              He organized more than 375+ Dominar/Avenger/Pulsar Rides for Bajaj
              Auto Ltd and covered more than 1.5 Lakhs Kilometers (2017 -2019).
            </li>
            <li className="mb-1">
              #16 Ladakh Rides (Including #4 K2K and #1  Four Corners of India,
              2013 -2019)
            </li>
            <li className="mb-1">
              #4 Spiti Valley Rides (Pangi, Lahaul & Spiti, 2014,2015,2016 &
              2019)
            </li>
            <li className="mb-1">
              #7 Iron Butt / LDR Rides  (# 5 Saddle Sore 1000 , #2 Bun Burner
              1500,-2015,2016-2017 & 2019)
            </li>
            <li className="mb-1">#3 Northeast Rides (2014,2016 & 2019)</li>
            <li className="mb-1">
              Sunset to Sunrise Ride ( Koteswar to Kibitoo - 2014 )
            </li>
            <li className="mb-1">Golden Quatrilatral ride (2017)</li>
            <li className="mb-1">#2 Nepal & Bhutan Rides (2015 & 2016)</li>
            <li className="mb-1">
              In 2015, he worked as Lead Rider for “Trans-Himalaya” organised by
              a UK   based motorcycle touring company, ‘Pure Bike Tours’. As a
              part of this job, he rode through Ladakh 10 times leading various
              international rider groups.
            </li>
            <li className="mb-1">
              He also led “KTM Orange Tour 2015 & 2016” organised by KTM
              Showroom West Hill, Calicut.
            </li>
            <li className="mb-1">
              In 2013, he rode the route
              Calicut–Kanyakumari–Kashmir-Kanyakumari- Calicut on his Yezdi
              Monarch. The main aim of the ride was to participate in the
              “Kargil Vijay Divas” celebration, and to spread its importance and
              make it remember by all the Indians. Vepavi organised and
              conducted “Spice Trail”, All Kerala Jawa Yezdi Owners & Riders
              Meeting 2013 & 2014.
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MemberProfile;
