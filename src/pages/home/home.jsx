// import logo from "../../assets/logo.png";
// import BlogCard from "../../components/blogCard";
// import Card from "../../components/card";
import CardsAndTestimonies from "../../components/cardsAndTestimonies/cardsAndTestimonies";
// import { blogData } from "../../components/cardsAndTestimonies/cardsData";
import Discover from "../../components/discover/discover";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import NewsLetter from "../../components/newsLetter/newsLetter";
import Logs from "../../components/weblogs/logs";

const Home = () => {
   return (
      <div>
         <Hero />
         <Logs />
         <Discover />
         <CardsAndTestimonies />
         <NewsLetter />
         <Footer />
         {/* <h2>Home</h2>
         <img src={logo} />
         <br />
         <button>button type</button>
         <br />
         <br />
         <button className="buttonClear">button type 2</button>
         <br />
         <br />
         <Card>
            <h2>Header</h2>
            <p>
               Aliqua dolore nostrud tempor sunt reprehenderit commodo eiusmod
               laboris ullamco.
            </p>
         </Card>
         <br />
         <Card backgroundcolor={"f8f8f8"} textColor={"black"}>
            <h2>Header</h2>
            <p>
               Aliqua dolore nostrud tempor sunt reprehenderit commodo eiusmod
               laboris ullamco.
            </p>
         </Card>
         <br />
         <br />
         {blogData.map((blog) => (
            <BlogCard
               key={blog.id}
               image={blog.image}
               title={blog.title}
               text={blog.text}
               rating={blog.rating}
            />
         ))} */}
      </div>
   );
};

export default Home;
