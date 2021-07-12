import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../helpers/axiosWithAuth';
import Friend from './Friend';

function FriendsList () {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        axiosWithAuth().get('/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {friends.map(friend => (
                <Friend friend={friend} key={friend.id} />
            ))}
        </div>
    )
}

export default FriendsList;