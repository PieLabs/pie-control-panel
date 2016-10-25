import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MenuItem from 'material-ui/MenuItem';
import { ToolbarSeparator } from 'material-ui/Toolbar';
import SelectField from 'material-ui/SelectField';
import map from 'lodash/map';

injectTapEventPlugin();

export class ChoiceGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  getStyle() {
    return {
      'paddingLeft': '10px',
      'paddingRight': '10px',
    }
  }

  render() {
    return <SelectField
      floatingLabelText={this.props.label}
      value={this.props.value}
      style={this.getStyle()}
      onChange={this.props.onChange} >
      {map(this.props.options, (o) => {
        return <MenuItem key={o} value={o} primaryText={o} />
      })}
    </SelectField>;
  }
}

export default class ControlPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      view: this.props.view || 'gather',
      lang: this.props.lang || 'en-US',
      colorContrast: this.props.colorContrast || 'black_on_white'
    };
  }

  onLangChange(event, index, value) {
    this.setState({ lang: value });
    this.props.onChange('lang', value);
  }

  onViewChange(event, index, value) {
    this.setState({ view: value });
    this.props.onChange('view', value);
  }

  onContrastChange(event, index, value) {
    this.setState({ colorContrast: value });
    this.props.onChange('colorContrast', value);
  }

  render() {


    let muiTheme = getMuiTheme();

    return <div>
      <MuiThemeProvider muiTheme={muiTheme}>
        <span>
          <ChoiceGroup
            label={'view'}
            options={this.props.views}
            value={this.state.view}
            onChange={this.onViewChange.bind(this)} />
          <ToolbarSeparator />
          <ChoiceGroup
            label={'lang'}
            options={this.props.langs}
            value={this.state.lang}
            onChange={this.onLangChange.bind(this)} />
          <ToolbarSeparator />
          <ChoiceGroup
            label={'color contrast'}
            options={this.props.colorContrasts}
            value={this.state.colorContrast}
            onChange={this.onContrastChange.bind(this)} />
        </span>
      </MuiThemeProvider>
    </div >;
  }
}

ControlPanel.defaultProps = {
  views: ['gather', 'view', 'evaluate'],
  langs: ['en-US', 'es-ES'],
  colorContrasts: ['black_on_white', 'white_on_black', 'black_on_rose']
}
