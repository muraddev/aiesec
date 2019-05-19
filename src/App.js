import React from 'react';
import './App.css';
import Station from './Station'; //the station

class App extends React.Component {

  // Initializing the stations
  stations = [
    {
      name: "Putin FM",
      frequency: "66,6"
    },
    {
      name: "Dribbble FM",
      frequency: "101,2"
    },
    {
      name: "Doge FM",
      frequency: "99,4"
    },
    {
      name: "Ballads FM",
      frequency: "87,1"
    },
    {
      name: "Maximum FM",
      frequency: "142,2"
    }
  ]
  // Initializing the state. Current stands for the selected Station
  state = {
    current: null
  }

  constructor(){
    super();
    this.selectStation = this.selectStation.bind(this);
  }

  //setting the current Station when click on it
  selectStation(station){
    if(this.state.current==station)
      //remove current if clicked on the same object
      this.setState({current:null});
    else
      // Set as a new current station
      this.setState({current:station});

  }

  //render all the stations on the view
  renderStations() {
    return this.stations.map(
      (station, key) => <Station key={key} click={this.selectStation} active={this.state.current==station} station={station} />)
  }


  render() {
    return (
      <div className="radioApp">
        <div className="head">
          <a className="backButton"><img src="/images/back-arrow.png" /></a>
          STATIONS

        <a className="turnOffButton"><img src="/images/switch.png" /></a>
        </div>
        <div className="stations">
          <div className="yScroll">
          {/* calling to render stations */}
            {this.renderStations()}
          </div>

        </div>

        <div className="foot">
          <div style={{display: this.state.current!=null?"block":"none"}}>
            <div className="currently">CURRENTLY PLAYING</div>
            <div className="currentFM">{this.state.current&&this.state.current.name}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
