import PageHeader from "@/components/PageHeader";
import Meta from "@/meta/meta";

function JoinMta() {
  return (
    <div>
      <Meta title="Join MTA" favicon="/favicon.ico" />

      <PageHeader headingFirst="Join" headingSecond="MTA" description="" />

      <div className="w-[90%] mx-auto md:w-2/3 py-20">
        <p className="mb-4">
          Hello, <br /> Thank you for your interest in joining the Motorcycle
          Tourers Association. First, it should be known that we are NOT a
          motorcycle club (M/C) and we have no desire to become one. We are a
          Tourers Association that happens to enjoy riding motorcycles, and ride
          we do! We ride not only to support our group but to assist other
          organization. <br /> <br /> If you are here for the sole reason of
          supporting motorcycle tourers then this is your association! We are
          looking for active participants in supporting riders issues, not patch
          hunters that do not believe in our mission.
        </p>

        <p className="mb-4">
          <strong>Please take time to read the MTA’s Rules.</strong>
        </p>

        <h2 className="text-3xl font-semibold mt-6">Rules</h2>
        <ol className="list-decimal list-inside mb-6">
          <li>
            It doesn’t matter whether you’re male or female, but you must have
            the passion for traveling on a motorcycle.
          </li>
          <li>You should be above 21 years of age.</li>
          <li>You should have minimum 2 years riding experience.</li>
          <li>
            You should have a valid Driving License which has not expired.
          </li>
          <li>You should have a registered, road‑legal motorcycle.</li>
          <li>
            You should have valid Motorcycle Insurance and Emission Certificate.
          </li>
          <li>You should have a valid PERSONAL ACCIDENT INSURANCE POLICY.</li>
          <li>
            We don’t encourage any kind of racing, stunts, or rash driving.
            MTA’s objective is to promote safe motorcycle riding.
          </li>
          <li>
            Consumption of Alcohol or any intoxicating substance is not allowed
            on any ride of Motorcycle Tourers Association.
          </li>
        </ol>

        <h2 className="text-3xl font-semibold mt-6">Documents</h2>
        <ol className="list-decimal list-inside mb-6">
          <li>Original & Valid Driving Licence.</li>
          <li>Original Motorcycle Registration Certificate.</li>
          <li>Motorcycle Insurance Policy.</li>
          <li>Tax Receipt.</li>
          <li>Emission Certificate.</li>
          <li>Personal Accident Insurance Policy.</li>
        </ol>

        <h2 className="text-3xl font-semibold mt-6">Riding Gears</h2>
        <ol className="list-decimal list-inside mb-6">
          <li>Protective Riding Jacket.</li>
          <li>Full Face ISI / DOT / ECE Certified Helmet.</li>
          <li>Protective Riding Gloves.</li>
          <li>Riding Boots / High Ankle Boots.</li>
          <li>Riding Pant / Thick Denim With Kneepad.</li>
        </ol>

        <p className="mb-6">Be a Motorcycle Tourer, Not Just A Rider!!</p>

        <a
          href="https://www.instagram.com/motorcycletourersassociation/"
          className="btn btn-accent mb-6"
        >
          Contact on Instagram
        </a>
      </div>
    </div>
  );
}

export default JoinMta;
