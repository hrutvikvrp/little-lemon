import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from './reducers';
global.fetchAPI = () => ["17:00", "18:00"];
test("Render date label", () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={() => { }} submitForm={() => { }}/>);
    const element = screen.getByText("Choose date");
    expect(element).toBeInTheDocument();
});
test("Return correct time", () => {
    const element = initializeTimes();
    expect(Array.isArray(element)).toBe(true);
});
test("Update and return times", () => {
    const element = updateTimes([], "2026-08-12");
    expect(Array.isArray(element)).toBe(true);
});
test("Date input is correct", () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={() => { }} submitForm={() => { }}/>);
    const element = screen.getByLabelText("Choose date");
    expect(element).toBeRequired();
    expect(element).toHaveAttribute("type", "date");
});
test("Time input is correct", () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={() => { }} submitForm={() => { }}/>);
    const element = screen.getByLabelText("Choose time");
    expect(element).toBeRequired();
});
test("Guests input is correct", () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={() => { }} submitForm={() => { }}/>);
    const element = screen.getByLabelText("Number of guests");
    expect(element).toBeRequired();
    expect(element).toHaveAttribute("min", "1");
    expect(element).toHaveAttribute("max", "10");
});
test("Occasion input is correct", () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={() => { }} submitForm={() => { }}/>);
    const element = screen.getByLabelText("Occasion");
    expect(element).toBeRequired();
});
test("Submit button doesn't work when form is incomplete" , () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={() => { }} submitForm={() => { }}/>);
    const element = screen.getByDisplayValue("Make Your reservation");
    expect(element).toBeDisabled();
})
test("Submit button works when form is complete" , () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={() => { }} submitForm={() => { }}/>);
    const date = screen.getByLabelText("Choose date");
    fireEvent.change(date, { target: { value: "2026-12-25" } });
    const element = screen.getByDisplayValue("Make Your reservation");
    expect(element).toBeEnabled();
})