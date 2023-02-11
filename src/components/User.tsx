import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { hideUser, showUser } from '../Redux/UserSlice';
import { RootState } from '../Redux/store';


function User() {
    const [name, setName] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const { username } = useSelector((state: RootState) => state.user.value);
    const dispatch = useDispatch();
    return (
        <div>
            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={handleChange}
            />
            <button className="btn lg-btn btn-dark" onClick={() => dispatch(showUser({username: name}))} > Enter</button>
        <h1> Hi {username}</h1>
        <button  onClick={() => dispatch(hideUser())}>Hide User Name</button>
        </div>
    )
}

export default User