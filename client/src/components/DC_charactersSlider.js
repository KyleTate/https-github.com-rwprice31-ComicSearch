import React, { Component } from "react";
import Slider from "react-slick";

import joker from './joker.jpg';
import superMan from './superman.jpg';
import batMan from './batman.jpg'
import wonderWoman from './wonderwoman.jpg';
import johnC from './johnconstantine.jpg';
import aquaMan from './aquaman.jpg';
import greenLantern from './greenlantern.jpg';
import bane from './bane.jpg';
import greenArrow from './greenarrow.jpg';
import theFlash from './flash.jpg';

import {Link} from "react-router-dom";
import spiderMan from "./spiderman.png";
import hulk from "./hulk.png";
import CptnAmr from "./CaptianAmerica.png";
import deadPool from "./deadpool.jpg";
import blackPanther from "./blackpanther.jpg";
import wolverine from "./wolverine.jpg";
import punisher from "./punisher.jpg";
import ironMan from "./IronMan.png";
import lukeCage from "./lukecage.jpg";
import silverSurfer from "./silversurfer.jpg";

export default class SimpleSlider extends Component {

    heroName;

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    Title: "Joker",
                    selected: false
                },
                {
                    id: 1,
                    Title: "Superman",
                    selected: false
                },
                {
                    id: 2,
                    Title: "Batman",
                    selected: false
                },
                {
                    id: 3,
                    Title: "Wonder Woman",
                    selected: false
                },
                {
                    id: 4,
                    Title: "Green Lantern",
                    selected: false
                },
                {
                    id: 5,
                    Title: "John Constantine",
                    selected: false
                },
                {
                    id: 6,
                    Title: "Green Arrow",
                    selected: false
                },
                {
                    id: 7,
                    Title: "Aquaman",
                    selected: false
                },
                {
                    id: 8,
                    Title: "Bane",
                    selected: false
                },
                {
                    id: 9,
                    Title: "The Flash",
                    Selected: false
                },
            ]
        }
    }

    handleClick = (e) => {
        console.log(e)
    }

    // Method for grabbing id and hero name when hero image btn is selected, having an issue with selcted property being undefined

    // handleClick = (id) => {
    //     let items = [...this.state.items];
    //
    //     items[id].selected = items[id].selected ? false : true;
    //     items["Title"].selected = this.heroName;
    //
    //     this.setState({
    //         items
    //     });
    //
    // }

    // handleClick = (id) => {
    //     let items = [...this.state.items];
    //
    //     items[id].selected = items[id].selected ? false : true;
    //     items["Title"].selected = this.heroName;
    //
    //     this.setState({
    //         items
    //     });
    //
    // }




    render() {
        console.log(this.state.Publisher);

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div>

                <h2 id="Quick-Fix">Hero </h2>
                <Slider className="Slider" {...settings}>

                    <div>
                        <Link to={{
                            pathname: "/Results",
                            state: {Character: 'Joker', Publisher: this.state.Publisher}
                        }}> <img className="Hero-Images" src={joker}/> </Link>
                    </div>
                    <div>
                        <Link to={{
                            pathname: "/Results",
                            state: {Character: 'Super Man', Publisher: this.state.Publisher}
                        }}><img className="Hero-Images"
                                src={superMan}/> </Link>
                    </div>
                    <div>
                        <Link to="/Results" to={{
                            pathname: "/Results",
                            state: {Character: 'Bat Man', Publisher: this.state.Publisher}
                        }}><img
                            className="Hero-Images" src={batMan}/> </Link>
                    </div>
                    <div>
                        <Link to={{
                            pathname: "/Results",
                            state: {Character: 'Wonder Woman', Publisher: this.state.Publisher}
                        }}> <img className="Hero-Images"
                                 src={wonderWoman}/> </Link>
                    </div>
                    <div>
                        <Link to="/Results" to={{
                            pathname: "/Results",
                            state: {Character: 'Green Lantern', Publisher: this.state.Publisher}
                        }}> <img
                            className="Hero-Images" src={greenLantern}/> </Link>
                    </div>
                    <div>
                        <Link to={{
                            pathname: "/Results",
                            state: {Character: 'John C', Publisher: this.state.Publisher}
                        }}> <img className="Hero-Images"
                                 src={johnC}/> </Link>
                    </div>
                    <div>
                        <Link to={{
                            pathname: "/Results",
                            state: {Character: 'Green Arrow', Publisher: this.state.Publisher}
                        }}> <img className="Hero-Images"
                                 src={greenArrow}/> </Link>
                    </div>
                    <div>
                        <Link to={{
                            pathname: "/Results",
                            state: {Character: 'Aqua Man', Publisher: this.state.Publisher}
                        }}> <img className="Hero-Images"
                                 src={aquaMan}/> </Link>
                    </div>
                    <div>
                        <Link to={{
                            pathname: "/Results",
                            state: {Character: 'Bane', Publisher: this.state.Publisher}
                        }}> <img className="Hero-Images"
                                src={bane}/> </Link>
                    </div>
                    <div>
                        <Link to={{
                            pathname: "/Results",
                            state: {Character: 'The Flash', Publisher: this.state.Publisher}
                        }}> <img
                            className="Hero-Images"
                                src={theFlash}/> </Link>
                    </div>

                </Slider>

                {/*{this.makeHero(this.state.items)}*/}


            </div>
        );
        /*return (
            <div>
                <h2 id="Quick-Fix">Heros </h2>
                <Slider  className="Slider" {...settings}>

                    <div >
                        <Link onClick={this.handleClick} to="/Results"> <img className="Hero-Images"  src = {joker} /> </Link>
                    </div>
                    <div>
                        <Link onClick={this.handleClick} to="/Results">  <img className="Hero-Images"  src = {superMan} /> </Link>
                    </div>
                    <div>
                        <Link onClick={this.handleClick} to="/Results">  <img className="Hero-Images"  src = {batMan} /> </Link>
                    </div>
                    <div>
                        <Link onClick={this.handleClick} to="/Results">  <img className="Hero-Images"  src = {wonderWoman} /> </Link>
                    </div>
                    <div>
                        <Link onClick={this.handleClick} to="/Results">  <img className="Hero-Images"  src = {greenLantern} /> </Link>
                    </div>
                    <div>
                        <Link onClick={this.handleClick} to="/Results"> <img className="Hero-Images"  src = {johnC} /> </Link>
                    </div>
                    <div>
                        <Link onClick={this.handleClick} to="/Results">  <img className="Hero-Images"  src = {greenArrow} /> </Link>
                    </div>
                    <div>
                        <Link onClick={this.handleClick} to="/Results">  <img className="Hero-Images"  src = {aquaMan} /> </Link>
                    </div>
                    <div>
                        <Link onClick={this.handleClick} to="/Results">  <img className="Hero-Images"  src = {bane} /> </Link>
                    </div>
                    <div>
                        <Link onClick={this.handleClick} to="/Results">  <img className="Hero-Images"  src = {theFlash} /> </Link>
                    </div>

                </Slider>
            </div>
        );*/
    }
}