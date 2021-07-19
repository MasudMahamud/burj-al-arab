import React from 'react';
import Room from '../Room/Room';

const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    const rooms = [
        {
            title: 'Standard Single Room',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgUrl: 'https://i.ibb.co/ScWcgVw/Single.png',
            bed: 1,
            capacity: 1,
            bedType: 'Single',
            avatar: 'S',
            price: 119
        },
        {
            title: 'Couple Power Room',
            description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
            imgUrl: 'https://i.ibb.co/3vyTm07/Double.png',
            bed: 1,
            capacity: 2,
            bedType: 'Double',
            avatar: 'D',
            price: 149
        },
        {
            title: 'Family Capacity Room',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: 'https://i.ibb.co/kMnqWvN/Family.png',
            capacity: 4,
            bedType: 'Family',
            avatar: 'F',
            price: 199
        }
    ]
    return (
        <div style={style}>
            {
                rooms.map(room => <Room key={room.bedType} room={room}></Room>)
            }
        </div>
    );
};

export default Home;