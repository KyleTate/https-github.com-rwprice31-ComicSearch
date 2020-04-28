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


    constructor(props) {
        super(props);
        this.state = {
            selectedIssue: this.props.SelectedIssue,
            list: []
        }
    }



    componentDidUpdate() {
        // this.setState({selectedIssue: this.props.SelectedIssue})
        console.log(this.state.selectedIssue)
        // this.getData();
        // console.log(this.state.list)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("From nextProps: " + nextProps.SelectedIssue + " From nextState: " + nextState.selectedIssue)
        console.log("From props: " + this.props.SelectedIssue + " From state: " + this.state.selectedIssue)
        console.log(nextProps.SelectedIssue != this.state.selectedIssue)
        return nextProps.SelectedIssue != this.state.selectedIssue
        //return false
    }

    // Retrieves the list of items from the Express app
    getData = () => {
        fetch('/issue_stories/' + this.state.selectedIssue)
            .then(res => res.json())
            .then(list => this.setState({list}))
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.SelectedIssue)
        this.setState({selectedIssue: nextProps.SelectedIssue})
        console.log(this.state.selectedIssue)
        // this.getData()
        // fetch('/issue_stories/' + this.props.selectedIssue)
        //     .then(res => res.json())
        //     .then(list => this.setState({list}))
    }

    render() {
        // function f(props) {
        //     {props.items.Title}
        // }
        this.getData();
        console.log(this.props)
        console.log(this.state.selectedIssue)
        console.log(this.props.SelectedIssue)
        // this.getData()
        console.log(this.state.list)


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

                <img className="Result_character-Image" id="Hero-Profile-Picture"  src = {require('./'+this.picture+'.png')} />
                <img className="Publisher-Profile"  src = {this.logo} />
                <img className="Comic-Search-Text-Profile"  src = {comicSearch} />
                <h2 className="Result-Character-Name">{this.characterName}</h2>


                <ul className="Result-Stories">

                    {this.state.list.map(s => (<li key={s.id}><div className="dropdown">
                        <p className="Header-Dropdown">Story # {s.sequence_number}</p>
                        <div className="dropdown-content">
                            <li key={s.id}>
                                <p>{"Story Title: " + s.title}</p>
                                <p>{"Story's main featured Character(s): " + s.feature}</p>
                                <p>{"Story sequence #: " + s.sequence_number}</p>
                                <p>{"Story page count: " + s.page_count}</p>
                                <p>{"All Characters within this Story : " + s.characters}</p>
                                <p>{"Story synopsis/summary : " + s.synopsis}</p>
                                <p>{"First line given in Story : " + s.first_line}</p>
                            </li>
                        </div>
                    </div>
                    </li>))}
                </ul>


                {/*<ul className="Result-Stories">*/}

                {/*    /!*<div>*!/*/}
                {/*        /!*<li>    <GetInput /></li>*!/*/}
                {/*        <li>*/}
                {/*            <div className="dropdown">*/}
                {/*                <p className="Header-Dropdown">Story Num1: </p>*/}
                {/*                <div className="dropdown-content">*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </li>*/}

                {/*        <li>*/}
                {/*            <div className="dropdown">*/}
                {/*                <p className="Header-Dropdown">Story Num2: </p>*/}
                {/*                <div className="dropdown-content">*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>jly content: </p>*/}
                {/*                    <p>gk;content: </p>*/}
                {/*                    <p>Stgjltent: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Stgjnt: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Stosfbsfent: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Stadgtent: </p>*/}
                {/*                    <p>Sfkyontent: </p>*/}
                {/*                    <p>gjlent: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </li>*/}

                {/*        <li>*/}
                {/*            <div className="dropdown">*/}
                {/*                <p className="Header-Dropdown">Story Num2: </p>*/}
                {/*                <div className="dropdown-content">*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </li>*/}

                {/*        <li>*/}
                {/*            <div className="dropdown">*/}
                {/*                <p className="Header-Dropdown">Story Num2: </p>*/}
                {/*                <div className="dropdown-content">*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </li>*/}

                {/*        <li>*/}
                {/*            <div className="dropdown">*/}
                {/*                <p className="Header-Dropdown">Story Num2: </p>*/}
                {/*                <div className="dropdown-content">*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>jly content: </p>*/}
                {/*                    <p>gk;content: </p>*/}
                {/*                    <p>Stgjltent: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Stgjnt: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Stosfbsfent: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Stadgtent: </p>*/}
                {/*                    <p>Sfkyontent: </p>*/}
                {/*                    <p>gjlent: </p>*/}
                {/*                    <p>Story content: </p>*/}

                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </li>*/}

                {/*        <li>*/}
                {/*            <div className="dropdown">*/}
                {/*                <p className="Header-Dropdown">Story Num2: </p>*/}
                {/*                <div className="dropdown-content">*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </li>*/}

                {/*        <li>*/}
                {/*            <div className="dropdown">*/}
                {/*                <p className="Header-Dropdown">Story Num2: </p>*/}
                {/*                <div className="dropdown-content">*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                    <p>Story content: </p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </li>*/}
                {/*    /!*</div>*!/*/}
                {/*</ul>*/}


            </div>



        );
    }
}
