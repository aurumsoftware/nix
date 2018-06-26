var pageComponent =
webpackJsonppageComponent([6],{

/***/ 272:
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

var _indexSoy = __webpack_require__(273);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EAWYj = function (_Component) {
  _inherits(EAWYj, _Component);

  function EAWYj() {
    _classCallCheck(this, EAWYj);

    return _possibleConstructorReturn(this, (EAWYj.__proto__ || Object.getPrototypeOf(EAWYj)).apply(this, arguments));
  }

  return EAWYj;
}(_metalComponent2.default);

;

_metalSoy2.default.register(EAWYj, _indexSoy2.default);

exports.default = EAWYj;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.EAWYj = undefined;

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
   * @fileoverview Templates in namespace EAWYj.
   * @public
   */

  goog.module('EAWYj.incrementaldom');

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
    var param376 = function param376() {
      ie_open('h6');
      var dyn29 = opt_data.page.description;
      if (typeof dyn29 == 'function') dyn29();else if (dyn29 != null) itext(dyn29);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Getting started');
      ie_close('h2');
      ie_open('p');
      itext('Download Nix from ');
      ie_open('a', null, null, 'href', 'https://github.com/aurumsoftware/nix', 'target', '_blank');
      itext('repository');
      ie_close('a');
      itext(' or install the package ');
      ie_open('code');
      itext('aurum-nix');
      ie_close('code');
      itext(':');
      ie_close('p');
      $templateAlias2({ code: 'yarn add aurum-nix', mode: 'shel' }, null, opt_ijData);
      ie_open('p');
      itext('And import in your project:');
      ie_close('p');
      $templateAlias2({ code: '<link rel="stylesheet" type="text/css" href="node_modules/aurum-nix/dist/nix.min.css" />', mode: 'xml' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Usage');
      ie_close('h2');
      ie_open('p');
      itext('Write the classes as you would write css properties and values separating with ');
      ie_open('code');
      itext('_');
      ie_close('code');
      itext(' between propertie and the value.');
      ie_close('p');
      ie_open('p');
      itext('By default, the classes has a prefix ');
      ie_open('code');
      itext('nix-');
      ie_close('code');
      itext(' that you should apply before of the class name.');
      ie_close('p');
      ie_open('p');
      itext('You can use the responsive classes with the suffix ');
      ie_open('code');
      itext('--mob');
      ie_close('code');
      itext(' for screens up until 768px (mobile), ');
      ie_open('code');
      itext('--tab');
      ie_close('code');
      itext(' for screens up until 1024px (tablets and small screens) and ');
      ie_open('code');
      itext('--desk');
      ie_close('code');
      itext(' for screens up until 1200px (medium screens).');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Customization');
      ie_close('h2');
      ie_open('p');
      itext('You can customize for your own project, importing in your sass ');
      ie_open('code');
      itext('node_modules/aurum-nix/nix');
      ie_close('code');
      itext(' and updating variables.');
      ie_close('p');
      ie_open('h3');
      itext('Prefix variable');
      ie_close('h3');
      ie_open('p');
      itext('Change the prefix name to your prefered:');
      ie_close('p');
      $templateAlias2({ code: '$prefix: \'nix-\';', mode: 'sass' }, null, opt_ijData);
      ie_open('p');
      itext('In this example, your class should be ');
      ie_open('code');
      itext('nix-diplay_block');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('Or remove prefix setting a blank value:');
      ie_close('p');
      $templateAlias2({ code: '$prefix: \'\';', mode: 'sass' }, null, opt_ijData);
      ie_open('p');
      itext('With this example, your class should be ');
      ie_open('code');
      itext('diplay_block');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('h3');
      itext('Breakpoints variables');
      ie_close('h3');
      $templateAlias2({ code: '$mob: 768px; // screens up until 768px (mobile)\n$tab: 1024px; // screens up until 1024px (tablet/small desktops)\n$desk: 1200px; // screens up until 1200px (desktops)', mode: 'sass' }, null, opt_ijData);
      ie_open('h3');
      itext('Sizes variables');
      ie_close('h3');
      ie_open('p');
      itext('This sizes is used for margins and paddings:');
      ie_close('p');
      $templateAlias2({ code: '$int-size: 5; // every 5px\n$max-size: 100; // up until 100px', mode: 'sass' }, null, opt_ijData);
      ie_open('p');
      ie_open('code');
      itext('$int-size');
      ie_close('code');
      itext(' is the interval to sizes, and ');
      ie_open('code');
      itext('$max-size');
      ie_close('code');
      itext(' is the max size to generate.');
      ie_close('p');
      ie_open('h3');
      itext('Generate your custom values from this repository');
      ie_close('h3');
      ie_open('ol');
      ie_open('li');
      itext('Clone the ');
      ie_open('a', null, null, 'href', 'https://github.com/aurumsoftware/nix', 'target', '_blank');
      itext('Nix repository');
      ie_close('a');
      itext(';');
      ie_close('li');
      ie_open('li');
      itext('Install ');
      ie_open('code');
      itext('gulp-cli');
      ie_close('code');
      itext(';');
      ie_close('li');
      ie_open('li');
      itext('Run ');
      ie_open('code');
      itext('yarn');
      ie_close('code');
      itext(' or ');
      ie_open('code');
      itext('npm instal');
      ie_close('code');
      itext(';');
      ie_close('li');
      ie_open('li');
      itext('Run ');
      ie_open('code');
      itext('gulp');
      ie_close('code');
      itext(' to build or ');
      ie_open('code');
      itext('gulp watch');
      ie_close('code');
      itext(' to watch the changes;');
      ie_close('li');
      ie_close('ol');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param376 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'EAWYj.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var EAWYj = function (_Component) {
  _inherits(EAWYj, _Component);

  function EAWYj() {
    _classCallCheck(this, EAWYj);

    return _possibleConstructorReturn(this, (EAWYj.__proto__ || Object.getPrototypeOf(EAWYj)).apply(this, arguments));
  }

  return EAWYj;
}(_metalComponent2.default);

_metalSoy2.default.register(EAWYj, templates);
exports.EAWYj = EAWYj;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[272]);