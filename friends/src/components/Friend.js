import React from 'react';
import { useHistory } from 'react-router-dom';

function Friend (props) {
    const { id, name, age, email} = props.friend;
    const history = useHistory();
    const editFriend = () => {
        history.push(`/friends/${id}`, props.friend)
    }

    return (
        <div>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <button onClick={editFriend}>Edit Friends</button>
        </div>
    )
}

export default Friend;