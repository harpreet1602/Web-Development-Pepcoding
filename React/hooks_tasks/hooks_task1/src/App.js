import { useState, useEffect } from "react";

function App() {

  let [timepoint,setTimepoint] = useState(0);
  useEffect(()=>{
    // console.log("heelo");
    fetch("https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0")
    .then(function (res) {
      return res.json();
    })
    .then((json) => {
      setTimepoint(timepoint = json);
    });
  },[]);
  // console.log("comp");
 console.log(timepoint);
  return (
      <div>
       {
         timepoint.
       }
      </div>   
  );
}

export default App;
