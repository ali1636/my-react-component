import React from 'react';
import './App.css'; // Import global styles
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Form from './Form';
import Footer from './Footer'; 

function App() {
return (
<div>
<Navbar />
<LandingPage />
<Form/>
<Footer/>
</div>
);
}
export default App;