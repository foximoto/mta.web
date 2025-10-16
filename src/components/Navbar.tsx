import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <div className="pt-4 flex items-center justify-center gap-4">
        <Image
          src="/MTA LOGO.png"
          alt="MTA Logo"
          width={140}
          height={140}
          className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] object-contain"
        />
        <h1 className="text-xl md:text-5xl font-bold uppercase">
          Motorcycle Tourers Association
        </h1>
      </div>
      <div className="py-6 flex justify-center items-center flex-wrap">
        <Link href="/">
          <button className="text-gray-700 font-semibold hover:text-gray-900 px-4 py-2">
            Home
          </button>
        </Link>

        <div className="dropdown dropdown-hover relative">
          <div
            tabIndex={0}
            role="button"
            className="text-gray-700 font-semibold hover:text-gray-900 px-4 py-2"
          >
            Who we are?
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow absolute left-0 right-0 max-w-full"
          >
            <li>
              <Link href="/about-us">About us</Link>
            </li>
            <li>
              <Link href="/members">Members</Link>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-hover relative">
          <div
            tabIndex={0}
            role="button"
            className="text-gray-700 font-semibold hover:text-gray-900 px-4 py-2"
          >
            What we do?
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow absolute left-0 right-0 max-w-full"
          >
            <li>
              <Link href="/rides">Rides</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
          </ul>
        </div>
        <Link href="/community-wall">
          <button className="text-gray-700 font-semibold hover:text-gray-900 px-4 py-2">
            Community Wall
          </button>
        </Link>
        {/* <Link href="/calendar">
          <button className="text-gray-700 font-semibold hover:text-gray-900 px-4 py-2">
            Calendar
          </button>
        </Link> */}
        <Link href="/sponsors">
          <button className="text-gray-700 font-semibold hover:text-gray-900 px-4 py-2">
            Sponsors
          </button>
        </Link>
        <Link href="/blogs">
          <button className="text-gray-700 font-semibold hover:text-gray-900 px-4 py-2">
            Blogs
          </button>
        </Link>
        <Link href="/contact-us">
          <button className="text-gray-700 font-semibold hover:text-gray-900 px-4 py-2">
            Contact us
          </button>
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
