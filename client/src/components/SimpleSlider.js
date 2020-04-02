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

export default class SimpleSlider extends Component {
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
                       <img className="Hero-Images"  src = {thor} />
                    </div>
                    <div>
                        <img className="Hero-Images"  src = {hulk} />
                    </div>
                    <div>
                        <img className="Hero-Images"  src = {CptnAmr} />
                    </div>
                    <div>
                        <img className="Hero-Images"  src = {antMan} />
                    </div>
                    <div>
                        <img className="Hero-Images"  src = {blackPanther} />
                    </div>
                    <div>
                        <img className="Hero-Images"  src = {moonKnight} />
                    </div>
                    <div>
                        <img className="Hero-Images"  src = {ironMan} />
                    </div>
                    <div>
                        <img className="Hero-Images"  src = {blackKnight} />
                    </div>
                    <div>
                        <img className="Hero-Images"  src = {sentry} />
                    </div>
                </Slider>
            </div>
        );
    }
}
