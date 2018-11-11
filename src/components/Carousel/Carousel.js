import React, { Component } from 'react';
import classes from './Carousel.module.css';

class Carousel extends Component {

  render() {
    return (
      <div className={classes.container}>
        {this.props.children}
      </div>
    );
  }
}

export default Carousel;