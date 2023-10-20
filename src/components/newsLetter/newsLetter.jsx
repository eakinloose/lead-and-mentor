import { useState } from "react";
import { NewsLetterWrapper } from "./newsLetterStyles";
import send from "../../assets/send.png";

const NewsLetter = () => {
   const [email, setEmail] = useState("");
   return (
      <NewsLetterWrapper>
         <h3>Subscribe to our NewsLetter</h3>
         <br />
         <div className="subscribe">
            <input
               type="email"
               id="newsLetter"
               placeholder="Email Address"
               onChange={(e) => setEmail(e.target.value)}
               value={email}
               required
            />
            <div className="send">
               <img src={send} alt="send " />
            </div>
         </div>
      </NewsLetterWrapper>
   );
};

export default NewsLetter;
