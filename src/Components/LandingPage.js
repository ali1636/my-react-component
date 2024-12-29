import React from 'react';
import '../Styles/LandingPage.css';  // Add your custom styles

function LandingPage() {
  return (
    <section className="landing-page">
      <div className="intro-text">
        <h2>Taste the Kababjees Magic</h2>
        <p>Crispy, delicious chicken that keeps you coming back!</p>
        <button className="order-now-btn">Order Now</button>
      </div>
      <div className="image-container">
        <img src="https://images.deliveryhero.io/image/fd-pk/LH/qcve-listing.jpg" alt="Delicious Chicken Wings" />
      </div>
    </section>
  );
}

export default LandingPage;
