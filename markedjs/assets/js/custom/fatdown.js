/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * s9e.TextFormatter @JoshyPHP, 2014
 */
function aa(a){var b=document.createElement("b");b.innerHTML=a.replace(/</g,"&lt;");return b.textContent}function l(a,b){return b.test(a)?a:!1}
function ba(a){var b=ca.urlConfig,c=r,d=a.replace(/^\s+/,"").replace(/\s+$/,""),e=/^(?:([a-z][-+.\w]*):)?(?:\/\/(?:([^:\/?#]*)(?::([^\/?#]*)?)?@)?(?:(\[[a-f\d:]+\]|[^:\/?#]+)(?::(\d*))?)?(?![^\/?#]))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/i.exec(d),d=""<e[1]?e[1]:"",g=""<e[2]?e[2]:"",h=""<e[3]?e[3]:"",f=""<e[4]?e[4]:"",q=""<e[5]?e[5]:"",n=""<e[6]?e[6]:"",m=""<e[7]?e[7]:"",e=""<e[8]?e[8]:"",d=d.toLowerCase(),f=f.replace(/[\u3002\uff0e\uff61]/g,".").replace(/\.+$/g,"");/[^\x00-\x7F]/.test(f)&&punycode&&
(f=punycode.toASCII(f));var p="";if(""!==d){if(!b.P.test(d))return c&&t(c,"err","URL scheme is not allowed",{attrValue:a,scheme:d}),!1;p+=d+":"}if(""===f)if("file"===d)p+="//";else{if(""!==d)return!1}else{var p=p+"//",k;if(k=!/^(?=[a-z])[-a-z0-9]{0,62}[a-z0-9](?:\.(?=[a-z])[-a-z0-9]{0,62}[a-z0-9])*$/i.test(f)){a:{var s=f;if(/^\d+\.\d+\.\d+\.\d+$/.test(s)){k=4;for(s=s.split(".");0<=--k;)if("0"===s[k].charAt(0)||255<s[k]){k=!1;break a}k=!0}else k=!1}if(k=!k)k=f.replace(/^\[(.*)\]$/,"$1",f),k=!(/^(\d*:){2,7}\d+(?:\.\d+\.\d+\.\d+)?$/.test(k)&&
k)}if(k)return c&&t(c,"err","URL host is invalid",{attrValue:a,host:f}),!1;if(b.Q&&b.Q.test(f)||b.W&&!b.W.test(f))return c&&t(c,"err","URL host is not allowed",{attrValue:a,host:f}),!1;""!==g&&(p+=rawurlencode(decodeURIComponent(g)),""!==h&&(p+=":"+rawurlencode(decodeURIComponent(h))),p+="@");p+=f;""!==q&&(p+=":"+q)}a=n;""!==m&&(a+="?"+m);""!==e&&(a+="#"+e);p+=a.replace(/["'()<>[\]\x00-\x20\x7F]+/g,escape).replace(/[^\u0020-\u007E]+/g,encodeURIComponent);d||(p=p.replace(/^([^\/]*):/,"$1%3A",p));return p}
function u(){}u.prototype.H={};u.prototype.L=[];function t(a,b,c,d){d=d||{};"attrName"in d||!a.E||(d.attrName=a.E);"tag"in d||!a.G||(d.tag=a.G);a.H[b]&&a.H[b].forEach(function(a){a(c,d)});a.L.push([b,c,d])}u.prototype.get=function(){return this.L};u.prototype.on=function(a,b){this.H[a].push(b)};u.prototype.l=function(a){this.E=a};function da(a){t(r,"debug","Skipping end tag with no start tag",a)}function x(a,b,c,d){this.o=a;this.m=b;this.n=c;this.w=d;this.k={};this.M=[];isNaN(a+c+d)&&A(this)}
x.prototype.D=!1;x.prototype.p=0;function A(a){a.D||(a.D=!0,a.M.forEach(function(a){A(a)}))}function B(a,b){a.m===b.m&&(1===a.o&&2===b.o&&b.n>=a.n?(a.A=b,b.F=a):2===a.o&&1===b.o&&b.n<=a.n&&(a.F=b,b.A=a))}function fa(a){a.p=1E3}function D(a){var b={},c;for(c in a.k)b[c]=a.k[c];return b}function ga(a,b){return a.D||a.m!==b.m||1!==b.o||2!==a.o||a.n<b.n||a.F&&a.F!==b||b.A&&b.A!==a?!1:!0}function ka(a){return"br"===a.m||"i"===a.m||"pb"===a.m}x.prototype.l=function(a,b){this.k[a]=b};
function la(a,b){a.k={};for(var c in b)a.k[c]=b[c]}
var r=new u,ca={urlConfig:{P:/^(?:ftp|https?)$/i},mediasites:{"bandcamp.com":"bandcamp","dailymotion.com":"dailymotion","facebook.com":"facebook","grooveshark.com":"grooveshark","liveleak.com":"liveleak","soundcloud.com":"soundcloud","open.spotify.com":"spotify","play.spotify.com":"spotify","spotify:":"spotify","twitch.tv":"twitch","vimeo.com":"vimeo","vine.co":"vine","youtube.com":"youtube","youtu.be":"youtube"}},J={C:{b:[E],g:10,f:{c:18},h:1E3,i:0,d:[0],e:[0]},CODE:{k:{lang:{b:[ma],j:0}},b:[E],
g:10,f:{c:916},h:1E3,i:1,d:[0],e:[0]},DEL:{b:[E],g:10,f:{c:64},h:1E3,i:0,d:[119],e:[2047]},EM:{b:[E],g:10,f:{c:2},h:1E3,i:0,d:[113],e:[2047]},H1:{b:[E],g:10,f:{c:516},h:1E3,i:2,d:[113],e:[2047]},H2:{b:[E],g:10,f:{c:516},h:1E3,i:2,d:[113],e:[2047]},H3:{b:[E],g:10,f:{c:516},h:1E3,i:2,d:[113],e:[2047]},H4:{b:[E],g:10,f:{c:516},h:1E3,i:2,d:[113],e:[2047]},H5:{b:[E],g:10,f:{c:516},h:1E3,i:2,d:[113],e:[2047]},H6:{b:[E],g:10,f:{c:516},h:1E3,i:2,d:[113],e:[2047]},HR:{b:[E],g:10,f:{c:645},h:1E3,i:1,d:[96],
e:[2047]},IMG:{k:{alt:{j:0},src:{b:[F],j:1},title:{j:0}},b:[E],g:10,f:{c:129},h:1E3,i:0,d:[96],e:[2047]},LI:{b:[E],g:10,f:{r:{LI:1},c:520},h:1E3,i:3,d:[119],e:[2047]},LIST:{k:{type:{b:[ma],j:0}},b:[E],g:10,f:{c:676},h:1E3,i:1,d:[72],e:[2047]},QUOTE:{b:[E],g:10,f:{c:524},h:1E3,i:1,d:[119],e:[2047]},STRONG:{b:[E],g:10,f:{c:2},h:1E3,i:0,d:[113],e:[2047]},SUP:{b:[E],g:10,f:{c:0},h:1E3,i:0,d:[113],e:[2047]},URL:{k:{title:{j:0},url:{b:[F],j:1}},b:[E],g:10,f:{c:66},h:1E3,i:4,d:[103],e:[2031]},EMAIL:{k:{email:{b:[na],
j:1}},b:[E],g:10,f:{c:66},h:1E3,i:4,d:[103],e:[2031]},ESC:{b:[E],g:10,f:{c:145},h:1E3,i:5,d:[0],e:[0]},FP:{k:{"char":{j:1}},b:[E],g:10,f:{c:129},h:1E3,i:5,d:[96],e:[2047]},HC:{k:{content:{j:1}},b:[E],g:10,f:{c:401},h:1E3,i:6,d:[0],e:[0]},HE:{k:{"char":{j:1}},b:[E],g:10,f:{c:129},h:1E3,i:5,d:[96],e:[2047]},"html:abbr":{k:{title:{j:0}},b:[E],g:10,f:{c:0},h:1E3,i:0,d:[113],e:[2047]},"html:b":{b:[E],g:10,f:{c:2},h:1E3,i:0,d:[113],e:[2047]},"html:br":{b:[E],g:10,f:{c:161},h:1E3,i:0,d:[64],e:[2047]},"html:code":{b:[E],
g:10,f:{c:18},h:1E3,i:0,d:[0],e:[0]},"html:del":{b:[E],g:10,f:{c:64},h:1E3,i:0,d:[119],e:[2047]},"html:div":{k:{"class":{j:0}},b:[E],g:10,f:{c:524},h:1E3,i:1,d:[119],e:[2047]},"html:i":{b:[E],g:10,f:{c:2},h:1E3,i:0,d:[113],e:[2047]},"html:ins":{b:[E],g:10,f:{c:64},h:1E3,i:0,d:[119],e:[2047]},"html:rb":{b:[E],g:10,f:{r:{"html:rb":1,"html:rp":1,"html:rt":1,"html:rtc":1},c:512},h:1E3,i:7,d:[113],e:[2047]},"html:rp":{b:[E],g:10,f:{r:{"html:rb":1,"html:rp":1,"html:rt":1,"html:rtc":1},c:512},h:1E3,i:7,
d:[113],e:[2047]},"html:rt":{b:[E],g:10,f:{r:{"html:rb":1,"html:rp":1,"html:rt":1,"html:rtc":1},c:512},h:1E3,i:7,d:[113],e:[2047]},"html:rtc":{b:[E],g:10,f:{r:{"html:rb":1,"html:rp":1,"html:rtc":1},c:512},h:1E3,i:7,d:[113],e:[2047]},"html:ruby":{b:[E],g:10,f:{c:0},h:1E3,i:0,d:[241],e:[2047]},"html:span":{k:{"class":{j:0}},b:[E],g:10,f:{c:0},h:1E3,i:0,d:[113],e:[2047]},"html:strong":{b:[E],g:10,f:{c:2},h:1E3,i:0,d:[113],e:[2047]},"html:sub":{b:[E],g:10,f:{c:0},h:1E3,i:0,d:[113],e:[2047]},"html:sup":{b:[E],
g:10,f:{c:0},h:1E3,i:0,d:[113],e:[2047]},"html:table":{b:[E],g:10,f:{c:676},h:1E3,i:1,d:[1344],e:[2047]},"html:tbody":{b:[E],g:10,f:{r:{"html:tbody":1,"html:tfoot":1,"html:thead":1},c:672},h:1E3,i:8,d:[1088],e:[2047]},"html:td":{k:{colspan:{j:0},rowspan:{j:0}},b:[E],g:10,f:{r:{"html:td":1,"html:th":1},c:520},h:1E3,i:9,d:[119],e:[2047]},"html:tfoot":{b:[E],g:10,f:{r:{"html:tbody":1,"html:thead":1},c:672},h:1E3,i:8,d:[1088],e:[2047]},"html:th":{k:{colspan:{j:0},rowspan:{j:0},scope:{j:0}},b:[E],g:10,
f:{r:{"html:td":1,"html:th":1},c:520},h:1E3,i:9,d:[115],e:[2043]},"html:thead":{b:[E],g:10,f:{c:672},h:1E3,i:8,d:[1088],e:[2047]},"html:tr":{b:[E],g:10,f:{r:{"html:tr":1},c:672},h:1E3,i:10,d:[576],e:[2047]},"html:u":{b:[E],g:10,f:{c:2},h:1E3,i:0,d:[113],e:[2047]},MEDIA:{b:[oa],g:10,f:{c:81},h:1E3,i:6,d:[0],e:[0]},BANDCAMP:{k:{url:{b:[F],j:0},album_id:{b:[G],j:0},track_num:{b:[G],j:0},track_id:{b:[G],j:0}},b:[pa,E,qa],g:10,f:{c:145},h:1E3,i:4,d:[0],e:[0]},DAILYMOTION:{k:{url:{b:[F],j:0},id:{b:[ra],
j:1}},q:[["url",/dailymotion\.com\/(?:video\/|user\/[^#]+#video=)([A-Za-z0-9]+)/,["","id"]],["url",/^([A-Za-z0-9]+)$/,["","id"]]],b:[H,E],g:10,f:{c:145},h:1E3,i:4,d:[0],e:[0]},FACEBOOK:{k:{url:{b:[F],j:0},id:{b:[I],j:1}},q:[["url",/facebook\.com\/(?:photo|video\/video)\.php\?v=([0-9]+)/,["","id"]],["url",/^([0-9]+)$/,["","id"]]],b:[H,E],g:10,f:{c:145},h:1E3,i:4,d:[0],e:[0]},GROOVESHARK:{k:{url:{b:[F],j:0},songid:{b:[I],j:0},playlistid:{b:[I],j:0}},q:[["url",/grooveshark\.com(?:\/#!?)?\/playlist\/[^\/]+\/([0-9]+)/,
["","playlistid"]]],b:[H,sa,E,qa],g:10,f:{c:145},h:1E3,i:4,d:[0],e:[0]},LIVELEAK:{k:{url:{b:[F],j:0},id:{b:[ta],j:1}},q:[["url",/liveleak\.com\/view\?i=([a-f_0-9]+)/,["","id"]],["url",/^([a-f_0-9]+)$/,["","id"]]],b:[H,E],g:10,f:{c:145},h:1E3,i:4,d:[0],e:[0]},SOUNDCLOUD:{k:{url:{b:[F],j:0},playlist_id:{b:[G],j:0},track_id:{b:[G],j:0},id:{b:[ua],j:1},secret_token:{b:[va],j:0}},q:[["url",/(https?:\/\/(?:(?:api\.soundcloud\.com\/(?:playlist|track)s\/\d+)|soundcloud\.com\/[^\/]+\/(?:sets\/)?[^\/]+)(?:(?:\?secret_token=|\/(?=s-))([-\w]+))?)/,
["","id","secret_token"]],["url",/^(https?:\/\/(?:(?:api\.soundcloud\.com\/(?:playlist|track)s\/\d+)|soundcloud\.com\/[^\/]+\/(?:sets\/)?[^\/]+)(?:(?:\?secret_token=|\/(?=s-))([-\w]+))?)$/,["","id","secret_token"]]],b:[H,wa,E],g:10,f:{c:145},h:1E3,i:4,d:[0],e:[0]},SPOTIFY:{k:{url:{b:[F],j:0},uri:{b:[xa],j:0},path:{b:[za],j:0}},q:[["url",/(spotify:(?:album|artist|user|track(?:set)?):[,:\w]+)/,["","uri"]],["url",/(?:open|play)\.spotify\.com\/((?:album|artist|track|user)\/[\/\w]+)/,["","path"]]],b:[H,
E,qa],g:10,f:{c:145},h:1E3,i:4,d:[0],e:[0]},TWITCH:{k:{url:{b:[F],j:0},channel:{b:[Aa],j:0},archive_id:{b:[I],j:0},chapter_id:{b:[I],j:0}},q:[["url",/twitch\.tv\/((?!m\/)\w+)(?:\/b\/([0-9]+)|\/c\/([0-9]+))?/,["","channel","archive_id","chapter_id"]]],b:[H,Ba,E,qa],g:10,f:{c:145},h:1E3,i:4,d:[0],e:[0]},VIMEO:{k:{url:{b:[F],j:0},id:{b:[I],j:1}},q:[["url",/vimeo\.com\/(?:channels\/[^\/]+\/)?([0-9]+)/,["","id"]],["url",/^([0-9]+)$/,["","id"]]],b:[H,E],g:10,f:{c:145},h:1E3,i:4,d:[0],e:[0]},VINE:{k:{url:{b:[F],
j:0},id:{b:[Ca],j:1}},q:[["url",/vine\.co\/v\/([^\/]+)/,["","id"]],["url",/^([^\/]+)$/,["","id"]]],b:[H,E],g:10,f:{c:145},h:1E3,i:4,d:[0],e:[0]},YOUTUBE:{k:{url:{b:[F],j:0},id:{b:[va],j:1},t:{b:[G],j:0},list:{b:[va],j:0}},q:[["url",/youtube\.com\/(?:watch.*?v=|v\/)([-\w]+)/,["","id"]],["url",/youtu\.be\/([-\w]+)/,["","id"]],["url",/[#&?]t=(\d+)/,["","t"]],["url",/&list=([-\w]+)/,["","list"]],["url",/^([-\w]+)$/,["","id"]]],b:[H,E],g:10,f:{c:145},h:1E3,i:4,d:[0],e:[0]}},K,Da,Fa=0;
function Ga(a){a=a.replace(/\r\n?/g,"\n",a);a=a.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]+/g,"",a);var b=r;b.L=[];delete b.E;delete b.G;Ha=0;Ia=!1;Ja={};N="";K=a;Da=K.length;O=[];Ka=!0;R=0;++Fa;a=Fa;for(var c in La)if(b=La[c],!(b.I||b.x&&0>K.indexOf(b.x))){var d=[];if(b.y){var d=b.y,e=[],g=void 0;for(d.lastIndex=0;g=d.exec(K);){for(var h=+g.index,f=[[g[0],h]],q=0;++q<g.length;){var n=g[q];void 0===n?f.push(["",-1]):(f.push([n,K.indexOf(n,h)]),h+=n.length)}e.push(f)}d=e;e=d.length;if(!e)continue;e>b.v&&
(d=d.slice(0,b.v),e={pluginName:c,limit:b.v},"warn"===b.z&&t(r,"warn","Regexp limit exceeded. Only the allowed number of matches will be processed",e))}b.u(K,d)}Ma();if(Fa!==a)throw"The parser has been reset during execution";return N}function Na(a,b){b.q&&b.q.forEach(function(b){var d=b[0],e=b[1];b=b[2];if(d in a.k){var g;(g=e.exec(a.k[d]))&&b.forEach(function(b,c){if(""!==b&&"string"===typeof g[c]){var e=g[c];b!==d&&b in a.k||a.l(b,e)}})}});return!0}var Ia,Ja,N,R;
function Oa(a){var b={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"};return a.replace(/[<>&"]/g,function(a){return b[a]})}function Pa(a){var b={"<":"&lt;",">":"&gt;","&":"&amp;"};return a.replace(/[<>&]/g,function(a){return b[a]})}function Qa(){var a;Ra(Da,0,!0);do a=N,N=N.replace(/<((?:\w+:)?\w+)[^>]*><\/\1>/g,"");while(N!==a);N=N.replace(/<\/i><i>/g,"",N);var b=Ia?"r":"t";a="<"+b;for(var c in Ja)a+=" xmlns:"+c+'="urn:s9e:TextFormatter:'+c+'"';N=a+">"+N+"</"+b+">"}
function Sa(a){Ia=!0;var b=a.m,c=a.n,d=a.w,e=a.c,g=0,h=0;e&512&&(g=a.o&1?2:1,h=a.o&2?2:1);var f=!1;a.o&1?e&4&&(f=!0):f=!0;Ra(c,g,f);g=d?Pa(K.substr(c,d)):"";if(a.o&1){e&4||Ta(c);e=b.indexOf(":");0<e&&(Ja[b.substr(0,e)]=0);N+="<"+b;var q=D(a),e=[],n;for(n in q)e.push([n]);e.sort(function(a,b){return a>b?1:-1});e.forEach(function(a){N+=" "+a+'="'+Oa(q[a].toString())+'"'});N=3===a.o?d?N+(">"+g+"</"+b+">"):N+"/>":d?N+("><s>"+g+"</s>"):N+">"}else d&&(N+="<e>"+g+"</e>"),N+="</"+b+">";for(R=V=c+d;h&&R<Da&&
"\n"===K.charAt(R);)--h,++R}
function Ra(a,b,c){c&&(W.c&8?b=-1:c=!1);V>=a&&c&&Ua();if(R>V){var d=Math.min(a,R);N+=K.substr(V,d-V);V=d;V>=a&&c&&Ua()}if(W.c&32)d=a-V,b=K.substr(V,d),/^[ \n\t]*$/.test(b)||(b="<i>"+b+"</i>"),N+=b,V=a,c&&Ua();else{for(var e=a,d=0;b&&--e>=V;){var g=K.charAt(e);if(" "!==g&&"\n"!==g&&"\t"!==g)break;"\n"===g&&--b;++d}a-=d;if(W.c&8)for(W.B||(Va(a),a>V&&Ta(a)),b=K.indexOf("\n\n",V);-1<b&&b<a;)Ra(b,0,!0),Ta(a),b=K.indexOf("\n\n",V);a>V&&(b=Pa(K.substr(V,a-V)),W.c&128||(b=b.replace(/\n/g,"<br/>\n")),N+=b);
c&&Ua();d&&(N+=K.substr(a,d));V=a+d}}function Wa(a){var b=a.n;a=a.w;var c=K.substr(b,a);Ra(b,0,!1);N+="<i>"+Pa(c)+"</i>";Ia=!0;V=b+a}function Ta(a){!W.B&&W.c&8&&(Va(a),V<Da&&(N+="<p>",W.B=!0))}function Ua(){W.B&&(N+="</p>",W.B=!1)}function Va(a){for(;V<a&&-1<" \n\t".indexOf(K.charAt(V));)N+=K.charAt(V),++V}
var La={Litedown:{u:function(a){function b(a,b){B(X(2,"LIST",b,0),a.T);B(X(2,"LI",b,0),a.J);a.O&&a.K.forEach(function(a){a.c&=-9})}function c(a){return a.replace(/[\\\x1A]/g,"").replace(/\x1B./g,function(a){return{"\u001b0":"!","\u001b1":'"',"\u001b2":")","\u001b3":"*","\u001b4":"[","\u001b5":"\\","\u001b6":"]","\u001b7":"^","\u001b8":"_","\u001b9":"`","\u001bA":"~"}[a]})}function d(b,d){a=a.substr(0,b)+Array(1+d).join("\u001a")+a.substr(b+d)}var e,g,h,f,q,n,m,p,k,s,v,y,z;0>a.indexOf("\\")||(a=a.replace(/\\[!")*[\\\]^_`~]/g,
function(a){return{"\\!":"\u001b0",'\\"':"\u001b1","\\)":"\u001b2","\\*":"\u001b3","\\[":"\u001b4","\\\\":"\u001b5","\\]":"\u001b6","\\^":"\u001b7","\\_":"\u001b8","\\`":"\u001b9","\\~":"\u001bA"}[a]}));a+="\n\n\u0017";e=[];var L=4,P=!0,M=[],C=0,ha=!1,Ea=[],ia=0,ea={},U=0,ja,S,Q,T,w;if(a.indexOf("-\n")||a.indexOf("=\n"))for(p=/^(?=[-=>])(?:> ?)*(?=[-=])(?:-+|=+)$/gm;f=p.exec(a);){q=f[0];m=f.index;for(h=m-1;0<h&&" "===a[h-1];)--h;ea[m-1]={R:m+q.length-h,S:h,V:q.length-q.replace(/>/g,"").length,X:"="===
q.charAt(0)?"H1":"H2"}}for(p=/^(?:(?=[-*+\d \t>`#_])((?: {0,3}> ?)+)?([ \t]+)?(\* *\* *\*[* ]*$|- *- *-[- ]*$|_ *_ *_[_ ]*$)?((?:[-*+]|\d+\.)[ \t]+(?=.))?[ \t]*(#+[ \t]*(?=.)|```+)?)?/gm;f=p.exec(a);){m=f.index;n=f[0].length;Q=0;S=!P;T=a.indexOf("\n",m);P=T===m+n&&!f[3]&&!f[4]&&!f[5];n||++p.lastIndex;ja=P&&S;f[1]?(k=f[1].length-f[1].replace(/>/g,"").length,Q=f[1].length):k=0;if(k<ia&&!S&&!P){ha=!0;do B(X(2,"QUOTE",U,0),Ea.pop());while(k<--ia)}if(k>ia&&!P){ha=!0;do v=X(1,"QUOTE",m,0),v.p=ia,Ea.push(v);
while(k>++ia)}g=v=0;if(f[2]){w=f[2];y=w.length;do" "===w.charAt(g)?++v:v=v+4&-4;while(++g<y&&v<L)}v<L&&z&&!P&&(ha=!0);ha&&(ha=!1,z&&(C=X(2,"CODE",U,0),B(C,z),C.p=-1,z=null),M.forEach(function(a){b(a,U)}),M=[],C=0,m&&e.push(m-1));if(v>=L){if(z||!S)Q=(f[1]||"").length+g,z||(z=X(1,"CODE",m+Q,0)),f={}}else{L=!!f[4];if(v||S||L||P)if(S&&!L)w=C-1;else if(C)for(w=0;w<C&&v>M[w].N;)++w;else w=!S&&L?0:-1;else w=-1;for(;w<C-1;)b(M.pop(),U),--C;w!==C||L||--w;if(L&&0<=w){ja=!0;var ya=m+Q+g;y=f[4].length;g=X(1,
"LI",ya,y);d(ya,y);w<C?(B(X(2,"LI",U,0),M[w].J),M[w].J=g,M[w].K.push(g)):(++C,w?(y=M[w-1].N+1,v=Math.max(y,4*w)):y=0,w=X(1,"LIST",ya,0),-1<f[4].indexOf(".")&&w.l("type","decimal"),M.push({T:w,J:g,K:[g],Y:y,N:v,O:!0}))}!C||S||P||(1<M[0].K.length||!L)&&M.forEach(function(a){a.O=!1});L=4*(C+1)}if(f[5]){if("#"===f[5].charAt(0)){k=f[5].length;s=m+n-k;h=T;for(g=0;-1<" #\t".indexOf(a.charAt(h-1));)--h,++g;Y("H"+/#{1,6}/.exec(f[5])[0].length,s,k,h,g);e.push(s);e.push(h);S&&(ja=!0)}}else f[3]&&!C?(X(3,"HR",
m+Q,n-Q),ja=!0):!ea[T]||ea[T].V!==k||P||C||z||Y(ea[T].X,m+Q,0,ea[T].S,ea[T].R);ja&&(X(3,"pb",U,0),e.push(U));P||(U=T);Q&&fa(X(3,"i",m,Q))}e.forEach(function(b){a=a.substr(0,b)+"\u0017"+a.substr(1+b)});if(-1<a.indexOf("`"))for(p=/(``?)[^\x17]*?[^`]\1(?!`)/g;f=p.exec(a);)m=f.index,n=f[0].length,y=f[1].length,Y("C",m,y,m+n-y,y),d(m,n);if(-1<a.indexOf("!["))for(p=/!\[([^\x17\]]+)] ?\(([^\x17 ")]+)(?: "([^\x17"]*)")?\)/g;f=p.exec(a);)m=f.index,n=f[0].length,e=f[1].length,s=m,k=2,h=s+k+e,g=n-k-e,e=Y("IMG",
s,k,h,g),e.l("alt",c(f[1])),e.l("src",c(f[2])),""<f[3]&&e.l("title",c(f[3])),d(m,n);if(-1<a.indexOf("["))for(p=/\[([^\x17\]]+)] ?\(([^\x17)]+)\)/g;f=p.exec(a);){m=f.index;n=f[0].length;e=f[1].length;s=m;k=1;h=s+k+e;g=n-k-e;z=f[2];e="";if(f=/^(.+?) "(.*?)"$/.exec(z))z=f[1],e=f[2];v=Y("URL",s,k,h,g);v.l("url",c(z));""!==e&&v.l("title",c(e));d(s,k);d(h,g)}if(-1<a.indexOf("~~"))for(p=/~~[^\x17]+?~~/g;f=p.exec(a);)q=f[0],m=f.index,n=q.length,Y("DEL",m,2,m+n-2,2);if(-1<a.indexOf("^"))for(p=/\^[^\x17\s]+/g;f=
p.exec(a);)q=f[0],m=f.index,n=q.length,s=m,h=m+n,e=q.split("^"),e.shift(),e.forEach(function(a){Y("SUP",s,1,h,0);s+=1+a.length});[["*",/\*+/g],["_",/_+/g]].forEach(function(b){var d=b[0];b=b[1];if(!(0>a.indexOf(d)))for(var c=0,e=a.indexOf("\u0017"),h,g,k,p;f=b.exec(a);)if(q=f[0],m=f.index,n=q.length,m>e&&(c=0,e=a.indexOf("\u0017",m)),3<=n){var s=n;3>c?p=g=m:h<k?(p=m,g=m+2):(p=m+1,g=m,k===h&&(h+=2));c&2&&(Y("STRONG",k,2,p,2),s-=2);c&1&&(Y("EM",h,1,g,1),--s);s?(c=Math.min(s,3),c&1&&(h=m+n-c),c&2&&(k=
m+n-c)):c=0}else 2===n?3===c&&k===h?(Y("STRONG",h+1,2,m,2),c=1):c&2?(Y("STRONG",k,2,m,2),c-=2):(c+=2,k=m):"_"===d&&0<m&&0<" abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".indexOf(a.charAt(m-1))&&0<" abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".indexOf(a.charAt(m+1))||(3===c&&k===h?(Y("EM",k+2,1,m,1),c=2):c&1?(Y("EM",h,1,m,1),--c):(++c,h=m))})}},Autoemail:{x:"@",y:/\b[-a-z0-9_+.]+@[-a-z0-9.]*[a-z0-9]/ig,v:1E4,z:"warn",u:function(a,b){b.forEach(function(a){var b=
X(1,"EMAIL",a[0][1],0);b.l("email",a[0][0]);a=X(2,"EMAIL",a[0][1]+a[0][0].length,0);B(b,a)})}},Autolink:{x:"://",y:/(?:ftp|https?):\/\/\S(?:[^\s\[\]]*(?:\[\w*\])?)+/ig,v:1E4,z:"warn",u:function(a,b){b.forEach(function(a){for(var b=a[0][0];;)if(b=b.replace(/[\s!"',.<>?]+$/,""),")"===b.substr(-1)&&b.replace(/[^(]+/g,"").length<b.replace(/[^)]+/g,"").length)b=b.substr(0,b.length-1);else break;var e=X(1,"URL",a[0][1],0);e.l("url",b);a=X(2,"URL",a[0][1]+b.length,0);B(e,a)})}},Escaper:{x:"\\",y:/\\[-!#()*+.:@[\\\]^_`{}]/g,
v:1E4,z:"warn",u:function(a,b){b.forEach(function(a){X(3,"ESC",a[0][1],a[0][0].length)})}},FancyPants:{u:function(a){function b(b,e,h,g){for(;f=e.exec(a);){var n=X(3,d,f.index+f[0].indexOf(b),1),q=X(3,d,f.index+f[0].length-1,1);n.l(c,h);q.l(c,g);n.M.push(q);n.D&&A(q)}}var c="char",d="FP",e=0<=a.indexOf("'"),g=0<=a.indexOf('"'),h,f,q,n;if(e)for(h=/[a-z]'|(?:^|\s)'(?=[a-z]|[0-9]{2})/gi;f=h.exec(a);)tag=X(3,d,f.index+f[0].indexOf("'"),1),tag.l(c,"\u2019"),tag.p=10;if(e||g||0<=a.indexOf("x"))for(h=/[0-9](?:'s|["']? ?x(?= ?[0-9])|["'])/g;f=
h.exec(a);)if(q=f.index+f[0].length-1,"x"===f[0].charAt(q)&&X(3,d,q,1).l(c,"\u00d7"),n=f[0].charAt(1),"'"===n||'"'===n)q=1+f.index,n="'s"===f[0].substr(1,2)?"\u2019":"'"===n?"\u2032":"\u2033",X(3,d,q,1).l(c,n);e&&b("'",/(?:^|\W)'.+?'(?!\w)/g,"\u2018","\u2019");g&&b('"',/(?:^|\W)".+?"(?!\w)/g,"\u201c","\u201d");if(0<=a.indexOf("...")||0<=a.indexOf("--"))for(h=/---?|\.\.\./g;f=h.exec(a);)q=f.index,e=f[0].length,n={"--":"\u2013","---":"\u2014","...":"\u2026"}[f[0]],X(3,d,q,e).l(c,n);if(0<=a.indexOf("("))for(h=
/\((?:c|r|tm)\)/gi;f=h.exec(a);)q=f.index,e=f[0].length,n={"(c)":"\u00a9","(r)":"\u00ae","(tm)":"\u2122"}[f[0].toLowerCase()],X(3,d,q,e).l(c,n)}},HTMLComments:{x:"\x3c!--",y:/\x3c!--(?!\[if)[\s\S]*?--\x3e/ig,v:1E4,z:"warn",u:function(a,b){b.forEach(function(a){var b=aa(a[0][0].substr(4,a[0][0].length-7)),b=b.replace(/[<>]/g,""),b=b.replace(/--/g,"");X(3,"HC",a[0][1],a[0][0].length).l("content",b)})}},HTMLEntities:{x:"&",y:/&(?:[a-z]+|#(?:[0-9]+|x[0-9a-f]+));/ig,v:1E4,z:"warn",u:function(a,b){b.forEach(function(a){var b=
a[0][0],e=aa(b);e!==b&&X(3,"HE",a[0][1],b.length).l("char",e)})}},HTMLElements:{x:"<",y:/<(?:\/((?:u|a(?:bbr)?|br?|code|d(?:el|iv)|em|hr|i(?:mg|ns)?|r(?:[bp]|tc?|uby)|s(?:(?:pan|trong|u[bp]))?|t(?:[dr]|able|body|foot|h(?:ead)?)))|((?:u|a(?:bbr)?|br?|code|d(?:el|iv)|em|hr|i(?:mg|ns)?|r(?:[bp]|tc?|uby)|s(?:(?:pan|trong|u[bp]))?|t(?:[dr]|able|body|foot|h(?:ead)?)))((?:\s+[a-z][-a-z]*(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?)*)\s*\/?)\s*>/ig,v:1E4,z:"warn",u:function(a,b){var c={a:{"":"URL",href:"url"},
hr:{"":"HR"},img:{"":"IMG"},em:{"":"EM"},s:{"":"S"},strong:{"":"STRONG"},sub:{"":"SUB"},sup:{"":"SUP"}};b.forEach(function(b){var e="/"===a.charAt(b[0][1]+1),g=b[0][1],h=b[0][0].length,f=b[2-e][0].toLowerCase(),q=c&&c[f]&&c[f][""]?c[f][""]:"html:"+f;if(e)X(2,q,g,h);else for(var e="/>"===b[0][0].substr(h-2)?Y(q,g,h,g+h,0):X(1,q,g,h),h=/[a-z][-a-z]*(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?/gi,n;n=h.exec(b[3][0]);)g=n[0].indexOf("="),0>g&&(g=n[0].length,n[0]+="="+n[0].toLowerCase()),q=n[0].substr(0,
g).toLowerCase().replace(/^\s+/,"").replace("/s+$/",""),g=n[0].substr(1+g).replace(/^\s+/,"").replace("/s+$/",""),c&&c[f]&&c[f][q]&&(q=c[f][q]),/^["']/.test(g)&&(g=g.substr(1,g.length-2)),e.l(q,aa(g))})}},MediaEmbed:{x:":",y:/\b(?:spotify:|https?:\/\/(?:[-.\w]+\.)?(?:twitch\.tv|vi(?:meo\.com|ne\.co)|youtu(?:\.be|be\.com)|(?:bandcamp|dailymotion|facebook|grooveshark|liveleak|soundcloud|(?:open|play)\.spotify)\.com)\/)[^["'\s]+(?!\S)/g,v:1E4,z:"warn",u:function(a,b){b.forEach(function(a){var b=a[0][0];
a=X(3,"MEDIA",a[0][1],b.length);a.l("url",b);a.p=-10})}}},Xa,Ya,W,Ha,Z,Za=1E3,$,V,$a={d:[119],e:[2047],c:392};function ab(a,b){var c=a.m;a.c&512&&(b=bb(b));B(X(2,c,b,0),a)}function bb(a){for(;a>V&&-1<" \n\t".indexOf(K.charAt(a-1));)--a;return a}function Ma(){V=0;Xa={};Ya={};$=[];Z=null;W=$a;W.B=!1;for(var a in J)Xa[a]=0,Ya[a]=0;do{for(;O.length;)Ka||(O.sort(cb),Ka=!0),Z=O.pop(),W.c&16&&!ga(Z,$[$.length-1])&&!ka(Z)||db();$.forEach(function(a){ab(a,Da)})}while(O.length);Qa()}
function db(){if(!Z.D){var a=Z.n,b=Z.w;if(a+b>Da)A(Z);else if(V>a){var c;if((c=Z.F)&&0<=$.indexOf(c))a=Math.max(0,a+b-V),a=X(2,c.m,V,a),B(a,c);else{if("i"===Z.m&&(c=a+b-V,0<c)){X(3,"i",V,c);return}A(Z)}}else if("i"===Z.m)Wa(Z);else if("br"===Z.m)W.c&128||(Ra(Z.n,0,!1),N+="<br/>");else if("pb"===Z.m)Ra(Z.n,0,!0);else if(Z.o&1)if(c=Z,a=c.m,b=J[a],Ya[a]>=b.h)t(r,"err","Tag limit exceeded",{tag:c,tagName:a,tagLimit:b.h}),A(c);else{var d=c,e=J[d.m],g=!0;if(e.b){r.G=d;for(var h=0;h<e.b.length;++h)if(!e.b[h](d,
e)){g=!1;break}delete r.G}if(g){a:{d=c;if($.length&&(e=J[d.m],e.f.r&&(g=$[$.length-1],e.f.r[g.m]))){O.push(d);ab(g,d.n);d=!0;break a}d=!1}d||(Xa[a]>=b.g?(t(r,"err","Nesting limit exceeded",{tag:c,tagName:a,nestingLimit:b.g}),A(c)):(b=J[a].i,W.d[b>>5]&1<<(b&31)?(c.c&1&&!c.A&&(a=new x(3,a,c.n,c.w),la(a,D(c)),a.c=c.c,c=a),Sa(c),eb(c)):(t(r,"warn","Tag is not allowed in this context",{tag:c,tagName:a}),A(c))))}else A(c)}else fb()}}
function fb(){var a=Z;if(Xa[a.m]){for(var b=[],c=$.length;0<=--c;){var d=$[c];if(ga(a,d))break;if(++Ha>Za)throw"Fixing cost exceeded";b.push(d)}if(0>c)da({tag:a});else{var e=Ha<Za,g=[];b.forEach(function(b){var c=b.m;e&&(b.c&2?g.push(b):e=!1);var d=a.n;b.c&512&&(d=bb(d));c=new x(2,c,d,0);c.c=b.c;Sa(c);gb()});Sa(a);gb();if(b.length&&Ha<Za){d=V;for(c=O.length;0<=--c&&++Ha<Za;){var h=O[c];if(h.n>d||h.o&1)break;for(var f=b.length;0<=--f&&++Ha<Za;)if(ga(h,b[f])){b.splice(f,1);g[f]&&g.splice(f,1);d=Math.max(d,
h.n+h.w);break}}d>V&&Wa(new x(3,"i",V,d-V))}g.forEach(function(a){var b=X(a.o,a.m,V,0);la(b,D(a));b.p=a.p;(a=a.A)&&B(b,a)})}}}function gb(){var a=$.pop();--Xa[a.m];W=W.U}function eb(a){function b(a,b){for(var c=-1,d=a.length,e=Array(d);++c<d;)e[c]=a[c]&b[c];return e}var c=a.m,d=a.c,e=J[c];++Ya[c];3!==a.o&&(++Xa[c],$.push(a),a=b(e.d,e.d),d&64&&(a=b(a,W.d)),e=b(W.e,e.e),a=b(a,e),W.c&256&&(d|=256),d&256&&(d|=128),W={d:a,e:e,c:d,U:W})}var O,Ka;
function X(a,b,c,d){a=new x(a,b,c,d);J[b]&&(a.c=J[b].f.c);J[b]||ka(a)?J[b]&&J[b].I?(t(r,"warn","Tag is disabled",{tag:a,tagName:b}),A(a)):0>d||0>c?A(a):(Ka&&O.length&&a.n>=O[O.length-1].n&&(Ka=!1),O.push(a)):A(a);return a}function Y(a,b,c,d,e){b=X(1,a,b,c);B(b,X(2,a,d,e));return b}function cb(a,b){var c=a.n,d=b.n;if(c!==d)return d-c;if(a.p!==b.p)return b.p-a.p;c=a.w;d=b.w;return c&&d?c-d:c||d?c?-1:1:(c={2:0,3:1,1:2},c[b.o]-c[a.o])}
function hb(a){return(new DOMParser).parseFromString(a,"text/xml")}var ib=new XSLTProcessor;ib.importStylesheet(hb('<?xml version="1.0" encoding="utf-8"?><xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:html="urn:s9e:TextFormatter:html" exclude-result-prefixes="html"><xsl:output method="html" encoding="utf-8" indent="no"/><xsl:template match="BANDCAMP"><iframe width="400" height="{120-78*boolean(@track_id|@track_num)}" allowfullscreen="" frameborder="0" scrolling="no"><xsl:attribute name="src">//bandcamp.com/EmbeddedPlayer/<xsl:choose><xsl:when test="@album_id">album=<xsl:value-of select="@album_id"/>/size=<xsl:choose><xsl:when test="@track_num">small/t=<xsl:value-of select="@track_num"/></xsl:when><xsl:otherwise>medium</xsl:otherwise></xsl:choose></xsl:when><xsl:otherwise>track=<xsl:value-of select="@track_id"/>/size=small</xsl:otherwise></xsl:choose></xsl:attribute></iframe></xsl:template><xsl:template match="C"><code><xsl:apply-templates/></code></xsl:template><xsl:template match="CODE"><pre><code class="{@lang}"><xsl:apply-templates/></code></pre></xsl:template><xsl:template match="DAILYMOTION"><iframe width="560" height="315" src="//www.dailymotion.com/embed/video/{@id}" allowfullscreen="" frameborder="0" scrolling="no"/></xsl:template><xsl:template match="DEL|EM|H1|H2|H3|H4|H5|H6|LI|STRONG|SUP|html:b|html:br|html:code|html:del|html:i|html:ins|html:rb|html:rp|html:rt|html:rtc|html:ruby|html:strong|html:sub|html:sup|html:table|html:tbody|html:tfoot|html:thead|html:tr|html:u|p"><xsl:element name="{translate(local-name(),\'DEGHILMNOPRSTU\',\'deghilmnoprstu\')}"><xsl:apply-templates/></xsl:element></xsl:template><xsl:template match="EMAIL"><a href="mailto:{@email}"><xsl:apply-templates/></a></xsl:template><xsl:template match="ESC"><xsl:value-of select="substring(.,2)"/></xsl:template><xsl:template match="FACEBOOK"><iframe width="560" height="315" src="https://www.facebook.com/video/embed?video_id={@id}" allowfullscreen="" frameborder="0" scrolling="no"/></xsl:template><xsl:template match="FP|HE"><xsl:value-of select="@char"/></xsl:template><xsl:template match="GROOVESHARK"><object type="application/x-shockwave-flash" typemustmatch="" width="250" height="{250-210*boolean(@songid)}" data="//grooveshark.com/{substring(\'songWw\',6-5*boolean(@songid),5)}idget.swf"><param name="allowfullscreen" value="true"/><param name="flashvars" value="playlistID={@playlistid}&amp;songID={@songid}"/><embed type="application/x-shockwave-flash" src="//grooveshark.com/{substring(\'songWw\',6-5*boolean(@songid),5)}idget.swf" width="250" height="{250-210*boolean(@songid)}" allowfullscreen="" flashvars="playlistID={@playlistid}&amp;songID={@songid}"/></object></xsl:template><xsl:template match="HC"><xsl:comment><xsl:value-of select="@content"/></xsl:comment></xsl:template><xsl:template match="HR"><hr/></xsl:template><xsl:template match="IMG"><img src="{@src}"><xsl:copy-of select="@alt"/><xsl:copy-of select="@title"/></img></xsl:template><xsl:template match="LIST"><xsl:choose><xsl:when test="not(@type)"><ul><xsl:apply-templates/></ul></xsl:when><xsl:otherwise><ol><xsl:apply-templates/></ol></xsl:otherwise></xsl:choose></xsl:template><xsl:template match="LIVELEAK"><iframe width="640" height="360" src="http://www.liveleak.com/ll_embed?i={@id}" allowfullscreen="" frameborder="0" scrolling="no"/></xsl:template><xsl:template match="QUOTE"><blockquote><xsl:apply-templates/></blockquote></xsl:template><xsl:template match="SOUNDCLOUD"><iframe width="560" height="166" allowfullscreen="" frameborder="0" scrolling="no"><xsl:attribute name="src">https://w.soundcloud.com/player/?url=<xsl:choose><xsl:when test="@secret_token and@playlist_id">https://api.soundcloud.com/playlists/<xsl:value-of select="@playlist_id"/>&amp;secret_token=<xsl:value-of select="@secret_token"/></xsl:when><xsl:when test="@secret_token and@track_id">https://api.soundcloud.com/tracks/<xsl:value-of select="@track_id"/>&amp;secret_token=<xsl:value-of select="@secret_token"/></xsl:when><xsl:otherwise><xsl:value-of select="@id"/><xsl:if test="@secret_token">&amp;secret_token=<xsl:value-of select="@secret_token"/></xsl:if></xsl:otherwise></xsl:choose></xsl:attribute></iframe></xsl:template><xsl:template match="SPOTIFY"><iframe width="300" height="{380-300*(contains(@uri,\':track:\')orstarts-with(@path,\'track/\'))}" allowfullscreen="" frameborder="0" scrolling="no"><xsl:attribute name="src">https://embed.spotify.com/?uri=<xsl:choose><xsl:when test="@uri"><xsl:value-of select="@uri"/></xsl:when><xsl:otherwise>spotify:<xsl:value-of select="translate(@path,\'/\',\':\')"/></xsl:otherwise></xsl:choose></xsl:attribute></iframe></xsl:template><xsl:template match="TWITCH"><object type="application/x-shockwave-flash" typemustmatch="" width="620" height="378" data="http://www.twitch.tv/widgets/{substring(\'archl\',5-4*boolean(@archive_id|@chapter_id),4)}ive_embed_player.swf"><param name="allowfullscreen" value="true"/><param name="flashvars"><xsl:attribute name="value">channel=<xsl:value-of select="@channel"/><xsl:if test="@archive_id">&amp;archive_id=<xsl:value-of select="@archive_id"/></xsl:if><xsl:if test="@chapter_id">&amp;chapter_id=<xsl:value-of select="@chapter_id"/></xsl:if>&amp;auto_play=false</xsl:attribute></param><embed type="application/x-shockwave-flash" width="620" height="378" src="http://www.twitch.tv/widgets/{substring(\'archl\',5-4*boolean(@archive_id|@chapter_id),4)}ive_embed_player.swf" allowfullscreen=""/></object></xsl:template><xsl:template match="URL"><a href="{@url}"><xsl:copy-of select="@title"/><xsl:apply-templates/></a></xsl:template><xsl:template match="VIMEO"><iframe width="560" height="315" src="//player.vimeo.com/video/{@id}" allowfullscreen="" frameborder="0" scrolling="no"/></xsl:template><xsl:template match="VINE"><iframe width="480" height="480" src="https://vine.co/v/{@id}/embed/simple" allowfullscreen="" frameborder="0" scrolling="no"/><script async="" src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"/></xsl:template><xsl:template match="YOUTUBE"><iframe width="560" height="315" allowfullscreen="" frameborder="0" scrolling="no"><xsl:attribute name="src">//www.youtube.com/embed/<xsl:value-of select="@id"/><xsl:if test="@list or@t">?<xsl:if test="@list">list=<xsl:value-of select="@list"/><xsl:if test="@t">&amp;</xsl:if></xsl:if><xsl:if test="@t">start=<xsl:value-of select="@t"/></xsl:if></xsl:if></xsl:attribute></iframe></xsl:template><xsl:template match="br"><br/></xsl:template><xsl:template match="e|i|s"/><xsl:template match="html:abbr"><abbr><xsl:copy-of select="@title"/><xsl:apply-templates/></abbr></xsl:template><xsl:template match="html:div"><div><xsl:copy-of select="@class"/><xsl:apply-templates/></div></xsl:template><xsl:template match="html:span"><span><xsl:copy-of select="@class"/><xsl:apply-templates/></span></xsl:template><xsl:template match="html:td"><td><xsl:copy-of select="@colspan"/><xsl:copy-of select="@rowspan"/><xsl:apply-templates/></td></xsl:template><xsl:template match="html:th"><th><xsl:copy-of select="@colspan"/><xsl:copy-of select="@rowspan"/><xsl:copy-of select="@scope"/><xsl:apply-templates/></th></xsl:template></xsl:stylesheet>'));
function E(a,b){var c;a:{c=r;if(b.k){var d,e,g=D(a);for(d in g){var h=g[d];if(b.k[d]){if(e=b.k[d],e.b){c.l(d);for(var f=0;f<e.b.length;++f)if(h=e.b[f](h,d),!1===h){delete a.k[d];break}!1!==h&&a.l(d,h);delete c.E}}else delete a.k[d]}for(d in b.k)if(e=b.k[d],!(d in a.k)&&e.j){c=!1;break a}}else la(a,{});c=!0}return c}function ma(a){return/^[-\w+., ]+$/.test(a)?a:!1}function F(a){return ba(a)}function na(a){return/^[-\w.+]+@[-\w.]+$/.test(a)?a:!1}
function oa(a){var b=ca.mediasites,c;if("media"in a.k)c=a.k.media,!("id"in a.k)&&"url"in a.k&&-1===a.k.url.indexOf("://")&&a.l("id",a.k.url);else if("url"in a.k){var d=/^(?:([^:]+):)?(?:\/\/([^\/]+))?/.exec(a.k.url);if(d[1]&&b[d[1]+":"])c=b[d[1]+":"];else if(d[2]){d=d[2];do{if(b[d]){c=b[d];break}var e=d.indexOf(".");if(-1==e)break;d=d.substr(1+e)}while(""<d)}}c&&(b=a.A||a,d=a.n,c=X(3,c.toUpperCase(),d,b.n+b.w-d),la(c,D(a)),c.p=a.p);return!1}function pa(){return!0}
function qa(a){a:{for(var b in D(a))if("url"!==b){a=!0;break a}a=!1}return a}function G(a){return l(a,/^(?:\d+)$/)}function H(a,b){return Na(a,b)}function ra(a){return l(a,/^(?:[A-Za-z0-9]+)$/)}function I(a){return l(a,/^(?:[0-9]+)$/)}function sa(){return!0}function ta(a){return l(a,/^(?:[a-f_0-9]+)$/)}function wa(){return!0}
function ua(a){return l(a,/^(?:https?:\/\/(?:(?:api\.soundcloud\.com\/(?:playlist|track)s\/\d+)|soundcloud\.com\/[^\/]+\/(?:sets\/)?[^\/]+)(?:(?:\?secret_token=|\/(?=s-))([-\w]+))?)$/)}function va(a){return l(a,/^(?:[-\w]+)$/)}function xa(a){return l(a,/^(?:spotify:(?:album|artist|user|track(?:set)?):[,:\w]+)$/)}function za(a){return l(a,/^(?:(?:album|artist|track|user)\/[\/\w]+)$/)}function Ba(){return!0}function Aa(a){return l(a,/^(?:(?!m\/)\w+)$/)}function Ca(a){return l(a,/^(?:[^\/]+)$/)}
window.s9e={TextFormatter:{disablePlugin:function(a){La[a]&&(La[a].I=!0)},enablePlugin:function(a){La[a]&&(La[a].I=!1)},preview:function(a,b){function c(a,b){for(var c=a.childNodes,e=b.childNodes,m=c.length,p=e.length,k,s,v=0,y=0;v<m&&v<p;){k=c[v];s=e[v];if(!d(k,s))break;++v}for(var z=Math.min(m-v,p-v);y<z;){k=c[m-(y+1)];s=e[p-(y+1)];if(!d(k,s))break;++y}k=g.createDocumentFragment();for(z=v;z<p-y;)s=e[z].cloneNode(!0),k.appendChild(s),++z;for(z=m-y;--z>=v;)a.removeChild(c[z]);y?a.insertBefore(k,a.childNodes[v]):
a.appendChild(k)}function d(a,b){if(a.nodeName!==b.nodeName||a.nodeType!==b.nodeType)return!1;if(3===a.nodeType||8===a.nodeType)return a.nodeValue!==b.nodeValue&&(a.nodeValue=b.nodeValue),!0;if(a.isEqualNode&&a.isEqualNode(b))return!0;for(var d=a.attributes,e=b.attributes,g=e.length,p=d.length;0<=--p;){var k=d[p],s=k.namespaceURI,k=k.name;b.hasAttributeNS(s,k)||a.removeAttributeNS(s,k)}for(p=g;0<=--p;)d=e[p],s=d.namespaceURI,k=d.name,d=d.value,d!==a.getAttributeNS(s,k)&&a.setAttributeNS(s,k,d);c(a,
b);return!0}var e=Ga(a),e=hb(e),g=b.ownerDocument,e=g.importNode(ib.transformToFragment(e,g),!0);c(b,e)}}};