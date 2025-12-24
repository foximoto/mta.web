/* eslint-disable react-hooks/exhaustive-deps */
import PageHeader from "@/components/PageHeader";
import { supabaseClient } from "@/config/supabase";
import Meta from "@/meta/meta";
import { rideDetailsType } from "@/types/service";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

function RideDetail() {
  const [rideData, setRideData] = useState<rideDetailsType>();
  const [riderDetails, setRiderDetails] = useState<
    {
      bike: string;
      home_town: string;
      member: string;
      year: number;
    }[]
  >();
  const router = useRouter();

  useEffect(() => {
    if (router?.query?.slug) {
      const slug = Array.isArray(router.query.slug)
        ? router.query.slug[0]
        : router.query.slug;

      getData(slug);
      getRiderDetails(slug);
    }
  }, [router.isReady, router.query.slug]);

  const getData = async (slug: string) => {
    const { data, error } = await supabaseClient
      .from("mta_rides")
      .select("ride_name, description")
      .eq("slug", slug);

    setRideData(data?.[0]);
  };

  const getRiderDetails = async (slug: string) => {
    let { data, error } = await supabaseClient
      .from("achievements")
      .select("bike,home_town,member,year")
      .eq("ride", slug);

    data && setRiderDetails(data);
  };

  return (
    <div className="container mx-auto">
      <Meta title="Rides" favicon="/favicon.ico" />

      {rideData && (
        <div className="w-[90%] md:w-[90%] lg:w-2/3 mx-auto pb-10">
          {/* <PageHeader heading={rideData?.ride_name} /> */}
          <div className="markdown">
            <Markdown>{rideData?.description}</Markdown>
          </div>
        </div>
      )}
      <div className="w-[90%] md:w-[90%] lg:w-2/3 mx-auto pb-10 overflow-scroll">
        <div className="text-3xl font-semibold">Completed Riders</div>
        <table className="table-auto w-full border-collapse border border-gray-300 mt-4 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Rider&apos;s Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Year
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Hometown
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Bike Ridden
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {riderDetails?.map((obj, index) => (
              <tr className="hover:bg-gray-50" key={obj.member + index}>
                <td className="px-4 py-2">{obj?.member}</td>
                <td className="px-4 py-2">{obj?.year}</td>
                <td className="px-4 py-2">{obj?.home_town}</td>
                <td className="px-4 py-2">{obj?.bike}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RideDetail;
