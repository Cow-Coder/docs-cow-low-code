import{_ as a,o as t,c as o,a as r,b as n,r as s}from"./app.56a20fc9.js";const f=JSON.parse('{"title":"\u7269\u6599\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5F15\u8A00","slug":"\u5F15\u8A00"},{"level":2,"title":"\u5B9A\u4E49","slug":"\u5B9A\u4E49"},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"}],"relativePath":"guide/component.md","lastUpdated":1661432715000}'),i={name:"guide/component.md"},d=n('<h1 id="\u7269\u6599\u7EC4\u4EF6" tabindex="-1">\u7269\u6599\u7EC4\u4EF6 <a class="header-anchor" href="#\u7269\u6599\u7EC4\u4EF6" aria-hidden="true">#</a></h1><h2 id="\u5F15\u8A00" tabindex="-1">\u5F15\u8A00 <a class="header-anchor" href="#\u5F15\u8A00" aria-hidden="true">#</a></h2><p>\u725B\u642D\u7684\u8BDE\u751F\u79BB\u4E0D\u5F00\u73B0\u5982\u4ECA\u4F18\u79C0\u7684\u5F00\u6E90\u6C1B\u56F4\u4EE5\u53CA\u5404\u4E2A\u5F00\u6E90\u4F4E\u4EE3\u7801\u9879\u76EE</p><p>\u6211\u4EEC\u6709\u4E00\u90E8\u5206\u60F3\u6CD5/\u601D\u8DEF/\u6982\u5FF5\u662F\u6E90\u81EA\u4E8E <a href="https://lowcode-engine.cn/lowcode" target="_blank" rel="noopener noreferrer">\u300A\u4F4E\u4EE3\u7801\u5F15\u64CE\u642D\u5EFA\u534F\u8BAE\u89C4\u8303\u300B</a></p><h2 id="\u5B9A\u4E49" tabindex="-1">\u5B9A\u4E49 <a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a></h2><ul><li><strong>\u7EC4\u4EF6\u552F\u4E00\u6807\u8BC6</strong> - \u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u6709\u4E00\u4E2A\u5168\u5C40\u552F\u4E00\u6807\u8BC6\uFF0C\u7528\u4E8E\u8BC6\u522B\u7EC4\u4EF6\u5B9E\u4F8B\uFF08\u76F8\u5F53\u4E8E DOM id\uFF09\uFF0C\u7EC4\u4EF6\u552F\u4E00\u6807\u8BC6\u53EF\u4EE5\u901A\u8FC7\u7EC4\u4EF6\u5C5E\u6027\u9762\u677F\u8FDB\u884C\u67E5\u770B\uFF1B\u56E0\u7EC4\u4EF6\u7684\u552F\u4E00\u6807\u8BC6\u7684\u66F4\u6539\uFF0C\u4F1A\u5F71\u54CD\u6570\u636E\u5E93\u5B58\u50A8\uFF08\u6A21\u578B\u53EF\u80FD\u4E0D\u540C\uFF0C\u4F1A\u5BFC\u81F4\u6570\u636E\u5BF9\u4E0D\u4E0A\u7684\u60C5\u51B5\uFF09\uFF0C\u4E3A\u4E86\u4E0D\u8BA9\u666E\u901A\u7528\u6237\u8BEF\u64CD\u4F5C\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86 Schema \u7F16\u8F91\u6A21\u5F0F\uFF0C\u5F53\u5F00\u53D1\u8005\u9700\u8981\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u5C0F\u5FC3\u4F7F\u7528\uFF1B</li><li><strong>\u7269\u6599</strong> - \u80FD\u591F\u88AB\u6C89\u6DC0\u4E0B\u6765\u76F4\u63A5\u4F7F\u7528\u7684\u524D\u7AEF\u80FD\u529B\uFF0C\u4E00\u822C\u8868\u73B0\u4E3A\u4E1A\u52A1\u7EC4\u4EF6\u3001\u533A\u5757\u3001\u6A21\u677F\u3002</li><li><strong>\u4E1A\u52A1\u7EC4\u4EF6\uFF08Business Component\uFF09</strong> - \u4E1A\u52A1\u9886\u57DF\u5185\u57FA\u4E8E\u57FA\u7840\u7EC4\u4EF6\u4E4B\u4E0A\u5B9A\u4E49\u7684\u7EC4\u4EF6\uFF0C\u53EF\u80FD\u4F1A\u5305\u542B\u7279\u5B9A\u4E1A\u52A1\u57DF\u7684\u4EA4\u4E92\u6216\u8005\u662F\u4E1A\u52A1\u6570\u636E\u3002</li><li><strong>\u4F4E\u4EE3\u7801\u4E1A\u52A1\u7EC4\u4EF6\uFF08Low-Code Business Component\uFF09</strong> - \u901A\u8FC7\u4F4E\u4EE3\u7801\u7F16\u8F91\u5668\u642D\u5EFA\u800C\u6765\uFF0C\u6709\u522B\u4E8E\u6E90\u7801\u5F00\u53D1\u7684\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u5C5E\u4E8E\u4E1A\u52A1\u7EC4\u4EF6\u4E2D\u7684\u4E00\u79CD\u7C7B\u578B\uFF0C\u9075\u5FAA\u4E1A\u52A1\u7EC4\u4EF6\u7684\u5B9A\u4E49\uFF1B\u540C\u65F6\u4F4E\u4EE3\u7801\u4E1A\u52A1\u7EC4\u4EF6\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4F4E\u4EE3\u7801\u7F16\u8F91\u5668\u7EE7\u7EED\u591A\u6B21\u7F16\u8F91\u3002</li></ul><details class="details custom-block"><summary>\u7EC6\u8282</summary><p>\u4E0A\u8FF0\u90E8\u5206\u5B9A\u4E49\u53D6\u81EA\u4E8E <a href="https://developers.aliwork.com/docs/guide/keywords" target="_blank" rel="noopener noreferrer">\u5B9C\u642D</a></p></details><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><p>\u4E0B\u56FE\u4E2D\u6846\u9009\u7684\u90FD\u88AB\u79F0\u4E3A <code>\u7269\u6599\u7EC4\u4EF6</code></p>',9);function l(c,h,p,_,m,g){const e=s("zoom-img");return t(),o("div",null,[d,r(e,{src:"https://tva1.sinaimg.cn/large/008d89Swgy1h5d6thmlowj30c809qt9o.jpg"})])}var v=a(i,[["render",l]]);export{f as __pageData,v as default};