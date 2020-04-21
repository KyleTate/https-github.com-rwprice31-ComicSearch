import React, { Component } from "react";
import Slider from "react-slick";

import hulk from './hulk.png';
import thor from './thor.png';
import SpiderMan from './spiderMan.png';
import ironMan from './ironmanprofile.png';

import marvelLogo from './Marvelcomics.png';

import comicSearch from './cbstext.png';
import GetInput from './GetInput.js';
import SimpleSlider from "./SimpleSlider";



export default class HeroProfile extends Component {


    characterName = this.props.Character;
    picture = "";



    render() {
        // function f(props) {
        //     {props.items.Title}
        // }

        switch (this.characterName){
            case 'Hulk' && this.props.pu: this.picture = "hulk";
            case 'Spider-Man' : this.picture = "spiderMan";
            case 'Black Panther' : this.picture = "BlackPanther";
            case 'Iron Man' : this.picture = "IronMan";
            case 'Captain America' : this.picture = "Captain America";
            case 'Deadpool' : this.picture = "deadpool";
            case 'Wolverine' : this.picture = "wolverine";
            case 'Punisher' : this.picture = "punisher";
            case 'Silver Surfer' : this.picture = "silversurfer";
            case 'Luke Cage' : this.picture = "lukecage";
            case 'Joker': this.picture = "joker";
            case 'Super Man' : this.picture = "superman";
            case 'Bat Man' : this.picture = "blacknight";
            case 'Wonder Woman' : this.picture = "wonderwoman";
            case 'Green Lantern' : this.picture = "greenarrow";
            case 'John C' : this.picture = "johnc";
            case 'Green Arrow' : this.picture = "greenarrow";
            case 'Aqua Man' : this.picture = "aquaman";
            case 'The Flash' : this.picture = "flash";
            case 'Bane' : this.picture = "bane";
            default : this.picture = "IronMan";
        }


        return (
            <div>


                <img id="Hero-Profile-Picture"  src = {require('./'+this.picture+'.png')} />
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
