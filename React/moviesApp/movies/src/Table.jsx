import React from "React";

class Table extends React.Component{
   state={
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

   render(){
       return(
        <div>
        
        </div>

       );
   }

}

export Table default;