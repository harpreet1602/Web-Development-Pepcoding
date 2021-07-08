function ListItem(props){
        return(
            <li class="taskContainer" key={Date.now()}>
                <span class="tasks">{props.taskVal}</span>
                <button class="deletebtn">X</button>
            </li>
        );

}