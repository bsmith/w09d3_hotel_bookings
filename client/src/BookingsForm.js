import { useState } from 'react';
import styled from 'styled-components';
import { postBooking } from './BookingService';

import { DisplayCard, ErrorMessage, Button } from './styles';

const FormWrap = styled.div`
    display: grid;
    grid-template-columns: 6rem 15rem;
`;

const StyledForm = styled.form`
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    > * {
        margin: 0;
    }
`;

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
        <StyledForm onSubmit={onSubmit}>
            <h2>Add a Booking</h2>

            <ErrorMessage>{errorMessage}</ErrorMessage>

            <FormWrap>
                <label htmlFor="name">Name:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    required />
            </FormWrap>

            <FormWrap>
                <label htmlFor="email">Email:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    required />
            </FormWrap>

            {/* <input type="submit" value="Save" id="save" /> */}
            <Button type="submit">Save</Button>
        </StyledForm>
    );
}

export default BookingsForm;