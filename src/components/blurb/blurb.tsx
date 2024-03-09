import React from "react";

interface BlurbProps {
  image: string;
  imageAlt?: string;
  body: {
    text: React.ReactNode;
    subtitle: string;
  };
}

const Blurb: React.FC<BlurbProps> = ({ image, body, imageAlt }) => {
  return (
    <article className="flex flex-col px-10 m-10">
      <figure className="w-full">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-30 object-fill aspect-[4/1]"
        />
        <figcaption className="hidden">{imageAlt}</figcaption>
      </figure>
      <section className="p-4 flex flex-col gap-2 ">
        <h2 className="text-lg">{body.subtitle}</h2>
        <p className="">{body.text}</p>
      </section>
    </article>
  );
};

export default Blurb;
