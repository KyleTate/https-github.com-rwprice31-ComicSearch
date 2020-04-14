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
                <img id="Comic-Search-Text"  src = {comicSearch} />



                <h2>overflow:</h2>
                <div className="ex3">
                sfafawsfASFAGASGVADBGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
                    sfafawsfASFAGASGVADBGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGs
                    fafawsfASFAGASGVADBGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
                    fafawsfASFAGASGVADBGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
                    fafawsfASFAGASGVADBGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG

                </div>


            </div>
        );
    }
}
