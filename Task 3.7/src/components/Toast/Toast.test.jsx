import { render, screen } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import Toast from "./Toast";

test("renders toast with message", () => {
  render(<Toast message="Success!" onClose={() => {}} />);
  expect(screen.getByText("Success!")).toBeInTheDocument();
});

test("applies correct style based on type", () => {
  const { container } = render(
    <Toast message="Error!" type="error" onClose={() => {}} />
  );
  const toast = container.firstChild;
  expect(toast.className).toContain("error");
});

test("calls onClose after duration", () => {
  const onClose = vi.fn();
  vi.useFakeTimers();

  render(<Toast message="Timed toast" duration={3000} onClose={onClose} />);

  vi.advanceTimersByTime(3000);
  expect(onClose).toHaveBeenCalledTimes(1);

  vi.useRealTimers();
});
