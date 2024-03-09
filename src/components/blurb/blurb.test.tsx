import { render } from "@testing-library/react";
import Blurb from "./blurb";
import { describe, expect, it } from "vitest";

describe("Blurb component", () => {
  const props = {
    image: "path/to/image.jpg",
    imageAlt: "Image alt text",
    body: {
      text: "Lorem ipsum dolor sit amet",
      subtitle: "Subtitle",
    },
    aside: {
      text: "Aside text",
      title: "Aside title",
    },
  };

  it("renders the Blurb component with all props", () => {
    const { getByText, getByAltText } = render(<Blurb {...props} />);

    expect(getByAltText("Image alt text")).toBeInTheDocument();
    expect(getByText("Subtitle")).toBeInTheDocument();
    expect(getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();
    expect(getByText("Aside title")).toBeInTheDocument();
    expect(getByText("Aside text")).toBeInTheDocument();
  });

  it("renders the Blurb component without aside prop", () => {
    const { queryByText } = render(<Blurb {...props} aside={undefined} />);

    expect(queryByText("Aside title")).toBeNull();
    expect(queryByText("Aside text")).toBeNull();
  });

  it("renders the Blurb component without imageAlt prop", () => {
    const { getByAltText } = render(<Blurb {...props} imageAlt={undefined} />);

    expect(getByAltText("path/to/image.jpg")).toBeInTheDocument();
  });
});
