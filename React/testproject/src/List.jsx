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
       let arr=[];
       console.log(this.props.petInfo);
      

        arr =  this.state.allPets.filter((el)=>{
            // this.props.petInfo.map((e)=>{
                // return e.city == el.city && e.animal == el.animal && e.breed == el.breed;
            // })
            for(let i=0;i<this.props.petInfo.length;i++)
            return  el.city==this.props.petInfo[i].city && el.animal==this.props.petInfo[i].animal &&  el.breed==this.props.petInfo[i].breed;
         
           
        })
        console.log(arr);
    
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
                               
                                arr.map((el) => {
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