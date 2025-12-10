import PageHeader from "@/components/PageHeader";
import Meta from "@/meta/meta";
import Link from "next/link";

function Sponsors() {
  const sponsorList = [
    {
      logo: "logos/gulf.png",
      url: "https://www.gulfoilltd.com",
    },
    {
      logo: "logos/rynox.png",
      url: "http://rynoxgear.com",
    },
  ];
  return (
    <div className="container mx-auto">
      <Meta title="Home Page" favicon="/favicon.ico" />

      <PageHeader heading="Our Sponsors" />
      <div className="flex flex-row gap-8 items-center justify-center flex-wrap">
        {sponsorList.map((i) => (
          <Link key={i?.logo} href={i?.url}>
            <div
              className="my-4 w-40 h-40 bg-no-repeat  bg-center bg-contain"
              style={{ backgroundImage: `url(${i?.logo})` }}
            ></div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
