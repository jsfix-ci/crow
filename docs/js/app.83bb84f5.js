(function(t){function e(e){for(var a,s,o=e[0],l=e[1],u=e[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(m.length)m.shift()();return r.push.apply(r,u||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],a=!0,o=1;o<i.length;o++){var l=i[o];0!==n[l]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var a={},n={app:0},r=[];function s(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=a,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(i,a,function(e){return t[e]}.bind(null,a));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/crow/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"0199":function(t,e,i){},"034f":function(t,e,i){"use strict";var a=i("85ec"),n=i.n(a);n.a},4678:function(t,e,i){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return i(e)}function r(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id="4678"},7657:function(t,e,i){"use strict";var a=i("e790"),n=i.n(a);n.a},"85ec":function(t,e,i){},b7e4:function(t,e,i){"use strict";var a=i("0199"),n=i.n(a);n.a},cd49:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("0cdd");var a=i("2b0e"),n=i("5f5b");i("ab8b"),i("2dd8");a["default"].use(n["a"]);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("b-navbar",{attrs:{type:"light",variant:"light",toggleable:"lg"}},[i("b-container",[i("b-navbar-brand",[t._v("CROW")])],1)],1),i("main",[i("Crow")],1),i("footer",[i("b-container",[i("b-row",[i("b-col",{attrs:{lg:""}},[t._v(" Created by the "),i("a",{attrs:{href:"https://oscibio.inbo.be"}},[t._v("Open science lab for biodiversity")])]),i("b-col",{staticClass:"text-right",attrs:{lg:""}},[i("a",{attrs:{href:"https://github.com/inbo/crow/"}},[t._v("Source code")]),t._v(" version "),i("code",[i("a",{attrs:{href:"https://github.com/inbo/crow/tree/"+t.commitHash()}},[t._v(t._s(t.commitHash()))])])])],1)],1)],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-container",{staticClass:"content"},[i("b-form",{staticClass:"mb-4",attrs:{form:""},on:{change:t.loadData}},[i("b-row",[i("b-col",{attrs:{lg:""}},[i("b-row",[i("b-col",{attrs:{sm:""}},[i("b-form-group",{attrs:{id:"input-radar-group",label:"Radar:","label-for":"input-radar",description:t.selectedRadarLocation+" is located in "+t.selectedRadarCountry+"."}},[i("b-form-select",{attrs:{id:"input-radar",size:"sm",options:t.availableRadars,"value-field":"ODIMCode","text-field":"location"},model:{value:t.selectedRadarODIMCode,callback:function(e){t.selectedRadarODIMCode=e},expression:"selectedRadarODIMCode"}})],1)],1),i("b-col",{attrs:{sm:""}},[i("b-form-group",{attrs:{id:"input-date-group",label:"Date:","label-for":"input-date",description:"Charts will be centered on noon for selected date."}},[i("b-input-group",{attrs:{size:"sm"}},[i("b-input-group-prepend",[i("b-button",{attrs:{variant:"outline-secondary"},on:{click:t.decrementPeriod}},[t._v("-"+t._s(t.selectedIntervalLabel))])],1),i("b-form-input",{attrs:{id:"input-date",type:"date",placeholder:"Type a date..."},model:{value:t.selectedDate,callback:function(e){t.selectedDate=e},expression:"selectedDate"}}),i("b-input-group-append",[i("b-button",{attrs:{variant:"outline-secondary"},on:{click:t.incrementPeriod}},[t._v("+"+t._s(t.selectedIntervalLabel))])],1)],1)],1)],1)],1)],1),i("b-col",{attrs:{lg:""}},[i("b-row",[i("b-col",{attrs:{cols:"6",sm:"3"}},[i("b-form-group",{attrs:{id:"input-interval-group",label:"Interval:","label-for":"input-interval"}},[i("b-form-radio-group",{attrs:{id:"input-interval",size:"sm",buttons:"","button-variant":"outline-secondary",options:t.availableIntervals},model:{value:t.selectedIntervalInHours,callback:function(e){t.selectedIntervalInHours=e},expression:"selectedIntervalInHours"}})],1)],1),i("b-col",{attrs:{cols:"6",sm:"3"}},[i("b-form-group",{attrs:{id:"input-timezone-group",label:"Time zone:","label-for":"input-timezone"}},[i("b-form-radio-group",{attrs:{id:"input-timezone",size:"sm",buttons:"","button-variant":"outline-secondary"},model:{value:t.timeDisplayedAs,callback:function(e){t.timeDisplayedAs=e},expression:"timeDisplayedAs"}},[i("b-form-radio",{attrs:{value:"radarLocal"}},[t._v("Radar")]),i("b-form-radio",{attrs:{value:"UTC"}},[t._v("UTC")])],1)],1)],1)],1)],1)],1)],1),t.showCharts?i("div",[i("b-row",[i("b-col",[i("v-p-chart",{attrs:{"vtps-data":t.radarVtpsAsArray,showTimeAs:t.timeZoneToShow,"style-config":t.VPChartStyle},scopedSlots:t._u([{key:"title",fn:function(){return[i("h3",[t._v("VP Chart")])]},proxy:!0},{key:"in-x-axis-group",fn:function(){return[i("timeline-chart",{attrs:{periods:t.timePeriods,"style-config":t.TimelineChartStyle,showTimeAs:t.timeZoneToShow}})]},proxy:!0}],null,!1,470778960)})],1)],1),i("b-row",[i("b-col",[i("v-p-i-chart",{attrs:{"vpi-data":t.integratedProfiles,"style-config":t.VPIChartStyle,showTimeAs:t.timeZoneToShow,"data-temporal-resolution":t.dataTemporalResolution},scopedSlots:t._u([{key:"title",fn:function(){return[i("h3",[t._v("VPI Chart")])]},proxy:!0},{key:"in-x-axis-group",fn:function(){return[i("timeline-chart",{attrs:{periods:t.timePeriods,"style-config":t.TimelineChartStyle,showTimeAs:t.timeZoneToShow}})]},proxy:!0}],null,!1,2442551001)})],1)],1)],1):t._e()],1)},l=[],u=(i("7db0"),i("4160"),i("4fad"),i("159b"),i("9ab4")),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._t("title"),i("svg",{attrs:{id:"vp-chart",width:t.styleConfig.width,height:t.styleConfig.height}},[i("g",{attrs:{transform:"translate("+t.margin.left+", "+t.margin.top+")"}},[i("g",{attrs:{transform:"translate(0, "+this.innerHeight+")"}},[t._t("in-x-axis-group"),i("g",{directives:[{name:"xaxis",rawName:"v-xaxis",value:{scale:t.xScale,timezone:t.showTimeAs,timeAxisFormat:t.styleConfig.timeAxisFormat},expression:"{'scale': xScale, 'timezone': showTimeAs, 'timeAxisFormat': styleConfig.timeAxisFormat}"}]})],2),i("g",{directives:[{name:"yaxis-left",rawName:"v-yaxis-left",value:{scale:t.yScale,tickValues:t.styleConfig.yAxisLeftTicks},expression:"{'scale': yScale, 'tickValues': styleConfig.yAxisLeftTicks}"}]}),t._l(t.vtpsDataPrepared,(function(e){return[i("rect",{key:"rect-"+e.timestamp+"-"+e.height,attrs:{id:"rect-"+e.timestamp+"-"+e.height,x:e.x,y:e.y,fill:e.fill,height:t.rectHeight,width:t.rectWidth}}),t.styleConfig.showTooltip?i("b-popover",{key:"popover-"+e.timestamp+"-"+e.height,attrs:{target:"rect-"+e.timestamp+"-"+e.height,triggers:"hover",placement:"top"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.formatTimestamp(e.timestamp)))]},proxy:!0}],null,!0)},[i("b",[t._v("Height")]),t._v(" "+t._s(e.height)+"m "),i("br"),i("b",[t._v("Density")]),t._v(" "+t._s(e.dens)+" ")]):t._e()]})),i("g",{directives:[{name:"yaxis-right",rawName:"v-yaxis-right",value:{scale:t.yScaleFeet},expression:"{'scale': yScaleFeet }"}],attrs:{transform:"translate("+this.innerWidth+", 0)"}}),i("text",{attrs:{"text-anchor":"end",transform:"rotate(-90)",y:20-this.margin.left,x:-this.margin.top-70}},[t._v("Height (meters)")]),i("text",{attrs:{"text-anchor":"end",transform:"rotate(-90)",y:this.innerWidth+55,x:-this.margin.top-70}},[t._v("Height (feet)")])],2)])],2)},d=[],m=(i("99af"),i("a630"),i("d81d"),i("d3b7"),i("25f0"),i("6062"),i("3ca3"),i("ddb0"),i("5698")),f=(i("4de4"),i("13d5"),i("fb6a"),i("a434"),i("a9e3"),i("9129"),i("ac1f"),i("5319"),i("1276")," D-M@HH:mm z"),h=65,p=60,v=1152+h+p,b={dataBaseUrl:"https://crow.weernet.be",availableRadars:[{ODIMCode:"behel",location:"Helchteren",country:"Belgium",latitude:51.069199,longitude:5.406138,timezone:"Europe/Brussels"},{ODIMCode:"bejab",location:"Jabbeke",country:"Belgium",latitude:51.1919,longitude:3.0641,timezone:"Europe/Brussels"},{ODIMCode:"bezav",location:"Zaventem",country:"Belgium",latitude:50.9054,longitude:4.4579,timezone:"Europe/Brussels"},{ODIMCode:"bewid",location:"Wideumont",country:"Belgium",latitude:49.9135,longitude:5.5044,timezone:"Europe/Brussels"},{ODIMCode:"nlhrw",location:"Herwijnen",country:"the Netherlands",latitude:51.83708,longitude:5.13797,timezone:"Europe/Amsterdam"},{ODIMCode:"deess",location:"Essen",country:"Germany",latitude:51.4055,longitude:6.9669,timezone:"Europe/Berlin"},{ODIMCode:"denhb",location:"Neuheilenbach",country:"Germany",latitude:50.1097,longitude:6.5483,timezone:"Europe/Berlin"}].sort((function(t,e){return t.location>e.location?1:-1})),initialRadarODIMCode:"behel",localizedDateFormat:"YYYY/MM/DD",availableTimeIntervals:[{text:"1d",value:24},{text:"4d",value:96},{text:"1h",value:1}],initialTimeInterval:24,vtpsFormat:{availableHeights:[0,200,400,600,800,1e3,1200,1400,1600,1800,2e3,2200,2400,2600,2800,3e3,3200,3400,3600,3800,4e3,4200,4400,4600,4800],temporalResolution:300,numHeaderLines:4},VPChartStyle:{margin:{top:20,right:p,bottom:30,left:h},width:v,height:300,showTooltip:!1,minDensityColor:"#f0f0f0",maxDensityColor:"#dc3545",noDataColor:"white",timeAxisFormat:f,yAxisLeftTicks:[0,1e3,2e3,3e3,4e3]},VPIChartStyle:{margin:{top:15,right:p,bottom:30,left:h},width:v,height:300,timeAxisFormat:" HH:mm z",lineColor:"steelblue",showTooltip:!0},TimelineChartStyle:{margin:{top:0,right:0,bottom:0,left:0},width:v-h-p,height:10,timeDisplayFormat:f,showTooltip:!0}},g=i("7f45"),y=i.n(g);function x(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,i="x"==t?e:3&e|8;return i.toString(16)}))}function j(t,e,i){return t.tz(e).format(i)}function M(t,e,i){return j(y()(t),e,i)}function C(t){return t.replace(/[^a-z0-9]/g,(function(t){var e=t.charCodeAt(0);return 32==e?"-":e>=65&&e<=90?"_"+t.toLowerCase():"__"+("000"+e.toString(16)).slice(-4)}))}function D(t){return 3.281*t}function T(t){var e=parseFloat(t);return isNaN(e)?0:e}function w(t){var e=t.split("\n");e=e.splice(b.vtpsFormat.numHeaderLines),e.pop();var i=e.map((function(t){return{datetime:y.a.utc(t.substring(0,13),"YYYYMMDD HHmm").valueOf(),height:+parseInt(t.substring(14,18)),dd:parseFloat(t.substring(47,52)),ff:parseFloat(t.substring(41,46)),dens:T(t.substring(76,82)),sd_vvp:parseFloat(t.substring(53,59)),eta:T(t.substring(70,75))}}));return i}function S(t,e,i,a,n,r){if(void 0===e&&(e=0),void 0===i&&(i=1/0),void 0===a&&(a=200),void 0===n&&(n=2),void 0===r&&(r=NaN),"number"!=typeof e||"number"!=typeof i&&i!=1/0)throw"'altMin'/'altMax' need to be nunmeric";if(!isNaN(r)&&"number"==typeof r)throw"'alpha' needs to be numeric or Nan";i<=e&&console.log("'altMin' should be smaller than 'altMax'");var s=m["e"](t,(function(t){return t.height}));if(void 0==s[0]||void 0==s[1])throw"Can not extract altMin/altMax from data";if(e=Math.max(e,s[0]),i=Math.min(i,s[1]+a),t=t.filter((function(t){return t.height>=e&&t.height<=i})),t=t.filter((function(t){return t.sd_vvp>=n})),0==t.length)return{mtr:NaN,rtr:NaN,vid:NaN,vir:NaN};var o=t.map((function(t){return t.ff})),l=t.map((function(t){return t.dens})),u=t.map((function(t){return t.eta})),c=[];c=isNaN(r)?t.map((function(t){return 1+0*t.dd})):t.map((function(t){return Math.cos(t.dd-r)*Math.PI/180}));var d=.001*a*c.map((function(t,e){return t*o[e]*l[e]*3.6})).filter((function(t){return!Number.isNaN(t)})).reduce((function(t,e){return t+e}),0),f=.001*a*c.map((function(t,e){return t*o[e]*u[e]*3.6})).filter((function(t){return!Number.isNaN(t)})).reduce((function(t,e){return t+e}),0),h=.001*a*l.filter((function(t){return!Number.isNaN(t)})).reduce((function(t,e){return t+e}),0),p=.001*a*u.filter((function(t){return!Number.isNaN(t)})).reduce((function(t,e){return t+e}),0);return{mtr:d,rtr:f,vid:h,vir:p}}var _={readVtps:w,integrateProfile:S,metersToFeet:D,makeSafeForCSS:C,formatTimestamp:M,formatMoment:j,uuidv4:x},A=a["default"].extend({name:"VPChart",props:{vtpsData:Array,styleConfig:Object,showTimeAs:String},data:function(){return{margin:this.styleConfig.margin,innerWidth:this.styleConfig.width-this.styleConfig.margin.left-this.styleConfig.margin.right,innerHeight:this.styleConfig.height-this.styleConfig.margin.top-this.styleConfig.margin.bottom}},methods:{formatTimestamp:function(t){return _.formatTimestamp(t,this.showTimeAs,this.styleConfig.timeAxisFormat)},getRectYValue:function(t){var e=this.yScale(t.toString());return e?e-this.rectHeight:0},getRectColor:function(t){return t.noData?this.styleConfig.noDataColor:this.colorScale(t.dens)}},directives:{yaxisRight:function(t,e,i){var a=e.value.scale,n=m["c"](a).tickSizeOuter(0).tickFormat(m["f"]("d"));n(m["m"](t))},yaxisLeft:function(t,e,i){var a=e.value.scale,n=e.value.tickValues,r=m["b"](a).tickValues(n).tickSizeOuter(0);r(m["m"](t))},xaxis:function(t,e,i){var a=e.value.scale,n=e.value.timezone,r=e.value.timeAxisFormat,s=m["a"](a).ticks(7).tickSize(15).tickFormat((function(t){return _.formatTimestamp(t,n,r)}));s(m["m"](t))}},computed:{rectHeight:function(){return this.innerHeight/this.distinctHeightsMeters.length},rectWidth:function(){return Math.round(this.innerWidth/this.rectDivider)},rectDivider:function(){var t=this.maxTimestamp-this.minTimestamp;return t/1e3/this.dataTemporalResolution+1},minTimestamp:function(){var t=m["i"](this.vtpsData,(function(t){return t.timestamp}));return t||0},maxTimestamp:function(){var t=m["h"](this.vtpsData,(function(t){return t.timestamp}));return t||0},maxDensity:function(){var t=m["h"](this.vtpsData,(function(t){return t.dens}));return t||0},dataTemporalResolution:function(){return(this.vtpsData[26].timestamp-this.vtpsData[0].timestamp)/1e3},distinctHeightsMeters:function(){var t=new Set(this.vtpsData.map((function(t){return t.height})));return Array.from(t.values())},scale:function(){return{x:this.xScale,y:null}},xScale:function(){return m["l"]().domain([this.minTimestamp,this.maxTimestamp+1e3*this.dataTemporalResolution]).range([0,this.innerWidth])},yScale:function(){return m["k"]().range([this.innerHeight,0]).domain(this.distinctHeightsMeters.concat([5e3]).map(String))},yScaleFeet:function(){return m["j"]().range([this.innerHeight,0]).domain([0,15748.03])},colorScale:function(){return m["j"]().range([this.styleConfig.minDensityColor,this.styleConfig.maxDensityColor]).domain([0,this.maxDensity])},vtpsDataPrepared:function(){var t=this;return this.vtpsData.map((function(e){return u["a"]({},e,{x:Math.round(Math.round(t.xScale(e.timestamp))+1),y:t.getRectYValue(e.height),fill:t.getRectColor(e)})}))}}}),P=A,O=i("2877"),k=Object(O["a"])(P,c,d,!1,null,null,null),I=k.exports,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._t("title"),i("b-form",[i("b-form-row",[i("b-col",{attrs:{cols:"3"}},[i("b-form-group",{attrs:{id:"vpi-display-mode-group",label:"Show:","label-for":"vpi-display-mode"}},[i("b-form-select",{attrs:{id:"vpi-display-mode",size:"sm",options:t.availableModes,"value-field":"propertyName","text-field":"label"},model:{value:t.selectedMode,callback:function(e){t.selectedMode=e},expression:"selectedMode"}})],1)],1)],1)],1),i("div",{staticStyle:{"pointer-events":"none"},attrs:{id:"ignore-mouse-events"}}),i("svg",{attrs:{id:"new-vpi-chart",width:t.styleConfig.width,height:t.styleConfig.height}},[i("g",{attrs:{transform:"translate("+t.margin.left+", "+t.margin.top+")"}},[i("g",{attrs:{transform:"translate(0, "+this.innerHeight+")"}},[t._t("in-x-axis-group"),i("g",{directives:[{name:"xaxis",rawName:"v-xaxis",value:{scale:t.xScale,timezone:t.showTimeAs,timeAxisFormat:t.styleConfig.timeAxisFormat},expression:"{'scale': xScale, 'timezone': showTimeAs, 'timeAxisFormat': styleConfig.timeAxisFormat}"}]})],2),i("g",{directives:[{name:"yaxis",rawName:"v-yaxis",value:{scale:t.yScale},expression:"{'scale': yScale}"}]}),i("text",{attrs:{"text-anchor":"middle",transform:"rotate(-90)",y:20-t.margin.left,x:-t.margin.top-110}},[t._v(t._s(t.selectedModeLabel))]),t.styleConfig.showTooltip?[i("rect",{staticStyle:{visibility:"hidden"},attrs:{"pointer-events":"all",width:t.innerWidth,height:t.innerHeight},on:{mousemove:t.mouseMove,mouseenter:t.mouseEnter,mouseleave:t.mouseLeave}}),i("circle",{directives:[{name:"show",rawName:"v-show",value:t.tooltipVisible,expression:"tooltipVisible"}],staticStyle:{"pointer-events":"none"},style:"fill: "+t.styleConfig.lineColor+" ",attrs:{id:"tooltipCircle",cx:t.closestMomentXPosition,cy:t.YPositionAtTimeX,r:"4"}}),i("b-popover",{attrs:{container:"ignore-mouse-events",show:t.tooltipVisible,target:"tooltipCircle",placement:"top"},on:{"update:show":function(e){t.tooltipVisible=e}},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.formattedMomentAtTimeX))]},proxy:!0}],null,!1,4268480814)},[i("div",[i("b",[t._v(t._s(t.selectedModeLabel)+": "+t._s(t._f("round2decimals")(t.selectedValAtTimeX)))])])])]:t._e(),i("path",{staticStyle:{"pointer-events":"none"},attrs:{fill:"none",stroke:t.styleConfig.lineColor,"stroke-width":"1.5",d:t.pathData}}),t._l(t.daysCovered,(function(e){return i("line",{key:e.xPositionAtMidnight,staticClass:"day-separator",staticStyle:{"stroke-width":"1","pointer-events":"none"},attrs:{fill:"none",x1:e.xPositionAtMidnight,x2:e.xPositionAtMidnight,"pointer-events":"none",y1:"0",y2:t.innerHeight}})})),t._l(t.daysCovered,(function(e){return i("text",{key:"text-"+e.xPositionAtMidnight,staticClass:"day-separator",attrs:{x:e.xPositionAtMidnight+5,y:15}},[t._v(t._s(e.dayLabel))])}))],2)])],2)},V=[],z=(i("c975"),i("b680"),a["default"].extend({name:"VPIChart",props:{vpiData:Array,styleConfig:Object,showTimeAs:String,dataTemporalResolution:Number},data:function(){return{selectedMode:"mtr",availableModes:[{label:"Migration Traffic Rate",propertyName:"mtr",yMaxValComputedName:"maxMTRWithMinimum"},{label:"Reflectivity traffic rate",propertyName:"rtr",yMaxValComputedName:"maxRTR"},{label:"Vertically integrated density",propertyName:"vid",yMaxValComputedName:"maxVID"},{label:"Vertically integrated reflectivity",propertyName:"vir",yMaxValComputedName:"maxVIR"}],margin:this.styleConfig.margin,tooltipVisible:!1,mouseXPosition:null,VPIEntryAtTimeX:null,momentBisector:m["d"]((function(t){return t.moment.valueOf()})).left,innerWidth:this.styleConfig.width-this.styleConfig.margin.left-this.styleConfig.margin.right,innerHeight:this.styleConfig.height-this.styleConfig.margin.top-this.styleConfig.margin.bottom}},filters:{round2decimals:function(t){return(Math.round(100*t)/100).toFixed(2)}},methods:{mouseEnter:function(){this.tooltipVisible=!0,this.mouseXPosition=0},mouseLeave:function(){this.tooltipVisible=!1,this.mouseXPosition=null},mouseMove:function(t){var e=t.target,i=e.getBoundingClientRect(),a=t.clientX-i.left;this.mouseXPosition=a;var n=this.xScale.invert(this.mouseXPosition),r=this.momentBisector(this.vpiData,n),s=this.vpiData[r-1],o=this.vpiData[r];this.VPIEntryAtTimeX=n.getTime()/1e3-s.moment.valueOf()>o.moment.valueOf()-n.getTime()/1e3?o:s}},directives:{yaxis:function(t,e,i){var a=e.value.scale,n=m["b"](a).tickSizeOuter(0);n(m["m"](t))},xaxis:function(t,e,i){var a=e.value.scale,n=e.value.timezone,r=e.value.timeAxisFormat,s=m["a"](a).ticks(7).tickSize(15).tickFormat((function(t){return _.formatTimestamp(t,n,r)}));s(m["m"](t))}},computed:{daysCovered:function(){var t=this,e=this.vpiData.map((function(e){return e.moment.clone().tz(t.showTimeAs).startOf("day")})),i=e.map((function(t){return t.valueOf()})),a=e.filter((function(t,e){return i.indexOf(t.valueOf())==e}));return a.map((function(e){return{moment:e,xPositionAtMidnight:t.xScale(e.valueOf()),dayLabel:e.format("MMM DD")}}))},formattedMomentAtTimeX:function(){return this.VPIEntryAtTimeX?_.formatMoment(this.VPIEntryAtTimeX.moment,this.showTimeAs,this.styleConfig.timeAxisFormat):""},YPositionAtTimeX:function(){return this.selectedValAtTimeX?this.yScale(this.selectedValAtTimeX):this.innerHeight},selectedValAtTimeX:function(){return this.VPIEntryAtTimeX?this.VPIEntryAtTimeX.integratedProfiles[this.selectedModePropertyName]:null},closestMomentXPosition:function(){return this.VPIEntryAtTimeX?this.xScale(this.VPIEntryAtTimeX.moment.valueOf()):null},maxVID:function(){var t=m["h"](this.vpiData,(function(t){return t.integratedProfiles.vid}));return t||0},maxVIR:function(){var t=m["h"](this.vpiData,(function(t){return t.integratedProfiles.vir}));return t||0},maxMTR:function(){var t=m["h"](this.vpiData,(function(t){return t.integratedProfiles.mtr}));return t||0},maxRTR:function(){var t=m["h"](this.vpiData,(function(t){return t.integratedProfiles.rtr}));return t||0},maxMTRWithMinimum:function(){return this.maxMTR<50?50:this.maxMTR},yMaxVal:function(){return this[this.selectedModeObject.yMaxValComputedName]},selectedModePropertyName:function(){return this.selectedModeObject.propertyName},selectedModeLabel:function(){return this.selectedModeObject.label},selectedModeObject:function(){var t=this,e=this.availableModes.find((function(e){return e.propertyName==t.selectedMode}));return e||this.availableModes[0]},minMoment:function(){var t=m["i"](this.vpiData,(function(t){return t.moment}));return t||y()()},maxMoment:function(){var t=m["h"](this.vpiData,(function(t){return t.moment}));return t||y()()},maxMomentPlusOne:function(){return this.maxMoment.clone().add(this.dataTemporalResolution,"seconds")},xScale:function(){return m["l"]().domain([this.minMoment.valueOf(),this.maxMomentPlusOne.valueOf()]).range([0,this.innerWidth])},yScale:function(){return m["j"]().range([this.innerHeight,0]).domain([0,this.yMaxVal])},pathData:function(){var t=this,e=m["g"]().x((function(e){return t.xScale(e.moment.valueOf())})).y((function(e){var i=e.integratedProfiles[t.selectedModePropertyName];return t.yScale(isNaN(i)?0:i)}));return e(this.vpiData)}}})),N=z,H=(i("7657"),Object(O["a"])(N,R,V,!1,null,"9e361114",null)),F=H.exports,Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",{attrs:{transform:"translate("+t.margin.left+", "+t.margin.top+")"}},[t._l(t.populatedPeriods,(function(e){return[i("rect",{key:"rect "+e.x,class:e.class,attrs:{x:e.x,y:"0",width:t.periodWidth,height:t.styleConfig.height,id:t.uuid+"-period-at-"+e.x}}),t.styleConfig.showTooltip?i("b-popover",{key:"popover "+e.x,attrs:{target:t.uuid+"-period-at-"+e.x,triggers:"hover",placement:"bottom"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.formatMoment(e.moment)))]},proxy:!0}],null,!0)},[t._v(" Sun altitude: "+t._s(t._f("round2decimals")(e.sunAltitude))+"°"),i("br"),t._v(" Period : "+t._s(e.name)+" ")]):t._e()]}))],2)},E=[],L=a["default"].extend({props:{periods:Array,styleConfig:Object,showTimeAs:String},data:function(){return{uuid:"",margin:this.styleConfig.margin,innerWidth:this.styleConfig.width-this.styleConfig.margin.left-this.styleConfig.margin.right,innerHeight:this.styleConfig.height-this.styleConfig.margin.top-this.styleConfig.margin.bottom}},filters:{round2decimals:function(t){return(Math.round(100*t)/100).toFixed(2)}},methods:{formatMoment:function(t){return _.formatMoment(t,this.showTimeAs,this.styleConfig.timeDisplayFormat)},getPeriodClass:function(t){return _.makeSafeForCSS(this.getPeriodName(t))},getPeriodName:function(t){return t>=0?"day":t<0&&t>=-18?"twilight":"night"}},mounted:function(){this.uuid=_.uuidv4()},computed:{xScale:function(){return m["l"]().domain([this.minMoment.valueOf(),this.maxMomentPlusOne.valueOf()]).range([0,this.innerWidth])},populatedPeriods:function(){var t=this,e=this.xScale;return this.periods.map((function(i){return u["a"]({},i,{x:Math.round(e(i.moment.valueOf())),class:t.getPeriodClass(i.sunAltitude),name:t.getPeriodName(i.sunAltitude)})}))},periodWidth:function(){return Math.round(this.innerWidth/this.rectDivider)},dataTemporalResolution:function(){return y.a.duration(this.periods[1].moment.diff(this.periods[0].moment)).asSeconds()},rectDivider:function(){var t=y.a.duration(this.maxMoment.diff(this.minMoment));return t.asSeconds()/this.dataTemporalResolution+1},minMoment:function(){return this.periods[0].moment},maxMoment:function(){return this.periods[this.periods.length-1].moment},maxMomentPlusOne:function(){return this.maxMoment.clone().add(this.dataTemporalResolution,"seconds")}}}),X=L,W=(i("b7e4"),Object(O["a"])(X,Y,E,!1,null,"1f05ba46",null)),B=W.exports,U=i("bc3a"),$=i.n(U),Z=i("c956"),G=i.n(Z),J=a["default"].extend({name:"Crow",data:function(){var t=y()().subtract(2,"days");return{selectedDate:t.format(y.a.HTML5_FMT.DATE),selectedIntervalInHours:b.initialTimeInterval,availableIntervals:b.availableTimeIntervals,selectedRadarODIMCode:b.initialRadarODIMCode,availableRadars:b.availableRadars,timeDisplayedAs:"radarLocal",showCharts:!1,VPChartStyle:b.VPChartStyle,VPIChartStyle:b.VPIChartStyle,TimelineChartStyle:b.TimelineChartStyle,dataTemporalResolution:b.vtpsFormat.temporalResolution,availableHeights:b.vtpsFormat.availableHeights,radarVtps:{}}},methods:{initializeEmptyData:function(){this.radarVtps={};var t=this.startMoment.clone(),e=function(){var e={};i.availableHeights.forEach((function(t){e[t]={noData:!0}}));var a={sunAltitude:G.a.getPosition(t.toDate(),i.selectedRadarLatitude,i.selectedRadarLongitude).altitude*(180/Math.PI),heightData:e};i.$set(i.radarVtps,t.toDate().getTime(),a),t.add(i.dataTemporalResolution,"seconds")},i=this;while(t.isBefore(this.endMoment))e()},decrementPeriod:function(){this.selectedDate=y()(this.selectedDate,"YYYY-MM-DD").subtract(this.selectedIntervalInHours,"hours").format(y.a.HTML5_FMT.DATE),this.loadData()},incrementPeriod:function(){this.selectedDate=y()(this.selectedDate,"YYYY-MM-DD").add(this.selectedIntervalInHours,"hours").format(y.a.HTML5_FMT.DATE),this.loadData()},loadData:function(){this.showCharts=!0,this.initializeEmptyData(),this.populateDataFromCrowServer(this.selectedRadarODIMCode,this.startMoment,this.endMoment)},storeDataRow:function(t){var e=u["a"]({},t,{noData:!1});Object.prototype.hasOwnProperty.call(this.radarVtps,t.datetime)&&this.$set(this.radarVtps[t.datetime].heightData,t.height,e)},populateDataFromCrowServer:function(t,e,i){var a=this,n=y.a.utc(e,"YYYY-MM-DD"),r=y.a.utc(i,"YYYY-MM-DD").add(1,"days"),s=n.clone();while(s.isBefore(r,"day")){var o=this.buildDataUrl(t,s);$.a.get(o).then((function(t){for(var e=_.readVtps(t.data),i=0,n=e;i<n.length;i++){var r=n[i];a.storeDataRow(r)}})),s.add(1,"days")}},buildDataUrl:function(t,e){return b.dataBaseUrl+"/"+t+"/"+e.format("YYYY")+"/"+t+"_vpts_"+e.format("YYYYMMDD")+".txt"}},computed:{selectedIntervalLabel:function(){var t=this,e=this.availableIntervals.find((function(e){return e.value==t.selectedIntervalInHours}));return e?e.text:""},timeZoneToShow:function(){return"radarLocal"==this.timeDisplayedAs?this.selectedRadarTimezone:"UTC"},timePeriods:function(){for(var t=[],e=0,i=Object.entries(this.radarVtps);e<i.length;e++){var a=i[e],n=a[0],r=a[1];t.push({moment:y.a.utc(+n),sunAltitude:r.sunAltitude})}return t},selectedDateNoon:function(){return y()(this.selectedDate,"YYYY-MM-DD").hour(12).minute(0).second(0).tz(this.selectedRadarTimezone)},startMoment:function(){return y()(this.selectedDateNoon).subtract(this.selectedIntervalInHours/2,"hours")},endMoment:function(){return y()(this.selectedDateNoon).add(this.selectedIntervalInHours/2,"hours")},selectedRadarAsObject:function(){var t=this,e=this.availableRadars.find((function(e){return e.ODIMCode==t.selectedRadarODIMCode}));return e||this.availableRadars[0]},selectedRadarLatitude:function(){return this.selectedRadarAsObject.latitude},selectedRadarLongitude:function(){return this.selectedRadarAsObject.longitude},selectedRadarLocation:function(){return this.selectedRadarAsObject.location},selectedRadarCountry:function(){return this.selectedRadarAsObject.country},selectedRadarTimezone:function(){return this.selectedRadarAsObject.timezone},radarVtpsAsArray:function(){for(var t=[],e=0,i=Object.entries(this.radarVtps);e<i.length;e++)for(var a=i[e],n=a[0],r=a[1],s=0,o=Object.entries(r.heightData);s<o.length;s++){var l=o[s],c=l[0],d=l[1],m={timestamp:+n,height:+c};t.push(u["a"]({},m,d))}return t},integratedProfiles:function(){for(var t=[],e=0,i=Object.entries(this.radarVtps);e<i.length;e++){for(var a=i[e],n=a[0],r=a[1],s=[],o=0,l=Object.entries(r.heightData);o<l.length;o++){var c=l[o],d=c[0],m=c[1],f={height:+d};s.push(u["a"]({},m,f))}t.push({moment:y.a.utc(+n),integratedProfiles:_.integrateProfile(s)})}return t}},mounted:function(){this.$nextTick((function(){this.loadData()}))},components:{VPChart:I,VPIChart:F,TimelineChart:B}}),q=J,K=Object(O["a"])(q,o,l,!1,null,null,null),Q=K.exports,tt=a["default"].extend({name:"app",methods:{commitHash:function(){return"de67150\n"}},components:{Crow:Q}}),et=tt,it=(i("034f"),Object(O["a"])(et,r,s,!1,null,null,null)),at=it.exports;a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(at)}}).$mount("#app")},e790:function(t,e,i){}});
//# sourceMappingURL=app.83bb84f5.js.map