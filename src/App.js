import './App.scss';
import React, {Component} from "react";
import Navigation from "./component/Navigation/Navigation";

class App extends Component {
    render() {
        return (
            <div className={'App'} >
                <Navigation/>
            </div>
        );
    }
}


export default App;
