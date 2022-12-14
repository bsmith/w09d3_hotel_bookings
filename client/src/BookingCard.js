import { deleteBooking, putBooking } from './BookingService';

const BookingCard = ({ booking, removeBooking, updateBooking }) => {
    console.log(booking);

    const handleDelete = () => {
        deleteBooking(booking._id)
            .then(() => {
                removeBooking(booking._id);
            });
    };

    const handleCheckInOut = () => {
        booking.checkInStatus = ! booking.checkInStatus;

        putBooking(booking._id, { checkInStatus: booking.checkInStatus })
            .then(() => {
                updateBooking(booking);
            });
    };

    return <div className="BookingCard">
        <h3>Guest Information</h3>
        <div className={booking.checkInStatus ? 'GuestInformation CheckedIn' : 'GuestInformation'}>
            <p>{booking.name}</p>
            <p>{booking.email}</p>
            <p>{booking.checkInStatus ? 'checked in' : 'not checked in'}</p>
        </div>
        <div className="GuestButtons">
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleCheckInOut}>
                {booking.checkInStatus ? 'Check Out' : 'Check In'}
            </button>
        </div>
    </div>
}

export default BookingCard;