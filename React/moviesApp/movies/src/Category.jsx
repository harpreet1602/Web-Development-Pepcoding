import React from "react";

class Category extends React.Component {

    state = {
        allGenre: ["Action","Comedy","Romance","Thriller","Horror"],
    }

    componentDidMount(){
        //api call (msg bhejna hai => get)
        fetch("/genre").then(function(res){
            return res.json();
        }).then((json)=>{
            this.setState({allGenre: json});
        });
    }


    render(){
        return(


            <ul className="list-group">
                {this.state.allGenre.map((el)=>{
                    return(
                        <li className="list-group-item" key={el._id}>
                            {el.name}
                        </li>
                    );
                })}
            </ul>
        );
    }

}


export default Category;