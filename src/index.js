import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { styled } from 'styled-components';

const Root = styled.main`
  background-color: #f8f8f8;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Root>
    <App />
  </Root>
);
