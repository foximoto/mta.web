/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { useServices } from "@/hooks/useServices";
import Meta from "@/meta/meta";
import { rideListType } from "@/types/service";
import Link from "next/link";
import { useEffect, useState } from "react";

function Rides() {
  const [rideList, setRideList] = useState<rideListType>();
  const { getRideList } = useServices();

  useEffect(() => {
    getRideList().then((response) => {
      setRideList(response);
    });
  }, []);

  return (
    <div className="container mx-auto">
      <Meta title="Rides" favicon="/favicon-home.ico" />
      <Navbar />
      <PageHeader heading="Rides" />

      <div className="py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {" "}
          {[...(rideList?.data?.ridesList ?? [])].reverse().map((obj) => {
            return (
              <Link
                href={"/rides/" + obj.slug}
                key={obj.rideName}
                className="shrink-0"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={obj?.rideLogo?.url}
                    alt=""
                    className="w-40 h-40 rounded-full object-cover"
                  />
                  <div className="text-center mt-2">{obj?.rideName}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="h-20" />
      <Footer />
    </div>
  );
}

export default Rides;
