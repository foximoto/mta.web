/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { useServices } from "@/hooks/useServices";
import Meta from "@/meta/meta";
import { eventsDataType } from "@/types/service";
import Link from "next/link";
import { useEffect, useState } from "react";

function Events() {
  const [eventList, setEventList] = useState<Array<eventsDataType>>();
  const { getEventsList } = useServices();

  useEffect(() => {
    getEventsList().then((response) => {
      setEventList(response);
    });
  }, []);
  return (
    <div className="container mx-auto">
      <Meta title="Events" favicon="/favicon-home.ico" />
      <Navbar />
      <PageHeader heading="Events" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-10">
        {[...(eventList ?? [])].reverse().map((i) => (
          <Link href={`/event/${i?.slug}`} key={i.eventName}>
            <div className="cursor-pointer">
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
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Events;
