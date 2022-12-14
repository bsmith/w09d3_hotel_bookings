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

    const addBooking = (booking) => {
        const newBookings = [...guestBookings, booking];
        setGuestBookings(newBookings)
    };

    const removeBooking = (id) => {
        const newBookings = [...guestBookings];
        const indexToDelete = newBookings.map(b => b._id).indexOf(id);

        newBookings.splice(indexToDelete, 1);
        setGuestBookings(newBookings);
    };

    const updateBooking = (booking) => {
        const newBookings = [...guestBookings];
        const indexToChange = newBookings.map(b => b._id).indexOf(booking._id);

        newBookings.splice(indexToChange, 1, booking);
        setGuestBookings(newBookings);
    };

    return <>
        <h1>Welcome Code Inn</h1>
        <BookingsForm addBooking={addBooking} />
        <BookingsGrid 
            bookings={guestBookings}
            removeBooking={removeBooking}
            updateBooking={updateBooking} />
    </>
}

export default App;
