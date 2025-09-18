/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { useServices } from "@/hooks/useServices";
import Meta from "@/meta/meta";
import { eventsDataType } from "@/types/service";
import { useEffect, useState } from "react";

function Events() {
  const [eventList, setEventList] = useState<Array<eventsDataType>>();
  const [selectedItem, setSelectedItem] = useState<eventsDataType>();
  const { getEventsList } = useServices();

  useEffect(() => {
    getEventsList().then((response) => {
      setEventList(response);
      console.log(response);
    });
  }, []);
  return (
    <div className="container mx-auto">
      <Meta title="Events" favicon="/favicon-home.ico" />
      <Navbar />
      <PageHeader heading="Events" />

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <img src={selectedItem?.coverImage?.url} alt="Shoes" />
          <h3 className="font-bold text-2xl mt-4">{selectedItem?.eventName}</h3>
          <div className="text-xs font-semibold">{selectedItem?.date}</div>
          <p className="py-4">{selectedItem?.description}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-10">
        {[...(eventList ?? [])].reverse().map((i) => (
          <div
            key={i.eventName}
            onClick={() => {
              (
                document.querySelector("#my_modal_5") as HTMLDialogElement
              )?.showModal();
              setSelectedItem(i);
            }}
            className="cursor-pointer"
            onKeyUp={() => {}}
            tabIndex={0}
            role="button"
          >
            <div className="p-2">
              <div className="card bg-base-100 rounded-none shadow-xl">
                <figure>
                  <img src={i?.coverImage?.url} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{i?.eventName}</h2>
                  <div>{i?.date}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Events;
