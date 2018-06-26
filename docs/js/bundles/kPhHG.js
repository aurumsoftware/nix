var pageComponent =
webpackJsonppageComponent([5],{

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

__webpack_require__(17);

var _marginSoy = __webpack_require__(275);

var _marginSoy2 = _interopRequireDefault(_marginSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var kPhHG = function (_Component) {
  _inherits(kPhHG, _Component);

  function kPhHG() {
    _classCallCheck(this, kPhHG);

    return _possibleConstructorReturn(this, (kPhHG.__proto__ || Object.getPrototypeOf(kPhHG)).apply(this, arguments));
  }

  return kPhHG;
}(_metalComponent2.default);

;

_metalSoy2.default.register(kPhHG, _marginSoy2.default);

exports.default = kPhHG;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.kPhHG = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from margin.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace kPhHG.
   * @public
   */

  goog.module('kPhHG.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param417 = function param417() {
      ie_open('h6');
      var dyn30 = opt_data.page.description;
      if (typeof dyn30 == 'function') dyn30();else if (dyn30 != null) itext(dyn30);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Margin');
      ie_close('h2');
      ie_open('p');
      itext('Default margin sizes range from 0px to 100px, step 5.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th', null, null, 'style', 'text-align:left');
      itext('CLASS');
      ie_close('th');
      ie_open('th', null, null, 'style', 'text-align:left');
      itext('DESCRIPTION');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-margin_0');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Add margin on all sides');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-margin-top_5');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Add top margin');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-margin-right_10');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Add right margin');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-margin-bottom_15');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Add bottom margin');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-margin-left_20');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Add left margin');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      $templateAlias2({ code: '<div class="nix-margin-top_5"></div>', mode: 'xml' }, null, opt_ijData);
      ie_open('h3');
      itext('Responsive');
      ie_close('h3');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th', null, null, 'style', 'text-align:left');
      itext('CLASS');
      ie_close('th');
      ie_open('th', null, null, 'style', 'text-align:left');
      itext('DESCRIPTION');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-margin_0--mob');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('--mob');
      ie_close('code');
      itext(' suffix only affects device widths of 768px and lower.');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-margin-top_5--tab');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('--tab');
      ie_close('code');
      itext(' suffix only affects device widths of 1024px and lower.');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-margin-right_10--desk');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('--desk');
      ie_close('code');
      itext(' suffix only affects device widths of 1200px and lower.');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param417 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'kPhHG.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var kPhHG = function (_Component) {
  _inherits(kPhHG, _Component);

  function kPhHG() {
    _classCallCheck(this, kPhHG);

    return _possibleConstructorReturn(this, (kPhHG.__proto__ || Object.getPrototypeOf(kPhHG)).apply(this, arguments));
  }

  return kPhHG;
}(_metalComponent2.default);

_metalSoy2.default.register(kPhHG, templates);
exports.kPhHG = kPhHG;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[274]);