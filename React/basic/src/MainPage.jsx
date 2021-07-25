import React from "react";
import {Link} from "react-router-dom";

class MainPage extends React.Component {
 state = { userData:[] };
 
 componentDidMount(){
   fetch("/users.json").then((res)=>{
    return res.json();
   }).then((json)=>{
     this.setState({userData : json});
     console.log(json);
   });
 }



  render(){
  return (
  <div>
  {/* <h1>Main Page</h1>    */}
  <ul>
  {
    this.state.userData.map((el)=>{
      <li key ={el.id}> 
      <Link to = {`/users/${el.id}`}>{el.name}</Link>
       </li>
    })
  }
  </ul>
  </div>
  );
}
}
export default MainPage;
