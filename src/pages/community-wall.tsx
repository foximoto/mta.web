/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { useServices } from "@/hooks/useServices";
import Meta from "@/meta/meta";
import { hallOfFamesType } from "@/types/service";
import { useEffect, useState } from "react";

const CommunityWall = () => {
  const [hallOfFames, setHallOfFames] = useState<Array<hallOfFamesType>>();

  const { getHallOfFameList } = useServices();

  useEffect(() => {
    getHallOfFameList().then((response) => {
      setHallOfFames(response);
    });
  }, []);

  return (
    <div className="container mx-auto">
      <Meta title="Community Wall" favicon="/favicon-home.ico" />
      <Navbar />
      <PageHeader heading="Community Wall" />
      <div className="flex space-x-4 md:space-x-0 md:grid md:grid-cols-4 lg:grid-cols-5 md:gap-4 mb-4">
        {hallOfFames?.map((i) => (
          <div
            key={i.id}
            className="w-[250px] max-h-[600px] md:w-full flex-shrink-0"
          >
            <div className="card rounded-none bg-base-100 shadow-lg">
              <figure>
                <img
                  className="w-full h-[300px] object-cover"
                  src={i?.coverImage?.url}
                  alt="hall of fame"
                />
              </figure>
              <div className="card-body h-[200px]">
                <h3 className="card-title">{i?.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CommunityWall;
