import React,{Component} from 'react';

class UserGreeting extends Component{
    constructor(props){
        super(props)

        this.state={
            isLoggedIn:true
        }
    }
    render(){
        return this.state.isLoggedIn ?(
        <div>Welcome rohan</div>) :(
            <div>Bye Rohan</div>
        )
        // let message
        // if(this.state.isLoggedIn)
        // {
        //     message = <div>Hello rohan</div>
        // }
        // else
        // {
        //     message = <div>Bye Rohan</div>
        // }
        // return (
        //     <div>{message}</div>
        // )
        // if(this.state.isLoggedIn)
        // {
        //     return (
        //         <div>
        //             Welcome Rohan
        //         </div>
        //     )
        // }
        // else
        // {
        //     return (
        //         <div>
        //             <div>Bye Rohan</div>
        //         </div>
        //     )
        // }    
    }
}
export default UserGreeting