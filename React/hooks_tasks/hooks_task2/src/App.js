import { useEffect, useState } from 'react';  
import "./App.css";

function App() {  
  let [activities, setActivities] = useState([]);
  useEffect(()=>{

//yha par logic hoga message display karne ka

    if(activities.length==0)
    return;
    let p = document.createElement("p");
    p.innerText = "New Activity was added";
    p.classList.add("msg");
    document.querySelector("body").append(p);

    setTimeout(()=>{
      p.remove();
    },2000);

  },[activities]);

  return (
      <div>
       
 
      <button onClick = {async()=>{
        let res = await fetch("https://www.boredapi.com/api/activity/");
        let json = await res.json();
        let newActivity = json.activity;
        // ...(spread operator -> it tells us that all the array elements will be available individually a
        // nd then this new activity is also added into it so it is basically a feature of appending that we wanted to
        // acheive) all the elements will come in place of ...activities and one more new activity then this all will be
        // set in  the activities array
        setActivities([...activities,newActivity]); 
      }}>New Activity</button>  

      <ul>
        {
          activities.map((el)=>{
            return <li>{el}</li>;
          })
        }
      </ul>

      </div>
    );
}

export default App;
