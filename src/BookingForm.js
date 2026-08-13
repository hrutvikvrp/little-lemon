import { useState } from 'react';
function BookingForm(props) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    function submitHandler(e) {
        e.preventDefault();
        props.submitForm({ date, time, guests, occasion });
        console.log({ date, time, guests, occasion });
    }
    function valid() {
        return ((date !== "") && (time !== "") && ((Number(guests) > 0) && (Number(guests) < 11 ) && (occasion !== "")));
    }
    return (
        <form onSubmit={submitHandler} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} required min = {new Date().toISOString().split("T")[0]} onChange={e => { setDate(e.target.value); props.dispatch(e.target.value) }} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} required onChange={e => setTime(e.target.value)}>
                {props.availableTimes.map(t => <option key={t}>{t}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" required placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" required value={occasion} onChange={e => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" disabled={!valid()} aria-label="On Click"/>
        </form>
    );
}
export default BookingForm;