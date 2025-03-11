import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { useServices } from "@/hooks/useServices";
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
      <Navbar />
      <PageHeader heading="Rides" />

      <div className="py-10">
        <div className="overflow-x-auto md:overflow-hidden">
          <div className="flex flex-nowrap md:flex-wrap gap-6 w-max md:w-auto">
            {rideList?.data?.ridesList
              ?.sort((a, b) => a?.order > b?.order)
              .map((obj) => {
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
      </div>

      <Footer />
    </div>
  );
}

export default Rides;
