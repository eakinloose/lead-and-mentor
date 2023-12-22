import BlogCard from "../../components/blogCard";
import { DualCardGrid } from "../../components/cardsAndTestimonies/cardsAndTestimoniesStyles";
import { blogData3 } from "../../components/cardsAndTestimonies/cardsData";
import Footer from "../../components/footer/footer";
import PageHero from "../../components/pageHero/pageHero";

const Blog = () => {
   return (
      <div>
         <PageHero
            image="https://img.freepik.com/free-photo/man-playing-badminton-medium-shot_23-2149733055.jpg?w=1380&t=st=1701715798~exp=1701716398~hmac=f701aa7d9e05c636286db61297d559540d55490cd39d9d6f80717d00c34dc652"
            text="Blog"
         />
         <DualCardGrid>
            {blogData3.map((blog) => (
               <BlogCard
                  key={blog.id}
                  image={blog.image}
                  title={blog.title}
                  text={blog.text}
               />
            ))}
            {blogData3.map((blog) => (
               <BlogCard
                  key={blog.id}
                  image={blog.image}
                  title={blog.title}
                  text={blog.text}
               />
            ))}
         </DualCardGrid>
         <Footer/>
      </div>
   );
};

export default Blog;
