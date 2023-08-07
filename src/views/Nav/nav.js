import React from "react";
import './nav.scss';
import {
  Link, NavLink
} from "react-router-dom";

class Nav extends React.Component {


  render() {
    return (

      <ul>
        <li><NavLink activeClassName="active" to="/" exact={true}>Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/todos">Todos</NavLink></li>
        <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
        <li><NavLink activeClassName="active" to="/users">Users</NavLink></li>
        <li><NavLink activeClassName="active" to="/categories">Loại Tour</NavLink></li>
        <li><NavLink activeClassName="active" to="/tours">Tour</NavLink></li>
        <li><NavLink activeClassName="active" to="/hooks">Hooks</NavLink></li>

      </ul>

    )
  }


}

export default Nav;