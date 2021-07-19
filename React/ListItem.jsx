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
// props na parent sai child mai object aaya hai jise hum apni values dikhaenge taskVal sai 
//delete karne par parent sai delete kardenge pura li using props aur ye vala na actually app sai list
// mai aaya and then props listItem mai aaya kyuki element app sai pura remove karna hoga
 