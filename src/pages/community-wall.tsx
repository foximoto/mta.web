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
  const [selectedItem, setSelectedItem] = useState<hallOfFamesType>();

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
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <img src={selectedItem?.coverImage?.url} alt="Shoes" />
          <h3 className="font-bold text-2xl mt-4">{selectedItem?.title}</h3>
          <p className="py-4">{selectedItem?.description}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="flex flex-wrap space-x-4 md:space-x-0 md:grid md:grid-cols-4 lg:grid-cols-5 md:gap-4 mb-4">
        {[...(hallOfFames ?? [])].reverse().map((i) => (
          <div
            key={i.id}
            className=" max-h-[600px] w-full flex-shrink-0 cursor-pointer"
            onClick={() => {
              (
                document.querySelector("#my_modal_5") as HTMLDialogElement
              )?.showModal();
              setSelectedItem(i);
            }}
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
