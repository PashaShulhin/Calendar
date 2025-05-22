import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import Datepicker from "./Datepicker";

test("renders date input", () => {
  render(<Datepicker value="2025-05-20" onChange={() => {}} />);
  const dateInput = screen.getByDisplayValue("2025-05-20");
  expect(dateInput).toBeInTheDocument();
  expect(dateInput).toHaveAttribute("type", "date");
});

test("calls onChange when date changes", () => {
  const handleChange = vi.fn();
  render(<Datepicker value="2025-05-20" onChange={handleChange} />);
  const dateInput = screen.getByDisplayValue("2025-05-20");

  fireEvent.change(dateInput, { target: { value: "2025-06-01" } });

  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(handleChange).toHaveBeenCalledWith("2025-06-01");
});

test("displays the correct default value", () => {
  render(<Datepicker value="2025-01-01" onChange={() => {}} />);
  const dateInput = screen.getByDisplayValue("2025-01-01");
  expect(dateInput).toBeInTheDocument();
});
