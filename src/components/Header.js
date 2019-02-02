import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className="item">Chatter Box</Link>
      <Link to='users/login' className="item">Log in</Link>
      <Link to='users/signup' className="item">Sign up</Link> 
    </div>
  );
}

// const DivHeader = styled.div`
//   background: #5c7cfa;
//   display: table;
//   table-layout: fixed;
//   width: 100%;
// `;

// const DivItem = styled.div`
//   text-align: center;
//   padding-top: 1rem;
//   padding-bottom: 1rem;
//   display: table-cell;
//   color: white;
//   text-decoration: none;
//   font-size: 1.1rem;
//   &:hover{
//     background: #748ffc;
//   }
//   &:active{
//     background: white;
//     color: #5c7cfa;
//   }
// `;

export default Header;
