import styled from 'styled-components';
import { NavLink} from 'react-router-dom';
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
        &.active{
          color:red;
        }
      }
    }
 }
`
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName='active'>
            <Icon name='tag'/>
            标签页
          </NavLink>
        </li>
        <li>

          <NavLink to="/money" activeClassName='active'>
            <Icon name='money'/>
            记账页
          </NavLink>
        </li>
        <li>

          <NavLink to="/statistics"activeClassName='active'>
            <Icon name='statistic'/>
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>

  );
}

export default Nav