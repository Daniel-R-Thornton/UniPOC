import React from "react";

/**
 * BlurbProps is an interface that defines the props for the Blurb component
 * @param image - The image to display
 * @param imageAlt - The alt text for the image
 * @param body - The body of the blurb
 * @param aside - The aside of the blurb
 * @returns a styled component
 * @example
 */
interface BlurbProps {
  /*
   * The image to display
   */
  image: string;
  /*
   * The alt text for the image
   */
  imageAlt?: string;
  /*
   * The body of the blurb
   */
  body: {
    /*
     * The text to display
     */
    text: React.ReactNode;
    /*
     * The subtitle for the blurb
     */
    subtitle: string;
  };
  /*
   * The aside of the blurb
   */
  aside?: {
    text?: string | React.ReactNode;
    /*
     * The title for the aside
     */
    title: string;
  };
}
/**
 * Blurb component is a reusable component that takes in an image, body, and aside and returns a styled component
 * @param param0  image, imageAlt, body, aside
 * @returns a styled component
 */
const Blurb: React.FC<BlurbProps> = ({ image, body, imageAlt, aside }) => {
  return (
    <div>
      <article className="grid grid-cols-2 flex-col px-10 m-10 gap-2">
        <figure className="w-full col-span-2">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-30 object-fill aspect-[4/1]"
          />
          <figcaption className="hidden">{imageAlt}</figcaption>
        </figure>
        <section className="p-4 flex flex-col gap-2  col-span-2 lg:col-span-1">
          <h2 className="text-lg">{body.subtitle}</h2>
          <p className="">{body.text}</p>
        </section>
        {aside && aside.text && (
          <section className="flex flex-col gap-4 border  outline-slate-400 outline outline-1 bg-gray-200  col-span-2 lg:col-span-1">
            <div className="px-10 m-10 ">
              <h2 className="text-xl">{aside.title}</h2>
              <p className="text-sm pt-1">{aside.text}</p>
            </div>
          </section>
        )}
      </article>
    </div>
  );
};

export default Blurb;
