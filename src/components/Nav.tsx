import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
 box-shadow: 0 0 3px rgba(0,0,0,0.25);
 line-height: 24px;
 > ul {
    display: flex;
    > li{
      width: 33.3%;
      text-align: center;
      > a{
        padding: 4px;
        display:flex;
        flex-direction: column;
        align-items: center;
      }
    }
 }
`
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>

          <Link to="/tags">
            <Icon name='tag'/>
            标签页
          </Link>
        </li>
        <li>

          <Link to="/money">
            <Icon name='money'/>
            记账页
          </Link>
        </li>
        <li>

          <Link to="/statistics">
            <Icon name='statistic'/>
            统计页
          </Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav