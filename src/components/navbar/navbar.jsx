/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { NavWrapper } from "./navbarStyles";

const Navbar = ({ isScrolled }) => {
   return (
      <NavWrapper className={isScrolled && "scrolling"}>
         <img src={logo} />
         <div>
            <Link to="/">
               <span>Home</span>
            </Link>
            <Link to="about">
               <span>About Us</span>
            </Link>
            <Link to="blog">
               <span>Blog</span>
            </Link>
            <Link to="contact">
               <span>Contact</span>
            </Link>
            <Link to="courses">
               <span>Courses</span>
            </Link>
         </div>
         <Link to="register">
         <button>Register</button>
         </Link>
      </NavWrapper>
   );
};

export default Navbar;
