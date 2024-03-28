import React from "react";
class User extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.name +"Constructon Called C");

        //using useState in ClassBased Component
        this.state={
            username:{
                name:"dummy",
                location:"default"
            }
            
            // count:0,
        }
    };
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/akshaymarch7");
        const json=await data.json();
        // console.log(json);
        console.log(this.props.name+ "Component Called C");

        this.setState(
        {
            username:json,
        })
        
    }
    render(){
        console.log(this.state.username.name +"Render Called C");
        return(
            <div>
                <h2>Name: {this.state.username.name}</h2>
                <h2>Location: {this.state.username.location}</h2>
                <h2>Contact:_bhaumik_12</h2>


                {/* <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}>
                <span>Count</span>
                </button> */}
                {/* <h2>{this.state.count}</h2> */}
            </div>
        )
    }
}
export default User;