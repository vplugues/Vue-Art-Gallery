webpackJsonp([46],{

/***/ 1042:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(707);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1e71acc4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-aa4a10c6!./form_editors.css", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-aa4a10c6!./form_editors.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1043:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(708);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("478fcc0b", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-aa4a10c6!./trumbowyg.min.css", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-aa4a10c6!./trumbowyg.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1043)
__webpack_require__(1042)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(427),
  /* template */
  __webpack_require__(883),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/vanessap/Documents/Projects/vue-dashboard2/src/components/form_editors.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] form_editors.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aa4a10c6", Component.options)
  } else {
    hotAPI.reload("data-v-aa4a10c6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendors_trumbowyg_dist_trumbowyg_min_js__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendors_trumbowyg_dist_trumbowyg_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendors_trumbowyg_dist_trumbowyg_min_js__);
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
    name: "form_editors",
    mounted: function mounted() {
        "use strict";

        $("textarea#split_editor").trumbowyg({
            _dir: "ltr", // This line is optionnal, but usefull to override the `dir` option
            svgPath: "/static/data/icons.svg",
            bold: "Gras",
            close: "Fermer"
        });
        if ($(window).width() < 700) {
            $("<br>").insertAfter(".summer_noted .dropdown-menu li .btn-group");
        }
    },
    destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/** Trumbowyg v2.0.5 - A lightweight WYSIWYG editor - alex-d.github.io/Trumbowyg - License MIT - Author : Alexandre Demode (Alex-D) / alex-d.fr */
jQuery.trumbowyg = { langs: { en: { viewHTML: "View HTML", undo: "Undo", redo: "Redo", formatting: "Formatting", p: "Paragraph", blockquote: "Quote", code: "Code", header: "Header", bold: "Bold", italic: "Italic", strikethrough: "Stroke", underline: "Underline", strong: "Strong", em: "Emphasis", del: "Deleted", superscript: "Superscript", subscript: "Subscript", unorderedList: "Unordered list", orderedList: "Ordered list", insertImage: "Insert Image", link: "Link", createLink: "Insert link", unlink: "Remove link", justifyLeft: "Align Left", justifyCenter: "Align Center", justifyRight: "Align Right", justifyFull: "Align Justify", horizontalRule: "Insert horizontal rule", removeformat: "Remove format", fullscreen: "Fullscreen", close: "Close", submit: "Confirm", reset: "Cancel", required: "Required", description: "Description", title: "Title", text: "Text", target: "Target" } }, plugins: {} }, function (e, t, n, a) {
  "use strict";
  a.fn.trumbowyg = function (e, t) {
    var n = "trumbowyg";if (e === Object(e) || !e) return this.each(function () {
      a(this).data(n) || a(this).data(n, new o(this, e));
    });if (1 === this.length) try {
      var r = a(this).data(n);switch (e) {case "execCmd":
          return r.execCmd(t.cmd, t.param, t.forceCss);case "openModal":
          return r.openModal(t.title, t.content);case "closeModal":
          return r.closeModal();case "openModalInsert":
          return r.openModalInsert(t.title, t.fields, t.callback);case "saveRange":
          return r.saveRange();case "getRange":
          return r.range;case "getRangeText":
          return r.getRangeText();case "restoreRange":
          return r.restoreRange();case "destroy":
          return r.destroy();case "empty":
          return r.empty();case "html":
          return r.html(t);}
    } catch (i) {}return !1;
  };var o = function o(e, _o) {
    var r = this,
        i = "trumbowyg-icons";if (r.doc = e.ownerDocument || n, r.$ta = a(e), r.$c = a(e), _o = _o || {}, null != _o.lang || null != a.trumbowyg.langs[_o.lang] ? r.lang = a.extend(!0, {}, a.trumbowyg.langs.en, a.trumbowyg.langs[_o.lang]) : r.lang = a.trumbowyg.langs.en, 0 === a("#" + i, r.doc).length) {
      var s = _o.svgPath;if (null == s) try {
        throw new Error();
      } catch (l) {
        var d = l.stack.split("\n");for (var c in d) {
          if (d[c].match(/http[s]?:\/\//)) {
            s = d[Number(c)].match(/((http[s]?:\/\/.+\/)([^\/]+\.js)):/)[1].split("/"), s.pop(), s = s.join("/") + "/ui/icons.svg";break;
          }
        }
      }var u = r.doc.createElement("div");u.id = i, r.doc.body.insertBefore(u, r.doc.body.childNodes[0]), a.get(s, function (e) {
        u.innerHTML = new XMLSerializer().serializeToString(e.documentElement);
      });
    }var g = r.lang.header,
        f = function f() {
      return (t.chrome || t.Intl && Intl.v8BreakIterator) && "CSS" in t;
    };r.btnsDef = { viewHTML: { fn: "toggle" }, undo: { isSupported: f, key: "Z" }, redo: { isSupported: f, key: "Y" }, p: { fn: "formatBlock" }, blockquote: { fn: "formatBlock" }, h1: { fn: "formatBlock", title: g + " 1" }, h2: { fn: "formatBlock", title: g + " 2" }, h3: { fn: "formatBlock", title: g + " 3" }, h4: { fn: "formatBlock", title: g + " 4" }, subscript: { tag: "sub" }, superscript: { tag: "sup" }, bold: { key: "B" }, italic: { key: "I" }, underline: { tag: "u" }, strikethrough: { tag: "strike" }, strong: { fn: "bold", key: "B" }, em: { fn: "italic", key: "I" }, del: { fn: "strikethrough" }, createLink: { key: "K", tag: "a" }, unlink: {}, insertImage: {}, justifyLeft: { tag: "left", forceCss: !0 }, justifyCenter: { tag: "center", forceCss: !0 }, justifyRight: { tag: "right", forceCss: !0 }, justifyFull: { tag: "justify", forceCss: !0 }, unorderedList: { fn: "insertUnorderedList", tag: "ul" }, orderedList: { fn: "insertOrderedList", tag: "ol" }, horizontalRule: { fn: "insertHorizontalRule" }, removeformat: {}, fullscreen: { "class": "trumbowyg-not-disable" }, close: { fn: "destroy", "class": "trumbowyg-not-disable" }, formatting: { dropdown: ["p", "blockquote", "h1", "h2", "h3", "h4"], ico: "p" }, link: { dropdown: ["createLink", "unlink"] } }, r.o = a.extend(!0, {}, { lang: "en", fixedBtnPane: !1, fixedFullWidth: !1, autogrow: !1, prefix: "trumbowyg-", semantic: !0, resetCss: !1, removeformatPasted: !1, tagsToRemove: [], btnsGrps: { design: ["bold", "italic", "underline", "strikethrough"], semantic: ["strong", "em", "del"], justify: ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"], lists: ["unorderedList", "orderedList"] }, btns: [["viewHTML"], ["undo", "redo"], ["formatting"], "btnGrp-semantic", ["superscript", "subscript"], ["link"], ["insertImage"], "btnGrp-justify", "btnGrp-lists", ["horizontalRule"], ["removeformat"], ["fullscreen"]], btnsDef: {}, inlineElementsSelector: "a,abbr,acronym,b,caption,cite,code,col,dfn,dir,dt,dd,em,font,hr,i,kbd,li,q,span,strikeout,strong,sub,sup,u", pasteHandlers: [], imgDblClickHandler: function imgDblClickHandler() {
        var e = a(this),
            t = e.attr("src"),
            n = "(Base64)";return 0 === t.indexOf("data:image") && (t = n), r.openModalInsert(r.lang.insertImage, { url: { label: "URL", value: t, required: !0 }, alt: { label: r.lang.description, value: e.attr("alt") } }, function (t) {
          return t.src !== n && e.attr({ src: t.src }), e.attr({ alt: t.alt }), !0;
        }), !1;
      }, plugins: {} }, _o), _o.btns ? r.o.btns = _o.btns : r.o.semantic || (r.o.btns[4] = "btnGrp-design"), a.each(r.o.btnsDef, function (e, t) {
      r.addBtnDef(e, t);
    }), r.keys = [], r.tagToButton = {}, r.tagHandlers = [], r.pasteHandlers = [].concat(r.o.pasteHandlers), r.init();
  };o.prototype = { init: function init() {
      var e = this;e.height = e.$ta.height(), e.initPlugins(), e.doc.execCommand("enableObjectResizing", !1, !1), e.doc.execCommand("defaultParagraphSeparator", !1, "p"), e.buildEditor(), e.buildBtnPane(), e.fixedBtnPaneEvents(), e.buildOverlay(), setTimeout(function () {
        e.$c.trigger("tbwinit");
      });
    }, addBtnDef: function addBtnDef(e, t) {
      this.btnsDef[e] = t;
    }, buildEditor: function buildEditor() {
      var e = this,
          n = e.o.prefix,
          o = "";e.$box = a("<div/>", { "class": n + "box " + n + "editor-visible " + n + e.o.lang + " trumbowyg" }), e.isTextarea = e.$ta.is("textarea"), e.isTextarea ? (o = e.$ta.val(), e.$ed = a("<div/>"), e.$box.insertAfter(e.$ta).append(e.$ed, e.$ta)) : (e.$ed = e.$ta, o = e.$ed.html(), e.$ta = a("<textarea/>", { name: e.$ta.attr("id"), height: e.height }).val(o), e.$box.insertAfter(e.$ed).append(e.$ta, e.$ed), e.syncCode()), e.$ta.addClass(n + "textarea").attr("tabindex", -1), e.$ed.addClass(n + "editor").attr({ contenteditable: !0, dir: e.lang._dir || "ltr" }).html(o), e.o.tabindex && e.$ed.attr("tabindex", e.o.tabindex), e.$c.is("[placeholder]") && e.$ed.attr("placeholder", e.$c.attr("placeholder")), e.o.resetCss && e.$ed.addClass(n + "reset-css"), e.o.autogrow || e.$ta.add(e.$ed).css({ height: e.height }), e.semanticCode(), e._ctrl = !1, e.$ed.on("dblclick", "img", e.o.imgDblClickHandler).on("keydown", function (t) {
        if (e._composition = 229 === t.which, t.ctrlKey) {
          e._ctrl = !0;var n = e.keys[String.fromCharCode(t.which).toUpperCase()];try {
            return e.execCmd(n.fn, n.param), !1;
          } catch (a) {}
        }
      }).on("keyup", function (t) {
        t.which >= 37 && t.which <= 40 || (!t.ctrlKey || 89 !== t.which && 90 !== t.which ? e._ctrl || 17 === t.which || e._composition || (e.semanticCode(!1, 13 === t.which), e.$c.trigger("tbwchange")) : e.$c.trigger("tbwchange"), setTimeout(function () {
          e._ctrl = !1;
        }, 200));
      }).on("mouseup keydown keyup", function () {
        e.updateButtonPaneStatus();
      }).on("focus blur", function (t) {
        e.$c.trigger("tbw" + t.type), "blur" === t.type && a("." + n + "active-button", e.$btnPane).removeClass(n + "active-button " + n + "active");
      }).on("cut", function () {
        e.$c.trigger("tbwchange");
      }).on("paste", function (n) {
        if (e.o.removeformatPasted) {
          n.preventDefault();try {
            var o = t.clipboardData.getData("Text");try {
              e.doc.selection.createRange().pasteHTML(o);
            } catch (r) {
              e.doc.getSelection().getRangeAt(0).insertNode(e.doc.createTextNode(o));
            }
          } catch (i) {
            e.execCmd("insertText", (n.originalEvent || n).clipboardData.getData("text/plain"));
          }
        }a.each(e.pasteHandlers, function (e, t) {
          t(n);
        }), setTimeout(function () {
          e.o.semantic ? e.semanticCode(!1, !0) : e.syncCode(), e.$c.trigger("tbwpaste", n);
        }, 0);
      }), e.$ta.on("keyup paste", function () {
        e.$c.trigger("tbwchange");
      }), a(e.doc).on("keydown", function (t) {
        return 27 === t.which ? (e.closeModal(), !1) : void 0;
      });
    }, buildBtnPane: function buildBtnPane() {
      var e = this,
          t = e.o.prefix;if (e.o.btns !== !1) {
        var n = e.$btnPane = a("<div/>", { "class": t + "button-pane" });a.each(e.o.btns, function (o, r) {
          try {
            var i = r.split("btnGrp-");null != i[1] && (r = e.o.btnsGrps[i[1]]);
          } catch (s) {}a.isArray(r) || (r = [r]);var l = a("<div/>", { "class": t + "button-group " + (r.indexOf("fullscreen") >= 0 ? t + "right" : "") });a.each(r, function (t, n) {
            try {
              var a;e.isSupportedBtn(n) && (a = e.buildBtn(n)), l.append(a);
            } catch (o) {}
          }), n.append(l);
        }), e.$box.prepend(n);
      }
    }, buildBtn: function buildBtn(e) {
      var t = this,
          n = t.o.prefix,
          o = t.btnsDef[e],
          r = o.dropdown,
          i = t.lang[e] || e,
          s = a("<button/>", { type: "button", "class": n + e + "-button " + (o["class"] || ""), html: '<svg><use xlink:href="#' + n + (o.ico || e).replace(/([A-Z]+)/g, "-$1").toLowerCase() + '"/></svg>', title: (o.title || o.text || i) + (o.key ? " (Ctrl + " + o.key + ")" : ""), tabindex: -1, mousedown: function mousedown() {
          return (!r || a("." + e + "-" + n + "dropdown", t.$box).is(":hidden")) && a("body", t.doc).trigger("mousedown"), !t.$btnPane.hasClass(n + "disable") || a(this).hasClass(n + "active") || a(this).hasClass(n + "not-disable") ? (t.execCmd((r ? "dropdown" : !1) || o.fn || e, o.param || e, o.forceCss || !1), !1) : !1;
        } });if (r) {
        s.addClass(n + "open-dropdown");var l = n + "dropdown",
            d = a("<div/>", { "class": l + "-" + e + " " + l + " " + n + "fixed-top", "data-dropdown": e });a.each(r, function (e, n) {
          t.btnsDef[n] && t.isSupportedBtn(n) && d.append(t.buildSubBtn(n));
        }), t.$box.append(d.hide());
      } else o.key && (t.keys[o.key] = { fn: o.fn || e, param: o.param || e });return r || (t.tagToButton[(o.tag || e).toLowerCase()] = e), s;
    }, buildSubBtn: function buildSubBtn(e) {
      var t = this,
          n = t.o.prefix,
          o = t.btnsDef[e];return o.key && (t.keys[o.key] = { fn: o.fn || e, param: o.param || e }), t.tagToButton[(o.tag || e).toLowerCase()] = e, a("<button/>", { type: "button", "class": n + e + "-dropdown-button" + (o.ico ? " " + n + o.ico + "-button" : ""), html: '<svg><use xlink:href="#' + n + (o.ico || e).replace(/([A-Z]+)/g, "-$1").toLowerCase() + '"/></svg>' + (o.text || o.title || t.lang[e] || e), title: o.key ? " (Ctrl + " + o.key + ")" : null, style: o.style || null, mousedown: function mousedown() {
          return a("body", t.doc).trigger("mousedown"), t.execCmd(o.fn || e, o.param || e, o.forceCss || !1), !1;
        } });
    }, isSupportedBtn: function isSupportedBtn(e) {
      try {
        return this.btnsDef[e].isSupported();
      } catch (t) {}return !0;
    }, buildOverlay: function buildOverlay() {
      var e = this;return e.$overlay = a("<div/>", { "class": e.o.prefix + "overlay" }).css({ top: e.$btnPane.outerHeight(), height: e.$ed.outerHeight() + 1 + "px" }).appendTo(e.$box), e.$overlay;
    }, showOverlay: function showOverlay() {
      var e = this;a(t).trigger("scroll"), e.$overlay.fadeIn(200), e.$box.addClass(e.o.prefix + "box-blur");
    }, hideOverlay: function hideOverlay() {
      var e = this;e.$overlay.fadeOut(50), e.$box.removeClass(e.o.prefix + "box-blur");
    }, fixedBtnPaneEvents: function fixedBtnPaneEvents() {
      var e = this,
          n = e.o.fixedFullWidth,
          o = e.$box;e.o.fixedBtnPane && (e.isFixed = !1, a(t).on("scroll resize", function () {
        if (o) {
          e.syncCode();var r = a(t).scrollTop(),
              i = o.offset().top + 1,
              s = e.$btnPane,
              l = s.outerHeight() - 2;r - i > 0 && r - i - e.height < 0 ? (e.isFixed || (e.isFixed = !0, s.css({ position: "fixed", top: 0, left: n ? "0" : "auto", zIndex: 7 }), a([e.$ta, e.$ed]).css({ marginTop: s.height() })), s.css({ width: n ? "100%" : o.width() - 1 + "px" }), a("." + e.o.prefix + "fixed-top", o).css({ position: n ? "fixed" : "absolute", top: n ? l : l + (r - i) + "px", zIndex: 15 })) : e.isFixed && (e.isFixed = !1, s.removeAttr("style"), a([e.$ta, e.$ed]).css({ marginTop: 0 }), a("." + e.o.prefix + "fixed-top", o).css({ position: "absolute", top: l }));
        }
      }));
    }, destroy: function destroy() {
      var e = this,
          t = e.o.prefix,
          n = e.height;e.isTextarea ? e.$box.after(e.$ta.css({ height: n }).val(e.html()).removeClass(t + "textarea").show()) : e.$box.after(e.$ed.css({ height: n }).removeClass(t + "editor").removeAttr("contenteditable").html(e.html()).show()), e.$ed.off("dblclick", "img"), e.destroyPlugins(), e.$box.remove(), e.$c.removeData("trumbowyg"), a("body").removeClass(t + "body-fullscreen");
    }, empty: function empty() {
      this.$ta.val(""), this.syncCode(!0);
    }, toggle: function toggle() {
      var e = this,
          t = e.o.prefix;e.semanticCode(!1, !0), setTimeout(function () {
        e.$box.toggleClass(t + "editor-hidden " + t + "editor-visible"), e.$btnPane.toggleClass(t + "disable"), a("." + t + "viewHTML-button", e.$btnPane).toggleClass(t + "active"), e.$box.hasClass(t + "editor-visible") ? e.$ta.attr("tabindex", -1) : e.$ta.removeAttr("tabindex");
      }, 0);
    }, dropdown: function dropdown(e) {
      var n = this,
          o = n.doc,
          r = n.o.prefix,
          i = a("[data-dropdown=" + e + "]", n.$box),
          s = a("." + r + e + "-button", n.$btnPane),
          l = i.is(":hidden");if (a("body", o).trigger("mousedown"), l) {
        var d = s.offset().left;s.addClass(r + "active"), i.css({ position: "absolute", top: s.offset().top - n.$btnPane.offset().top + s.outerHeight(), left: n.o.fixedFullWidth && n.isFixed ? d + "px" : d - n.$btnPane.offset().left + "px" }).show(), a(t).trigger("scroll"), a("body", o).on("mousedown", function () {
          a("." + r + "dropdown", o).hide(), a("." + r + "active", o).removeClass(r + "active"), a("body", o).off("mousedown");
        });
      }
    }, html: function html(e) {
      var t = this;return null != e ? (t.$ta.val(e), t.syncCode(!0), t) : t.$ta.val();
    }, syncCode: function syncCode(e) {
      var t = this;!e && t.$ed.is(":visible") ? t.$ta.val(t.$ed.html()) : t.$ed.html(t.$ta.val()), t.o.autogrow && (t.height = t.$ed.height(), t.height !== t.$ta.css("height") && (t.$ta.css({ height: t.height }), t.$c.trigger("tbwresize")));
    }, semanticCode: function semanticCode(e, t) {
      var n = this;if (n.saveRange(), n.syncCode(e), n.o.tagsToRemove.length > 0 && a(n.o.tagsToRemove.join(", "), n.$ed).remove(), n.o.semantic) {
        if (n.semanticTag("b", "strong"), n.semanticTag("i", "em"), n.semanticTag("strike", "del"), t) {
          var o = n.o.inlineElementsSelector,
              r = ":not(" + n.o.inlineElementsSelector + ")";n.$ed.contents().filter(function () {
            return 3 === this.nodeType && a.trim(this.nodeValue).length > 0;
          }).wrap("<span data-tbw/>");var i = function i(e) {
            if (0 !== e.length) {
              var t = e.nextUntil(r).andSelf().wrapAll("<p/>").parent();t.next("br").remove();var n = t.nextAll(o).first();n.length && i(n);
            }
          };i(n.$ed.children(o).first()), n.semanticTag("div", "p", !0), n.$ed.find("p").filter(function () {
            return n.range && this === n.range.startContainer ? !1 : 0 === a(this).text().trim().length && 0 === a(this).children().not("br,span").length;
          }).contents().unwrap(), a("[data-tbw]", n.$ed).contents().unwrap(), n.$ed.find("p:empty").remove();
        }n.restoreRange(), n.$ta.val(n.$ed.html());
      }
    }, semanticTag: function semanticTag(e, t, n) {
      a(e, this.$ed).each(function () {
        var e = a(this);e.wrap("<" + t + "/>"), n && a.each(e.prop("attributes"), function () {
          e.parent().attr(this.name, this.value);
        }), e.contents().unwrap();
      });
    }, createLink: function createLink() {
      for (var e, t, n, o = this, r = o.doc.getSelection(), i = r.focusNode; ["A", "DIV"].indexOf(i.nodeName) < 0;) {
        i = i.parentNode;
      }if (i && "A" === i.nodeName) {
        var s = a(i);e = s.attr("href"), t = s.attr("title"), n = s.attr("target");var l = o.doc.createRange();l.selectNode(i), r.addRange(l);
      }o.saveRange(), o.openModalInsert(o.lang.createLink, { url: { label: "URL", required: !0, value: e }, title: { label: o.lang.title, value: t }, text: { label: o.lang.text, value: o.getRangeText() }, target: { label: o.lang.target, value: n } }, function (e) {
        var t = a(['<a href="', e.url, '">', e.text, "</a>"].join(""));return e.title.length > 0 && t.attr("title", e.title), e.target.length > 0 && t.attr("target", e.target), o.range.deleteContents(), o.range.insertNode(t[0]), !0;
      });
    }, unlink: function unlink() {
      var e = this,
          t = e.doc.getSelection(),
          n = t.focusNode;if (t.isCollapsed) {
        for (; ["A", "DIV"].indexOf(n.nodeName) < 0;) {
          n = n.parentNode;
        }if (n && "A" === n.nodeName) {
          var a = e.doc.createRange();a.selectNode(n), t.addRange(a);
        }
      }e.execCmd("unlink", void 0, void 0, !0);
    }, insertImage: function insertImage() {
      var e = this;e.saveRange(), e.openModalInsert(e.lang.insertImage, { url: { label: "URL", required: !0 }, alt: { label: e.lang.description, value: e.getRangeText() } }, function (t) {
        return e.execCmd("insertImage", t.url), a('img[src="' + t.url + '"]:not([alt])', e.$box).attr("alt", t.alt), !0;
      });
    }, fullscreen: function fullscreen() {
      var e,
          n = this,
          o = n.o.prefix,
          r = o + "fullscreen";n.$box.toggleClass(r), e = n.$box.hasClass(r), a("body").toggleClass(o + "body-fullscreen", e), a(t).trigger("scroll"), n.$c.trigger("tbw" + (e ? "open" : "close") + "fullscreen");
    }, execCmd: function execCmd(t, n, a, o) {
      var r = this;o = !!o || "", "dropdown" !== t && r.$ed.focus(), r.doc.execCommand("styleWithCSS", !1, a || !1);try {
        r[t + o](n);
      } catch (i) {
        try {
          t(n);
        } catch (s) {
          "insertHorizontalRule" === t ? n = void 0 : "formatBlock" !== t || -1 === e.userAgent.indexOf("MSIE") && -1 === e.appVersion.indexOf("Trident/") || (n = "<" + n + ">"), r.doc.execCommand(t, !1, n), r.syncCode(), r.semanticCode(!1, !0);
        }"dropdown" !== t && (r.updateButtonPaneStatus(), r.$c.trigger("tbwchange"));
      }
    }, openModal: function openModal(e, n) {
      var o = this,
          r = o.o.prefix;if (a("." + r + "modal-box", o.$box).length > 0) return !1;o.saveRange(), o.showOverlay(), o.$btnPane.addClass(r + "disable");var i = a("<div/>", { "class": r + "modal " + r + "fixed-top" }).css({ top: o.$btnPane.height() }).appendTo(o.$box);o.$overlay.one("click", function () {
        return i.trigger("tbwcancel"), !1;
      });var s = a("<form/>", { action: "", html: n }).on("submit", function () {
        return i.trigger("tbwconfirm"), !1;
      }).on("reset", function () {
        return i.trigger("tbwcancel"), !1;
      }),
          l = a("<div/>", { "class": r + "modal-box", html: s }).css({ top: "-" + o.$btnPane.outerHeight() + "px", opacity: 0 }).appendTo(i).animate({ top: 0, opacity: 1 }, 100);return a("<span/>", { text: e, "class": r + "modal-title" }).prependTo(l), i.height(l.outerHeight() + 10), a("input:first", l).focus(), o.buildModalBtn("submit", l), o.buildModalBtn("reset", l), a(t).trigger("scroll"), i;
    }, buildModalBtn: function buildModalBtn(e, t) {
      var n = this,
          o = n.o.prefix;return a("<button/>", { "class": o + "modal-button " + o + "modal-" + e, type: e, text: n.lang[e] || e }).appendTo(a("form", t));
    }, closeModal: function closeModal() {
      var e = this,
          t = e.o.prefix;e.$btnPane.removeClass(t + "disable"), e.$overlay.off();var n = a("." + t + "modal-box", e.$box);n.animate({ top: "-" + n.height() }, 100, function () {
        n.parent().remove(), e.hideOverlay();
      }), e.restoreRange();
    }, openModalInsert: function openModalInsert(e, t, n) {
      var o = this,
          r = o.o.prefix,
          i = o.lang,
          s = "",
          l = "tbwconfirm";return a.each(t, function (e, t) {
        var n = t.label,
            a = t.name || e;s += '<label><input type="' + (t.type || "text") + '" name="' + a + '" value="' + (t.value || "").replace(/"/g, "&quot;") + '"><span class="' + r + 'input-infos"><span>' + (n ? i[n] ? i[n] : n : i[e] ? i[e] : e) + "</span></span></label>";
      }), o.openModal(e, s).on(l, function () {
        var e = a("form", a(this)),
            r = !0,
            i = {};a.each(t, function (t, n) {
          var s = a('input[name="' + t + '"]', e);i[t] = a.trim(s.val()), n.required && "" === i[t] ? (r = !1, o.addErrorOnModalField(s, o.lang.required)) : n.pattern && !n.pattern.test(i[t]) && (r = !1, o.addErrorOnModalField(s, n.patternError));
        }), r && (o.restoreRange(), n(i, t) && (o.syncCode(), o.$c.trigger("tbwchange"), o.closeModal(), a(this).off(l)));
      }).one("tbwcancel", function () {
        a(this).off(l), o.closeModal();
      });
    }, addErrorOnModalField: function addErrorOnModalField(e, t) {
      var n = this.o.prefix,
          o = e.parent();e.on("change keyup", function () {
        o.removeClass(n + "input-error");
      }), o.addClass(n + "input-error").find("input+span").append(a("<span/>", { "class": n + "msg-error", text: t }));
    }, saveRange: function saveRange() {
      var e = this,
          t = e.doc.getSelection();if (e.range = null, t.rangeCount) {
        var n,
            a = e.range = t.getRangeAt(0),
            o = e.doc.createRange();o.selectNodeContents(e.$ed[0]), o.setEnd(a.startContainer, a.startOffset), n = (o + "").length, e.metaRange = { start: n, end: n + (a + "").length };
      }
    }, restoreRange: function restoreRange() {
      var e,
          t = this,
          n = t.metaRange,
          a = t.range,
          o = t.doc.getSelection();if (a) {
        if (n && n.start !== n.end) {
          var r,
              i = 0,
              s = [t.$ed[0]],
              l = !1,
              d = !1;for (e = t.doc.createRange(); !d && (r = s.pop());) {
            if (3 === r.nodeType) {
              var c = i + r.length;!l && n.start >= i && n.start <= c && (e.setStart(r, n.start - i), l = !0), l && n.end >= i && n.end <= c && (e.setEnd(r, n.end - i), d = !0), i = c;
            } else for (var u = r.childNodes, g = u.length; g > 0;) {
              g -= 1, s.push(u[g]);
            }
          }
        }o.removeAllRanges(), o.addRange(e || a);
      }
    }, getRangeText: function getRangeText() {
      return this.range + "";
    }, updateButtonPaneStatus: function updateButtonPaneStatus() {
      var e = this,
          t = e.o.prefix,
          n = e.getTagsRecursive(e.doc.getSelection().focusNode.parentNode),
          o = t + "active-button " + t + "active";a("." + t + "active-button", e.$btnPane).removeClass(o), a.each(n, function (n, r) {
        var i = e.tagToButton[r.toLowerCase()],
            s = a("." + t + i + "-button", e.$btnPane);if (s.length > 0) s.addClass(o);else try {
          s = a("." + t + "dropdown ." + t + i + "-dropdown-button", e.$box);var l = s.parent().data("dropdown");a("." + t + l + "-button", e.$box).addClass(o);
        } catch (d) {}
      });
    }, getTagsRecursive: function getTagsRecursive(e, t) {
      var n = this;t = t || [];var o = e.tagName;return "DIV" === o ? t : ("P" === o && "" !== e.style.textAlign && t.push(e.style.textAlign), a.each(n.tagHandlers, function (a, o) {
        t = t.concat(o(e, n));
      }), t.push(o), n.getTagsRecursive(e.parentNode, t));
    }, initPlugins: function initPlugins() {
      var e = this;e.loadedPlugins = [], a.each(a.trumbowyg.plugins, function (t, n) {
        (!n.shouldInit || n.shouldInit(e)) && (n.init(e), n.tagHandler && e.tagHandlers.push(n.tagHandler), e.loadedPlugins.push(n));
      });
    }, destroyPlugins: function destroyPlugins() {
      a.each(this.loadedPlugins, function (e, t) {
        t.destroy && t.destroy();
      });
    } };
}(navigator, window, document, jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.editor-cls {\r\n    width       : 100%;\r\n    height      : 200px;\r\n    font-size   : 14px;\r\n    line-height : 18px;\r\n    border      : 1px solid #dddddd;\r\n    padding     : 10px;\n}\n.pd-15 {\r\n    padding : 0 15px;\n}\r\n/*summer note */\n.note-editor.fullscreen {\r\n    margin  : 0;\r\n    z-index : 10009 !important;\r\n    margin-top: 51px;\n}\n.note-editor .dropdown-menu {\r\n    z-index : 40;\n}\n.tooltip {\r\n    z-index : 40;\n}\n.note-editable {\r\n    height : 300px;\r\n    width  : 100%;\n}\n[data-original-title=\"Font Family\"] {\r\n    width : 150px;\n}\n.well {\r\n    margin-bottom : 0;\n}\n.panel-default > .panel-heading {\r\n    border-color     : #a9b6bc;\r\n    background-color : #EBEBEB;\n}\n.flip_editing {\r\n    margin           : 0;\n}\n.trumbowyg-box.trumbowyg-fullscreen {\r\n    margin-top: 51px;\n}\n.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:hover {\r\n    background : #e6e6e6;\n}\n.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit {\r\n    background : #01bc8c;\n}\n.trumbowyg-modal-submit:hover {\r\n    background-color : #01BC8C !important;\n}\n.trumbowyg-box {\r\n    background-color : #fff;\n}\n.note-editor ul, .trumbowyg-box ul {\r\n    list-style-type : disc;\n}\n.modal .text-muted {\r\n    color : #333;\n}\r\n/*whysihtml*/\na[data-wysihtml5-command=\"insertImage\"],\r\n.wysihtml5-toolbar li:nth-child(5), .bootstrap-wysihtml5-insert-link-modal {\r\n    visibility: hidden;\n}\r\n/*summer note color picker dropdown rensponsive*/\n.checkbox input[type=\"checkbox\"],\r\n.checkbox-inline input[type=\"checkbox\"] {\r\n    position : relative;\r\n    margin   : 4px 5px;\n}\n@media screen and (max-width : 700px) {\n.panel-heading.note-toolbar .note-color .dropdown-menu {\r\n        min-width : 180px;\r\n        left      : -123px;\n}\n}\n@media screen and (max-width : 567px) {\n.note-editor.fullscreen, .trumbowyg-box.trumbowyg-fullscreen {\r\n        margin-top: 99px;\n}\n}\n@media screen and (max-width : 451px) {\n.panel-heading.note-toolbar .note-color .dropdown-menu {\r\n        left : -40px;\n}\n}\n@media screen and (max-width : 387px) {\n.panel-heading.note-toolbar .note-color .dropdown-menu {\r\n        left : -65px;\n}\n}\n.panel-heading.note-toolbar .note-para .dropdown-menu {\r\n    min-width : 152px;\n}\n@media screen and (max-width : 320px) {\n.trumbowyg-dropdown {\r\n        left : 50px !important;\n}\n}", ""]);

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "/** Trumbowyg v2.0.5 - A lightweight WYSIWYG editor - alex-d.github.io/Trumbowyg - License MIT - Author : Alexandre Demode (Alex-D) / alex-d.fr */\n#trumbowyg-icons,#trumbowyg-icons svg{height:0;width:0\n}\n#trumbowyg-icons{overflow:hidden;visibility:hidden\n}\n.trumbowyg-box *,.trumbowyg-box ::after,.trumbowyg-box ::before{box-sizing:border-box\n}\n.trumbowyg-box svg{width:17px;height:100%;fill:#222\n}\n.trumbowyg-box,.trumbowyg-editor{display:block;position:relative;border:1px solid #DDD;width:96%;min-height:300px;margin:17px auto\n}\n.trumbowyg-box .trumbowyg-editor{margin:0 auto\n}\n.trumbowyg-box.trumbowyg-fullscreen{background:#FEFEFE;border:none!important\n}\n.trumbowyg-editor,.trumbowyg-textarea{position:relative;box-sizing:border-box;padding:20px;min-height:300px;width:100%;border-style:none;resize:none;outline:0;overflow:auto\n}\n.trumbowyg-box-blur .trumbowyg-editor *,.trumbowyg-box-blur .trumbowyg-editor::before{color:transparent!important;text-shadow:0 0 7px #333\n}\n@media screen and (min-width:0\\0){\n.trumbowyg-box-blur .trumbowyg-editor *,.trumbowyg-box-blur .trumbowyg-editor::before{color:rgba(200,200,200,.6)!important\n}\n}\n@supports (-ms-accelerator:true){\n.trumbowyg-box-blur .trumbowyg-editor *,.trumbowyg-box-blur .trumbowyg-editor::before{color:rgba(200,200,200,.6)!important\n}\n}\n.trumbowyg-box-blur .trumbowyg-editor hr,.trumbowyg-box-blur .trumbowyg-editor img{opacity:.2\n}\n.trumbowyg-textarea{position:relative;display:block;overflow:auto;border:none;white-space:normal;font-size:14px;font-family:Inconsolata,Consolas,Courier,\"Courier New\",sans-serif;line-height:18px\n}\n.trumbowyg-box.trumbowyg-editor-visible .trumbowyg-textarea{height:1px!important;width:25%;min-height:0!important;padding:0!important;background:0 0;opacity:0\n}\n.trumbowyg-box.trumbowyg-editor-hidden .trumbowyg-textarea{display:block\n}\n.trumbowyg-box.trumbowyg-editor-hidden .trumbowyg-editor{display:none\n}\n.trumbowyg-editor[contenteditable=true]:empty::before{content:attr(placeholder);color:#999;pointer-events:none\n}\n.trumbowyg-button-pane{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;width:100%;min-height:36px;background:#ecf0f1;border-bottom:1px solid #d7e0e2;margin:0;padding:0 5px;list-style-type:none;line-height:10px;-webkit-backface-visibility:hidden;backface-visibility:hidden\n}\n.trumbowyg-button-pane::after{content:\" \";display:block;position:absolute;top:36px;left:0;right:0;width:100%;height:1px;background:#d7e0e2\n}\n.trumbowyg-button-pane .trumbowyg-button-group{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap\n}\n.trumbowyg-button-pane .trumbowyg-button-group .trumbowyg-fullscreen-button svg{color:transparent\n}\n.trumbowyg-button-pane .trumbowyg-button-group:not(:empty)+.trumbowyg-button-group::before{content:\" \";display:block;width:1px;background:#d7e0e2;margin:0 5px;height:35px\n}\n.trumbowyg-button-pane button{display:block;position:relative;width:35px;height:35px;padding:1px 6px!important;margin-bottom:1px;overflow:hidden;border:none;cursor:pointer;background:0 0;-webkit-transition:background-color 150ms,opacity 150ms;transition:background-color 150ms,opacity 150ms\n}\n.trumbowyg-button-pane.trumbowyg-disable button:not(.trumbowyg-not-disable):not(.trumbowyg-active){opacity:.2;cursor:default\n}\n.trumbowyg-button-pane.trumbowyg-disable .trumbowyg-button-group::before{background:#e3e9eb\n}\n.trumbowyg-button-pane button.trumbowyg-active,.trumbowyg-button-pane button:not(.trumbowyg-disable):focus,.trumbowyg-button-pane button:not(.trumbowyg-disable):hover{background-color:#FFF;outline:0\n}\n.trumbowyg-button-pane .trumbowyg-open-dropdown::after{display:block;content:\" \";position:absolute;top:25px;right:3px;height:0;width:0;border:3px solid transparent;border-top-color:#555\n}\n.trumbowyg-button-pane .trumbowyg-right{margin-left:auto\n}\n.trumbowyg-button-pane .trumbowyg-right::before{display:none!important\n}\n.trumbowyg-dropdown{width:200px;border:1px solid #ecf0f1;padding:5px 0;border-top:none;background:#FFF;margin-left:-1px;box-shadow:rgba(0,0,0,.1) 0 2px 3px\n}\n.trumbowyg-dropdown button{display:block;width:100%;height:35px;line-height:35px;text-decoration:none;background:#FFF;padding:0 10px;color:#333!important;border:none;cursor:pointer;text-align:left;font-size:15px;-webkit-transition:all 150ms;transition:all 150ms\n}\n.trumbowyg-dropdown button:focus,.trumbowyg-dropdown button:hover{background:#ecf0f1\n}\n.trumbowyg-dropdown button svg{float:left;margin-right:14px\n}\n.trumbowyg-modal{position:absolute;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);max-width:520px;width:100%;height:350px;z-index:11;overflow:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden\n}\n.trumbowyg-modal-box{position:absolute;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);max-width:500px;width:calc(100% - 20px);padding-bottom:45px;z-index:1;background-color:#FFF;text-align:center;font-size:14px;box-shadow:rgba(0,0,0,.2) 0 2px 3px;-webkit-backface-visibility:hidden;backface-visibility:hidden\n}\n.trumbowyg-modal-box .trumbowyg-modal-title{font-size:24px;font-weight:700;margin:0 0 20px;padding:15px 0 13px;display:block;border-bottom:1px solid #EEE;color:#333;background:#fbfcfc\n}\n.trumbowyg-modal-box .trumbowyg-progress{width:100%;height:3px;position:absolute;top:58px\n}\n.trumbowyg-modal-box .trumbowyg-progress .trumbowyg-progress-bar{background:#2BC06A;height:100%;-webkit-transition:width 150ms linear;transition:width 150ms linear\n}\n.trumbowyg-modal-box label{display:block;position:relative;margin:15px 12px;height:27px;line-height:27px;overflow:hidden\n}\n.trumbowyg-modal-box label .trumbowyg-input-infos{display:block;text-align:left;height:25px;line-height:25px;-webkit-transition:all 150ms;transition:all 150ms\n}\n.trumbowyg-modal-box label .trumbowyg-input-infos span{display:block;color:#69878f;background-color:#fbfcfc;border:1px solid #DEDEDE;padding:0 7px;width:150px\n}\n.trumbowyg-modal-box label .trumbowyg-input-infos span.trumbowyg-msg-error{color:#e74c3c\n}\n.trumbowyg-modal-box label.trumbowyg-input-error input,.trumbowyg-modal-box label.trumbowyg-input-error textarea{border:1px solid #e74c3c\n}\n.trumbowyg-modal-box label.trumbowyg-input-error .trumbowyg-input-infos{margin-top:-27px\n}\n.trumbowyg-modal-box label input{position:absolute;top:0;right:0;height:27px;line-height:27px;border:1px solid #DEDEDE;background:#fff;font-size:14px;max-width:330px;width:70%;padding:0 7px;-webkit-transition:all 150ms;transition:all 150ms\n}\n.trumbowyg-modal-box label input:focus,.trumbowyg-modal-box label input:hover{outline:0;border:1px solid #95a5a6\n}\n.trumbowyg-modal-box label input:focus{background:#fbfcfc\n}\n.trumbowyg-modal-box .error{margin-top:25px;display:block;color:red\n}\n.trumbowyg-modal-box .trumbowyg-modal-button{position:absolute;bottom:10px;right:0;text-decoration:none;color:#FFF;display:block;width:100px;height:35px;line-height:33px;margin:0 10px;background-color:#333;border:none;cursor:pointer;font-family:\"Trebuchet MS\",Helvetica,Verdana,sans-serif;font-size:16px;-webkit-transition:all 150ms;transition:all 150ms\n}\n.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit{right:110px;background:#2bc06a\n}\n.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:focus,.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:hover{background:#40d47e;outline:0\n}\n.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:active{background:#25a25a\n}\n.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset{color:#555;background:#e6e6e6\n}\n.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:focus,.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:hover{background:#fbfbfb;outline:0\n}\n.trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:active{background:#d5d5d5\n}\n.trumbowyg-overlay{position:absolute;background-color:rgba(255,255,255,.5);width:100%;left:0;display:none;z-index:10\n}\nbody.trumbowyg-body-fullscreen{overflow:hidden\n}\n.trumbowyg-fullscreen{position:fixed;top:0;left:0;width:100%;height:100%;margin:0;padding:0;z-index:99999\n}\n.trumbowyg-fullscreen .trumbowyg-editor,.trumbowyg-fullscreen.trumbowyg-box{border:none\n}\n.trumbowyg-fullscreen .trumbowyg-editor,.trumbowyg-fullscreen .trumbowyg-textarea{height:calc(100% - 37px)!important;overflow:auto\n}\n.trumbowyg-fullscreen .trumbowyg-overlay{height:100%!important\n}\n.trumbowyg-fullscreen .trumbowyg-button-group .trumbowyg-fullscreen-button svg{color:#222;fill:transparent\n}\n.trumbowyg-editor embed,.trumbowyg-editor img,.trumbowyg-editor object,.trumbowyg-editor video{max-width:100%\n}\n.trumbowyg-editor img,.trumbowyg-editor video{height:auto\n}\n.trumbowyg-editor img{cursor:move\n}\n.trumbowyg-editor.trumbowyg-reset-css{background:#FEFEFE!important;font-family:\"Trebuchet MS\",Helvetica,Verdana,sans-serif!important;font-size:14px!important;line-height:1.45em!important;white-space:normal!important;color:#333\n}\n.trumbowyg-editor.trumbowyg-reset-css a{color:#15c!important;text-decoration:underline!important\n}\n.trumbowyg-editor.trumbowyg-reset-css blockquote,.trumbowyg-editor.trumbowyg-reset-css div,.trumbowyg-editor.trumbowyg-reset-css ol,.trumbowyg-editor.trumbowyg-reset-css p,.trumbowyg-editor.trumbowyg-reset-css ul{box-shadow:none!important;background:0 0!important;margin:0 0 15px!important;line-height:1.4em!important;font-family:\"Trebuchet MS\",Helvetica,Verdana,sans-serif!important;font-size:14px!important;border:none\n}\n.trumbowyg-editor.trumbowyg-reset-css hr,.trumbowyg-editor.trumbowyg-reset-css iframe,.trumbowyg-editor.trumbowyg-reset-css object{margin-bottom:15px!important\n}\n.trumbowyg-editor.trumbowyg-reset-css blockquote{margin-left:32px!important;font-style:italic!important;color:#555\n}\n.trumbowyg-editor.trumbowyg-reset-css ol,.trumbowyg-editor.trumbowyg-reset-css ul{padding-left:20px!important\n}\n.trumbowyg-editor.trumbowyg-reset-css ol ol,.trumbowyg-editor.trumbowyg-reset-css ol ul,.trumbowyg-editor.trumbowyg-reset-css ul ol,.trumbowyg-editor.trumbowyg-reset-css ul ul{border:none;margin:2px!important;padding:0 0 0 24px!important\n}\n.trumbowyg-editor.trumbowyg-reset-css hr{display:block;height:1px;border:none;border-top:1px solid #CCC\n}\n.trumbowyg-editor.trumbowyg-reset-css h1,.trumbowyg-editor.trumbowyg-reset-css h2,.trumbowyg-editor.trumbowyg-reset-css h3,.trumbowyg-editor.trumbowyg-reset-css h4{color:#111;background:0 0;margin:0!important;padding:0!important;font-weight:700\n}\n.trumbowyg-editor.trumbowyg-reset-css h1{font-size:32px!important;line-height:38px!important;margin-bottom:20px!important\n}\n.trumbowyg-editor.trumbowyg-reset-css h2{font-size:26px!important;line-height:34px!important;margin-bottom:15px!important\n}\n.trumbowyg-editor.trumbowyg-reset-css h3{font-size:22px!important;line-height:28px!important;margin-bottom:7px!important\n}\n.trumbowyg-editor.trumbowyg-reset-css h4{font-size:16px!important;line-height:22px!important;margin-bottom:7px!important\n}\n.trumbowyg-dark .trumbowyg-textarea{background:#111;color:#ddd\n}\n.trumbowyg-dark .trumbowyg-box{border:1px solid #343434\n}\n.trumbowyg-dark .trumbowyg-box.trumbowyg-fullscreen{background:#111\n}\n.trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor *,.trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor::before{text-shadow:0 0 7px #ccc\n}\n@media screen and (min-width:0\\0){\n.trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor *,.trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor::before{color:rgba(20,20,20,.6)!important\n}\n}\n@supports (-ms-accelerator:true){\n.trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor *,.trumbowyg-dark .trumbowyg-box.trumbowyg-box-blur .trumbowyg-editor::before{color:rgba(20,20,20,.6)!important\n}\n}\n.trumbowyg-dark .trumbowyg-box svg{fill:#ecf0f1;color:#ecf0f1\n}\n.trumbowyg-dark .trumbowyg-button-pane{background-color:#222;border-bottom-color:#343434\n}\n.trumbowyg-dark .trumbowyg-button-pane::after{background:#343434\n}\n.trumbowyg-dark .trumbowyg-button-pane .trumbowyg-button-group:not(:empty)::before{background-color:#343434\n}\n.trumbowyg-dark .trumbowyg-button-pane .trumbowyg-button-group:not(:empty) .trumbowyg-fullscreen-button svg{color:transparent\n}\n.trumbowyg-dark .trumbowyg-button-pane.trumbowyg-disable .trumbowyg-button-group::before{background-color:#2a2a2a\n}\n.trumbowyg-dark .trumbowyg-button-pane button.trumbowyg-active,.trumbowyg-dark .trumbowyg-button-pane button:not(.trumbowyg-disable):focus,.trumbowyg-dark .trumbowyg-button-pane button:not(.trumbowyg-disable):hover{background-color:#333\n}\n.trumbowyg-dark .trumbowyg-button-pane .trumbowyg-open-dropdown::after{border-top-color:#fff\n}\n.trumbowyg-dark .trumbowyg-fullscreen .trumbowyg-button-group .trumbowyg-fullscreen-button svg{color:#ecf0f1;fill:transparent\n}\n.trumbowyg-dark .trumbowyg-dropdown{border-color:#222;background:#333;box-shadow:rgba(0,0,0,.3) 0 2px 3px\n}\n.trumbowyg-dark .trumbowyg-dropdown button{background:#333;color:#fff!important\n}\n.trumbowyg-dark .trumbowyg-dropdown button:focus,.trumbowyg-dark .trumbowyg-dropdown button:hover{background:#222\n}\n.trumbowyg-dark .trumbowyg-modal-box{background-color:#222\n}\n.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-title{border-bottom:1px solid #555;color:#fff;background:#3c3c3c\n}\n.trumbowyg-dark .trumbowyg-modal-box label{display:block;position:relative;margin:15px 12px;height:27px;line-height:27px;overflow:hidden\n}\n.trumbowyg-dark .trumbowyg-modal-box label .trumbowyg-input-infos span{color:#eee;background-color:#2f2f2f;border-color:#222\n}\n.trumbowyg-dark .trumbowyg-modal-box label .trumbowyg-input-infos span.trumbowyg-msg-error{color:#e74c3c\n}\n.trumbowyg-dark .trumbowyg-modal-box label.trumbowyg-input-error input,.trumbowyg-dark .trumbowyg-modal-box label.trumbowyg-input-error textarea{border-color:#e74c3c\n}\n.trumbowyg-dark .trumbowyg-modal-box label input{border-color:#222;color:#eee;background:#333\n}\n.trumbowyg-dark .trumbowyg-modal-box label input:focus,.trumbowyg-dark .trumbowyg-modal-box label input:hover{border-color:#626262\n}\n.trumbowyg-dark .trumbowyg-modal-box label input:focus{background-color:#2f2f2f\n}\n.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit{background:#1b7943\n}\n.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:focus,.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:hover{background:#25a25a\n}\n.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-submit:active{background:#176437\n}\n.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset{background:#333;color:#ccc\n}\n.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:focus,.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:hover{background:#444\n}\n.trumbowyg-dark .trumbowyg-modal-box .trumbowyg-modal-button.trumbowyg-modal-reset:active{background:#111\n}\n.trumbowyg-dark .trumbowyg-overlay{background-color:rgba(15,15,15,.6)\n}", ""]);

/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('div', {
    staticClass: " bootstrap-admin-box-title "
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_vm._v("\n                        Flip Editor")])])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "bootstrap-admin-panel-content flip_editing"
  }, [_c('textarea', {
    attrs: {
      "id": "split_editor"
    }
  })])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-aa4a10c6", module.exports)
  }
}

/***/ })

});