(()=>{var e={441:function(e,t,s){"use strict";var n=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(r,i){function o(e){try{h(n.next(e))}catch(e){i(e)}}function a(e){try{h(n.throw(e))}catch(e){i(e)}}function h(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}h((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.SidebarProvider=void 0;const r=s(549),i=s(326),o=s(601),a=s(686),h=s(714);t.SidebarProvider=class{constructor(e){this._extensionUri=e}resolveWebviewView(e){this._view=e,e.webview.options={enableScripts:!0,localResourceRoots:[this._extensionUri]},e.webview.html=this._getHtmlForWebview(e.webview),e.webview.onDidReceiveMessage((t=>n(this,void 0,void 0,(function*(){switch(t.type){case"get-token":e.webview.postMessage({type:"token",value:h.TokenManager.getToken()});break;case"authenticate":i.authenticate((()=>{e.webview.postMessage({type:"token",value:h.TokenManager.getToken()})}));break;case"logout":h.TokenManager.setToken("");break;case"onInfo":if(!t.value)return;r.window.showInformationMessage(t.value);break;case"onError":if(!t.value)return;r.window.showErrorMessage(t.value)}}))))}revive(e){this._view=e}_getHtmlForWebview(e){const t=e.asWebviewUri(r.Uri.joinPath(this._extensionUri,"media","reset.css")),s=e.asWebviewUri(r.Uri.joinPath(this._extensionUri,"media","vscode.css")),n=e.asWebviewUri(r.Uri.joinPath(this._extensionUri,"media","sidebar.js")),i=e.asWebviewUri(r.Uri.joinPath(this._extensionUri,"media","sidebar.css")),h=a.getNonce();return`<!DOCTYPE html>\n\t\t\t<html lang="en">\n\t\t\t<head>\n\t\t\t\t<meta charset="UTF-8">\n\t\t\t\t\x3c!--\n\t\t\t\t\tUse a content security policy to only allow loading images from https or from our extension directory,\n\t\t\t\t\tand only allow scripts that have a specific nonce.\n        --\x3e\n        <meta http-equiv="Content-Security-Policy" content="img-src https: data:; style-src 'unsafe-inline' ${e.cspSource}; script-src 'nonce-${h}';">\n\t\t\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t\t\t\t<link href="${t}" rel="stylesheet">\n\t\t\t\t<link href="${s}" rel="stylesheet">\n        <link href="${i}" rel="stylesheet">\n        <script nonce="${h}">\n          const tsvscode = acquireVsCodeApi();\n          const apiBaseUrl = ${JSON.stringify(o.apiBaseUrl)}\n        <\/script>\n        </head>\n        <body>\n\t\t    <script nonce="${h}" src="${n}"><\/script>\n\t\t</body>\n\t\t</html>`}}},714:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TokenManager=void 0;const s="vstodotoken";t.TokenManager=class{static setToken(e){return this.globalState.update(s,e)}static getToken(){return this.globalState.get(s)}}},326:function(e,t,s){"use strict";var n=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(r,i){function o(e){try{h(n.next(e))}catch(e){i(e)}}function a(e){try{h(n.throw(e))}catch(e){i(e)}}function h(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}h((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.authenticate=void 0;const r=s(549),i=s(601),o=s(429),a=s(714);t.authenticate=e=>{const t=o();t.get("/auth/:token",((s,r)=>n(void 0,void 0,void 0,(function*(){const{token:n}=s.params;n?(a.TokenManager.setToken(n),e(),r.end("<h1>Authentication was successful, you can close this window now.</h1>"),t.server.close()):r.end("<h1>Something went wrong</h1>")})))),t.listen(54321,(e=>{e?r.window.showErrorMessage(e.message):r.commands.executeCommand("vscode.open",r.Uri.parse(`${i.apiBaseUrl}/auth/github`))}))}},601:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.apiBaseUrl=void 0,t.apiBaseUrl="http://localhost:3002"},686:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getNonce=void 0,t.getNonce=function(){let e="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let s=0;s<32;s++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}},545:e=>{e.exports=function(e){let t=e.url;if(void 0===t)return t;let s=e._parsedUrl;if(s&&s._raw===t)return s;s={},s.query=s.search=null,s.href=s.path=s.pathname=t;let n=t.indexOf("?",1);return-1!==n&&(s.search=t.substring(n),s.query=s.search.substring(1),s.pathname=t.substring(0,n)),s._raw=t,e._parsedUrl=s}},65:(e,t,s)=>{"use strict";function n(e,t){for(var s=0,n=e.length;s<n;s++)if(!t(e[s],s,e))return!1;return!0}s.r(t),s.d(t,{exec:()=>d,match:()=>h,parse:()=>c});const r="/";function i(e){if(e===r)return e;47===e.charCodeAt(0)&&(e=e.substring(1));var t=e.length-1;return 47===e.charCodeAt(t)?e.substring(0,t):e}function o(e){return(e=i(e))===r?[r]:e.split(r)}function a(e,t,s){return s=e[s],t.val===s&&0===t.type||(s===r?t.type>1:0!==t.type&&(s||"").endsWith(t.end))}function h(e,t){for(var s,r,i=0,h=o(e),c=h.length,d=a.bind(a,h);i<t.length;i++)if(((r=(s=t[i]).length)===c||r<c&&2===s[r-1].type||r>c&&3===s[r-1].type)&&n(s,d))return s;return[]}function c(e){if(e===r)return[{old:e,type:0,val:e,end:""}];for(var t,s,n,o,a=i(e),h=-1,c=0,d=a.length,u=[];++h<d;)if(58!==(t=a.charCodeAt(h)))if(42!==t){for(c=h;h<d&&47!==a.charCodeAt(h);)++h;u.push({old:e,type:0,val:a.substring(c,h),end:""}),a=a.substring(h),d-=h,h=c=0}else u.push({old:e,type:2,val:a.substring(h),end:""});else{for(c=h+1,n=1,s=0,o="";h<d&&47!==a.charCodeAt(h);)63===(t=a.charCodeAt(h))?(s=h,n=3):46===t&&0===o.length&&(o=a.substring(s=h)),h++;u.push({old:e,type:n,val:a.substring(c,s||h),end:o}),a=a.substring(h),d-=h,h=0}return u}function d(e,t){for(var s,n,i=0,a=o(e),h={};i<t.length;i++)s=a[i],n=t[i],s!==r&&void 0!==s&&!1|n.type&&(h[n.val]=s.replace(n.end,""));return h}},429:(e,t,s)=>{const n=s(605),r=s(826),{parse:i}=s(191),o=s(545);function a(e){return 47===e.charCodeAt(0)?e:"/"+e}function h(e){let t=e.indexOf("/",1);return t>1?e.substring(0,t):e}function c(e,t){t.url=t.url.substring(e.length)||"/",t.path=t.path.substring(e.length)||"/"}function d(e,t,s,r){let i=s.statusCode=e.code||e.status||500;s.end(e.length&&e||e.message||n.STATUS_CODES[i])}class u extends r{constructor(e={}){super(e),this.apps={},this.wares=[],this.bwares={},this.parse=o,this.server=e.server,this.handler=this.handler.bind(this),this.onError=e.onError||d,this.onNoMatch=e.onNoMatch||this.onError.bind(null,{code:404})}add(e,t,...s){let n=a(h(t));if(void 0!==this.apps[n])throw new Error(`Cannot mount ".${e.toLowerCase()}('${a(t)}')" because a Polka application at ".use('${n}')" already exists! You should move this handler into your Polka application instead.`);return super.add(e,t,...s)}use(e,...t){return"function"==typeof e?this.wares=this.wares.concat(e,t):"/"===e?this.wares=this.wares.concat(t):(e=a(e),t.forEach((t=>{if(t instanceof u)this.apps[e]=t;else{let s=this.bwares[e]||[];s.length>0||s.push(((t,s,n)=>(c(e,t),n()))),this.bwares[e]=s.concat(t)}}))),this}listen(){return(this.server=this.server||n.createServer()).on("request",this.handler),this.server.listen.apply(this.server,arguments),this}handler(e,t,s){s=s||this.parse(e);let n=[],r=this.wares,o=this.find(e.method,s.pathname);e.originalUrl=e.originalUrl||e.url;let a=h(e.path=s.pathname);void 0!==this.bwares[a]&&(r=r.concat(this.bwares[a])),o?(n=o.handlers,e.params=o.params):void 0!==this.apps[a]?(c(a,e),s.pathname=e.path,n.push(this.apps[a].handler.bind(null,e,t,s))):0===n.length&&n.push(this.onNoMatch),e.search=s.search,e.query=i(s.query);let d=0,u=r.length,l=n.length;if(u===d&&1===l)return n[0](e,t);let p=s=>s?this.onError(s,e,t,p):v(),v=s=>t.finished||d<u&&r[d++](e,t,p);r=r.concat(n),u+=l,v()}}e.exports=e=>new u(e)},826:(e,t,s)=>{const{exec:n,match:r,parse:i}=s(65);e.exports=class{constructor(e){this.opts=e||{},this.routes={},this.handlers={},this.all=this.add.bind(this,"*"),this.get=this.add.bind(this,"GET"),this.head=this.add.bind(this,"HEAD"),this.patch=this.add.bind(this,"PATCH"),this.options=this.add.bind(this,"OPTIONS"),this.connect=this.add.bind(this,"CONNECT"),this.delete=this.add.bind(this,"DELETE"),this.trace=this.add.bind(this,"TRACE"),this.post=this.add.bind(this,"POST"),this.put=this.add.bind(this,"PUT")}add(e,t,...s){return void 0===this.routes[e]&&(this.routes[e]=[]),this.routes[e].push(i(t)),void 0===this.handlers[e]&&(this.handlers[e]={}),this.handlers[e][t]=s,this}find(e,t){let s=r(t,this.routes[e]||[]);return!(0===s.length&&(s=r(t,this.routes[e="*"]||[]),!s.length))&&{params:n(t,s),handlers:this.handlers[e][s[0].old]}}}},605:e=>{"use strict";e.exports=require("http")},191:e=>{"use strict";e.exports=require("querystring")},549:e=>{"use strict";e.exports=require("vscode")}},t={};function s(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,s),r.exports}s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.deactivate=e.activate=void 0;const t=s(549),r=s(441),i=s(714);e.activate=function(e){i.TokenManager.globalState=e.globalState;const s=new r.SidebarProvider(e.extensionUri);e.subscriptions.push(t.window.registerWebviewViewProvider("vstodo-sidebar",s));const n=t.window.createStatusBarItem(t.StatusBarAlignment.Right);n.text="$(tasklist) Add To Do",n.command="vscodetodo.addToDo",n.show(),e.subscriptions.push(t.commands.registerCommand("vscodetodo.refresh",(()=>{t.commands.executeCommand("workbench.action.closeSidebar"),t.commands.executeCommand("workbench.view.extension.vstodo-sidebar-view"),setTimeout((()=>{t.commands.executeCommand("workbench.action.webview.openDeveloperTools")}),500)}))),e.subscriptions.push(t.commands.registerCommand("vscodetodo.helloWorld",(()=>{t.window.showInformationMessage("token value is: "+i.TokenManager.getToken())}))),e.subscriptions.push(t.commands.registerCommand("vscodetodo.addToDo",(()=>{var e;const{activeTextEditor:n}=t.window;if(!n)return void t.window.showInformationMessage("No active text editor");const r=n.document.getText(n.selection);null===(e=s._view)||void 0===e||e.webview.postMessage({type:"new-todo",value:r})})))},e.deactivate=function(){}})(),module.exports=n})();