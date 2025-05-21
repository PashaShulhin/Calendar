import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import Button from "./Button";

test("render with text", () => {
  render(<Button>Button</Button>);
  const button = screen.getByText("Button");
  expect(button).toBeInTheDocument();
});

test("calls onClick", () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click</Button>);
  const button = screen.getByText("Click");
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("does not call onClick, if disabled", () => {
  const handleClick = vi.fn();
  render(
    <Button onClick={handleClick} disabled>
      Inactive
    </Button>
  );
  const button = screen.getByText("Inactive");
  fireEvent.click(button);
  expect(handleClick).not.toHaveBeenCalled();
});
