// is file mai app component hoga 
//class bana ke karenge same class name as file name
//component ka naam capital hi hona chaiye nhi to react samjh nhi pata component ko
//class ka a chahe chota ho koi fark nhi padta
//component finction ya class vala ho sakgta hai
//to jab data save nhi karna as state ka use karke to function use karo
//otherwise data sace karna hai to class component banana hoga


//input box ko button ke sath ek component dekhne vale hai
//
// this is component composition when we have used Input component into App component

// import Input from "./Input.jsx";
class App extends React.Component{
    state={
        taskData : []
    }

    taskHandler = (value)=>{
        let tempArr = this.state.taskData;
        tempArr.push(value);
        this.setState({taskData:tempArr});
    }

    render(){
    return (
        <div>
            <Input taskHandlerFunction = {this.taskHandler}/>
            <List tasks = {this.state.taskData}/>    
        </div>
    );
    }
}

ReactDOM.render(<div>
        <App/>
    </div>,document.querySelector("#root"));