import React, {useState} from "react"
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../App.css"
import { IconContext} from "react-icons";

const handleLogout = () => {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
    window.location.href = '/';
  }

function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const [email, setEmail] = useState(sessionStorage.getItem('email'));

    const [userName, setUserName] = useState(email ? email.split('@')[0] : '');

    const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{color: "darkolivegreen"}}>
    <div className="navbar">
        <Link to="#" className= "menu-bars">
        <FaBars onClick={showSidebar}/>
        </Link>
        <div className="user-info">
      <span className="username">Welcome {userName} </span>
      <span> </span> 
      <button onClick={handleLogout}>Logout</button>
    </div>



    </div>
    <nav className={sidebar ? "nav-menu active" :"nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                <AiOutlineClose/> 
                </Link>
            </li>
            {SidebarData.map((item, index) => {
                return (
                    <li key={index} className = {item.cName}>
                        <Link to={item.path}>
                          {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </nav>
    </IconContext.Provider>
    </>
  );
}

export default NavBar
