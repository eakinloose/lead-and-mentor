/* eslint-disable react/prop-types */

import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 1s forwards;

  h3{
    color: ${({ theme }) => theme.colors?.primary};
  }
`;



export const LoginForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
   
    <Form onSubmit={handleSubmit}>
      <h3>Welcome Back</h3>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </Form>
  );
};

export const RegisterForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle register form submission
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Create an Account</h3>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button type="submit">Sign Up</button>
    </Form>
  );
};
