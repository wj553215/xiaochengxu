(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/search-hot-list/search-hot-list"],{1234:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var a={hotRanking:function(){return Promise.all([e.e("common/vendor"),e.e("components/hot-ranking/hot-ranking")]).then(e.bind(null,"1e3a"))}},r=function(){var t=this.$createElement;this._self._c},o=[]},"285f":function(t,n,e){},"2b71":function(t,n,e){"use strict";e.r(n);var a=e("f0b1"),r=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=r.a},"3fde":function(t,n,e){"use strict";var a=e("285f"),r=e.n(a);r.a},"989a":function(t,n,e){"use strict";e.r(n);var a=e("1234"),r=e("2b71");for(var o in r)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(o);e("3fde");var i=e("f0c5"),c=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=c.exports},f0b1:function(t,n,e){"use strict";var a=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e("2eee")),o=a(e("c973")),i=e("e7e8"),c={name:"search-hot-list",data:function(){return{hotList:[]}},created:function(){this.loadSearchHotList()},methods:{loadSearchHotList:function(){var t=this;return(0,o.default)(r.default.mark((function n(){var e;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,i.getSearchHotList)();case 2:e=n.sent,console.log(e[1].data.data.list),t.hotList=e[1].data.data.list;case 5:case"end":return n.stop()}}),n)})))()},onItemClick:function(t,n){this.$emit("onSearch",t.label)}}};n.default=c}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/search-hot-list/search-hot-list-create-component',
    {
        'components/search-hot-list/search-hot-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("989a"))
        })
    },
    [['components/search-hot-list/search-hot-list-create-component']]
]);