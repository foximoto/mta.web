/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Meta from "@/meta/meta";

function BlogView() {
  return (
    <div className="container mx-auto">
      <Meta title="Blogs" favicon="/favicon-home.ico" />
      <Navbar />
      <div className="w-2/3 mx-auto py-20">
        <img
          src="https://images.pexels.com/photos/5238634/pexels-photo-5238634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-full h-[400px] object-cover"
        />
        <div className="text-4xl font-semibold mt-6">
          Conquer Winter Spiti: The Ultimate Motorcycle Adventure
        </div>
        <br />
        In the heart of the Himalayas lies White Spiti, a snow-covered paradise
        that calls out to those who crave the ultimate challenge. Often hailed
        as India’s most difficult motorcycle ride, Winter Spiti is a journey
        that tests your endurance, skill, and spirit. Treacherous snow-laden
        roads, biting cold, and thin air at high altitudes make this an
        adventure like no other. But for those brave enough to answer the call,
        the rewards are beyond imagination—frozen rivers, ancient monasteries
        blanketed in snow, and landscapes so pristine and pretty they feel
        otherworldly. Silent, beautiful and raw Himalayan wilderness. The
        journey isn’t only about the destination. It’s about camaraderie, shared
        struggles, and unforgettable moments that will be forged on the trail.
        Riding alongside others, braving the elements, and experiencing the
        warmth of remote Spiti-an hospitality in the harshest of winters will
        remind your soul of why you joined IBR. Every shred of your being will
        be tested, and you know all too well that no memories were forged on a
        good and easy day. Winter Spiti is a rite of passage for riders, a test
        of resilience, and a story waiting to be written. Are you ready to push
        your limits and embrace the extraordinary? Join us for the ride of a
        lifetime. Important points to note: Dates: January 10 - January 20,
        2025. Budget: Approximately 30k to 35k, including food, stay and fuel
        (@25-30 kmpl). This might fluctuate depending on your vehicle and
        travelling style. Exact itinerary will be updated towards the end of
        December, as the plan materialises. Please note that due to the extreme
        nature and the risks associated with this ride, it has been unanimously
        decided that only battle hardened riders are going. As a result, all
        members who have already formed the initial group will vote on eligible
        riders. If you are interested and voted in, you will also vote on the
        next interested rider who would want to join. Please feel free to reach
        out to any one of the riders in the first comment below, and he will
        circle back to you. To give a lead time for booking confirmations in
        harsh conditions and limited resources in White Spiti, please let us
        know if youre interested by December 15th latest. Advance payments,
        bookings, etc items for ride prep will be discussed in a dedicated
        WhatsApp group. This post will be updated continually as and when the
        plan matures.
      </div>
      <Footer />
    </div>
  );
}

export default BlogView;
