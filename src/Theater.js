import React from "react";
import './App.css';
import ReactPlayer from 'react-player';

const beeVideos = [
    {
        name: 'Bumblebee',
        url: 'https://www.youtube.com/watch?v=V3HEQzIw0u0',
    },
    {
        name: 'Bumblebee',
        url: 'https://www.youtube.com/watch?v=MobAanNT1JA',
    },
    {
        name: 'Honey bee',
        url: 'https://www.youtube.com/watch?v=sAKkjD3nEv0',
    },
    {
        name: 'Mason bee',
        url: 'https://www.youtube.com/watch?v=V8vAQ1B5Zj4',
    },
    {
        name: 'Leafcutter bee',
        url: 'https://www.youtube.com/watch?v=n09xE5SGq9M',
    },
    {
        name: 'Carpenter bee',
        url: 'https://www.youtube.com/watch?v=fDMqH3YE_0E',
    },
    {
        name: 'Office bee',
        url: 'https://www.youtube.com/watch?v=BMIXbYwTdA0',
    },
]

class Theater extends React.Component{
    getBeeName(i) {
        if (i > 6){
            i = 6;
        } else if (i < 1){
            i = 0;
        }
        return beeVideos[i].name;
    }
    getBeeUrl(i){
        if (i > 6){
            i = 6;
        } else if (i < 1){
            i = 0;
        }
        return beeVideos[i].url;
    }
    render() {
        return (
            <div className="App">
                <h1>A 🐝 C's</h1>
                <h2>Bee Theater</h2>
                <h3>Featuring: {this.getBeeName(this.props.match.params.beenum)}</h3>
                <div className="Player">
                    <ReactPlayer url={this.getBeeUrl(this.props.match.params.beenum)}/>
                </div>
            </div>
        );
    }
}

export default Theater;