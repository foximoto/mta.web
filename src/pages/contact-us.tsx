import PageHeader from "@/components/PageHeader";
import Meta from "@/meta/meta";

function ContactUs() {
  return (
    <div className="container mx-auto">
      <Meta title="Contact Us" favicon="/favicon.ico" />

      <PageHeader heading="Contact Us" />
      <div className="grid md:grid-cols-2 px-2 py-10">
        <div className="text-2xl leading-relaxed">
          Motorcycle Tourers Association <br /> 9/953D, Sajas Sameer Building{" "}
          <br />
          K.P Kesava Menon Road <br /> Poovalappu <br /> Calicut, Kerala <br />
          PIN:673001
        </div>
        <div>
          <a
            href="https://wa.link/yqy1v9"
            className="btn bg-black text-yellow-500 mr-2 my-2"
          >
            Contact us on Whatsapp
          </a>
          <a
            href="https://www.instagram.com/motorcycletourersassociation/"
            className="btn bg-black text-yellow-500 mr-2 my-2"
          >
            Contact us on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
