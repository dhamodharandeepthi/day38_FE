import React from 'react'
import NavBar from './NavBar';

function Home() {
  return (
    <div>
      <NavBar />
      <h2>Welcome to the Home page of a Social Media App</h2>
      <p>This application allows users to register,login,and view the list of users registered in the application.</p>
      <p>Moreover,the authenticated users can then:</p>
      <ul>
        <li>View their profile</li>
        <li>Update their profile</li>
        <li>Delete their profile</li>
      </ul>
    </div>
  )
}

export default Home;