import React, { useState, useEffect } from "react";

function Spotlight() {
  const images = [
    "https://images.pexels.com/photos/5195498/pexels-photo-5195498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/ride-to-nowhere-peng-shi.jpg",
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/3-a-woman-rides-her-motorcycle-on-a-cloudy-summer-day-cavan-images.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="w-full">
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          transition: "background-image 1s ease-in-out",
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
