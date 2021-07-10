import React from "react";

class Category extends React.Component {

    state = {
        allGenre: ["Action","Comedy","Romance","Thriller","Horror"],
    }

    render(){
        return(


            <ul className="list-group">
                {this.state.allGenre.map((el)=>{
                    return(
                        <li className="list-group-item" key={el}>
                            {el}
                        </li>
                    );
                })}
            </ul>
        );
    }

}


export default Category;