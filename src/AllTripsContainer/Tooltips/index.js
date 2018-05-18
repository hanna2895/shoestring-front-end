import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';

 class Tooltips extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div>
        <p>Please enter a three letter airport <br /><a href="https://airportcod.es/" target="_blank" id="TooltipExample">code</a>.</p>
        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
          Don't know JFK from LAX?<br/> Not to worry.<br/> The good folks over at <a href="https://airportcod.es/" target="_blank">Airport Codes</a> made a great website for us all to use.<br/> Click to explore!
        </Tooltip>
      </div>
    );
  }
}


export default Tooltips;
