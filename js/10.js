webpackJsonp([10],{

/***/ 1039:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(704);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("13485b70", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a5823d54!./animated-masonry-gallery.css", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a5823d54!./animated-masonry-gallery.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1040:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(705);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("aedac480", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a5823d54!./jquery.fancybox.css", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a5823d54!./jquery.fancybox.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1040)
__webpack_require__(1039)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(441),
  /* template */
  __webpack_require__(881),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/vanessap/Documents/Projects/vue-dashboard2/src/components/masonry_gallery.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] masonry_gallery.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a5823d54", Component.options)
  } else {
    hotAPI.reload("data-v-a5823d54", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 303:
/***/ (function(module, exports) {

module.exports = "/images/29.jpg?9cd8d28ed927a798aa0691776b3c8bda";

/***/ }),

/***/ 304:
/***/ (function(module, exports) {

module.exports = "/images/30.jpg?34fbfb0e514377aaba304c62d0bbf959";

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

module.exports = "/images/8.jpg?9dc68bb31be81cd6f2efd8f02a3c28a6";

/***/ }),

/***/ 324:
/***/ (function(module, exports) {

module.exports = "/images/20.jpg?686f0eb1129e2736d096183831dd1a2b";

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

module.exports = "/images/31.jpg?de55ab02267f76243b0c6dbdce93b040";

/***/ }),

/***/ 359:
/***/ (function(module, exports) {

module.exports = "/images/17.jpg?fe469073fafee7cf604808de7c6400fa";

/***/ }),

/***/ 360:
/***/ (function(module, exports) {

module.exports = "/images/24.jpg?893c1910bbbe112e8fce9f202fe835dc";

/***/ }),

/***/ 361:
/***/ (function(module, exports) {

module.exports = "/images/32.jpg?500a4fe405e868b25eb873e4f1de8267";

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_js_jquery_isotope_min_js__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_js_jquery_isotope_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_js_jquery_isotope_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendors_fancybox_source_jquery_fancybox_js__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendors_fancybox_source_jquery_fancybox_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vendors_fancybox_source_jquery_fancybox_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: "masonry_gallery",
    mounted: function mounted() {
        "use strict";

        $(document).ready(setTimeout(function () {

            var button = 'all';
            var $container = $('#gallery-content-center');
            $container.isotope({
                itemSelector: 'img'
            });
            $('.fancybox').fancybox();

            $("#filter-all").on('click', function () {
                $container.isotope({
                    filter: '.all'
                });
                $("#gallery-header-center-left-title").html('All Galleries');
                button = 'all';
            });
            $("#filter-studio").on('click', function () {
                $container.isotope({
                    filter: '.studio'
                });
                $("#gallery-header-center-left-title").html('Studio Gallery');
                button = 'studio';
            });
            $("#filter-landscape").on('click', function () {
                $container.isotope({
                    filter: '.landscape'
                });
                $("#gallery-header-center-left-title").html('Landscape Gallery');
                button = 'landscape';
            });
            $(".sidebar-toggle").on('click', function () {
                $container.isotope({
                    filter: '.' + button
                });
            });
        }, 2500));
    },
    destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2013 Metafizzy
 */
(function (a, b, c) {
  "use strict";
  var d = a.document,
      e = a.Modernizr,
      f = function f(a) {
    return a.charAt(0).toUpperCase() + a.slice(1);
  },
      g = "Moz Webkit O Ms".split(" "),
      h = function h(a) {
    var b = d.documentElement.style,
        c;if (typeof b[a] == "string") return a;a = f(a);for (var e = 0, h = g.length; e < h; e++) {
      c = g[e] + a;if (typeof b[c] == "string") return c;
    }
  },
      i = h("transform"),
      j = h("transitionProperty"),
      k = { csstransforms: function csstransforms() {
      return !!i;
    }, csstransforms3d: function csstransforms3d() {
      var a = !!h("perspective");if (a) {
        var c = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
            d = "@media (" + c.join("transform-3d),(") + "modernizr)",
            e = b("<style>" + d + "{#modernizr{height:3px}}" + "</style>").appendTo("head"),
            f = b('<div id="modernizr" />').appendTo("html");a = f.height() === 3, f.remove(), e.remove();
      }return a;
    }, csstransitions: function csstransitions() {
      return !!j;
    } },
      l;if (e) for (l in k) {
    e.hasOwnProperty(l) || e.addTest(l, k[l]);
  } else {
    e = a.Modernizr = { _version: "1.6ish: miniModernizr for Isotope" };var m = " ",
        n;for (l in k) {
      n = k[l](), e[l] = n, m += " " + (n ? "" : "no-") + l;
    }b("html").addClass(m);
  }if (e.csstransforms) {
    var o = e.csstransforms3d ? { translate: function translate(a) {
        return "translate3d(" + a[0] + "px, " + a[1] + "px, 0) ";
      }, scale: function scale(a) {
        return "scale3d(" + a + ", " + a + ", 1) ";
      } } : { translate: function translate(a) {
        return "translate(" + a[0] + "px, " + a[1] + "px) ";
      }, scale: function scale(a) {
        return "scale(" + a + ") ";
      } },
        p = function p(a, c, d) {
      var e = b.data(a, "isoTransform") || {},
          f = {},
          g,
          h = {},
          j;f[c] = d, b.extend(e, f);for (g in e) {
        j = e[g], h[g] = o[g](j);
      }var k = h.translate || "",
          l = h.scale || "",
          m = k + l;b.data(a, "isoTransform", e), a.style[i] = m;
    };b.cssNumber.scale = !0, b.cssHooks.scale = { set: function set(a, b) {
        p(a, "scale", b);
      }, get: function get(a, c) {
        var d = b.data(a, "isoTransform");return d && d.scale ? d.scale : 1;
      } }, b.fx.step.scale = function (a) {
      b.cssHooks.scale.set(a.elem, a.now + a.unit);
    }, b.cssNumber.translate = !0, b.cssHooks.translate = { set: function set(a, b) {
        p(a, "translate", b);
      }, get: function get(a, c) {
        var d = b.data(a, "isoTransform");return d && d.translate ? d.translate : [0, 0];
      } };
  }var q, r;e.csstransitions && (q = { WebkitTransitionProperty: "webkitTransitionEnd", MozTransitionProperty: "transitionend", OTransitionProperty: "oTransitionEnd otransitionend", transitionProperty: "transitionend" }[j], r = h("transitionDuration"));var s = b.event,
      t = b.event.handle ? "handle" : "dispatch",
      u;s.special.smartresize = { setup: function setup() {
      b(this).bind("resize", s.special.smartresize.handler);
    }, teardown: function teardown() {
      b(this).unbind("resize", s.special.smartresize.handler);
    }, handler: function handler(a, b) {
      var c = this,
          d = arguments;a.type = "smartresize", u && clearTimeout(u), u = setTimeout(function () {
        s[t].apply(c, d);
      }, b === "execAsap" ? 0 : 100);
    } }, b.fn.smartresize = function (a) {
    return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"]);
  }, b.Isotope = function (a, c, d) {
    this.element = b(c), this._create(a), this._init(d);
  };var v = ["width", "height"],
      w = b(a);b.Isotope.settings = { resizable: !0, layoutMode: "masonry", containerClass: "isotope", itemClass: "isotope-item", hiddenClass: "isotope-hidden", hiddenStyle: { opacity: 0, scale: .001 }, visibleStyle: { opacity: 1, scale: 1 }, containerStyle: { position: "relative", overflow: "hidden" }, animationEngine: "best-available", animationOptions: { queue: !1, duration: 800 }, sortBy: "original-order", sortAscending: !0, resizesContainer: !0, transformsEnabled: !0, itemPositionDataEnabled: !1 }, b.Isotope.prototype = { _create: function _create(a) {
      this.options = b.extend({}, b.Isotope.settings, a), this.styleQueue = [], this.elemCount = 0;var c = this.element[0].style;this.originalStyle = {};var d = v.slice(0);for (var e in this.options.containerStyle) {
        d.push(e);
      }for (var f = 0, g = d.length; f < g; f++) {
        e = d[f], this.originalStyle[e] = c[e] || "";
      }this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();var h = { "original-order": function originalOrder(a, b) {
          return b.elemCount++, b.elemCount;
        }, random: function random() {
          return Math.random();
        } };this.options.getSortData = b.extend(this.options.getSortData, h), this.reloadItems(), this.offset = { left: parseInt(this.element.css("padding-left") || 0, 10), top: parseInt(this.element.css("padding-top") || 0, 10) };var i = this;setTimeout(function () {
        i.element.addClass(i.options.containerClass);
      }, 0), this.options.resizable && w.bind("smartresize.isotope", function () {
        i.resize();
      }), this.element.delegate("." + this.options.hiddenClass, "click", function () {
        return !1;
      });
    }, _getAtoms: function _getAtoms(a) {
      var b = this.options.itemSelector,
          c = b ? a.filter(b).add(a.find(b)) : a,
          d = { position: "absolute" };return c = c.filter(function (a, b) {
        return b.nodeType === 1;
      }), this.usingTransforms && (d.left = 0, d.top = 0), c.css(d).addClass(this.options.itemClass), this.updateSortData(c, !0), c;
    }, _init: function _init(a) {
      this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(a);
    }, option: function option(a) {
      if (b.isPlainObject(a)) {
        this.options = b.extend(!0, this.options, a);var c;for (var d in a) {
          c = "_update" + f(d), this[c] && this[c]();
        }
      }
    }, _updateAnimationEngine: function _updateAnimationEngine() {
      var a = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, ""),
          b;switch (a) {case "css":case "none":
          b = !1;break;case "jquery":
          b = !0;break;default:
          b = !e.csstransitions;}this.isUsingJQueryAnimation = b, this._updateUsingTransforms();
    }, _updateTransformsEnabled: function _updateTransformsEnabled() {
      this._updateUsingTransforms();
    }, _updateUsingTransforms: function _updateUsingTransforms() {
      var a = this.usingTransforms = this.options.transformsEnabled && e.csstransforms && e.csstransitions && !this.isUsingJQueryAnimation;a || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = a ? this._translate : this._positionAbs;
    }, _filter: function _filter(a) {
      var b = this.options.filter === "" ? "*" : this.options.filter;if (!b) return a;var c = this.options.hiddenClass,
          d = "." + c,
          e = a.filter(d),
          f = e;if (b !== "*") {
        f = e.filter(b);var g = a.not(d).not(b).addClass(c);this.styleQueue.push({ $el: g, style: this.options.hiddenStyle });
      }return this.styleQueue.push({ $el: f, style: this.options.visibleStyle }), f.removeClass(c), a.filter(b);
    }, updateSortData: function updateSortData(a, c) {
      var d = this,
          e = this.options.getSortData,
          f,
          g;a.each(function () {
        f = b(this), g = {};for (var a in e) {
          !c && a === "original-order" ? g[a] = b.data(this, "isotope-sort-data")[a] : g[a] = e[a](f, d);
        }b.data(this, "isotope-sort-data", g);
      });
    }, _sort: function _sort() {
      var a = this.options.sortBy,
          b = this._getSorter,
          c = this.options.sortAscending ? 1 : -1,
          d = function d(_d, e) {
        var f = b(_d, a),
            g = b(e, a);return f === g && a !== "original-order" && (f = b(_d, "original-order"), g = b(e, "original-order")), (f > g ? 1 : f < g ? -1 : 0) * c;
      };this.$filteredAtoms.sort(d);
    }, _getSorter: function _getSorter(a, c) {
      return b.data(a, "isotope-sort-data")[c];
    }, _translate: function _translate(a, b) {
      return { translate: [a, b] };
    }, _positionAbs: function _positionAbs(a, b) {
      return { left: a, top: b };
    }, _pushPosition: function _pushPosition(a, b, c) {
      b = Math.round(b + this.offset.left), c = Math.round(c + this.offset.top);var d = this.getPositionStyles(b, c);this.styleQueue.push({ $el: a, style: d }), this.options.itemPositionDataEnabled && a.data("isotope-item-position", { x: b, y: c });
    }, layout: function layout(a, b) {
      var c = this.options.layoutMode;this["_" + c + "Layout"](a);if (this.options.resizesContainer) {
        var d = this["_" + c + "GetContainerSize"]();this.styleQueue.push({ $el: this.element, style: d });
      }this._processStyleQueue(a, b), this.isLaidOut = !0;
    }, _processStyleQueue: function _processStyleQueue(a, c) {
      var d = this.isLaidOut ? this.isUsingJQueryAnimation ? "animate" : "css" : "css",
          f = this.options.animationOptions,
          g = this.options.onLayout,
          h,
          i,
          j,
          k;i = function i(a, b) {
        b.$el[d](b.style, f);
      };if (this._isInserting && this.isUsingJQueryAnimation) i = function i(a, b) {
        h = b.$el.hasClass("no-transition") ? "css" : d, b.$el[h](b.style, f);
      };else if (c || g || f.complete) {
        var l = !1,
            m = [c, g, f.complete],
            n = this;j = !0, k = function k() {
          if (l) return;var b;for (var c = 0, d = m.length; c < d; c++) {
            b = m[c], typeof b == "function" && b.call(n.element, a, n);
          }l = !0;
        };if (this.isUsingJQueryAnimation && d === "animate") f.complete = k, j = !1;else if (e.csstransitions) {
          var o = 0,
              p = this.styleQueue[0],
              s = p && p.$el,
              t;while (!s || !s.length) {
            t = this.styleQueue[o++];if (!t) return;s = t.$el;
          }var u = parseFloat(getComputedStyle(s[0])[r]);u > 0 && (i = function i(a, b) {
            b.$el[d](b.style, f).one(q, k);
          }, j = !1);
        }
      }b.each(this.styleQueue, i), j && k(), this.styleQueue = [];
    }, resize: function resize() {
      this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout();
    }, reLayout: function reLayout(a) {
      this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, a);
    }, addItems: function addItems(a, b) {
      var c = this._getAtoms(a);this.$allAtoms = this.$allAtoms.add(c), b && b(c);
    }, insert: function insert(a, b) {
      this.element.append(a);var c = this;this.addItems(a, function (a) {
        var d = c._filter(a);c._addHideAppended(d), c._sort(), c.reLayout(), c._revealAppended(d, b);
      });
    }, appended: function appended(a, b) {
      var c = this;this.addItems(a, function (a) {
        c._addHideAppended(a), c.layout(a), c._revealAppended(a, b);
      });
    }, _addHideAppended: function _addHideAppended(a) {
      this.$filteredAtoms = this.$filteredAtoms.add(a), a.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({ $el: a, style: this.options.hiddenStyle });
    }, _revealAppended: function _revealAppended(a, b) {
      var c = this;setTimeout(function () {
        a.removeClass("no-transition"), c.styleQueue.push({ $el: a, style: c.options.visibleStyle }), c._isInserting = !1, c._processStyleQueue(a, b);
      }, 10);
    }, reloadItems: function reloadItems() {
      this.$allAtoms = this._getAtoms(this.element.children());
    }, remove: function remove(a, b) {
      this.$allAtoms = this.$allAtoms.not(a), this.$filteredAtoms = this.$filteredAtoms.not(a);var c = this,
          d = function d() {
        a.remove(), b && b.call(c.element);
      };a.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({ $el: a, style: this.options.hiddenStyle }), this._sort(), this.reLayout(d)) : d();
    }, shuffle: function shuffle(a) {
      this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(a);
    }, destroy: function destroy() {
      var a = this.usingTransforms,
          b = this.options;this.$allAtoms.removeClass(b.hiddenClass + " " + b.itemClass).each(function () {
        var b = this.style;b.position = "", b.top = "", b.left = "", b.opacity = "", a && (b[i] = "");
      });var c = this.element[0].style;for (var d in this.originalStyle) {
        c[d] = this.originalStyle[d];
      }this.element.unbind(".isotope").undelegate("." + b.hiddenClass, "click").removeClass(b.containerClass).removeData("isotope"), w.unbind(".isotope");
    }, _getSegments: function _getSegments(a) {
      var b = this.options.layoutMode,
          c = a ? "rowHeight" : "columnWidth",
          d = a ? "height" : "width",
          e = a ? "rows" : "cols",
          g = this.element[d](),
          h,
          i = this.options[b] && this.options[b][c] || this.$filteredAtoms["outer" + f(d)](!0) || g;h = Math.floor(g / i), h = Math.max(h, 1), this[b][e] = h, this[b][c] = i;
    }, _checkIfSegmentsChanged: function _checkIfSegmentsChanged(a) {
      var b = this.options.layoutMode,
          c = a ? "rows" : "cols",
          d = this[b][c];return this._getSegments(a), this[b][c] !== d;
    }, _masonryReset: function _masonryReset() {
      this.masonry = {}, this._getSegments();var a = this.masonry.cols;this.masonry.colYs = [];while (a--) {
        this.masonry.colYs.push(0);
      }
    }, _masonryLayout: function _masonryLayout(a) {
      var c = this,
          d = c.masonry;a.each(function () {
        var a = b(this),
            e = Math.ceil(a.outerWidth(!0) / d.columnWidth);e = Math.min(e, d.cols);if (e === 1) c._masonryPlaceBrick(a, d.colYs);else {
          var f = d.cols + 1 - e,
              g = [],
              h,
              i;for (i = 0; i < f; i++) {
            h = d.colYs.slice(i, i + e), g[i] = Math.max.apply(Math, h);
          }c._masonryPlaceBrick(a, g);
        }
      });
    }, _masonryPlaceBrick: function _masonryPlaceBrick(a, b) {
      var c = Math.min.apply(Math, b),
          d = 0;for (var e = 0, f = b.length; e < f; e++) {
        if (b[e] === c) {
          d = e;break;
        }
      }var g = this.masonry.columnWidth * d,
          h = c;this._pushPosition(a, g, h);var i = c + a.outerHeight(!0),
          j = this.masonry.cols + 1 - f;for (e = 0; e < j; e++) {
        this.masonry.colYs[d + e] = i;
      }
    }, _masonryGetContainerSize: function _masonryGetContainerSize() {
      var a = Math.max.apply(Math, this.masonry.colYs);return { height: a };
    }, _masonryResizeChanged: function _masonryResizeChanged() {
      return this._checkIfSegmentsChanged();
    }, _fitRowsReset: function _fitRowsReset() {
      this.fitRows = { x: 0, y: 0, height: 0 };
    }, _fitRowsLayout: function _fitRowsLayout(a) {
      var c = this,
          d = this.element.width(),
          e = this.fitRows;a.each(function () {
        var a = b(this),
            f = a.outerWidth(!0),
            g = a.outerHeight(!0);e.x !== 0 && f + e.x > d && (e.x = 0, e.y = e.height), c._pushPosition(a, e.x, e.y), e.height = Math.max(e.y + g, e.height), e.x += f;
      });
    }, _fitRowsGetContainerSize: function _fitRowsGetContainerSize() {
      return { height: this.fitRows.height };
    }, _fitRowsResizeChanged: function _fitRowsResizeChanged() {
      return !0;
    }, _cellsByRowReset: function _cellsByRowReset() {
      this.cellsByRow = { index: 0 }, this._getSegments(), this._getSegments(!0);
    }, _cellsByRowLayout: function _cellsByRowLayout(a) {
      var c = this,
          d = this.cellsByRow;a.each(function () {
        var a = b(this),
            e = d.index % d.cols,
            f = Math.floor(d.index / d.cols),
            g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
            h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;c._pushPosition(a, g, h), d.index++;
      });
    }, _cellsByRowGetContainerSize: function _cellsByRowGetContainerSize() {
      return { height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top };
    }, _cellsByRowResizeChanged: function _cellsByRowResizeChanged() {
      return this._checkIfSegmentsChanged();
    }, _straightDownReset: function _straightDownReset() {
      this.straightDown = { y: 0 };
    }, _straightDownLayout: function _straightDownLayout(a) {
      var c = this;a.each(function (a) {
        var d = b(this);c._pushPosition(d, 0, c.straightDown.y), c.straightDown.y += d.outerHeight(!0);
      });
    }, _straightDownGetContainerSize: function _straightDownGetContainerSize() {
      return { height: this.straightDown.y };
    }, _straightDownResizeChanged: function _straightDownResizeChanged() {
      return !0;
    }, _masonryHorizontalReset: function _masonryHorizontalReset() {
      this.masonryHorizontal = {}, this._getSegments(!0);var a = this.masonryHorizontal.rows;this.masonryHorizontal.rowXs = [];while (a--) {
        this.masonryHorizontal.rowXs.push(0);
      }
    }, _masonryHorizontalLayout: function _masonryHorizontalLayout(a) {
      var c = this,
          d = c.masonryHorizontal;a.each(function () {
        var a = b(this),
            e = Math.ceil(a.outerHeight(!0) / d.rowHeight);e = Math.min(e, d.rows);if (e === 1) c._masonryHorizontalPlaceBrick(a, d.rowXs);else {
          var f = d.rows + 1 - e,
              g = [],
              h,
              i;for (i = 0; i < f; i++) {
            h = d.rowXs.slice(i, i + e), g[i] = Math.max.apply(Math, h);
          }c._masonryHorizontalPlaceBrick(a, g);
        }
      });
    }, _masonryHorizontalPlaceBrick: function _masonryHorizontalPlaceBrick(a, b) {
      var c = Math.min.apply(Math, b),
          d = 0;for (var e = 0, f = b.length; e < f; e++) {
        if (b[e] === c) {
          d = e;break;
        }
      }var g = c,
          h = this.masonryHorizontal.rowHeight * d;this._pushPosition(a, g, h);var i = c + a.outerWidth(!0),
          j = this.masonryHorizontal.rows + 1 - f;for (e = 0; e < j; e++) {
        this.masonryHorizontal.rowXs[d + e] = i;
      }
    }, _masonryHorizontalGetContainerSize: function _masonryHorizontalGetContainerSize() {
      var a = Math.max.apply(Math, this.masonryHorizontal.rowXs);return { width: a };
    }, _masonryHorizontalResizeChanged: function _masonryHorizontalResizeChanged() {
      return this._checkIfSegmentsChanged(!0);
    }, _fitColumnsReset: function _fitColumnsReset() {
      this.fitColumns = { x: 0, y: 0, width: 0 };
    }, _fitColumnsLayout: function _fitColumnsLayout(a) {
      var c = this,
          d = this.element.height(),
          e = this.fitColumns;a.each(function () {
        var a = b(this),
            f = a.outerWidth(!0),
            g = a.outerHeight(!0);e.y !== 0 && g + e.y > d && (e.x = e.width, e.y = 0), c._pushPosition(a, e.x, e.y), e.width = Math.max(e.x + f, e.width), e.y += g;
      });
    }, _fitColumnsGetContainerSize: function _fitColumnsGetContainerSize() {
      return { width: this.fitColumns.width };
    }, _fitColumnsResizeChanged: function _fitColumnsResizeChanged() {
      return !0;
    }, _cellsByColumnReset: function _cellsByColumnReset() {
      this.cellsByColumn = { index: 0 }, this._getSegments(), this._getSegments(!0);
    }, _cellsByColumnLayout: function _cellsByColumnLayout(a) {
      var c = this,
          d = this.cellsByColumn;a.each(function () {
        var a = b(this),
            e = Math.floor(d.index / d.rows),
            f = d.index % d.rows,
            g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
            h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;c._pushPosition(a, g, h), d.index++;
      });
    }, _cellsByColumnGetContainerSize: function _cellsByColumnGetContainerSize() {
      return { width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth };
    }, _cellsByColumnResizeChanged: function _cellsByColumnResizeChanged() {
      return this._checkIfSegmentsChanged(!0);
    }, _straightAcrossReset: function _straightAcrossReset() {
      this.straightAcross = { x: 0 };
    }, _straightAcrossLayout: function _straightAcrossLayout(a) {
      var c = this;a.each(function (a) {
        var d = b(this);c._pushPosition(d, c.straightAcross.x, 0), c.straightAcross.x += d.outerWidth(!0);
      });
    }, _straightAcrossGetContainerSize: function _straightAcrossGetContainerSize() {
      return { width: this.straightAcross.x };
    }, _straightAcrossResizeChanged: function _straightAcrossResizeChanged() {
      return !0;
    } }, b.fn.imagesLoaded = function (a) {
    function h() {
      a.call(c, d);
    }function i(a) {
      var c = a.target;c.src !== f && b.inArray(c, g) === -1 && (g.push(c), --e <= 0 && (setTimeout(h), d.unbind(".imagesLoaded", i)));
    }var c = this,
        d = c.find("img").add(c.filter("img")),
        e = d.length,
        f = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
        g = [];return e || h(), d.bind("load.imagesLoaded error.imagesLoaded", i).each(function () {
      var a = this.src;this.src = f, this.src = a;
    }), c;
  };var x = function x(b) {
    a.console && a.console.error(b);
  };b.fn.isotope = function (a, c) {
    if (typeof a == "string") {
      var d = Array.prototype.slice.call(arguments, 1);this.each(function () {
        var c = b.data(this, "isotope");if (!c) {
          x("cannot call methods on isotope prior to initialization; attempted to call method '" + a + "'");return;
        }if (!b.isFunction(c[a]) || a.charAt(0) === "_") {
          x("no such method '" + a + "' for isotope instance");return;
        }c[a].apply(c, d);
      });
    } else this.each(function () {
      var d = b.data(this, "isotope");d ? (d.option(a), d._init(c)) : b.data(this, "isotope", new b.Isotope(a, this, c));
    });return this;
  };
})(window, jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

;(function (window, document, $, undefined) {
	"use strict";

	var H = $("html"),
	    W = $(window),
	    D = $(document),
	    F = $.fancybox = function () {
		F.open.apply(this, arguments);
	},
	    IE = navigator.userAgent.match(/msie/i),
	    didUpdate = null,
	    isTouch = document.createTouch !== undefined,
	    isQuery = function isQuery(obj) {
		return obj && obj.hasOwnProperty && obj instanceof $;
	},
	    isString = function isString(str) {
		return str && $.type(str) === "string";
	},
	    isPercentage = function isPercentage(str) {
		return isString(str) && str.indexOf('%') > 0;
	},
	    isScrollable = function isScrollable(el) {
		return el && !(el.style.overflow && el.style.overflow === 'hidden') && (el.clientWidth && el.scrollWidth > el.clientWidth || el.clientHeight && el.scrollHeight > el.clientHeight);
	},
	    getScalar = function getScalar(orig, dim) {
		var value = parseInt(orig, 10) || 0;

		if (dim && isPercentage(orig)) {
			value = F.getViewport()[dim] / 100 * value;
		}

		return Math.ceil(value);
	},
	    getValue = function getValue(value, dim) {
		return getScalar(value, dim) + 'px';
	};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.1.5',

		defaults: {
			padding: 15,
			margin: 20,

			width: 800,
			height: 600,
			minWidth: 100,
			minHeight: 100,
			maxWidth: 9999,
			maxHeight: 9999,
			pixelRatio: 1, // Set to 2 for retina display support

			autoSize: true,
			autoHeight: false,
			autoWidth: false,

			autoResize: true,
			autoCenter: !isTouch,
			fitToView: true,
			aspectRatio: false,
			topRatio: 0.5,
			leftRatio: 0.5,

			scrolling: 'auto', // 'auto', 'yes' or 'no'
			wrapCSS: '',

			arrows: true,
			closeBtn: true,
			closeClick: false,
			nextClick: false,
			mouseWheel: true,
			autoPlay: false,
			playSpeed: 3000,
			preload: 3,
			modal: false,
			loop: true,

			ajax: {
				dataType: 'html',
				headers: { 'X-fancyBox': true }
			},
			iframe: {
				scrolling: 'auto',
				preload: true
			},
			swf: {
				wmode: 'transparent',
				allowfullscreen: 'true',
				allowscriptaccess: 'always'
			},

			keys: {
				next: {
					13: 'left', // enter
					34: 'up', // page down
					39: 'left', // right arrow
					40: 'up' // down arrow
				},
				prev: {
					8: 'right', // backspace
					33: 'down', // page up
					37: 'right', // left arrow
					38: 'down' // up arrow
				},
				close: [27], // escape key
				play: [32], // space - start/stop slideshow
				toggle: [70] // letter "f" - toggle fullscreen
			},

			direction: {
				next: 'left',
				prev: 'right'
			},

			scrollOutside: true,

			// Override some properties
			index: 0,
			type: null,
			href: null,
			content: null,
			title: null,

			// HTML templates
			tpl: {
				wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image: '<img class="fancybox-image" src="{href}" alt="" />',
				iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
				error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
				loading: '<div id="fancybox-loading"><div></div></div>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect: 'fade', // 'elastic', 'fade' or 'none'
			openSpeed: 250,
			openEasing: 'swing',
			openOpacity: true,
			openMethod: 'zoomIn',

			// Closing fancyBox
			closeEffect: 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed: 250,
			closeEasing: 'swing',
			closeOpacity: true,
			closeMethod: 'zoomOut',

			// Changing next gallery item
			nextEffect: 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed: 250,
			nextEasing: 'swing',
			nextMethod: 'changeIn',

			// Changing previous gallery item
			prevEffect: 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed: 250,
			prevEasing: 'swing',
			prevMethod: 'changeOut',

			// Enable default helpers
			helpers: {
				overlay: true,
				title: true
			},

			// Callbacks
			onCancel: $.noop, // If canceling
			beforeLoad: $.noop, // Before loading
			afterLoad: $.noop, // After loading
			beforeShow: $.noop, // Before changing in current item
			afterShow: $.noop, // After opening
			beforeChange: $.noop, // Before changing gallery item
			beforeClose: $.noop, // Before closing
			afterClose: $.noop // After closing
		},

		//Current state
		group: {}, // Selected group
		opts: {}, // Group options
		previous: null, // Previous element
		coming: null, // Element being loaded
		current: null, // Currently loaded element
		isActive: false, // Is activated
		isOpen: false, // Is currently open
		isOpened: false, // Have been fully opened at least once

		wrap: null,
		skin: null,
		outer: null,
		inner: null,

		player: {
			timer: null,
			isActive: false
		},

		// Loaders
		ajaxLoad: null,
		imgPreload: null,

		// Some collections
		transitions: {},
		helpers: {},

		/*
   *	Static methods
   */

		open: function open(group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function (i, element) {
				var obj = {},
				    href,
				    title,
				    content,
				    type,
				    rez,
				    hrefParts,
				    selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href: element.data('fancybox-href') || element.attr('href'),
							title: $('<div/>').text(element.data('fancybox-title') || element.attr('title') || '').html(),
							isDom: true,
							element: element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}
					} else {
						obj = element;
					}
				}

				href = opts.href || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type = content ? 'html' : opts.type || obj.type;

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';
						} else if (F.isSWF(href)) {
							type = 'swf';
						} else if (href.charAt(0) === '#') {
							type = 'inline';
						} else if (isString(element)) {
							type = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href = hrefParts.shift();
						selector = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href); //strip for ie7
						} else if (obj.isDom) {
							content = element;
						}
					} else if (type === 'html') {
						content = href;
					} else if (!type && !href && obj.isDom) {
						type = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href: href,
					type: type,
					content: content,
					title: title,
					selector: selector
				});

				group[i] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index);
		},

		// Cancel image loading or abort ajax request
		cancel: function cancel() {
			var coming = F.coming;

			if (coming && false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (!coming) {
				return;
			}

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			if (coming.wrap) {
				coming.wrap.stop(true, true).trigger('onReset').remove();
			}

			F.coming = null;

			// If the first item has been canceled, then clear everything
			if (!F.current) {
				F._afterZoomOut(coming);
			}
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function close(event) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isActive) {
				return;
			}

			if (!F.isOpen || event === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();
			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true, true).removeClass('fancybox-opened');

				F.transitions[F.current.closeMethod]();
			}
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function play(action) {
			var clear = function clear() {
				clearTimeout(F.player.timer);
			},
			    set = function set() {
				clear();

				if (F.current && F.player.isActive) {
					F.player.timer = setTimeout(F.next, F.current.playSpeed);
				}
			},
			    stop = function stop() {
				clear();

				D.unbind('.player');

				F.player.isActive = false;

				F.trigger('onPlayEnd');
			},
			    start = function start() {
				if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
					F.player.isActive = true;

					D.bind({
						'onCancel.player beforeClose.player': stop,
						'onUpdate.player': set,
						'beforeLoad.player': clear
					});

					set();

					F.trigger('onPlayStart');
				}
			};

			if (action === true || !F.player.isActive && action !== false) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function next(direction) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function prev(direction) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function jumpto(index, direction, router) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || current.direction[index >= current.index ? 'next' : 'prev'];
			F.router = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + index % current.group.length;
				}

				index = index % current.group.length;
			}

			if (current.group[index] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function reposition(e, onlyAbsolute) {
			var current = F.current,
			    wrap = current ? current.wrap : null,
			    pos;

			if (wrap) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					wrap.stop(true, true).animate(pos, 200);
				} else {
					wrap.css(pos);

					current.pos = $.extend({}, current.dim, pos);
				}
			}
		},

		update: function update(e) {
			var type = e && e.originalEvent && e.originalEvent.type,
			    anyway = !type || type === 'orientationchange';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			didUpdate = setTimeout(function () {
				var current = F.current;

				if (!current || F.isClosing) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if (anyway || type === 'load' || type === 'resize' && current.autoResize) {
					F._setDimension();
				}

				if (!(type === 'scroll' && current.canShrink)) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

				didUpdate = null;
			}, anyway && !isTouch ? 0 : 300);
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function toggle(action) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				// Help browser to restore document dimensions
				if (isTouch) {
					F.wrap.removeAttr('style').addClass('fancybox-tmp');

					F.trigger('onUpdate');
				}

				F.update();
			}
		},

		hideLoading: function hideLoading() {
			D.unbind('.loading');

			$('#fancybox-loading').remove();
		},

		showLoading: function showLoading() {
			var el, viewport;

			F.hideLoading();

			el = $(F.opts.tpl.loading).click(F.cancel).appendTo('body');

			// If user will press the escape-button, the request will be canceled
			D.bind('keydown.loading', function (e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();

					F.cancel();
				}
			});

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position: 'absolute',
					top: viewport.h * 0.5 + viewport.y,
					left: viewport.w * 0.5 + viewport.x
				});
			}

			F.trigger('onLoading');
		},

		getViewport: function getViewport() {
			var locked = F.current && F.current.locked || false,
			    rez = {
				x: W.scrollLeft(),
				y: W.scrollTop()
			};

			if (locked && locked.length) {
				rez.w = locked[0].clientWidth;
				rez.h = locked[0].clientHeight;
			} else {
				// See http://bugs.jquery.com/ticket/6724
				rez.w = isTouch && window.innerWidth ? window.innerWidth : W.width();
				rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
			}

			return rez;
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function unbindEvents() {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function bindEvents() {
			var current = F.current,
			    keys;

			if (!current) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code = e.which || e.keyCode,
					    target = e.target || e.srcElement;

					// Skip esc key if loading, because showLoading will cancel preloading
					if (code === 27 && F.coming) {
						return false;
					}

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function (i, val) {
							if (current.group.length > 1 && val[code] !== undefined) {
								F[i](val[code]);

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[i]();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
					    parent = $(target),
					    canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable(parent[0]);
						parent = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev(deltaY > 0 ? 'down' : 'left');
							} else if (deltaY < 0 || deltaX < 0) {
								F.next(deltaY < 0 ? 'up' : 'right');
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function trigger(event, o) {
			var ret,
			    obj = o || F.coming || F.current;

			if (obj) {
				if ($.isFunction(obj[event])) {
					ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
				}

				if (ret === false) {
					return false;
				}

				if (obj.helpers) {
					$.each(obj.helpers, function (helper, opts) {
						if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
							F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
						}
					});
				}
			}

			D.trigger(event);
		},

		isImage: function isImage(str) {
			return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
		},

		isSWF: function isSWF(str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function _start(index) {
			var coming = {},
			    obj,
			    href,
			    type,
			    margin,
			    padding;

			index = getScalar(index);
			obj = F.group[index] || null;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn: false,
					closeClick: false,
					nextClick: false,
					arrows: false,
					mouseWheel: false,
					keys: null,
					helpers: {
						overlay: {
							closeClick: false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
    * Add reference to the group, so it`s possible to access from callbacks, example:
    * afterLoad : function() {
    *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
    * }
    */

			coming.group = F.group;
			coming.index = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[F.router](F.direction);
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo(coming.parent || 'body');

			$.extend(coming, {
				skin: $('.fancybox-skin', coming.wrap),
				outer: $('.fancybox-outer', coming.wrap),
				inner: $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function (i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[i]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error('content');
				}
			} else if (!href) {
				return F._error('href');
			}

			if (type === 'image') {
				F._loadImage();
			} else if (type === 'ajax') {
				F._loadAjax();
			} else if (type === 'iframe') {
				F._loadIframe();
			} else {
				F._afterLoad();
			}
		},

		_error: function _error(type) {
			$.extend(F.coming, {
				type: 'html',
				autoWidth: true,
				autoHeight: true,
				minWidth: 0,
				minHeight: 0,
				scrolling: 'no',
				hasError: type,
				content: F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function _loadImage() {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width = this.width / F.opts.pixelRatio;
				F.coming.height = this.height / F.opts.pixelRatio;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error('image');
			};

			img.src = F.coming.href;

			if (img.complete !== true) {
				F.showLoading();
			}
		},

		_loadAjax: function _loadAjax() {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function error(jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error('ajax', jqXHR);
					} else {
						F.hideLoading();
					}
				},
				success: function success(data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function _loadIframe() {
			var coming = F.coming,
			    iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling).attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) {}
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function () {
					$(this).data('ready', 1);

					// iOS will lose scrolling if we resize
					if (!isTouch) {
						$(this).bind('load.fb', F.update);
					}

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo(coming.inner);

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function _preloadImages() {
			var group = F.group,
			    current = F.current,
			    len = group.length,
			    cnt = current.preload ? Math.min(current.preload, len - 1) : 0,
			    item,
			    i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[(current.index + i) % len];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function _afterLoad() {
			var coming = F.coming,
			    previous = F.current,
			    placeholder = 'fancybox-placeholder',
			    current,
			    content,
			    type,
			    scrolling,
			    href,
			    embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened').find('.fancybox-item, .fancybox-nav').remove();
			}

			F.unbindEvents();

			current = coming;
			content = coming.content;
			type = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap: current.wrap,
				skin: current.skin,
				outer: current.outer,
				inner: current.inner,
				current: current,
				previous: previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);
					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter(content).hide());
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll(content.data(placeholder)).data(placeholder, false);
							}
						});
					}
					break;

				case 'image':
					content = current.tpl.image.replace(/\{href\}/g, href);
					break;

				case 'swf':
					content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed = '';

					$.each(current.swf, function (name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
					break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append(content);
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set scrolling before calculating dimensions
			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : scrolling === 'no' ? 'hidden' : scrolling);

			// Set initial dimensions and start position
			F._setDimension();

			F.reposition();

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not(current.wrap).stop(true).trigger('onReset').remove();
			} else if (previous.prevMethod) {
				F.transitions[previous.prevMethod]();
			}

			F.transitions[F.isOpened ? current.nextMethod : current.openMethod]();

			F._preloadImages();
		},

		_setDimension: function _setDimension() {
			var viewport = F.getViewport(),
			    steps = 0,
			    canShrink = false,
			    canExpand = false,
			    wrap = F.wrap,
			    skin = F.skin,
			    inner = F.inner,
			    current = F.current,
			    width = current.width,
			    height = current.height,
			    minWidth = current.minWidth,
			    minHeight = current.minHeight,
			    maxWidth = current.maxWidth,
			    maxHeight = current.maxHeight,
			    scrolling = current.scrolling,
			    scrollOut = current.scrollOutside ? current.scrollbarWidth : 0,
			    margin = current.margin,
			    wMargin = getScalar(margin[1] + margin[3]),
			    hMargin = getScalar(margin[0] + margin[2]),
			    wPadding,
			    hPadding,
			    wSpace,
			    hSpace,
			    origWidth,
			    origHeight,
			    origMaxWidth,
			    origMaxHeight,
			    ratio,
			    width_,
			    height_,
			    maxWidth_,
			    maxHeight_,
			    iframe,
			    body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

			wPadding = getScalar(skin.outerWidth(true) - skin.width());
			hPadding = getScalar(skin.outerHeight(true) - skin.height());

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth = isPercentage(width) ? (viewport.w - wSpace) * getScalar(width) / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width(origWidth).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.outerHeight(true);
						}
					} catch (e) {}
				}
			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass('fancybox-tmp');

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width(origWidth);
				}

				if (!current.autoHeight) {
					inner.height(origHeight);
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass('fancybox-tmp');
			}

			width = getScalar(origWidth);
			height = getScalar(origHeight);

			ratio = origWidth / origHeight;

			// Calculations for the content
			minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth = maxWidth;
			origMaxHeight = maxHeight;

			if (current.fitToView) {
				maxWidth = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);
			}

			maxWidth_ = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width = maxWidth;
					height = getScalar(width / ratio);
				}

				if (height > maxHeight) {
					height = maxHeight;
					width = getScalar(height * ratio);
				}

				if (width < minWidth) {
					width = minWidth;
					height = getScalar(width / ratio);
				}

				if (height < minHeight) {
					height = minHeight;
					width = getScalar(height * ratio);
				}
			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));

				if (current.autoHeight && current.type !== 'iframe') {
					inner.width(width);

					height = inner.height();
				}

				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				inner.width(width).height(height);

				wrap.width(width + wPadding);

				// Real wrap dimensions
				width_ = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width = getScalar(height * ratio);

						if (width < minWidth) {
							width = minWidth;
							height = getScalar(width / ratio);
						}

						if (width > maxWidth) {
							width = maxWidth;
							height = getScalar(width / ratio);
						}

						inner.width(width).height(height);

						wrap.width(width + wPadding);

						width_ = wrap.width();
						height_ = wrap.height();
					}
				} else {
					width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && width + wPadding + scrollOut < maxWidth_) {
				width += scrollOut;
			}

			inner.width(width).height(height);

			wrap.width(width + wPadding);

			width_ = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight : (width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight);

			$.extend(current, {
				dim: {
					width: getValue(width_),
					height: getValue(height_)
				},
				origWidth: origWidth,
				origHeight: origHeight,
				canShrink: canShrink,
				canExpand: canExpand,
				wPadding: wPadding,
				hPadding: hPadding,
				wrapSpace: height_ - skin.outerHeight(true),
				skinSpace: skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function _getPosition(onlyAbsolute) {
			var current = F.current,
			    viewport = F.getViewport(),
			    margin = current.margin,
			    width = F.wrap.width() + margin[1] + margin[3],
			    height = F.wrap.height() + margin[0] + margin[2],
			    rez = {
				position: 'absolute',
				top: margin[0],
				left: margin[3]
			};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';
			} else if (!current.locked) {
				rez.top += viewport.y;
				rez.left += viewport.x;
			}

			rez.top = getValue(Math.max(rez.top, rez.top + (viewport.h - height) * current.topRatio));
			rez.left = getValue(Math.max(rez.left, rez.left + (viewport.w - width) * current.leftRatio));

			return rez;
		},

		_afterZoomIn: function _afterZoomIn() {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.css('overflow', 'visible').addClass('fancybox-opened').hide().show(0);

			F.update();

			// Assign a click event
			if (current.closeClick || current.nextClick && F.group.length > 1) {
				F.inner.css('cursor', 'pointer').bind('click.fb', function (e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						e.preventDefault();

						F[current.closeClick ? 'close' : 'next']();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function (e) {
					e.preventDefault();

					F.close();
				});
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {

				F.play(false);
			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play(true);
			}
		},

		_afterZoomOut: function _afterZoomOut(obj) {
			obj = obj || F.current;

			$('.fancybox-wrap').trigger('onReset').remove();

			$.extend(F, {
				group: {},
				opts: {},
				router: false,
				current: null,
				isActive: false,
				isOpened: false,
				isOpen: false,
				isClosing: false,
				wrap: null,
				skin: null,
				outer: null,
				inner: null
			});

			F.trigger('afterClose', obj);
		}
	});

	/*
  *	Default transitions
  */

	F.transitions = {
		getOrigPosition: function getOrigPosition() {
			var current = F.current,
			    element = current.element,
			    orig = current.orig,
			    pos = {},
			    width = 50,
			    height = 50,
			    hPadding = current.hPadding,
			    wPadding = current.wPadding,
			    viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width = orig.outerWidth();
					height = orig.outerHeight();
				}
			} else {
				pos.top = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width) * current.leftRatio;
			}

			if (F.wrap.css('position') === 'fixed' || current.locked) {
				pos.top -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top: getValue(pos.top - hPadding * current.topRatio),
				left: getValue(pos.left - wPadding * current.leftRatio),
				width: getValue(width + wPadding),
				height: getValue(height + hPadding)
			};

			return pos;
		},

		step: function step(now, fx) {
			var ratio,
			    padding,
			    value,
			    prop = fx.prop,
			    current = F.current,
			    wrapSpace = current.wrapSpace,
			    skinSpace = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value = now - padding;

				F.skin[prop](getScalar(prop === 'width' ? value : value - wrapSpace * ratio));
				F.inner[prop](getScalar(prop === 'width' ? value : value - wrapSpace * ratio - skinSpace * ratio));
			}
		},

		zoomIn: function zoomIn() {
			var current = F.current,
			    startPos = current.pos,
			    effect = current.openEffect,
			    elastic = effect === 'elastic',
			    endPos = $.extend({ opacity: 1 }, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}
			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration: effect === 'none' ? 0 : current.openSpeed,
				easing: current.openEasing,
				step: elastic ? this.step : null,
				complete: F._afterZoomIn
			});
		},

		zoomOut: function zoomOut() {
			var current = F.current,
			    effect = current.closeEffect,
			    elastic = effect === 'elastic',
			    endPos = { opacity: 0.1 };

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration: effect === 'none' ? 0 : current.closeSpeed,
				easing: current.closeEasing,
				step: elastic ? this.step : null,
				complete: F._afterZoomOut
			});
		},

		changeIn: function changeIn() {
			var current = F.current,
			    effect = current.nextEffect,
			    startPos = current.pos,
			    endPos = { opacity: 1 },
			    direction = F.direction,
			    distance = 200,
			    field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'down' || direction === 'right') {
					startPos[field] = getValue(getScalar(startPos[field]) - distance);
					endPos[field] = '+=' + distance + 'px';
				} else {
					startPos[field] = getValue(getScalar(startPos[field]) + distance);
					endPos[field] = '-=' + distance + 'px';
				}
			}

			// Workaround for http://bugs.jquery.com/ticket/12273
			if (effect === 'none') {
				F._afterZoomIn();
			} else {
				F.wrap.css(startPos).animate(endPos, {
					duration: current.nextSpeed,
					easing: current.nextEasing,
					complete: F._afterZoomIn
				});
			}
		},

		changeOut: function changeOut() {
			var previous = F.previous,
			    effect = previous.prevEffect,
			    endPos = { opacity: 0.1 },
			    direction = F.direction,
			    distance = 200;

			if (effect === 'elastic') {
				endPos[direction === 'down' || direction === 'up' ? 'top' : 'left'] = (direction === 'up' || direction === 'left' ? '-' : '+') + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration: effect === 'none' ? 0 : previous.prevSpeed,
				easing: previous.prevEasing,
				complete: function complete() {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
  *	Overlay helper
  */

	F.helpers.overlay = {
		defaults: {
			closeClick: true, // if true, fancyBox will be closed when user clicks on the overlay
			speedOut: 200, // duration of fadeOut animation
			showEarly: true, // indicates if should be opened immediately or wait until the content is ready
			css: {}, // custom CSS properties
			locked: !isTouch, // if true, the content will be locked into overlay
			fixed: true // if false, the overlay CSS position property will not be set to "fixed"
		},

		overlay: null, // current handle
		fixed: false, // indicates if the overlay has position "fixed"
		el: $('html'), // element that contains "the lock"

		// Public methods
		create: function create(opts) {
			var parent;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.close();
			}

			parent = F.coming ? F.coming.parent : opts.parent;

			this.overlay = $('<div class="fancybox-overlay"></div>').appendTo(parent && parent.length ? parent : 'body');
			this.fixed = false;

			if (opts.fixed && F.defaults.fixed) {
				this.overlay.addClass('fancybox-overlay-fixed');

				this.fixed = true;
			}
		},

		open: function open(opts) {
			var that = this;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.overlay.unbind('.overlay').width('auto').height('auto');
			} else {
				this.create(opts);
			}

			if (!this.fixed) {
				W.bind('resize.overlay', $.proxy(this.update, this));

				this.update();
			}

			if (opts.closeClick) {
				this.overlay.bind('click.overlay', function (e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						if (F.isActive) {
							F.close();
						} else {
							that.close();
						}

						return false;
					}
				});
			}

			this.overlay.css(opts.css).show();
		},

		close: function close() {
			W.unbind('resize.overlay');

			if (this.el.hasClass('fancybox-lock')) {
				$('.fancybox-margin').removeClass('fancybox-margin');

				this.el.removeClass('fancybox-lock');

				W.scrollTop(this.scrollV).scrollLeft(this.scrollH);
			}

			$('.fancybox-overlay').remove().hide();

			$.extend(this, {
				overlay: null,
				fixed: false
			});
		},

		// Private, callbacks

		update: function update() {
			var width = '100%',
			    offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width(width).height('100%');

			// jQuery does not return reliable result for IE
			if (IE) {
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				if (D.width() > offsetWidth) {
					width = D.width();
				}
			} else if (D.width() > W.width()) {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady: function onReady(opts, obj) {
			var overlay = this.overlay;

			$('.fancybox-overlay').stop(true, true);

			if (!overlay) {
				this.create(opts);
			}

			if (opts.locked && this.fixed && obj.fixed) {
				obj.locked = this.overlay.append(obj.wrap);
				obj.fixed = false;
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow: function beforeShow(opts, obj) {
			if (obj.locked && !this.el.hasClass('fancybox-lock')) {
				if (this.fixPosition !== false) {
					$('*:not(object)').filter(function () {
						return $(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap");
					}).addClass('fancybox-margin');
				}

				this.el.addClass('fancybox-margin');

				this.scrollV = W.scrollTop();
				this.scrollH = W.scrollLeft();

				this.el.addClass('fancybox-lock');

				W.scrollTop(this.scrollV).scrollLeft(this.scrollH);
			}

			this.open(opts);
		},

		onUpdate: function onUpdate() {
			if (!this.fixed) {
				this.update();
			}
		},

		afterClose: function afterClose(opts) {
			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			if (this.overlay && !F.coming) {
				this.overlay.fadeOut(opts.speedOut, $.proxy(this.close, this));
			}
		}
	};

	/*
  *	Title helper
  */

	F.helpers.title = {
		defaults: {
			type: 'float', // 'float', 'inside', 'outside' or 'over',
			position: 'bottom' // 'top' or 'bottom'
		},

		beforeShow: function beforeShow(opts) {
			var current = F.current,
			    text = current.title,
			    type = opts.type,
			    title,
			    target;

			if ($.isFunction(text)) {
				text = text.call(current.element, current);
			}

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
					break;

				case 'outside':
					target = F.wrap;
					break;

				case 'over':
					target = F.inner;
					break;

				default:
					// 'float'
					target = F.skin;

					title.appendTo('body');

					if (IE) {
						title.width(title.width());
					}

					title.wrapInner('<span class="child"></span>');

					//Increase bottom margin so this title will also fit into viewport
					F.current.margin[2] += Math.abs(getScalar(title.css('margin-bottom')));
					break;
			}

			title[opts.position === 'top' ? 'prependTo' : 'appendTo'](target);
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
		    that = $(this),
		    selector = this.selector || '',
		    run = function run(e) {
			var what = $(this).blur(),
			    idx = index,
			    relType,
			    relVal;

			if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
				relType = options.groupAttr || 'data-fancybox-group';
				relVal = what.attr(relType);

				if (!relVal) {
					relType = 'rel';
					relVal = what.get(0)[relType];
				}

				if (relVal && relVal !== '' && relVal !== 'nofollow') {
					what = selector.length ? $(selector) : that;
					what = what.filter('[' + relType + '="' + relVal + '"]');
					idx = what.index(this);
				}

				options.index = idx;

				// Stop an event from bubbling if everything is fine
				if (F.open(what, options) !== false) {
					e.preventDefault();
				}
			}
		};

		options = options || {};
		index = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);
		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		this.filter('[data-fancybox-start=1]').trigger('click');

		return this;
	};

	// Tests that need a body at doc ready
	D.ready(function () {
		var w1, w2;

		if ($.scrollbarWidth === undefined) {
			// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
			$.scrollbarWidth = function () {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
				    child = parent.children(),
				    width = child.innerWidth() - child.height(99).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ($.support.fixedPosition === undefined) {
			$.support.fixedPosition = function () {
				var elem = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
				    fixed = elem[0].offsetTop === 20 || elem[0].offsetTop === 15;

				elem.remove();

				return fixed;
			}();
		}

		$.extend(F.defaults, {
			scrollbarWidth: $.scrollbarWidth(),
			fixed: $.support.fixedPosition,
			parent: $('body')
		});

		//Get real width of page scroll-bar
		w1 = $(window).width();

		H.addClass('fancybox-lock-test');

		w2 = $(window).width();

		H.removeClass('fancybox-lock-test');

		$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
	});
})(window, document, jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.m-b-10 {\r\n    margin-bottom : 10px;\n}\n#gallery-header-center-left-title {\r\n    float       : left;\r\n    height      : 35px;\r\n    font-size   : 25px;\r\n    color       : #428bca;\r\n    margin-left : 10px;\n}\n#gallery-content {\r\n    float : left;\r\n    width : 100%;\n}\n.fancybox-opened {\r\n    top: 70px !important;\n}\n#gallery-content-center img {\r\n    width              : 300px;\r\n    margin             : 0 0 10px 10px;\r\n    -webkit-transition : all 0.5s;\r\n    transition         : all 0.5s;\n}", ""]);

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */\n.fancybox-wrap,\n.fancybox-skin,\n.fancybox-outer,\n.fancybox-inner,\n.fancybox-image,\n.fancybox-wrap iframe,\n.fancybox-wrap object,\n.fancybox-nav,\n.fancybox-nav span,\n.fancybox-tmp\n{\n\tpadding: 0;\n\tmargin: 0;\n\tborder: 0;\n\toutline: none;\n\tvertical-align: top;\n}\n.fancybox-wrap {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\t-webkit-transform: translate3d(0, 0, 0);\n\ttransform: translate3d(0, 0, 0);\n\tz-index: 8020;\n}\n.fancybox-skin {\n\tposition: relative;\n\tbackground: #f9f9f9;\n\tcolor: #444;\n\ttext-shadow: none;\n\tborder-radius: 4px;\n}\n.fancybox-opened {\n\tz-index: 8030;\n}\n.fancybox-opened .fancybox-skin {\n\tbox-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);\n}\n.fancybox-outer, .fancybox-inner {\n\tposition: relative;\n}\n.fancybox-inner {\n\toverflow: hidden;\n}\n.fancybox-type-iframe .fancybox-inner {\n\t-webkit-overflow-scrolling: touch;\n}\n.fancybox-error {\n\tcolor: #444;\n\tfont: 14px/20px \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n\tmargin: 0;\n\tpadding: 15px;\n\twhite-space: nowrap;\n}\n.fancybox-image, .fancybox-iframe {\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n}\n.fancybox-image {\n\tmax-width: 100%;\n\tmax-height: 100%;\n}\n#fancybox-loading, .fancybox-close, .fancybox-prev span, .fancybox-next span {\n\tbackground-image: url("+__webpack_require__(791)+");\n}\n#fancybox-loading {\n\tposition: fixed;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-top: -22px;\n\tmargin-left: -22px;\n\tbackground-position: 0 -108px;\n\topacity: 0.8;\n\tcursor: pointer;\n\tz-index: 8060;\n}\n#fancybox-loading div {\n\twidth: 44px;\n\theight: 44px;\n\tbackground: url("+__webpack_require__(788)+") center center no-repeat;\n}\n.fancybox-close {\n\tposition: absolute;\n\ttop: -18px;\n\tright: -18px;\n\twidth: 36px;\n\theight: 36px;\n\tcursor: pointer;\n\tz-index: 8040;\n}\n.fancybox-nav {\n\tposition: absolute;\n\ttop: 0;\n\twidth: 40%;\n\theight: 100%;\n\tcursor: pointer;\n\ttext-decoration: none;\n\tbackground: transparent url("+__webpack_require__(787)+"); /* helps IE */\n\t-webkit-tap-highlight-color: rgba(0,0,0,0);\n\tz-index: 8040;\n}\n.fancybox-prev {\n\tleft: 0;\n}\n.fancybox-next {\n\tright: 0;\n}\n.fancybox-nav span {\n\tposition: absolute;\n\ttop: 50%;\n\twidth: 36px;\n\theight: 34px;\n\tmargin-top: -18px;\n\tcursor: pointer;\n\tz-index: 8040;\n\tvisibility: hidden;\n}\n.fancybox-prev span {\n\tleft: 10px;\n\tbackground-position: 0 -36px;\n}\n.fancybox-next span {\n\tright: 10px;\n\tbackground-position: 0 -72px;\n}\n.fancybox-nav:hover span {\n\tvisibility: visible;\n}\n.fancybox-tmp {\n\tposition: absolute;\n\ttop: -99999px;\n\tleft: -99999px;\n\tmax-width: 99999px;\n\tmax-height: 99999px;\n\toverflow: visible !important;\n}\n\n/* Overlay helper */\n.fancybox-lock {\n    overflow: visible !important;\n    width: auto;\n}\n.fancybox-lock body {\n    overflow: hidden !important;\n}\n.fancybox-lock-test {\n    overflow-y: hidden !important;\n}\n.fancybox-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\toverflow: hidden;\n\tdisplay: none;\n\tz-index: 8010;\n\tbackground: url("+__webpack_require__(790)+");\n}\n.fancybox-overlay-fixed {\n\tposition: fixed;\n\tbottom: 0;\n\tright: 0;\n}\n.fancybox-lock .fancybox-overlay {\n\toverflow: auto;\n\toverflow-y: scroll;\n}\n\n/* Title helper */\n.fancybox-title {\n\tvisibility: hidden;\n\tfont: normal 13px/20px \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n\tposition: relative;\n\ttext-shadow: none;\n\tz-index: 8050;\n}\n.fancybox-opened .fancybox-title {\n\tvisibility: visible;\n}\n.fancybox-title-float-wrap {\n\tposition: absolute;\n\tbottom: 0;\n\tright: 50%;\n\tmargin-bottom: -35px;\n\tz-index: 8050;\n\ttext-align: center;\n}\n.fancybox-title-float-wrap .child {\n\tdisplay: inline-block;\n\tmargin-right: -100%;\n\tpadding: 2px 20px;\n\tbackground: transparent; /* Fallback for web browsers that doesn't support RGBa */\n\tbackground: rgba(0, 0, 0, 0.8);\n\tborder-radius: 15px;\n\ttext-shadow: 0 1px 2px #222;\n\tcolor: #FFF;\n\tfont-weight: bold;\n\tline-height: 24px;\n\twhite-space: nowrap;\n}\n.fancybox-title-outside-wrap {\n\tposition: relative;\n\tmargin-top: 10px;\n\tcolor: #fff;\n}\n.fancybox-title-inside-wrap {\n\tpadding-top: 10px;\n}\n.fancybox-title-over-wrap {\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\tcolor: #fff;\n\tpadding: 10px;\n\tbackground: #000;\n\tbackground: rgba(0, 0, 0, .8);\n}\n\n/*Retina graphics!*/\n@media only screen and (-webkit-min-device-pixel-ratio: 1.5),\n\t   only screen and (min--moz-device-pixel-ratio: 1.5),\n\t   only screen and (min-device-pixel-ratio: 1.5){\n#fancybox-loading, .fancybox-close, .fancybox-prev span, .fancybox-next span {\n\t\tbackground-image: url("+__webpack_require__(792)+");\n\t\tbackground-size: 44px 152px; /*The size of the normal image, half the size of the hi-res image*/\n}\n#fancybox-loading div {\n\t\tbackground-image: url("+__webpack_require__(789)+");\n\t\tbackground-size: 24px 24px; /*The size of the normal image, half the size of the hi-res image*/\n}\n}", ""]);

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "/images/1.jpg?a787c9cdc99edb47f649122d7f7fd357";

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "/images/10.jpg?eb873070ff2f4993fb6f51edc685d5b9";

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = "/images/11.jpg?43b4abecef6f8d5b3446283fa0d06f51";

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = "/images/12.jpg?880def885d99cc3d4e1ec6b49c5bbb2b";

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = "/images/13.jpg?026eff6bbbe15443d8ad8a61b67fc9df";

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "/images/14.jpg?765577a19231ea5c34512f92d0007690";

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "/images/15.jpg?78eceac13ec6f20f27173a828998b416";

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "/images/16.jpg?647670c59370f6ebeda835fa6146c6f8";

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "/images/18.jpg?72557f397b8a9e41daa60234b83b57f9";

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "/images/19.jpg?e19d49a2d1bc5804d55de91418644804";

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "/images/2.jpg?0d0d910590b3c57b3a89dd9f0d1a4ddd";

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = "/images/21.jpg?a629473cdd6b21231c956b647285da76";

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = "/images/22.jpg?9ed2775101dc055260975aebee8fabfa";

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = "/images/23.jpg?6c1964e932de8f0942605a63c53c72fc";

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

module.exports = "/images/25.jpg?e3795faa63945cf3bf0e86fe2b33778b";

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

module.exports = "/images/26.jpg?5c3305bddbb759213d1d63547ba0d9e4";

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

module.exports = "/images/27.jpg?83e160d1f8f5e46d4149ac3df7a98f8a";

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

module.exports = "/images/28.jpg?2a1633f3c0fff4d9809b8cb5f4d12031";

/***/ }),

/***/ 757:
/***/ (function(module, exports) {

module.exports = "/images/3.jpg?c3df4aa5ed9b0981a869f0bac14a31f8";

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

module.exports = "/images/33.jpg?3bce53086f4a6eb2bc194d479800b716";

/***/ }),

/***/ 759:
/***/ (function(module, exports) {

module.exports = "/images/34.jpg?953afad1515954eae78c144f259e4e35";

/***/ }),

/***/ 760:
/***/ (function(module, exports) {

module.exports = "/images/4.jpg?43de80dd531dec3269d84aab3c7b90d0";

/***/ }),

/***/ 761:
/***/ (function(module, exports) {

module.exports = "/images/5.jpg?330b04267864448f66ac8a0fe49fd2e0";

/***/ }),

/***/ 762:
/***/ (function(module, exports) {

module.exports = "/images/6.jpg?1169f5d2add8c6e932027a00e61da2a9";

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

module.exports = "/images/7.jpg?9d4cb206330fa42fede93279604808bf";

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

module.exports = "/images/9.jpg?0e93632704fc6946ee951d12abd4ab8d";

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

module.exports = "/images/blank.gif?325472601571f31e1bf00674c368d335";

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

module.exports = "/images/fancybox_loading.gif?328cc0f6c78211485058d460e80f4fa8";

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

module.exports = "/images/fancybox_loading@2x.gif?f92938639fa894a0e8ded1c3368abe98";

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = "/images/fancybox_overlay.png?77aeaa52715b898b73c74d68c630330e";

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

module.exports = "/images/fancybox_sprite.png?783d4031fe50c3d83c960911e1fbc705";

/***/ }),

/***/ 792:
/***/ (function(module, exports) {

module.exports = "/images/fancybox_sprite@2x.png?ed9970ce22242421e66ff150aa97fe5f";

/***/ }),

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "content gallery"
  }, [_c('div', {
    staticClass: "row",
    attrs: {
      "id": "slim"
    }
  }, [_c('div', {
    attrs: {
      "id": "gallery"
    }
  }, [_c('div', {
    staticClass: "row m-b-10"
  }, [_c('div', {
    staticClass: "col-md-5 col-xs-12",
    attrs: {
      "id": "gallery-header-center-left-title"
    }
  }, [_vm._v("\n                        All Galleries\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "pull-right"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('button', {
    staticClass: "btn btn-responsive btn-info btn-xs",
    attrs: {
      "type": "button",
      "id": "filter-all"
    }
  }, [_vm._v("\n                                All\n                            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-responsive btn-primary btn-xs",
    attrs: {
      "type": "button",
      "id": "filter-studio"
    }
  }, [_vm._v("Studio\n                            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-responsive btn-success btn-xs",
    attrs: {
      "type": "button",
      "id": "filter-landscape"
    }
  }, [_vm._v("Landscape\n                            ")])])])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "gallery-content"
    }
  }, [_c('div', {
    attrs: {
      "id": "gallery-content-center"
    }
  }, [_c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/1.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all studio",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(739)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/2.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all landscape",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(749)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/3.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all studio",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(757)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/4.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all studio",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(760)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/5.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all landscape",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(761)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/6.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all studio",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(762)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/7.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all studio",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(763)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/8.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all landscape",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(305)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/9.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all studio",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(764)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/10.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all studio",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(740)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/11.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all landscape",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(741)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/12.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all studio",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(742)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/13.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all landscape",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(743)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/14.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all studio",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(744)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/15.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all landscape",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(745)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/16.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all studio",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(746)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/17.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all landscape",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(359)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/18.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all studio",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(747)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/19.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all landscape",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(748)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/20.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all studio",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(324)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/21.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all landscape",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(750)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/22.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all studio",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(751)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/23.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all landscape",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(752)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/24.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all studio",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(360)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/25.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all landscape",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(753)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/26.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all studio",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(754)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/27.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all landscape",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(755)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/28.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all studio",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(756)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/29.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all landscape",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(303)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/30.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all studio",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(304)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/31.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all landscape",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(325)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/32.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all studio",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(361)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/33.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all landscape",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(758)
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "fancybox img-responsive",
    attrs: {
      "href": "/static/img/gallery/full/34.jpg",
      "data-fancybox-group": "gallery",
      "title": "Lorem ipsum dolor sit amet"
    }
  }, [_c('img', {
    staticClass: "all studio",
    attrs: {
      "alt": "gallery",
      "src": __webpack_require__(759)
    }
  })])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a5823d54", module.exports)
  }
}

/***/ })

});