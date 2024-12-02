import React from 'react';

function ProductCard (props) {
   // const { name, age, occupation, location } = props;
return (
<div>
<p>Hello, {props.name}!</p>
<p>You are {props.age} years old.</p>
<p>Your accupation is {props.occupation}</p>
<p>you live in {props.location}</p>
</div>
);
}
export default ProductCard;