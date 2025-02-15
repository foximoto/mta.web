import React from "react";

function Spotlight() {
  return (
    <div>
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/5195498/pexels-photo-5195498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div>
            <h1 className="mb-5 text-5xl w-2/3 font-bold mx-auto">
              Welcome to <br /> Motorcycle Tourers Association
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spotlight;
