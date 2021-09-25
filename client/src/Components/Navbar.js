import React, { useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import { useHistory, useLocation } from 'react-router'
import styled from 'styled-components'

const NavBar = () => {
  const history = useHistory()
  const {user, handleLogout } = useContext(AuthContext)
  const location = useLocation()

  const rightNavItems = () => {
    if (user) {
      return (
        <Menu.Item onClick={() => handleLogout(history)}>Logout</Menu.Item>
      );
    }
    return (
      <>
        <Link to="/login">
          <Menu.Item active={location.pathname == "/login"}>Login</Menu.Item>
        </Link>
        <Link to="/register">
          <Menu.Item active={location.pathname == "/register"}>
            Register
          </Menu.Item>
        </Link>
      </>
    );
  };

  return (
    <Menu className='ui inverted fixed menu' color={'#070805'}>
      <Menu.Menu>
      <>
      <Link to='/'>
        <Menu.Item active={location.pathname == "/"}>Home</Menu.Item>
      </Link>
      <Link to='/users'>
        <Menu.Item active={location.pathname == "/users"}>Users</Menu.Item>
      </Link>
      </>
      </Menu.Menu>
      <Menu.Menu position='right'>
        <img src='https://fontmeme.com/permalink/210924/42bbd6409d76d304589922375be6bd6b.png'/>
      </Menu.Menu>
      <Menu.Menu position="right">
        {rightNavItems()}
      </Menu.Menu>
    </Menu>
  )
}

const Myimg = styled.img`
  text-align: center;
`

export default NavBar