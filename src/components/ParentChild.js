import React,{Component} from 'react';
import ChildClass from './ChildClass';

class ParentChild extends Component{
    constructor(props){
        super(props)
        this.state={
            message:'Bhai'
        }
        this.parentFunction=this.parentFunction.bind(this)
    }
    parentFunction(name){
        alert(`Hello ${name} ${this.state.message}`)
    }
    render(){
        return (
            <div>
                <ChildClass clickHandler={this.parentFunction}/>
            </div>
        )
    }
}
export default ParentChild