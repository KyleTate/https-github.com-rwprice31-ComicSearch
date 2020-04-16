import React, { Component } from "react";
import Slider from "react-slick";
import GetInput from "./GetInput";
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
import HeroProfile from "./HeroProfile";
import Heros from  "./Heros"


// const     data = {
//     spiderMan: [ 0, 'Spider Man'],
//     hulk:[ 1,  'hulk'],
//     ironMan: [ 2, 'Iron Man' ],
//     wolverine: [ 3, 'Wolverine'],
//     deadPool: [ 4, 'Deadpool'],
//     blackPanther: [ 5, 'Black Panther',],
//     punisher: [ 6, 'Punisher'],
//     cptnAmerica: [ 7, 'Captain America'],
//     slvrSurfer: [ 8, 'Silver Surfer'],
//     lukeCage: [ 9, 'Luke Cage'],
// }

class SimpleSlider extends Component {






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
                    selected: false
                },
            ]

        }

    }



    // Method for grabbing id and hero name when hero image btn is selected, having an issue with selcted property being undefined
    // makeHero;
     heroName;



    handleClick = (id) => {
        let items = [...this.state.items];

        console.log(this.props)
        const hero = items[id];

        // items["id"].selected = this.heroName;


        items.forEach (item => {
            if(item.id !== id){
                item.selected = false;
            }
        });


        this.setState({
            items
        });

    }

    makeHero = (items) => {
        return items.map(item =>{
            return <GetInput Item = {item} onClick={(e => this.handleClick(item.id, e))} key={item.id} />
        })
    }




    render() {
        // {this.state.handleClick()}
        // let { handleClick } = this.props;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
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
                <Slider className="Slider" {...settings}>

                    <div >
                        <Link  to="/Results"> <img onClick={this.handleClick} className="Hero-Images"  src = {thor}  /> </Link>
                    </div>
                    <div>
                        <Link  onClick={this.handleClick} to="/Results" value="hulk"> <img className="Hero-Images"  src = {hulk} /> </Link>
                    </div>
                    <div>
                        <Link onClick={this.handleClick} to="/Results">  <img className="Hero-Images"  src = {CptnAmr} /> </Link>
                    </div>
                    <div>
                        <Link onClick={this.handleClick} to="/Results">  <img className="Hero-Images"  src = {antMan} /> </Link>
                    </div>
                    <div >
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

                {/*{this.makeHero(this.state.items)}*/}


            </div>
        );
    }
}

export default SimpleSlider;