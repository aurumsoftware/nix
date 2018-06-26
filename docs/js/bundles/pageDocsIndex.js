var pageComponent =
webpackJsonppageComponent([10],{

/***/ 262:
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

var _indexSoy = __webpack_require__(263);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pageDocsIndex = function (_Component) {
  _inherits(pageDocsIndex, _Component);

  function pageDocsIndex() {
    _classCallCheck(this, pageDocsIndex);

    return _possibleConstructorReturn(this, (pageDocsIndex.__proto__ || Object.getPrototypeOf(pageDocsIndex)).apply(this, arguments));
  }

  return pageDocsIndex;
}(_metalComponent2.default);

;

_metalSoy2.default.register(pageDocsIndex, _indexSoy2.default);

exports.default = pageDocsIndex;

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.pageDocsIndex = undefined;

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

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace pageDocsIndex.
   * @public
   */

  goog.module('pageDocsIndex.incrementaldom');

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

  var $templateAlias3 = _metalSoy2.default.getTemplate('ElectricSearchAutocomplete.incrementaldom', 'render');

  var $templateAlias2 = _metalSoy2.default.getTemplate('Sidebar.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('Topbar.incrementaldom', 'render');

  /**
   * @param {{
   *    site: (?),
   *    page: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'main');
    ie_open('main', null, null, 'class', 'content');
    ie_open('div', null, null, 'class', 'docs');
    $templateAlias1({ items: opt_data.site.topbar, style: 'topbar-light topbar-docs', logo: { text: opt_data.site.title, icon: 'icon-16-code-file' } }, null, opt_ijData);
    $templateAlias2({ section: opt_data.site.index.children['docs'], site: opt_data.site }, null, opt_ijData);
    $topics(opt_data, null, opt_ijData);
    ie_close('div');
    ie_close('main');
    ie_close('div');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'pageDocsIndex.render';
  }

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
  function $topics(opt_data, opt_ignored, opt_ijData) {
    var $$temp;
    ie_open('div', null, null, 'class', 'sidebar-offset');
    ie_open('div', null, null, 'class', 'container-hybrid docs-home-top');
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'col-xs-16');
    ie_open('h1', null, null, 'class', 'docs-home-top-title');
    itext('Docs');
    ie_close('h1');
    ie_open('p', null, null, 'class', 'docs-home-top-description');
    itext('Start learning how to leverage the power of ');
    var dyn23 = opt_data.site.title;
    if (typeof dyn23 == 'function') dyn23();else if (dyn23 != null) itext(dyn23);
    itext('.');
    ie_close('p');
    ie_close('div');
    ie_close('div');
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'container-hybrid docs-home-top-form');
    ie_open('form', null, null, 'action', '/docs/search.html', 'method', 'GET', 'enctype', 'multipart/form-data');
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'col-xs-14 col-xs-offset-1 col-md-10 col-md-offset-3 col-lg-6 col-lg-offset-5');
    ie_open('div', null, null, 'class', 'search');
    $templateAlias3({ dataURL: (($$temp = opt_data.site.basePath) == null ? '' : $$temp) + '/site.json', maxResults: 3, path: '/docs/', placeholder: 'Search Docs' }, null, opt_ijData);
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_close('form');
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_open('div', null, null, 'class', 'docs-home-topics');
    ie_open('div', null, null, 'class', 'container-hybrid');
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'col-xs-14 col-xs-offset-1 ');
    ie_open('section', null, null, 'class', 'docs-home-middle');
    ie_open('h2', null, null, 'class', 'docs-home-middle-subtitle');
    itext('Choose a Guide');
    ie_close('h2');
    ie_open('p', null, null, 'class', 'docs-home-middle-description');
    itext('Each one provide step by step coverage for every core feature.');
    ie_close('p');
    ie_close('section');
    ie_close('div');
    ie_close('div');
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'col-md-12 col-md-offset-2 col-xs-16');
    ie_open('div', null, null, 'class', 'row');
    var childIdList281 = opt_data.page.childIds;
    var childIdListLen281 = childIdList281.length;
    for (var childIdIndex281 = 0; childIdIndex281 < childIdListLen281; childIdIndex281++) {
      var childIdData281 = childIdList281[childIdIndex281];
      var topic__soy271 = opt_data.page.children[childIdData281];
      if (!topic__soy271.hidden) {
        ie_open('div', null, null, 'class', 'col-md-8 col-md-offset-0 col-xs-14 col-xs-offset-1');
        ie_open('a', null, null, 'class', 'topic radial-out', 'href', topic__soy271.url);
        ie_open('div', null, null, 'class', 'topic-icon');
        ie_void('span', null, null, 'class', 'icon-16-' + topic__soy271.icon);
        ie_close('div');
        ie_open('h3', null, null, 'class', 'topic-title');
        var dyn24 = topic__soy271.title;
        if (typeof dyn24 == 'function') dyn24();else if (dyn24 != null) itext(dyn24);
        ie_close('h3');
        ie_close('a');
        ie_close('div');
      }
    }
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_close('div');
  }
  exports.topics = $topics;
  if (goog.DEBUG) {
    $topics.soyTemplateName = 'pageDocsIndex.topics';
  }

  exports.render.params = ["site"];
  exports.render.types = { "site": "?" };
  exports.topics.params = ["page", "site"];
  exports.topics.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var pageDocsIndex = function (_Component) {
  _inherits(pageDocsIndex, _Component);

  function pageDocsIndex() {
    _classCallCheck(this, pageDocsIndex);

    return _possibleConstructorReturn(this, (pageDocsIndex.__proto__ || Object.getPrototypeOf(pageDocsIndex)).apply(this, arguments));
  }

  return pageDocsIndex;
}(_metalComponent2.default);

_metalSoy2.default.register(pageDocsIndex, templates);
exports.pageDocsIndex = pageDocsIndex;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[262]);