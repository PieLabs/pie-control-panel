let input = (key) => {
  return ` 
    <label>
      <input type="radio" name="mode" value="${key}"/>
    ${key}
    </label>`
};

let html = ` 
    <span>A tmp control panel</span>
    ${input('gather')}
    ${input('view')}
    ${input('evaluate')}
    <span> color contrast</span>
   <select name="colorContrast">
      <option value="black_on_white">black on white</option>
      <option value="white_on_black">white on black</option>
      <option value="black_on_rose">black on rose</option>
    </select>
    <span> language</span>
    <select name="language">
      <option value="en-US">english</option>
      <option value="es-ES">spanish</option>
    </select>
    <span class="score"></span>`;


export default class PieControlPanel extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html;
    this.addChangeListener('gather');
    this.addChangeListener('view');
    this.addChangeListener('evaluate');

    var select = this.querySelector('select[name="colorContrast"]');
    select.addEventListener('change', (event) => {
      this._env.accessibility = this._env.accessibility || {};
      this._env.accessibility.colorContrast = event.target.value;
      this.emitEnvChangedEvent();
    });

    var languageSelect = this.querySelector('select[name="language"]');
    languageSelect.addEventListener('change', (event) => {
      this._env.locale = event.target.value;
      this.emitEnvChangedEvent();
    });

    this.dispatchEvent(new CustomEvent('pie-control-panel-ready'));
  }

  get env() {
    return this._env;
  }

  set env(e) {
    console.log("Setting env", e);
    this._env = e;
  }

  onInputChange(key) {
    return () => {
      this._env.mode = key;
      this.emitEnvChangedEvent();
    };
  }

  emitEnvChangedEvent() {
    var event = new CustomEvent('envChanged');
    this.dispatchEvent(event);
  }

  addChangeListener(key) {
    var el = this.querySelector('input[value="' + key + '"]');
    if (!el) {
      throw new Error('cant find input');
    }
    el.addEventListener('change', this.onInputChange(key));
  };

}
