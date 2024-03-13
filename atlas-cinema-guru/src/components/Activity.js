import React from 'react';
import './components.css';
import '../routes/navigation/SideBar';

export default function Activity ( props ) {
    const { userUsername, title, date } = props;

    return (
        <li className='activity'>
            <p>
                <span className='activity-red'>
                    {userUsername} added {title} </span>
                    <span className='activity-it'>to watch later - {date} </span>
            </p>
        </li>
    );
}
