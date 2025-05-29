import { render, screen, fireEvent } from "@testing-library/react";
import ColorPicker from "./ColorPicker";
import { test, expect, vi } from "vitest";

test("rendering of color", () => {
  render(<ColorPicker value="#ff0000" onChange={() => {}} />);
  const colorInput = screen.getByLabelText("Choose a color");
  expect(colorInput).toBeInTheDocument();
});

test("default value", () => {
  render(<ColorPicker value="#00ff00" onChange={() => {}} />);
  const colorInput = screen.getByLabelText("Choose a color");
  expect(colorInput.value).toBe("#00ff00");
});

test("calls onChange if color changed", () => {
  const handleChange = vi.fn();
  render(<ColorPicker value="#000000" onChange={handleChange} />);
  const colorInput = screen.getByLabelText("Choose a color");

  fireEvent.change(colorInput, { target: { value: "#123456" } });

  expect(handleChange).toHaveBeenCalledTimes(1);
});

test("Inactive, if disabled", () => {
  render(<ColorPicker value="#ffffff" onChange={() => {}} disabled />);
  const colorInput = screen.getByLabelText("Choose a color");
  expect(colorInput).toBeDisabled();
});
