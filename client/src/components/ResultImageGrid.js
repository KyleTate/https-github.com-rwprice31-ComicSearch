import React, {Component} from 'react';

import Gallery from 'react-grid-gallery';
import HeroProfile from "./HeroProfile";
import styled from "styled-components";
import empty from './Images/transparent2.png';

var IMAGES = []

var emptyImage = {
        src: empty,
        thumbnail: empty,
        thumbnailWidth: 400,
        thumbnailHeight: 640,
        scaletwidth: 282,
        marginLeft: 0,
        width: 100,
}

export default class imagegrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seriesId : ""
        }
        this.passIssueId = this.passIssueId.bind(this);
    }

    passIssueId(index) {
        var id = IMAGES[index].tags[0].issue_id;
        console.log(id);
        this.props.changeIssue(id);
    }

    render() {

        const imageGrid = styled.div`
  grid-column: 1 / 3;
  grid-rows: 1;
  background: #002b36;
`;

        IMAGES = []
        this.props.List.map(s => {

            if (this.props.SeriesId == s.series_id) {

            this.issue_cover_id = s.id;
            this.image = require('./issue_covers/' + this.issue_cover_id + '.jpg');

            IMAGES.push({
                src: this.image,
                thumbnail: this.image,
                thumbnailWidth: 400,
                thumbnailHeight: 640,
                tags: [{value: "", title: "", issue_id: s.id}],
                caption: s.name + " #" + s.number,
                customOverlay: <div style={overlayStyle}>{s.name + " #" + s.number}</div>,
                scaletwidth: 282,
                marginLeft: 0,
                width: 100,
            }
        )
    }})
        IMAGES.push(emptyImage);
        IMAGES.push(emptyImage);
        IMAGES.push(emptyImage);
        // console.log(IMAGES.length)
        // console.log(IMAGES)
        // console.log(this.props)
        return (
            <imageGrid>
            <div className="Result-Grid">
            <div  style = {{
                display: "inline-block",
                minHeight: "1px",
                width: "100%",
                border: "1px solid #ddd",
                }}>
                <Gallery
                    images={IMAGES}
                    enableImageSelection={false}
                    rowHeight={640}
                    margin={20}
                    onClickThumbnail={this.passIssueId}
                    backdropClosesModal={true}
                />
            </div>
            </div>
            </imageGrid>
        );
    }
}
const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    maxHeight: "240px",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "100%",
    color: "white",
    padding: "2px",
    fontSize: "275%"
};
