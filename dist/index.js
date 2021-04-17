parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"UL96":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});
},{}],"7QCb":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var n={};if(null!=r)for(var o in r)"default"!==o&&Object.prototype.hasOwnProperty.call(r,o)&&e(n,r,o);return t(n,r),n},n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,s){function u(e){try{i(n.next(e))}catch(t){s(t)}}function a(e){try{i(n.throw(e))}catch(t){s(t)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(u,a)}i((n=n.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var r,n,o,s,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return u.label++,{value:s[1],done:!1};case 5:u.label++,n=s[1],s=[0];continue;case 7:s=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){u=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){u.label=s[1];break}if(6===s[0]&&u.label<o[1]){u.label=o[1],o=s;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(s);break}o[2]&&u.ops.pop(),u.trys.pop();continue}s=t.call(e,u)}catch(a){s=[6,a],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Schema=exports.$boolean=exports.$number=exports.$object=exports.$string=exports.$array=exports.$unknown=exports.unknown=exports.object=exports.array=exports.boolean=exports.number=exports.string=exports.default=void 0;var s=r(require("computed-types"));exports.Schema=s.default,Object.defineProperty(exports,"$array",{enumerable:!0,get:function(){return s.array}}),Object.defineProperty(exports,"$boolean",{enumerable:!0,get:function(){return s.boolean}}),Object.defineProperty(exports,"$number",{enumerable:!0,get:function(){return s.number}}),Object.defineProperty(exports,"$object",{enumerable:!0,get:function(){return s.object}}),Object.defineProperty(exports,"$string",{enumerable:!0,get:function(){return s.string}}),Object.defineProperty(exports,"$unknown",{enumerable:!0,get:function(){return s.unknown}});var u=require("./types"),a=s.default({query:s.object.optional(),update:s.object.optional(),$:s.object.optional({})}).destruct(),i=function(){function e(e,t,r){this.resolvers=e,this.types=t,this.options=null!=r?r:{}}return e.prototype.evalArgs=function(e,t){var r=this;if("string"==typeof e){var n=/\$([_a-zA-Z][_a-zA-Z0-9]{0,30})/g.exec(e);n&&(e=e==n[0]?t[n[1]]:e.replace(n[0],t[n[1]]))}else"object"==typeof e&&"length"in e?e=e.map(function(e){return r.evalArgs(e,t)}):"object"!=typeof e||"length"in e||Object.keys(e).forEach(function(n){e[n]=r.evalArgs(e[n],t)});return e},e.prototype.processQuery=function(e,t){return n(this,void 0,void 0,function(){var r=this;return o(this,function(u){return[2,new Promise(function(u,a){return n(r,void 0,void 0,function(){var r,n,i,c,l,p,f,b,d,y,h,v,g,m,x;return o(this,function(o){switch(o.label){case 0:for(f in r=this,n=e.query,i=e.$,c="query",l={},("object"!=typeof n||"length"in n)&&a({error:!0,at:c,message:"query should be an object"}),Object.keys(n).length||a({error:!0,at:c,message:"query can't be empty"}),p=[],n)p.push(f);b=0,o.label=1;case 1:if(!(b<p.length))return[3,6];d=p[b],c=d,d in r.types||a({error:!0,at:c,message:d+" is not defined in types"}),d in r.resolvers.query||a({error:!0,at:c,message:d+" is not defined in types"}),o.label=2;case 2:return o.trys.push([2,4,,5]),y=s.default(r.types[d],{strict:!0}).destruct(),h=r.evalArgs(n[d],i),[4,r.resolvers.query[d](h,t)];case 3:return v=o.sent(),g=y(v),m=g[0],g[1],m&&a({error:!0,at:c,message:m}),l[d]=v,[3,5];case 4:return x=o.sent(),a({error:!0,at:c,message:x}),[3,5];case 5:return b++,[3,1];case 6:return u(l),[2]}})})})]})})},e.prototype.processUpdate=function(e,t){return n(this,void 0,void 0,function(){var r=this;return o(this,function(s){return[2,new Promise(function(s,u){return n(r,void 0,void 0,function(){var r,n,a,i,c,l,p,f,b,d,y,h;return o(this,function(o){switch(o.label){case 0:for(p in r=this,n=e.update,a=e.$,i="update",c={},("object"!=typeof n||"length"in n)&&u({error:!0,at:i,message:"update should be an object"}),Object.keys(n).length||u({error:!0,at:i,message:"update can't be empty"}),l=[],n)l.push(p);f=0,o.label=1;case 1:if(!(f<l.length))return[3,6];b=l[f],i=b,b in r.resolvers.update||u({error:!0,at:i,message:b+" is not defined in types"}),o.label=2;case 2:return o.trys.push([2,4,,5]),d=r.evalArgs(n[b],a),[4,r.resolvers.update[b](d,t)];case 3:return y=o.sent(),c[b]=y,[3,5];case 4:return h=o.sent(),u({error:!0,at:i,message:h}),[3,5];case 5:return f++,[3,1];case 6:return s(c),[2]}})})})]})})},e.prototype.process=function(e,t){return n(this,void 0,void 0,function(){var r=this;return o(this,function(s){return[2,new Promise(function(s,u){return n(r,void 0,void 0,function(){var r,n,i,c,l,p,f,b;return o(this,function(o){switch(o.label){case 0:return r=a(e),n=r[0],i=r[1],c={},"root",n&&u({error:!0,at:"root",message:n}),(null==i?void 0:i.query)||(null==i?void 0:i.update)||u({error:!0,at:"root",message:"query should contain at least one query or update"}),(null==i?void 0:i.query)?(l=c,p="data",[4,this.processQuery({query:i.query,$:i.$},t).catch(function(e){return u(e)})]):[3,2];case 1:l[p]=o.sent(),o.label=2;case 2:return(null==i?void 0:i.update)?(f=c,b="result",[4,this.processUpdate({update:i.update,$:i.$},t).catch(function(e){return u(e)})]):[3,4];case 3:f[b]=o.sent(),o.label=4;case 4:return s(c),[2]}})})})]})})},e}();exports.default=i;var c=s.string.optional(),l=s.number.optional(),p=s.boolean.optional(),f=s.array.optional(),b=s.object.optional(),d=s.unknown.optional();exports.string=c,exports.number=l,exports.boolean=p,exports.array=f,exports.object=b,exports.unknown=d;
},{"./types":"UL96"}]},{},["7QCb"], null)
//# sourceMappingURL=/index.js.map