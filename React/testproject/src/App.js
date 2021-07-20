import React from "react";
import SearchBox from "./SearchBox";
import List from "./List";
import { render } from "@testing-library/react";
class App extends React.Component{
  state={
    pets:[]
  }

  petsHandler = (obj)=>{
    let tempArr = this.state.pets;
    if(tempArr.length!=0)
    tempArr=[];
    tempArr.push(obj);
    this.setState({pets:tempArr});
  };

  render(){
  return (
    <div>
      <div className="row">
      <div className="col-3">
      <SearchBox petsFunction = {this.petsHandler}/>
      </div>
      </div>
      <div className="row">
        <div className="col-8 m-3">
        <List petInfo = {this.state.pets}/>
        </div>
      </div>
    </div>
  );
}
}
export default App;
