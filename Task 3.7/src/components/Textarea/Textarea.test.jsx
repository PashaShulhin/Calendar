import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import Textarea from "./Textarea";

test("renders textarea with placeholder", () => {
  render(
    <Textarea placeholder="Enter your message" value="" onChange={() => {}} />
  );
  expect(screen.getByPlaceholderText("Enter your message")).toBeInTheDocument();
});

test("sets the correct value", () => {
  render(<Textarea placeholder="Message" value="Hello" onChange={() => {}} />);
  expect(screen.getByDisplayValue("Hello")).toBeInTheDocument();
});

test("calls onChange when typing", () => {
  const handleChange = vi.fn();
  render(<Textarea placeholder="Type here" value="" onChange={handleChange} />);

  const textarea = screen.getByPlaceholderText("Type here");
  fireEvent.change(textarea, { target: { value: "New text" } });

  expect(handleChange).toHaveBeenCalledTimes(1);
});
