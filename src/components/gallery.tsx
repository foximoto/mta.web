import React from "react";
import Image from "next/image";

interface GalleryProps {
  leftImage: string;
  topRightImage: string;
  bottomRightImage: string;
  swap?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({
  leftImage,
  topRightImage,
  bottomRightImage,
  swap = false,
}) => {
  const LeftSection = (
    <div className="relative h-full w-full">
      <Image
        src={leftImage}
        alt="Left"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 60vw"
      />
    </div>
  );

  const RightSection = (
    <div className="grid grid-rows-2 gap-2 h-full w-full">
      <div className="relative w-full h-full">
        <Image
          src={topRightImage}
          alt="Top Right"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={bottomRightImage}
          alt="Bottom Right"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>
    </div>
  );

  const gridCols = swap ? "md:grid-cols-[40%_60%]" : "md:grid-cols-[60%_40%]";

  const mobileBigImage = (
    <div className="relative h-64 w-full mb-2">
      <Image
        src={leftImage}
        alt="Big Image"
        fill
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );

  const mobileSmallImages = (
    <div className="grid grid-cols-2 gap-2 w-full">
      <div className="relative h-40 w-full">
        <Image
          src={topRightImage}
          alt="Small Top Image"
          fill
          className="object-cover"
          sizes="50vw"
        />
      </div>
      <div className="relative h-40 w-full">
        <Image
          src={bottomRightImage}
          alt="Small Bottom Image"
          fill
          className="object-cover"
          sizes="50vw"
        />
      </div>
    </div>
  );

  return (
    <>
      <div className="md:hidden">
        {mobileBigImage}
        {mobileSmallImages}
      </div>

      <div className={`hidden md:grid ${gridCols} gap-2 w-full h-[500px]`}>
        {swap ? RightSection : LeftSection}
        {swap ? LeftSection : RightSection}
      </div>
    </>
  );
};

export default Gallery;
