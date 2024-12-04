import React from 'react';
import "../Styles/messages.css"

function Messages ({user}) {
return (
<div className="messages">
<p> {user.message1}.</p>
<p> {user.message2}.</p>
<p> {user.message3}.</p>
</div>
);
}
export default Messages;