import React from 'react';
import './UsersList.css';

function UserList(props) {


    let usersList = props.usersList;
    let usersLiElement = usersList.map((user) => {
        return <li key={user.id}>{user.name} <span onClick={
            () => props.removeUserMethod(user.id)}>X</span></li>
    })
    return (
        <ul className="the-list">
            {usersLiElement}
        </ul>
    );
}

export default UserList;