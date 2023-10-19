import heroimage from "../../assets/heroimage.png";
import { HeroWrapper } from "./heroStyles";

const Hero = () => {
   return (
      <HeroWrapper>
         <div className="text-content">
            <h1 className="primary">Let&rsquo;s make a </h1>
            <h1 className="secondary">Difference</h1>
            <p>
               Lead And Mentor (LAM) is a coaching, mentoring, and educational
               social enterprise at the forefront of guiding teeming youths
               through career & lifestyle success to bring about positive
               communal development. With about a decade of engaging youths as
               educational guides to career coaches as well as lifestyle
               counselors, we have trained and developed youths into vanguards
               adding positive value to communal growth and career development.
            </p>
            <div className="btn-flex">
               <button>Get Started</button>
               <button className="buttonClear">Discover Now</button>
            </div>
         </div>
         <img src={heroimage} />
      </HeroWrapper>
   );
};

export default Hero;
