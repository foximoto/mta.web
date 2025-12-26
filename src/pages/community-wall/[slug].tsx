/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import PageHeader from "@/components/PageHeader";
import { supabaseClient } from "@/config/supabase";
import Meta from "@/meta/meta";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

function CommunityWallItems() {
  const router = useRouter();

  const [data, setData] = useState<any>();

  useEffect(() => {
    if (router?.query?.slug) {
      const slug = Array.isArray(router.query.slug)
        ? router.query.slug[0]
        : router.query.slug;

      getData(slug);
    }
  }, [router.isReady, router.query.slug]);

  const getData = async (slug: string) => {
    let { data: community_wall, error } = await supabaseClient
      .from("community_wall")
      .select("*")
      .eq("slug", slug);
    if (community_wall && community_wall.length > 0) {
      setData(community_wall[0]);
    }
  };

  return (
    <div className="container mx-auto">
      <Meta title="Rides" favicon="/favicon.ico" />
      <PageHeader
        headingFirst={
          data?.title
            ?.split(" ")
            .slice(0, data?.title?.split(" ").length - 1)
            .join(" ") || ""
        }
        headingSecond={
          data?.title?.split(" ")[data?.title?.split(" ").length - 1] || ""
        }
        description=""
      />
      <div className="py-20">
        <img
          src={data?.cover_image}
          alt=""
          className="w-1/3 aspect-square rounded-md object-cover float-left mx-4"
        />
        <div className="markdown">
          <Markdown>{data?.description}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default CommunityWallItems;
