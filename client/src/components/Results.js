import React, {Component} from "react";
import MarvelLogo from "./Marvelcomics.png";
import CBSText from "./cbstext.png";
import ResultSlider from "./ResultSlider";
import HeroProfile from "./HeroProfile";
import ResultImageGrid from "./ResultImageGrid";
import Stories from "./Stories";


class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Publisher: this.props.location.state.Publisher,
            Character: this.props.location.state.Character,
            list: [],
            selectedIssue: ""
        }
        // console.log(props)
        console.log(props.location.state.Character)
        this.onChange = this.onChange.bind(this);
    }
    //
    // Fetch the list on first mount
    componentDidMount() {
        this.getList();
    }

    // Retrieves the list of items from the Express app
    getList = () => {
        fetch('/issues/' + this.state.Publisher + '/' + this.state.Character)
            .then(res => res.json())
            .then(list => this.setState({list}))
    }

    onChange(newIssueId) {
        this.setState({ selectedIssue: newIssueId });
    }



    render() {

        // console.log(this.state.list);
        // console.log(this.props.Character);
        console.log("Changed!: " + this.state.selectedIssue)
        return (
            <div>

                {/*<ul>*/}
                {/*    {this.state.list.map(s => (<li>{s.id}</li>))}*/}
                {/*</ul>*/}
           <h1 className="App-body">Select a Series</h1>
                <ResultSlider List={this.state.list} Character={this.state.Character}/>
                <HeroProfile Character={this.state.Character} SelectedIssue={this.state.selectedIssue}/>
               <span className="Result-Grid-Outside" ><ResultImageGrid List={this.state.list} Character={this.state.Character} changeIssue={this.onChange} /></span>
                {/*<h1>{this.state.Character}</h1>*/}
                {/*<Stories List={this.state.list} Character={this.state.Character} changeIssue={this.onChange}/>*/}




            </div>

        )
    }



}

export default Results;