import React, { useState } from 'react';
import { useAuth } from '../store/store';

const Login = () => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const { user, loginUser } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser({ ...userInfo });
    setUserInfo({ email: '', password: '' });
  };

  return (
    <>
      <form onSubmit={(e) => handleLogin(e)}>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          value={userInfo.password}
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
        <button type='submit'>Login</button>
      </form>
      <section>{user && <p>Logged in as {user.email}</p>}</section>
    </>
  );
};

export default Login;
