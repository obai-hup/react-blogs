import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    const user = false;
    return (
        <div className='top'>
           <div className="toplift">
           <i className="topIcon fab fa-facebook"></i>
           <i className="topIcon fab fa-twitter"></i>
           <i className="topIcon fab fa-instagram"></i>
           <i className="topIcon fab fa-pinterest"></i>
           <i className="topIcon fab fa-linkedin-in"></i>
           </div>
           <div className="topcenter">
               <ul className="toplist">
                   <li className="topListItem">
                       <Link className="link" to="/" >HOME</Link>
                   </li>
                   <li className="topListItem">
                   <Link className="link" to="/" >ABOUT</Link>
                   </li>
                   <li className="topListItem">
                   <Link className="link" to="/" >CONTACT</Link>
                   </li>
                   <li className="topListItem">
                       <Link className="link" to="/write" >WRITE</Link>
                   </li>
                   <li className="topListItem">
                        {user && "LOG OUT"}
                   </li>
               </ul>
           </div>
           <div className="topright"> 
           {
               user ? (
                <img className="topImg" src="/pic.jpg" alt="" />
               ) :
               <ul className="toplist">
                   <li className="topListItem"><Link className="link" to="/login" >LOGIN</Link></li>
               
               <li className="topListItem"><Link className="link" to="/register" >REGISTER</Link></li>
               
               </ul>
           }
               
                <i className="SearchIcon fas fa-search"></i>
           </div>
        </div>
    )
}
