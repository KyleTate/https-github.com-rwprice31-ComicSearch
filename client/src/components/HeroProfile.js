import React, { Component } from "react";
import Slider from "react-slick";

import hulk from './hulk.png';
import thor from './thor.png';

import ironMan from './ironmanprofile.png';

import marvelLogo from './Marvelcomics.png';

import comicSearch from './cbstext.png';
import GetInput from './GetInput.js';
import SimpleSlider from "./SimpleSlider";



export default class HeroProfile extends Component {


    //var for characters name
    characterName = "Iron Man";


    // storyContent[] = {};



    render() {
        // function f(props) {
        //     {props.items.Title}
        // }



        return (
            <div>


                <img id="Hero-Profile-Picture"  src = {ironMan} />
                <img id="Publisher-Profile"  src = {marvelLogo} />
                <img id="Comic-Search-Text-Profile"  src = {comicSearch} />
                <h2 className="Result-Character-Name">{this.characterName}</h2>

                <ul className="Result-Stories">

                    <div >
                    {/*<li>    <GetInput /></li>*/}
                    <li>
                        <div className="dropdown">
                            <p className="Header-Dropdown">Story Num1: </p>
                            <div className="dropdown-content">
                                <p>Story content: </p>
                                <p>Story content: </p>
                                <p>Story content: </p>
                                <p>Story content: </p>
                                <p>Story content: </p>
                            </div>
                        </div>
                    </li>

                        <li>
                            <div className="dropdown">
                                <p className="Header-Dropdown">Story Num2: </p>
                                <div className="dropdown-content">
                                    <p>Story content: </p>
                                    <p>Story content: </p>
                                    <p>jly content: </p>
                                    <p>gk;content: </p>
                                    <p>Stgjltent: </p>
                                    <p>Story content: </p>
                                    <p>Stgjnt: </p>
                                    <p>Story content: </p>
                                    <p>Stosfbsfent: </p>
                                    <p>Story content: </p>
                                    <p>Stadgtent: </p>
                                    <p>Sfkyontent: </p>
                                    <p>gjlent: </p>
                                    <p>Story content: </p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="dropdown">
                                <p className="Header-Dropdown">Story Num2: </p>
                                <div className="dropdown-content">
                                    <p>Story content: </p>
                                    <p>Story content: </p>
                                    <p>Story content: </p>
                                    <p>Story content: </p>
                                    <p>Story content: </p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="dropdown">
                                <p className="Header-Dropdown">Story Num2: </p>
                                <div className="dropdown-content">
                                    <p>Story content: </p>
                                    <p>Story content: </p>
                                    <p>Story content: </p>
                                    <p>Story content: </p>
                                    <p>Story content: </p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="dropdown">
                                <p className="Header-Dropdown">Story Num2: </p>
                                <div className="dropdown-content">
                                    <p>Story content: </p>
                                    <p>Story content: </p>
                                    <p>jly content: </p>
                                    <p>gk;content: </p>
                                    <p>Stgjltent: </p>
                                    <p>Story content: </p>
                                    <p>Stgjnt: </p>
                                    <p>Story content: </p>
                                    <p>Stosfbsfent: </p>
                                    <p>Story content: </p>
                                    <p>Stadgtent: </p>
                                    <p>Sfkyontent: </p>
                                    <p>gjlent: </p>
                                    <p>Story content: </p>

                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="dropdown">
                                <p className="Header-Dropdown">Story Num2: </p>
                                <div className="dropdown-content">
                                    <p>Story content: </p>
                                    <p>Story content: </p>
                                    <p>Story content: </p>
                                    <p>Story content: </p>
                                    <p>Story content: </p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="dropdown">
                                <p className="Header-Dropdown">Story Num2: </p>
                                <div className="dropdown-content">
                                    <p>Story content: </p>
                                    <p>Story content: </p>
                                    <p>Story content: </p>
                                    <p>Story content: </p>
                                    <p>Story content: </p>
                                </div>
                            </div>
                        </li>


                    {/*</div>*/}

                    {/*<li>bob</li>*/}
                    {/*<li>bob</li>*/}
                    {/*<li>bob</li>*/}
                    {/*<li>bob</li>*/}

                    {/*<li>   <li></li>*/}

                    {/*    <li><select className="custom-Dropdown" >*/}


                    {/*    </select></li></li>*/}
                    {/*<li>   <li></li>*/}
                    {/*    <li><select className="custom-Dropdown" >*/}
                    {/*        <option value="volvo">Stories...</option>*/}
                    {/*    </select></li></li>*/}
                    {/*<li>   <li></li>*/}
                    {/*    <li><select className="custom-Dropdown"  >*/}
                    {/*        <option value="volvo">Stories...</option>*/}
                    {/*    </select></li></li>*/}
                    {/*<li>   <li></li>*/}
                    {/*    <li><select className="custom-Dropdown" >*/}
                    {/*        <option value="volvo">Stories...</option>*/}
                    {/*    </select></li></li>*/}
                    {/*<li>   <li></li>*/}
                    {/*    <li><select className="custom-Dropdown"  id="cars">*/}
                    {/*        <option value="volvo">Stories...</option>*/}
                    {/*    </select></li></li>*/}
                    {/*<li>   <li></li>*/}
                    {/*    <li><select className="custom-Dropdown"  id="cars">*/}
                    {/*        <option value="volvo">Stories...</option>*/}
                    {/*    </select></li></li>*/}
                    {/*<li>   <li></li>*/}
                    {/*    <li><select className="custom-Dropdown"  id="cars">*/}
                    {/*        <option value="volvo">Stories...</option>*/}
                    {/*    </select></li></li>*/}
                    {/*<li>   <li></li>*/}
                    {/*    <li><select className="custom-Dropdown"  id="cars">*/}
                    {/*        <option value="volvo">Stories...</option>*/}
                    {/*    </select></li></li>*/}
                    {/*<li>   <li></li>*/}
                    {/*    <li><select className="custom-Dropdown"  id="cars">*/}
                    {/*        <option value="volvo">Stories...</option>*/}
                    {/*    </select></li></li>*/}
                    {/*<li>   <li></li>*/}
                    {/*    <li><select className="custom-Dropdown"  id="cars">*/}
                    {/*        <option value="volvo">Stories...</option>*/}
                    {/*    </select></li></li>*/}
                    {/*<li>   <li></li>*/}
                    {/*    <li><select className="custom-Dropdown"  id="cars">*/}
                    {/*        <option value="volvo">Stories...</option>*/}
                    {/*    </select></li></li>*/}
                    {/*<li>   <li></li>*/}
                    {/*    <li><select className="custom-Dropdown"  id="cars">*/}
                    {/*        <option value="volvo">Stories...</option>*/}
                    {/*    </select></li></li>*/}
                    {/*<li>   <li></li>*/}
                    {/*    <li><select className="custom-Dropdown"  id="cars">*/}
                    {/*        <option value="volvo">Stories...</option>*/}
                    {/*    </select></li></li>*/}


            </div>
                </ul>

            </div>






        );
    }
}
