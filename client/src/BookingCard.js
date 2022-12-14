const BookingCard = ({ booking, removeBooking }) => {
    console.log(booking);
    return <div className="BookingCard">
        <h3>Guest Information</h3>
        <div className={booking.checkInStatus ? 'GuestInformation CheckedIn' : 'GuestInformation'}>
            <p>{booking.name}</p>
            <p>{booking.email}</p>
            <p>{booking.checkInStatus ? 'checked in' : 'not checked in'}</p>
        </div>
        <div className="GuestButtons">
            <button>Delete</button>
        </div>
    </div>
}

export default BookingCard;