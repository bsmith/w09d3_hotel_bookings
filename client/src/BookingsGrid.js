import BookingCard from './BookingCard';

const BookingsGrid = ({ bookings, removeBooking, updateBooking }) => {
    const bookingsList = bookings.map((booking) => {
        return <BookingCard
            booking={booking}
            key={booking._id}
            removeBooking={removeBooking}
            updateBooking={updateBooking} />
    });

    return <>
        <h2>All Bookings</h2>
        {bookingsList}
    </>;
}

export default BookingsGrid;