import App from "./app";
import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";

describe("App test", () => {
  test("Should render when called", () => {
    const { getByRole } = render(App());
    expect(getByRole("main")).toBeTruthy();
  });

  test("Should match snapshot", () => {
    const { asFragment } = render(App());
    expect(asFragment()).toMatchSnapshot();
  });
});
