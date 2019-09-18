import React,{Component} from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ChildClass from './components/ParentChild';
import LoginPage from './components/SignIn';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import ApiComponent from './components/ApiComponent';
import ForceUpdate from './components/ForceUpdate';
import FindDomNode from './components/FindDomNode';
import ComponentLifeCycle from './components/ComponentLifeCycle';
import InputStateChange from './components/InputStateChange';
import Refs from './components/Refs';

class App extends Component{
  render(){
    return(
        <div className="App">
               {/* <Greet name="rohan"/>
              <Welcome name="sonu"/>
              <Hello name="aditya"/>
              <Message />
              <Counter /> 
              <FunctionClick />
              <EventBind />
              <ChildClass /> 
              <LoginPage /> 
              <UserGreeting />
              <NameList /> 
              <ApiComponent />
              <ForceUpdate />
              <FindDomNode />
              <ComponentLifeCycle />
              <InputStateChange />*/}
              <Refs />
        </div>
    );
  }
}

export default App;
