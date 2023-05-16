import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Sections from "./Sections";
import Section06 from "./Section06";
import Footer from "./Footer";
function App() {
  useEffect(() => {
    setTimeout(function() {
        AOS.init({
          
        });
    }, 100);
    // AOS.refresh()
  }, []);
  return (
    <div className="App bg-[#f8f2ec]">
      <Header />
      <Sections />
      <Section06 />
      <Footer />
    </div>
  );
}

export default App;
