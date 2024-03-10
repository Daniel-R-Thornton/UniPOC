import { render } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./app";

// Create a wrapper component that uses QueryClient
// eslint-disable-next-line , @typescript-eslint/no-explicit-any
const QueryClientWrapper = ({ children }: { children: any }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 1,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

// Mock the wrapper component to return the data you want
vi.mock("./QueryClientWrapper", () => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    QueryClientWrapper: ({ children }: { children: any }) => (
      <div>
        Mocked data
        {children}
      </div>
    ),
  };
});

describe("App test", () => {
  test("Should render when called", () => {
    const { getByRole } = render(
      <QueryClientWrapper>
        <App />
      </QueryClientWrapper>
    );
    expect(getByRole("main")).toBeTruthy();
  });

  test("Should match snapshot", () => {
    const { asFragment } = render(
      <QueryClientWrapper>
        <App />
      </QueryClientWrapper>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
