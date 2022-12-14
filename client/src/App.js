import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import './App.css';

import BookingsForm from './BookingsForm';
import BookingsGrid from './BookingsGrid';
import { getBookings } from './BookingService';

const Title = styled.h1`
    text-align: center;
`;

const theme = {
    headerColour: '#e5feff',
    checkedInColour: 'rgb(104 185 255 / 50%)',
    checkedOutColor: 'white',
};

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
        <ThemeProvider theme={theme}>
            <Title>Welcome Code Inn</Title>
            <BookingsForm addBooking={addBooking} />
            <BookingsGrid 
                bookings={guestBookings}
                removeBooking={removeBooking}
                updateBooking={updateBooking} />
        </ThemeProvider>
    </>
}

export default App;
