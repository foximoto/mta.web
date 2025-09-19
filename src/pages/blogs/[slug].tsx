/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useServices } from "@/hooks/useServices";
import Meta from "@/meta/meta";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

function BlogView() {
  const router = useRouter();
  const { getSingleBlog } = useServices();

  const [blogs, setBlogs] = useState<any>();

  useEffect(() => {
    if (!router.isReady) return;

    const slug = Array.isArray(router.query.slug)
      ? router.query.slug[0]
      : router.query.slug;

    if (slug) {
      getSingleBlog(slug).then((response) => {
        setBlogs(response?.data?.blogs);
      });
    }
  }, [router.isReady, router.query.slug]);

  return (
    <div className="container mx-auto">
      <Meta title="Blogs" favicon="/favicon-home.ico" />
      <Navbar />
      <div className=" px-4 mx-auto py-20">
        <img
          src={blogs?.coverImage?.url}
          alt=""
          className="w-full h-[400px] object-cover"
        />
        <div className="text-4xl font-semibold mt-6">{blogs?.blogName}</div>
        <br />
        <div className="markdown">
          <Markdown>{blogs?.content}</Markdown>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogView;
