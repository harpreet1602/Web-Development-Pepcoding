import React from "react";

class SearchBox extends React.Component {
    state = {
        city:"",
        animal:"",
        breed:""
    };

    render() {
        return (
            <div>
                <div class="input-group mb-3 m-3">
                    <span class="input-group-text" id="basic-addon1">City</span>
                    <input type="text" class="form-control" placeholder="City" aria-label="Username" aria-describedby="basic-addon1" 
                     onChange={(e) => {
                         console.log(e.currentTarget.value);
                        this.setState({ city: e.currentTarget.value });
                      }}
                      />
                </div>

                <label class="m-3" for="cars">Animal: </label>
                <select class="m-3" name="animal" id="animal"
                 onChange={(e) => {
                     
                    console.log(e.currentTarget.value);
                    this.setState({ animal: e.currentTarget.value });
                  }} 
                  >
                      <option value="select">select</option>
                    <option value="dog">dog</option>
                    <option value="rabbit">rabbit</option>
                    <option value="bird">bird</option>
                    <option value="reptile">reptile</option>
                </select>
                <br/>
                <label class="m-3" for="cars">Breed: </label>
                <select class="m-3" name="breed" id="breed"
                 onChange={(e) => {
                     
                    console.log(e.currentTarget.value);
                    this.setState({ breed: e.currentTarget.value });
                  }} 
                 >
                     {/*  onFocus="this.selectedIndex = -1;" */}
                     <option value="select">select</option>
                    <option value="Havanese">Havanese</option>
                    <option value="Goldendoodle">Goldendoodle</option>
                    <option value="Boxer">Boxer</option>
                    <option value="Wheaten Terrier">Wheaten Terrier</option>
                    <option value="Cockatoo">Cockatoo</option>
                    <option value="Horned Lizard">Horned Lizard</option>
                    <option value="Shih Tzu">Shih Tzu</option>
                    <option value="American">American</option>
                    <option value="Labrador">Labrador</option>

                </select>
                <button type="button" class="btn btn-success m-3" onClick={
                    ()=>{
                        console.log(this.state);

                        this.props.petsFunction(this.state);
                    }
                }>Submit</button>

            </div>
        );
    }
}

export default SearchBox;