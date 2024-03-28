import User from "./User";
import React from "react";
class About extends React.Component{
    constructor(props){
    super(props);
    console.log("Constructon Called P");
    };

    componentDidMount(){
        console.log("Component Called P");
    };

    render(){
        console.log("render Called P");
        return (
                <div>
                    <h1>About</h1>
                    <h2>This is react🚀</h2> 
                    <User name={"First"} location={"Mirzapur"}/>
                    {/* <User name={"Second"} location={"Mirzapur"}/> */}
                </div>
            )
    }
}








// const About=()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is react🚀</h2>
//             <User name={"Bhaumik sahu"} location={"Mirzapur"}/>
//         </div>
//     )
// }
export default About;