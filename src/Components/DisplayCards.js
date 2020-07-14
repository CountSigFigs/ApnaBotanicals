import React, { Component } from 'react';
import RenderProducts from './RenderProducts'


class DisplayCards extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center mt-3">
            <i className="fa fa-leaf fa-4x mt-2"></i>
            <h2>Our Capsules</h2>
            <p><em>We offer <span className="green">free</span> shipping on all of our products!</em></p>
          </div>
        </div>
        <div className="row d-flex justify-content-around">
          <RenderProducts items={this.props.products} onClick={this.props.onClick} />
        </div>
      </div>
    )
  }
}

export default DisplayCards;