import React, { Component } from "react";
// import AutoplaySlider from "react-awesome-slider/hoc/autoplay";
import AwesomeSlider from 'react-awesome-slider';

// import AwesomeSliderStyles from "react-awesome-slider/src/styled/fold-out-animation.scss";
import BackgroundAsImage from "components/hero/BackgroundAsImage";

export default class slider extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { width: 0, height: 0 };
  //     this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  //   }
  data = [
    {
      title: "Consulting for Every Business.",
    },
    {
      title: "Consulting for Every Business.",
    },
    {
      title: "Consulting for Every Business.",
    },
  ];
  render() {
    return (
      <AwesomeSlider
        // play={true}
        // cancelOnInteraction={false}
        // interval={6000}
        // cssModule={AwesomeSliderStyles}
      >
        <BackgroundAsImage />
        <BackgroundAsImage />
        <BackgroundAsImage />
      </AwesomeSlider>
    );
  }
}
