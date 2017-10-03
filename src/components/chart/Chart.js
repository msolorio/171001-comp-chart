import React from 'react';
import Headers from './Headers';
import Header from './Header';
import Slider from './Slider';
import Features from './Features';
import Feature from './Feature';
import config from './config';
import './Chart.css';

export default class Chart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(sku) {
    this.setState({hovered: sku});
  }

  handleMouseLeave(sku) {
    this.setState({hovered: false});
  }

  render() {
    return (
      <div className="Chart">
        <div className="recommendedSku">recommended sku:&nbsp;
          {
            this.props.recommendedSku
            ? this.props.recommendedSku
            : 'none'
          }
        </div>

        <Headers>
          {
            config.products.map((product, index) => {
              return (
                <Header {...config.products[index]}
                  recommendedSku={this.props.recommendedSku}
                  hovered={this.state.hovered}
                  highlighted={this.highlighted}
                  handleMouseEnter={this.handleMouseEnter}
                  handleMouseLeave={this.handleMouseLeave}
                  key={index} />
              );
            })
          }
        </Headers>

        <Slider/>

        <Features>
          {
            config.products.map((product, index) => {
              return (
                <Feature {...config.products[index]}
                  recommendedSku={this.props.recommendedSku}
                  hovered={this.state.hovered}
                  highlighted={this.highlighted}
                  handleMouseEnter={this.handleMouseEnter}
                  handleMouseLeave={this.handleMouseLeave}
                  key={index} />
              );
            })
          }
        </Features>
      </div>
    );
  }
};
