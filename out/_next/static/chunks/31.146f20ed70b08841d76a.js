(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{ZTiS:function(e,t,n){"use strict";n.r(t);var r=n("doui"),a=n("q1tI"),o=n.n(a),l=n("UgXd"),c=n.n(l),u=n("BOKN"),s=(n("3SJ+"),n("YTkO"),c()(function(){return Promise.resolve().then(n.bind(null,"rSNO")).then(function(e){return e.ModalCloseButton})},{loadableGenerated:{webpack:function(){return["rSNO"]},modules:["../General"]}})),d=c()(function(){return Promise.resolve().then(n.bind(null,"rSNO")).then(function(e){return e.ModalSaveButton})},{loadableGenerated:{webpack:function(){return["rSNO"]},modules:["../General"]}}),i=c()(function(){return n.e(20).then(n.t.bind(null,"WFjJ",7)).then(function(e){return e.SketchPicker})},{loadableGenerated:{webpack:function(){return["WFjJ"]},modules:["react-color"]}});t.default=function(){var e=Object(a.useState)("fg"),t=Object(r.default)(e,2),n=t[0],l=t[1];return o.a.createElement(u.a.Consumer,null,function(e){return o.a.createElement(a.Fragment,null,o.a.createElement("form",{className:"w-full max-w-sm"},o.a.createElement("ul",{className:"flex list-style-none mp-start-none"},o.a.createElement("li",{className:"flex-1 mx-2"},o.a.createElement("a",{className:"fg"===n?"text-center block border border-brightGreen rounded py-2 px-4 bg-teal-200 text-bg":"text-center block border border-white rounded text-teal-200 hover:border-transparent hover:text-bg hover:bg-teal-200 py-2 px-4",href:"#",onClick:function(e){e.preventDefault(),l("fg")}},"Foreground")),o.a.createElement("li",{className:"flex-1 mx-2"},o.a.createElement("a",{className:"bg"===n?"text-center block border border-brightGreen rounded py-2 px-4 bg-teal-200 text-bg":"text-center block border border-white rounded text-teal-200 hover:border-transparent hover:text-bg hover:bg-teal-200 py-2 px-4",href:"#",onClick:function(e){e.preventDefault(),l("bg")}},"Background"))),o.a.createElement("div",{className:"fg"===n?"px-3 pt-4":"visually-hidden"},o.a.createElement("label",{className:"block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2",htmlFor:"grid-last-name"},"Foreground"),o.a.createElement(i,{color:e.settings.color,onChangeComplete:function(t){return e.onChangeSettings("color",t.hex)}})),o.a.createElement("div",{className:"bg"===n?"px-3 pt-4":"visually-hidden"},o.a.createElement("label",{className:"block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2",htmlFor:"grid-last-name"},"Background Color"),o.a.createElement(i,{color:e.settings.backgroundColor,onChangeComplete:function(t){return e.onChangeSettings("backgroundColor",t.hex)}})),o.a.createElement(d,{context:e,label:"Save Font Settings"}),o.a.createElement(s,{context:e,label:"Close"})))})}}}]);