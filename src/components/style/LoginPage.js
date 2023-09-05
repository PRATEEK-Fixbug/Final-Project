import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Login here</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit" className='button1'>Login</button>
          <p className='para'>Don't have an account ? <button type='submit' className='button2'>Sign up</button></p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
