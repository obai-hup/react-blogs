import { Link } from "react-router-dom";
import './register.css'

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
           <form  className="registerForm">
           <label >UserName</label>
               <input type="text" className="loginInput" placeholder="Enter Your UserName..."/>
               <label >Email</label>
               <input type="text" className="loginInput" placeholder="Enter Your Email..."/>
               <label >Password</label>
               <input type="password" className="loginInput" placeholder="Enter Your Password..."/>
            <button className="registerButton">Register</button>
           </form>
           <button className="registerloginButton">
           <Link className="link" to="/login">Login</Link>
           </button>
        </div>
    )
}
