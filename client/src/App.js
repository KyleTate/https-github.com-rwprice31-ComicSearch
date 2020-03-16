import React,{Component}  from 'react';
import Publishers from "./components/publishers";
import './App.css';
// import {BrowserRouter} from  'react-router-dom';
import Route from 'react-router-dom/Route';
import Heros from './components/Heros';
import DCLogo from "./components/DCLogo.png";

class App extends Component {
    state = {
        publishers: [
            {
                id: 1,
                name: "DC",
                clicked: false
            },
            {
                 id: 2,
                 name: "Marvel",
                 clicked: false
            }
        ]
    }


    render() {
        return (
            <div className="App">


                <Publishers />
                {/*<Heros />*/}
                {/*<div>*/}
                {/*    <Publishers publisher={this.state.publishers}/>*/}
                {/*</div>*/}
            </div>


        );

    }






}



export default App;
