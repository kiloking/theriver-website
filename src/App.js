import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Trailer from "./Trailer";
function App() {
  useEffect(() => {
    setTimeout(function() {
        AOS.init({
          
        });
    }, 100);
    // AOS.refresh()
  }, []);
  return (
    <div className="App">
      <Trailer />
    </div>
  );
}

export default App;
