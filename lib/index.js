import React from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './control-panel.jsx';
import _ from 'lodash';

export default class PieControlPanel extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.dispatchEvent(new CustomEvent('pie.control-panel-ready', { bubbles: true }));
  }

  onChange(key, value) {

    let current = _.cloneDeep(this._env);

    if (key === 'colorContrast') {
      this._env.accessibility.colorContrast = value;
    } else if (key === 'view') {
      //TODO: need to change mode -> view
      this._env.mode = value;
    } else if (key === 'lang') {
      this._env.locale = value;
    } else {
      this._env[key] = value;
    }

    if (!_.isEqual(current, this.env)) {
      this.emitEnvChangedEvent();
    }
  }

  emitEnvChangedEvent() {
    console.log('emit env changed event..: ', this._env);
    var event = new CustomEvent('envChanged');
    this.dispatchEvent(event);
  }

  render() {
    console.debug("supported languages", this._languages);
    let element = React.createElement(ControlPanel, {
      lang: this._env.lang,
      view: this._env.mode,
      langs: this._languages,
      colorContrast: this._env.accessibility.colorContrast,
      score: this._score,
      onChange: this.onChange.bind(this)
    });
    ReactDOM.render(element, this);
  }

  get env() {
    return this._env;
  }

  set env(e) {
    this._env = e;

    if (this._env) {
      this._env.lang = this._env.lang || 'en-US';
      this._env.mode = this._env.mode || 'gather';
      this._env.accessibility = this._env.accessibility || { colorContrast: 'black_on_white' }
      this._env.accessibility.colorContrast = this._env.accessibility.colorContrast || 'black_on_white';
      this.render();
    }
  }

  set score(value){
    this._score = value;
    this.render();
  }

  set languages(l) {
    this._languages = l;
    this.render();
  }

  emitEnvChangedEvent() {
    console.log('emit env changed event..: ', this._env);
    var event = new CustomEvent('envChanged');
    this.dispatchEvent(event);
  }
}
