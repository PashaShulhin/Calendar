import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import SelectMenu from "./SelectMenu";

test("renders the label", () => {
  render(<SelectMenu label="Choose one" options={[]} onChange={() => {}} />);
  expect(screen.getByText("Choose one")).toBeInTheDocument();
});

test("renders options", () => {
  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
  ];
  render(<SelectMenu label="Fruits" options={options} onChange={() => {}} />);
  expect(screen.getByText("Apple")).toBeInTheDocument();
  expect(screen.getByText("Banana")).toBeInTheDocument();
});

test("calls onChange when an option is selected", () => {
  const handleChange = vi.fn();
  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
  ];

  render(
    <SelectMenu label="Fruits" options={options} onChange={handleChange} />
  );

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "banana" },
  });

  expect(handleChange).toHaveBeenCalledWith("banana");
});

test("disables the select when disabled is true", () => {
  render(
    <SelectMenu
      label="Fruits"
      options={[{ value: "apple", label: "Apple" }]}
      onChange={() => {}}
      disabled
    />
  );
  const select = screen.getByRole("combobox");
  expect(select).toBeDisabled();
});
