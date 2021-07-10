import React from "react";

class Table extends React.Component {
    state = {
        allMovies: [
            {
                title: "Terminator",
                genre: "Action",
                stock: "2",
                rate: "2.5",
            },
            {
                title: "Die Hard",
                genre: "Action",
                stock: "3",
                rate: "2.5",
            },
            {
                title: "Get Out",
                genre: "Comedy",
                stock: "5",
                rate: "3",
            },
            {
                title: "Trip to Italy",
                genre: "Romance",
                stock: "6",
                rate: "3.5",
            },
        ]
    };

    render() {
        let numberOfPages = Math.ceil(this.state.allMovies.length / 5);
        let arr = [];
        for (let i = 1; i <= numberOfPages; i++) {
            arr.push(i);
        }

        return (
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allMovies.map((el)=>{
                            return(
                                
                        <tr>
                        <td>{el.title}</td>
                        <td>{el.genre}</td>
                        <td>{el.stock}</td>
                        <td>{el.rate}</td>
                        <td>Like</td>
                        <td>
                        <button type="button" class="btn btn-primary">
                            Delete    
                        </button>
                        </td>
                    </tr>
    
                            );
                        })}



                    </tbody>
                </table>



            </div>

        );
    }

}

export default Table;