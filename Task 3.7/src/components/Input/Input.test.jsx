import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import Input from "./Input";

test("renders with placeholder", () => {
  render(<Input value="" onChange={() => {}} placeholder="Type here" />);
  const input = screen.getByPlaceholderText("Type here");
  expect(input).toBeInTheDocument();
});

test("renders with label", () => {
  render(<Input value="" onChange={() => {}} label="Username" />);
  expect(screen.getByText("Username")).toBeInTheDocument();
});

test("calls onChange when input changes", () => {
  const handleChange = vi.fn();
  render(<Input value="" onChange={handleChange} />);
  const input = screen.getByPlaceholderText("Enter text");

  fireEvent.change(input, { target: { value: "abc" } });
  expect(handleChange).toHaveBeenCalled();
});

test("displays error message if error is true", () => {
  render(
    <Input
      value=""
      onChange={() => {}}
      error={true}
      errorMessage="Required field"
    />
  );
  expect(screen.getByText("Required field")).toBeInTheDocument();
});

test("is disabled when disabled prop is true", () => {
  render(<Input value="test" onChange={() => {}} disabled />);
  const input = screen.getByDisplayValue("test");
  expect(input).toBeDisabled();
});

test("does not call onChange if disabled", () => {
  const handleChange = vi.fn();
  render(<Input value="abc" onChange={handleChange} disabled />);
  const input = screen.getByDisplayValue("abc");

  fireEvent.change(input, { target: { value: "xyz" } });
  expect(handleChange).not.toHaveBeenCalled();
});
