function List(props){    
    return(
        <ul class="list">
            {
            props.tasks.map((e)=>{
                return <ListItem taskVal={e}/>;
            })
            }
        </ul>
    );
}
//taskData array ke andar map laga ke har ek string task mil rha hai
//ab use hum jonsa listitem bana ke lae hai uske taskVal attribute mai daal de rhe hai
//aur ListItem file ke andar ul tag ke andar span tag mai props ka istemaal karke
//hum taskVal attribute ki value lake daal de rhe hai