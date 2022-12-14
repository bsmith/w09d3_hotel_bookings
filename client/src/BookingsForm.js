import { useState } from 'react';
import { postBooking } from './BookingService';

const BookingsForm = ({ addBooking }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkInStatus: false
    });
    const [errorMessage, setErrorMessage] = useState("");

    const onChange = (event) => {
        const newFormData = Object.assign({}, formData);
        newFormData[event.target.name] = event.target.value;
        setFormData(newFormData);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (!formData.name || !formData.email)
            return;

        if (!formData.email.includes("@")) {
            setErrorMessage("Enter an email address");
            return;
        }

        setErrorMessage("");

        postBooking(formData)
            .then((data) => {
                addBooking(data);
            })
        /* reset the form */
        setFormData({
            name: "",
            email: "",
            checkInStatus: false
        })
    };

    return (
        <form onSubmit={onSubmit} className="BookingsForm">
            <h2>Add a Booking</h2>

            <p className="ErrorMessage">{errorMessage}</p>

            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    required />
            </div>

            <div className="formWrap">
            <label htmlFor="email">Email:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    required />
            </div>

            <input type="submit" value="Save" id="save" />
        </form>
    );
}

export default BookingsForm;