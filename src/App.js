import './App.css';
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Footer from "./component/Footer/Footer";
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
