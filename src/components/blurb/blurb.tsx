import React from "react";

interface BlurbProps {
  image: string;
  body: {
    text: string;
    subtitle: string;
  };
  aside: React.ReactNode;
}

const Blurb: React.FC<BlurbProps> = ({ image, body, aside }) => {
  return (
    <article className="flex">
      <figure className="w-1/2">
        <img src={image} alt="Blurb Image" className="w-full" />
        <figcaption>Image description</figcaption>
      </figure>
      <section className="w-1/2 p-4">
        <h2 className="text-lg">{body.subtitle}</h2>
        <p>Some text content here...</p>
      </section>
      <aside className="w-1/4 p-4">{aside}</aside>
    </article>
  );
};

export default Blurb;
