(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./website/pages/guide.vue?vue&type=template&id=9fa607d4&scoped=true


var _withId = /*#__PURE__*/Object(vue_esm_browser["O" /* withScopeId */])("data-v-9fa607d4");

Object(vue_esm_browser["x" /* pushScopeId */])("data-v-9fa607d4");

var _hoisted_1 = {
  class: "page-container page-guide"
};

Object(vue_esm_browser["v" /* popScopeId */])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_side_nav = Object(vue_esm_browser["D" /* resolveComponent */])("side-nav");

  var _component_vi_col = Object(vue_esm_browser["D" /* resolveComponent */])("vi-col");

  var _component_router_view = Object(vue_esm_browser["D" /* resolveComponent */])("router-view");

  var _component_vi_row = Object(vue_esm_browser["D" /* resolveComponent */])("vi-row");

  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("div", _hoisted_1, [Object(vue_esm_browser["i" /* createVNode */])(_component_vi_row, null, {
    default: _withId(function () {
      return [Object(vue_esm_browser["i" /* createVNode */])(_component_vi_col, {
        xs: 24,
        sm: 5
      }, {
        default: _withId(function () {
          return [Object(vue_esm_browser["i" /* createVNode */])(_component_side_nav, {
            data: $options.navsData,
            base: "/" + $data.lang + "/guide"
          }, null, 8, ["data", "base"])];
        }),
        _: 1
      }), Object(vue_esm_browser["i" /* createVNode */])(_component_vi_col, {
        xs: 24,
        sm: 19
      }, {
        default: _withId(function () {
          return [Object(vue_esm_browser["i" /* createVNode */])(_component_router_view, {
            class: "content"
          })];
        }),
        _: 1
      })];
    }),
    _: 1
  })]);
});
// CONCATENATED MODULE: ./website/pages/guide.vue?vue&type=template&id=9fa607d4&scoped=true

// EXTERNAL MODULE: ./website/i18n/page.json
var page = __webpack_require__(273);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./website/pages/guide.vue?vue&type=script&lang=js

/* harmony default export */ var guidevue_type_script_lang_js = ({
  data: function data() {
    return {
      lang: this.$route.meta.lang
    };
  },
  computed: {
    langConfig: function langConfig() {
      var _this = this;

      return page.filter(function (config) {
        return config.lang === _this.lang;
      })[0].pages.guide;
    },
    navsData: function navsData() {
      return [{
        path: '/design',
        name: this.langConfig[1]
      }, {
        path: '/nav',
        name: this.langConfig[2]
      }];
    }
  }
});
// CONCATENATED MODULE: ./website/pages/guide.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./website/pages/guide.vue?vue&type=style&index=0&id=9fa607d4&lang=sass&scoped=true
var guidevue_type_style_index_0_id_9fa607d4_lang_sass_scoped_true = __webpack_require__(288);

// CONCATENATED MODULE: ./website/pages/guide.vue





guidevue_type_script_lang_js.render = render
guidevue_type_script_lang_js.__scopeId = "data-v-9fa607d4"

/* harmony default export */ var guide = __webpack_exports__["default"] = (guidevue_type_script_lang_js);

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(289);

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

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_vue_loader_dist_index_js_ref_11_0_guide_vue_vue_type_style_index_0_id_9fa607d4_lang_sass_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(278);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_vue_loader_dist_index_js_ref_11_0_guide_vue_vue_type_style_index_0_id_9fa607d4_lang_sass_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_4_3_node_modules_vue_loader_dist_index_js_ref_11_0_guide_vue_vue_type_style_index_0_id_9fa607d4_lang_sass_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);