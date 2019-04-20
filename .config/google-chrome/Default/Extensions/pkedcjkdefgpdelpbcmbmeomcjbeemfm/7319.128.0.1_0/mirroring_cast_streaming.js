'use strict';var mz={TAB:0,Rj:1,fn:2},nz=function(a){Ab("MediaRouter.CastStreaming.Start.Success",a,mz)};var oz=fb("mr.mirror.cast.LogUploader"),qz=function(a,b,c){pz("raw_events.log.gz",a,b,c);return b?"https://crash.corp.google.com/samples?reportid=&q="+encodeURIComponent("UserComments='"+b+"'"):""},pz=function(a,b,c,d){if(0==b.size)oz.info("Trying to upload an empty file to Crash"),d&&d(null);else{var e=new FormData;e.append("prod","Cast");e.append("ver",chrome.runtime.getManifest().version);e.append(a,b);c&&e.append("comments",c);Qw("https://clients2.google.com/cr/report",function(a){a=a.target;
var b=null;$w(a)?(b=ax(a),oz.info("Upload to Crash succeeded: "+b)):oz.info("Upload to Crash failed. HTTP status: "+a.Ta());d&&d(b)},"POST",e,void 0,3E4)}};var rz=function(){this.b=0;Hl(this)},tz=function(){sz||(sz=new rz);return sz},uz=function(){var a=tz(),b={fraction:.01,autoSubmitTimeLimitMillis:6048E5},c=b.autoSubmitTimeLimitMillis,d=Date.now();return a.b&&c&&d-a.b<c?!1:Math.random()<b.fraction};rz.prototype.Fa=function(){return"mirror.cast.LogUtils"};rz.prototype.jb=function(){return[void 0,{lastAutoSubmitMillis:this.b}]};rz.prototype.ib=function(){var a=Fl(this);this.b=a&&a.lastAutoSubmitMillis||0};var sz=null;fb("mr.mirror.cast.LogUtils");var vz={Zv:"OFFER",Xr:"ANSWER",Aw:"PRESENTATION",Ot:"GET_STATUS",Lx:"STATUS_RESPONSE",Nt:"GET_CAPABILITIES",ws:"CAPABILITIES_RESPONSE",mx:"RPC"};var wz=function(){this.capabilities=this.status=this.b=this.error=this.rpc=this.result=this.type=this.f=this.sessionId=null},zz=function(a){try{if("string"!==typeof a)throw SyntaxError("Cannot parse non-string as JSON");var b;xz(JSON.parse(a),function(a){b=yz(a)},function(){throw Error("non-Object result from JSON parse");});return b}catch(d){var c=d instanceof SyntaxError?"JSON parse error: "+d.message:"Type coercion error: "+d.message}"string"==typeof a?a="a string: "+a:a instanceof ArrayBuffer?
(a=new Uint8Array(a),a="an ArrayBuffer whose base64 is "+btoa(String.fromCharCode.apply(null,a))):a="of invalid data type "+typeof a;throw Error(c+". Input was "+a);},yz=function(a){var b=new wz;null!=a.sessionId&&(b.sessionId=String(a.sessionId));Az(a.seqNum,function(a){b.f=a},function(){throw Error('"seqNum" must be a number');});if("type"in a){for(var c=String(a.type).toUpperCase(),d=k(Object.keys(vz)),e=d.next();!e.done;e=d.next())if(vz[e.value]==c){b.type=c;break}if(!b.type)throw Error('not a known message "type"');
}"result"in a&&(b.result=String(a.result));if("rpc"in a){if("string"!==typeof a.rpc)throw Error('"rpc" must be a String containing a base64 payload');b.rpc=new Uint8Array([].concat(m(atob(a.rpc))).map(function(a){return a.charCodeAt(0)}))}xz(a.error,function(a){b.error=Bz(a)},function(){throw Error('"error" must be an Object');});xz(a.answer,function(a){b.b=Cz(a)},function(){throw Error('"answer" must be an Object');});xz(a.status,function(a){b.status=Dz(a)},function(){throw Error('"status" must be an Object');
});xz(a.capabilities,function(a){b.capabilities=Ez(a)},function(){throw Error('"capabilities" must be an Object');});return b},xz=function(a,b,c){void 0!==a&&(a instanceof Object?b(a):c())},Az=function(a,b,c){void 0!==a&&("number"!==typeof a?c():b(a))},Fz=function(a,b,c){void 0!==a&&(a instanceof Array&&a.every(function(a){return"number"===typeof a})?b(a):c())},Gz=function(a,b,c){void 0!==a&&(a instanceof Array?b(a.map(function(a){return String(a)})):c())},Hz=function(){this.j=null;this.b=[];this.f=
[];this.g=this.h=this.u=null},Cz=function(a){var b=new Hz;Az(a.udpPort,function(a){b.j=a},function(){throw Error('"answer.udpPort" must be a number');});Fz(a.sendIndexes,function(a){b.b=a},function(){throw Error('"answer.sendIndexes" must be an array of numbers');});Fz(a.ssrcs,function(a){b.f=a},function(){throw Error('"answer.ssrcs" must be an array of numbers');});"IV"in a&&(b.u=String(a.IV));"receiverGetStatus"in a&&(b.h="true"==String(a.receiverGetStatus).toLowerCase());"castMode"in a&&(b.g=String(a.castMode));
return b},Iz=function(){this.details=this.description=this.code=null},Bz=function(a){var b=new Iz;Az(a.code,function(a){b.code=a},function(){throw Error('"error.code" must be a number');});"description"in a&&(b.description=String(a.description));xz(a.details,function(a){b.details=a},function(){throw Error('"error.details" must be an Object');});return b},Jz=function(){this.f=this.b=null},Dz=function(a){var b=new Jz;Az(a.wifiSnr,function(a){b.b=a},function(){throw Error('"status.wifiSnr" must be a number');
});Fz(a.wifiSpeed,function(a){b.f=a},function(){throw Error('"status.wifiSpeed" must be an array of numbers');});return b},Kz=function(){this.f=this.b=null},Ez=function(a){var b=new Kz;Gz(a.mediaCaps,function(a){b.b=a},function(){throw Error('"capabilities.mediaCaps" must be an array');});if("keySystems"in a){a=a.keySystems;if(!(a instanceof Array))throw Error('"capabilities.keySystems" must be an array');b.f=a.map(function(a){var b;xz(a,function(a){b=Lz(a)},function(){throw Error('"capabilities.keySystems" entries must be *Objects');
});return b})}return b},Mz=function(){this.g=this.m=this.u=this.j=this.s=this.b=this.o=this.f=this.initDataTypes=this.h=null},Lz=function(a){var b=new Mz;"keySystemName"in a&&(b.h=String(a.keySystemName));Gz(a.initDataTypes,function(a){b.initDataTypes=a},function(){throw Error('"capabilities.initDataTypes" must be an array');});Gz(a.codecs,function(a){b.f=a},function(){throw Error('"capabilities.codecs" must be an array');});Gz(a.secureCodecs,function(a){b.o=a},function(){throw Error('"capabilities.secureCodecs" must be an array');
});Gz(a.audioRobustness,function(a){b.b=a},function(){throw Error('"capabilities.audioRobustness" must be an array');});Gz(a.videoRobustness,function(a){b.s=a},function(){throw Error('"capabilities.videoRobustness" must be an array');});"persistentLicenseSessionSupport"in a&&(b.j=String(a.persistentLicenseSessionSupport));"persistentReleaseMessageSessionSupport"in a&&(b.u=String(a.persistentReleaseMessageSessionSupport));"persistentStateSupport"in a&&(b.m=String(a.persistentStateSupport));"distinctiveIdentifierSupport"in
a&&(b.g=String(a.distinctiveIdentifierSupport));return b};var Nz=function(a){this.l=fb("mr.mirror.cast.MessageDispatcher");this.h=a;this.b=null;this.f=new Map;this.g=0},Oz=function(a,b,c){if(a.f.has(b))throw Error("Attempt to multiple-subscribe to the same response type: "+b);a.f.set(b,c);a.g=0;mb(a.l,"Added subscriber for "+b+"-type messages.");a.b||(a.b=ky(a.h),a.b.onMessage=a.j.bind(a))},Pz=function(a,b){a.f.delete(b)&&mb(a.l,function(){return"Removed subscriber of "+b+"-type messages."});0==a.f.size&&a.b&&(a.b.Za(),a.b=null)};
Nz.prototype.sendMessage=function(a){return this.b?"RPC"==a.type?this.b.sendMessage(a,{namespace:"urn:x-cast:com.google.cast.remoting"}):this.b.sendMessage(a,{namespace:"urn:x-cast:com.google.cast.webrtc"}):Promise.reject(Error("Require at least one subscriber before sending messages."))};
var Qz=function(a,b,c,d,e){var f=null,h=function(){Pz(a,c);null!=f&&(clearTimeout(f),f=null)};try{Oz(a,c,function(a){e(a)&&h()})}catch(l){e(null,l);return}f=setTimeout(function(){h();e(null,Error("timeout"))},d);a.sendMessage(b).catch(function(a){h();e(null,a)})};
Nz.prototype.j=function(a){if(a&&"string"===typeof a.namespace_&&a.namespace_.startsWith("urn:x-cast:com.google.cast.")){do{var b=void 0;try{b=zz(a.data)}catch(d){b=d.message;break}if(b.type){var c=this.f.get(b.type);if(c)try{c(b);return}catch(d){b="Error thrown during delivery. Response was: "+(JSON.stringify(b)+". Error from subscriber callback ")+("was: "+d.message+".")}else b="Message was ignored: "+JSON.stringify(b)}else b="Message did not include response type: "+JSON.stringify(b)}while(0);
10>this.g?this.l.H(b):mb(this.l,b);++this.g}};var Rz=function(){this.b=Promise.resolve(1)},Tz=function(a,b,c){return Sz(a,function(a){return a==b},c)},Uz=function(a,b){var c=[3,4];return Sz(a,function(a){return-1!=c.indexOf(a)},b)},Vz=function(a,b){a.b=a.b.catch(function(){return 1});return Sz(a,function(){return!0},b)},Sz=function(a,b,c){var d,e,f=new Promise(function(a,b){d=a;e=b});a.b=a.b.then(function(a){if(!b(a))return e(Error("Operation requires a different starting checkpoint than "+a)),Promise.resolve(a);var f=new Wz(a);try{var h=c(f)}catch(y){h=
Promise.reject(y)}return h.then(function(a){return d(a)},function(a){return e(a)}).then(function(){if(null===f.b)throw Error("A prior operation that started at "+(a+" did not complete."));return f.b})},function(a){e(a);throw a;});return f},Wz=function(a){this.f=a;this.b=null},Xz=function(a,b){a.b="number"===typeof b?b:a.f};var Yz=chrome.cast.streaming,$z=function(a,b,c,d,e){this.J=a.sessionId;this.s=a.Qf;this.O=a.Zd;this.g=b;this.R=c;this.G=d;this.T=Zz(e,"onAnswer",this.s);this.Ea=Zz(e,"onSessionStop",this.s);this.l=fb("mr.mirror.cast.StreamingLaunchWorkflow");this.D=new Rz;this.m=this.C=this.o=this.f=this.b=this.u=this.j=this.h=null};
$z.prototype.start=function(a,b,c){var d=this;if(!a&&!b)return Promise.reject(Error("No tracks to stream"));var e=a instanceof aA,f=b instanceof aA;(e&&b&&!f||f&&a&&!e)&&Fb("Mixing remoting and non-remoting tracks");return Tz(this.D,1,function(e){d.h=a;d.j=b;d.u=c;d.l.info(function(){return"Launching streaming for "+bA(d)+" "+("to a "+d.O+".")});return cA(d).then(d.F.bind(d)).then(function(a){return dA(d,a).then(function(b){d.T();var c=eA(d,b,a);d.b=fA(d,d.b,c);d.f=fA(d,d.f,c);if(!d.b&&!d.f)throw Error("Receiver did not select any offers from: "+
JSON.stringify(a));d.C=!!b.h;d.m=function(a,b){a==d.b?d.u.Re("Audio stream (id="+a+") error: "+b):a==d.f&&d.u.Re("Video stream (id="+a+") error: "+b)};Yz.rtpStream.onError.addListener(d.m);return gA(d,b,c)})}).then(function(){d.l.info(function(){return"Launched streaming for "+bA(d)});d.u.ng(d);Xz(e,2);return{so:d.b,Jr:d.f}})})};
$z.prototype.stop=function(){var a=this;return Vz(this.D,function(b){if(!a.h&&!a.j)return Xz(b,1),Promise.resolve();a.l.info(function(){return"Stopping streaming for "+bA(a)+"."});a.m&&(Yz.rtpStream.onError.removeListener(a.m),a.m=null);if(a.u){var c=a.u.Zg();a.u=null}else c=Promise.resolve();return c.then(function(){a.b&&(Yz.rtpStream.stop(a.b),Yz.rtpStream.destroy(a.b),a.b=null);a.f&&(Yz.rtpStream.stop(a.f),Yz.rtpStream.destroy(a.f),a.f=null);a.o&&(Yz.udpTransport.destroy(a.o),a.o=null);a.Ea();
a.l.info(function(){return"Stopped streaming for "+bA(a)+"."});a.h=null;a.j=null;Xz(b,1)})})};
var hA=function(a,b){var c=JSON.stringify(b);return Promise.all([a.b&&new Promise(function(b){return Yz.rtpStream.getRawEvents(a.b,c,b)}),a.f&&new Promise(function(b){return Yz.rtpStream.getRawEvents(a.f,c,b)})]).catch(function(b){a.l.error("Unexpected error when calling getRawEvents()",b);return[]}).then(function(a){return new Blob(a.filter(function(a){return!!a}),{type:"application/gzip"})})},iA=function(a){return Promise.all([a.b&&new Promise(function(b){return Yz.rtpStream.getStats(a.b,b)}),a.f&&
new Promise(function(b){return Yz.rtpStream.getStats(a.f,b)})]).catch(function(b){a.l.error("Unexpected error when calling getStats()",b);return[]}).then(function(a){return Object.assign.apply(Object,[{}].concat(m(a.filter(function(a){return!!a}))))})},bA=function(a){if(a.h&&a.j)var b="audio+video ";else if(a.h)b="audio-only ";else if(a.j)b="video-only ";else return"stopped";return a.h instanceof aA||a.j instanceof aA?b+"remoting":b+"streaming"},cA=function(a){return new Promise(function(b){var c=
function(c,e,f){c&&!a.h&&(Yz.rtpStream.destroy(c),c=null);e&&!a.j&&(Yz.rtpStream.destroy(e),e=null);a.l.info(function(){return"Created Cast Streaming session: audioStreamId="+c+", videoStreamId="+e+"."});a.b=c;a.f=e;a.o=f;b()};a.h instanceof aA||a.j instanceof aA?Yz.session.create(null,null,c):Yz.session.create(a.h,a.j,c)})};
$z.prototype.F=function(){for(var a=Ej(),b=Ej(),c=[],d=k([this.b,this.f]),e=d.next();!e.done;e=d.next())if(e=e.value)for(var f=e==this.b,h=f?127:96,l=f?Math.floor(499999*Math.random())+1:Math.floor(499999*Math.random())+500001,p=f?48E3:9E4,y=k(Yz.rtpStream.getSupportedParams(e)),A=y.next();!A.done;A=y.next())A=A.value,A.payload.payloadType=h,A.payload.maxLatency=this.g.maxLatencyMillis,A.payload.minLatency=this.g.minLatencyMillis,A.payload.animatedLatency=this.g.animatedLatencyMillis,A.payload.ssrc=
l,A.payload.clockRate=p,A.payload.aesKey=a,A.payload.aesIvMask=b,f?(A.payload.channels=2,A.payload.maxBitrate=this.g.audioBitrate,A.payload.maxFrameRate=100):(A.payload.minBitrate=this.g.minVideoBitrate,A.payload.maxBitrate=this.g.maxVideoBitrate,A.payload.maxFrameRate=this.g.maxFrameRate),c.push(new jA(e,A));return c};
var fA=function(a,b,c){b&&!c.some(function(a){return a.Tf==b})&&(a.l.H("Destroying RTP stream not selected by the receiver: id="+b),Yz.rtpStream.destroy(b),b=null);return b},dA=function(a,b){return new Promise(function(c,d){for(var e=[],f=0;f<b.length;++f){var h=b[f].params,l={index:f,codecName:h.payload.codecName.toLowerCase(),rtpProfile:"cast",rtpPayloadType:h.payload.payloadType,ssrc:h.payload.ssrc,targetDelay:h.payload.animatedLatency,aesKey:h.payload.aesKey,aesIvMask:h.payload.aesIvMask,timeBase:"1/"+
h.payload.clockRate,receiverRtcpEventLog:a.g.enableLogging,rtpExtensions:["adaptive_playout_delay"]};a.g.dscpEnabled&&(l.receiverRtcpDscp=46);127==h.payload.payloadType?Object.assign(l,{type:"audio_source",bitRate:0<h.payload.maxBitrate?1E3*h.payload.maxBitrate:60*h.payload.maxFrameRate+h.payload.clockRate*h.payload.channels,sampleRate:h.payload.clockRate,channels:h.payload.channels}):Object.assign(l,{type:"video_source",renderMode:"video",maxFrameRate:Math.round(1E3*h.payload.maxFrameRate)+"/1000",
maxBitRate:1E3*h.payload.maxBitrate,resolutions:[{width:a.g.maxWidth,height:a.g.maxHeight}]});e.push(l)}var p=a.h instanceof aA||a.j instanceof aA?"remoting":"mirroring",y={type:"OFFER",sessionId:a.J,seqNum:Vm(a.R),offer:{castMode:p,receiverGetStatus:!0,supportedStreams:e}};a.l.info(function(){return"Sending OFFER message: "+JSON.stringify(y)});Qz(a.G,y,"ANSWER",1E4,function(b,e){if(null==b)d(e);else if("ok"==b.result&&b.b){if(b.f!=y.seqNum)return a.l.H("Ignoring ANSWER for OFFER with different seqNum: "+
JSON.stringify(b)),!1;((e=b.b.g)&&e!=p||!e&&"mirroring"!=p)&&a.l.error("Expected receiver to ANSWER with castMode="+p+", but got: "+e);mb(a.l,function(){return"Received ANSWER: "+JSON.stringify(b)});c(b.b)}else d(Error("Non-OK ANSWER received: "+JSON.stringify(b)));return!0})})},eA=function(a,b,c){if(b.b.length!=b.f.length)return a.l.error("sendIndexes.length != ssrcs.length in ANSWER: "+JSON.stringify(b)),[];for(var d=[],e={},f=0;f<b.b.length;e={Ye:e.Ye},++f){var h=b.b[f];if(0>h||h>=c.length)return a.l.error("Receiver selected invalid index ("+
h+" < "+c.length+") in ANSWER: "+JSON.stringify(b)),[];e.Ye=c[h];if(d.some(function(a){return function(b){return b.Tf==a.Ye.Tf}}(e)))return a.l.error("Receiver selected same RTP stream twice in ANSWER: "+JSON.stringify(b)),[];e.Ye.params.payload.feedbackSsrc=b.f[h];if(d.some(function(a){return function(b){return b.params.payload.feedbackSsrc==a.Ye.params.payload.feedbackSsrc}}(e)))return a.l.error("Receiver provided same SSRC for two different RTP streams in ANSWER: "+JSON.stringify(b)),[];d.push(e.Ye)}return d},
gA=function(a,b,c){var d=null,e=function(){d&&(Yz.rtpStream.onStarted.removeListener(d),d=null)};return(new Promise(function(e,h){var f=b.j||2344;a.l.info(function(){return"Starting RTP streams to receiver at "+(a.s+":"+f)+(" for selected offers: "+JSON.stringify(c))});var p=a.o||-1;a.g.dscpEnabled&&(a.l.info("Enabled DSCP in sender."),Yz.udpTransport.setOptions(p,{DSCP:!0}));Yz.udpTransport.setDestination(p,{address:a.s,port:f});var y=new Set(c.map(function(a){return a.Tf}));d=function(a){y.delete(a);
0==y.size&&e()};Yz.rtpStream.onStarted.addListener(d);p=k(c);for(var A=p.next();!A.done;A=p.next())A=A.value,Yz.rtpStream.toggleLogging(A.Tf,a.g.enableLogging),Yz.rtpStream.start(A.Tf,A.params);setTimeout(function(){h(Error("Timeout: RTP streams failed to start."))},1E4)})).then(e).catch(function(a){e();throw a;})},Zz=function(a,b,c){var d=this;return a&&b in a?function(){try{a[b](c)}catch(e){d.l.error("Error from testHooks."+b,e)}}:function(){}},jA=function(a,b){this.Tf=a;this.params=b},aA=function(){};var mA=function(a,b,c,d,e,f){this.m=a;this.G=kA(b,this.m.lb);this.R=new $z(this.m.lb,c,d,e,f);this.C=e;this.j=new Rz;this.g=new lA;this.D=new mojo.Binding(mojo.MirrorServiceRemoter,this,null);this.l=fb("mr.mirror.cast.MediaRemoter");this.s=this.b=this.u=this.h=this.F=null;this.f=!0;this.o=this.J.bind(this)};
mA.prototype.initialize=function(a,b){var c=this;return Tz(this.j,1,function(d){c.F=a;c.h=b;var e=c.D.createInterfacePtrAndBind();c.D.setConnectionErrorHandler(function(){c.l.info("Remoter mojo pipe connection error.");nA(c)});c.b=new mojo.MirrorServiceRemotingSourcePtr;var f=Xi(c.m.mediaSource||"");if(!f)throw Error("Failed to parse tab ID from source:\n          "+c.m.mediaSource);c.l.info("Connecting remoter to browser: tabId="+f);(Fi.get("mr.ProviderManager")||null).onMediaRemoterCreated(f,e,
mojo.makeRequest(c.b));c.b.ptr.setConnectionErrorHandler(function(){c.l.info("RemotingSource mojo pipe connection error.");nA(c)});return oA(c).then(function(){if(c.f)c.b.onSinkAvailable(c.G);Xz(d,2)})})};
var nA=function(a){return Vz(a.j,function(b){a.b&&(a.b.ptr.reset(),a.b=null);var c=a.u;a.u=null;a.h=null;a.F=null;a.D.close();chrome.settingsPrivate.onPrefsChanged.hasListener(a.o)&&chrome.settingsPrivate.onPrefsChanged.removeListener(a.o);return new Promise(function(d){window.setTimeout(function(){pA(a).then(function(){Xz(b,1);d();c&&c()})},250)})})};g=mA.prototype;g.ir=function(a){qA(this.g,a)};g.ng=function(a){this.h&&this.h.ng(a)};g.Zg=function(){return this.h?this.h.Zg():Promise.resolve()};
g.Re=function(a,b){this.l.error("Error during streaming: "+a,b);if(this.b)this.b.onError();nA(this)};
g.start=function(){var a=this,b=!1;this.l.info(function(){b=!0;return"Starting next media remoting session."});b&&rA(this.g,function(b){return a.l.info(b)});sA(this.g);Tz(this.j,2,function(b){return(0,a.F)().then(function(c){a.u=c;Oz(a.C,"RPC",function(b){if(b.rpc){var c=a.g;b=b.rpc;c.u&&(++c.m,c.f+=b.length,c.u(b))}});Xz(b,3)}).catch(function(c){return pA(a).then(function(){Xz(b);throw c;})})}).then(function(){a.l.info("Remoting started successfully.")}).catch(function(b){a.l.error("Failed to start remoting",b);
a.b.onError()})};g.Br=function(a,b){var c=this;return Tz(this.j,3,function(d){return c.R.start(a?new aA:null,b?new aA:null,c).then(function(a){tA(c.g,function(a){return c.C.sendMessage(a)},function(a){c.b.onMessageFromSink(a)});Xz(d,4);return{audio_stream_id:a.so||-1,video_stream_id:a.Jr||-1}}).catch(function(a){return pA(c).then(function(){Xz(d);throw a;})})}).catch(function(a){c.l.error("Failed to start remoting streams",a);nA(c);return{audio_stream_id:-1,video_stream_id:-1}})};
g.stop=function(a){var b=this;Uz(this.j,function(c){b.b.onStopped(a);return pA(b).then(function(){b.l.info("Remoting stopped.");Xz(c,5);(0,b.u)().then(function(){return Tz(b.j,5,function(a){if(b.b&&b.f)b.b.onSinkAvailable(b.G);Xz(a,2);return Promise.resolve()})}).catch(function(a){throw a;});b.u=null})}).catch(function(a){b.l.error("Failed to stop remoting: ",a);nA(b)})};
g.Ko=function(){null===this.s&&(this.s=hf(this.m.lb.Qf).then(function(a){return a.f||!1}));return this.s.then(function(a){return{rate:(a?1E7:5E6)/8}})};
var pA=function(a){return a.R.stop().then(function(){Pz(a.C,"RPC");uA(a.g);vA(a.g)})},oA=function(a){return new Promise(function(b){chrome.settingsPrivate.getPref("media_router.media_remoting.enabled",function(c){chrome.runtime.lastError?a.l.error("Encountered error getting media remoting pref: "+JSON.stringify(chrome.runtime.lastError)):c.type!=chrome.settingsPrivate.PrefType.BOOLEAN?a.l.error("Pref value not a boolean: "+JSON.stringify(c)):(a.f=!!c.value,a.l.info("Initializing mediaRemotingEnabled_ with value read from pref: "+
a.f));chrome.settingsPrivate.onPrefsChanged.hasListener(a.o)||chrome.settingsPrivate.onPrefsChanged.addListener(a.o);b()})})};
mA.prototype.J=function(a){if(this.b){a=k(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,"media_router.media_remoting.enabled"==b.key){if(b.type!=chrome.settingsPrivate.PrefType.BOOLEAN){this.l.error("Pref value not a boolean: "+JSON.stringify(b));break}a=!!b.value;if(this.f==a)break;this.f=a;this.l.info("mediaRemotingEnabled_ changed to: "+this.f);if(this.f)this.b.onSinkAvailable(this.G);else this.b.onStopped(mojo.RemotingStopReason.USER_DISABLED);break}}};
var kA=function(a,b){var c=this,d=new mojo.RemotingSinkMetadata;d.features=[];d.friendly_name=b.Ar||"";d.audio_capabilities=[];d.video_capabilities=[];var e=mojo.RemotingSinkAudioCapability,f=mojo.RemotingSinkVideoCapability,h=d.audio_capabilities,l=d.video_capabilities,p=b.Zd||"";(a.b||[]).forEach(function(a){switch(a){case "audio":h.push(e.CODEC_BASELINE_SET);break;case "aac":h.push(e.CODEC_AAC);break;case "opus":h.push(e.CODEC_OPUS);break;case "video":l.push(f.CODEC_BASELINE_SET);break;case "4k":l.push(f.SUPPORT_4K);
break;case "h264":l.push(f.CODEC_H264);break;case "vp8":l.push(f.CODEC_VP8);break;case "vp9":p.startsWith("Chromecast Ultra")&&l.push(f.CODEC_VP9);break;case "hevc":p.startsWith("Chromecast Ultra")&&l.push(f.CODEC_HEVC);break;default:c.l.info("Unknown mediaCap name: "+a)}});b.Zd&&"Chromecast Ultra"==b.Zd&&l.push(f.SUPPORT_4K);return d};mA.prototype.estimateTransmissionCapacity=mA.prototype.Ko;mA.prototype.stop=mA.prototype.stop;mA.prototype.startDataStreams=mA.prototype.Br;mA.prototype.start=mA.prototype.start;
mA.prototype.sendMessageToSink=mA.prototype.ir;
var lA=function(){this.u=this.j=this.b=null;this.s=this.f=this.m=this.g=this.o=0;this.h=null},sA=function(a){a.b=[];wA(a,performance.now())},tA=function(a,b,c){a.j=b;a.u=c;a.b?(b=a.b,a.b=null,b.forEach(function(b){return qA(a,b.data).then(b.kr,b.fm)})):wA(a,performance.now())},uA=function(a){if(a.b){var b=Error("Stop before delivering pending message");a.b.forEach(function(a){return a.fm(b)});a.b=null}a.j=null;a.u=null},qA=function(a,b){if(a.j){var c=btoa(String.fromCharCode.apply(null,b));++a.o;
a.g+=b.length;return a.j({type:"RPC",rpc:c})}return a.b?new Promise(function(c,e){a.b.push({data:b,kr:c,fm:e})}):Promise.reject(Error("RPC pipe not started"))},rA=function(a,b){vA(a);a.h=setInterval(function(){if(a.b)var c=a.b.length+" messages are waiting to send.";else{c=performance.now();var d=(c-a.s)/1E3;d="Over the past "+d.toFixed(1)+" seconds, sent "+(a.o+" messages ("+Math.round(a.g/d)+" bytes/sec) and ")+("received "+a.m+" messages ("+Math.round(a.f/d)+" ")+"bytes/sec).";wA(a,c);c=d}b(c)},
3E4)},vA=function(a){null!=a.h&&(clearInterval(a.h),a.h=null)},wA=function(a,b){a.o=0;a.g=0;a.m=0;a.f=0;a.s=b};var xA=function(a){return a&&a.getAudioTracks()&&0<a.getAudioTracks().length?a.getAudioTracks()[0]:null},yA=function(a){return a&&a.getVideoTracks()&&0<a.getVideoTracks().length?a.getVideoTracks()[0]:null};var zA=function(a,b,c,d,e){this.g=new $z(a,b,c,d,void 0===e?null:e);this.l=fb("mr.mirror.cast.MediaStreamer");this.j=new Rz;this.h=this.f=this.b=this.u=null};zA.prototype.start=function(a,b){var c=this;return Tz(this.j,1,function(d){c.u=a;c.b=xA(a);c.b&&"ended"==c.b.readyState&&(c.b=null);c.f=yA(a);c.f&&"ended"==c.f.readyState&&(c.f=null);if(!c.b&&!c.f)return Xz(d),Promise.reject(Error("No MediaStream tracks to stream."));c.h=b;return c.g.start(c.b,c.f,c.h).then(function(){return Xz(d,2)})})};
zA.prototype.stop=function(){var a=this;return Vz(this.j,function(b){return a.g.stop().then(function(){a.b=null;a.f=null;a.u=null;a.h=null;Xz(b,1)})})};var AA=function(a){return Tz(a.j,2,function(b){a.l.info("Suspending media streaming...");return a.g.stop().then(function(){a.l.info("Suspended media streaming.");Xz(b,3)})})};
zA.prototype.resume=function(){var a=this;return Tz(this.j,3,function(b){a.b&&"ended"==a.b.readyState&&(a.b=null);a.f&&"ended"==a.f.readyState&&(a.f=null);if(!a.b&&!a.f)return Promise.reject(Error("Cannot resume: All tracks have ended."));a.l.info("Resuming media streaming...");return a.g.start(a.b,a.f,a.h).then(function(){a.l.info("Resumed media streaming.");Xz(b,2)})})};var BA=function(a,b,c){this.j=a;this.h=b;this.g=c;this.l=fb("mr.mirror.cast.WifiStatusMonitor");this.b=null;this.f=[]};BA.prototype.start=function(){var a=this;null==this.b&&(mb(this.l,"Starting Wifi Status Monitoring."),this.f=[],Oz(this.g,"STATUS_RESPONSE",function(b){return CA(a,b)}),this.b=setInterval(function(){return DA(a)},12E4),DA(this))};BA.prototype.stop=function(){null!=this.b&&(mb(this.l,"Stopping Wifi Status Monitoring."),clearInterval(this.b),this.b=null,Pz(this.g,"STATUS_RESPONSE"))};
var CA=function(a,b){if(null!=a.b)if(b.status){var c={};null!=b.status.b&&(c.wifiSnr=b.status.b);null!=b.status.f&&(c.wifiSpeed=b.status.f[3]);0==Object.keys(c).length?a.l.H(function(){return"No status fields populated in response: "+JSON.stringify(b)}):(c.timestamp=Date.now(),30==a.f.length&&a.f.shift(),a.f.push(c),a.l.info(function(){return"Current Wifi status: "+JSON.stringify(c)}))}else a.l.H(function(){return"Ignoring response without status: "+JSON.stringify(b)})},DA=function(a){a.g.sendMessage({type:"GET_STATUS",
sessionId:a.j,seqNum:Vm(a.h),get_status:["wifiSnr","wifiSpeed"]})};var EA=function(a,b,c,d){this.G=b.Qf;this.m={extVersion:chrome.runtime.getManifest().version,extChannel:"public",mirrorSettings:lj(a),sender:navigator.userAgent||"UNKNOWN",receiverProductName:b.Zd};this.F=c;this.C=d;this.h=this.f=this.o=this.u=this.j=this.s=this.g=null;this.b=[]};EA.prototype.ng=function(a){null!=this.f&&clearInterval(this.f);this.g=a;this.s=Date.now();this.f=setInterval(this.D.bind(this,a),9E5)};
EA.prototype.Zg=function(){null!=this.f&&(clearInterval(this.f),this.f=null);if(null!=this.g){var a=this.D(this.g);this.g=null;return a}return Promise.resolve()};EA.prototype.Re=function(a,b){null==this.j&&(this.j=Date.now(),"function"===typeof a?this.u=a():"string"===typeof a&&(this.u=a),b&&"string"===typeof b.stack&&(this.o=b.stack))};
var GA=function(a,b){return(null==a.g?Promise.resolve():a.D(a.g)).then(function(){var c=b.map(function(b){b=FA(a,b);var c=b.map(function(a){return a.events}).filter(function(a){return null!=a}),d=["["];b.map(function(a){return a.Sf}).forEach(function(a,b){0<b&&d.push(",");d.push(a)});d.push("]");return{events:new Blob(c,{type:"application/gzip"}),Sf:new Blob(d,{type:"application/json"})}});a.b=[];return c})};
EA.prototype.D=function(a){var b=this;if(null!=this.h)return this.h;var c=hf(this.G).then(function(c){c={receiverVersion:c.b,receiverConnected:c.h,receiverOnEthernet:c.f,receiverHasUpdatePending:c.g,receiverUptimeSeconds:c.j};Object.assign(c,b.m);var d=Date.now();Object.assign(c,{startTime:b.s,endTime:d,activity:bA(a),receiverWifiStatus:Array.from(b.C.f)});b.s=d;null!=b.j&&(Object.assign(c,{streamingErrorTime:b.j,streamingErrorMessage:b.u,streamingErrorCause:b.o}),b.j=null,b.u=null,b.o=null);return c});
return(this.h=Promise.all([c.then(function(b){return hA(a,b)}),c,iA(a)]).then(function(a){var c=k(a);a=c.next().value;var d=c.next().value;c=c.next().value;b.b.push({events:a,Sf:new Blob([JSON.stringify(Object.assign({tags:d},c))],{type:"application/json"})});b.b=FA(b,b.F);b.h=null}))||Promise.resolve()};
var FA=function(a,b){b-=2;for(var c=[],d=a.b.length-1;0<=d;--d){b-=a.b[d].Sf.size+1;if(0>b)break;c.push({events:null,Sf:a.b[d].Sf});if(null!=a.b[d].events){var e=a.b[d].events.size;b>=e&&(c[c.length-1].events=a.b[d].events,b-=e)}}return c.reverse()};var HA=fb("mr.NetworkUtils"),IA=function(a,b){return qi?new Promise(function(c,d){chrome.networkingPrivate.setWifiTDLSEnabledState(a,b,function(a){chrome.runtime.lastError?(HA.H("Unable to set TDLS state: state = "+b+", error = "+chrome.runtime.lastError.message),d("Unable to set TDLS state to "+b+".")):(HA.info("TDLS state changed: state = "+b+", status = "+a),c(a))})}):Promise.reject("TDLS feature not enabled.")};var JA=function(a,b,c,d){d=void 0===d?null:d;ij.call(this,b);var e=b.lb;this.D=e.sessionId;this.J=e.Qf;this.R=a;this.O=d;this.l=fb("mr.mirror.cast.Session");this.s=new Rz;this.o=new Um("mirror.cast.SeqNumGenerator");this.m=new Nz(b.id);this.u=new zA(e,this.R,this.o,this.m,this.O);this.h=null;this.b=new EA(a,e,c,new BA(this.D,this.o,this.m));this.g=!1;this.C=null};n(JA,ij);g=JA.prototype;
g.start=function(a){var b=this;return Tz(this.s,1,function(c){var d=new qb("MediaRouter.CastStreaming.Session.Launch");return KA(b).then(function(c){b.g=c;return b.u.start(a,b)}).then(function(){if(b.u.g.C){var a=b.b;a.m.tdlsIsOn=b.g;a.C.start();LA(b)}else b.b.m.tdlsIsOn=b.g;d.b();b.C=new wb("MediaRouter.CastStreaming.Session.Length");Xz(c,2);return b})})};
g.stop=function(){var a=this;return Vz(this.s,function(b){a.C&&(a.C.b(),a.C=null);a.b.C.stop();return a.u.stop().then(function(){return a.h?nA(a.h):Promise.resolve()}).then(function(){a.h=null;return a.g?MA(a):Promise.resolve()}).then(function(){a.g=!1;Xz(b,4)})})};g.dm=function(){var a={sessionId:this.D,seqNum:Vm(this.o),type:"PRESENTATION",icons:[],title:gj(this.jc)};this.l.info("Sending session metadata update to receiver: "+this.D);this.m.sendMessage(a)};g.ng=function(a){this.b.ng(a)};g.Zg=function(){return this.b.Zg()};
g.Re=function(a,b){this.b.Re(a,b);this.l.error(a,b);this.stop()};
var NA=function(a,b){return GA(a.b,b)},KA=function(a){return a.R.useTdls?IA(a.J,!0).then(function(b){if("Connected"==b)return a.l.info("Successfully enabled TDLS."),!0;a.l.H("Did not enable TDLS: result="+b);return!1}).catch(function(b){a.l.H("Error while calling enableTDLS()",b);return!1}):Promise.resolve(!1)},MA=function(a){return IA(a.J,!1).catch(function(b){return a.l.error("Error while turning TDLS back off",b)})},LA=function(a){OA(a).then(function(b){(b.b||[]).includes("video")?PA(a,b):a.l.H(function(){return"Receiver incapable of Media Remoting: "+
JSON.stringify(b)})}).catch(function(b){a.l.H("None/Invalid capabilites response. Media Remoting disabled.",b)})},OA=function(a){return new Promise(function(b,c){var d={type:"GET_CAPABILITIES",sessionId:a.D,seqNum:Vm(a.o)};a.l.info(function(){return"Sending GET_CAPABILITIES message: "+JSON.stringify(d)});Qz(a.m,d,"CAPABILITIES_RESPONSE",3E4,function(e,f){if(null==e)return c(f),!0;if("ok"!=e.result||!e.capabilities)return c(Error("Bad response: "+JSON.stringify(e))),!0;if(e.f!=d.seqNum)return a.l.info(function(){return"Ignoring CAPABILITIES_RESPONSE with different seqNum: "+
JSON.stringify(e)}),!1;mb(a.l,function(){return"Received CAPABILITIES_RESPONSE: "+JSON.stringify(e)});b(e.capabilities);return!0})})},PA=function(a,b){Tz(a.s,2,function(c){var d=a.f.lb.Zd||"<UNKNOWN>";if(!d.startsWith("Chromecast")&&!d.startsWith("Eureka Dongle"))return a.l.H("HACK: Media Remoting disabled because the receiver model--"+('"'+d+'" according to discovery--is not a Chromecast.')),Xz(c),Promise.resolve();a.h=new mA(a.f,b,a.R,a.o,a.m,a.O);return a.h.initialize(a.T.bind(a),a).catch(function(b){a.l.error("Media Remoting start failed: "+
b.message,b)}).then(function(){return Xz(c)})})};JA.prototype.T=function(){var a=this;return Tz(this.s,2,function(b){return new Promise(function(c,d){AA(a.u).then(function(){Xz(b,3);a.G=!0;cj(a);c(a.Ea.bind(a))}).catch(function(b){a.Re("Failed to suspend MediaStreamer before starting remoting",b);d(b)})})})};
JA.prototype.Ea=function(){var a=this;return Tz(this.s,3,function(b){return new Promise(function(c,d){a.u.resume().then(function(){Xz(b,2);a.G=!1;cj(a);c()}).catch(function(b){a.Re("Failed resume MediaStreamer after ending remoting mode",b);d(b)})})})};var QA=function(){Yi.call(this,"cast_streaming");this.j=this.o=this.G=this.F=this.h=null;this.J=this.R="";this.O=this.m=!1;this.Ea=this.ha.bind(this);this.D=null};n(QA,Yi);g=QA.prototype;g.pg=function(a){this.m=a||!1;this.O=!0};g.getName=function(){return"cast_streaming"};
g.gj=function(a,b,c,d,e){var f=this;if(!this.m)return Yi.prototype.gj.call(this,a,b,c,d,e);this.N.info("Start mirroring on route "+a.id);if(!this.O)return ji(Error("Not initialized"));var h=new Promise(function(h,p){f.u().then(function(){if(Ti(b)&&c.shouldCaptureVideo)return(new Promise(function(b){chrome.tabs.get(a.lb.tabId||-1,b)})).then(function(a){return Ci(a).then(function(a){f.J=a})})}).then(function(){return e?e(a).b:a}).then(function(a){f.F=new mojo.Binding(mojo.MirroringSessionObserver,f,
null);f.G=new mojo.Binding(mojo.MirroringCastMessageChannel,f,null);f.j=ky(a.id);f.j.onMessage=f.Tp.bind(f);var e=f.F.createInterfacePtrAndBind(),l=f.G.createInterfacePtrAndBind(),p=RA(a,c);f.h=new mojo.MirroringServiceHostPtr;var y=a.lb.tabId||-1;Si(b)?f.g.getMirroringServiceHostForTab(y,mojo.makeRequest(f.h)):Ti(b)?f.g.getMirroringServiceHostForDesktop(y,f.J,mojo.makeRequest(f.h)):Vi(b)?(y=new mojo.Url,y.url=b,f.g.getMirroringServiceHostForOffscreenTab(y,d||"",mojo.makeRequest(f.h))):f.h=null;if(!f.h)throw new ni("Error to get mirroring service host");
f.o=new mojo.MirroringCastMessageChannelPtr;f.h.start(p,e,l,mojo.makeRequest(f.o));f.D=new ij(a);e=f.g.Gi.bind(f.g);f.D.F=e;Si(b)&&!chrome.tabs.onUpdated.hasListener(f.Ea)&&chrome.tabs.onUpdated.addListener(f.Ea);(Si(b)||Vi(b))&&bj(f.D,a.lb.tabId);h(a)}).catch(function(a){f.N.info("Mirroring launch error: "+a);p(a)})});return ki(h)};g.oh=function(a,b){return new JA(a,b,20969472,null)};g.Sg=function(){nz(0)};g.Pg=function(){nz(1)};g.Rh=function(){nz(2)};g.Qg=function(){zb("MediaRouter.CastStreaming.Session.End")};
g.Qh=function(a){Ab("MediaRouter.CastStreaming.Start.Failure",a,mi)};g.Rg=function(){zb("MediaRouter.CastStreaming.Stream.End")};
g.li=function(a){var b=this;return this.m?Promise.resolve():(new Promise(function(a){return chrome.metricsPrivate.getIsCrashReportingEnabled(a)})).then(function(c){var d=c&&uz(),e=[9351424];d&&e.push(20969472);return NA(a,e).then(function(a){var e=a[a.length-1];a=Ql(a[0].events).catch(function(a){b.N.error("Failed to persist events Blob.",a)});d&&0<e.events.size?qz(e.events,void 0,b.Sp.bind(b)):c&&pz("stats.json",e.Sf,void 0,void 0);return a})})};g.Sp=function(a){a&&(tz().b=Date.now())};
g.fj=function(a){if(this.m)return cb();this.N.info("Received message to upload logs for "+a);return this.b?NA(this.b,[20969472]).then(function(b){b=k(b).next().value;return 0==b.events.size?"":qz(b.events,a)}):Promise.resolve(SA(this,a))};
var SA=function(a,b){var c=window.localStorage.getItem("mr.temp.mirror.cast.Service.eventsBlob");if(null==c||1>c.length)c=null;else{for(var d=new Uint16Array(c.length),e=0;e<c.length;++e)d[e]=c.charCodeAt(e);c=d.buffer;d=(new Uint8Array(c,c.byteLength-1,1))[0];c=new Uint8Array(c,0,c.byteLength-(0==d?2:1));c=new Blob([c],{type:"application/gzip"})}if(null!=c&&0!=c.size)return Ql(new Blob),a.N.info("Uploading saved logs for feedback."),qz(c,b)};g=QA.prototype;
g.onError=function(a){this.N.info("Mirroring service error: "+a);this.u()};g.didStart=function(){Si(this.R)?this.Sg():Ti(this.R)?this.Pg():Vi(this.R)&&this.Rh()};g.didStop=function(){this.u()};g.send=function(a){if(this.j){var b=JSON.parse(a.jsonFormatData);mb(this.N,function(){return"Sending message: "+JSON.stringify(b)});this.j.sendMessage(a.jsonFormatData,{namespace:a.messageNamespace})}};
g.Tp=function(a){if(a&&(a.namespace_===mojo.MirroringWebRtcNamespace||a.namespace_===mojo.MirroringRemotingNamespace)&&this.o){var b=new mojo.MirroringCastMessage;b.messageNamespace=a.namespace_;"string"!==typeof a.data?this.N.info("Received non-string as JSON"):(b.jsonFormatData=a.data,this.o.send(b))}};
var RA=function(a,b){var c=new mojo.MirroringSessionParameters;c.receiverAddress=new mojo.IPAddress;c.receiverAddress.addressBytes=a.lb.Qf.split(".").map(function(a){return parseInt(a,10)});c.receiverModelName=a.lb.Zd;c.type=b.shouldCaptureVideo&&b.shouldCaptureAudio?mojo.MirroringSessionType.AUDIO_AND_VIDEO:b.shouldCaptureVideo?mojo.MirroringSessionType.VIDEO_ONLY:mojo.MirroringSessionType.AUDIO_ONLY;return c};QA.prototype.ha=function(a,b,c){Ri(14);this.D&&dj(this.D,a,b,c)};
QA.prototype.u=function(){chrome.tabs.onUpdated.removeListener(this.Ea);return this.m?this.O?this.h?(this.h.ptr.reset(),this.o=this.h=null,this.j&&this.j.Za(),this.j=null,this.F&&(this.F.close(),this.F=null),this.G&&(this.G.close(),this.G=null),this.J=this.R="",this.Qg(),Promise.resolve(!0)):Promise.resolve(!1):Promise.reject("Not initialized"):Yi.prototype.u.call(this)};
QA.prototype.hj=function(a,b,c,d,e,f){return this.m?ji(Error("Mirroring service does not support updating stream")):Yi.prototype.hj.call(this,a,b,c,d,e,f)};QA.prototype.send=QA.prototype.send;QA.prototype.didStop=QA.prototype.didStop;QA.prototype.didStart=QA.prototype.didStart;QA.prototype.onError=QA.prototype.onError;var TA=new QA;Oi("mr.mirror.cast.Service",TA);
