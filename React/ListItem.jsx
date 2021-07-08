function ListItem(props){
        return(
            <li className="taskContainer">
                <span className="tasks">{props.taskVal}</span>
                <button className="deletebtn" onClick={()=>{
                    props.removeTask(props.taskVal);
                }}>X</button>
            </li>
        );

}