var pageComponent =
webpackJsonppageComponent([9],{

/***/ 266:
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

var _alignSoy = __webpack_require__(267);

var _alignSoy2 = _interopRequireDefault(_alignSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var zFwHC = function (_Component) {
  _inherits(zFwHC, _Component);

  function zFwHC() {
    _classCallCheck(this, zFwHC);

    return _possibleConstructorReturn(this, (zFwHC.__proto__ || Object.getPrototypeOf(zFwHC)).apply(this, arguments));
  }

  return zFwHC;
}(_metalComponent2.default);

;

_metalSoy2.default.register(zFwHC, _alignSoy2.default);

exports.default = zFwHC;

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.zFwHC = undefined;

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

  // This file was automatically generated from align.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace zFwHC.
   * @public
   */

  goog.module('zFwHC.incrementaldom');

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
    var param303 = function param303() {
      ie_open('h6');
      var dyn26 = opt_data.page.description;
      if (typeof dyn26 == 'function') dyn26();else if (dyn26 != null) itext(dyn26);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Align');
      ie_close('h2');
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
      itext('.nix-vertical-align_baseline');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('The element is aligned with the baseline of the parent');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-vertical-align_top');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('The element is aligned with the top of the tallest element on the line');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-vertical-align_middle');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('The element is placed in the middle of the parent element');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-vertical-align_bottom');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('The element is aligned with the lowest element on the line');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-vertical-align_text-top');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('The element is aligned with the top of the parent element\'s font');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-vertical-align_text-bottom');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('The element is aligned with the bottom of the parent element\'s font');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      $templateAlias2({ code: '<p>\n  <img src="icon.jpg" class="nix-vertical-align__middle" /> Lorem ipsum dolor sit ammet\n</p>', mode: 'xml' }, null, opt_ijData);
      ie_open('blockquote');
      ie_open('p');
      itext('The vertical-align CSS property specifies the vertical alignment of an inline or table-cell box.');
      ie_close('p');
      ie_close('blockquote');
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
      itext('.nix-vertical-align_top--mob');
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
      itext('.nix-vertical-align_middle--tab');
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
      itext('.nix-vertical-align_bottom--desk');
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
    $templateAlias1(soy.$$assignDefaults({ content: param303 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'zFwHC.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var zFwHC = function (_Component) {
  _inherits(zFwHC, _Component);

  function zFwHC() {
    _classCallCheck(this, zFwHC);

    return _possibleConstructorReturn(this, (zFwHC.__proto__ || Object.getPrototypeOf(zFwHC)).apply(this, arguments));
  }

  return zFwHC;
}(_metalComponent2.default);

_metalSoy2.default.register(zFwHC, templates);
exports.zFwHC = zFwHC;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[266]);