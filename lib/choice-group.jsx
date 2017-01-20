import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class ChoiceGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  getStyle() {

    let out = {
      'paddingLeft': '14px',
      'paddingRight': '14px',
      height: '78px',
      'width': 'inherit'
    }

    if (this.props.label === 'view') {
      out['minWidth'] = '150px';
    }
    return out;
  }

  underlineStyle(){
    return {
      borderTop: 'none'
    }
  }

  render() {
    return <SelectField
      underlineStyle={this.underlineStyle()}
      floatingLabelText={this.props.label}
      value={this.props.value}
      style={this.getStyle()}
      onChange={this.props.onChange} >
      {this.props.options.map((o) => {
        return <MenuItem key={o} value={o} primaryText={o} />
      })}
    </SelectField>;
  }
}
