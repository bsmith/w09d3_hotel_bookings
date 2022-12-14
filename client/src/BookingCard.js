import { deleteBooking } from './BookingService';

const BookingCard = ({ booking, removeBooking }) => {
    console.log(booking);

    const handleDelete = () => {
        deleteBooking(booking._id)
            .then(() => {
                removeBooking(booking._id);
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
        </div>
    </div>
}

export default BookingCard;