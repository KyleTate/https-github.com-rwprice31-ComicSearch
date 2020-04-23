import React, { Component } from "react";
import Slider from "react-slick";

import hulk from './hulk.png';
import thor from './thor.png';
import SpiderMan from './spiderMan.png';
import ironMan from './ironmanprofile.png';
import dcLogo from './DCLogo.png'
import marvelLogo from './Marvelcomics.png';

import comicSearch from './cbstext.png';
import GetInput from './GetInput.js';
import SimpleSlider from "./SimpleSlider";



export default class HeroProfile extends Component {


    characterName = this.props.Character;
    picture = "";
    logo;



    render() {
        // function f(props) {
        //     {props.items.Title}
        // }


        switch (this.characterName){
            case 'Hulk': this.picture = "hulk"; this.logo = marvelLogo;
            break
            case 'Spider-Man' : this.picture = "spiderMan"; this.logo = marvelLogo;
                break
            case 'Black Panther' : this.picture = "blackpanther"; this.logo = marvelLogo;
                break
            case 'Iron Man' : this.picture = "IronMan"; this.logo = marvelLogo;
                break
            case 'Captain America' : this.picture = "CaptianAmerica"; this.logo = marvelLogo;
                break
            case 'Deadpool' : this.picture = "deadpool"; this.logo = marvelLogo;
                break
            case 'Wolverine' : this.picture = "wolverine"; this.logo = marvelLogo;
                break
            case 'Punisher' : this.picture = "punisher"; this.logo = marvelLogo;
                break
            case 'Silver Surfer' : this.picture = "silversurfer"; this.logo = marvelLogo;
                break
            case 'Luke Cage' : this.picture = "lukecage"; this.logo = marvelLogo;
                break
            case 'Green Arrow': this.picture = "greenarrow"; this.logo = dcLogo;
                break
            case 'Wonder Woman' : this.picture = "wonderwoman"; this.logo = dcLogo;
                break
            case 'Superman' : this.picture = "superman"; this.logo = dcLogo;
                break
            case 'Green Lantern' : this.picture = "greenlantern"; this.logo = dcLogo;
                break
            case 'The Flash' : this.picture = "flash"; this.logo = dcLogo;
                break
            case 'Bane' : this.picture = "bane"; this.logo = dcLogo;
                break
            case 'Aquaman' : this.picture = "aquaman"; this.logo = dcLogo;
                break
            case 'John Constantine' : this.picture = "johnconstantine"; this.logo = dcLogo;
                break
            case 'Batman' : this.picture = "batman"; this.logo = dcLogo;
                break
            case 'Joker' : this.picture = "joker"; this.logo = dcLogo;
                break
        }


        return (
            <div>


                <img id="Hero-Profile-Picture"  src = {require('./'+this.picture+'.png')} />
                <img id="Publisher-Profile"  src = {this.logo} />
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
