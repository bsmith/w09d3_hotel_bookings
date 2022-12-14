const BookingCard = ({ booking, removeBooking }) => {
    console.log(booking);
    return <div className="BookingCard">
        <h1>Guest Information</h1>
        <p>{booking.name}</p>
        <p>{booking.email}</p>
        <p>{booking.checkInStatus ? 'checked in' : 'not checked in'}</p>
        <button>Delete</button>
    </div>
}

export default BookingCard;