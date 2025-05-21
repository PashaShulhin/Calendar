import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import Dropdown from "./Dropdown";

test("renders dropdown button with label", () => {
  render(<Dropdown label="Menu">Item</Dropdown>);
  const button = screen.getByText("Menu");
  expect(button).toBeInTheDocument();
});

test("opens menu on button click", () => {
  render(
    <Dropdown label="Actions">
      <Dropdown.Item>Profile</Dropdown.Item>
    </Dropdown>
  );

  fireEvent.click(screen.getByText("Actions"));
  expect(screen.getByText("Profile")).toBeInTheDocument();
});

test("closes menu when clicked outside", () => {
  render(
    <div>
      <Dropdown label="Menu">
        <Dropdown.Item>Logout</Dropdown.Item>
      </Dropdown>
      <button>Outside</button>
    </div>
  );

  fireEvent.click(screen.getByText("Menu"));
  expect(screen.getByText("Logout")).toBeInTheDocument();

  fireEvent.mouseDown(screen.getByText("Outside"));

  expect(screen.queryByText("Logout")).not.toBeInTheDocument();
});

test("calls onClick when item is clicked", () => {
  const handleClick = vi.fn();

  render(
    <Dropdown label="Options">
      <Dropdown.Item onClick={handleClick}>Settings</Dropdown.Item>
    </Dropdown>
  );

  fireEvent.click(screen.getByText("Options"));
  const item = screen.getByText("Settings");

  fireEvent.click(item);
  expect(handleClick).toHaveBeenCalled();
});
