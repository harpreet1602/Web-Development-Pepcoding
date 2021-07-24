function Form(props){
    return(
        <div className="form"> 
            <button className="theme-button"
            onClick={()=>{
                if(props.theme == "light") props.handleTheme("dark");
                else props.handleTheme("light");
            }}
            >
                Theme - {props.theme}
            </button>
            <div className="all-input">
                <input type="text" placehorlder="Name" onChange={(e)=>{
                    props.handleName(e.currentTarget.value);
                }} />
                <input type="email" placehorlder="Email" onChange={(e)=>{
                    props.handleEmail(e.currentTarget.value);
                }}
                    />
                
                <input type="number" placehorlder="Phone" onChange={(e)=>{
                    props.handlePhone(e.currentTarget.value);
                }}
                    />




            </div>



        </div>
    );
}
export default Form;