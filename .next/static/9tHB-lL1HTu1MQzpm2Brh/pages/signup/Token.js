(window.webpackJsonp=window.webpackJsonp||[]).push([[16,25],{"/h46":function(e,t,n){n("cHUd")("Map")},"5Uuq":function(e,t,n){var r=n("Jo+v"),o=n("hfKm");e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=o&&r?r(e,n):{};a.get||a.set?o(t,n,a):t[n]=e[n]}return t.default=e,t}},CHpp:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup/Token",function(){var e=n("vVd4");return{page:e.default||e}}])},LX0d:function(e,t,n){e.exports=n("UDep")},UDep:function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),e.exports=n("WEpk").Map},XLbu:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("KI45"),o=r(n("0iUn")),a=r(n("sLSF")),i=r(n("MI3g")),u=r(n("a7VT")),s=r(n("Tit0")),l=n("5Uuq"),c=n("KI45");t.__esModule=!0,t.default=void 0;var p,f=c(n("LX0d")),d=n("CxY0"),h=l(n("q1tI")),v=(c(n("17x9")),c(n("nOHt"))),m=(n("KA3u"),n("Bu4q"));function g(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var b=new f.default,w=window.IntersectionObserver;function k(){return p||(w?p=new w(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var y=function(e){function t(){var e;return(0,o.default)(this,t),(e=(0,i.default)(this,(0,u.default)(t).apply(this,arguments))).cleanUpListeners=function(){},e.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}(function(e,t){return{href:g(e),as:t?g(t):t}}),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=e.formatUrls(e.props.href,e.props.as),i=a.href,u=a.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var s=window.location.pathname;i=(0,d.resolve)(s,i),u=u?(0,d.resolve)(s,u):i,t.preventDefault();var l=e.props.scroll;null==l&&(l=u.indexOf("#")<0),v.default[e.props.replace?"replace":"push"](i,u,{shallow:e.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,s.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){this.cleanUpListeners=function(){}}},{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.props.prefetch&&w&&e&&e.tagName&&(this.cleanUpListeners=function(e,t){var n=k();return n?(n.observe(e),b.set(e,t),function(){n.unobserve(e),b.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.props.prefetch){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,d.resolve)(e,t);v.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var a=h.Children.only(t),i={ref:function(t){return e.handleRef(t)},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch()},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),h.default.cloneElement(a,i)}}]),t}(h.Component);y.propTypes=void 0,y.defaultProps={prefetch:!0};var x=y;t.default=x},dVTT:function(e,t,n){n("aPfg")("Map")},g33z:function(e,t,n){"use strict";var r=n("Wu5q"),o=n("n3ko");e.exports=n("raTm")("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var t=r.getEntry(o(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(o(this,"Map"),0===e?0:e,t)}},r,!0)},vVd4:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),u=n("IP2g"),s=n("wHSu");t.default=function(e){var t=e.errors,n=e.handleInput,r=e.nextStep,a=e.tokenValue,l=t.map(function(e,t){return o.a.createElement("p",{className:"text-sm text-red-400 mb-2",key:t},e)});return o.a.createElement("form",{className:"bg-bg2 shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:function(e){e.preventDefault(),r(a)}},o.a.createElement("div",{className:"mb-4"},o.a.createElement("label",{className:"block text-grey-darker text-md font-hairline mb-6",htmlFor:"username"},"Please enter your ",o.a.createElement("strong",null,"Registration Token"),"."),o.a.createElement("input",{autoFocus:!0,autoComplete:"off",spellCheck:!1,className:"shadow-lg appearance-none border rounded w-full py-2 px-3 text-bg font-mono focus:bg-blue-100 text-md tracking-wide",id:"token",name:"token",type:"text",placeholder:"Registration Token",value:a,onChange:function(e){return n(e)},required:!0})),t?l:"",o.a.createElement("div",{className:"flex items-center justify-between"},o.a.createElement(i.a,{href:"/signin",prefetch:!0},o.a.createElement("a",{className:"text-green-200 underline"},"Request a token")),o.a.createElement("button",{className:"bg-blue hover:bg-blue-dark text-teal-200 font-bold py-2 px-4 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200",type:"submit"},"Continue",o.a.createElement(u.a,{icon:s.a,className:"mx-2"}))))}}},[["CHpp",1,0]]]);