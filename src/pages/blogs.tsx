/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import PageHeader from "@/components/PageHeader";
import { useServices } from "@/hooks/useServices";
import Meta from "@/meta/meta";
import Link from "next/link";
import { useEffect, useState } from "react";

function Blogs() {
  const [blogsList, setBlogsList] = useState<Array<any>>();
  const { getBlogList } = useServices();
  const [selectedRideType, setSelectedRideType] = useState<
    "All" | "Endurance" | "Destination"
  >("All");

  useEffect(() => {
    getBlogList().then((response) => {
      setBlogsList(response?.reverse());
    });
  }, []);

  return (
    <div>
      <Meta title="Blogs" favicon="/favicon.ico" />

      <PageHeader
        headingFirst="Blogs & "
        headingSecond="Resources"
        description="Expert touring tips, safety guides, and rider knowledge"
      />
      <div className="py-10 bg-[#121212]">
        <div className="container mx-auto flex items-center">
          <div className=" font-semibold text-white mr-4">
            Filter by category:
          </div>
          {["All", "Safety Tips", "Ride Stories", "Bike Maintenance"].map(
            (type) => {
              return (
                <button
                  key={type}
                  className={`text-white mr-4 bg-[#2a2a2a] px-4 py-2 ${
                    type === selectedRideType ? "bg-red-700" : ""
                  }`}
                  onClick={() => setSelectedRideType(type as any)}
                >
                  {type}
                </button>
              );
            }
          )}
        </div>
      </div>
      <div className="container mx-auto py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 mb-10">
          {blogsList?.map((i) => (
            <Link key={i} href={`/blogs/${i?.slug}`}>
              <div className="p-2" key={i?.id}>
                <div className="card bg-[#121212] rounded-none shadow-xl">
                  <figure>
                    <img
                      src={i?.coverImage?.url}
                      alt="Shoes"
                      className="h-[300px] w-full object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{i?.blogName}</h2>
                    <div className="flex items-center gap-2">
                      {i?.authorDetails?.profileImage?.url && (
                        <img
                          src={i?.authorDetails?.profileImage?.url}
                          alt={i?.authorDetails?.name || "Author"}
                          className="w-8 h-8 rounded-full"
                        />
                      )}
                      <span className="text-sm">{i?.authorDetails?.name}</span>
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

export default Blogs;
