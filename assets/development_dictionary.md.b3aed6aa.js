import{_ as p,o as l,c as e,a as o,d as s,e as n,b as c,r as t}from"./app.a4e6ddd5.js";const b=JSON.parse('{"title":"\u6587\u4EF6\u5939\u7ED3\u6784","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6982\u89C8","slug":"\u6982\u89C8"},{"level":2,"title":"packages/constant","slug":"packages-constant"},{"level":2,"title":"packages/editor","slug":"packages-editor"},{"level":2,"title":"packages/event-action","slug":"packages-event-action"},{"level":2,"title":"packages/library","slug":"packages-library"},{"level":2,"title":"packages/preview","slug":"packages-preview"},{"level":2,"title":"packages/types","slug":"packages-types"},{"level":2,"title":"packages/utils","slug":"packages-utils"},{"level":2,"title":"internal/build-utils","slug":"internal-build-utils"},{"level":2,"title":"internal/vite-plugin-monaco-editor-nls","slug":"internal-vite-plugin-monaco-editor-nls"},{"level":2,"title":"internal/vscode-language-pack-zh-hans","slug":"internal-vscode-language-pack-zh-hans"}],"relativePath":"development/dictionary.md","lastUpdated":1661002716000}'),i={name:"development/dictionary.md"},r=s("h1",{id:"\u6587\u4EF6\u5939\u7ED3\u6784",tabindex:"-1"},[n("\u6587\u4EF6\u5939\u7ED3\u6784 "),s("a",{class:"header-anchor",href:"#\u6587\u4EF6\u5939\u7ED3\u6784","aria-hidden":"true"},"#")],-1),A=s("p",null,[n("\u725B\u642D\u91C7\u7528 "),s("code",null,"monorepo"),n(" \u67B6\u6784\u5B9E\u73B0\u7269\u6599\u7EC4\u4EF6\uFF08libraryComponent\uFF09\u548C\u52A8\u4F5C\u5904\u7406\u5668\uFF08actionHander\uFF09\u5728\u7F16\u8F91\u5668\uFF08editor\uFF09\u548C\u9884\u89C8\u6A21\u5757\uFF08preview\uFF09\u7B49\u591A\u4E2A\u5305\u4E4B\u95F4\u5171\u7528")],-1),C=s("p",null,"\u4E0B\u9762\u7684\u56FE\u793A\u5C06\u66F4\u597D\u7684\u5E2E\u52A9\u60A8\u7406\u89E3",-1),y=c(`<details class="details custom-block"><summary>\u7EC6\u8282</summary><p>\u4E86\u89E3\u66F4\u591A <code>monorepo</code> \u76F8\u5173\uFF0C\u8BF7\u53C2\u9605\uFF1A <a href="https://zhuanlan.zhihu.com/p/77577415" target="_blank" rel="noopener noreferrer">Monorepo \u662F\u4EC0\u4E48\uFF0C\u4E3A\u4EC0\u4E48\u5927\u5BB6\u90FD\u5728\u7528\uFF1F</a></p></details><h2 id="\u6982\u89C8" tabindex="-1">\u6982\u89C8 <a class="header-anchor" href="#\u6982\u89C8" aria-hidden="true">#</a></h2><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">cow-Low-code</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .husky # git\u94A9\u5B50</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 _</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 commit-msg # \u6821\u9A8Ccommit msg\u89C4\u8303</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 pre-commit # \u6821\u9A8C&amp;\u683C\u5F0F\u5316\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .vscode # vscode\u9884\u8BBE</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 extensions.json</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 settings.json</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 docs # \u9879\u76EE\u6587\u6863</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 internal # \u5185\u90E8package</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 build-utils # \u6784\u5EFA\u5DE5\u5177</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 vite-plugin-monaco-editor-nls # monaco-editor \u6C49\u5316\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 vscode-language-pack-zh-hans # monaco-editor \u4E2D\u6587\u8BED\u8A00\u5305\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 packages # \u9879\u76EE\u4E3B\u8981package</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 constant # \u5168\u5C40\u5E38\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 editor # \u9875\u9762\u7F16\u8F91\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 event-action # \u4E8B\u4EF6\u52A8\u4F5C\u6267\u884C\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 library # \u7269\u6599\u7EC4\u4EF6\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 preview # \u9884\u89C8\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 types # \u5168\u5C40\u7C7B\u578B\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 utils # \u5168\u5C40\u5DE5\u5177\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .editorconfig # IDE\u7F16\u8F91\u5668\u9009\u9879\u9884\u8BBE</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .eslintignore # eslint \u5FFD\u7565\u89C4\u5219</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .eslintrc.cjs # eslint \u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .npmrc # pnpm \u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .prettierignore # prettier \u5FFD\u7565\u89C4\u5219</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .prettierrc.cjs # prettier \u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 LICENSE</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 commitlint.config.js # commit lint \u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 pnpm-lock.yaml</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 pnpm-workspace.yaml # monorepo \u5DE5\u4F5C\u7A7A\u95F4\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="packages-constant" tabindex="-1">packages/constant <a class="header-anchor" href="#packages-constant" aria-hidden="true">#</a></h2><p>\u5168\u5C40\u5E38\u91CF</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">constant</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 src</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 index.ts # \u5E38\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 package.json # \u6BCF\u4E00\u4E2A\u5305\u90FD\u5FC5\u987B\u5305\u542B\u8BE5\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="packages-editor" tabindex="-1">packages/editor <a class="header-anchor" href="#packages-editor" aria-hidden="true">#</a></h2><p>\u9875\u9762\u7F16\u8F91\u5668</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">editor</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 config # editor \u9879\u76EE\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 plugins # vite \u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 vite.config.base.ts # \u57FA\u7840 vite \u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 vite.config.dev.ts # \u5F00\u53D1\u73AF\u5883 vite \u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 vite.config.prod.ts # \u751F\u4EA7\u73AF\u5883 vite \u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 public</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 icon.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 src</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 assets # \u9759\u6001\u8D44\u6E90/\u5168\u5C40\u6837\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 components # \u901A\u7528\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 constant # \u5168\u5C40\u5E38\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 directive # \u5168\u5C40\u81EA\u5B9A\u4E49\u6307\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 hooks # \u5168\u5C40\u7EC4\u5408\u5F0F\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 library # \u5BFC\u5165 packages/library</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 plugins # \u9879\u76EE\u7528\u5230\u7684npm\u5305\uFF0C\u76F4\u63A5\u5199\u5728main.ts\u4E0D\u65B9\u4FBF\uFF0C\u5C31\u653E\u8FD9\u91CC</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 router # \u8DEF\u7531</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 stores # pinia store</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 types # editor \u7C7B\u578B\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 utils # \u5DE5\u5177\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 views # \u4E1A\u52A1\u9875\u9762\u5165\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 App.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 main.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 types # editor \u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 auto-imports.d.ts # unplugin-auto-import \u81EA\u52A8\u751F\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 color-picker.d.ts # color-picker-v3 \u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 components.d.ts # unplugin-vue-components \u81EA\u52A8\u751F\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 env.d.ts # vite/client \u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 global.d.ts # \u5176\u4ED6\u5168\u5C40\u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 index.html # \u5165\u53E3\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 pnpm-lock.yaml</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 postcss.config.js # \u670D\u52A1\u4E8E tailwind</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 stats.html # rollup-plugin-visualizer \u6253\u5305\u5927\u5C0F\u5206\u6790</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 tailwind.config.js # tailwind \u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 tsconfig.config.json # node \u73AF\u5883typescript\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 tsconfig.json # web \u73AF\u5883typescript\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="packages-event-action" tabindex="-1">packages/event-action <a class="header-anchor" href="#packages-event-action" aria-hidden="true">#</a></h2><p>\u4E8B\u4EF6\u52A8\u4F5C\u6267\u884C\u5668</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">event-action</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 src</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 actions # \u89E6\u53D1\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 component # \u7EC4\u4EF6\u7C7B\u89E6\u53D1\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 other # \u5176\u4ED6\u7C7B\u522B\u89E6\u53D1\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 page # \u9875\u9762\u7C7B\u89E6\u53D1\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 service # \u670D\u52A1\u7C7B\u89E6\u53D1\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 utils # \u5DE5\u5177\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502       \u2514\u2500\u2500 util.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 types # \u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 env.d.ts # vite/client \u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 tsconfig.json # web \u73AF\u5883typescript\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="packages-library" tabindex="-1">packages/library <a class="header-anchor" href="#packages-library" aria-hidden="true">#</a></h2><p>\u7269\u6599\u7EC4\u4EF6\u5E93</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">library</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 src</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 components # \u7269\u6599\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 business # \u4E1A\u52A1\u7EC4\u4EF6 \u5206\u7C7B \u5BF9\u5E94\u4E8E editor \u4E1A\u52A1\u7EC4\u4EF6 tab</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2502   \u2514\u2500\u2500 show # \u5C55\u793A \u5C0F\u7C7B \u5BF9\u5E94\u4E8E editor \u4E1A\u52A1\u7EC4\u4EF6 tab \u4E0B\u7684 show collapse</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2502       \u2514\u2500\u2500 swipe # \u5E7B\u706F\u7247</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 generic # \u901A\u7528\u7EC4\u4EF6 \u5206\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502       \u251C\u2500\u2500 input # \u8868\u5355 \u5C0F\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502       \u2502   \u251C\u2500\u2500 button # \u6309\u94AE</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502       \u2502   \u2502   \u2514\u2500\u2500 index.vue # \u6309\u94AE\u7EC4\u4EF6\u5165\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502       \u2502   \u2514\u2500\u2500 textbox # \u6587\u672C\u6846</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502       \u2502       \u2514\u2500\u2500 index.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502       \u2514\u2500\u2500 show # \u5C55\u793A \u5C0F\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502           \u251C\u2500\u2500 collapse # \u6298\u53E0\u9762\u677F</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502           \u2502   \u251C\u2500\u2500 components # \u5B50\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502           \u2502   \u2502   \u2514\u2500\u2500 preview.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502           \u2502   \u2514\u2500\u2500 index.vue # \u7EC4\u4EF6\u5165\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502           \u251C\u2500\u2500 image # \u56FE\u7247</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502           \u2502   \u2514\u2500\u2500 index.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502           \u251C\u2500\u2500 notice-bar # \u901A\u77E5\u680F</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502           \u2502   \u2514\u2500\u2500 index.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502           \u2514\u2500\u2500 swipe # \u8F6E\u64AD\u56FE</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502               \u251C\u2500\u2500 components # \u5B50\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502               \u2502   \u2514\u2500\u2500 preview.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502               \u2514\u2500\u2500 index.vue # \u5165\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 hooks # \u7EC4\u5408\u5F0F\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 use-library-component-custom-trigger.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 use-multi-click.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 utils # \u5DE5\u5177\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502       \u2514\u2500\u2500 library.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 types # \u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 env.d.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 index.ts # \u7269\u6599\u7EC4\u4EF6\u5E93\u5165\u53E3\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 tsconfig.config.json # node \u73AF\u5883typescript\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 tsconfig.json # web \u73AF\u5883typescript\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="packages-preview" tabindex="-1">packages/preview <a class="header-anchor" href="#packages-preview" aria-hidden="true">#</a></h2><p>\u9884\u89C8\u6A21\u5757</p><p>\u6587\u4EF6\u5939\u7ED3\u6784\u540C <code>packages/editor</code> \u8FD9\u91CC\u4E0D\u518D\u8D58\u8FF0</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">preview</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 config</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 plugins</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 vite.config.base.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 vite.config.dev.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 vite.config.prod.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 src</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 plugins</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 router</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 stores</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 views</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 App.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 main.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 types</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 auto-imports.d.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 components.d.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 env.d.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 tsconfig.config.json</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 tsconfig.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="packages-types" tabindex="-1">packages/types <a class="header-anchor" href="#packages-types" aria-hidden="true">#</a></h2><p>\u5168\u5C40\u7C7B\u578B\u5B9A\u4E49</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">types</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 src</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 action.ts # \u52A8\u4F5C\u5904\u7406\u5668 \u76F8\u5173\u7C7B\u578B\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 event-trigger.ts # \u4E8B\u4EF6\u89E6\u53D1\u5668 \u76F8\u5173\u7C7B\u578B\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 library-component.ts # \u7269\u6599\u7EC4\u4EF6 \u76F8\u5173\u7C7B\u578B\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 panel.ts # \u64CD\u4F5C\u9762\u677F/\u8BBE\u7F6E\u5668 \u76F8\u5173\u7C7B\u578B\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 util.ts # \u5DE5\u5177\u5E93 \u76F8\u5173\u7C7B\u578B\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 index.ts # \u5165\u53E3\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 tsconfig.json # web \u73AF\u5883typescript\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="packages-utils" tabindex="-1">packages/utils <a class="header-anchor" href="#packages-utils" aria-hidden="true">#</a></h2><p>\u5168\u5C40\u5DE5\u5177\u5E93</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">utils</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 src</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 action.ts # \u52A8\u4F5C\u5904\u7406\u5668 \u5DE5\u5177\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 library.ts # \u7269\u6599\u7EC4\u4EF6 \u5DE5\u5177\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 index.ts # \u5165\u53E3\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 package.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="internal-build-utils" tabindex="-1">internal/build-utils <a class="header-anchor" href="#internal-build-utils" aria-hidden="true">#</a></h2><p>\u6784\u5EFA\u5DE5\u5177\uFF0C\u7528\u4E8E\u5B9A\u4F4D\u6784\u5EFA\u8F93\u51FA\u76EE\u5F55</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">build-utils</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 src</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 index.ts # \u6784\u5EFA\u5DE5\u5177\u5165\u53E3\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 paths.ts # \u6253\u5305\u8F93\u51FA\u8DEF\u5F84\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 build.config.ts # unbuild \u6253\u5305\u5DE5\u5177\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 tsconfig.json # node \u73AF\u5883typescript\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="internal-vite-plugin-monaco-editor-nls" tabindex="-1">internal/vite-plugin-monaco-editor-nls <a class="header-anchor" href="#internal-vite-plugin-monaco-editor-nls" aria-hidden="true">#</a></h2><p>monaco-editor i18n \u63D2\u4EF6\uFF0C\u81EA\u884C\u4FEE\u590D\u7EF4\u62A4\uFF0C\u4E0D\u4F9D\u8D56\u539F\u4F5C\u8005</p><div class="language-text"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">vite-plugin-monaco-editor-nls</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 src</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 locale # \u65E7\u7248\u8BED\u8A00\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 index.ts # \u63D2\u4EF6\u5165\u53E3 &amp; \u6838\u5FC3</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 tsconfig.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="internal-vscode-language-pack-zh-hans" tabindex="-1">internal/vscode-language-pack-zh-hans <a class="header-anchor" href="#internal-vscode-language-pack-zh-hans" aria-hidden="true">#</a></h2><p>\u7531\u4E8E\u6CA1\u6709\u9002\u7528\u4E8E vite \u7684 monaco-editor \u76F8\u5173\u8BED\u8A00\u5305\u4F5C\u4E3A npm \u5305\u5355\u72EC\u53D1\u5E03</p><p>\u6240\u4EE5\u8FD9\u91CC\u76F4\u63A5\u5C06\u8BED\u8A00\u5305\u5185\u7F6E\u4E8E\u9879\u76EE\u4E4B\u4E2D\uFF0C\u968F\u65F6\u540C\u6B65\u5B98\u65B9 <a href="https://github.com/microsoft/vscode-loc" target="_blank" rel="noopener noreferrer">vscode-loc</a></p>`,34);function d(D,g,u,v,h,m){const a=t("zoom-img");return l(),e("div",null,[r,A,C,o(a,{src:"/monorepo.svg"}),y])}var f=p(i,[["render",d]]);export{b as __pageData,f as default};
