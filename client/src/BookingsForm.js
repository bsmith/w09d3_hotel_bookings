import { useState } from 'react';

const BookingsForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkInStatus: false
    });

    const onChange = (event) => {
        const newFormData = Object.assign({}, formData);
        newFormData[event.target.name] = event.target.value;
        setFormData(newFormData);
    };

    return (
        <form className="BookingsForm">
            <h2>Add a Booking</h2>

            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name} />
            </div>

            <div className="formWrap">
            <label htmlFor="email">Email:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email} />
            </div>

            <input type="submit" value="Save" id="save" />
        </form>
    );
}

export default BookingsForm;