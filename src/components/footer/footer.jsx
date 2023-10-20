import { FooterWrapper } from "./footerStyles";
import logo from "../../assets/logo.png";
import cards from "../../assets/cards.png";

const Footer = () => {
   return (
      <FooterWrapper>
         <div className="right">
            <div className="first">
               <img src={logo} alt="logo" />
               <p>
                  Lead And Mentor (LAM) is a coaching, mentoring, and
                  educational social enterprise at the forefront of guiding
                  teeming youths through career & lifestyle success
               </p>
            </div>

            <div className="second">
               <span>Quick Links</span>
               <br />
               <br />
               <span>Home</span>
               <span>About Us</span>
               <span> Blog</span>
               <span>Contact</span>
               <span>Courses</span>
               <span>Donation</span>
            </div>
         </div>
         <div className="third">
            <span>Contact Us</span>
            <br />
            <br />
            <span>info@leadandmentor.com</span>
            <span>+234 8027 049 297</span>
            <span>
               5, OGUNSHE STREET, SAWMILL BUS STOP, SAGAMU ROAD, IKORODU, LAGOS,
               NIGERIA.
            </span>
            <br />

            <span>Accepted</span>
            <img src={cards} alt="cards" />
         </div>
      </FooterWrapper>
   );
};

export default Footer;
