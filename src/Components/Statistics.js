import React from 'react';
import "../Styles/statistics.css"

function Statistics ({user}) {
return (
<div className="statistics">
<p>Total users = {user.totalUsers}.</p>
<p>Active users = {user.activeUsers}.</p>
<p>New signups = {user.newSignups}.</p>
<p>Active percentage = {user.activePercentage}.</p>
</div>
);
}
export default Statistics;