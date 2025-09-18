import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { useServices } from "@/hooks/useServices";
import Meta from "@/meta/meta";
import { useEffect, useState } from "react";

function Blogs() {
  const [blogsList, setBlogsList] = useState<Array<any>>();
  const { getBlogList } = useServices();

  useEffect(() => {
    getBlogList().then((response) => {
      setBlogsList(response);
    });
  }, []);

  return (
    <div className="container mx-auto">
      <Meta title="Blogs" favicon="/favicon-home.ico" />
      <Navbar />
      <PageHeader heading="Blogs" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 mb-10">
        {blogsList?.map((i) => (
          // <Link key={i} href={"blog-view"}>
          <div className="p-2" key={i?.id}>
            <div className="card bg-base-100 rounded-none shadow-xl">
              <figure>
                <img src={i?.coverImage?.url} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{i?.blogName}</h2>
                <p>By {i?.author} </p>
              </div>
            </div>
          </div>
          // </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;
