import React, {useState} from "react";
import {Button} from './button';
import {Dropdown} from './dropdown';
import './nav.scss';
import {
  Link, NavLink
} from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navbar">
        <Link to='/' className="navbar-logo">
          EPIC
        </Link>
      </nav>
    </>
  )
}


// class Nav extends React.Component {

//   render() {

//     // Get elements from the DOM


//     return (


//       <div className="navbar">
//         <a href="#home">Home</a>
//         <a href="#news">News</a>
//         <div className="dropdown">
//           <button className="dropbtn">Dropdown
//             <i className="fa fa-caret-down"></i>
//           </button>
//           <div className="dropdown-content">
//             <a href="#">Link 1</a>
//             <a href="#">Link 2</a>
//             <a href="#">Link 3</a>
//           </div>
//         </div>
//       </div>


<ul>
  <li><NavLink activeClassName="active" to="/" exact={true}>Home</NavLink></li>
  <li><NavLink activeClassName="active" to="/todos">Todos</NavLink></li>
  <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
  <li><NavLink activeClassName="active" to="/users">Users</NavLink></li>
  <li><NavLink activeClassName="active" to="/categories">Loại Tour</NavLink></li>
  <li><NavLink activeClassName="active" to="/tours">Tour</NavLink></li>
  <li><NavLink activeClassName="active" to="/hooks">Hooks</NavLink></li>

</ul>

//     )
//   }


// }

export default Nav;