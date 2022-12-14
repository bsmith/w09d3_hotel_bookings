use hotel_bookings;

db.drop_database();

db.bookings.insertMany([
    {
        name: "Luis",
        email: "luis@example.com",
        checkInStatus: false
    },
    {
        name: "Ben",
        email: "ben@edinburgh.com",
        checkInStatus: true
    }
]);