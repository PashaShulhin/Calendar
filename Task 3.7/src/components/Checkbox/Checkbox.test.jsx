import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import Checkbox from "./Checkbox";

test("rendering with label", () => {
  render(<Checkbox label="I am agree" checked={false} onChange={() => {}} />);
  const checkbox = screen.getByLabelText("I am agree");
  expect(checkbox).toBeInTheDocument();
});

test("tick", () => {
  const handleChange = vi.fn();

  render(
    <Checkbox
      label="Accept the terms"
      checked={false}
      onChange={handleChange}
    />
  );
  const checkbox = screen.getByLabelText("Accept the terms");

  fireEvent.click(checkbox);
  expect(handleChange).toHaveBeenCalledTimes(1);
});

test("does not calls onChange, if disabled", () => {
  const handleChange = vi.fn();

  render(
    <Checkbox
      label="Inactive"
      checked={false}
      onChange={handleChange}
      disabled
    />
  );
  const checkbox = screen.getByLabelText("Inactive");

  fireEvent.click(checkbox);
  expect(handleChange).not.toHaveBeenCalled();
});

test("displays the state checked", () => {
  render(<Checkbox label="checked" checked={true} onChange={() => {}} />);
  const checkbox = screen.getByLabelText("checked");

  expect(checkbox.checked).toBe(true);
});
