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

    let current = _.clone(this._env);
    this._env[key] = value;

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
    let element = React.createElement(ControlPanel, {
      lang: this._env.lang,
      view: this._env.view,
      colorContrast: this._env.colorContrast,
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
      this._env.lang = this._env.lang || 'en-us';
      this._env.view = this._env.view || 'gather';
      this._env.colorContrast = this._env.colorContrast || 'black_on_white';
      this.render();
    }
  }
}
