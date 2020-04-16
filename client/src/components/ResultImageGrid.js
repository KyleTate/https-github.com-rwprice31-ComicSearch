import React, {Component} from 'react';

import Gallery from 'react-grid-gallery';
import iss1 from './Images/issue1.jpg';
import iss2 from './Images/issue2.jpg';
import iss3 from './Images/issue3.jpg';
import iss4 from './Images/issue4.jpg';
import iss5 from './Images/issue5.jpg';

const IMAGES =
    [{
        src: iss1,
        thumbnail: iss1,
        thumbnailWidth: 174,
        thumbnailHeight: 320,
        tags: [{value: "Ant-Man", title: "Ant-Man"}],
        caption: "Antman"
    },
        {
            src: iss2,
            thumbnail: iss2,
            thumbnailWidth: 174,
            thumbnailHeight: 320,
            tags: [{value: "Black Knight", title: "Black Knight"}],
            caption: "Black Knight"
        },

        {
            src: iss3,
            thumbnail: iss3,
            thumbnailWidth: 174,
            thumbnailHeight: 320,
            tags: [{value: "Black Panther", title: "Black Panther"}],
            caption: "Black Panther"
        },
        {
            src: iss4,
            thumbnail: iss5,
            thumbnailWidth: 174,
            thumbnailHeight: 320,
            tags: [{value: "IronMan", title: "IronMan"}],
            caption: "IronMan"
        },
        {
            src: iss3,
            thumbnail: iss5,
            thumbnailWidth: 174,
            thumbnailHeight: 320,
            tags: [{value: "Captain America", title: "Captain America"}],
            caption: "Captain America"
        },
        {
            src: iss2,
            thumbnail: iss5,
            thumbnailWidth: 174,
            thumbnailHeight: 320,
            tags: [{value: "Captain America", title: "Captain America"}],
            caption: "Captain America"
        },
        {
            src: iss4,
            thumbnail: iss5,
            thumbnailWidth: 174,
            thumbnailHeight: 320,
            tags: [{value: "Captain America", title: "Captain America"}],
            caption: "Captain America"
        },
        {
            src: iss2,
            thumbnail: iss5,
            thumbnailWidth: 174,
            thumbnailHeight: 320,
            tags: [{value: "Captain America", title: "Captain America"}],
            caption: "Captain America"
        },
        {
            src: iss1,
            thumbnail: iss1,
            thumbnailWidth: 174,
            thumbnailHeight: 320,
            tags: [{value: "Captain America", title: "Captain America"}],
            caption: "Captain America"
        },
        {
            src: iss3,
            thumbnail: iss3,
            thumbnailWidth: 174,
            thumbnailHeight: 320,
            tags: [{value: "Captain America", title: "Captain America"}],
            caption: "Captain America"
        },
        {
            src: iss5,
            thumbnail: iss5,
            thumbnailWidth: 174,
            thumbnailHeight: 320,
            tags: [{value: "Captain America", title: "Captain America"}],
            caption: "Captain America"
        },


        ]

export default class imagegrid extends Component {
    render() {
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
                    enableLightbox={false}
                    rowHeight={520}
                />
            </div>
        );
    }
}
