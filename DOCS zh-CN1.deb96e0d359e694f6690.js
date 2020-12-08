(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/i18n.md?vue&type=template&id=1e7d79fe

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["g" /* createStaticVNode */])("<h2 id=\"guo-ji-hua\"><a class=\"header-anchor\" href=\"#guo-ji-hua\">¶</a> 国际化</h2><p>Element Plus 组件内部默认使用英语，若希望使用其他语言，则需要进行多语言设置。以中文为例，在 main.js 中：</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-comment\">// 完整引入 Element</span>\n<span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> locale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n\ncreateApp(App).use(ElementPlus, { locale })\n</code></pre><p>或</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-comment\">// 按需引入 Element</span>\n<span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton, ElSelect } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> lang <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n<span class=\"hljs-keyword\">import</span> locale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale&#39;</span>\n\n<span class=\"hljs-comment\">// 设置语言</span>\nlocale.use(lang)\n\n<span class=\"hljs-comment\">// 引入组件</span>\nVue.component(ElButton.name, ElButton)\nVue.component(ElSelect.name, ElSelect)\n</code></pre><p>如果使用其它语言，默认情况下英文语言包依旧是被引入的，可以使用 webpack 的 NormalModuleReplacementPlugin 替换默认语言包。</p><p><strong>webpack.config.js</strong></p><pre><code class=\"hljs language-javascript\">{\n  <span class=\"hljs-attr\">plugins</span>: [\n    <span class=\"hljs-keyword\">new</span> webpack.NormalModuleReplacementPlugin(<span class=\"hljs-regexp\">/element-plus[\\/\\\\]lib[\\/\\\\]locale[\\/\\\\]lang[\\/\\\\]en/</span>, <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>)\n  ]\n}\n</code></pre><h2 id=\"jian-rong-vue-i18n-5.x\"><a class=\"header-anchor\" href=\"#jian-rong-vue-i18n-5.x\">¶</a> 兼容 <code>vue-i18n@5.x</code></h2><p>Element Plus 兼容 <a href=\"https://github.com/kazupon/vue-i18n\">vue-i18n@5.x</a>，搭配使用能更方便地实现多语言切换。</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> VueI18n <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-i18n&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> enLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/en&#39;</span>\n<span class=\"hljs-keyword\">import</span> zhLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(ElementPlus)\nVue.use(VueI18n)\n\nVue.config.lang = <span class=\"hljs-string\">&#39;zh-cn&#39;</span>\nVue.locale(<span class=\"hljs-string\">&#39;zh-cn&#39;</span>, zhLocale)\nVue.locale(<span class=\"hljs-string\">&#39;en&#39;</span>, enLocale)\n</code></pre><h2 id=\"jian-rong-qi-ta-i18n-cha-jian\"><a class=\"header-anchor\" href=\"#jian-rong-qi-ta-i18n-cha-jian\">¶</a> 兼容其他 i18n 插件</h2><p>如果不使用 <code>vue-i18n@5.x</code>，而是用其他的 i18n 插件，Element Plus 将无法兼容，但是可以自定义 Element Plus 的 i18n 的处理方法。</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> enLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/en&#39;</span>\n<span class=\"hljs-keyword\">import</span> zhLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n\nVue.use(Element, {\n  <span class=\"hljs-attr\">i18n</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">path, options</span>) </span>{\n    <span class=\"hljs-comment\">// ...</span>\n  }\n})\n</code></pre><h2 id=\"jian-rong-vue-i18n-6.x\"><a class=\"header-anchor\" href=\"#jian-rong-vue-i18n-6.x\">¶</a> 兼容 <code>vue-i18n@6.x</code></h2><p>默认不支持 6.x 的 <code>vue-i18n</code>，你需要手动处理。</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> VueI18n <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-i18n&#39;</span>\n<span class=\"hljs-keyword\">import</span> enLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/en&#39;</span>\n<span class=\"hljs-keyword\">import</span> zhLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n\nVue.use(VueI18n)\n\n<span class=\"hljs-keyword\">const</span> messages = {\n  <span class=\"hljs-attr\">en</span>: {\n    <span class=\"hljs-attr\">message</span>: <span class=\"hljs-string\">&#39;hello&#39;</span>,\n    ...enLocale <span class=\"hljs-comment\">// 或者用 Object.assign({ message: &#39;hello&#39; }, enLocale)</span>\n  },\n  <span class=\"hljs-attr\">zh</span>: {\n    <span class=\"hljs-attr\">message</span>: <span class=\"hljs-string\">&#39;你好&#39;</span>,\n    ...zhLocale <span class=\"hljs-comment\">// 或者用 Object.assign({ message: &#39;你好&#39; }, zhLocale)</span>\n  }\n}\n<span class=\"hljs-comment\">// Create VueI18n instance with options</span>\n<span class=\"hljs-keyword\">const</span> i18n = <span class=\"hljs-keyword\">new</span> VueI18n({\n  <span class=\"hljs-attr\">locale</span>: <span class=\"hljs-string\">&#39;en&#39;</span>, <span class=\"hljs-comment\">// set locale</span>\n  messages, <span class=\"hljs-comment\">// set locale messages</span>\n})\n\nVue.use(Element, {\n  <span class=\"hljs-attr\">i18n</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">key, value</span>) =&gt;</span> i18n.t(key, value)\n})\n\n<span class=\"hljs-keyword\">new</span> Vue({ i18n }).$mount(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code></pre><h2 id=\"an-xu-jia-zai-li-ding-zhi-i18n\"><a class=\"header-anchor\" href=\"#an-xu-jia-zai-li-ding-zhi-i18n\">¶</a> 按需加载里定制 i18n</h2><pre><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> DatePicker <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element/lib/date-picker&#39;</span>\n<span class=\"hljs-keyword\">import</span> VueI18n <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-i18n&#39;</span>\n\n<span class=\"hljs-keyword\">import</span> enLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/en&#39;</span>\n<span class=\"hljs-keyword\">import</span> zhLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale&#39;</span>\n\nVue.use(VueI18n)\nVue.use(DatePicker)\n\n<span class=\"hljs-keyword\">const</span> messages = {\n  <span class=\"hljs-attr\">en</span>: {\n    <span class=\"hljs-attr\">message</span>: <span class=\"hljs-string\">&#39;hello&#39;</span>,\n    ...enLocale\n  },\n  <span class=\"hljs-attr\">zh</span>: {\n    <span class=\"hljs-attr\">message</span>: <span class=\"hljs-string\">&#39;你好&#39;</span>,\n    ...zhLocale\n  }\n}\n<span class=\"hljs-comment\">// Create VueI18n instance with options</span>\n<span class=\"hljs-keyword\">const</span> i18n = <span class=\"hljs-keyword\">new</span> VueI18n({\n  <span class=\"hljs-attr\">locale</span>: <span class=\"hljs-string\">&#39;en&#39;</span>, <span class=\"hljs-comment\">// set locale</span>\n  messages, <span class=\"hljs-comment\">// set locale messages</span>\n})\n\nElementLocale.i18n(<span class=\"hljs-function\">(<span class=\"hljs-params\">key, value</span>) =&gt;</span> i18n.t(key, value))\n</code></pre><h2 id=\"tong-guo-cdn-de-fang-shi-jia-zai-yu-yan-wen-jian\"><a class=\"header-anchor\" href=\"#tong-guo-cdn-de-fang-shi-jia-zai-yu-yan-wen-jian\">¶</a> 通过 CDN 的方式加载语言文件</h2><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/lib/umd/locale/en.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span>\n  ELEMENT.locale(ELEMENT.lang.en)\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre><p>搭配 <code>vue-i18n</code> 使用</p><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue-i18n/dist/vue-i18n.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/lib/umd/locale/zh-cn.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/lib/umd/locale/en.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  Vue.locale(<span class=\"hljs-string\">&#39;en&#39;</span>, ELEMENT.lang.en)\n  Vue.locale(<span class=\"hljs-string\">&#39;zh-cn&#39;</span>, ELEMENT.lang.zhCN)\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre><p>目前 Element Plus 内置了以下语言：</p><ul class=\"language-list\"><li>简体中文（zh-cn）</li><li>英语（en）</li><li>德语（de）</li><li>葡萄牙语（pt）</li><li>西班牙语（es）</li><li>丹麦语（da）</li><li>法语（fr）</li><li>挪威语（nb-no）</li><li>繁体中文（zh-tw）</li><li>意大利语（it）</li><li>韩语（ko）</li><li>日语（ja）</li><li>荷兰语（nl）</li><li>越南语（vi）</li><li>俄语（ru）</li><li>土耳其语（tr）</li><li>巴西葡萄牙语（pt-br）</li><li>波斯语（fa）</li><li>泰语（th）</li><li>印尼语（id）</li><li>保加利亚语（bg）</li><li>波兰语（pl）</li><li>芬兰语（fi）</li><li>瑞典语（sv）</li><li>希腊语（el）</li><li>斯洛伐克语（sk）</li><li>加泰罗尼亚语（ca）</li><li>捷克语（cs）</li><li>乌克兰语（uk）</li><li>土库曼语（tk）</li><li>泰米尔语（ta）</li><li>拉脱维亚语（lv）</li><li>南非荷兰语（af）</li><li>爱沙尼亚语（et）</li><li>斯洛文尼亚语（sl）</li><li>阿拉伯语（ar）</li><li>希伯来语（he）</li><li>立陶宛语（lt）</li><li>蒙古语（mn）</li><li>哈萨克斯坦语（kk）</li><li>匈牙利语（hu）</li><li>罗马尼亚语（ro）</li><li>库尔德语（ku）</li><li>维吾尔语（ug-cn）</li><li>高棉语（km）</li><li>塞尔维亚语（sr）</li><li>巴斯克语（eu）</li><li>吉尔吉斯语（ky）</li><li>亚美尼亚语 (hy-am)</li><li>克罗地亚 (hr)</li><li>世界语 (eo)</li></ul><p>如果你需要使用其他的语言，欢迎贡献 PR：只需在 <a href=\"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang\">这里</a> 添加一个语言配置文件即可。</p>", 26);

function render(_ctx, _cache) {
  return Object(vue_esm_browser["u" /* openBlock */])(), Object(vue_esm_browser["e" /* createBlock */])("section", _hoisted_1, [_hoisted_2]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/i18n.md?vue&type=template&id=1e7d79fe

// CONCATENATED MODULE: ./website/docs/zh-CN/i18n.md

const script = {}
script.render = render

/* harmony default export */ var i18n = __webpack_exports__["default"] = (script);

/***/ })

}]);