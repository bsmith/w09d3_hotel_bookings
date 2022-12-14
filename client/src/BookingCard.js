import styled from 'styled-components';
import { deleteBooking, putBooking } from './BookingService';
import { DisplayCard, Button, ButtonBar } from './styles';

const StyledCard = styled(DisplayCard)`
    max-width: 30rem;
    display: flex;
    flex-direction: column;

    margin: 0.25rem;

    /* padding: 0.25rem; */

    > section {
        background-color: ${ props => 
            props.checkInStatus ? props.theme.checkedInColour : props.theme.checkedOutColour
        };
        padding: 0.25rem;
    };

    > header {
        background-color: ${props => props.theme.headerColour};
        /* margin: 0; */
        border-bottom: 1px solid black;
        margin-bottom: 0;
        padding: 0.25rem;
    };
`;

const GuestInformation = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 4rem;
    flex-wrap: wrap;
    /* background: rgb(104 185 255 / 50%); */

    @media (max-width: 450px) {
        flex-direction: column;
    }
`;

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

    return <StyledCard checkInStatus={booking.checkInStatus}>
        <header>
            <h3>Guest Information</h3>
        </header>
        <section>
            <GuestInformation>
                <p>{booking.name}</p>
                <p>{booking.email}</p>
                <p>{booking.checkInStatus ? 'checked in' : 'not checked in'}</p>
            </GuestInformation>
            <ButtonBar>
                <Button onClick={handleCheckInOut}>
                    {booking.checkInStatus ? 'Check Out' : 'Check In'}
                </Button>
                <Button small onClick={handleDelete}>Delete</Button>
            </ButtonBar>
        </section>
    </StyledCard>
}

export default BookingCard;