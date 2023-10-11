import logo from "../../assets/logo.png";
import { NavWrapper } from "./navbarStyles";

const Navbar = () => {
   return (
      <NavWrapper>
         <img src={logo} />
         <div>
            <span>Home</span>
            <span>About Us</span>
            <span>Blog</span>
            <span>Contact</span>
            <span>Courses</span>
         </div>
         <button>Register</button>
      </NavWrapper>
   );
};

export default Navbar;
