import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { ToolbarSeparator } from 'material-ui/Toolbar';
import ChoiceGroup from './choice-group';
import ScoreDisplay from './score-display';

export { ChoiceGroup, ScoreDisplay };

injectTapEventPlugin();

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


    const separatorStyle = {
      'marginLeft': '0',
      'marginRight': '0',
      'display': 'inline-block'
    }

    return <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <ChoiceGroup
          label={'view'}
          options={this.props.views}
          value={this.state.view}
          style={{ width: '100px' }}
          onChange={this.onViewChange.bind(this)} />
        <ToolbarSeparator style={separatorStyle} />
        <ChoiceGroup
          label={'lang'}
          options={this.props.langs}
          value={this.state.lang}
          onChange={this.onLangChange.bind(this)} />
        <ToolbarSeparator style={separatorStyle} />
        <ChoiceGroup
          label={'color contrast'}
          options={this.props.colorContrasts}
          value={this.state.colorContrast}
          onChange={this.onContrastChange.bind(this)} />
        <ScoreDisplay score={this.props.score} />
      </div >
    </MuiThemeProvider>;
  }
}

ControlPanel.defaultProps = {
  views: ['gather', 'view', 'evaluate'],
  langs: ['en-US', 'es-ES'],
  colorContrasts: ['black_on_white', 'white_on_black', 'black_on_rose'],
  score: ''
}
