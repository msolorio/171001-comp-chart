import React, { Component } from 'react';
import Tiles from './tiles/Tiles';
import Chart from './chart/Chart';
import { connect } from 'react-redux';
import calculateSku from '../utilities/calculateSku';
import tileData from './tiles/tileData';

class App extends Component {

  render() {
    let recommendedSku = calculateSku(this.props.activeTiles, tileData);

    return (
      <div className="App">
        <Tiles />
        <Chart recommendedSku={recommendedSku} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeTiles: state.TilesReducer.activeTiles
});

export default connect(mapStateToProps)(App);
