(this["webpackJsonpcurrency-manager"]=this["webpackJsonpcurrency-manager"]||[]).push([[4],{337:function(e,t,a){"use strict";a.r(t);var r=a(17),n=a.n(r),c=a(23),s=a(3),i=a(4),j=a(5),o=a(6),h=a(0),u=a(24),b=a(1),d=function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.no,a=e.mid;return Object(b.jsxs)("div",{children:[Object(b.jsx)("strong",{children:a})," PLN",Object(b.jsx)("br",{}),Object(b.jsx)("small",{children:t})]})}}]),a}(h.Component),l=d,O=a(330),p=a(326),m=a(335),x=a(322),f=a(323),v=a(328),y=function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,i=new Array(r),j=0;j<r;j++)i[j]=arguments[j];return(e=t.call.apply(t,[this].concat(i))).componentDidMount=Object(c.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a("".concat(e.props.match.params.name));case 2:a=t.sent,e.setState({exchangeRate:a,finish:!0});case 4:case"end":return t.stop()}}),t)}))),e.state={finish:!1,exchangeRate:[]},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.exchangeRate,a=e.finish;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"currency-rates",children:["Currency rates for ",Object(b.jsx)("strong",{children:this.props.match.params.name})]}),Object(b.jsx)("div",{className:"chart",children:Object(b.jsxs)(O.a,{width:550,height:300,data:t.rates,children:[Object(b.jsx)(p.a,{type:"monotone",dataKey:"mid",stroke:"#8884d8"}),Object(b.jsx)(m.a,{stroke:"#a5a1a1",strokeDasharray:"5 5"}),Object(b.jsx)(x.a,{dataKey:"effectiveDate"}),Object(b.jsx)(f.a,{}),Object(b.jsx)(v.a,{})]})}),Object(b.jsx)("div",{className:"currency-rates-table",children:Object(b.jsx)("div",{className:"currency-rates-table-items",children:!0===a&&t.rates.map((function(e){return Object(b.jsx)(l,{no:e.no,mid:e.mid},e.no)}))})})]})}}]),a}(h.Component);t.default=y}}]);
//# sourceMappingURL=4.2a0c2d8d.chunk.js.map