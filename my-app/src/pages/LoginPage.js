import React from 'react';
import Login from '../components/login/Login';

const LoginPage = (props) => {
  const { history } = props;

  return (
    <div>
      <button onClick={() => history.push('/')}>뒤로가기</button>
      <Login />
    </div>
  );
};

export default LoginPage;
