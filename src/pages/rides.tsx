/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import PageHeader from "@/components/PageHeader";
import { supabaseClient } from "@/config/supabase";
import Meta from "@/meta/meta";
import { rideListType } from "@/types/service";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Rides() {
  const [rideList, setRideList] = useState<rideListType[]>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let { data: mta_rides, error } = await supabaseClient
      .from("mta_rides")
      .select("slug, ride_name, ride_logo, ride_type")
      .eq("visibility_status", "Published");

    if (error?.code) {
      toast.error("Something went wrong. Please try again later.");
    }

    setRideList(mta_rides as rideListType[]);
  };

  return (
    <div className="container mx-auto">
      <Meta title="Rides" favicon="/favicon.ico" />

      <PageHeader heading="Endurance Rides" />
      <div className="py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {rideList
            ?.filter((obj) => obj.ride_type === "Endurance")
            .map((obj) => {
              return (
                <Link
                  href={"/rides/" + obj.slug}
                  key={obj.slug}
                  className="shrink-0"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={obj?.ride_logo}
                      alt=""
                      className="w-40 h-40 object-cover"
                    />
                    <div className="text-center mt-2">{obj?.ride_name}</div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
      <div className="h-10" />
      <PageHeader heading="Destination Rides" />
      <div className="py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {" "}
          {rideList
            ?.filter((obj) => obj.ride_type === "Destination")
            .map((obj) => {
              return (
                <Link
                  href={"/rides/" + obj.slug}
                  key={obj.slug}
                  className="shrink-0"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={obj?.ride_logo}
                      alt=""
                      className="w-40 h-40 object-cover"
                    />
                    <div className="text-center mt-2">{obj?.ride_name}</div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
      <div className="h-20" />
    </div>
  );
}

export default Rides;
