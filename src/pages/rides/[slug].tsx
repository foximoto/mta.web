/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { useServices } from "@/hooks/useServices";
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
  }, []);

  console.log(router.query.slug);

  return (
    <div className="container mx-auto ">
      <Navbar />
      {rideData && (
        <div className="w-2/3 mx-auto pb-20">
          <PageHeader heading={rideData?.rideName} />
          <Markdown>{rideData?.details}</Markdown>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default RideDetail;
