import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href={"/"} className="text-xl">
            MTA India
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <details>
                <summary>Who We Are ?</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link href={"/about-us"}>About Us</Link>
                  </li>
                  <li>
                    <Link href={"/members"}>Members</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>What we do ?</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link href={"/rides"}>Rides</Link>
                  </li>
                  <li>
                    <Link href={"/events"}>Events</Link>
                  </li>
                  <li>
                    <Link href={"/moto-camp"}>Moto Camp</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href={"/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link href={"/contact-us"}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
