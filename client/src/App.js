import React,{Component}  from 'react';
import Publishers from "./components/publishers";
import './App.css';
// import {BrowserRouter} from  'react-router-dom';
import Route from 'react-router-dom/Route';
import Heros from './components/Heros';
import SimpleSlider from "./components/SimpleSlider";
import DCLogo from "./components/DCLogo.png";

import Image1 from "./components/hulk.png";
import Image2 from "./components/thor.png";
import Image3 from "./components/CaptianAmerica.png";

import Gallery from "./components/imagegrid";



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


                {/* <Publishers />   */}
                <Heros />
                {/* <SimpleSlider /> */}
                <Gallery/>

                {/* <div> */}
                   {/* <Publishers publisher={this.state.publishers}/> */}
                {/* </div> */}
            </div>




        );

    }






}



export default App;
