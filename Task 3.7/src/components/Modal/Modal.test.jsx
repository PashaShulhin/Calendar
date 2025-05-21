import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import Modal from "./Modal";


test("does not render if isOpen is false", () => {
  render(
    <Modal isOpen={false} onClose={() => {}}>
      Test content
    </Modal>
  );
  const content = screen.queryByText("Test content");
  expect(content).not.toBeInTheDocument();
});

test("renders modal content when isOpen is true", () => {
  render(
    <Modal isOpen={true} onClose={() => {}}>
      Hello Modal
    </Modal>
  );
  const content = screen.getByText("Hello Modal");
  expect(content).toBeInTheDocument();
});


test("calls onClose when clicking overlay", () => {
  const onClose = vi.fn();
  render(
    <Modal isOpen={true} onClose={onClose}>
      Close Test
    </Modal>
  );
  const overlay = screen.getByText("Close Test").parentElement.parentElement;
  fireEvent.click(overlay);
  expect(onClose).toHaveBeenCalled();
});


test("does not call onClose when clicking inside modal", () => {
  const onClose = vi.fn();
  render(
    <Modal isOpen={true} onClose={onClose}>
      Inner Click
    </Modal>
  );
  const modal = screen.getByText("Inner Click").parentElement;
  fireEvent.click(modal);
  expect(onClose).not.toHaveBeenCalled();
});


test("calls onClose when clicking close button", () => {
  const onClose = vi.fn();
  render(
    <Modal isOpen={true} onClose={onClose}>
      Click Close
    </Modal>
  );
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(onClose).toHaveBeenCalled();
});
