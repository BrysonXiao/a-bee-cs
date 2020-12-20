import React from "react";
import './App.css';
import BeeInfo from './components/BeeInfo.js';
import { Grid } from "@material-ui/core";

// Bee pictures
import bumblebee from './images/bumblebee.jpg';
import honeybee from './images/honeybee.jpg';
import masonbee from './images/masonbee.jpg';
import leafcuttingbee from './images/leafcuttingbee.jpg';
import carpenterbee from './images/carpenterbee.jpg';
import officebee from './images/officebee.jpg';

import Button from '@material-ui/core/Button';


const beeInfo = [
  {
    name: 'Bumblebee',
    scientific: 'Bombus',
    picture: bumblebee,
    selected: false,
    description: 'Bumblebees have round bodies covered in soft hair, making them appear and feel fuzzy. Bumblebees feed on nectar.',
    beenum: 1,
  },
  {
    name: 'Honey Bee',
    scientific: 'Apis',
    picture: honeybee,
    selected: false,
    description: 'Known for the surplus production of honey. Some species have been domesticated for honey production and crop pollination.',
    beenum: 2,
  },
  {
    name: 'Mason Bee',
    scientific: 'Osmia',
    picture: masonbee,
    selected: false,
    description: 'Mason bees are solitary, so every females makes her own nest out of mud or other "masonry". That\'s how they got their name.',
    beenum: 3,
  },
  {
    name: 'Leafcutter Bee',
    scientific: 'Megachile',
    picture: leafcuttingbee,
    selected: false,
    description: 'One of the largest genera of bees (1500+ species). Rather than chewing, some species neatly cut leaves, earning them their name.',
    beenum: 4,
  },
  {
    name: 'Carpenter Bee',
    scientific: 'Xylocopa',
    picture: carpenterbee,
    selected: false,
    description: 'Carpenter bees usually burrow into hard plant material such as dead wood or bamboo. Most species are mostly black.',
    beenum: 5,
  },
  {
    name: 'Office Bee',
    scientific: 'Occupatus',
    picture: officebee,
    selected: false,
    description: 'Office bees can be found standing around in office spaces and serve as a reminder to office workers to be busy like bees.',
    beenum: 6,
  },
]

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selected: 0,
    }
  }

  handleClick(i){
    this.setState({
      selected: i,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>A 🐝 C's</h1>
        <h3>Learn about some types of bees and select one to see its video!</h3>
        <Button 
          variant="contained" 
          color="secondary" 
          disabled={! this.state.selected}
          onClick={() => {
            this.props.history.push('/theater/' + this.state.selected);
          }}
          >See video!</Button>
        <Grid container 
          spacing={4} 
          justify="center" 
          style={{
            paddingTop: '32px',
            paddingLeft: '15%',
            paddingRight: '15%',
          }}>
          {
            beeInfo.map(bee => {
              return (
                <Grid item xs={12} sm={6} md={4} key={bee.beenum}>
                  <BeeInfo 
                    name={bee.name} 
                    scientific={bee.scientific}
                    picture={bee.picture}
                    selected={this.state.selected === bee.beenum}
                    description={bee.description}
                    beenum={bee.beenum}
                    onClick={i => this.handleClick(i)}
                    key={bee.beenum}
                    />
                </Grid>
              );
            })
          }
        </Grid>
      </div>
    );
  }
}

export default App;
