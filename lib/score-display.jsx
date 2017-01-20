import React from 'react';

export default class ScoreDisplay extends React.Component {

  constructor(props) {
    super(props);
  }

  getStyle() {
    return {
      'width': '200px',
      display: 'inline',
      height: '59px',
      fontFamily: "'Roboto', san-serif",
      position: 'absolute',
      lineHeight: '24px',
      paddingLeft: '10px',
      top: '18px',
      borderBottom: 'solid 1px rgba(0,0,0,0.17)'
    }
  }

  spanStyle() {
    return {
      left: '13px',
      verticalAlign: 'bottom',
      position: 'absolute',
      bottom: '11px',
      fontSize: '16px',
      color: 'rgba(0,0,0, 0.5)',
      fontFamily: "'Roboto', san-serif",
    }
  }
  
  render() {
    if(this.props.score){
      return <div style={this.getStyle()}>
        <span style={this.spanStyle()}>{this.props.score}</span>
      </div>;
    } else {
      return <span></span>;
    }
  }
}
