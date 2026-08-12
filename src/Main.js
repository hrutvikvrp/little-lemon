/* global submitAPI */
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { useReducer } from 'react';
import { initializeTimes, updateTimes } from './reducers'
import ConfirmedBooking from './ConfirmedBooking';
function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();
    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    }
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage ></HomePage>}></Route>
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>}></Route>
                <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
            </Routes>
        </main>
    );
}

export default Main;