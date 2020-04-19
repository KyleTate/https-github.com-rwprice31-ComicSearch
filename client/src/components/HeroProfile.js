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


    characterName = this.props.Character;





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

                <ul id="Result-Stories">
                    <li>    <GetInput /></li>
                    <li></li>
                    <li><select className="custom-Dropdown"  id="cars">
                        <option value="volvo">Stories...</option>
                    </select></li>
                    <li>   <li></li>
                        <li><select className="custom-Dropdown"  id="cars">
                            <option value="volvo">Stories...</option>
                        </select></li></li>
                    <li>   <li></li>
                        <li><select className="custom-Dropdown"  id="cars">
                            <option value="volvo">Stories...</option>
                        </select></li></li>
                    <li>   <li></li>
                        <li><select className="custom-Dropdown"  id="cars">
                            <option value="volvo">Stories...</option>
                        </select></li></li>
                    <li>   <li></li>
                        <li><select className="custom-Dropdown"  id="cars">
                            <option value="volvo">Stories...</option>
                        </select></li></li>
                    <li>   <li></li>
                        <li><select className="custom-Dropdown"  id="cars">
                            <option value="volvo">Stories...</option>
                        </select></li></li>
                    <li>   <li></li>
                        <li><select className="custom-Dropdown"  id="cars">
                            <option value="volvo">Stories...</option>
                        </select></li></li>
                    <li>   <li></li>
                        <li><select className="custom-Dropdown"  id="cars">
                            <option value="volvo">Stories...</option>
                        </select></li></li>
                    <li>   <li></li>
                        <li><select className="custom-Dropdown"  id="cars">
                            <option value="volvo">Stories...</option>
                        </select></li></li>
                    <li>   <li></li>
                        <li><select className="custom-Dropdown"  id="cars">
                            <option value="volvo">Stories...</option>
                        </select></li></li>
                    <li>   <li></li>
                        <li><select className="custom-Dropdown"  id="cars">
                            <option value="volvo">Stories...</option>
                        </select></li></li>
                    <li>   <li></li>
                        <li><select className="custom-Dropdown"  id="cars">
                            <option value="volvo">Stories...</option>
                        </select></li></li>
                    <li>   <li></li>
                        <li><select className="custom-Dropdown"  id="cars">
                            <option value="volvo">Stories...</option>
                        </select></li></li>
                    <li>   <li></li>
                        <li><select className="custom-Dropdown"  id="cars">
                            <option value="volvo">Stories...</option>
                        </select></li></li>

                </ul>





            </div>
        );
    }
}
