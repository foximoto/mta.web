/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

function Events() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <PageHeader heading="Events" />

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <img
            src="https://images.pexels.com/photos/5238634/pexels-photo-5238634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Shoes"
          />
          <h3 className="font-bold text-2xl mt-4">IRON RIDER CHALLENGE </h3>
          <div className="text-xs font-semibold">28 March 2025</div>
          <p className="py-4">
            IRON RIDER CHALLENGE is an ultimate 24 hours endurance ride for all
            motorcycle riders of any brand. One place is the start and also the
            finish of each lap. One lap is 100 km long. In total, it is
            necessary to complete 11 laps. <br /> IRON RIDER CHALLENGE®️ is not
            a speed race! It is an extreme test of endurance and courage that
            only the most determined ones are willing to take voluntarily. It
            does not matter whether you finish first or last, but whether you
            make it! <br /> In the first lap we ride together. The following
            laps can be completed individually or in separate groups. At the
            start, you receive a roadbook. Roadbook is for recording the
            completed laps. There is a time window for each lap in the roadbook
            which you need to observe. This way we control your speed with
            regard to safety, necessary rest, refreshments and refilling your
            motorcycle. If you are too fast, which we try to avoid, we will let
            you start another lap only after the minimum specified time elapses.
            On the other hand, if you are late and miss the maximum allowed
            time, your challenge ends and only those laps you completed in the
            assigned time windows will be recorded. IRON RIDER CHALLENGE®️ takes
            place in any weather!
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-10">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            onClick={() =>
              (
                document.querySelector("#my_modal_5") as HTMLDialogElement
              )?.showModal()
            }
            className="cursor-pointer"
            onKeyUp={() => {}}
            tabIndex={0}
            role="button"
          >
            <div className="p-2">
              <div className="card bg-base-100 rounded-none shadow-xl">
                <figure>
                  <img
                    src="https://images.pexels.com/photos/5238634/pexels-photo-5238634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Offroad Training by MotorCycle Tourers Association
                  </h2>
                  <div>26 March 2025</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Events;
