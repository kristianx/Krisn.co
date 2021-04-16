import './Nav.css';
import {NavLink} from 'react-router-dom'


function Nav() {
  return (
    <nav className="nav-section">
        <h1 className="Logo-text">Kristian Cupurdija</h1>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/casestudies">Case Studies</NavLink></li>
        </ul>
    </nav>
  );
}

export default Nav;
