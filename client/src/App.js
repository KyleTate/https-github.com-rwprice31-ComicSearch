import React,{Component}  from 'react';
import Publishers from "./components/publishers";
import './App.css';
import {BrowserRouter, Route, Switch} from  'react-router-dom';
// import Route from 'react-router-dom/Route';
import Characters from './components/Characters';
import Slider from "./components/SimpleSlider";
import Results from "./components/Results";
import Dropdownfail from "./components/Dropdownfail"
import ResultSlider from "./components/ResultSlider";
import DCLogo from "./components/DCLogo.png";
import HeroProfile from "./components/HeroProfile";
import ResultImageGrid from "./components/ResultImageGrid";

import Image1 from "./components/Images/hulk.png";
import Image2 from "./components/Images/thor.png";
import Image3 from "./components/Images/CaptianAmerica.png";

import Gallery from "./components/imagegrid";
import DC_charactersSlider from "./components/DC_charactersSlider";



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

            <BrowserRouter>
                <div className="No-Scroll">
            <div className="App">

                <Route exact path="/" component={Publishers} />



                <Route exact path="/Marvel" component={Characters} />
                <Route exact path="/Marvel" component={Slider} />
                {/*<Route exact path="/Marvel" component={Gallery} />*/}
                <Route exact path="/DC" component={Characters} />
                <Route exact path="/DC" component={Slider} />
                {/*<Route exact path="/DC" component={Gallery} />*/}

                <Route exact path="/Results" component={Results} />
                {/*<Route exact path="/Results" component={ResultSlider} />*/}
                {/*<Route exact path="/Results" component={HeroProfile} />*/}
                {/*<Route exact path="/Results" component={ResultImageGrid} />*/}


                {/* <Publishers />   */}
                {/* <SimpleSlider /> */}
                {/*<Gallery/>*/}

                {/* <div> */}
                   {/* <Publishers publisher={this.state.publishers}/> */}
                {/* </div> */}
            </div>
            </div>
            </BrowserRouter>
        );
    }






}



export default App;
