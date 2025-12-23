/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import PageHeader from "@/components/PageHeader";
import { supabaseClient } from "@/config/supabase";
import { useServices } from "@/hooks/useServices";
import Meta from "@/meta/meta";
import { eventsDataType } from "@/types/service";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Events() {
  const [eventList, setEventList] = useState<Array<eventsDataType>>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let { data: events, error } = await supabaseClient
      .from("events")
      .select("cover_image,event_name,slug, date");

    if (error?.code) {
      toast.error("Something went wrong. Please try again later.");
    }

    setEventList(events as eventsDataType[]);
  };
  return (
    <div>
      <Meta title="Events" favicon="/favicon.ico" />

      <PageHeader
        headingFirst="Events By"
        headingSecond="MTA"
        description="MTA conduct events all over the year"
      />

      <div className="container mx-auto py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {[...(eventList ?? [])].reverse().map((i) => (
            <Link href={`/event/${i?.slug}`} key={i.slug}>
              <div className="cursor-pointer">
                <div className="p-2">
                  <div className="card bg-[#121212] rounded-none shadow-xl">
                    <figure>
                      <img src={i?.cover_image} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{i?.event_name}</h2>
                      <div>{i?.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
