import BlogCard from "../blogCard";
import {
   CardsAndTestimoniesWrapper,
   CardGrid,
} from "./cardsAndTestimoniesStyles";

import { blogData, blogData2, blogData3 } from "./cardsData";

const CardsAndTestimonies = () => {
   return (
      <CardsAndTestimoniesWrapper>
         <h3>Featured Courses</h3>
         <CardGrid>
            {blogData.map((blog) => (
               <BlogCard
                  key={blog.id}
                  image={blog.image}
                  title={blog.title}
                  text={blog.text}
                  rating={blog.rating}
               />
            ))}
         </CardGrid>
         <h3>Our Blog</h3>
         <CardGrid>
            {blogData2.map((blog) => (
               <BlogCard
                  key={blog.id}
                  image={blog.image}
                  title={blog.title}
                  text={blog.text}
               />
            ))}
         </CardGrid>{" "}
         <h3>Donation</h3>
         <CardGrid>
            {blogData3.map((blog) => (
               <BlogCard
                  key={blog.id}
                  image={blog.image}
                  title={blog.title}
                  text={blog.text}
               />
            ))}
         </CardGrid>
      </CardsAndTestimoniesWrapper>
   );
};

export default CardsAndTestimonies;
