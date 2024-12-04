import React from 'react';
import "../Styles/userdata.css"

function UserData ({user}) {
return (
<div className="user">
    <p> {user.name}.</p>
    <p> {user.email}.</p>
    <p> {user.role}.</p>
    <img src= {user.profilePicture} alt="img"/>
</div>
);
}
export default UserData;