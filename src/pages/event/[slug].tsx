/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import PageHeader from "@/components/PageHeader";
import { supabaseClient } from "@/config/supabase";
import { useServices } from "@/hooks/useServices";
import Meta from "@/meta/meta";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Markdown from "react-markdown";

function CommunityWallItems() {
  const router = useRouter();

  const [data, setData] = useState<{
    cover_image: string;
    created_at: string;
    date: string;
    description: string;
    event_name: string;
    id: number;
    slug: string;
  }>();

  useEffect(() => {
    if (router?.query?.slug) {
      const slug = Array.isArray(router.query.slug)
        ? router.query.slug[0]
        : router.query.slug;
      getData(slug);
    }
  }, [router.isReady, router.query.slug]);

  const getData = async (slug: string) => {
    const { data, error } = await supabaseClient
      .from("events")
      .select("*")
      .eq("slug", slug);

    data && setData(data[0]);

    if (error?.code) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto pb-10">
      <Meta title="Rides" favicon="/favicon.ico" />
      <PageHeader
        headingFirst={
          data?.event_name
            ?.split(" ")
            .slice(0, data?.event_name?.split(" ").length - 1)
            .join(" ") || ""
        }
        headingSecond={
          data?.event_name?.split(" ")[
            data?.event_name?.split(" ").length - 1
          ] || ""
        }
        description=""
      />
      <div className="flex py-20">
        <img
          src={data?.cover_image}
          alt=""
          className="w-1/5 aspect-square rounded-md object-cover float-left mx-4"
        />
        <div className="markdown">
          <Markdown>{data?.description}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default CommunityWallItems;
