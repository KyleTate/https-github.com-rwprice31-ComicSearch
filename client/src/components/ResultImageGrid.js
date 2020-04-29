import React, {Component} from 'react';

import Gallery from 'react-grid-gallery';
import HeroProfile from "./HeroProfile";
import styled from "styled-components";

var IMAGES = []

export default class imagegrid extends Component {
    constructor(props) {
        super(props);
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
            this.issue_cover_id = s.id;
            this.image = require('./issue_covers/' + this.issue_cover_id + '.jpg');

            IMAGES.push({
                src: this.image,
                thumbnail: this.image,
                thumbnailWidth: 174,
                thumbnailHeight: 320,
                tags: [{value: "", title: "", issue_id: s.id}],
                caption: "",
                scaletwidth: 282,
                marginLeft: 0,
                width: 100,
            }
        )
    })
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
                    enableLightbox={true}
                    rowHeight={700}
                    margin={20}
                    onClickThumbnail={this.passIssueId}
                />
            </div>
            </div>
            </imageGrid>
        );
    }
}
