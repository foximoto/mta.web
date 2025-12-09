/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { useServices } from "@/hooks/useServices";
import Meta from "@/meta/meta";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";

function CommunityWallItems() {
  const router = useRouter();
  const { getSingleCommunityWallPost } = useServices();

  const [data, setData] = useState<any>();

  useEffect(() => {
    if (router?.query?.slug) {
      const slug = Array.isArray(router.query.slug)
        ? router.query.slug[0]
        : router.query.slug;
      getSingleCommunityWallPost(slug).then((response) => {
        setData(response?.hallOfFames[0]);
      });
    }
  }, [router.isReady, router.query.slug]);

  return (
    <div className="container mx-auto">
      <Meta title="Rides" favicon="/favicon.ico" />
      <Navbar />
      <PageHeader heading={data?.title} />
      <div>
        <img
          src={data?.coverImage?.url}
          alt=""
          className="w-1/3 aspect-square rounded-md object-cover float-left mx-4"
        />
        <div className="markdown">
          <Markdown>{data?.description}</Markdown>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CommunityWallItems;
