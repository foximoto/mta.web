import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="">
      <div className="pt-4 flex items-center justify-center gap-4">
        <Image alt="" width={140} height={140} src="/MTA LOGO.png" />
        <div className="text-5xl font-bold md-text-3xl uppercase">
          Motorcycle Tourers Association
        </div>
      </div>
      <div className="py-6 flex justify-center items-center flex-wrap">
        <Link href={"/"}>
          <button className="btn btn-ghost">Home</button>
        </Link>

        <div className="dropdown dropdown-hover relative">
          <div tabIndex={0} role="button" className="btn m-1">
            Who we are ?
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow absolute left-0 right-0 max-w-full"
          >
            <li>
              <Link href={"/about-us"}>About us</Link>
            </li>
            <li>
              <Link href={"/members"}>Members</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover relative">
          <div tabIndex={0} role="button" className="btn m-1">
            What we do ?
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow absolute left-0 right-0 max-w-full"
          >
            <li>
              <Link href={"/rides"}>Rides</Link>
            </li>
            <li>
              <Link href={"/events"}>Events</Link>
            </li>
          </ul>
        </div>
        {/* <Link href={"/moto-camp"}>
          <button className="btn btn-ghost">MotoCamp</button>
        </Link> */}
        <Link href={"/calendar"}>
          <button className="btn btn-ghost">Calendar</button>
        </Link>
        <Link href={"/blogs"}>
          <button className="btn btn-ghost">Blogs</button>
        </Link>
        <Link href={"/contact-us"}>
          <button className="btn btn-ghost">Contact us</button>
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
