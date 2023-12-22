// import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globalstyles";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Page404 from "./pages/404/404";
import Admin from "./pages/admin/admin";
import Navbar from "./components/navbar/navbar";
import { useState } from "react";
import About from "./pages/about/about";
import Blog from "./pages/blog/blog";

const theme = {
   colors: {
      white: "#ffffff",
      black: "#000000",
      primary: "#F37D02",
      secondary: "#177415",
      button: "#177415",
      buttonHover: "#375425",
      grey01: "#fbfbfb",
      grey02: "#e2e2e2",
      inputhover: "#f3f0f0c3",
      transparent: "transparent",
      red: "#e0515f",
   },
};

function App() {
   //  const [display, setDisplay] = useState(true);
   const [isScrolled, setIsScrolled] = useState(false);

   //  const toggledisplay = () => {
   //     setDisplay(!display);
   //  };

   window.onscroll = () => {
      setIsScrolled(window.scrollY === 0 ? false : true);
      return () => (window.onscroll = null);
   };

   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <Navbar isScrolled={isScrolled} />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Page404 />} />
            {/* <Route path="/news/:id" element={<News />} /> */}
         </Routes>
      </ThemeProvider>
   );
}

export default App;
