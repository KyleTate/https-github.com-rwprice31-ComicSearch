import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Publishers from "./components/publishers";
import Slider from "./components/SimpleSlider";


// export default function Routes(){
//
//     return(
//         <div className="App">
//             <Route exact path="/" component={Publishers} />
//             <Route exact path="/Heros" component={Heros} />
//             <Route exact path="/Heros" component={Slider} />
//
//         </div>
//     );
// }


 ReactDOM.render(<App />, document.getElementById('root'));

// const rootElement = document.getElementById('root');
// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>,
//     rootElement
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
