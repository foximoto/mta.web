import JoinMta from "@/components/JoinMta";
import PageHeader from "@/components/PageHeader";
import Meta from "@/meta/meta";

function AboutUs() {
  return (
    <div>
      <Meta title="About us" favicon="/favicon.ico" />

      <PageHeader
        headingFirst="About"
        headingSecond="MTA"
        description="Building India's most disciplined and adventurous motorcycle touring community"
      />

      <section className="bg-[#121212] text-white py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-12">
            {/* Text Section */}
            <div className="md:flex-1">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Our Story
              </h2>

              <p className="text-base md:text-lg leading-relaxed md:leading-[30px] text-gray-200">
                The Motorcycle Tourer’s Association (MTA) was formally
                established on 21st June 2015 (World’s Motorcycle Day) in
                Calicut, Kerala with the support of fellow Long Distance Riders.
                The Motorcycle Tourer’s Association provides a meeting place for
                motorcycle touring enthusiasts and owners, riders, and admirers
                of all brands and models of motorcycles. This is a place to
                share ideas and information; to make friends and have fun in an
                atmosphere of mutual respect and civility.
                <br />
                <br />
                While the MTA is primarily dedicated to motorcycle tourers who
                are Real Riders and True Road Warriors with a passion for
                conquering unknown destinations, anyone is welcome. We define
                motorcycle touring very loosely—from short day rides to extreme
                long-distance endurance journeys.
                <br />
                <br />
                MTA also has a single focus and motto:{" "}
                <b>Ride Long and Ride Safe.</b> We promote responsible riding
                culture through shared knowledge from experienced riders and
                national motorcycle communities.
                <br />
                <br />
                The MTA Tour of Honour ride exists to recognize long-distance
                riders, promote travel and tourism, and support the riding
                community. Membership levels are elevated based on travel
                accomplishments and discipline on the road.
              </p>
            </div>

            {/* Image Section */}
            <div className="md:flex-1">
              <div className="h-[280px] sm:h-[360px] md:h-full overflow-hidden rounded-lg">
                <img
                  src="/images/motocamp.jpg"
                  alt="MTA Motocamp"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <JoinMta />
    </div>
  );
}

export default AboutUs;
