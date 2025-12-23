import React, { FC } from "react";

interface Props {
  headingFirst: string;
  headingSecond: string;
  description: string;
}

const PageHeader: FC<Props> = ({
  headingFirst,
  headingSecond,
  description,
}) => {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1690540293130-2ca04fbf815b')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 px-6 text-center max-w-5xl">
        <h1 className="font-bold text-white leading-tight text-[clamp(2.5rem,6vw,5rem)] mb-4">
          {headingFirst}
          <span className="text-red-600"> {headingSecond}</span>
        </h1>

        <p className="text-white font-semibold text-[clamp(1.125rem,2.5vw,1.5rem)]">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
