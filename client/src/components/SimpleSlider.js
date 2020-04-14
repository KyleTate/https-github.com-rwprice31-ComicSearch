import React, { Component } from "react";
import Slider from "react-slick";

import hulk from './hulk.png';
import thor from './thor.png';
import CptnAmr from './CaptianAmerica.png';
import antMan from './Antman.png';
import blackKnight from './blackknight.png';
import ironMan from './IronMan.png';
import moonKnight from './moonknight.png';
import blackPanther from './BlackPanther.png';
import sentry from './sentry.png';
import {Link} from "react-router-dom";

export default class SimpleSlider extends Component {

     heroName;

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    Title: "Spider Man",
                    selected: false
                },
                {
                    id: 1,
                    Title: "Hulk",
                    selected: false
                },
                {
                    id: 2,
                    Title: "Iron Man",
                    selected: false
                },
                {
                    id: 3,
                    Title: "Wolverine",
                    selected: false
                },
                {
                    id: 4,
                    Title: "Deadpool",
                    selected: false
                },
                {
                    id: 5,
                    Title: "Black Panther",
                    selected: false
                },
                {
                    id: 6,
                    Title: "Punisher",
                    selected: false
                },
                {
                    id: 7,
                    Title: "Captain America",
                    selected: false
                },
                {
                    id: 8,
                    Title: "Silver Surfer",
                    selected: false
                },
                {
                    id: 9,
                    Title: "Luke Cage",
                    Selected: false
                },
            ]
        }
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


    render() {
        const settings = {
            dots: true,
            infinite: false,
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
                <h2 id="Quick-Fix">Heros </h2>
                <Slider {...settings}>

                    <div >
                        <Link onClick={this.handleClick} to="/Results"> <img className="Hero-Images"  src = {thor} /> </Link>
                    </div>
                    <div>
                        <Link onClick={this.handleClick} to="/Results">  <img className="Hero-Images"  src = {hulk} /> </Link>
                    </div>
                    <div>
                        <Link onClick={this.handleClick} to="/Results">  <img className="Hero-Images"  src = {CptnAmr} /> </Link>
                    </div>
                    <div>
                        <Link onClick={this.handleClick} to="/Results">  <img className="Hero-Images"  src = {antMan} /> </Link>
                    </div>
                    <div>
                        <Link onClick={this.handleClick} to="/Results"> <img className="Hero-Images"  src = {blackPanther} /> </Link>
                    </div>
                    <div>
                        <Link onClick={this.handleClick} to="/Results">  <img className="Hero-Images"  src = {moonKnight} /> </Link>
                    </div>
                    <div>
                        <Link onClick={this.handleClick} to="/Results">  <img className="Hero-Images"  src = {ironMan} /> </Link>
                    </div>
                    <div>
                        <Link onClick={this.handleClick} to="/Results">  <img className="Hero-Images"  src = {blackKnight} /> </Link>
                    </div>
                    <div>
                        <Link onClick={this.handleClick} to="/Results">  <img className="Hero-Images"  src = {sentry} /> </Link>
                    </div>

                </Slider>
            </div>
        );
    }
}
