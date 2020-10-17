import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
require('icons/tag.svg')
require('icons/money.svg')
require('icons/statistic.svg')

const NavWrapper = styled.nav`
 box-shadow: 0 0 3px rgba(0,0,0,0.25);
 line-height: 24px;
 > ul {
    display: flex;
    > li{
      width: 33.3%;
      text-align: center;
      padding: 4px;
      display:flex;
      flex-direction: column;
      align-items: center;
    }
 }
`
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <svg className='icon'>
            <use xlinkHref='#tag'/>
          </svg>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <svg className='icon'>
            <use xlinkHref='#money'/>
          </svg>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <svg className='icon'>
            <use xlinkHref='#statistic'/>
          </svg>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav