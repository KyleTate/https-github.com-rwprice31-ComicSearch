import React, { Component } from "react";
import Slider from "react-slick";

import hulk from './hulk.png';
import thor from './thor.png';

import ironMan from './ironmanprofile.png';

import marvelLogo from './Marvelcomics.png';

import comicSearch from './cbstext.png';



export default class HeroProfile extends Component {

    heroName;





    render() {

        return (
            <div>
                <img id="Hero-Profile-Picture"  src = {ironMan} />
                <img id="Publisher-Profile"  src = {marvelLogo} />
                <img id="Comic-Search-Text-Profile"  src = {comicSearch} />

                <ul id="Result-Stories">
                    <li>Stories...</li>
                    <li>Stories...</li>
                    <li>Stories...</li>
                    <li>Stories...</li>
                    <li>Stories...</li>
                    <li>Stories...</li>
                    <li>Stories...</li>
                    <li>Stories...</li>
                    <li>Stories...</li>
                    <li>Stories...</li>
                    <li>Stories...</li>
                    <li>Stories...</li>
                    <li>Stories...</li>
                    <li>Stories...</li>
                    <li>Stories...</li>
                    <li>Stories...</li>
                    <li>Stories...</li>
                    <li>Stories...</li>
                    <li>Stories...</li>
                    <li>Stories...</li>
                    <li>Stories...</li>
                </ul>





            </div>
        );
    }
}
