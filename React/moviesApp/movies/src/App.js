// import Test1 from "./Test1";
// import Test2 from "./Test2";

import React from "react";
import Navbar from "./Navbar";
import Category from "./Category";
import Search from "./Search";

function App(props) {
  return (
    // <div>
    //   {(props.logged)?<h1>Simple html </h1>:<Test2/>}
    // </div>

    <React.Fragment>
      <Navbar/>

      <div className="row">
        <div className="col-2 p-4">
          <Category/>
        </div>

        <div className="col-10 p-4">
          <div className="row">
            <div className="col-3">
              <Search/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
