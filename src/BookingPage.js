import BookingForm from './BookingForm'
function BookingPage(props) {
    return (
        <>
            <h1>Book a Table</h1>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm} />
        </>
    );
}

export default BookingPage;