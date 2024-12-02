import React from 'react';
import ProductCard from './Components/ProductCard';
function App() {
return (
<div>
<h1>Personal Profile Card</h1>
<ProductCard name={"ali"} age={20} occupation="Student" location="Karachi"/>
</div>
);
}
export default App;