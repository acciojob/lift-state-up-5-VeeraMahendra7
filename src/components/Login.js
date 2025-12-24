import React from 'react'

const Login = ({isLoggedIn, onLogin}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
    }

  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ):(
        <form onSubmit={handleSubmit}>
            <label htmlFor='uname'>Username:</label>
            <input type='text' id='uname' required/> <br /><br />
            <label htmlFor='passwd'>Password:</label>
            <input type='password' id='passwd' required/> <br /> <br />
            <button type='submit'>Login</button>
        </form>
      )}
    </div>
  )
}
export default Login
