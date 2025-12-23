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
      <div className="bg-[#121212] text-white py-20">
        <div className="text-lg leading-[30px] py-10 p-2 md:p-5 container mx-auto flex flex-row">
          <div className="flex-1">
            <div className="text-4xl font-semibold mb-4">Our Story</div>
            The Motorcycle Tourer’s Association(MTA)was formally established on
            21st June 2015 (World’s Motorcycle Day) in Calicut, Kerala with the
            support of fellow Long Distance Riders.The Motorcycle Tourer’s
            Association provides a meeting place for motorcycle touring
            enthusiasts and owners, riders, and admirers of all brands and
            models of motorcycles. This is a place to share ideas and
            information; to make friends and have fun in an atmosphere of mutual
            respect and civility. While the MTA is primarily dedicated those
            motorcycle tourers who are Real Riders and True Road Warriors whose
            passion for conquering unknown destinations.Anyone is welcome. We
            define motorcycle touring very loosely. Some define touring as those
            that day trip smelling flowers. Others define touring as long
            distance riding. There are many definitions in between. <br />{" "}
            <br />
            The Motorcycle Tourers Associationalso has a single focus and motto
            for its members which is Ride Long and Ride Safe! And of course
            enjoy your ride and show your pride. Part of our commitment to safe
            riding culture we are dedicated to riding tips from experienced long
            distance riders and many National Motorcycle Owner’s groups. <br />{" "}
            <br />
            MTA’s Tour of Honour ride is a great reason to hit the open roads,
            to recognition long distance riders, promotion of Travel & Tourism,
            to contribute, and support its members and fellow riders.There is a
            minimum set of ride requirements to be eligible for membership but
            The Motorcycle Tourer’s Association also has elevated membership
            status based on travel accomplishments.
          </div>
          <div className="flex-1">kjbhkjbk</div>
        </div>
      </div>
      <JoinMta />
    </div>
  );
}

export default AboutUs;
