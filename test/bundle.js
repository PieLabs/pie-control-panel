/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(1);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	document.registerElement('pie-control-panel', _index2.default);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var input = function input(key) {
	  return ' \n    <label>\n      <input type="radio" name="mode" value="' + key + '"/>\n    ' + key + '\n    </label>';
	};

	var html = ' \n    <span>A tmp control panel</span>\n    ' + input('gather') + '\n    ' + input('view') + '\n    ' + input('evaluate') + '\n    <span> color contrast</span>\n   <select name="colorContrast">\n      <option value="black_on_white">black on white</option>\n      <option value="white_on_black">white on black</option>\n      <option value="black_on_rose">black on rose</option>\n    </select>';

	var PieControlPanel = function (_HTMLElement) {
	  _inherits(PieControlPanel, _HTMLElement);

	  function PieControlPanel() {
	    _classCallCheck(this, PieControlPanel);

	    return _possibleConstructorReturn(this, (PieControlPanel.__proto__ || Object.getPrototypeOf(PieControlPanel)).apply(this, arguments));
	  }

	  _createClass(PieControlPanel, [{
	    key: 'createdCallback',
	    value: function createdCallback() {
	      this.innerHTML = html;
	      this.emitEnvChangedEvent();
	    }
	  }, {
	    key: 'attachedCallback',
	    value: function attachedCallback() {
	      var _this2 = this;

	      this.addChangeListener('gather');
	      this.addChangeListener('view');
	      this.addChangeListener('evaluate');

	      var select = this.querySelector('select[name="colorContrast"]');
	      select.addEventListener('change', function (event) {
	        console.log('select changed', event);
	        _this2.env.accessibility = _this2.env.accessibility || {};
	        _this2.env.accessibility.colorContrast = event.target.value;
	        _this2.emitEnvChangedEvent();
	      });
	    }
	  }, {
	    key: 'onInputChange',
	    value: function onInputChange(key) {
	      var _this3 = this;

	      return function () {
	        _this3.env.mode = key;
	        _this3.emitEnvChangedEvent();
	      };
	    }
	  }, {
	    key: 'emitEnvChangedEvent',
	    value: function emitEnvChangedEvent() {
	      var event = new CustomEvent('envChanged');
	      this.dispatchEvent(event);
	    }
	  }, {
	    key: 'addChangeListener',
	    value: function addChangeListener(key) {
	      var el = this.querySelector('input[value="' + key + '"]');
	      if (!el) {
	        throw new Error('cant find input');
	      }
	      el.addEventListener('change', this.onInputChange(key));
	    }
	  }, {
	    key: 'env',
	    set: function set(e) {
	      this._env = e;
	    }
	  }]);

	  return PieControlPanel;
	}(HTMLElement);

	exports.default = PieControlPanel;

/***/ }
/******/ ]);