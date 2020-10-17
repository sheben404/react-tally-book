import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import x from 'icons/tag.svg'

console.log(x);

const NavWrapper = styled.nav`
 box-shadow: 0 0 3px rgba(0,0,0,0.25);
 line-height: 24px;
 > ul {
    display: flex;
    > li{
      width: 33.3%;
      text-align: center;
      padding: 16px;
    }
 }
`
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <img src={x} />
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav