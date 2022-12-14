import { useState, useEffect } from 'react';

import './App.css';

import BookingsForm from './BookingsForm';
import BookingsGrid from './BookingsGrid';
import { getBookings } from './BookingService';

function App() {

    const [guestBookings, setGuestBookings] = useState([]);

    useEffect(() => {
        getBookings()
            .then((allBookings) => {
                setGuestBookings(allBookings);
            })
    }, []);

    const addBooking = () => {};
    const removeBooking = () => {};

    return <>
        <BookingsForm addBooking={addBooking} />
        <BookingsGrid bookings={guestBookings} removeBooking={removeBooking} />
    </>
}

export default App;
