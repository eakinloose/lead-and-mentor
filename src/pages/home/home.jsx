import logo from "../../assets/logo.png";
import BlogCard from "../../components/blogCard";
import Card from "../../components/card";
import Hero from "../../components/hero/hero";

const blogData = [
   {
      id: 1,
      image: "https://avatars.mds.yandex.net/i?id=42ce4f6274a45b1f1e7848568f996e226ac3a590-9265564-images-thumbs&n=13",
      title: "Blog Post 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing Consequat do do nulla id officia veniam ea reprehenderit qui anim.Do ipsum et quis amet mollit culpa do.Aute tempor non cillum tempor ex elit ut sint nostrud occaecat excepteur.Aute sit dolore duis laboris incididunt qui non amet velit laboris do esse aliqua irure.elit...",
      rating: 4,
   },
   {
      id: 2,
      image: "https://avatars.mds.yandex.net/i?id=09139e6c5ced653b30ad06838ac4d25bd0fd4ec8-9291521-images-thumbs&n=13",
      title: "Blog Post 2",
      text: "Vivamus facilisis urna magna, at feugiat felis iaculis nec.ææQuis commodo aliqua exercitation laborum deserunt.Deserunt laboris ipsum ad officia ea proident commodo magna consequat do excepteur ea.Adipisicing aliquip sunt ex et laboris tempor ullamco irure quis.Anim eu enim anim consectetur velit ex sint sint qui excepteur quis tempor...",
      rating: 3,
   },
   {
      id: 3,
      image: "https://avatars.mds.yandex.net/i?id=62ad365a4b4bba85b0d179e82da7e574445ec8f7-8187767-images-thumbs&n=13",
      title: "Blog Post 2",
      text: "Vivamus facilisis urna magna, at feugiat felis iaculis nec.ææQuis commodo aliqua exercitation laborum deserunt.Deserunt laboris ipsum ad officia ea proident commodo magna consequat do excepteur ea.Adipisicing aliquip sunt ex et laboris tempor ullamco irure quis.Anim eu enim anim consectetur velit ex sint sint qui excepteur quis tempor...",
   },
];

const Home = () => {
   return (
      <div>
         <Hero />
         <h2>Home</h2>
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
         ))}
      </div>
   );
};

export default Home;
