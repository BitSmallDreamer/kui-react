/*! react-kui v1.0.0 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{280:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=i(t(6)),f=i(t(5)),n=i(t(4)),s=i(t(3)),d=i(t(2)),u=i(t(1)),r=t(21);t(46);function i(e){return e&&e.__esModule?e:{default:e}}r.Collapse.Panel;var c=function(e){function a(e){(0,f.default)(this,a);var t=(0,s.default)(this,(a.__proto__||(0,l.default)(a)).call(this,e));return t.state={items:["hello","world","click","me"],a:!1},t.handleAdd=t.handleAdd.bind(t),t}return(0,d.default)(a,e),(0,n.default)(a,[{key:"handleAdd",value:function(){this.setState({a:!this.state.a})}},{key:"handleRemove",value:function(e){var a=this.state.items.slice();a.splice(e,1),this.setState({items:a})}},{key:"render",value:function(){var e=this;this.state.items.map(function(a,t){return u.default.createElement("div",{key:a,onClick:function(){return e.handleRemove(t)}},a)});return u.default.createElement("div",null,u.default.createElement("button",{onClick:this.handleAdd},"Add Item"),u.default.createElement(r.Transition,{name:"dropdown",show:this.state.a},u.default.createElement("div",null,u.default.createElement("p",null,"fdfsafasfasfdas"),u.default.createElement("p",null,"fdfsafasfasfdas"),u.default.createElement("p",null,"fdfsafasfasfdas"),u.default.createElement("p",null,"fdfsafasfasfdas"),u.default.createElement("p",null,"fdfsafasfasfdas"),u.default.createElement("p",null,"fdfsafasfasfdas"),u.default.createElement("p",null,"fdfsafasfasfdas"),u.default.createElement("p",null,"fdfsafasfasfdas"),u.default.createElement("p",null,"fdfsafasfasfdas"))))}}]),a}(u.default.Component);a.default=c}}]);