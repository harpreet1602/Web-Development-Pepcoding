//iske liye clAss component chaiye kyuki data save karna hai
//app ke andar inout component aayega na to app.jsx mai use karna hai
//to yha sai input class export hogi
//aur app.jsx mai import karlo yeh class

// console.log(React.Component);
class Input extends React.Component {
    state = { task: "" };

    render() {
        return (
            <div>
                <input type="text" value={this.state.task} onChange={(e) => { this.setState({ task: e.currentTarget.value }) }} />
                <button onClick={() => { this.props.taskHandlerFunction(this.state.task); }}>Submit</button>
            </div>
        );
    }
}

//input tag mai pehle value change nhi horhi thi phir jab onChange event mai setState karte hue agar task ki value
//mai e.currentTarget.value daal de to hume input tag mai jab bhi change karenge to dikhega
//phir jab submit pai click karenge to uska onClick event chalega jo ki this.state.task ki value dedega
// export default Input;

//ye export and import links cdn mai nhi chlega
//to Input ko index mai upar rakho app ke to uska use kar paoge variable, class or function
