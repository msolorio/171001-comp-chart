import React, { Component } from 'react';
import Tiles from './tiles/Tiles';
import Chart from './chart/Chart';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Tiles />
        <Chart />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeTiles: state.TilesReducer.activeTiles
});

export default connect(mapStateToProps)(App);
