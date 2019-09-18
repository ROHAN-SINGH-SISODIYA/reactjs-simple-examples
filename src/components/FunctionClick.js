import React,{Component} from 'react'

class FunctionClick extends Component{
    clickButton(){
        console.log('button clicked')
    }
    render(){
        return (
            <div>
                <button onClick={this.clickButton}>Click</button>
            </div>
        )
    }
}

export default FunctionClick