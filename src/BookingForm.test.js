import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from './reducers';

test("Render date label", () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={() => { }} />);
    const element = screen.getByText("Choose date");
    expect(element).toBeInTheDocument();
});
test("Return correct time", () => {
    const element = initializeTimes();
    expect(element).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});
test("Update and return times", () => {
    const element = updateTimes([], "2026-08-12")
    expect(element).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});