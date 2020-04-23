import React, {Component} from 'react';

import Gallery from 'react-grid-gallery';

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
                vwidth: 282,
            }
        )
    })
        // console.log(IMAGES.length)
        // console.log(IMAGES)
        // console.log(this.props)
        return (
            <div id="Result-Image-Grid" style = {{
                display: "box",
                minHeight: "1px",
                width: "100%",
                border: "1px solid #ddd",
                overflow :"auto"}}>
                <Gallery
                    images={IMAGES}
                    enableImageSelection={false}
                    enableLightbox={true}
                    rowHeight={520}
                    onClickThumbnail={this.passIssueId}
                />
            </div>
        );
    }
}
