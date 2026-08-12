import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from './reducers';
global.fetchAPI = () => ["17:00", "18:00"];
test("Render date label", () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={() => { }} />);
    const element = screen.getByText("Choose date");
    expect(element).toBeInTheDocument();
});
test("Return correct time", () => {
    const element = initializeTimes();
    expect(Array.isArray(element)).toBe(true);
});
test("Update and return times", () => {
    const element = updateTimes([], "2026-08-12")
    expect(Array.isArray(element)).toBe(true);
});