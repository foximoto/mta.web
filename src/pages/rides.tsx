/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import PageHeader from "@/components/PageHeader";
import { supabaseClient } from "@/config/supabase";
import Meta from "@/meta/meta";
import { rideListType } from "@/types/service";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Rides() {
  const [rideList, setRideList] = useState<rideListType[]>();
  const [selectedRideType, setSelectedRideType] = useState<
    "All" | "Endurance" | "Destination"
  >("All");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let { data: mta_rides, error } = await supabaseClient
      .from("mta_rides")
      .select("slug, ride_name, ride_logo, ride_type")
      .eq("visibility_status", "Published")
      .eq("isPublishable", true);

    if (error?.code) {
      toast.error("Something went wrong. Please try again later.");
    }

    setRideList(mta_rides as rideListType[]);
  };

  return (
    <div>
      <Meta title="Rides" favicon="/favicon.ico" />
      <PageHeader
        headingFirst="Rides"
        headingSecond="By MTA"
        description="Epic journeys across India's most challenging terrains"
      />
      <div className="py-10 bg-[#121212]">
        <div className="container mx-auto flex items-center">
          <div className=" font-semibold text-white mr-4">Filter by type:</div>
          {["All", "Endurance", "Destination"].map((type) => {
            return (
              <button
                key={type}
                className={`text-white mr-4 bg-[#2a2a2a] px-4 py-2 ${
                  type === selectedRideType ? "bg-red-700" : ""
                }`}
                onClick={() => setSelectedRideType(type as any)}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto py-20">
        {/* <PageHeader heading="Endurance Rides" /> */}
        <div className="py-0">
          <div className="flex flex-row flex-wrap gap-6 justify-center">
            {rideList?.map((obj) => {
              return (
                <Link
                  href={"/rides/" + obj.slug}
                  key={obj.slug}
                  className="shrink-0"
                >
                  <div className="w-[400px] bg-black  overflow-hidden  transition-all duration-300">
                    {/* Image Section */}
                    <div className="relative h-56 w-full">
                      <img
                        src={
                          "https://images.unsplash.com/photo-1690540293148-affdded8f45a?q=80&w=2296&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                        alt={obj.ride_name}
                        className="w-full h-full object-cover"
                      />
                      <img
                        src={obj.ride_logo}
                        className="absolute w-20 h-20 top-3 right-3 object-cover "
                        alt=""
                      />
                    </div>

                    {/* Content Section */}
                    <div className="bg-gradient-to-b from-zinc-900 to-black px-6 py-5 text-white">
                      <h3 className="text-xl font-bold text-red-500">
                        {obj.ride_name}
                      </h3>

                      <p className="text-sm text-gray-300 mt-2 line-clamp-2">
                        Navigate the golden dunes and ancient forts of
                        Rajasthan's desert terrain.
                      </p>

                      {/* Meta Grid */}
                      <div className="grid grid-cols-2 gap-y-4 gap-x-6 mt-5 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-red-500">📅</span>
                          <span>Any time</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-red-500">📍</span>
                          <span>Not Applicable</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-red-500">🏍</span>
                          <span>Not Applicable</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3  flex items-center justify-center gap-2 transition">
                        View Details <MoveRight />
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-20" />
    </div>
  );
}

export default Rides;
