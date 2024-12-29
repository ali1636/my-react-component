import React, { useState } from 'react'; 
import { useParams } from 'react-router-dom'; 
import '../Styles/UserProfile.css'; // Import the custom CSS for this component

function UserProfile() {
  const { username } = useParams();

  // Initialize state with some default values (these can be fetched from an API)
  const [userData, setUserData] = useState({
    username: username || '',  // Username now editable
    email: `${username}@example.com`, // Default email format
    joinDate: '2024-01-01',
  });

  // Handle change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('User data updated successfully!');
    // Here you can add functionality to save the data, like making an API call
    console.log(userData); // Display updated user data in the console
  };

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>

      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="joinDate">Join Date:</label>
          <input
            type="date"
            id="joinDate"
            name="joinDate"
            value={userData.joinDate}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default UserProfile;
