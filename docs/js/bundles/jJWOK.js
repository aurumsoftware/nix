var pageComponent =
webpackJsonppageComponent([7],{

/***/ 270:
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

var _flexSoy = __webpack_require__(271);

var _flexSoy2 = _interopRequireDefault(_flexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jJWOK = function (_Component) {
  _inherits(jJWOK, _Component);

  function jJWOK() {
    _classCallCheck(this, jJWOK);

    return _possibleConstructorReturn(this, (jJWOK.__proto__ || Object.getPrototypeOf(jJWOK)).apply(this, arguments));
  }

  return jJWOK;
}(_metalComponent2.default);

;

_metalSoy2.default.register(jJWOK, _flexSoy2.default);

exports.default = jJWOK;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.jJWOK = undefined;

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

  // This file was automatically generated from flex.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace jJWOK.
   * @public
   */

  goog.module('jJWOK.incrementaldom');

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
    var param335 = function param335() {
      ie_open('h6');
      var dyn28 = opt_data.page.description;
      if (typeof dyn28 == 'function') dyn28();else if (dyn28 != null) itext(dyn28);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Flex');
      ie_close('h2');
      ie_open('blockquote');
      ie_open('p');
      itext('The justify-content CSS property specifies the horizontal alignment of an flexive box (flexbox).');
      ie_close('p');
      ie_close('blockquote');
      ie_open('h3');
      itext('Horizontal alignment');
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
      itext('.nix-justify-content_start');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Items are positioned at the beginning of the container');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-justify-content_end');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Items are positioned at the end of the container');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-justify-content_between');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Items are positioned with space between the lines');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-justify-content_around');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Items are positioned with space before, between, and after the lines');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-justify-content_center');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Items are positioned at the center of the container');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      $templateAlias2({ code: '<div class="nix-justify-content_center"></div>', mode: 'xml' }, null, opt_ijData);
      ie_open('h3');
      itext('Vertical alignment');
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
      itext('.nix-align-items_stretch');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Items are stretched to fit the container');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-align-items_start');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Items are positioned at the beginning of the container');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-align-items_end');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Items are positioned at the end of the container');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-align-items_center');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Items are positioned at the center of the container');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-align-items_baseline');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Items are positioned at the baseline of the container');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      $templateAlias2({ code: '<div class="nix-align-items_center"></div>', mode: 'xml' }, null, opt_ijData);
      ie_open('h3');
      itext('Line alignment');
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
      itext('.nix-align-content_stretch');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Lines stretch to take up the remaining space');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-align-content_start');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Lines are packed toward the start of the flex container');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-align-content_end');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Lines are packed toward the end of the flex container');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-align-content_center');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Lines are packed toward the center of the flex container');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-align-content_between');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Lines are evenly distributed in the flex container');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-align-content_arround');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Lines are evenly distributed in the flex container, with half-size spaces on either end');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      $templateAlias2({ code: '<div class="nix-align-content_center"></div>', mode: 'xml' }, null, opt_ijData);
      ie_open('h3');
      itext('Item alignment');
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
      itext('.nix-align-self_stretch');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('The element is positioned to fit the container');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-align-self_auto');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('The element inherits its parent container\'s align-items property, or "stretch" if it has no parent container');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-align-self_start');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('The element is positioned at the beginning of the container');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-align-self_end');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('The element is positioned at the end of the container');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-align-self_center');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('The element is positioned at the center of the container');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-align-self_baseline');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('The element is positioned at the baseline of the container');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      $templateAlias2({ code: '<div class="nix-align-self_center"></div>', mode: 'xml' }, null, opt_ijData);
      ie_open('h3');
      itext('Direction items');
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
      itext('.nix-flex-direction_column');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('The flexible items are displayed vertically, as a column');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-flex-direction_column-reverse');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Same as column, but in reverse order');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-flex-direction_row');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('The flexible items are displayed horizontally, as a row');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-flex-direction_row-reverse');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Same as row, but in reverse order');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      $templateAlias2({ code: '<div class="nix-flex-direction_column"></div>', mode: 'xml' }, null, opt_ijData);
      ie_open('h3');
      itext('Wrap');
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
      itext('.nix-flex-wrap_wrap');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Specifies that the flexible items will wrap if necessary');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-flex-wrap_nowrap');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Specifies that the flexible items will not wrap');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td', null, null, 'style', 'text-align:left');
      ie_open('code');
      itext('.nix-flex-wrap_wrap-reverse');
      ie_close('code');
      ie_close('td');
      ie_open('td', null, null, 'style', 'text-align:left');
      itext('Specifies that the flexible items will wrap, if necessary, in reverse order');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      $templateAlias2({ code: '<div class="nix-flex-wrap_wrap"></div>', mode: 'xml' }, null, opt_ijData);
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
      itext('.nix-align-items_center--mob');
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
      itext('.nix-justify-content_middle--tab');
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
      itext('.nix-flex-direction_column--desk');
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
    $templateAlias1(soy.$$assignDefaults({ content: param335 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'jJWOK.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var jJWOK = function (_Component) {
  _inherits(jJWOK, _Component);

  function jJWOK() {
    _classCallCheck(this, jJWOK);

    return _possibleConstructorReturn(this, (jJWOK.__proto__ || Object.getPrototypeOf(jJWOK)).apply(this, arguments));
  }

  return jJWOK;
}(_metalComponent2.default);

_metalSoy2.default.register(jJWOK, templates);
exports.jJWOK = jJWOK;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[270]);