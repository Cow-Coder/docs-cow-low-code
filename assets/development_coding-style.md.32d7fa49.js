import{_ as e,o as t,c as i,b as a}from"./app.692ec25c.js";const _=JSON.parse('{"title":"\u4EE3\u7801\u89C4\u8303","description":"","frontmatter":{},"headers":[{"level":2,"title":"IDE \u7F16\u8F91\u5668","slug":"ide-\u7F16\u8F91\u5668"},{"level":2,"title":"husky & lint-staged","slug":"husky-lint-staged"},{"level":2,"title":"\u914D\u7F6E\u4EE3\u7801\u89C4\u8303","slug":"\u914D\u7F6E\u4EE3\u7801\u89C4\u8303"},{"level":2,"title":"\u5173\u95ED\u4EE3\u7801\u89C4\u8303\u6821\u9A8C","slug":"\u5173\u95ED\u4EE3\u7801\u89C4\u8303\u6821\u9A8C"}],"relativePath":"development/coding-style.md","lastUpdated":1660981067000}'),d={name:"development/coding-style.md"},s=a(`<h1 id="\u4EE3\u7801\u89C4\u8303" tabindex="-1">\u4EE3\u7801\u89C4\u8303 <a class="header-anchor" href="#\u4EE3\u7801\u89C4\u8303" aria-hidden="true">#</a></h1><h2 id="ide-\u7F16\u8F91\u5668" tabindex="-1">IDE \u7F16\u8F91\u5668 <a class="header-anchor" href="#ide-\u7F16\u8F91\u5668" aria-hidden="true">#</a></h2><p>\u5982\u679C\u60A8\u4F7F\u7528\u7684\u662F WebStorm\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5728\u8BBE\u7F6E\u4E2D\u5F00\u542F\u4E0B\u5217\u529F\u80FD\uFF1A</p><ul><li><code>\u8BED\u8A00\u548C\u6846\u67B6 &gt; JavaScript &gt; \u4EE3\u7801\u8D28\u91CF\u5DE5\u5177 &gt; ESLint</code> \u52FE\u9009 <code>\u4FDD\u5B58\u65F6\u8FD0\u884Ceslint --fix</code></li><li><code>\u8BED\u8A00\u548C\u6846\u67B6 &gt; JavaScript &gt; Prettier</code> \u52FE\u9009 <code>\u6267\u884C&quot;\u91CD\u65B0\u683C\u5F0F\u5316\u4EE3\u7801&quot;\u64CD\u4F5C\u65F6</code> \u548C <code>\u4FDD\u5B58\u65F6</code></li></ul><p>\u5982\u679C\u60A8\u4F7F\u7528\u7684\u662F Visual Studio Code\uFF0C\u6846\u67B6\u6E90\u7801\u91CC\u5DF2\u63D0\u4F9B\u76F8\u5173\u914D\u7F6E\u6587\u4EF6\uFF0C\u53EF\u76F4\u63A5\u6D4B\u8BD5\u6548\u679C\uFF1A\u5728\u4FDD\u5B58\u4EE3\u7801\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5BF9\u5F53\u524D\u6587\u4EF6\u8FDB\u884C\u4EE3\u7801\u683C\u5F0F\u5316\u64CD\u4F5C\u3002</p><h2 id="husky-lint-staged" tabindex="-1">husky &amp; lint-staged <a class="header-anchor" href="#husky-lint-staged" aria-hidden="true">#</a></h2><p>\u7531\u4E8E IDE \u80FD\u505A\u7684\u4E8B\u6BD4\u8F83\u6709\u9650\uFF0C\u53EA\u80FD\u5BF9\u4EE3\u7801\u7684\u4E66\u5199\u89C4\u8303\u8FDB\u884C\u683C\u5F0F\u5316\uFF0C\u5BF9\u4E8E\u4E00\u4E9B\u65E0\u6CD5\u81EA\u52A8\u4FEE\u590D\u7684\u9519\u8BEF\u4EE3\u7801\uFF0C\u5982\u679C\u6CA1\u6709\u6539\u6B63\u5230\u5C31\u88AB\u63A8\u9001\u5230 git \u4ED3\u5E93\uFF0C\u5728\u591A\u4EBA\u534F\u4F5C\u5F00\u53D1\u65F6\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u5230\u522B\u4EBA\u7684\u5F00\u53D1\u4F53\u9A8C\u3002\u6240\u4EE5\u6211\u4EEC\u96C6\u6210\u4E86 husky \u548C lint-staged \u8FD9\u4E24\u4E2A\u4F9D\u8D56\u6765\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\u3002</p><p>\u5728\u63D0\u4EA4\u4EE3\u7801\u65F6\uFF0Chusky \u4F1A\u901A\u8FC7 lint-staged \u5BF9 /src \u76EE\u5F55\u4E0B\u7684 js vue scss \u6587\u4EF6\u8FDB\u884C\u5206\u522B\u8FDB\u884C eslint \u548C stylelint \u68C0\u6D4B\uFF0C\u5982\u679C\u6709\u62A5\u9519\uFF0C\u5219\u4F1A\u963B\u6B62\u672C\u6B21\u4EE3\u7801\u63D0\u4EA4\uFF0C\u76F4\u5230\u5F00\u53D1\u8005\u4FEE\u6539\u5B8C\u6240\u6709\u9519\u8BEF\u4EE3\u7801\u540E\uFF0C\u624D\u5141\u8BB8\u63D0\u4EA4\u5230 git \u4ED3\u5E93\uFF0C\u8FD9\u6837\u53EF\u4EE5\u786E\u4FDD git \u4ED3\u5E93\u91CC\u7684\u4EE3\u7801\u4E0D\u4F1A\u6709\u8BED\u6CD5\u9519\u8BEF\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u53EF\u901A\u8FC7\u4FEE\u6539 <code>.eslintignore</code> \u548C <code>.prettierignore</code> \u5FFD\u7565\u65E0\u9700\u505A\u4EE3\u7801\u89C4\u8303\u6821\u9A8C\u7684\u6587\u4EF6\uFF0C\u4F8B\u5982\u5728\u9879\u76EE\u4E2D\u5BFC\u5165\u4E86\u4E00\u4E9B\u7B2C\u4E09\u65B9\u7684\u63D2\u4EF6\u6216\u7EC4\u4EF6\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5C06\u5176\u8FDB\u884C\u5FFD\u7565\u3002</p></div><h2 id="\u914D\u7F6E\u4EE3\u7801\u89C4\u8303" tabindex="-1">\u914D\u7F6E\u4EE3\u7801\u89C4\u8303 <a class="header-anchor" href="#\u914D\u7F6E\u4EE3\u7801\u89C4\u8303" aria-hidden="true">#</a></h2><p>\u914D\u7F6E\u6587\u4EF6\u4E3B\u8981\u6709 3 \u5904\uFF0C\u5206\u522B\u4E3A</p><ul><li>IDE \u914D\u7F6E(<code>.editorconfig</code>)</li><li>ESLint \u914D\u7F6E(<code>.eslintrc.cjs</code> \u548C <code>.eslintignore</code>)</li><li>Prettier \u914D\u7F6E(<code>.prettierrc.cjs</code> \u548C <code>.prettierignore</code>)</li></ul><p>\u901A\u8FC7\u4E0B\u9762\u547D\u4EE4\u4F1A\u5C06\u4EE3\u7801\u8FDB\u884C\u4E00\u6B21\u683C\u5F0F\u6821\u9A8C\uFF0C\u5982\u679C\u89C4\u5219\u652F\u6301\u81EA\u52A8\u4FEE\u590D\uFF0C\u5219\u4F1A\u5C06\u4E0D\u7B26\u5408\u89C4\u5219\u7684\u4EE3\u7801\u81EA\u52A8\u8FDB\u884C\u683C\u5F0F\u5316\u3002</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm run lint:fix</span></span>
<span class="line"></span></code></pre></div><p>\u800C\u4F7F\u7528 <code>pnpm run lint</code> \u53EF\u4EE5\u68C0\u6D4B\u5F53\u524D\u4EE3\u7801\u8FD8\u6709\u54EA\u4E9B\u5730\u65B9\u662F\u4E0D\u7B26\u5408\u89C4\u8303\u7684\u3002</p><h2 id="\u5173\u95ED\u4EE3\u7801\u89C4\u8303\u6821\u9A8C" tabindex="-1">\u5173\u95ED\u4EE3\u7801\u89C4\u8303\u6821\u9A8C <a class="header-anchor" href="#\u5173\u95ED\u4EE3\u7801\u89C4\u8303\u6821\u9A8C" aria-hidden="true">#</a></h2><p>\u6CE8\u91CD\u4EE3\u7801\u89C4\u8303\u662F\u4E00\u4E2A\u7A0B\u5E8F\u5458\u7684\u804C\u4E1A\u57FA\u672C\u7D20\u517B\uFF0C\u5E76\u4E14\u5F53\u591A\u4EBA\u534F\u52A9\u5F00\u53D1\u65F6\uFF0C\u5B83\u662F\u4FDD\u8BC1\u4EE3\u7801\u4E00\u81F4\u6027\u7684\u6700\u4F73\u624B\u6BB5\u3002</p>`,17),l=[s];function c(o,n,r,p,h,u){return t(),i("div",null,l)}var m=e(d,[["render",c]]);export{_ as __pageData,m as default};
