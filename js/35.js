webpackJsonp([35],{

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(670);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("fee082da", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-65a4f3c6!./toastr_notificatons.css", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-65a4f3c6!./toastr_notificatons.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1006:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(671);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("668c400d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-65a4f3c6!./toastr.min.css", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-65a4f3c6!./toastr.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1006)
__webpack_require__(1005)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(460),
  /* template */
  __webpack_require__(864),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/vanessap/Documents/Projects/vue-dashboard2/src/components/toastr_notifications.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] toastr_notifications.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65a4f3c6", Component.options)
  } else {
    hotAPI.reload("data-v-65a4f3c6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function (e) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (e) {
    return function () {
      function t(e, t, n) {
        return g({ type: O.error, iconClass: m().iconClasses.error, message: e, optionsOverride: n, title: t });
      }function n(t, n) {
        return t || (t = m()), v = e("#" + t.containerId), v.length ? v : (n && (v = d(t)), v);
      }function o(e, t, n) {
        return g({ type: O.info, iconClass: m().iconClasses.info, message: e, optionsOverride: n, title: t });
      }function s(e) {
        C = e;
      }function i(e, t, n) {
        return g({ type: O.success, iconClass: m().iconClasses.success, message: e, optionsOverride: n, title: t });
      }function a(e, t, n) {
        return g({ type: O.warning, iconClass: m().iconClasses.warning, message: e, optionsOverride: n, title: t });
      }function r(e, t) {
        var o = m();v || n(o), u(e, o, t) || l(o);
      }function c(t) {
        var o = m();return v || n(o), t && 0 === e(":focus", t).length ? void h(t) : void (v.children().length && v.remove());
      }function l(t) {
        for (var n = v.children(), o = n.length - 1; o >= 0; o--) {
          u(e(n[o]), t);
        }
      }function u(t, n, o) {
        var s = !(!o || !o.force) && o.force;return !(!t || !s && 0 !== e(":focus", t).length) && (t[n.hideMethod]({ duration: n.hideDuration, easing: n.hideEasing, complete: function complete() {
            h(t);
          } }), !0);
      }function d(t) {
        return v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass), v.appendTo(e(t.target)), v;
      }function p() {
        return { tapToDismiss: !0, toastClass: "toast", containerId: "toast-container", debug: !1, showMethod: "fadeIn", showDuration: 300, showEasing: "swing", onShown: void 0, hideMethod: "fadeOut", hideDuration: 1e3, hideEasing: "swing", onHidden: void 0, closeMethod: !1, closeDuration: !1, closeEasing: !1, closeOnHover: !0, extendedTimeOut: 1e3, iconClasses: { error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning" }, iconClass: "toast-info", positionClass: "toast-top-right", timeOut: 5e3, titleClass: "toast-title", messageClass: "toast-message", escapeHtml: !1, target: "body", closeHtml: '<button type="button">&times;</button>', closeClass: "toast-close-button", newestOnTop: !0, preventDuplicates: !1, progressBar: !1, progressClass: "toast-progress", rtl: !1 };
      }function f(e) {
        C && C(e);
      }function g(t) {
        function o(e) {
          return null == e && (e = ""), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }function s() {
          c(), u(), d(), p(), g(), C(), l(), i();
        }function i() {
          var e = "";switch (t.iconClass) {case "toast-success":case "toast-info":
              e = "polite";break;default:
              e = "assertive";}I.attr("aria-live", e);
        }function a() {
          E.closeOnHover && I.hover(H, D), !E.onclick && E.tapToDismiss && I.click(b), E.closeButton && j && j.click(function (e) {
            e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && e.cancelBubble !== !0 && (e.cancelBubble = !0), E.onCloseClick && E.onCloseClick(e), b(!0);
          }), E.onclick && I.click(function (e) {
            E.onclick(e), b();
          });
        }function r() {
          I.hide(), I[E.showMethod]({ duration: E.showDuration, easing: E.showEasing, complete: E.onShown }), E.timeOut > 0 && (k = setTimeout(b, E.timeOut), F.maxHideTime = parseFloat(E.timeOut), F.hideEta = new Date().getTime() + F.maxHideTime, E.progressBar && (F.intervalId = setInterval(x, 10)));
        }function c() {
          t.iconClass && I.addClass(E.toastClass).addClass(y);
        }function l() {
          E.newestOnTop ? v.prepend(I) : v.append(I);
        }function u() {
          if (t.title) {
            var e = t.title;E.escapeHtml && (e = o(t.title)), M.append(e).addClass(E.titleClass), I.append(M);
          }
        }function d() {
          if (t.message) {
            var e = t.message;E.escapeHtml && (e = o(t.message)), B.append(e).addClass(E.messageClass), I.append(B);
          }
        }function p() {
          E.closeButton && (j.addClass(E.closeClass).attr("role", "button"), I.prepend(j));
        }function g() {
          E.progressBar && (q.addClass(E.progressClass), I.prepend(q));
        }function C() {
          E.rtl && I.addClass("rtl");
        }function O(e, t) {
          if (e.preventDuplicates) {
            if (t.message === w) return !0;w = t.message;
          }return !1;
        }function b(t) {
          var n = t && E.closeMethod !== !1 ? E.closeMethod : E.hideMethod,
              o = t && E.closeDuration !== !1 ? E.closeDuration : E.hideDuration,
              s = t && E.closeEasing !== !1 ? E.closeEasing : E.hideEasing;if (!e(":focus", I).length || t) return clearTimeout(F.intervalId), I[n]({ duration: o, easing: s, complete: function complete() {
              h(I), clearTimeout(k), E.onHidden && "hidden" !== P.state && E.onHidden(), P.state = "hidden", P.endTime = new Date(), f(P);
            } });
        }function D() {
          (E.timeOut > 0 || E.extendedTimeOut > 0) && (k = setTimeout(b, E.extendedTimeOut), F.maxHideTime = parseFloat(E.extendedTimeOut), F.hideEta = new Date().getTime() + F.maxHideTime);
        }function H() {
          clearTimeout(k), F.hideEta = 0, I.stop(!0, !0)[E.showMethod]({ duration: E.showDuration, easing: E.showEasing });
        }function x() {
          var e = (F.hideEta - new Date().getTime()) / F.maxHideTime * 100;q.width(e + "%");
        }var E = m(),
            y = t.iconClass || E.iconClass;if ("undefined" != typeof t.optionsOverride && (E = e.extend(E, t.optionsOverride), y = t.optionsOverride.iconClass || y), !O(E, t)) {
          T++, v = n(E, !0);var k = null,
              I = e("<div/>"),
              M = e("<div/>"),
              B = e("<div/>"),
              q = e("<div/>"),
              j = e(E.closeHtml),
              F = { intervalId: null, hideEta: null, maxHideTime: null },
              P = { toastId: T, state: "visible", startTime: new Date(), options: E, map: t };return s(), r(), a(), f(P), E.debug && console && console.log(P), I;
        }
      }function m() {
        return e.extend({}, p(), b.options);
      }function h(e) {
        v || (v = n()), e.is(":visible") || (e.remove(), e = null, 0 === v.children().length && (v.remove(), w = void 0));
      }var v,
          C,
          w,
          T = 0,
          O = { error: "error", info: "info", success: "success", warning: "warning" },
          b = { clear: r, remove: c, error: t, getContainer: n, info: o, options: {}, subscribe: s, success: i, version: "2.1.3", warning: a };return b;
    }();
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}(__webpack_require__(280));
//# sourceMappingURL=toastr.js.map

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js__);
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
    name: "toastr_notification",
    mounted: function mounted() {
        "use strict";

        $(document).ready(function () {
            var i = -1;
            var toastCount = 0;
            var $toastlast;

            var getMessage = function getMessage() {
                var msgs = ['My name is Inigo Montoya. You killed my father. Prepare to die!', '<div><input class="input-small" value="textbox"/>&nbsp;<a href="http://johnpapa.net" target="_blank">This is a hyperlink</a></div><div><button type="button" id="okBtn" class="btn btn-primary">Close me</button><button type="button" id="surpriseBtn" class="btn" style="margin: 0 8px 0 8px">Surprise me</button></div>', 'Are you the six fingered man?', 'Inconceivable!', 'I do not think that means what you think it means.', 'Have fun storming the castle!'];
                i++;
                if (i === msgs.length) {
                    i = 0;
                }

                return msgs[i];
            };

            var getMessageWithClearButton = function getMessageWithClearButton(msg) {
                msg = msg ? msg : 'Clear itself?';
                msg += '<br /><br /><button type="button" class="btn clear">Yes</button>';
                return msg;
            };

            $('#showtoast').on('click', function () {
                var shortCutFunction = $("#toastTypeGroup").find('input:radio:checked').val();
                var msg = $('#message').val();
                var title = $('#title').val() || '';
                var $showDuration = $('#showDuration');
                var $hideDuration = $('#hideDuration');
                var $timeOut = $('#timeOut');
                var $extendedTimeOut = $('#extendedTimeOut');
                var $showEasing = $('#showEasing');
                var $hideEasing = $('#hideEasing');
                var $showMethod = $('#showMethod');
                var $hideMethod = $('#hideMethod');
                var toastIndex = toastCount++;
                var addClear = $('#addClear').prop('checked');

                __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default.a.options = {
                    closeButton: $('#closeButton').prop('checked'),
                    debug: $('#debugInfo').prop('checked'),
                    newestOnTop: $('#newestOnTop').prop('checked'),
                    progressBar: $('#progressBar').prop('checked'),
                    positionClass: $('#positionGroup').find('input:radio:checked').val() || 'toast-top-right',
                    preventDuplicates: $('#preventDuplicates').prop('checked'),
                    onclick: null
                };

                if ($('#addBehaviorOnToastClick').prop('checked')) {
                    __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default.a.options.onclick = function () {
                        alert('You can perform some custom action after a toast goes away');
                    };
                }

                if ($showDuration.val().length) {
                    __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default.a.options.showDuration = $showDuration.val();
                }

                if ($hideDuration.val().length) {
                    __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default.a.options.hideDuration = $hideDuration.val();
                }

                if ($timeOut.val().length) {
                    __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default.a.options.timeOut = addClear ? 0 : $timeOut.val();
                }

                if ($extendedTimeOut.val().length) {
                    __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default.a.options.extendedTimeOut = addClear ? 0 : $extendedTimeOut.val();
                }

                if ($showEasing.val().length) {
                    __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default.a.options.showEasing = $showEasing.val();
                }

                if ($hideEasing.val().length) {
                    __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default.a.options.hideEasing = $hideEasing.val();
                }

                if ($showMethod.val().length) {
                    __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default.a.options.showMethod = $showMethod.val();
                }

                if ($hideMethod.val().length) {
                    __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default.a.options.hideMethod = $hideMethod.val();
                }

                if (addClear) {
                    msg = getMessageWithClearButton(msg);
                    __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default.a.options.tapToDismiss = false;
                }
                if (!msg) {
                    msg = getMessage();
                }
                $('#toastrOptions').show().text('Command: toastr["' + shortCutFunction + '"]("' + msg + (title ? '", "' + title : '') + '")\n\ntoastr.options = ' + JSON.stringify(__WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default.a.options, null, 2));

                var $toast = __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default.a[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
                $toastlast = $toast;

                if (typeof $toast === 'undefined') {
                    return;
                }

                if ($toast.find('#okBtn').length) {
                    $toast.delegate('#okBtn', 'click', function () {
                        alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
                        $toast.remove();
                    });
                }
                if ($toast.find('#surpriseBtn').length) {
                    $toast.delegate('#surpriseBtn', 'click', function () {
                        alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
                    });
                }
                if ($toast.find('.clear').length) {
                    $toast.delegate('.clear', 'click', function () {
                        __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default.a.clear($toast, {
                            force: true
                        });
                    });
                }
            });

            // toaster position radio function with select option
            $('#position-change').on('change', function () {
                var position = $("select[name=toast-position]").val();
                $('.custom-radio')[position].checked = true;

                // To toggle the effect on top and bottom effect variation

                if ($(this).val() > 3) {
                    $("#showMethod").find('option:eq(2)').text("slideUp");
                    $("#hideMethod").find('option:eq(2)').text("slideDown");
                } else {
                    $("#showMethod").find('option:eq(2)').text("slideDown");
                    $("#hideMethod").find('option:eq(2)').text("slideUp");
                }
            });
            $("select[name=toast-position]:eq(0)").on('change', function (event) {
                var btns = $('#positionGroup').find('.custom-radio');
                btns[event.target.value].checked = true;
            });
            // toaster position ends

            function getLastToast() {
                return $toastlast;
            }

            $('#clearlasttoast').on('click', function () {
                __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default.a.clear(getLastToast());
            });
            $('#cleartoasts').on('click', function () {
                __WEBPACK_IMPORTED_MODULE_0__vendors_toastr_toastr_min_js___default.a.clear();
            });

            $('#toastrOptions').hide();
            $(".content .row").find('input').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_minimal-blue',
                increaseArea: '20%'
            });
        });
    },
    destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.btn {\r\n    padding: 6px 4px;\n}\n.btn.clear {\r\n    color: #333;\n}\n.toast-success {\r\n    background-color: #66cc99;\n}\n.toast-info {\r\n    background-color: #66ccff;\n}\n.toast-error {\r\n    background-color: #ff6666;\n}\n.toast-warning {\r\n    background-color: #f0ad4e;\n}\n.text-info.message {\r\n    margin-bottom: 20px;\n}\r\n\r\n\r\n/* buttons xs responsive*/\n@media only screen and (max-width: 480px) {\n.toastrshow {\r\n        margin-top: 10px;\n}\n}\r\n\r\n\r\n/*notification.html*/\n.notify_page .btn {\r\n    margin-top: 20px;\n}\ntextarea {\r\n    resize: vertical;\n}\r\n\r\n\r\n/*outline buttons*/\n.btn-outline-default,\r\n.btn-outline-default:hover,\r\n.btn-outline-default:focus {\r\n    background-color: rgba(220, 220, 220, .1);\r\n    border: 1px solid #dcdcdc;\r\n    color: #dcdcdc;\r\n    border-radius: 2px;\n}\n.btn-outline-primary,\r\n.btn-outline-primary:hover,\r\n.btn-outline-primary:focus {\r\n    background-color: rgba(66, 139, 202, .1);\r\n    border: 1px solid #6699cc;\r\n    color: #6699cc;\r\n    border-radius: 2px;\n}\n.ui-pnotify .alert-primary {\r\n    background-color: rgba(102, 153, 204, 1);\r\n    border: 1px solid #0069C4;\n}\n.btn-outline-success,\r\n.btn-outline-success:hover,\r\n.btn-outline-success:focus {\r\n    background-color: rgba(34, 214, 157, .1);\r\n    border: 1px solid #66cc99;\r\n    color: #66cc99;\r\n    border-radius: 2px;\n}\n.ui-pnotify .alert-success {\r\n    background-color: rgba(102, 204, 153, 1);\r\n    border: 1px solid #66cc99;\n}\n.btn-outline-info,\r\n.btn-outline-info:hover,\r\n.btn-outline-info:focus {\r\n    background-color: rgba(79, 193, 233, .1);\r\n    border: 1px solid #66ccff;\r\n    color: #66ccff;\r\n    border-radius: 2px;\n}\n.ui-pnotify .alert-info {\r\n    background-color: rgba(102, 204, 255, 1);\r\n    border: 1px solid #66ccff;\n}\n.btn-outline-danger,\r\n.btn-outline-danger:hover,\r\n.btn-outline-danger:focus {\r\n    background-color: rgba(251, 134, 120, .1);\r\n    border: 1px solid #ff6666;\r\n    color: #ff6666;\r\n    border-radius: 2px;\n}\n.ui-pnotify .alert-danger {\r\n    background-color: rgba(255, 102, 102, 1);\r\n    border: 1px solid #ff6666;\n}\n.btn-outline-warning,\r\n.btn-outline-warning:hover,\r\n.btn-outline-warning:focus {\r\n    background-color: rgba(255, 182, 95, .1);\r\n    border: 1px solid #ffcc66;\r\n    color: #ffcc66;\r\n    border-radius: 2px;\n}\n.ui-pnotify .alert-warning {\r\n    background-color: rgba(240, 173, 78, 1);\r\n    border: 1px solid #f0ad4e;\n}\n.source {\r\n    width: 80%;\n}\n.notif-types {\r\n    margin: 0 0 18px 0;\r\n    border: 1px solid #eee;\r\n    padding-bottom: 19px;\r\n    border-radius: 2px;\n}\n.m-t-30 {\r\n    margin-top: 30px;\n}\n.m-t-35 {\r\n    margin-top: 35px;\n}\n.ui-pnotify.translucent.ui-pnotify-fade-in {\r\n    opacity: .8;\n}\r\n\r\n\r\n/* Notification Responsive */\n@media only screen and (max-width: 767px) {\nhtml > body > .ui-pnotify {\r\n        bottom: auto !important;\r\n        left: 0 !important;\r\n        margin: 0 !important;\r\n        right: 0 !important;\r\n        top: 60px !important;\r\n        width: auto !important;\n}\nhtml > body > .ui-pnotify .notification {\r\n        border-radius: 0 !important;\r\n        height: auto !important;\r\n        position: static !important;\r\n        width: 100%;\n}\nhtml > body > .ui-pnotify .notification .ui-pnotify-title,\r\n    html > body > .ui-pnotify .notification .ui-pnotify-text {\r\n        padding-right: 35px !important;\n}\nhtml > body > .ui-pnotify .notification .ui-pnotify-sticker {\r\n        display: none !important;\n}\nhtml > body > .ui-pnotify .notification .ui-pnotify-closer {\r\n        display: block !important;\r\n        font-size: 24px !important;\r\n        visibility: visible !important;\n}\n}\r\n", ""]);

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.toast-title{font-weight:700\n}\n.toast-message{-ms-word-wrap:break-word;word-wrap:break-word\n}\n.toast-message a,.toast-message label{color:#FFF\n}\n.toast-message a:hover{color:#CCC;text-decoration:none\n}\n.toast-close-button{position:relative;right:-.3em;top:-.3em;float:right;font-size:20px;font-weight:700;color:#FFF;-webkit-text-shadow:0 1px 0 #fff;text-shadow:0 1px 0 #fff;opacity:.8;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=80);filter:alpha(opacity=80);line-height:1\n}\n.toast-close-button:focus,.toast-close-button:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.4;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=40);filter:alpha(opacity=40)\n}\n.rtl .toast-close-button{left:-.3em;float:left;right:.3em\n}\nbutton.toast-close-button{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none\n}\n.toast-top-center{top:0;right:0;width:100%\n}\n.toast-bottom-center{bottom:0;right:0;width:100%\n}\n.toast-top-full-width{top:0;right:0;width:100%\n}\n.toast-bottom-full-width{bottom:0;right:0;width:100%\n}\n.toast-top-left{top:12px;left:12px\n}\n.toast-top-right{top:12px;right:12px\n}\n.toast-bottom-right{right:12px;bottom:12px\n}\n.toast-bottom-left{bottom:12px;left:12px\n}\n#toast-container{position:fixed;z-index:999999;pointer-events:none\n}\n#toast-container *{box-sizing:border-box\n}\n#toast-container>div{position:relative;pointer-events:auto;overflow:hidden;margin:0 0 6px;padding:15px 15px 15px 50px;width:300px;border-radius:3px;background-position:15px center;background-repeat:no-repeat;box-shadow:0 0 12px #999;color:#FFF;opacity:.8;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=80);filter:alpha(opacity=80)\n}\n#toast-container>div.rtl{direction:rtl;padding:15px 50px 15px 15px;background-position:right 15px center\n}\n#toast-container>div:hover{box-shadow:0 0 12px #000;opacity:1;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);filter:alpha(opacity=100);cursor:pointer\n}\n#toast-container>.toast-info{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=)!important\n}\n#toast-container>.toast-error{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=)!important\n}\n#toast-container>.toast-success{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==)!important\n}\n#toast-container>.toast-warning{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=)!important\n}\n#toast-container.toast-bottom-center>div,#toast-container.toast-top-center>div{width:300px;margin-left:auto;margin-right:auto\n}\n#toast-container.toast-bottom-full-width>div,#toast-container.toast-top-full-width>div{width:96%;margin-left:auto;margin-right:auto\n}\n.toast{background-color:#030303\n}\n.toast-success{background-color:#51A351\n}\n.toast-error{background-color:#BD362F\n}\n.toast-info{background-color:#2F96B4\n}\n.toast-warning{background-color:#F89406\n}\n.toast-progress{position:absolute;left:0;bottom:0;height:4px;background-color:#000;opacity:.4;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=40);filter:alpha(opacity=40)\n}\n@media all and (max-width:240px){\n#toast-container>div{padding:8px 8px 8px 50px;width:11em\n}\n#toast-container>div.rtl{padding:8px 50px 8px 8px\n}\n#toast-container .toast-close-button{right:-.2em;top:-.2em\n}\n#toast-container .rtl .toast-close-button{left:-.2em;right:.2em\n}\n}\n@media all and (min-width:241px) and (max-width:480px){\n#toast-container>div{padding:8px 8px 8px 50px;width:18em\n}\n#toast-container>div.rtl{padding:8px 50px 8px 8px\n}\n#toast-container .toast-close-button{right:-.2em;top:-.2em\n}\n#toast-container .rtl .toast-close-button{left:-.2em;right:.2em\n}\n}\n@media all and (min-width:481px) and (max-width:768px){\n#toast-container>div{padding:15px 15px 15px 50px;width:25em\n}\n#toast-container>div.rtl{padding:15px 50px 15px 15px\n}\n}", ""]);

/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-bell"
  }), _vm._v(" Toastr Notifications\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "portlet-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h4', [_c('i', {
    staticClass: "fa fa-fw ti-info-alt text-info message"
  }), _vm._v(" When changing\n                                        toastr position clear all toasts to see the effect")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "title"
    }
  }, [_c('b', [_vm._v("Title")])]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "id": "title",
      "type": "text",
      "value": "Toastr Notifications",
      "placeholder": "Enter a title ..."
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "message"
    }
  }, [_c('b', [_vm._v("Message")])]), _vm._v(" "), _c('textarea', {
    staticClass: "form-control resize_vertical",
    attrs: {
      "id": "message",
      "rows": "3",
      "placeholder": "Enter a message ..."
    }
  }, [_vm._v("Gnome & Growl type non-blocking notifications")])]), _vm._v(" "), _c('form', [_c('div', {
    staticClass: "form-group",
    attrs: {
      "id": "positionGroup"
    }
  }, [_c('label', {
    staticClass: "position-type"
  }, [_c('b', [_vm._v("Toaster Position")])]), _vm._v(" "), _c('select', {
    staticClass: "form-control",
    attrs: {
      "name": "toast-position",
      "id": "position-change"
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("Top Left")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1",
      "selected": ""
    }
  }, [_vm._v("Top Right")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("Top Center")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("Top Full Width")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("Bottom Left")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "5"
    }
  }, [_vm._v("Bottom Right")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "6"
    }
  }, [_vm._v("Bottom Center")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "7"
    }
  }, [_vm._v("Bottom Full Width")])]), _vm._v(" "), _c('div', {
    attrs: {
      "hidden": ""
    }
  }, [_c('div', [_c('label', [_c('input', {
    staticClass: "custom-radio",
    attrs: {
      "type": "radio",
      "name": "positions",
      "value": "toast-top-left"
    }
  }), _vm._v(" Top Left\n                                                ")])]), _vm._v(" "), _c('div', [_c('label', [_c('input', {
    staticClass: "custom-radio",
    attrs: {
      "type": "radio",
      "name": "positions",
      "value": "toast-top-right",
      "checked": ""
    }
  }), _vm._v(" Top Right\n                                                ")])]), _vm._v(" "), _c('div', [_c('label', [_c('input', {
    staticClass: "custom-radio",
    attrs: {
      "type": "radio",
      "name": "positions",
      "value": "toast-top-center"
    }
  }), _vm._v(" Top Center\n                                                ")])]), _vm._v(" "), _c('div', [_c('label', [_c('input', {
    staticClass: "custom-radio",
    attrs: {
      "type": "radio",
      "name": "positions",
      "value": "toast-top-full-width"
    }
  }), _vm._v(" Top Full Width\n                                                ")])]), _vm._v(" "), _c('div', [_c('label', [_c('input', {
    staticClass: "custom-radio",
    attrs: {
      "type": "radio",
      "name": "positions",
      "value": "toast-bottom-left"
    }
  }), _vm._v(" Bottom Left\n                                                ")])]), _vm._v(" "), _c('div', [_c('label', [_c('input', {
    staticClass: "custom-radio",
    attrs: {
      "type": "radio",
      "name": "positions",
      "value": "toast-bottom-right"
    }
  }), _vm._v(" Bottom Right\n                                                ")])]), _vm._v(" "), _c('div', [_c('label', [_c('input', {
    staticClass: "custom-radio",
    attrs: {
      "type": "radio",
      "name": "positions",
      "value": "toast-bottom-center"
    }
  }), _vm._v(" Bottom Center\n                                                ")])]), _vm._v(" "), _c('div', [_c('label', [_c('input', {
    staticClass: "custom-radio",
    attrs: {
      "type": "radio",
      "name": "positions",
      "value": "toast-bottom-full-width"
    }
  }), _vm._v(" Bottom Full Width\n                                                ")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 "
  }, [_c('div', {
    staticClass: "form-group",
    attrs: {
      "id": "toastTypeGroup"
    }
  }, [_c('label', {
    staticClass: "toast-type"
  }, [_vm._v("Toast Type")]), _vm._v(" "), _c('div', [_c('label', {
    staticClass: "text-success"
  }, [_c('input', {
    staticClass: "custom-radio",
    attrs: {
      "type": "radio",
      "name": "toasts",
      "value": "success",
      "checked": ""
    }
  }), _vm._v(" Success\n                                        ")])]), _vm._v(" "), _c('div', [_c('label', {
    staticClass: "text-info"
  }, [_c('input', {
    staticClass: "custom-radio",
    attrs: {
      "type": "radio",
      "name": "toasts",
      "value": "info"
    }
  }), _vm._v(" Info\n                                        ")])]), _vm._v(" "), _c('div', [_c('label', {
    staticClass: "text-warning"
  }, [_c('input', {
    staticClass: "custom-radio",
    attrs: {
      "type": "radio",
      "name": "toasts",
      "value": "warning"
    }
  }), _vm._v(" Warning\n                                        ")])]), _vm._v(" "), _c('div', [_c('label', {
    staticClass: "text-danger"
  }, [_c('input', {
    staticClass: "custom-radio",
    attrs: {
      "type": "radio",
      "name": "toasts",
      "value": "error"
    }
  }), _vm._v(" Error\n                                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', [_c('label', {
    attrs: {
      "for": "closeButton"
    }
  }, [_c('input', {
    staticClass: "input-small custom-checkbox",
    attrs: {
      "id": "closeButton",
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" Close Button\n                                        ")])]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": "addBehaviorOnToastClick"
    }
  }, [_c('input', {
    staticClass: "input-small custom-checkbox",
    attrs: {
      "id": "addBehaviorOnToastClick",
      "type": "checkbox"
    }
  }), _vm._v(" Add behavior on toast click\n                                        ")])]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": "debugInfo"
    }
  }, [_c('input', {
    staticClass: "input-small custom-checkbox",
    attrs: {
      "id": "debugInfo",
      "type": "checkbox"
    }
  }), _vm._v(" Debug\n                                        ")])]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": "progressBar"
    }
  }, [_c('input', {
    staticClass: "input-small custom-checkbox",
    attrs: {
      "id": "progressBar",
      "type": "checkbox"
    }
  }), _vm._v(" Progress Bar\n                                        ")])]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": "preventDuplicates"
    }
  }, [_c('input', {
    staticClass: "input-small custom-checkbox",
    attrs: {
      "id": "preventDuplicates",
      "type": "checkbox"
    }
  }), _vm._v(" Prevent Duplicates\n                                        ")])]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": "addClear"
    }
  }, [_c('input', {
    staticClass: "input-small custom-checkbox",
    attrs: {
      "id": "addClear",
      "type": "checkbox"
    }
  }), _vm._v(" Force clearing button\n                                        ")])]), _vm._v(" "), _c('div', [_c('label', {
    attrs: {
      "for": "newestOnTop"
    }
  }, [_c('input', {
    staticClass: "input-small custom-checkbox",
    attrs: {
      "id": "newestOnTop",
      "type": "checkbox"
    }
  }), _vm._v(" Newest on top\n                                        ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "controls"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "showEasing"
    }
  }, [_vm._v("Show Easing")]), _vm._v(" "), _c('select', {
    staticClass: "form-control input-small",
    attrs: {
      "id": "showEasing"
    }
  }, [_c('option', [_vm._v("swing")]), _vm._v(" "), _c('option', [_vm._v("linear")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "hideEasing"
    }
  }, [_vm._v("Hide Easing")]), _vm._v(" "), _c('select', {
    staticClass: "form-control input-small",
    attrs: {
      "id": "hideEasing"
    }
  }, [_c('option', [_vm._v("swing")]), _vm._v(" "), _c('option', [_vm._v("linear")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "showMethod"
    }
  }, [_vm._v("Show Method")]), _vm._v(" "), _c('select', {
    staticClass: "form-control input-small",
    attrs: {
      "id": "showMethod"
    }
  }, [_c('option', {
    attrs: {
      "value": "show"
    }
  }, [_vm._v("show")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "fadeIn"
    }
  }, [_vm._v("fadeIn")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "slideDown"
    }
  }, [_vm._v("slideDown")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "hideMethod"
    }
  }, [_vm._v("Hide Method")]), _vm._v(" "), _c('select', {
    staticClass: "form-control input-small",
    attrs: {
      "id": "hideMethod"
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("hide")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "fadeOut"
    }
  }, [_vm._v("fadeOut")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "slideUp"
    }
  }, [_vm._v("slideUp")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "controls"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "showDuration"
    }
  }, [_vm._v("Show Duration")]), _vm._v(" "), _c('input', {
    staticClass: "form-control input-small",
    attrs: {
      "id": "showDuration",
      "type": "text",
      "placeholder": "ms",
      "value": "1000"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "hideDuration"
    }
  }, [_vm._v("Hide Duration")]), _vm._v(" "), _c('input', {
    staticClass: "form-control input-small",
    attrs: {
      "id": "hideDuration",
      "type": "text",
      "placeholder": "ms",
      "value": "1000"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "timeOut"
    }
  }, [_vm._v("Time out")]), _vm._v(" "), _c('input', {
    staticClass: "form-control input-small",
    attrs: {
      "id": "timeOut",
      "type": "text",
      "placeholder": "ms",
      "value": "5000"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "timeOut"
    }
  }, [_vm._v("Extended time out")]), _vm._v(" "), _c('input', {
    staticClass: "form-control input-small",
    attrs: {
      "id": "extendedTimeOut",
      "type": "text",
      "placeholder": "ms",
      "value": "1000"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "col-sm-2 col-xs-6"
  }, [_c('button', {
    staticClass: "btn btn-success btn-raised toastrshow",
    attrs: {
      "type": "button",
      "id": "showtoast"
    }
  }, [_vm._v("\n                                        Show Toast\n                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-2 col-xs-6"
  }, [_c('button', {
    staticClass: "btn btn-danger btn-raised toastrshow",
    attrs: {
      "type": "button",
      "id": "cleartoasts"
    }
  }, [_vm._v("\n                                        Clear Toasts\n                                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-2 col-xs-6"
  }, [_c('button', {
    staticClass: "btn btn-warning btn-raised toastrshow",
    attrs: {
      "type": "button",
      "id": "clearlasttoast"
    }
  }, [_vm._v("\n                                        Clear Last Toast\n                                    ")])])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "row margin-top-10"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('pre', {
    attrs: {
      "id": "toastrOptions"
    }
  })])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-65a4f3c6", module.exports)
  }
}

/***/ })

});