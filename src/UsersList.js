import React from 'react';
import './UsersList.css';

function UserList(props) {

    return (
        <ul className="the-list">
            <li>Łukasz <span>X</span></li>
            <li>Michał <span>X</span></li>
            <li>Marcin <span>X</span></li>
        </ul>
    );
}

export default UserList;