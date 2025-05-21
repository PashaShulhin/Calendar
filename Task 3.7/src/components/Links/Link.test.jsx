import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Link from "./Link";

test("renders link with text", () => {
  render(<Link href="https://example.com">Click me</Link>);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});

test("has correct href", () => {
  render(<Link href="https://example.com">Example</Link>);
  const link = screen.getByText("Example");
  expect(link).toHaveAttribute("href", "https://example.com");
});

test("has target _self by default", () => {
  render(<Link href="/">Home</Link>);
  const link = screen.getByText("Home");
  expect(link).toHaveAttribute("target", "_self");
});

test("renders span if disabled", () => {
  render(
    <Link href="https://example.com" disabled>
      Can't click
    </Link>
  );
  const span = screen.getByText("Can't click");
  expect(span.tagName).toBe("SPAN");
});

test("disabled link has no href or target", () => {
  render(
    <Link href="https://example.com" disabled>
      Inactive
    </Link>
  );
  const el = screen.getByText("Inactive");
  expect(el).not.toHaveAttribute("href");
  expect(el).not.toHaveAttribute("target");
});
