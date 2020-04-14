import React, {Component} from 'react';

import Gallery from 'react-grid-gallery';
import antman from './Antman.png';
import blackpanther from './BlackPanther.png';
import blackknight from './blackknight.png';
import hulk from './hulk.png';
import thor from './thor.png';
import CptnAmr from './CaptianAmerica.png';
import ironMan from './IronMan.png';
import moonKnight from './moonknight.png';
import sentry from './sentry.png';

const IMAGES =
[{
        src: antman,
        thumbnail: antman,
        thumbnailWidth: 174,
        thumbnailHeight: 320,
        tags: [{value: "Ant-Man", title: "Ant-Man"}],
        caption: "Antman"
},
{
        src: blackknight,
        thumbnail: blackknight,
        thumbnailWidth: 174,
        thumbnailHeight: 320,
        tags: [{value: "Black Knight", title: "Black Knight"}],
        caption: "Black Knight"
},

{
        src: blackpanther,
        thumbnail: blackpanther,
        thumbnailWidth: 174,
        thumbnailHeight: 320,
        tags: [{value: "Black Panther", title: "Black Panther"}],
        caption: "Black Panther"
},
{
        src: ironMan,
        thumbnail: ironMan,
        thumbnailWidth: 174,
        thumbnailHeight: 320,
        tags: [{value: "IronMan", title: "IronMan"}],
        caption: "IronMan"
},
{
        src: CptnAmr,
        thumbnail: CptnAmr,
        thumbnailWidth: 174,
        thumbnailHeight: 320,
        tags: [{value: "Captain America", title: "Captain America"}],
        caption: "Captain America"
},
{
        src: hulk,
        thumbnail: hulk,
        thumbnailWidth: 174,
        thumbnailHeight: 320,
        tags: [{value: "Hulk", title: "Hulk"}],
        caption: "Hulk"
},
{
        src: moonKnight,
        thumbnail: moonKnight,
        thumbnailWidth: 174,
        thumbnailHeight: 320,
        tags: [{value: "Moon Knight", title: "Moon Knight"}],
        caption: "Moon Knight"
},
{
        src: sentry,
        thumbnail: sentry,
        thumbnailWidth: 174,
        thumbnailHeight: 320,
        tags: [{value: "Sentry", title: "Sentry"}],
        caption: "Sentry"
},
{
        src: thor,
        thumbnail: thor,
        thumbnailWidth: 174,
        thumbnailHeight: 320,
        tags: [{value: "Thor", title: "Thor"}],
        caption: "Thor"
}]

export default class imagegrid extends Component {
        render() {
                return (
                    <div style = {{
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
        