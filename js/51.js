webpackJsonp([51],{

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(966)
__webpack_require__(965)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(442),
  /* template */
  __webpack_require__(848),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/vanessap/Documents/Projects/vue-dashboard2/src/components/menubar_fold.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] menubar_fold.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-493ff404", Component.options)
  } else {
    hotAPI.reload("data-v-493ff404", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    name: "menubar_fold",
    mounted: function mounted() {
        $(document).ready(function () {
            setTimeout(function () {
                //leftmenu init
                $('.menu-dropdown>a').off("click").on("click", function (e) {
                    e.preventDefault();
                });

                $("#menu").find('ul>.menu-dropdown').hover(function () {
                    var sideoffset = $(".sidebar").offset();
                    var submenuoffset = $(this).children("ul").offset();
                    if (sideoffset.top + $(".sidebar").height() < submenuoffset.top + $(this).children("ul").height()) {
                        $(this).children("ul").addClass("sidebarbottom");
                    }
                });
            }, 0);
        });
    },
    destroyed: function destroyed() {
        location.reload();
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n#menu .navigation>li>a>span.mm-text,\r\n#menu .navigation>li>a>span.fa.arrow,\r\n.content-profile {\r\n    display: none;\n}\n#menu .navigation>li>a> {\r\n    text-align: center;\n}\r\n", ""]);

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "/* left menu icons */\n.navbar-nav > .notifications-menu > .dropdown-menu,\r\n.navbar-nav > .messages-menu > .dropdown-menu,\r\n.navbar-nav > .tasks-menu > .dropdown-menu {\r\n    width: 340px;\r\n    padding: 0;\r\n    margin: 1px 0 0 0;\r\n    top: 100%;\r\n    border: 1px;\n}\n#menu .navigation .menu-icon {\r\n    text-align : center;\r\n    font-size  : 20px;\n}\n#menu .navigation > li > a {\r\n    padding : 14px 24px;\n}\n#menu .navigation a {\r\n    padding : 11px 24px;\n}\n#menu .navigation a.index {\r\n    padding : 17px 24px 17px 40px;\n}\n.left-side,\r\n.sidebar,\r\n.menu-dropdown > a,\r\n#menu .navigation {\r\n    width : 80px;\n}\n.right-side {\r\n    margin-left : 80px;\n}\n@media screen and (max-width : 992px) {\n.right-side {\r\n        margin-left : 0;\n}\n.relative .right-side {\r\n        margin-left : -160px;\n}\n}\n@media screen and (min-width : 992px) {\n.right-side.strech {\r\n        margin-left : 0;\n}\n}\n@media screen and (width : 992px) {\n.left-side {\r\n        top : 0;\n}\n}\r\n/* drop list open on hover */\n.dropdown {\r\n    position : relative;\r\n    display  : inline-block;\n}\n.menu-dropdown,\r\n#menu .navigation > li:not(.menu-dropdown) > a {\r\n    position : relative;\r\n    width    : 80px;\n}\n#menu .menu-dropdown > ul,\r\n#menu .menu-dropdown-open-ul {\r\n    position   : absolute;\r\n    width      : 250px !important;\r\n    top        : 0;\r\n    right      : -250px;\r\n    z-index    : 2;\r\n    display    : none;\r\n    overflow-y : auto;\n}\n#menu .navigation > li:hover > a {\r\n    background-color : #eee;\r\n    color            : #33CC99;\n}\n#menu .menu-dropdown:hover > ul,\r\n#menu .menu-dropdown:hover > ul.collapse {\r\n    display          : block;\r\n    height           : auto;\r\n    z-index          : 1000;\r\n    background-color : #fff;\r\n    box-shadow: 0 0 15px #CCC;\n}\n#menu .menu-dropdown:hover > a:after {\r\n    position: absolute;\r\n    top: 17px;\r\n    right: 0;\r\n    width: 0;\r\n    height: 0;\r\n    content: \"\";\r\n    border-top: 10px solid transparent;\r\n    border-right: 10px solid #2E576B;\r\n    border-bottom: 10px solid transparent;\r\n    border-left: 0;\n}\n#menu .navigation {\r\n    padding       : 4px 0 15px;\r\n    border-bottom : 0;\n}\n.nav_profile .profile-left {\r\n    padding: 7px 13px 7px;\r\n    border  : 0;\n}\n#menu .menu-dropdown .sidebarbottom {\r\n    top    : auto;\r\n    bottom : 0;\n}\n@media screen and (max-width: 350px){\n#menu .menu-dropdown > ul,\r\n    #menu .menu-dropdown-open-ul {\r\n        right      : -240px;\n}\n#menu .menu-dropdown:hover > a:after {\r\n        right: 10px;\n}\n#menu .menu-dropdown.active:hover > a:after {\r\n        right: 7px;\n}\n}", ""]);

/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "outer"
  }, [_c('div', {
    staticClass: "inner bg-light lter"
  }, [_c('h2', [_vm._v("Code")]), _vm._v(" "), _c('pre', [_c('code', {
    staticClass: "language-markup"
  }, [_vm._v("<body class=\"boxed\">\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    ...\n    </nav>\n</body>")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-12"
  }, [_c('p', {
    staticClass: "text-justify"
  }, [_vm._v("\n                    Sed sed blandit urna. Proin ac sem nisl. Mauris risus orci, tristique eget velit at, congue euismod lacus. Curabitur id purus sit amet urna rutrum bibendum ac at quam. In hendrerit enim eu turpis molestie, et euismod tellus viverra. Suspendisse molestie at leo sit amet volutpat. Integer augue libero, scelerisque vitae luctus ac, consequat et arcu.\n            ")]), _vm._v(" "), _c('p', [_vm._v("\n                    Nullam malesuada turpis eu ullamcorper tincidunt. Integer aliquam felis eget neque facilisis ornare. Integer pharetra vitae dolor vel elementum. In nisl risus, dignissim non fermentum ac, pretium sit amet dui. Phasellus fringilla orci sapien, vel lacinia mi dapibus ut. Donec euismod congue nulla, in porttitor sapien. Pellentesque acilisis luctus adipiscing.\n            ")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa eros, dictum ut imperdiet eget, laoreet placerat orci. Aliquam eget neque neque. Donec dictum, enim convallis gravida fringilla, velit sem condimentum nunc, in pretium libero est sit amet elit. Nam ut arcu ac eros commodo rutrum ac nec purus. Fusce sodales pulvinar odio, vulputate fringilla ligula bibendum sit amet. Duis risus neque, molestie tincidunt odio vel, sodales vulputate mauris.\n            ")]), _vm._v(" "), _c('p', [_vm._v("\n                    Sed adipiscing justo tristique enim pharetra, nec ultricies metus sagittis.Duis varius id massa ut pellentesque. Nulla commodo erat eu mi aliquet aliquam. Vivamus commodo massa et nunc ullamcorper, vel pharetra purus consequat. Suspendisse a neque quis nibh dictum posuere ac et enim. Aliquam sit amet accumsan erat. Nullam euismod elit tellus, vel luctus enim luctus feugiat. Vestibulum quis placerat ipsum, porta vehicula massa. Etiam nec risus ac lacus gravida tincidunt. Vivamus eu ante vehicula, aliquam nisl et, suscipit ipsum. Vivamus velit nulla, tincidunt ac risus et, congue lobortis mauris. In condimentum consectetur purus, vel adipiscing felis sollicitudin vitae. Phasellus luctus, ligula eu tempor ullamcorper, lectus elit posuere augue, eget tempus lacus nibh a purus.\n            ")]), _vm._v(" "), _c('p', [_vm._v("\n                   Ut risus velit, adipiscing eu leo quis, vestibulum porttitor nunc. Sed sed blandit urna. Proin ac sem nisl. Mauris risus orci, tristique eget velit at, congue euismod lacus. Curabitur id purus sit amet urna rutrum bibendum ac at quam. In hendrerit enim eu turpis molestie, et euismod tellus viverra. Suspendisse molestie at leo sit amet volutpat. Integer augue libero, scelerisque vitae luctus ac, consequat et arcu. Nullam malesuada turpis eu ullamcorper tincidunt. Integer aliquam felis eget neque facilisis ornare. Integer pharetra vitae dolor vel elementum. In nisl risus, dignissim non fermentum ac, pretium sit amet dui. Phasellus fringilla orci sapien, vel lacinia mi dapibus ut. Donec euismod congue nulla, in porttitor sapien. Pellentesque facilisis luctus adipiscing.\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  }), _vm._v(" "), _c('p', [_vm._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa eros, dictum ut imperdiet eget, laoreet placerat orci. Aliquam eget neque neque. Donec dictum, enim convallis gravida fringilla, velit sem condimentum nunc, in pretium libero est sit amet elit. Nam ut arcu ac eros commodo rutrum ac nec purus. Fusce sodales pulvinar odio, vulputate fringilla ligula bibendum sit amet. Duis risus neque, molestie tincidunt odio vel, sodales vulputate mauris. Sed adipiscing justo tristique enim pharetra, nec ultricies metus sagittis. Duis varius id massa ut pellentesque.\n            ")]), _vm._v(" "), _c('p', [_vm._v("    Nulla commodo erat eu mi aliquet aliquam. Vivamus commodo massa et nunc ullamcorper, vel pharetra purus consequat. Suspendisse a neque quis nibh dictum posuere ac et enim. Aliquam sit amet accumsan erat. Nullam euismod elit tellus, vel luctus enim luctus feugiat. Vestibulum quis placerat ipsum, porta vehicula massa. Etiam nec risus ac lacus gravida tincidunt. Vivamus eu ante vehicula, aliquam nisl et, suscipit ipsum. Vivamus velit nulla, tincidunt ac risus et, congue lobortis mauris. In condimentum consectetur purus, vel adipiscing felis sollicitudin vitae. Phasellus luctus, ligula eu tempor ullamcorper, lectus elit posuere augue, eget tempus lacus nibh a purus.\n            ")]), _vm._v(" "), _c('p', [_vm._v("    Ut risus velit, adipiscing eu leo quis, vestibulum porttitor nunc. Sed sed blandit urna. Proin ac sem nisl. Mauris risus orci, tristique eget velit at, congue euismod lacus. Curabitur id purus sit amet urna rutrum bibendum ac at quam. In hendrerit enim eu turpis molestie, et euismod tellus viverra. Suspendisse molestie at leo sit amet volutpat. Integer augue libero, scelerisque vitae luctus ac, consequat et arcu. Nullam malesuada turpis eu ullamcorper tincidunt. Integer aliquam felis eget neque facilisis ornare. Integer pharetra vitae dolor vel elementum. In nisl risus, dignissim non fermentum ac, pretium sit amet dui. Phasellus fringilla orci sapien, vel lacinia mi dapibus ut. Donec euismod congue nulla, in porttitor sapien. Pellentesque facilisis luctus adipiscing.\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-493ff404", module.exports)
  }
}

/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(630);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("3c5a9b08", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-493ff404!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./menubar_fold.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-493ff404!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./menubar_fold.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(631);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1a85e7d1", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-493ff404!./menubarfold.css", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-493ff404!./menubarfold.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});