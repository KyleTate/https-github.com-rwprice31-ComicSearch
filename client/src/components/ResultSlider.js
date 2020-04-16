import React, { Component } from "react";
import Slider from "react-slick";
import ser1 from './series1.jpg';
import ser2 from './series2.jpg';
import ser3 from './series3.jpg';
import ser4 from './series4.jpg';
import ser5 from './series5.jpg';
import {Link} from "react-router-dom";

export default class ResultSlider extends Component {


charName;


    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    Title: this.charName,
                    selected: false
                },
                {
                    id: 1,
                    Title: this.charName,
                    selected: false
                },
                {
                    id: 2,
                    Title: this.charName,
                    selected: false
                },
                {
                    id: 3,
                    Title: this.charName,
                    selected: false
                },
                {
                    id: 4,
                    Title: this.charName,
                    selected: false
                },

            ]
        }
    }

    // Method for grabbing id and hero name when hero image btn is selected, having an issue with selcted property being undefined
    //
    // handleClick = (id) => {
    //     let items = [...this.state.items];
    //
    //
    //     items.selected.id = charName;
    //
    //     this.setState({
    //         items
    //     });
    //
    // }




    render() {
        const settings = {
            dots: false,
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
                <Slider className="Result-Slider" {...settings}>

                    <div >
                        <button onClick={this.handleClick} to="/Results"> <img className="Hero-Images"  src = {ser1} /> </button>
                    </div>
                    <div>
                        <button onClick={this.handleInput} to="/Results">  <img className="Hero-Images"  src = {ser2} /> </button>
                    </div>
                    <div>
                        <button onClick={this.handleClick} to="/Results">  <img className="Hero-Images"  src = {ser3} /> </button>
                    </div>
                    <div>
                        <button onClick={this.handleClick} to="/Results">  <img className="Hero-Images"  src = {ser4} /> </button>
                    </div>
                    <div>
                        <button onClick={this.handleClick} to="/Results"> <img className="Hero-Images"  src = {ser5} /> </button>
                    </div>
                </Slider>
            </div>
        );
    }
}
