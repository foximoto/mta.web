/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { useServices } from "@/hooks/useServices";
import Meta from "@/meta/meta";
import { rideDetailsType } from "@/types/service";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

function RideDetail() {
  const [rideData, setRideData] = useState<rideDetailsType>();
  const router = useRouter();

  const { getRideDetails } = useServices();

  useEffect(() => {
    if (router?.query?.slug) {
      const slug = Array.isArray(router.query.slug)
        ? router.query.slug[0]
        : router.query.slug;
      getRideDetails(slug).then((response) => {
        setRideData(response?.data?.rides);
      });
    }
  }, [router.isReady, router.query.slug]);

  return (
    <div className="container mx-auto">
      <Meta title="Rides" favicon="/favicon-home.ico" />
      <Navbar />
      {rideData && (
        <div className="w-[90%] md:w-[90%] lg:w-2/3 mx-auto pb-10">
          <PageHeader heading={rideData?.rideName} />
          <div className="markdown">
            <Markdown>{rideData?.details}</Markdown>
          </div>
        </div>
      )}
      <div className="w-[90%] md:w-[90%] lg:w-2/3 mx-auto pb-10">
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
            {rideData?.completedRiders?.map((obj, index) => (
              <tr className="hover:bg-gray-50" key={obj.name + index}>
                <td className="px-4 py-2">{obj?.name}</td>
                <td className="px-4 py-2">{obj?.year}</td>
                <td className="px-4 py-2">{obj?.location}</td>
                <td className="px-4 py-2">{obj?.motorcycle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default RideDetail;
