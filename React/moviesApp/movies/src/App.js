// import Test1 from "./Test1";
// import Test2 from "./Test2";

import React from "react";
import Navbar from "./Navbar";
import Category from "./Category";
import Search from "./Search";
import Table from "./Table";

class App extends React.Component {
state = {
  noOfMovies: 0,
  searchString: "",
  currGenre: "All Genre",
}

receiveCurrGenre = (genre)=>{
    this.setState({currGenre:genre});
  }
  receiveSearchParam = (param)=>{
    this.setState({searchString: param});
  }
  render(){
  return (
    // <div>
    //   {(props.logged)?<h1>Simple html </h1>:<Test2/>}
    // </div>

    <React.Fragment>
    <div className="row">
        <div className="col-2 p-4">
          <Category 
          receiveCurrGenre = {this.receiveCurrGenre}
          />
        </div>

        <div className="col-10 p-4">
          <div className="row">
            <div className="col-3">
              <Search receiveSearchParam = {this.receiveSearchParam}/>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <Table 

              searchString = {this.state.searchString}
              currGenre = {this.state.currGenre}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
}

export default App;
