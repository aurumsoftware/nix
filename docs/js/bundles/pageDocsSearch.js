var pageComponent =
webpackJsonppageComponent([1],{

/***/ 264:
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

var _searchSoy = __webpack_require__(265);

var _searchSoy2 = _interopRequireDefault(_searchSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pageDocsSearch = function (_Component) {
  _inherits(pageDocsSearch, _Component);

  function pageDocsSearch() {
    _classCallCheck(this, pageDocsSearch);

    return _possibleConstructorReturn(this, (pageDocsSearch.__proto__ || Object.getPrototypeOf(pageDocsSearch)).apply(this, arguments));
  }

  return pageDocsSearch;
}(_metalComponent2.default);

;

_metalSoy2.default.register(pageDocsSearch, _searchSoy2.default);

exports.default = pageDocsSearch;

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.pageDocsSearch = undefined;

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

  // This file was automatically generated from search.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace pageDocsSearch.
   * @public
   */

  goog.module('pageDocsSearch.incrementaldom');

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

  var $templateAlias3 = _metalSoy2.default.getTemplate('ElectricSearch.incrementaldom', 'render');

  var $templateAlias2 = _metalSoy2.default.getTemplate('Sidebar.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('main.incrementaldom', 'render');

  /**
   * @param {{
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var $$temp;
    var param287 = function param287() {
      $templateAlias2({ section: opt_data.site.index.children['docs'], site: opt_data.site }, null, opt_ijData);
      ie_open('div', null, null, 'class', 'sidebar-offset');
      ie_open('div', null, null, 'class', 'container-hybrid docs-home-top');
      ie_open('div', null, null, 'class', 'row');
      ie_open('div', null, null, 'class', 'col-xs-16');
      ie_open('h1', null, null, 'class', 'docs-home-top-title');
      ie_open('span');
      itext('Electric');
      ie_close('span');
      itext(' Docs');
      ie_close('h1');
      ie_open('p', null, null, 'class', 'docs-home-top-description');
      itext('Start learning how to leverage the power of ');
      var dyn25 = opt_data.site.title;
      if (typeof dyn25 == 'function') dyn25();else if (dyn25 != null) itext(dyn25);
      itext('.');
      ie_close('p');
      ie_close('div');
      ie_close('div');
      ie_open('div', null, null, 'class', 'row');
      ie_open('div', null, null, 'class', 'container-hybrid');
      $templateAlias3({ action: '/docs/search.html', dataURL: (($$temp = opt_data.site.basePath) == null ? '' : $$temp) + '/site.json', path: '/docs/', placeholder: 'Search Docs' }, null, opt_ijData);
      ie_close('div');
      ie_close('div');
      ie_close('div');
      ie_close('div');
    };
    $templateAlias1(soy.$$assignDefaults({ elementClasses: 'docs', content: param287 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'pageDocsSearch.render';
  }

  exports.render.params = ["site"];
  exports.render.types = { "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var pageDocsSearch = function (_Component) {
  _inherits(pageDocsSearch, _Component);

  function pageDocsSearch() {
    _classCallCheck(this, pageDocsSearch);

    return _possibleConstructorReturn(this, (pageDocsSearch.__proto__ || Object.getPrototypeOf(pageDocsSearch)).apply(this, arguments));
  }

  return pageDocsSearch;
}(_metalComponent2.default);

_metalSoy2.default.register(pageDocsSearch, templates);
exports.pageDocsSearch = pageDocsSearch;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[264]);