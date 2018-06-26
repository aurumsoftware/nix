var pageComponent =
webpackJsonppageComponent([4],{

/***/ 276:
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

var _paddingSoy = __webpack_require__(277);

var _paddingSoy2 = _interopRequireDefault(_paddingSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuILz = function (_Component) {
  _inherits(cuILz, _Component);

  function cuILz() {
    _classCallCheck(this, cuILz);

    return _possibleConstructorReturn(this, (cuILz.__proto__ || Object.getPrototypeOf(cuILz)).apply(this, arguments));
  }

  return cuILz;
}(_metalComponent2.default);

;

_metalSoy2.default.register(cuILz, _paddingSoy2.default);

exports.default = cuILz;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.cuILz = undefined;

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

  // This file was automatically generated from padding.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace cuILz.
   * @public
   */

  goog.module('cuILz.incrementaldom');

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
    var param433 = function param433() {
      ie_open('h6');
      var dyn31 = opt_data.page.description;
      if (typeof dyn31 == 'function') dyn31();else if (dyn31 != null) itext(dyn31);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Padding');
      ie_close('h2');
      ie_open('p');
      itext('Default padding sizes range from 0px to 100px, step 5.');
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
      itext('.nix-padding_0');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Add padding on all sides');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-padding-top_5');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Add top padding');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-padding-right_10');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Add right padding');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-padding-bottom_15');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Add bottom padding');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-padding-left_20');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Add left padding');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      $templateAlias2({ code: '<div class="nix-padding-top_5"></div>', mode: 'xml' }, null, opt_ijData);
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
      itext('.nix-padding_0--mob');
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
      itext('.nix-padding-top_5--tab');
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
      itext('.nix-padding-right_10--desk');
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
    $templateAlias1(soy.$$assignDefaults({ content: param433 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'cuILz.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var cuILz = function (_Component) {
  _inherits(cuILz, _Component);

  function cuILz() {
    _classCallCheck(this, cuILz);

    return _possibleConstructorReturn(this, (cuILz.__proto__ || Object.getPrototypeOf(cuILz)).apply(this, arguments));
  }

  return cuILz;
}(_metalComponent2.default);

_metalSoy2.default.register(cuILz, templates);
exports.cuILz = cuILz;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[276]);