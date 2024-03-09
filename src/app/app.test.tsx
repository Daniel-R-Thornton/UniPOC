import App from "./app";
import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";

describe("App test", () => {
  test("Should render when called", () => {
    const { getByRole } = render(App());
    const header = getByRole("banner");
    expect(header).toBeInTheDocument();
  });
});
