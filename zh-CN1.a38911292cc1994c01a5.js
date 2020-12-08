(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./website/pages/component.vue?vue&type=template&id=1b399585&scoped=true


var _withId = /*#__PURE__*/Object(vue_esm_browser["O" /* withScopeId */])("data-v-1b399585");

Object(vue_esm_browser["x" /* pushScopeId */])("data-v-1b399585");

var _hoisted_1 = {
  class: "page-container page-component"
};
var _hoisted_2 = {
  class: "page-component__content"
};
var _hoisted_3 = {
  class: "content-wrap"
};

Object(vue_esm_browser["v" /* popScopeId */])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_side_nav = Object(vue_esm_browser["D" /* resolveComponent */])("side-nav");

  var _component_vi_scrollbar = Object(vue_esm_browser["D" /* resolveComponent */])("vi-scrollbar");

  var _component_router_view = Object(vue_esm_browser["D" /* resolveComponent */])("router-view");

  var _component_footer_nav = Object(vue_esm_browser["D" /* resolveComponent */])("footer-nav");

  var _component_vi_backtop = Object(vue_esm_browser["D" /* resolveComponent */])("vi-backtop");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])(_component_vi_scrollbar, {
    ref: "componentScrollBar",
    class: "page-component__scroll"
  }, {
    default: _withId(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])("div", _hoisted_1, [Object(vue_esm_browser["i" /* createVNode */])(_component_vi_scrollbar, {
        class: "page-component__nav"
      }, {
        default: _withId(function () {
          return [Object(vue_esm_browser["i" /* createVNode */])(_component_side_nav, {
            data: $data.navsData[$data.lang],
            base: "/" + $data.lang + "/component"
          }, null, 8, ["data", "base"])];
        }),
        _: 1
      }), Object(vue_esm_browser["i" /* createVNode */])("div", _hoisted_2, [Object(vue_esm_browser["i" /* createVNode */])("div", _hoisted_3, [Object(vue_esm_browser["i" /* createVNode */])(_component_router_view, {
        class: "content"
      })]), Object(vue_esm_browser["i" /* createVNode */])(_component_footer_nav)]), $options.showBackToTop ? (Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])(_component_vi_backtop, {
        key: 0,
        target: ".page-component__scroll .el-scrollbar__wrap",
        right: 100,
        bottom: 150
      })) : Object(vue_esm_browser["f" /* createCommentVNode */])("", true)])];
    }),
    _: 1
  }, 512);
});
// CONCATENATED MODULE: ./website/pages/component.vue?vue&type=template&id=1b399585&scoped=true

// EXTERNAL MODULE: ./website/bus.js + 1 modules
var bus = __webpack_require__(13);

// EXTERNAL MODULE: ./website/nav.config.json
var nav_config = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/throttle-debounce/index.umd.js
var index_umd = __webpack_require__(274);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./website/pages/component.vue?vue&type=script&lang=js



/* harmony default export */ var componentvue_type_script_lang_js = ({
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var _this = this;

    next();
    setTimeout(function () {
      var toPath = to.path;
      var fromPath = from.path;

      if (toPath === fromPath && to.hash) {
        _this.goAnchor();
      }

      if (toPath !== fromPath) {
        document.documentElement.scrollTop = document.body.scrollTop = 0;

        _this.renderAnchorHref();
      }
    }, 100);
  },
  data: function data() {
    return {
      lang: this.$route.meta.lang,
      navsData: nav_config,
      scrollTop: 0,
      showHeader: true,
      componentScrollBar: null,
      componentScrollBoxElement: null
    };
  },
  computed: {
    showBackToTop: function showBackToTop() {
      return !this.$route.path.match(/backtop/);
    }
  },
  watch: {
    '$route.path': function $routePath() {
      var _this2 = this;

      // 触发伪滚动条更新
      this.componentScrollBox.scrollTop = 0;
      this.$nextTick(function () {
        _this2.componentScrollBar.update();
      });
    }
  },
  created: function created() {
    var _this3 = this;

    bus["a" /* default */].$on('nav-fade', function (val) {
      _this3.navFaded = val;
    });
  },
  mounted: function mounted() {
    this.componentScrollBar = this.$refs.componentScrollBar;
    this.componentScrollBox = this.componentScrollBar.$el.querySelector('.el-scrollbar__wrap');
    this.throttledScrollHandler = Object(index_umd["throttle"])(300, this.handleScroll);
    this.componentScrollBox.addEventListener('scroll', this.throttledScrollHandler);
    this.renderAnchorHref();
    this.goAnchor();
    document.body.classList.add('is-component');
  },
  unmounted: function unmounted() {
    document.body.classList.remove('is-component');
  },
  beforeUnmount: function beforeUnmount() {
    this.componentScrollBox.removeEventListener('scroll', this.throttledScrollHandler);
  },
  methods: {
    renderAnchorHref: function renderAnchorHref() {
      if (/changelog/g.test(location.href)) return;
      var anchors = document.querySelectorAll('h2 a,h3 a,h4 a,h5 a');
      var basePath = location.href.split('#').splice(0, 2).join('#');
      [].slice.call(anchors).forEach(function (a) {
        var href = a.getAttribute('href');
        a.href = basePath + href;
      });
    },
    goAnchor: function goAnchor() {
      var _this4 = this;

      if (location.href.match(/#/g).length > 1) {
        var anchor = location.href.match(/#[^#]+$/g);
        if (!anchor) return;
        var elm = document.querySelector(anchor[0]);
        if (!elm) return;
        setTimeout(function () {
          _this4.componentScrollBox.scrollTop = elm.offsetTop;
        }, 50);
      }
    },
    handleScroll: function handleScroll() {
      var scrollTop = this.componentScrollBox.scrollTop;

      if (this.showHeader !== this.scrollTop > scrollTop) {
        this.showHeader = this.scrollTop > scrollTop;
      }

      if (scrollTop === 0) {
        this.showHeader = true;
      }

      if (!this.navFaded) {
        bus["a" /* default */].$emit('fade-nav');
      }

      this.scrollTop = scrollTop;
    }
  }
});
// CONCATENATED MODULE: ./website/pages/component.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./website/pages/component.vue?vue&type=style&index=0&id=1b399585&lang=sass&scoped=true
var componentvue_type_style_index_0_id_1b399585_lang_sass_scoped_true = __webpack_require__(284);

// CONCATENATED MODULE: ./website/pages/component.vue





componentvue_type_script_lang_js.render = render
componentvue_type_script_lang_js.__scopeId = "data-v-1b399585"

/* harmony default export */ var component = __webpack_exports__["default"] = (componentvue_type_script_lang_js);

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

	/* eslint-disable no-undefined,no-param-reassign,no-shadow */

	/**
	 * Throttle execution of a function. Especially useful for rate limiting
	 * execution of handlers on events like resize and scroll.
	 *
	 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
	 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
	 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
	 *                                    the internal counter is reset).
	 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                    to `callback` when the throttled-function is executed.
	 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
	 *                                    schedule `callback` to execute after `delay` ms.
	 *
	 * @returns {Function}  A new, throttled, function.
	 */
	function throttle (delay, noTrailing, callback, debounceMode) {
	  /*
	   * After wrapper has stopped being called, this timeout ensures that
	   * `callback` is executed at the proper times in `throttle` and `end`
	   * debounce modes.
	   */
	  var timeoutID;
	  var cancelled = false; // Keep track of the last time `callback` was executed.

	  var lastExec = 0; // Function to clear existing timeout

	  function clearExistingTimeout() {
	    if (timeoutID) {
	      clearTimeout(timeoutID);
	    }
	  } // Function to cancel next exec


	  function cancel() {
	    clearExistingTimeout();
	    cancelled = true;
	  } // `noTrailing` defaults to falsy.


	  if (typeof noTrailing !== 'boolean') {
	    debounceMode = callback;
	    callback = noTrailing;
	    noTrailing = undefined;
	  }
	  /*
	   * The `wrapper` function encapsulates all of the throttling / debouncing
	   * functionality and when executed will limit the rate at which `callback`
	   * is executed.
	   */


	  function wrapper() {
	    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
	      arguments_[_key] = arguments[_key];
	    }

	    var self = this;
	    var elapsed = Date.now() - lastExec;

	    if (cancelled) {
	      return;
	    } // Execute `callback` and update the `lastExec` timestamp.


	    function exec() {
	      lastExec = Date.now();
	      callback.apply(self, arguments_);
	    }
	    /*
	     * If `debounceMode` is true (at begin) this is used to clear the flag
	     * to allow future `callback` executions.
	     */


	    function clear() {
	      timeoutID = undefined;
	    }

	    if (debounceMode && !timeoutID) {
	      /*
	       * Since `wrapper` is being called for the first time and
	       * `debounceMode` is true (at begin), execute `callback`.
	       */
	      exec();
	    }

	    clearExistingTimeout();

	    if (debounceMode === undefined && elapsed > delay) {
	      /*
	       * In throttle mode, if `delay` time has been exceeded, execute
	       * `callback`.
	       */
	      exec();
	    } else if (noTrailing !== true) {
	      /*
	       * In trailing throttle mode, since `delay` time has not been
	       * exceeded, schedule `callback` to execute `delay` ms after most
	       * recent execution.
	       *
	       * If `debounceMode` is true (at begin), schedule `clear` to execute
	       * after `delay` ms.
	       *
	       * If `debounceMode` is false (at end), schedule `callback` to
	       * execute after `delay` ms.
	       */
	      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
	    }
	  }

	  wrapper.cancel = cancel; // Return the wrapper function.

	  return wrapper;
	}

	/* eslint-disable no-undefined */
	/**
	 * Debounce execution of a function. Debouncing, unlike throttling,
	 * guarantees that a function is only executed a single time, either at the
	 * very beginning of a series of calls, or at the very end.
	 *
	 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
	 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
	 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
	 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                  to `callback` when the debounced-function is executed.
	 *
	 * @returns {Function} A new, debounced function.
	 */

	function debounce (delay, atBegin, callback) {
	  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
	}

	exports.debounce = debounce;
	exports.throttle = throttle;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map


/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(285);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_vue_loader_dist_index_js_ref_11_0_component_vue_vue_type_style_index_0_id_1b399585_lang_sass_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(276);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_vue_loader_dist_index_js_ref_11_0_component_vue_vue_type_style_index_0_id_1b399585_lang_sass_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_vue_loader_dist_index_js_ref_11_0_component_vue_vue_type_style_index_0_id_1b399585_lang_sass_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);