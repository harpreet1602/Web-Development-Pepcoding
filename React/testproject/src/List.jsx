import React from "react";

class List extends React.Component {
    state = {
        allPets: [],
    };

    componentDidMount() {
        fetch("/pets").then(function (res) {
            return res.json();
        }).then((json) => {
            this.setState({ allPets: json });
        });
    }
    render() { 
        this.state.allPets.filter((el)=>{
            if(this.props.petInfo[0])
            return this.props.petInfo[0].city == el.city && this.props.petInfo[0].animal == el.animal && this.props.petInfo[0].breed == el.breed;
              })
            console.log(this.state.allPets);

        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Pet Name</th>
                            <th scope="col">Animal type</th>
                            <th scope="col">Breed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                               
                                this.state.allPets.map((el) => {
                                return ( 
                                    <tr key={el.id}>
                                        <td>{el.name}</td>
                                        <td>{el.animal}</td>
                                        <td>{el.breed}</td>
                                    </tr>
                                
                            )}
                                )}
                             
                             
                    </tbody>
                </table>
            </div>
        );
}
}

export default List;