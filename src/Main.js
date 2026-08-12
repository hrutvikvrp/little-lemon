import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import {useReducer} from 'react';
import {initializeTimes, updateTimes} from './reducers'
function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes());
  return (
    <main>
        <Routes>
            <Route path = "/" element={<HomePage ></HomePage>}></Route>
            <Route path = "/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}></Route>
        </Routes>
    </main>
  );
}

export default Main;