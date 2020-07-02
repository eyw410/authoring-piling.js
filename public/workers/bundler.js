(function () {
	'use strict';

	/*
	  @license
		Rollup.js v2.18.1
		Fri, 26 Jun 2020 19:42:28 GMT - commit 1aeb23b23ef1aafe2edcbfd5c4062dd97186f700


		https://github.com/rollup/rollup

		Released under the MIT License.
	*/
	for(var t={},s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i=0;i<s.length;i++)t[s.charCodeAt(i)]=i;const R=Object.assign(Object.create(null),{await:!0,break:!0,case:!0,catch:!0,class:!0,const:!0,continue:!0,debugger:!0,default:!0,delete:!0,do:!0,else:!0,enum:!0,eval:!0,export:!0,extends:!0,false:!0,finally:!0,for:!0,function:!0,if:!0,implements:!0,import:!0,in:!0,instanceof:!0,interface:!0,let:!0,new:!0,null:!0,package:!0,private:!0,protected:!0,public:!0,return:!0,static:!0,super:!0,switch:!0,this:!0,throw:!0,true:!0,try:!0,typeof:!0,undefined:!0,var:!0,void:!0,while:!0,with:!0,yield:!0});const st=Symbol("Value Properties"),it={pure:!0},nt={pure:!1},rt={__proto__:null,[st]:nt},at={__proto__:null,[st]:it},ot={__proto__:null,[st]:nt,prototype:rt},ht={__proto__:null,[st]:it,prototype:rt},lt={__proto__:null,[st]:it,from:at,of:at,prototype:rt},ct={__proto__:null,[st]:it,supportedLocalesOf:ht},ut={global:rt,globalThis:rt,self:rt,window:rt,__proto__:null,[st]:nt,Array:{__proto__:null,[st]:nt,from:rt,isArray:at,of:at,prototype:rt},ArrayBuffer:{__proto__:null,[st]:it,isView:at,prototype:rt},Atomics:rt,BigInt:ot,BigInt64Array:ot,BigUint64Array:ot,Boolean:ht,constructor:ot,DataView:ht,Date:{__proto__:null,[st]:it,now:at,parse:at,prototype:rt,UTC:at},decodeURI:at,decodeURIComponent:at,encodeURI:at,encodeURIComponent:at,Error:ht,escape:at,eval:rt,EvalError:ht,Float32Array:lt,Float64Array:lt,Function:ot,hasOwnProperty:rt,Infinity:rt,Int16Array:lt,Int32Array:lt,Int8Array:lt,isFinite:at,isNaN:at,isPrototypeOf:rt,JSON:rt,Map:ht,Math:{__proto__:null,[st]:nt,abs:at,acos:at,acosh:at,asin:at,asinh:at,atan:at,atan2:at,atanh:at,cbrt:at,ceil:at,clz32:at,cos:at,cosh:at,exp:at,expm1:at,floor:at,fround:at,hypot:at,imul:at,log:at,log10:at,log1p:at,log2:at,max:at,min:at,pow:at,random:at,round:at,sign:at,sin:at,sinh:at,sqrt:at,tan:at,tanh:at,trunc:at},NaN:rt,Number:{__proto__:null,[st]:it,isFinite:at,isInteger:at,isNaN:at,isSafeInteger:at,parseFloat:at,parseInt:at,prototype:rt},Object:{__proto__:null,[st]:it,create:at,getNotifier:at,getOwn:at,getOwnPropertyDescriptor:at,getOwnPropertyNames:at,getOwnPropertySymbols:at,getPrototypeOf:at,is:at,isExtensible:at,isFrozen:at,isSealed:at,keys:at,prototype:rt},parseFloat:at,parseInt:at,Promise:{__proto__:null,[st]:nt,all:at,prototype:rt,race:at,resolve:at},propertyIsEnumerable:rt,Proxy:rt,RangeError:ht,ReferenceError:ht,Reflect:rt,RegExp:ht,Set:ht,SharedArrayBuffer:ot,String:{__proto__:null,[st]:it,fromCharCode:at,fromCodePoint:at,prototype:rt,raw:at},Symbol:{__proto__:null,[st]:it,for:at,keyFor:at,prototype:rt},SyntaxError:ht,toLocaleString:rt,toString:rt,TypeError:ht,Uint16Array:lt,Uint32Array:lt,Uint8Array:lt,Uint8ClampedArray:lt,unescape:at,URIError:ht,valueOf:rt,WeakMap:ht,WeakSet:ht,clearInterval:ot,clearTimeout:ot,console:rt,Intl:{__proto__:null,[st]:nt,Collator:ct,DateTimeFormat:ct,ListFormat:ct,NumberFormat:ct,PluralRules:ct,RelativeTimeFormat:ct},setInterval:ot,setTimeout:ot,TextDecoder:ot,TextEncoder:ot,URL:ot,URLSearchParams:ot,AbortController:ot,AbortSignal:ot,addEventListener:rt,alert:rt,AnalyserNode:ot,Animation:ot,AnimationEvent:ot,applicationCache:rt,ApplicationCache:ot,ApplicationCacheErrorEvent:ot,atob:rt,Attr:ot,Audio:ot,AudioBuffer:ot,AudioBufferSourceNode:ot,AudioContext:ot,AudioDestinationNode:ot,AudioListener:ot,AudioNode:ot,AudioParam:ot,AudioProcessingEvent:ot,AudioScheduledSourceNode:ot,AudioWorkletNode:ot,BarProp:ot,BaseAudioContext:ot,BatteryManager:ot,BeforeUnloadEvent:ot,BiquadFilterNode:ot,Blob:ot,BlobEvent:ot,blur:rt,BroadcastChannel:ot,btoa:rt,ByteLengthQueuingStrategy:ot,Cache:ot,caches:rt,CacheStorage:ot,cancelAnimationFrame:rt,cancelIdleCallback:rt,CanvasCaptureMediaStreamTrack:ot,CanvasGradient:ot,CanvasPattern:ot,CanvasRenderingContext2D:ot,ChannelMergerNode:ot,ChannelSplitterNode:ot,CharacterData:ot,clientInformation:rt,ClipboardEvent:ot,close:rt,closed:rt,CloseEvent:ot,Comment:ot,CompositionEvent:ot,confirm:rt,ConstantSourceNode:ot,ConvolverNode:ot,CountQueuingStrategy:ot,createImageBitmap:rt,Credential:ot,CredentialsContainer:ot,crypto:rt,Crypto:ot,CryptoKey:ot,CSS:ot,CSSConditionRule:ot,CSSFontFaceRule:ot,CSSGroupingRule:ot,CSSImportRule:ot,CSSKeyframeRule:ot,CSSKeyframesRule:ot,CSSMediaRule:ot,CSSNamespaceRule:ot,CSSPageRule:ot,CSSRule:ot,CSSRuleList:ot,CSSStyleDeclaration:ot,CSSStyleRule:ot,CSSStyleSheet:ot,CSSSupportsRule:ot,CustomElementRegistry:ot,customElements:rt,CustomEvent:ot,DataTransfer:ot,DataTransferItem:ot,DataTransferItemList:ot,defaultstatus:rt,defaultStatus:rt,DelayNode:ot,DeviceMotionEvent:ot,DeviceOrientationEvent:ot,devicePixelRatio:rt,dispatchEvent:rt,document:rt,Document:ot,DocumentFragment:ot,DocumentType:ot,DOMError:ot,DOMException:ot,DOMImplementation:ot,DOMMatrix:ot,DOMMatrixReadOnly:ot,DOMParser:ot,DOMPoint:ot,DOMPointReadOnly:ot,DOMQuad:ot,DOMRect:ot,DOMRectReadOnly:ot,DOMStringList:ot,DOMStringMap:ot,DOMTokenList:ot,DragEvent:ot,DynamicsCompressorNode:ot,Element:ot,ErrorEvent:ot,Event:ot,EventSource:ot,EventTarget:ot,external:rt,fetch:rt,File:ot,FileList:ot,FileReader:ot,find:rt,focus:rt,FocusEvent:ot,FontFace:ot,FontFaceSetLoadEvent:ot,FormData:ot,frames:rt,GainNode:ot,Gamepad:ot,GamepadButton:ot,GamepadEvent:ot,getComputedStyle:rt,getSelection:rt,HashChangeEvent:ot,Headers:ot,history:rt,History:ot,HTMLAllCollection:ot,HTMLAnchorElement:ot,HTMLAreaElement:ot,HTMLAudioElement:ot,HTMLBaseElement:ot,HTMLBodyElement:ot,HTMLBRElement:ot,HTMLButtonElement:ot,HTMLCanvasElement:ot,HTMLCollection:ot,HTMLContentElement:ot,HTMLDataElement:ot,HTMLDataListElement:ot,HTMLDetailsElement:ot,HTMLDialogElement:ot,HTMLDirectoryElement:ot,HTMLDivElement:ot,HTMLDListElement:ot,HTMLDocument:ot,HTMLElement:ot,HTMLEmbedElement:ot,HTMLFieldSetElement:ot,HTMLFontElement:ot,HTMLFormControlsCollection:ot,HTMLFormElement:ot,HTMLFrameElement:ot,HTMLFrameSetElement:ot,HTMLHeadElement:ot,HTMLHeadingElement:ot,HTMLHRElement:ot,HTMLHtmlElement:ot,HTMLIFrameElement:ot,HTMLImageElement:ot,HTMLInputElement:ot,HTMLLabelElement:ot,HTMLLegendElement:ot,HTMLLIElement:ot,HTMLLinkElement:ot,HTMLMapElement:ot,HTMLMarqueeElement:ot,HTMLMediaElement:ot,HTMLMenuElement:ot,HTMLMetaElement:ot,HTMLMeterElement:ot,HTMLModElement:ot,HTMLObjectElement:ot,HTMLOListElement:ot,HTMLOptGroupElement:ot,HTMLOptionElement:ot,HTMLOptionsCollection:ot,HTMLOutputElement:ot,HTMLParagraphElement:ot,HTMLParamElement:ot,HTMLPictureElement:ot,HTMLPreElement:ot,HTMLProgressElement:ot,HTMLQuoteElement:ot,HTMLScriptElement:ot,HTMLSelectElement:ot,HTMLShadowElement:ot,HTMLSlotElement:ot,HTMLSourceElement:ot,HTMLSpanElement:ot,HTMLStyleElement:ot,HTMLTableCaptionElement:ot,HTMLTableCellElement:ot,HTMLTableColElement:ot,HTMLTableElement:ot,HTMLTableRowElement:ot,HTMLTableSectionElement:ot,HTMLTemplateElement:ot,HTMLTextAreaElement:ot,HTMLTimeElement:ot,HTMLTitleElement:ot,HTMLTrackElement:ot,HTMLUListElement:ot,HTMLUnknownElement:ot,HTMLVideoElement:ot,IDBCursor:ot,IDBCursorWithValue:ot,IDBDatabase:ot,IDBFactory:ot,IDBIndex:ot,IDBKeyRange:ot,IDBObjectStore:ot,IDBOpenDBRequest:ot,IDBRequest:ot,IDBTransaction:ot,IDBVersionChangeEvent:ot,IdleDeadline:ot,IIRFilterNode:ot,Image:ot,ImageBitmap:ot,ImageBitmapRenderingContext:ot,ImageCapture:ot,ImageData:ot,indexedDB:rt,innerHeight:rt,innerWidth:rt,InputEvent:ot,IntersectionObserver:ot,IntersectionObserverEntry:ot,isSecureContext:rt,KeyboardEvent:ot,KeyframeEffect:ot,length:rt,localStorage:rt,location:rt,Location:ot,locationbar:rt,matchMedia:rt,MediaDeviceInfo:ot,MediaDevices:ot,MediaElementAudioSourceNode:ot,MediaEncryptedEvent:ot,MediaError:ot,MediaKeyMessageEvent:ot,MediaKeySession:ot,MediaKeyStatusMap:ot,MediaKeySystemAccess:ot,MediaList:ot,MediaQueryList:ot,MediaQueryListEvent:ot,MediaRecorder:ot,MediaSettingsRange:ot,MediaSource:ot,MediaStream:ot,MediaStreamAudioDestinationNode:ot,MediaStreamAudioSourceNode:ot,MediaStreamEvent:ot,MediaStreamTrack:ot,MediaStreamTrackEvent:ot,menubar:rt,MessageChannel:ot,MessageEvent:ot,MessagePort:ot,MIDIAccess:ot,MIDIConnectionEvent:ot,MIDIInput:ot,MIDIInputMap:ot,MIDIMessageEvent:ot,MIDIOutput:ot,MIDIOutputMap:ot,MIDIPort:ot,MimeType:ot,MimeTypeArray:ot,MouseEvent:ot,moveBy:rt,moveTo:rt,MutationEvent:ot,MutationObserver:ot,MutationRecord:ot,name:rt,NamedNodeMap:ot,NavigationPreloadManager:ot,navigator:rt,Navigator:ot,NetworkInformation:ot,Node:ot,NodeFilter:rt,NodeIterator:ot,NodeList:ot,Notification:ot,OfflineAudioCompletionEvent:ot,OfflineAudioContext:ot,offscreenBuffering:rt,OffscreenCanvas:ot,open:rt,openDatabase:rt,Option:ot,origin:rt,OscillatorNode:ot,outerHeight:rt,outerWidth:rt,PageTransitionEvent:ot,pageXOffset:rt,pageYOffset:rt,PannerNode:ot,parent:rt,Path2D:ot,PaymentAddress:ot,PaymentRequest:ot,PaymentRequestUpdateEvent:ot,PaymentResponse:ot,performance:rt,Performance:ot,PerformanceEntry:ot,PerformanceLongTaskTiming:ot,PerformanceMark:ot,PerformanceMeasure:ot,PerformanceNavigation:ot,PerformanceNavigationTiming:ot,PerformanceObserver:ot,PerformanceObserverEntryList:ot,PerformancePaintTiming:ot,PerformanceResourceTiming:ot,PerformanceTiming:ot,PeriodicWave:ot,Permissions:ot,PermissionStatus:ot,personalbar:rt,PhotoCapabilities:ot,Plugin:ot,PluginArray:ot,PointerEvent:ot,PopStateEvent:ot,postMessage:rt,Presentation:ot,PresentationAvailability:ot,PresentationConnection:ot,PresentationConnectionAvailableEvent:ot,PresentationConnectionCloseEvent:ot,PresentationConnectionList:ot,PresentationReceiver:ot,PresentationRequest:ot,print:rt,ProcessingInstruction:ot,ProgressEvent:ot,PromiseRejectionEvent:ot,prompt:rt,PushManager:ot,PushSubscription:ot,PushSubscriptionOptions:ot,queueMicrotask:rt,RadioNodeList:ot,Range:ot,ReadableStream:ot,RemotePlayback:ot,removeEventListener:rt,Request:ot,requestAnimationFrame:rt,requestIdleCallback:rt,resizeBy:rt,ResizeObserver:ot,ResizeObserverEntry:ot,resizeTo:rt,Response:ot,RTCCertificate:ot,RTCDataChannel:ot,RTCDataChannelEvent:ot,RTCDtlsTransport:ot,RTCIceCandidate:ot,RTCIceTransport:ot,RTCPeerConnection:ot,RTCPeerConnectionIceEvent:ot,RTCRtpReceiver:ot,RTCRtpSender:ot,RTCSctpTransport:ot,RTCSessionDescription:ot,RTCStatsReport:ot,RTCTrackEvent:ot,screen:rt,Screen:ot,screenLeft:rt,ScreenOrientation:ot,screenTop:rt,screenX:rt,screenY:rt,ScriptProcessorNode:ot,scroll:rt,scrollbars:rt,scrollBy:rt,scrollTo:rt,scrollX:rt,scrollY:rt,SecurityPolicyViolationEvent:ot,Selection:ot,ServiceWorker:ot,ServiceWorkerContainer:ot,ServiceWorkerRegistration:ot,sessionStorage:rt,ShadowRoot:ot,SharedWorker:ot,SourceBuffer:ot,SourceBufferList:ot,speechSynthesis:rt,SpeechSynthesisEvent:ot,SpeechSynthesisUtterance:ot,StaticRange:ot,status:rt,statusbar:rt,StereoPannerNode:ot,stop:rt,Storage:ot,StorageEvent:ot,StorageManager:ot,styleMedia:rt,StyleSheet:ot,StyleSheetList:ot,SubtleCrypto:ot,SVGAElement:ot,SVGAngle:ot,SVGAnimatedAngle:ot,SVGAnimatedBoolean:ot,SVGAnimatedEnumeration:ot,SVGAnimatedInteger:ot,SVGAnimatedLength:ot,SVGAnimatedLengthList:ot,SVGAnimatedNumber:ot,SVGAnimatedNumberList:ot,SVGAnimatedPreserveAspectRatio:ot,SVGAnimatedRect:ot,SVGAnimatedString:ot,SVGAnimatedTransformList:ot,SVGAnimateElement:ot,SVGAnimateMotionElement:ot,SVGAnimateTransformElement:ot,SVGAnimationElement:ot,SVGCircleElement:ot,SVGClipPathElement:ot,SVGComponentTransferFunctionElement:ot,SVGDefsElement:ot,SVGDescElement:ot,SVGDiscardElement:ot,SVGElement:ot,SVGEllipseElement:ot,SVGFEBlendElement:ot,SVGFEColorMatrixElement:ot,SVGFEComponentTransferElement:ot,SVGFECompositeElement:ot,SVGFEConvolveMatrixElement:ot,SVGFEDiffuseLightingElement:ot,SVGFEDisplacementMapElement:ot,SVGFEDistantLightElement:ot,SVGFEDropShadowElement:ot,SVGFEFloodElement:ot,SVGFEFuncAElement:ot,SVGFEFuncBElement:ot,SVGFEFuncGElement:ot,SVGFEFuncRElement:ot,SVGFEGaussianBlurElement:ot,SVGFEImageElement:ot,SVGFEMergeElement:ot,SVGFEMergeNodeElement:ot,SVGFEMorphologyElement:ot,SVGFEOffsetElement:ot,SVGFEPointLightElement:ot,SVGFESpecularLightingElement:ot,SVGFESpotLightElement:ot,SVGFETileElement:ot,SVGFETurbulenceElement:ot,SVGFilterElement:ot,SVGForeignObjectElement:ot,SVGGElement:ot,SVGGeometryElement:ot,SVGGradientElement:ot,SVGGraphicsElement:ot,SVGImageElement:ot,SVGLength:ot,SVGLengthList:ot,SVGLinearGradientElement:ot,SVGLineElement:ot,SVGMarkerElement:ot,SVGMaskElement:ot,SVGMatrix:ot,SVGMetadataElement:ot,SVGMPathElement:ot,SVGNumber:ot,SVGNumberList:ot,SVGPathElement:ot,SVGPatternElement:ot,SVGPoint:ot,SVGPointList:ot,SVGPolygonElement:ot,SVGPolylineElement:ot,SVGPreserveAspectRatio:ot,SVGRadialGradientElement:ot,SVGRect:ot,SVGRectElement:ot,SVGScriptElement:ot,SVGSetElement:ot,SVGStopElement:ot,SVGStringList:ot,SVGStyleElement:ot,SVGSVGElement:ot,SVGSwitchElement:ot,SVGSymbolElement:ot,SVGTextContentElement:ot,SVGTextElement:ot,SVGTextPathElement:ot,SVGTextPositioningElement:ot,SVGTitleElement:ot,SVGTransform:ot,SVGTransformList:ot,SVGTSpanElement:ot,SVGUnitTypes:ot,SVGUseElement:ot,SVGViewElement:ot,TaskAttributionTiming:ot,Text:ot,TextEvent:ot,TextMetrics:ot,TextTrack:ot,TextTrackCue:ot,TextTrackCueList:ot,TextTrackList:ot,TimeRanges:ot,toolbar:rt,top:rt,Touch:ot,TouchEvent:ot,TouchList:ot,TrackEvent:ot,TransitionEvent:ot,TreeWalker:ot,UIEvent:ot,ValidityState:ot,visualViewport:rt,VisualViewport:ot,VTTCue:ot,WaveShaperNode:ot,WebAssembly:rt,WebGL2RenderingContext:ot,WebGLActiveInfo:ot,WebGLBuffer:ot,WebGLContextEvent:ot,WebGLFramebuffer:ot,WebGLProgram:ot,WebGLQuery:ot,WebGLRenderbuffer:ot,WebGLRenderingContext:ot,WebGLSampler:ot,WebGLShader:ot,WebGLShaderPrecisionFormat:ot,WebGLSync:ot,WebGLTexture:ot,WebGLTransformFeedback:ot,WebGLUniformLocation:ot,WebGLVertexArrayObject:ot,WebSocket:ot,WheelEvent:ot,Window:ot,Worker:ot,WritableStream:ot,XMLDocument:ot,XMLHttpRequest:ot,XMLHttpRequestEventTarget:ot,XMLHttpRequestUpload:ot,XMLSerializer:ot,XPathEvaluator:ot,XPathExpression:ot,XPathResult:ot,XSLTProcessor:ot};for(const e of ["window","global","self","globalThis"])ut[e]=ut;var Wt;!function(e){e.ASSET_NOT_FINALISED="ASSET_NOT_FINALISED",e.ASSET_NOT_FOUND="ASSET_NOT_FOUND",e.ASSET_SOURCE_ALREADY_SET="ASSET_SOURCE_ALREADY_SET",e.ASSET_SOURCE_MISSING="ASSET_SOURCE_MISSING",e.BAD_LOADER="BAD_LOADER",e.CANNOT_EMIT_FROM_OPTIONS_HOOK="CANNOT_EMIT_FROM_OPTIONS_HOOK",e.CHUNK_NOT_GENERATED="CHUNK_NOT_GENERATED",e.DEPRECATED_FEATURE="DEPRECATED_FEATURE",e.FILE_NOT_FOUND="FILE_NOT_FOUND",e.FILE_NAME_CONFLICT="FILE_NAME_CONFLICT",e.INPUT_HOOK_IN_OUTPUT_PLUGIN="INPUT_HOOK_IN_OUTPUT_PLUGIN",e.INVALID_CHUNK="INVALID_CHUNK",e.INVALID_EXPORT_OPTION="INVALID_EXPORT_OPTION",e.INVALID_EXTERNAL_ID="INVALID_EXTERNAL_ID",e.INVALID_OPTION="INVALID_OPTION",e.INVALID_PLUGIN_HOOK="INVALID_PLUGIN_HOOK",e.INVALID_ROLLUP_PHASE="INVALID_ROLLUP_PHASE",e.MISSING_IMPLICIT_DEPENDANT="MISSING_IMPLICIT_DEPENDANT",e.MIXED_EXPORTS="MIXED_EXPORTS",e.NAMESPACE_CONFLICT="NAMESPACE_CONFLICT",e.PLUGIN_ERROR="PLUGIN_ERROR",e.UNRESOLVED_ENTRY="UNRESOLVED_ENTRY",e.UNRESOLVED_IMPORT="UNRESOLVED_IMPORT",e.VALIDATION_ERROR="VALIDATION_ERROR",e.EXTERNAL_SYNTHETIC_EXPORTS="EXTERNAL_SYNTHETIC_EXPORTS",e.SYNTHETIC_NAMED_EXPORTS_NEED_DEFAULT="SYNTHETIC_NAMED_EXPORTS_NEED_DEFAULT";}(Wt||(Wt={}));var vi=bi;function bi(e,t){if(!e)throw new Error(t||"Assertion failed")}function Si(e,t){return 55296==(64512&e.charCodeAt(t))&&(!(t<0||t+1>=e.length)&&56320==(64512&e.charCodeAt(t+1)))}function Ai(e){return (e>>>24|e>>>8&65280|e<<8&16711680|(255&e)<<24)>>>0}function Pi(e){return 1===e.length?"0"+e:e}function Ci(e){return 7===e.length?"0"+e:6===e.length?"00"+e:5===e.length?"000"+e:4===e.length?"0000"+e:3===e.length?"00000"+e:2===e.length?"000000"+e:1===e.length?"0000000"+e:e}bi.equal=function(e,t,s){if(e!=t)throw new Error(s||"Assertion failed: "+e+" != "+t)};var ki={inherits:function(e,t,s){return e(s={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},s.exports),s.exports}((function(e){"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}));}:e.exports=function(e,t){if(t){e.super_=t;var s=function(){};s.prototype=t.prototype,e.prototype=new s,e.prototype.constructor=e;}};})),toArray:function(e,t){if(Array.isArray(e))return e.slice();if(!e)return [];var s=[];if("string"==typeof e)if(t){if("hex"===t)for((e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e),n=0;n<e.length;n+=2)s.push(parseInt(e[n]+e[n+1],16));}else for(var i=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?s[i++]=r:r<2048?(s[i++]=r>>6|192,s[i++]=63&r|128):Si(e,n)?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),s[i++]=r>>18|240,s[i++]=r>>12&63|128,s[i++]=r>>6&63|128,s[i++]=63&r|128):(s[i++]=r>>12|224,s[i++]=r>>6&63|128,s[i++]=63&r|128);}else for(n=0;n<e.length;n++)s[n]=0|e[n];return s},toHex:function(e){for(var t="",s=0;s<e.length;s++)t+=Pi(e[s].toString(16));return t},htonl:Ai,toHex32:function(e,t){for(var s="",i=0;i<e.length;i++){var n=e[i];"little"===t&&(n=Ai(n)),s+=Ci(n.toString(16));}return s},zero2:Pi,zero8:Ci,join32:function(e,t,s,i){var n=s-t;vi(n%4==0);for(var r=new Array(n/4),a=0,o=t;a<r.length;a++,o+=4){var h;h="big"===i?e[o]<<24|e[o+1]<<16|e[o+2]<<8|e[o+3]:e[o+3]<<24|e[o+2]<<16|e[o+1]<<8|e[o],r[a]=h>>>0;}return r},split32:function(e,t){for(var s=new Array(4*e.length),i=0,n=0;i<e.length;i++,n+=4){var r=e[i];"big"===t?(s[n]=r>>>24,s[n+1]=r>>>16&255,s[n+2]=r>>>8&255,s[n+3]=255&r):(s[n+3]=r>>>24,s[n+2]=r>>>16&255,s[n+1]=r>>>8&255,s[n]=255&r);}return s},rotr32:function(e,t){return e>>>t|e<<32-t},rotl32:function(e,t){return e<<t|e>>>32-t},sum32:function(e,t){return e+t>>>0},sum32_3:function(e,t,s){return e+t+s>>>0},sum32_4:function(e,t,s,i){return e+t+s+i>>>0},sum32_5:function(e,t,s,i,n){return e+t+s+i+n>>>0},sum64:function(e,t,s,i){var n=e[t],r=i+e[t+1]>>>0,a=(r<i?1:0)+s+n;e[t]=a>>>0,e[t+1]=r;},sum64_hi:function(e,t,s,i){return (t+i>>>0<t?1:0)+e+s>>>0},sum64_lo:function(e,t,s,i){return t+i>>>0},sum64_4_hi:function(e,t,s,i,n,r,a,o){var h=0,l=t;return h+=(l=l+i>>>0)<t?1:0,h+=(l=l+r>>>0)<r?1:0,e+s+n+a+(h+=(l=l+o>>>0)<o?1:0)>>>0},sum64_4_lo:function(e,t,s,i,n,r,a,o){return t+i+r+o>>>0},sum64_5_hi:function(e,t,s,i,n,r,a,o,h,l){var c=0,u=t;return c+=(u=u+i>>>0)<t?1:0,c+=(u=u+r>>>0)<r?1:0,c+=(u=u+o>>>0)<o?1:0,e+s+n+a+h+(c+=(u=u+l>>>0)<l?1:0)>>>0},sum64_5_lo:function(e,t,s,i,n,r,a,o,h,l){return t+i+r+o+l>>>0},rotr64_hi:function(e,t,s){return (t<<32-s|e>>>s)>>>0},rotr64_lo:function(e,t,s){return (e<<32-s|t>>>s)>>>0},shr64_hi:function(e,t,s){return e>>>s},shr64_lo:function(e,t,s){return (e<<32-s|t>>>s)>>>0}};function wi(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32;}var Ni=wi;wi.prototype.update=function(e,t){if(e=ki.toArray(e,t),this.pending?this.pending=this.pending.concat(e):this.pending=e,this.pendingTotal+=e.length,this.pending.length>=this._delta8){var s=(e=this.pending).length%this._delta8;this.pending=e.slice(e.length-s,e.length),0===this.pending.length&&(this.pending=null),e=ki.join32(e,0,e.length-s,this.endian);for(var i=0;i<e.length;i+=this._delta32)this._update(e,i,i+this._delta32);}return this},wi.prototype.digest=function(e){return this.update(this._pad()),vi(null===this.pending),this._digest(e)},wi.prototype._pad=function(){var e=this.pendingTotal,t=this._delta8,s=t-(e+this.padLength)%t,i=new Array(s+this.padLength);i[0]=128;for(var n=1;n<s;n++)i[n]=0;if(e<<=3,"big"===this.endian){for(var r=8;r<this.padLength;r++)i[n++]=0;i[n++]=0,i[n++]=0,i[n++]=0,i[n++]=0,i[n++]=e>>>24&255,i[n++]=e>>>16&255,i[n++]=e>>>8&255,i[n++]=255&e;}else for(i[n++]=255&e,i[n++]=e>>>8&255,i[n++]=e>>>16&255,i[n++]=e>>>24&255,i[n++]=0,i[n++]=0,i[n++]=0,i[n++]=0,r=8;r<this.padLength;r++)i[n++]=0;return i};var _i={BlockHash:Ni},Ii=ki.rotr32;function $i(e,t,s){return e&t^~e&s}function Ti(e,t,s){return e&t^e&s^t&s}function Mi(e,t,s){return e^t^s}var Li={ft_1:function(e,t,s,i){return 0===e?$i(t,s,i):1===e||3===e?Mi(t,s,i):2===e?Ti(t,s,i):void 0},ch32:$i,maj32:Ti,p32:Mi,s0_256:function(e){return Ii(e,2)^Ii(e,13)^Ii(e,22)},s1_256:function(e){return Ii(e,6)^Ii(e,11)^Ii(e,25)},g0_256:function(e){return Ii(e,7)^Ii(e,18)^e>>>3},g1_256:function(e){return Ii(e,17)^Ii(e,19)^e>>>10}},Ri=ki.sum32,Oi=ki.sum32_4,Di=ki.sum32_5,Vi=Li.ch32,Bi=Li.maj32,Fi=Li.s0_256,Wi=Li.s1_256,Ui=Li.g0_256,zi=Li.g1_256,ji=_i.BlockHash,Gi=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function Hi(){if(!(this instanceof Hi))return new Hi;ji.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=Gi,this.W=new Array(64);}ki.inherits(Hi,ji);Hi.blockSize=512,Hi.outSize=256,Hi.hmacStrength=192,Hi.padLength=64,Hi.prototype._update=function(e,t){for(var s=this.W,i=0;i<16;i++)s[i]=e[t+i];for(;i<s.length;i++)s[i]=Oi(zi(s[i-2]),s[i-7],Ui(s[i-15]),s[i-16]);var n=this.h[0],r=this.h[1],a=this.h[2],o=this.h[3],h=this.h[4],l=this.h[5],c=this.h[6],u=this.h[7];for(vi(this.k.length===s.length),i=0;i<s.length;i++){var d=Di(u,Wi(h),Vi(h,l,c),this.k[i],s[i]),p=Ri(Fi(n),Bi(n,r,a));u=c,c=l,l=h,h=Ri(o,d),o=a,a=r,r=n,n=Ri(d,p);}this.h[0]=Ri(this.h[0],n),this.h[1]=Ri(this.h[1],r),this.h[2]=Ri(this.h[2],a),this.h[3]=Ri(this.h[3],o),this.h[4]=Ri(this.h[4],h),this.h[5]=Ri(this.h[5],l),this.h[6]=Ri(this.h[6],c),this.h[7]=Ri(this.h[7],u);},Hi.prototype._digest=function(e){return "hex"===e?ki.toHex32(this.h,"big"):ki.split32(this.h,"big")};var vn;!function(e){e[e.LOAD_AND_PARSE=0]="LOAD_AND_PARSE",e[e.ANALYSE=1]="ANALYSE",e[e.GENERATE=2]="GENERATE";}(vn||(vn={}));var $n={3:"abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",5:"class enum extends super const export import",6:"enum",strict:"implements interface let package private protected public static yield",strictBind:"eval arguments"},Tn="break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",Mn={5:Tn,"5module":Tn+" export import",6:Tn+" const class extends export import super"},Ln=/^in(stanceof)?$/,Rn="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",On="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",Dn=new RegExp("["+Rn+"]"),Vn=new RegExp("["+Rn+On+"]");Rn=On=null;var Bn=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,107,20,28,22,13,52,76,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8952,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42717,35,4148,12,221,3,5761,15,7472,3104,541,1507,4938],Fn=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,4759,9,787719,239];function Wn(e,t){for(var s=65536,i=0;i<t.length;i+=2){if((s+=t[i])>e)return !1;if((s+=t[i+1])>=e)return !0}}function Un(e,t){return e<65?36===e:e<91||(e<97?95===e:e<123||(e<=65535?e>=170&&Dn.test(String.fromCharCode(e)):!1!==t&&Wn(e,Bn)))}function zn(e,t){return e<48?36===e:e<58||!(e<65)&&(e<91||(e<97?95===e:e<123||(e<=65535?e>=170&&Vn.test(String.fromCharCode(e)):!1!==t&&(Wn(e,Bn)||Wn(e,Fn)))))}var jn=function(e,t){void 0===t&&(t={}),this.label=e,this.keyword=t.keyword,this.beforeExpr=!!t.beforeExpr,this.startsExpr=!!t.startsExpr,this.isLoop=!!t.isLoop,this.isAssign=!!t.isAssign,this.prefix=!!t.prefix,this.postfix=!!t.postfix,this.binop=t.binop||null,this.updateContext=null;};function Gn(e,t){return new jn(e,{beforeExpr:!0,binop:t})}var Hn={beforeExpr:!0},qn={startsExpr:!0},Kn={};function Xn(e,t){return void 0===t&&(t={}),t.keyword=e,Kn[e]=new jn(e,t)}var Yn={num:new jn("num",qn),regexp:new jn("regexp",qn),string:new jn("string",qn),name:new jn("name",qn),eof:new jn("eof"),bracketL:new jn("[",{beforeExpr:!0,startsExpr:!0}),bracketR:new jn("]"),braceL:new jn("{",{beforeExpr:!0,startsExpr:!0}),braceR:new jn("}"),parenL:new jn("(",{beforeExpr:!0,startsExpr:!0}),parenR:new jn(")"),comma:new jn(",",Hn),semi:new jn(";",Hn),colon:new jn(":",Hn),dot:new jn("."),question:new jn("?",Hn),questionDot:new jn("?."),arrow:new jn("=>",Hn),template:new jn("template"),invalidTemplate:new jn("invalidTemplate"),ellipsis:new jn("...",Hn),backQuote:new jn("`",qn),dollarBraceL:new jn("${",{beforeExpr:!0,startsExpr:!0}),eq:new jn("=",{beforeExpr:!0,isAssign:!0}),assign:new jn("_=",{beforeExpr:!0,isAssign:!0}),incDec:new jn("++/--",{prefix:!0,postfix:!0,startsExpr:!0}),prefix:new jn("!/~",{beforeExpr:!0,prefix:!0,startsExpr:!0}),logicalOR:Gn("||",1),logicalAND:Gn("&&",2),bitwiseOR:Gn("|",3),bitwiseXOR:Gn("^",4),bitwiseAND:Gn("&",5),equality:Gn("==/!=/===/!==",6),relational:Gn("</>/<=/>=",7),bitShift:Gn("<</>>/>>>",8),plusMin:new jn("+/-",{beforeExpr:!0,binop:9,prefix:!0,startsExpr:!0}),modulo:Gn("%",10),star:Gn("*",10),slash:Gn("/",10),starstar:new jn("**",{beforeExpr:!0}),coalesce:Gn("??",1),_break:Xn("break"),_case:Xn("case",Hn),_catch:Xn("catch"),_continue:Xn("continue"),_debugger:Xn("debugger"),_default:Xn("default",Hn),_do:Xn("do",{isLoop:!0,beforeExpr:!0}),_else:Xn("else",Hn),_finally:Xn("finally"),_for:Xn("for",{isLoop:!0}),_function:Xn("function",qn),_if:Xn("if"),_return:Xn("return",Hn),_switch:Xn("switch"),_throw:Xn("throw",Hn),_try:Xn("try"),_var:Xn("var"),_const:Xn("const"),_while:Xn("while",{isLoop:!0}),_with:Xn("with"),_new:Xn("new",{beforeExpr:!0,startsExpr:!0}),_this:Xn("this",qn),_super:Xn("super",qn),_class:Xn("class",qn),_extends:Xn("extends",Hn),_export:Xn("export"),_import:Xn("import",qn),_null:Xn("null",qn),_true:Xn("true",qn),_false:Xn("false",qn),_in:Xn("in",{beforeExpr:!0,binop:7}),_instanceof:Xn("instanceof",{beforeExpr:!0,binop:7}),_typeof:Xn("typeof",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_void:Xn("void",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_delete:Xn("delete",{beforeExpr:!0,prefix:!0,startsExpr:!0})},Qn=/\r\n?|\n|\u2028|\u2029/,Jn=new RegExp(Qn.source,"g");function Zn(e,t){return 10===e||13===e||!t&&(8232===e||8233===e)}var er=/[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,tr=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,sr=Object.prototype,ir=sr.hasOwnProperty,nr=sr.toString;function rr(e,t){return ir.call(e,t)}var ar=Array.isArray||function(e){return "[object Array]"===nr.call(e)};function or(e){return new RegExp("^(?:"+e.replace(/ /g,"|")+")$")}var hr=function(e,t){this.line=e,this.column=t;};hr.prototype.offset=function(e){return new hr(this.line,this.column+e)};var lr=function(e,t,s){this.start=t,this.end=s,null!==e.sourceFile&&(this.source=e.sourceFile);};function cr(e,t){for(var s=1,i=0;;){Jn.lastIndex=i;var n=Jn.exec(e);if(!(n&&n.index<t))return new hr(s,t-i);++s,i=n.index+n[0].length;}}var ur={ecmaVersion:10,sourceType:"script",onInsertedSemicolon:null,onTrailingComma:null,allowReserved:null,allowReturnOutsideFunction:!1,allowImportExportEverywhere:!1,allowAwaitOutsideFunction:!1,allowHashBang:!1,locations:!1,onToken:null,onComment:null,ranges:!1,program:null,sourceFile:null,directSourceFile:null,preserveParens:!1};function dr(e){var t={};for(var s in ur)t[s]=e&&rr(e,s)?e[s]:ur[s];if(t.ecmaVersion>=2015&&(t.ecmaVersion-=2009),null==t.allowReserved&&(t.allowReserved=t.ecmaVersion<5),ar(t.onToken)){var i=t.onToken;t.onToken=function(e){return i.push(e)};}return ar(t.onComment)&&(t.onComment=function(e,t){return function(s,i,n,r,a,o){var h={type:s?"Block":"Line",value:i,start:n,end:r};e.locations&&(h.loc=new lr(this,a,o)),e.ranges&&(h.range=[n,r]),t.push(h);}}(t,t.onComment)),t}function pr(e,t){return 2|(e?4:0)|(t?8:0)}var fr=function(e,t,s){this.options=e=dr(e),this.sourceFile=e.sourceFile,this.keywords=or(Mn[e.ecmaVersion>=6?6:"module"===e.sourceType?"5module":5]);var i="";if(!0!==e.allowReserved){for(var n=e.ecmaVersion;!(i=$n[n]);n--);"module"===e.sourceType&&(i+=" await");}this.reservedWords=or(i);var r=(i?i+" ":"")+$n.strict;this.reservedWordsStrict=or(r),this.reservedWordsStrictBind=or(r+" "+$n.strictBind),this.input=String(t),this.containsEsc=!1,s?(this.pos=s,this.lineStart=this.input.lastIndexOf("\n",s-1)+1,this.curLine=this.input.slice(0,this.lineStart).split(Qn).length):(this.pos=this.lineStart=0,this.curLine=1),this.type=Yn.eof,this.value=null,this.start=this.end=this.pos,this.startLoc=this.endLoc=this.curPosition(),this.lastTokEndLoc=this.lastTokStartLoc=null,this.lastTokStart=this.lastTokEnd=this.pos,this.context=this.initialContext(),this.exprAllowed=!0,this.inModule="module"===e.sourceType,this.strict=this.inModule||this.strictDirective(this.pos),this.potentialArrowAt=-1,this.yieldPos=this.awaitPos=this.awaitIdentPos=0,this.labels=[],this.undefinedExports={},0===this.pos&&e.allowHashBang&&"#!"===this.input.slice(0,2)&&this.skipLineComment(2),this.scopeStack=[],this.enterScope(1),this.regexpState=null;},mr={inFunction:{configurable:!0},inGenerator:{configurable:!0},inAsync:{configurable:!0},allowSuper:{configurable:!0},allowDirectSuper:{configurable:!0},treatFunctionsAsVar:{configurable:!0}};fr.prototype.parse=function(){var e=this.options.program||this.startNode();return this.nextToken(),this.parseTopLevel(e)},mr.inFunction.get=function(){return (2&this.currentVarScope().flags)>0},mr.inGenerator.get=function(){return (8&this.currentVarScope().flags)>0},mr.inAsync.get=function(){return (4&this.currentVarScope().flags)>0},mr.allowSuper.get=function(){return (64&this.currentThisScope().flags)>0},mr.allowDirectSuper.get=function(){return (128&this.currentThisScope().flags)>0},mr.treatFunctionsAsVar.get=function(){return this.treatFunctionsAsVarInScope(this.currentScope())},fr.prototype.inNonArrowFunction=function(){return (2&this.currentThisScope().flags)>0},fr.extend=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var s=this,i=0;i<e.length;i++)s=e[i](s);return s},fr.parse=function(e,t){return new this(t,e).parse()},fr.parseExpressionAt=function(e,t,s){var i=new this(s,e,t);return i.nextToken(),i.parseExpression()},fr.tokenizer=function(e,t){return new this(t,e)},Object.defineProperties(fr.prototype,mr);var gr=fr.prototype,yr=/^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)")/;function xr(){this.shorthandAssign=this.trailingComma=this.parenthesizedAssign=this.parenthesizedBind=this.doubleProto=-1;}gr.strictDirective=function(e){for(;;){tr.lastIndex=e,e+=tr.exec(this.input)[0].length;var t=yr.exec(this.input.slice(e));if(!t)return !1;if("use strict"===(t[1]||t[2])){tr.lastIndex=e+t[0].length;var s=tr.exec(this.input),i=s.index+s[0].length,n=this.input.charAt(i);return ";"===n||"}"===n||Qn.test(s[0])&&!(/[(`.[+\-/*%<>=,?^&]/.test(n)||"!"===n&&"="===this.input.charAt(i+1))}e+=t[0].length,tr.lastIndex=e,e+=tr.exec(this.input)[0].length,";"===this.input[e]&&e++;}},gr.eat=function(e){return this.type===e&&(this.next(),!0)},gr.isContextual=function(e){return this.type===Yn.name&&this.value===e&&!this.containsEsc},gr.eatContextual=function(e){return !!this.isContextual(e)&&(this.next(),!0)},gr.expectContextual=function(e){this.eatContextual(e)||this.unexpected();},gr.canInsertSemicolon=function(){return this.type===Yn.eof||this.type===Yn.braceR||Qn.test(this.input.slice(this.lastTokEnd,this.start))},gr.insertSemicolon=function(){if(this.canInsertSemicolon())return this.options.onInsertedSemicolon&&this.options.onInsertedSemicolon(this.lastTokEnd,this.lastTokEndLoc),!0},gr.semicolon=function(){this.eat(Yn.semi)||this.insertSemicolon()||this.unexpected();},gr.afterTrailingComma=function(e,t){if(this.type===e)return this.options.onTrailingComma&&this.options.onTrailingComma(this.lastTokStart,this.lastTokStartLoc),t||this.next(),!0},gr.expect=function(e){this.eat(e)||this.unexpected();},gr.unexpected=function(e){this.raise(null!=e?e:this.start,"Unexpected token");},gr.checkPatternErrors=function(e,t){if(e){e.trailingComma>-1&&this.raiseRecoverable(e.trailingComma,"Comma is not permitted after the rest element");var s=t?e.parenthesizedAssign:e.parenthesizedBind;s>-1&&this.raiseRecoverable(s,"Parenthesized pattern");}},gr.checkExpressionErrors=function(e,t){if(!e)return !1;var s=e.shorthandAssign,i=e.doubleProto;if(!t)return s>=0||i>=0;s>=0&&this.raise(s,"Shorthand property assignments are valid only in destructuring patterns"),i>=0&&this.raiseRecoverable(i,"Redefinition of __proto__ property");},gr.checkYieldAwaitInDefaultParams=function(){this.yieldPos&&(!this.awaitPos||this.yieldPos<this.awaitPos)&&this.raise(this.yieldPos,"Yield expression cannot be a default value"),this.awaitPos&&this.raise(this.awaitPos,"Await expression cannot be a default value");},gr.isSimpleAssignTarget=function(e){return "ParenthesizedExpression"===e.type?this.isSimpleAssignTarget(e.expression):"Identifier"===e.type||"MemberExpression"===e.type};var Er=fr.prototype;Er.parseTopLevel=function(e){var t={};for(e.body||(e.body=[]);this.type!==Yn.eof;){var s=this.parseStatement(null,!0,t);e.body.push(s);}if(this.inModule)for(var i=0,n=Object.keys(this.undefinedExports);i<n.length;i+=1){var r=n[i];this.raiseRecoverable(this.undefinedExports[r].start,"Export '"+r+"' is not defined");}return this.adaptDirectivePrologue(e.body),this.next(),e.sourceType=this.options.sourceType,this.finishNode(e,"Program")};var vr={kind:"loop"},br={kind:"switch"};Er.isLet=function(e){if(this.options.ecmaVersion<6||!this.isContextual("let"))return !1;tr.lastIndex=this.pos;var t=tr.exec(this.input),s=this.pos+t[0].length,i=this.input.charCodeAt(s);if(91===i)return !0;if(e)return !1;if(123===i)return !0;if(Un(i,!0)){for(var n=s+1;zn(this.input.charCodeAt(n),!0);)++n;var r=this.input.slice(s,n);if(!Ln.test(r))return !0}return !1},Er.isAsyncFunction=function(){if(this.options.ecmaVersion<8||!this.isContextual("async"))return !1;tr.lastIndex=this.pos;var e=tr.exec(this.input),t=this.pos+e[0].length;return !(Qn.test(this.input.slice(this.pos,t))||"function"!==this.input.slice(t,t+8)||t+8!==this.input.length&&zn(this.input.charAt(t+8)))},Er.parseStatement=function(e,t,s){var i,n=this.type,r=this.startNode();switch(this.isLet(e)&&(n=Yn._var,i="let"),n){case Yn._break:case Yn._continue:return this.parseBreakContinueStatement(r,n.keyword);case Yn._debugger:return this.parseDebuggerStatement(r);case Yn._do:return this.parseDoStatement(r);case Yn._for:return this.parseForStatement(r);case Yn._function:return e&&(this.strict||"if"!==e&&"label"!==e)&&this.options.ecmaVersion>=6&&this.unexpected(),this.parseFunctionStatement(r,!1,!e);case Yn._class:return e&&this.unexpected(),this.parseClass(r,!0);case Yn._if:return this.parseIfStatement(r);case Yn._return:return this.parseReturnStatement(r);case Yn._switch:return this.parseSwitchStatement(r);case Yn._throw:return this.parseThrowStatement(r);case Yn._try:return this.parseTryStatement(r);case Yn._const:case Yn._var:return i=i||this.value,e&&"var"!==i&&this.unexpected(),this.parseVarStatement(r,i);case Yn._while:return this.parseWhileStatement(r);case Yn._with:return this.parseWithStatement(r);case Yn.braceL:return this.parseBlock(!0,r);case Yn.semi:return this.parseEmptyStatement(r);case Yn._export:case Yn._import:if(this.options.ecmaVersion>10&&n===Yn._import){tr.lastIndex=this.pos;var a=tr.exec(this.input),o=this.pos+a[0].length,h=this.input.charCodeAt(o);if(40===h||46===h)return this.parseExpressionStatement(r,this.parseExpression())}return this.options.allowImportExportEverywhere||(t||this.raise(this.start,"'import' and 'export' may only appear at the top level"),this.inModule||this.raise(this.start,"'import' and 'export' may appear only with 'sourceType: module'")),n===Yn._import?this.parseImport(r):this.parseExport(r,s);default:if(this.isAsyncFunction())return e&&this.unexpected(),this.next(),this.parseFunctionStatement(r,!0,!e);var l=this.value,c=this.parseExpression();return n===Yn.name&&"Identifier"===c.type&&this.eat(Yn.colon)?this.parseLabeledStatement(r,l,c,e):this.parseExpressionStatement(r,c)}},Er.parseBreakContinueStatement=function(e,t){var s="break"===t;this.next(),this.eat(Yn.semi)||this.insertSemicolon()?e.label=null:this.type!==Yn.name?this.unexpected():(e.label=this.parseIdent(),this.semicolon());for(var i=0;i<this.labels.length;++i){var n=this.labels[i];if(null==e.label||n.name===e.label.name){if(null!=n.kind&&(s||"loop"===n.kind))break;if(e.label&&s)break}}return i===this.labels.length&&this.raise(e.start,"Unsyntactic "+t),this.finishNode(e,s?"BreakStatement":"ContinueStatement")},Er.parseDebuggerStatement=function(e){return this.next(),this.semicolon(),this.finishNode(e,"DebuggerStatement")},Er.parseDoStatement=function(e){return this.next(),this.labels.push(vr),e.body=this.parseStatement("do"),this.labels.pop(),this.expect(Yn._while),e.test=this.parseParenExpression(),this.options.ecmaVersion>=6?this.eat(Yn.semi):this.semicolon(),this.finishNode(e,"DoWhileStatement")},Er.parseForStatement=function(e){this.next();var t=this.options.ecmaVersion>=9&&(this.inAsync||!this.inFunction&&this.options.allowAwaitOutsideFunction)&&this.eatContextual("await")?this.lastTokStart:-1;if(this.labels.push(vr),this.enterScope(0),this.expect(Yn.parenL),this.type===Yn.semi)return t>-1&&this.unexpected(t),this.parseFor(e,null);var s=this.isLet();if(this.type===Yn._var||this.type===Yn._const||s){var i=this.startNode(),n=s?"let":this.value;return this.next(),this.parseVar(i,!0,n),this.finishNode(i,"VariableDeclaration"),(this.type===Yn._in||this.options.ecmaVersion>=6&&this.isContextual("of"))&&1===i.declarations.length?(this.options.ecmaVersion>=9&&(this.type===Yn._in?t>-1&&this.unexpected(t):e.await=t>-1),this.parseForIn(e,i)):(t>-1&&this.unexpected(t),this.parseFor(e,i))}var r=new xr,a=this.parseExpression(!0,r);return this.type===Yn._in||this.options.ecmaVersion>=6&&this.isContextual("of")?(this.options.ecmaVersion>=9&&(this.type===Yn._in?t>-1&&this.unexpected(t):e.await=t>-1),this.toAssignable(a,!1,r),this.checkLVal(a),this.parseForIn(e,a)):(this.checkExpressionErrors(r,!0),t>-1&&this.unexpected(t),this.parseFor(e,a))},Er.parseFunctionStatement=function(e,t,s){return this.next(),this.parseFunction(e,Ar|(s?0:Pr),!1,t)},Er.parseIfStatement=function(e){return this.next(),e.test=this.parseParenExpression(),e.consequent=this.parseStatement("if"),e.alternate=this.eat(Yn._else)?this.parseStatement("if"):null,this.finishNode(e,"IfStatement")},Er.parseReturnStatement=function(e){return this.inFunction||this.options.allowReturnOutsideFunction||this.raise(this.start,"'return' outside of function"),this.next(),this.eat(Yn.semi)||this.insertSemicolon()?e.argument=null:(e.argument=this.parseExpression(),this.semicolon()),this.finishNode(e,"ReturnStatement")},Er.parseSwitchStatement=function(e){var t;this.next(),e.discriminant=this.parseParenExpression(),e.cases=[],this.expect(Yn.braceL),this.labels.push(br),this.enterScope(0);for(var s=!1;this.type!==Yn.braceR;)if(this.type===Yn._case||this.type===Yn._default){var i=this.type===Yn._case;t&&this.finishNode(t,"SwitchCase"),e.cases.push(t=this.startNode()),t.consequent=[],this.next(),i?t.test=this.parseExpression():(s&&this.raiseRecoverable(this.lastTokStart,"Multiple default clauses"),s=!0,t.test=null),this.expect(Yn.colon);}else t||this.unexpected(),t.consequent.push(this.parseStatement(null));return this.exitScope(),t&&this.finishNode(t,"SwitchCase"),this.next(),this.labels.pop(),this.finishNode(e,"SwitchStatement")},Er.parseThrowStatement=function(e){return this.next(),Qn.test(this.input.slice(this.lastTokEnd,this.start))&&this.raise(this.lastTokEnd,"Illegal newline after throw"),e.argument=this.parseExpression(),this.semicolon(),this.finishNode(e,"ThrowStatement")};var Sr=[];Er.parseTryStatement=function(e){if(this.next(),e.block=this.parseBlock(),e.handler=null,this.type===Yn._catch){var t=this.startNode();if(this.next(),this.eat(Yn.parenL)){t.param=this.parseBindingAtom();var s="Identifier"===t.param.type;this.enterScope(s?32:0),this.checkLVal(t.param,s?4:2),this.expect(Yn.parenR);}else this.options.ecmaVersion<10&&this.unexpected(),t.param=null,this.enterScope(0);t.body=this.parseBlock(!1),this.exitScope(),e.handler=this.finishNode(t,"CatchClause");}return e.finalizer=this.eat(Yn._finally)?this.parseBlock():null,e.handler||e.finalizer||this.raise(e.start,"Missing catch or finally clause"),this.finishNode(e,"TryStatement")},Er.parseVarStatement=function(e,t){return this.next(),this.parseVar(e,!1,t),this.semicolon(),this.finishNode(e,"VariableDeclaration")},Er.parseWhileStatement=function(e){return this.next(),e.test=this.parseParenExpression(),this.labels.push(vr),e.body=this.parseStatement("while"),this.labels.pop(),this.finishNode(e,"WhileStatement")},Er.parseWithStatement=function(e){return this.strict&&this.raise(this.start,"'with' in strict mode"),this.next(),e.object=this.parseParenExpression(),e.body=this.parseStatement("with"),this.finishNode(e,"WithStatement")},Er.parseEmptyStatement=function(e){return this.next(),this.finishNode(e,"EmptyStatement")},Er.parseLabeledStatement=function(e,t,s,i){for(var n=0,r=this.labels;n<r.length;n+=1){r[n].name===t&&this.raise(s.start,"Label '"+t+"' is already declared");}for(var a=this.type.isLoop?"loop":this.type===Yn._switch?"switch":null,o=this.labels.length-1;o>=0;o--){var h=this.labels[o];if(h.statementStart!==e.start)break;h.statementStart=this.start,h.kind=a;}return this.labels.push({name:t,kind:a,statementStart:this.start}),e.body=this.parseStatement(i?-1===i.indexOf("label")?i+"label":i:"label"),this.labels.pop(),e.label=s,this.finishNode(e,"LabeledStatement")},Er.parseExpressionStatement=function(e,t){return e.expression=t,this.semicolon(),this.finishNode(e,"ExpressionStatement")},Er.parseBlock=function(e,t,s){for(void 0===e&&(e=!0),void 0===t&&(t=this.startNode()),t.body=[],this.expect(Yn.braceL),e&&this.enterScope(0);this.type!==Yn.braceR;){var i=this.parseStatement(null);t.body.push(i);}return s&&(this.strict=!1),this.next(),e&&this.exitScope(),this.finishNode(t,"BlockStatement")},Er.parseFor=function(e,t){return e.init=t,this.expect(Yn.semi),e.test=this.type===Yn.semi?null:this.parseExpression(),this.expect(Yn.semi),e.update=this.type===Yn.parenR?null:this.parseExpression(),this.expect(Yn.parenR),e.body=this.parseStatement("for"),this.exitScope(),this.labels.pop(),this.finishNode(e,"ForStatement")},Er.parseForIn=function(e,t){var s=this.type===Yn._in;return this.next(),"VariableDeclaration"===t.type&&null!=t.declarations[0].init&&(!s||this.options.ecmaVersion<8||this.strict||"var"!==t.kind||"Identifier"!==t.declarations[0].id.type)?this.raise(t.start,(s?"for-in":"for-of")+" loop variable declaration may not have an initializer"):"AssignmentPattern"===t.type&&this.raise(t.start,"Invalid left-hand side in for-loop"),e.left=t,e.right=s?this.parseExpression():this.parseMaybeAssign(),this.expect(Yn.parenR),e.body=this.parseStatement("for"),this.exitScope(),this.labels.pop(),this.finishNode(e,s?"ForInStatement":"ForOfStatement")},Er.parseVar=function(e,t,s){for(e.declarations=[],e.kind=s;;){var i=this.startNode();if(this.parseVarId(i,s),this.eat(Yn.eq)?i.init=this.parseMaybeAssign(t):"const"!==s||this.type===Yn._in||this.options.ecmaVersion>=6&&this.isContextual("of")?"Identifier"===i.id.type||t&&(this.type===Yn._in||this.isContextual("of"))?i.init=null:this.raise(this.lastTokEnd,"Complex binding patterns require an initialization value"):this.unexpected(),e.declarations.push(this.finishNode(i,"VariableDeclarator")),!this.eat(Yn.comma))break}return e},Er.parseVarId=function(e,t){e.id=this.parseBindingAtom(),this.checkLVal(e.id,"var"===t?1:2,!1);};var Ar=1,Pr=2;Er.parseFunction=function(e,t,s,i){this.initFunction(e),(this.options.ecmaVersion>=9||this.options.ecmaVersion>=6&&!i)&&(this.type===Yn.star&&t&Pr&&this.unexpected(),e.generator=this.eat(Yn.star)),this.options.ecmaVersion>=8&&(e.async=!!i),t&Ar&&(e.id=4&t&&this.type!==Yn.name?null:this.parseIdent(),!e.id||t&Pr||this.checkLVal(e.id,this.strict||e.generator||e.async?this.treatFunctionsAsVar?1:2:3));var n=this.yieldPos,r=this.awaitPos,a=this.awaitIdentPos;return this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,this.enterScope(pr(e.async,e.generator)),t&Ar||(e.id=this.type===Yn.name?this.parseIdent():null),this.parseFunctionParams(e),this.parseFunctionBody(e,s,!1),this.yieldPos=n,this.awaitPos=r,this.awaitIdentPos=a,this.finishNode(e,t&Ar?"FunctionDeclaration":"FunctionExpression")},Er.parseFunctionParams=function(e){this.expect(Yn.parenL),e.params=this.parseBindingList(Yn.parenR,!1,this.options.ecmaVersion>=8),this.checkYieldAwaitInDefaultParams();},Er.parseClass=function(e,t){this.next();var s=this.strict;this.strict=!0,this.parseClassId(e,t),this.parseClassSuper(e);var i=this.startNode(),n=!1;for(i.body=[],this.expect(Yn.braceL);this.type!==Yn.braceR;){var r=this.parseClassElement(null!==e.superClass);r&&(i.body.push(r),"MethodDefinition"===r.type&&"constructor"===r.kind&&(n&&this.raise(r.start,"Duplicate constructor in the same class"),n=!0));}return this.strict=s,this.next(),e.body=this.finishNode(i,"ClassBody"),this.finishNode(e,t?"ClassDeclaration":"ClassExpression")},Er.parseClassElement=function(e){var t=this;if(this.eat(Yn.semi))return null;var s=this.startNode(),i=function(e,i){void 0===i&&(i=!1);var n=t.start,r=t.startLoc;return !!t.eatContextual(e)&&(!(t.type===Yn.parenL||i&&t.canInsertSemicolon())||(s.key&&t.unexpected(),s.computed=!1,s.key=t.startNodeAt(n,r),s.key.name=e,t.finishNode(s.key,"Identifier"),!1))};s.kind="method",s.static=i("static");var n=this.eat(Yn.star),r=!1;n||(this.options.ecmaVersion>=8&&i("async",!0)?(r=!0,n=this.options.ecmaVersion>=9&&this.eat(Yn.star)):i("get")?s.kind="get":i("set")&&(s.kind="set")),s.key||this.parsePropertyName(s);var a=s.key,o=!1;return s.computed||s.static||!("Identifier"===a.type&&"constructor"===a.name||"Literal"===a.type&&"constructor"===a.value)?s.static&&"Identifier"===a.type&&"prototype"===a.name&&this.raise(a.start,"Classes may not have a static property named prototype"):("method"!==s.kind&&this.raise(a.start,"Constructor can't have get/set modifier"),n&&this.raise(a.start,"Constructor can't be a generator"),r&&this.raise(a.start,"Constructor can't be an async method"),s.kind="constructor",o=e),this.parseClassMethod(s,n,r,o),"get"===s.kind&&0!==s.value.params.length&&this.raiseRecoverable(s.value.start,"getter should have no params"),"set"===s.kind&&1!==s.value.params.length&&this.raiseRecoverable(s.value.start,"setter should have exactly one param"),"set"===s.kind&&"RestElement"===s.value.params[0].type&&this.raiseRecoverable(s.value.params[0].start,"Setter cannot use rest params"),s},Er.parseClassMethod=function(e,t,s,i){return e.value=this.parseMethod(t,s,i),this.finishNode(e,"MethodDefinition")},Er.parseClassId=function(e,t){this.type===Yn.name?(e.id=this.parseIdent(),t&&this.checkLVal(e.id,2,!1)):(!0===t&&this.unexpected(),e.id=null);},Er.parseClassSuper=function(e){e.superClass=this.eat(Yn._extends)?this.parseExprSubscripts():null;},Er.parseExport=function(e,t){if(this.next(),this.eat(Yn.star))return this.options.ecmaVersion>=11&&(this.eatContextual("as")?(e.exported=this.parseIdent(!0),this.checkExport(t,e.exported.name,this.lastTokStart)):e.exported=null),this.expectContextual("from"),this.type!==Yn.string&&this.unexpected(),e.source=this.parseExprAtom(),this.semicolon(),this.finishNode(e,"ExportAllDeclaration");if(this.eat(Yn._default)){var s;if(this.checkExport(t,"default",this.lastTokStart),this.type===Yn._function||(s=this.isAsyncFunction())){var i=this.startNode();this.next(),s&&this.next(),e.declaration=this.parseFunction(i,4|Ar,!1,s);}else if(this.type===Yn._class){var n=this.startNode();e.declaration=this.parseClass(n,"nullableID");}else e.declaration=this.parseMaybeAssign(),this.semicolon();return this.finishNode(e,"ExportDefaultDeclaration")}if(this.shouldParseExportStatement())e.declaration=this.parseStatement(null),"VariableDeclaration"===e.declaration.type?this.checkVariableExport(t,e.declaration.declarations):this.checkExport(t,e.declaration.id.name,e.declaration.id.start),e.specifiers=[],e.source=null;else {if(e.declaration=null,e.specifiers=this.parseExportSpecifiers(t),this.eatContextual("from"))this.type!==Yn.string&&this.unexpected(),e.source=this.parseExprAtom();else {for(var r=0,a=e.specifiers;r<a.length;r+=1){var o=a[r];this.checkUnreserved(o.local),this.checkLocalExport(o.local);}e.source=null;}this.semicolon();}return this.finishNode(e,"ExportNamedDeclaration")},Er.checkExport=function(e,t,s){e&&(rr(e,t)&&this.raiseRecoverable(s,"Duplicate export '"+t+"'"),e[t]=!0);},Er.checkPatternExport=function(e,t){var s=t.type;if("Identifier"===s)this.checkExport(e,t.name,t.start);else if("ObjectPattern"===s)for(var i=0,n=t.properties;i<n.length;i+=1){var r=n[i];this.checkPatternExport(e,r);}else if("ArrayPattern"===s)for(var a=0,o=t.elements;a<o.length;a+=1){var h=o[a];h&&this.checkPatternExport(e,h);}else "Property"===s?this.checkPatternExport(e,t.value):"AssignmentPattern"===s?this.checkPatternExport(e,t.left):"RestElement"===s?this.checkPatternExport(e,t.argument):"ParenthesizedExpression"===s&&this.checkPatternExport(e,t.expression);},Er.checkVariableExport=function(e,t){if(e)for(var s=0,i=t;s<i.length;s+=1){var n=i[s];this.checkPatternExport(e,n.id);}},Er.shouldParseExportStatement=function(){return "var"===this.type.keyword||"const"===this.type.keyword||"class"===this.type.keyword||"function"===this.type.keyword||this.isLet()||this.isAsyncFunction()},Er.parseExportSpecifiers=function(e){var t=[],s=!0;for(this.expect(Yn.braceL);!this.eat(Yn.braceR);){if(s)s=!1;else if(this.expect(Yn.comma),this.afterTrailingComma(Yn.braceR))break;var i=this.startNode();i.local=this.parseIdent(!0),i.exported=this.eatContextual("as")?this.parseIdent(!0):i.local,this.checkExport(e,i.exported.name,i.exported.start),t.push(this.finishNode(i,"ExportSpecifier"));}return t},Er.parseImport=function(e){return this.next(),this.type===Yn.string?(e.specifiers=Sr,e.source=this.parseExprAtom()):(e.specifiers=this.parseImportSpecifiers(),this.expectContextual("from"),e.source=this.type===Yn.string?this.parseExprAtom():this.unexpected()),this.semicolon(),this.finishNode(e,"ImportDeclaration")},Er.parseImportSpecifiers=function(){var e=[],t=!0;if(this.type===Yn.name){var s=this.startNode();if(s.local=this.parseIdent(),this.checkLVal(s.local,2),e.push(this.finishNode(s,"ImportDefaultSpecifier")),!this.eat(Yn.comma))return e}if(this.type===Yn.star){var i=this.startNode();return this.next(),this.expectContextual("as"),i.local=this.parseIdent(),this.checkLVal(i.local,2),e.push(this.finishNode(i,"ImportNamespaceSpecifier")),e}for(this.expect(Yn.braceL);!this.eat(Yn.braceR);){if(t)t=!1;else if(this.expect(Yn.comma),this.afterTrailingComma(Yn.braceR))break;var n=this.startNode();n.imported=this.parseIdent(!0),this.eatContextual("as")?n.local=this.parseIdent():(this.checkUnreserved(n.imported),n.local=n.imported),this.checkLVal(n.local,2),e.push(this.finishNode(n,"ImportSpecifier"));}return e},Er.adaptDirectivePrologue=function(e){for(var t=0;t<e.length&&this.isDirectiveCandidate(e[t]);++t)e[t].directive=e[t].expression.raw.slice(1,-1);},Er.isDirectiveCandidate=function(e){return "ExpressionStatement"===e.type&&"Literal"===e.expression.type&&"string"==typeof e.expression.value&&('"'===this.input[e.start]||"'"===this.input[e.start])};var Cr=fr.prototype;Cr.toAssignable=function(e,t,s){if(this.options.ecmaVersion>=6&&e)switch(e.type){case"Identifier":this.inAsync&&"await"===e.name&&this.raise(e.start,"Cannot use 'await' as identifier inside an async function");break;case"ObjectPattern":case"ArrayPattern":case"RestElement":break;case"ObjectExpression":e.type="ObjectPattern",s&&this.checkPatternErrors(s,!0);for(var i=0,n=e.properties;i<n.length;i+=1){var r=n[i];this.toAssignable(r,t),"RestElement"!==r.type||"ArrayPattern"!==r.argument.type&&"ObjectPattern"!==r.argument.type||this.raise(r.argument.start,"Unexpected token");}break;case"Property":"init"!==e.kind&&this.raise(e.key.start,"Object pattern can't contain getter or setter"),this.toAssignable(e.value,t);break;case"ArrayExpression":e.type="ArrayPattern",s&&this.checkPatternErrors(s,!0),this.toAssignableList(e.elements,t);break;case"SpreadElement":e.type="RestElement",this.toAssignable(e.argument,t),"AssignmentPattern"===e.argument.type&&this.raise(e.argument.start,"Rest elements cannot have a default value");break;case"AssignmentExpression":"="!==e.operator&&this.raise(e.left.end,"Only '=' operator can be used for specifying default value."),e.type="AssignmentPattern",delete e.operator,this.toAssignable(e.left,t);case"AssignmentPattern":break;case"ParenthesizedExpression":this.toAssignable(e.expression,t,s);break;case"ChainExpression":this.raiseRecoverable(e.start,"Optional chaining cannot appear in left-hand side");break;case"MemberExpression":if(!t)break;default:this.raise(e.start,"Assigning to rvalue");}else s&&this.checkPatternErrors(s,!0);return e},Cr.toAssignableList=function(e,t){for(var s=e.length,i=0;i<s;i++){var n=e[i];n&&this.toAssignable(n,t);}if(s){var r=e[s-1];6===this.options.ecmaVersion&&t&&r&&"RestElement"===r.type&&"Identifier"!==r.argument.type&&this.unexpected(r.argument.start);}return e},Cr.parseSpread=function(e){var t=this.startNode();return this.next(),t.argument=this.parseMaybeAssign(!1,e),this.finishNode(t,"SpreadElement")},Cr.parseRestBinding=function(){var e=this.startNode();return this.next(),6===this.options.ecmaVersion&&this.type!==Yn.name&&this.unexpected(),e.argument=this.parseBindingAtom(),this.finishNode(e,"RestElement")},Cr.parseBindingAtom=function(){if(this.options.ecmaVersion>=6)switch(this.type){case Yn.bracketL:var e=this.startNode();return this.next(),e.elements=this.parseBindingList(Yn.bracketR,!0,!0),this.finishNode(e,"ArrayPattern");case Yn.braceL:return this.parseObj(!0)}return this.parseIdent()},Cr.parseBindingList=function(e,t,s){for(var i=[],n=!0;!this.eat(e);)if(n?n=!1:this.expect(Yn.comma),t&&this.type===Yn.comma)i.push(null);else {if(s&&this.afterTrailingComma(e))break;if(this.type===Yn.ellipsis){var r=this.parseRestBinding();this.parseBindingListItem(r),i.push(r),this.type===Yn.comma&&this.raise(this.start,"Comma is not permitted after the rest element"),this.expect(e);break}var a=this.parseMaybeDefault(this.start,this.startLoc);this.parseBindingListItem(a),i.push(a);}return i},Cr.parseBindingListItem=function(e){return e},Cr.parseMaybeDefault=function(e,t,s){if(s=s||this.parseBindingAtom(),this.options.ecmaVersion<6||!this.eat(Yn.eq))return s;var i=this.startNodeAt(e,t);return i.left=s,i.right=this.parseMaybeAssign(),this.finishNode(i,"AssignmentPattern")},Cr.checkLVal=function(e,t,s){switch(void 0===t&&(t=0),e.type){case"Identifier":2===t&&"let"===e.name&&this.raiseRecoverable(e.start,"let is disallowed as a lexically bound name"),this.strict&&this.reservedWordsStrictBind.test(e.name)&&this.raiseRecoverable(e.start,(t?"Binding ":"Assigning to ")+e.name+" in strict mode"),s&&(rr(s,e.name)&&this.raiseRecoverable(e.start,"Argument name clash"),s[e.name]=!0),0!==t&&5!==t&&this.declareName(e.name,t,e.start);break;case"ChainExpression":this.raiseRecoverable(e.start,"Optional chaining cannot appear in left-hand side");break;case"MemberExpression":t&&this.raiseRecoverable(e.start,"Binding member expression");break;case"ObjectPattern":for(var i=0,n=e.properties;i<n.length;i+=1){var r=n[i];this.checkLVal(r,t,s);}break;case"Property":this.checkLVal(e.value,t,s);break;case"ArrayPattern":for(var a=0,o=e.elements;a<o.length;a+=1){var h=o[a];h&&this.checkLVal(h,t,s);}break;case"AssignmentPattern":this.checkLVal(e.left,t,s);break;case"RestElement":this.checkLVal(e.argument,t,s);break;case"ParenthesizedExpression":this.checkLVal(e.expression,t,s);break;default:this.raise(e.start,(t?"Binding":"Assigning to")+" rvalue");}};var kr=fr.prototype;kr.checkPropClash=function(e,t,s){if(!(this.options.ecmaVersion>=9&&"SpreadElement"===e.type||this.options.ecmaVersion>=6&&(e.computed||e.method||e.shorthand))){var i,n=e.key;switch(n.type){case"Identifier":i=n.name;break;case"Literal":i=String(n.value);break;default:return}var r=e.kind;if(this.options.ecmaVersion>=6)"__proto__"===i&&"init"===r&&(t.proto&&(s?s.doubleProto<0&&(s.doubleProto=n.start):this.raiseRecoverable(n.start,"Redefinition of __proto__ property")),t.proto=!0);else {var a=t[i="$"+i];if(a)("init"===r?this.strict&&a.init||a.get||a.set:a.init||a[r])&&this.raiseRecoverable(n.start,"Redefinition of property");else a=t[i]={init:!1,get:!1,set:!1};a[r]=!0;}}},kr.parseExpression=function(e,t){var s=this.start,i=this.startLoc,n=this.parseMaybeAssign(e,t);if(this.type===Yn.comma){var r=this.startNodeAt(s,i);for(r.expressions=[n];this.eat(Yn.comma);)r.expressions.push(this.parseMaybeAssign(e,t));return this.finishNode(r,"SequenceExpression")}return n},kr.parseMaybeAssign=function(e,t,s){if(this.isContextual("yield")){if(this.inGenerator)return this.parseYield(e);this.exprAllowed=!1;}var i=!1,n=-1,r=-1;t?(n=t.parenthesizedAssign,r=t.trailingComma,t.parenthesizedAssign=t.trailingComma=-1):(t=new xr,i=!0);var a=this.start,o=this.startLoc;this.type!==Yn.parenL&&this.type!==Yn.name||(this.potentialArrowAt=this.start);var h=this.parseMaybeConditional(e,t);if(s&&(h=s.call(this,h,a,o)),this.type.isAssign){var l=this.startNodeAt(a,o);return l.operator=this.value,l.left=this.type===Yn.eq?this.toAssignable(h,!1,t):h,i||(t.parenthesizedAssign=t.trailingComma=t.doubleProto=-1),t.shorthandAssign>=l.left.start&&(t.shorthandAssign=-1),this.checkLVal(h),this.next(),l.right=this.parseMaybeAssign(e),this.finishNode(l,"AssignmentExpression")}return i&&this.checkExpressionErrors(t,!0),n>-1&&(t.parenthesizedAssign=n),r>-1&&(t.trailingComma=r),h},kr.parseMaybeConditional=function(e,t){var s=this.start,i=this.startLoc,n=this.parseExprOps(e,t);if(this.checkExpressionErrors(t))return n;if(this.eat(Yn.question)){var r=this.startNodeAt(s,i);return r.test=n,r.consequent=this.parseMaybeAssign(),this.expect(Yn.colon),r.alternate=this.parseMaybeAssign(e),this.finishNode(r,"ConditionalExpression")}return n},kr.parseExprOps=function(e,t){var s=this.start,i=this.startLoc,n=this.parseMaybeUnary(t,!1);return this.checkExpressionErrors(t)||n.start===s&&"ArrowFunctionExpression"===n.type?n:this.parseExprOp(n,s,i,-1,e)},kr.parseExprOp=function(e,t,s,i,n){var r=this.type.binop;if(null!=r&&(!n||this.type!==Yn._in)&&r>i){var a=this.type===Yn.logicalOR||this.type===Yn.logicalAND,o=this.type===Yn.coalesce;o&&(r=Yn.logicalAND.binop);var h=this.value;this.next();var l=this.start,c=this.startLoc,u=this.parseExprOp(this.parseMaybeUnary(null,!1),l,c,r,n),d=this.buildBinary(t,s,e,u,h,a||o);return (a&&this.type===Yn.coalesce||o&&(this.type===Yn.logicalOR||this.type===Yn.logicalAND))&&this.raiseRecoverable(this.start,"Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"),this.parseExprOp(d,t,s,i,n)}return e},kr.buildBinary=function(e,t,s,i,n,r){var a=this.startNodeAt(e,t);return a.left=s,a.operator=n,a.right=i,this.finishNode(a,r?"LogicalExpression":"BinaryExpression")},kr.parseMaybeUnary=function(e,t){var s,i=this.start,n=this.startLoc;if(this.isContextual("await")&&(this.inAsync||!this.inFunction&&this.options.allowAwaitOutsideFunction))s=this.parseAwait(),t=!0;else if(this.type.prefix){var r=this.startNode(),a=this.type===Yn.incDec;r.operator=this.value,r.prefix=!0,this.next(),r.argument=this.parseMaybeUnary(null,!0),this.checkExpressionErrors(e,!0),a?this.checkLVal(r.argument):this.strict&&"delete"===r.operator&&"Identifier"===r.argument.type?this.raiseRecoverable(r.start,"Deleting local variable in strict mode"):t=!0,s=this.finishNode(r,a?"UpdateExpression":"UnaryExpression");}else {if(s=this.parseExprSubscripts(e),this.checkExpressionErrors(e))return s;for(;this.type.postfix&&!this.canInsertSemicolon();){var o=this.startNodeAt(i,n);o.operator=this.value,o.prefix=!1,o.argument=s,this.checkLVal(s),this.next(),s=this.finishNode(o,"UpdateExpression");}}return !t&&this.eat(Yn.starstar)?this.buildBinary(i,n,s,this.parseMaybeUnary(null,!1),"**",!1):s},kr.parseExprSubscripts=function(e){var t=this.start,s=this.startLoc,i=this.parseExprAtom(e);if("ArrowFunctionExpression"===i.type&&")"!==this.input.slice(this.lastTokStart,this.lastTokEnd))return i;var n=this.parseSubscripts(i,t,s);return e&&"MemberExpression"===n.type&&(e.parenthesizedAssign>=n.start&&(e.parenthesizedAssign=-1),e.parenthesizedBind>=n.start&&(e.parenthesizedBind=-1)),n},kr.parseSubscripts=function(e,t,s,i){for(var n=this.options.ecmaVersion>=8&&"Identifier"===e.type&&"async"===e.name&&this.lastTokEnd===e.end&&!this.canInsertSemicolon()&&e.end-e.start==5&&this.potentialArrowAt===e.start,r=!1;;){var a=this.parseSubscript(e,t,s,i,n,r);if(a.optional&&(r=!0),a===e||"ArrowFunctionExpression"===a.type){if(r){var o=this.startNodeAt(t,s);o.expression=a,a=this.finishNode(o,"ChainExpression");}return a}e=a;}},kr.parseSubscript=function(e,t,s,i,n,r){var a=this.options.ecmaVersion>=11,o=a&&this.eat(Yn.questionDot);i&&o&&this.raise(this.lastTokStart,"Optional chaining cannot appear in the callee of new expressions");var h=this.eat(Yn.bracketL);if(h||o&&this.type!==Yn.parenL&&this.type!==Yn.backQuote||this.eat(Yn.dot)){var l=this.startNodeAt(t,s);l.object=e,l.property=h?this.parseExpression():this.parseIdent("never"!==this.options.allowReserved),l.computed=!!h,h&&this.expect(Yn.bracketR),a&&(l.optional=o),e=this.finishNode(l,"MemberExpression");}else if(!i&&this.eat(Yn.parenL)){var c=new xr,u=this.yieldPos,d=this.awaitPos,p=this.awaitIdentPos;this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0;var f=this.parseExprList(Yn.parenR,this.options.ecmaVersion>=8,!1,c);if(n&&!o&&!this.canInsertSemicolon()&&this.eat(Yn.arrow))return this.checkPatternErrors(c,!1),this.checkYieldAwaitInDefaultParams(),this.awaitIdentPos>0&&this.raise(this.awaitIdentPos,"Cannot use 'await' as identifier inside an async function"),this.yieldPos=u,this.awaitPos=d,this.awaitIdentPos=p,this.parseArrowExpression(this.startNodeAt(t,s),f,!0);this.checkExpressionErrors(c,!0),this.yieldPos=u||this.yieldPos,this.awaitPos=d||this.awaitPos,this.awaitIdentPos=p||this.awaitIdentPos;var m=this.startNodeAt(t,s);m.callee=e,m.arguments=f,a&&(m.optional=o),e=this.finishNode(m,"CallExpression");}else if(this.type===Yn.backQuote){(o||r)&&this.raise(this.start,"Optional chaining cannot appear in the tag of tagged template expressions");var g=this.startNodeAt(t,s);g.tag=e,g.quasi=this.parseTemplate({isTagged:!0}),e=this.finishNode(g,"TaggedTemplateExpression");}return e},kr.parseExprAtom=function(e){this.type===Yn.slash&&this.readRegexp();var t,s=this.potentialArrowAt===this.start;switch(this.type){case Yn._super:return this.allowSuper||this.raise(this.start,"'super' keyword outside a method"),t=this.startNode(),this.next(),this.type!==Yn.parenL||this.allowDirectSuper||this.raise(t.start,"super() call outside constructor of a subclass"),this.type!==Yn.dot&&this.type!==Yn.bracketL&&this.type!==Yn.parenL&&this.unexpected(),this.finishNode(t,"Super");case Yn._this:return t=this.startNode(),this.next(),this.finishNode(t,"ThisExpression");case Yn.name:var i=this.start,n=this.startLoc,r=this.containsEsc,a=this.parseIdent(!1);if(this.options.ecmaVersion>=8&&!r&&"async"===a.name&&!this.canInsertSemicolon()&&this.eat(Yn._function))return this.parseFunction(this.startNodeAt(i,n),0,!1,!0);if(s&&!this.canInsertSemicolon()){if(this.eat(Yn.arrow))return this.parseArrowExpression(this.startNodeAt(i,n),[a],!1);if(this.options.ecmaVersion>=8&&"async"===a.name&&this.type===Yn.name&&!r)return a=this.parseIdent(!1),!this.canInsertSemicolon()&&this.eat(Yn.arrow)||this.unexpected(),this.parseArrowExpression(this.startNodeAt(i,n),[a],!0)}return a;case Yn.regexp:var o=this.value;return (t=this.parseLiteral(o.value)).regex={pattern:o.pattern,flags:o.flags},t;case Yn.num:case Yn.string:return this.parseLiteral(this.value);case Yn._null:case Yn._true:case Yn._false:return (t=this.startNode()).value=this.type===Yn._null?null:this.type===Yn._true,t.raw=this.type.keyword,this.next(),this.finishNode(t,"Literal");case Yn.parenL:var h=this.start,l=this.parseParenAndDistinguishExpression(s);return e&&(e.parenthesizedAssign<0&&!this.isSimpleAssignTarget(l)&&(e.parenthesizedAssign=h),e.parenthesizedBind<0&&(e.parenthesizedBind=h)),l;case Yn.bracketL:return t=this.startNode(),this.next(),t.elements=this.parseExprList(Yn.bracketR,!0,!0,e),this.finishNode(t,"ArrayExpression");case Yn.braceL:return this.parseObj(!1,e);case Yn._function:return t=this.startNode(),this.next(),this.parseFunction(t,0);case Yn._class:return this.parseClass(this.startNode(),!1);case Yn._new:return this.parseNew();case Yn.backQuote:return this.parseTemplate();case Yn._import:return this.options.ecmaVersion>=11?this.parseExprImport():this.unexpected();default:this.unexpected();}},kr.parseExprImport=function(){var e=this.startNode();this.containsEsc&&this.raiseRecoverable(this.start,"Escape sequence in keyword import");var t=this.parseIdent(!0);switch(this.type){case Yn.parenL:return this.parseDynamicImport(e);case Yn.dot:return e.meta=t,this.parseImportMeta(e);default:this.unexpected();}},kr.parseDynamicImport=function(e){if(this.next(),e.source=this.parseMaybeAssign(),!this.eat(Yn.parenR)){var t=this.start;this.eat(Yn.comma)&&this.eat(Yn.parenR)?this.raiseRecoverable(t,"Trailing comma is not allowed in import()"):this.unexpected(t);}return this.finishNode(e,"ImportExpression")},kr.parseImportMeta=function(e){this.next();var t=this.containsEsc;return e.property=this.parseIdent(!0),"meta"!==e.property.name&&this.raiseRecoverable(e.property.start,"The only valid meta property for import is 'import.meta'"),t&&this.raiseRecoverable(e.start,"'import.meta' must not contain escaped characters"),"module"!==this.options.sourceType&&this.raiseRecoverable(e.start,"Cannot use 'import.meta' outside a module"),this.finishNode(e,"MetaProperty")},kr.parseLiteral=function(e){var t=this.startNode();return t.value=e,t.raw=this.input.slice(this.start,this.end),110===t.raw.charCodeAt(t.raw.length-1)&&(t.bigint=t.raw.slice(0,-1)),this.next(),this.finishNode(t,"Literal")},kr.parseParenExpression=function(){this.expect(Yn.parenL);var e=this.parseExpression();return this.expect(Yn.parenR),e},kr.parseParenAndDistinguishExpression=function(e){var t,s=this.start,i=this.startLoc,n=this.options.ecmaVersion>=8;if(this.options.ecmaVersion>=6){this.next();var r,a=this.start,o=this.startLoc,h=[],l=!0,c=!1,u=new xr,d=this.yieldPos,p=this.awaitPos;for(this.yieldPos=0,this.awaitPos=0;this.type!==Yn.parenR;){if(l?l=!1:this.expect(Yn.comma),n&&this.afterTrailingComma(Yn.parenR,!0)){c=!0;break}if(this.type===Yn.ellipsis){r=this.start,h.push(this.parseParenItem(this.parseRestBinding())),this.type===Yn.comma&&this.raise(this.start,"Comma is not permitted after the rest element");break}h.push(this.parseMaybeAssign(!1,u,this.parseParenItem));}var f=this.start,m=this.startLoc;if(this.expect(Yn.parenR),e&&!this.canInsertSemicolon()&&this.eat(Yn.arrow))return this.checkPatternErrors(u,!1),this.checkYieldAwaitInDefaultParams(),this.yieldPos=d,this.awaitPos=p,this.parseParenArrowList(s,i,h);h.length&&!c||this.unexpected(this.lastTokStart),r&&this.unexpected(r),this.checkExpressionErrors(u,!0),this.yieldPos=d||this.yieldPos,this.awaitPos=p||this.awaitPos,h.length>1?((t=this.startNodeAt(a,o)).expressions=h,this.finishNodeAt(t,"SequenceExpression",f,m)):t=h[0];}else t=this.parseParenExpression();if(this.options.preserveParens){var g=this.startNodeAt(s,i);return g.expression=t,this.finishNode(g,"ParenthesizedExpression")}return t},kr.parseParenItem=function(e){return e},kr.parseParenArrowList=function(e,t,s){return this.parseArrowExpression(this.startNodeAt(e,t),s)};var wr=[];kr.parseNew=function(){this.containsEsc&&this.raiseRecoverable(this.start,"Escape sequence in keyword new");var e=this.startNode(),t=this.parseIdent(!0);if(this.options.ecmaVersion>=6&&this.eat(Yn.dot)){e.meta=t;var s=this.containsEsc;return e.property=this.parseIdent(!0),"target"!==e.property.name&&this.raiseRecoverable(e.property.start,"The only valid meta property for new is 'new.target'"),s&&this.raiseRecoverable(e.start,"'new.target' must not contain escaped characters"),this.inNonArrowFunction()||this.raiseRecoverable(e.start,"'new.target' can only be used in functions"),this.finishNode(e,"MetaProperty")}var i=this.start,n=this.startLoc,r=this.type===Yn._import;return e.callee=this.parseSubscripts(this.parseExprAtom(),i,n,!0),r&&"ImportExpression"===e.callee.type&&this.raise(i,"Cannot use new with import()"),this.eat(Yn.parenL)?e.arguments=this.parseExprList(Yn.parenR,this.options.ecmaVersion>=8,!1):e.arguments=wr,this.finishNode(e,"NewExpression")},kr.parseTemplateElement=function(e){var t=e.isTagged,s=this.startNode();return this.type===Yn.invalidTemplate?(t||this.raiseRecoverable(this.start,"Bad escape sequence in untagged template literal"),s.value={raw:this.value,cooked:null}):s.value={raw:this.input.slice(this.start,this.end).replace(/\r\n?/g,"\n"),cooked:this.value},this.next(),s.tail=this.type===Yn.backQuote,this.finishNode(s,"TemplateElement")},kr.parseTemplate=function(e){void 0===e&&(e={});var t=e.isTagged;void 0===t&&(t=!1);var s=this.startNode();this.next(),s.expressions=[];var i=this.parseTemplateElement({isTagged:t});for(s.quasis=[i];!i.tail;)this.type===Yn.eof&&this.raise(this.pos,"Unterminated template literal"),this.expect(Yn.dollarBraceL),s.expressions.push(this.parseExpression()),this.expect(Yn.braceR),s.quasis.push(i=this.parseTemplateElement({isTagged:t}));return this.next(),this.finishNode(s,"TemplateLiteral")},kr.isAsyncProp=function(e){return !e.computed&&"Identifier"===e.key.type&&"async"===e.key.name&&(this.type===Yn.name||this.type===Yn.num||this.type===Yn.string||this.type===Yn.bracketL||this.type.keyword||this.options.ecmaVersion>=9&&this.type===Yn.star)&&!Qn.test(this.input.slice(this.lastTokEnd,this.start))},kr.parseObj=function(e,t){var s=this.startNode(),i=!0,n={};for(s.properties=[],this.next();!this.eat(Yn.braceR);){if(i)i=!1;else if(this.expect(Yn.comma),this.options.ecmaVersion>=5&&this.afterTrailingComma(Yn.braceR))break;var r=this.parseProperty(e,t);e||this.checkPropClash(r,n,t),s.properties.push(r);}return this.finishNode(s,e?"ObjectPattern":"ObjectExpression")},kr.parseProperty=function(e,t){var s,i,n,r,a=this.startNode();if(this.options.ecmaVersion>=9&&this.eat(Yn.ellipsis))return e?(a.argument=this.parseIdent(!1),this.type===Yn.comma&&this.raise(this.start,"Comma is not permitted after the rest element"),this.finishNode(a,"RestElement")):(this.type===Yn.parenL&&t&&(t.parenthesizedAssign<0&&(t.parenthesizedAssign=this.start),t.parenthesizedBind<0&&(t.parenthesizedBind=this.start)),a.argument=this.parseMaybeAssign(!1,t),this.type===Yn.comma&&t&&t.trailingComma<0&&(t.trailingComma=this.start),this.finishNode(a,"SpreadElement"));this.options.ecmaVersion>=6&&(a.method=!1,a.shorthand=!1,(e||t)&&(n=this.start,r=this.startLoc),e||(s=this.eat(Yn.star)));var o=this.containsEsc;return this.parsePropertyName(a),!e&&!o&&this.options.ecmaVersion>=8&&!s&&this.isAsyncProp(a)?(i=!0,s=this.options.ecmaVersion>=9&&this.eat(Yn.star),this.parsePropertyName(a,t)):i=!1,this.parsePropertyValue(a,e,s,i,n,r,t,o),this.finishNode(a,"Property")},kr.parsePropertyValue=function(e,t,s,i,n,r,a,o){if((s||i)&&this.type===Yn.colon&&this.unexpected(),this.eat(Yn.colon))e.value=t?this.parseMaybeDefault(this.start,this.startLoc):this.parseMaybeAssign(!1,a),e.kind="init";else if(this.options.ecmaVersion>=6&&this.type===Yn.parenL)t&&this.unexpected(),e.kind="init",e.method=!0,e.value=this.parseMethod(s,i);else if(t||o||!(this.options.ecmaVersion>=5)||e.computed||"Identifier"!==e.key.type||"get"!==e.key.name&&"set"!==e.key.name||this.type===Yn.comma||this.type===Yn.braceR||this.type===Yn.eq)this.options.ecmaVersion>=6&&!e.computed&&"Identifier"===e.key.type?((s||i)&&this.unexpected(),this.checkUnreserved(e.key),"await"!==e.key.name||this.awaitIdentPos||(this.awaitIdentPos=n),e.kind="init",t?e.value=this.parseMaybeDefault(n,r,e.key):this.type===Yn.eq&&a?(a.shorthandAssign<0&&(a.shorthandAssign=this.start),e.value=this.parseMaybeDefault(n,r,e.key)):e.value=e.key,e.shorthand=!0):this.unexpected();else {(s||i)&&this.unexpected(),e.kind=e.key.name,this.parsePropertyName(e),e.value=this.parseMethod(!1);var h="get"===e.kind?0:1;if(e.value.params.length!==h){var l=e.value.start;"get"===e.kind?this.raiseRecoverable(l,"getter should have no params"):this.raiseRecoverable(l,"setter should have exactly one param");}else "set"===e.kind&&"RestElement"===e.value.params[0].type&&this.raiseRecoverable(e.value.params[0].start,"Setter cannot use rest params");}},kr.parsePropertyName=function(e){if(this.options.ecmaVersion>=6){if(this.eat(Yn.bracketL))return e.computed=!0,e.key=this.parseMaybeAssign(),this.expect(Yn.bracketR),e.key;e.computed=!1;}return e.key=this.type===Yn.num||this.type===Yn.string?this.parseExprAtom():this.parseIdent("never"!==this.options.allowReserved)},kr.initFunction=function(e){e.id=null,this.options.ecmaVersion>=6&&(e.generator=e.expression=!1),this.options.ecmaVersion>=8&&(e.async=!1);},kr.parseMethod=function(e,t,s){var i=this.startNode(),n=this.yieldPos,r=this.awaitPos,a=this.awaitIdentPos;return this.initFunction(i),this.options.ecmaVersion>=6&&(i.generator=e),this.options.ecmaVersion>=8&&(i.async=!!t),this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,this.enterScope(64|pr(t,i.generator)|(s?128:0)),this.expect(Yn.parenL),i.params=this.parseBindingList(Yn.parenR,!1,this.options.ecmaVersion>=8),this.checkYieldAwaitInDefaultParams(),this.parseFunctionBody(i,!1,!0),this.yieldPos=n,this.awaitPos=r,this.awaitIdentPos=a,this.finishNode(i,"FunctionExpression")},kr.parseArrowExpression=function(e,t,s){var i=this.yieldPos,n=this.awaitPos,r=this.awaitIdentPos;return this.enterScope(16|pr(s,!1)),this.initFunction(e),this.options.ecmaVersion>=8&&(e.async=!!s),this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,e.params=this.toAssignableList(t,!0),this.parseFunctionBody(e,!0,!1),this.yieldPos=i,this.awaitPos=n,this.awaitIdentPos=r,this.finishNode(e,"ArrowFunctionExpression")},kr.parseFunctionBody=function(e,t,s){var i=t&&this.type!==Yn.braceL,n=this.strict,r=!1;if(i)e.body=this.parseMaybeAssign(),e.expression=!0,this.checkParams(e,!1);else {var a=this.options.ecmaVersion>=7&&!this.isSimpleParamList(e.params);n&&!a||(r=this.strictDirective(this.end))&&a&&this.raiseRecoverable(e.start,"Illegal 'use strict' directive in function with non-simple parameter list");var o=this.labels;this.labels=[],r&&(this.strict=!0),this.checkParams(e,!n&&!r&&!t&&!s&&this.isSimpleParamList(e.params)),this.strict&&e.id&&this.checkLVal(e.id,5),e.body=this.parseBlock(!1,void 0,r&&!n),e.expression=!1,this.adaptDirectivePrologue(e.body.body),this.labels=o;}this.exitScope();},kr.isSimpleParamList=function(e){for(var t=0,s=e;t<s.length;t+=1){if("Identifier"!==s[t].type)return !1}return !0},kr.checkParams=function(e,t){for(var s={},i=0,n=e.params;i<n.length;i+=1){var r=n[i];this.checkLVal(r,1,t?null:s);}},kr.parseExprList=function(e,t,s,i){for(var n=[],r=!0;!this.eat(e);){if(r)r=!1;else if(this.expect(Yn.comma),t&&this.afterTrailingComma(e))break;var a=void 0;s&&this.type===Yn.comma?a=null:this.type===Yn.ellipsis?(a=this.parseSpread(i),i&&this.type===Yn.comma&&i.trailingComma<0&&(i.trailingComma=this.start)):a=this.parseMaybeAssign(!1,i),n.push(a);}return n},kr.checkUnreserved=function(e){var t=e.start,s=e.end,i=e.name;(this.inGenerator&&"yield"===i&&this.raiseRecoverable(t,"Cannot use 'yield' as identifier inside a generator"),this.inAsync&&"await"===i&&this.raiseRecoverable(t,"Cannot use 'await' as identifier inside an async function"),this.keywords.test(i)&&this.raise(t,"Unexpected keyword '"+i+"'"),this.options.ecmaVersion<6&&-1!==this.input.slice(t,s).indexOf("\\"))||(this.strict?this.reservedWordsStrict:this.reservedWords).test(i)&&(this.inAsync||"await"!==i||this.raiseRecoverable(t,"Cannot use keyword 'await' outside an async function"),this.raiseRecoverable(t,"The keyword '"+i+"' is reserved"));},kr.parseIdent=function(e,t){var s=this.startNode();return this.type===Yn.name?s.name=this.value:this.type.keyword?(s.name=this.type.keyword,"class"!==s.name&&"function"!==s.name||this.lastTokEnd===this.lastTokStart+1&&46===this.input.charCodeAt(this.lastTokStart)||this.context.pop()):this.unexpected(),this.next(!!e),this.finishNode(s,"Identifier"),e||(this.checkUnreserved(s),"await"!==s.name||this.awaitIdentPos||(this.awaitIdentPos=s.start)),s},kr.parseYield=function(e){this.yieldPos||(this.yieldPos=this.start);var t=this.startNode();return this.next(),this.type===Yn.semi||this.canInsertSemicolon()||this.type!==Yn.star&&!this.type.startsExpr?(t.delegate=!1,t.argument=null):(t.delegate=this.eat(Yn.star),t.argument=this.parseMaybeAssign(e)),this.finishNode(t,"YieldExpression")},kr.parseAwait=function(){this.awaitPos||(this.awaitPos=this.start);var e=this.startNode();return this.next(),e.argument=this.parseMaybeUnary(null,!1),this.finishNode(e,"AwaitExpression")};var Nr=fr.prototype;Nr.raise=function(e,t){var s=cr(this.input,e);t+=" ("+s.line+":"+s.column+")";var i=new SyntaxError(t);throw i.pos=e,i.loc=s,i.raisedAt=this.pos,i},Nr.raiseRecoverable=Nr.raise,Nr.curPosition=function(){if(this.options.locations)return new hr(this.curLine,this.pos-this.lineStart)};var _r=fr.prototype,Ir=function(e){this.flags=e,this.var=[],this.lexical=[],this.functions=[];};_r.enterScope=function(e){this.scopeStack.push(new Ir(e));},_r.exitScope=function(){this.scopeStack.pop();},_r.treatFunctionsAsVarInScope=function(e){return 2&e.flags||!this.inModule&&1&e.flags},_r.declareName=function(e,t,s){var i=!1;if(2===t){var n=this.currentScope();i=n.lexical.indexOf(e)>-1||n.functions.indexOf(e)>-1||n.var.indexOf(e)>-1,n.lexical.push(e),this.inModule&&1&n.flags&&delete this.undefinedExports[e];}else if(4===t){this.currentScope().lexical.push(e);}else if(3===t){var r=this.currentScope();i=this.treatFunctionsAsVar?r.lexical.indexOf(e)>-1:r.lexical.indexOf(e)>-1||r.var.indexOf(e)>-1,r.functions.push(e);}else for(var a=this.scopeStack.length-1;a>=0;--a){var o=this.scopeStack[a];if(o.lexical.indexOf(e)>-1&&!(32&o.flags&&o.lexical[0]===e)||!this.treatFunctionsAsVarInScope(o)&&o.functions.indexOf(e)>-1){i=!0;break}if(o.var.push(e),this.inModule&&1&o.flags&&delete this.undefinedExports[e],3&o.flags)break}i&&this.raiseRecoverable(s,"Identifier '"+e+"' has already been declared");},_r.checkLocalExport=function(e){-1===this.scopeStack[0].lexical.indexOf(e.name)&&-1===this.scopeStack[0].var.indexOf(e.name)&&(this.undefinedExports[e.name]=e);},_r.currentScope=function(){return this.scopeStack[this.scopeStack.length-1]},_r.currentVarScope=function(){for(var e=this.scopeStack.length-1;;e--){var t=this.scopeStack[e];if(3&t.flags)return t}},_r.currentThisScope=function(){for(var e=this.scopeStack.length-1;;e--){var t=this.scopeStack[e];if(3&t.flags&&!(16&t.flags))return t}};var $r=function(e,t,s){this.type="",this.start=t,this.end=0,e.options.locations&&(this.loc=new lr(e,s)),e.options.directSourceFile&&(this.sourceFile=e.options.directSourceFile),e.options.ranges&&(this.range=[t,0]);},Tr=fr.prototype;function Mr(e,t,s,i){return e.type=t,e.end=s,this.options.locations&&(e.loc.end=i),this.options.ranges&&(e.range[1]=s),e}Tr.startNode=function(){return new $r(this,this.start,this.startLoc)},Tr.startNodeAt=function(e,t){return new $r(this,e,t)},Tr.finishNode=function(e,t){return Mr.call(this,e,t,this.lastTokEnd,this.lastTokEndLoc)},Tr.finishNodeAt=function(e,t,s,i){return Mr.call(this,e,t,s,i)};var Lr=function(e,t,s,i,n){this.token=e,this.isExpr=!!t,this.preserveSpace=!!s,this.override=i,this.generator=!!n;},Rr={b_stat:new Lr("{",!1),b_expr:new Lr("{",!0),b_tmpl:new Lr("${",!1),p_stat:new Lr("(",!1),p_expr:new Lr("(",!0),q_tmpl:new Lr("`",!0,!0,(function(e){return e.tryReadTemplateToken()})),f_stat:new Lr("function",!1),f_expr:new Lr("function",!0),f_expr_gen:new Lr("function",!0,!1,null,!0),f_gen:new Lr("function",!1,!1,null,!0)},Or=fr.prototype;Or.initialContext=function(){return [Rr.b_stat]},Or.braceIsBlock=function(e){var t=this.curContext();return t===Rr.f_expr||t===Rr.f_stat||(e!==Yn.colon||t!==Rr.b_stat&&t!==Rr.b_expr?e===Yn._return||e===Yn.name&&this.exprAllowed?Qn.test(this.input.slice(this.lastTokEnd,this.start)):e===Yn._else||e===Yn.semi||e===Yn.eof||e===Yn.parenR||e===Yn.arrow||(e===Yn.braceL?t===Rr.b_stat:e!==Yn._var&&e!==Yn._const&&e!==Yn.name&&!this.exprAllowed):!t.isExpr)},Or.inGeneratorContext=function(){for(var e=this.context.length-1;e>=1;e--){var t=this.context[e];if("function"===t.token)return t.generator}return !1},Or.updateContext=function(e){var t,s=this.type;s.keyword&&e===Yn.dot?this.exprAllowed=!1:(t=s.updateContext)?t.call(this,e):this.exprAllowed=s.beforeExpr;},Yn.parenR.updateContext=Yn.braceR.updateContext=function(){if(1!==this.context.length){var e=this.context.pop();e===Rr.b_stat&&"function"===this.curContext().token&&(e=this.context.pop()),this.exprAllowed=!e.isExpr;}else this.exprAllowed=!0;},Yn.braceL.updateContext=function(e){this.context.push(this.braceIsBlock(e)?Rr.b_stat:Rr.b_expr),this.exprAllowed=!0;},Yn.dollarBraceL.updateContext=function(){this.context.push(Rr.b_tmpl),this.exprAllowed=!0;},Yn.parenL.updateContext=function(e){var t=e===Yn._if||e===Yn._for||e===Yn._with||e===Yn._while;this.context.push(t?Rr.p_stat:Rr.p_expr),this.exprAllowed=!0;},Yn.incDec.updateContext=function(){},Yn._function.updateContext=Yn._class.updateContext=function(e){!e.beforeExpr||e===Yn.semi||e===Yn._else||e===Yn._return&&Qn.test(this.input.slice(this.lastTokEnd,this.start))||(e===Yn.colon||e===Yn.braceL)&&this.curContext()===Rr.b_stat?this.context.push(Rr.f_stat):this.context.push(Rr.f_expr),this.exprAllowed=!1;},Yn.backQuote.updateContext=function(){this.curContext()===Rr.q_tmpl?this.context.pop():this.context.push(Rr.q_tmpl),this.exprAllowed=!1;},Yn.star.updateContext=function(e){if(e===Yn._function){var t=this.context.length-1;this.context[t]===Rr.f_expr?this.context[t]=Rr.f_expr_gen:this.context[t]=Rr.f_gen;}this.exprAllowed=!0;},Yn.name.updateContext=function(e){var t=!1;this.options.ecmaVersion>=6&&e!==Yn.dot&&("of"===this.value&&!this.exprAllowed||"yield"===this.value&&this.inGeneratorContext())&&(t=!0),this.exprAllowed=t;};var Dr="ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",Vr=Dr+" Extended_Pictographic",Br={9:Dr,10:Vr,11:"ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic"},Fr="Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",Wr="Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",Ur=Wr+" Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",zr={9:Wr,10:Ur,11:"Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho"},jr={};function Gr(e){var t=jr[e]={binary:or(Br[e]+" "+Fr),nonBinary:{General_Category:or(Fr),Script:or(zr[e])}};t.nonBinary.Script_Extensions=t.nonBinary.Script,t.nonBinary.gc=t.nonBinary.General_Category,t.nonBinary.sc=t.nonBinary.Script,t.nonBinary.scx=t.nonBinary.Script_Extensions;}Gr(9),Gr(10),Gr(11);var Hr=fr.prototype,qr=function(e){this.parser=e,this.validFlags="gim"+(e.options.ecmaVersion>=6?"uy":"")+(e.options.ecmaVersion>=9?"s":""),this.unicodeProperties=jr[e.options.ecmaVersion>=11?11:e.options.ecmaVersion],this.source="",this.flags="",this.start=0,this.switchU=!1,this.switchN=!1,this.pos=0,this.lastIntValue=0,this.lastStringValue="",this.lastAssertionIsQuantifiable=!1,this.numCapturingParens=0,this.maxBackReference=0,this.groupNames=[],this.backReferenceNames=[];};function Kr(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(55296+(e>>10),56320+(1023&e)))}function Xr(e){return 36===e||e>=40&&e<=43||46===e||63===e||e>=91&&e<=94||e>=123&&e<=125}function Yr(e){return e>=65&&e<=90||e>=97&&e<=122}function Qr(e){return Yr(e)||95===e}function Jr(e){return Qr(e)||Zr(e)}function Zr(e){return e>=48&&e<=57}function ea(e){return e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102}function ta(e){return e>=65&&e<=70?e-65+10:e>=97&&e<=102?e-97+10:e-48}function sa(e){return e>=48&&e<=55}qr.prototype.reset=function(e,t,s){var i=-1!==s.indexOf("u");this.start=0|e,this.source=t+"",this.flags=s,this.switchU=i&&this.parser.options.ecmaVersion>=6,this.switchN=i&&this.parser.options.ecmaVersion>=9;},qr.prototype.raise=function(e){this.parser.raiseRecoverable(this.start,"Invalid regular expression: /"+this.source+"/: "+e);},qr.prototype.at=function(e,t){void 0===t&&(t=!1);var s=this.source,i=s.length;if(e>=i)return -1;var n=s.charCodeAt(e);if(!t&&!this.switchU||n<=55295||n>=57344||e+1>=i)return n;var r=s.charCodeAt(e+1);return r>=56320&&r<=57343?(n<<10)+r-56613888:n},qr.prototype.nextIndex=function(e,t){void 0===t&&(t=!1);var s=this.source,i=s.length;if(e>=i)return i;var n,r=s.charCodeAt(e);return !t&&!this.switchU||r<=55295||r>=57344||e+1>=i||(n=s.charCodeAt(e+1))<56320||n>57343?e+1:e+2},qr.prototype.current=function(e){return void 0===e&&(e=!1),this.at(this.pos,e)},qr.prototype.lookahead=function(e){return void 0===e&&(e=!1),this.at(this.nextIndex(this.pos,e),e)},qr.prototype.advance=function(e){void 0===e&&(e=!1),this.pos=this.nextIndex(this.pos,e);},qr.prototype.eat=function(e,t){return void 0===t&&(t=!1),this.current(t)===e&&(this.advance(t),!0)},Hr.validateRegExpFlags=function(e){for(var t=e.validFlags,s=e.flags,i=0;i<s.length;i++){var n=s.charAt(i);-1===t.indexOf(n)&&this.raise(e.start,"Invalid regular expression flag"),s.indexOf(n,i+1)>-1&&this.raise(e.start,"Duplicate regular expression flag");}},Hr.validateRegExpPattern=function(e){this.regexp_pattern(e),!e.switchN&&this.options.ecmaVersion>=9&&e.groupNames.length>0&&(e.switchN=!0,this.regexp_pattern(e));},Hr.regexp_pattern=function(e){e.pos=0,e.lastIntValue=0,e.lastStringValue="",e.lastAssertionIsQuantifiable=!1,e.numCapturingParens=0,e.maxBackReference=0,e.groupNames.length=0,e.backReferenceNames.length=0,this.regexp_disjunction(e),e.pos!==e.source.length&&(e.eat(41)&&e.raise("Unmatched ')'"),(e.eat(93)||e.eat(125))&&e.raise("Lone quantifier brackets")),e.maxBackReference>e.numCapturingParens&&e.raise("Invalid escape");for(var t=0,s=e.backReferenceNames;t<s.length;t+=1){var i=s[t];-1===e.groupNames.indexOf(i)&&e.raise("Invalid named capture referenced");}},Hr.regexp_disjunction=function(e){for(this.regexp_alternative(e);e.eat(124);)this.regexp_alternative(e);this.regexp_eatQuantifier(e,!0)&&e.raise("Nothing to repeat"),e.eat(123)&&e.raise("Lone quantifier brackets");},Hr.regexp_alternative=function(e){for(;e.pos<e.source.length&&this.regexp_eatTerm(e););},Hr.regexp_eatTerm=function(e){return this.regexp_eatAssertion(e)?(e.lastAssertionIsQuantifiable&&this.regexp_eatQuantifier(e)&&e.switchU&&e.raise("Invalid quantifier"),!0):!!(e.switchU?this.regexp_eatAtom(e):this.regexp_eatExtendedAtom(e))&&(this.regexp_eatQuantifier(e),!0)},Hr.regexp_eatAssertion=function(e){var t=e.pos;if(e.lastAssertionIsQuantifiable=!1,e.eat(94)||e.eat(36))return !0;if(e.eat(92)){if(e.eat(66)||e.eat(98))return !0;e.pos=t;}if(e.eat(40)&&e.eat(63)){var s=!1;if(this.options.ecmaVersion>=9&&(s=e.eat(60)),e.eat(61)||e.eat(33))return this.regexp_disjunction(e),e.eat(41)||e.raise("Unterminated group"),e.lastAssertionIsQuantifiable=!s,!0}return e.pos=t,!1},Hr.regexp_eatQuantifier=function(e,t){return void 0===t&&(t=!1),!!this.regexp_eatQuantifierPrefix(e,t)&&(e.eat(63),!0)},Hr.regexp_eatQuantifierPrefix=function(e,t){return e.eat(42)||e.eat(43)||e.eat(63)||this.regexp_eatBracedQuantifier(e,t)},Hr.regexp_eatBracedQuantifier=function(e,t){var s=e.pos;if(e.eat(123)){var i=0,n=-1;if(this.regexp_eatDecimalDigits(e)&&(i=e.lastIntValue,e.eat(44)&&this.regexp_eatDecimalDigits(e)&&(n=e.lastIntValue),e.eat(125)))return -1!==n&&n<i&&!t&&e.raise("numbers out of order in {} quantifier"),!0;e.switchU&&!t&&e.raise("Incomplete quantifier"),e.pos=s;}return !1},Hr.regexp_eatAtom=function(e){return this.regexp_eatPatternCharacters(e)||e.eat(46)||this.regexp_eatReverseSolidusAtomEscape(e)||this.regexp_eatCharacterClass(e)||this.regexp_eatUncapturingGroup(e)||this.regexp_eatCapturingGroup(e)},Hr.regexp_eatReverseSolidusAtomEscape=function(e){var t=e.pos;if(e.eat(92)){if(this.regexp_eatAtomEscape(e))return !0;e.pos=t;}return !1},Hr.regexp_eatUncapturingGroup=function(e){var t=e.pos;if(e.eat(40)){if(e.eat(63)&&e.eat(58)){if(this.regexp_disjunction(e),e.eat(41))return !0;e.raise("Unterminated group");}e.pos=t;}return !1},Hr.regexp_eatCapturingGroup=function(e){if(e.eat(40)){if(this.options.ecmaVersion>=9?this.regexp_groupSpecifier(e):63===e.current()&&e.raise("Invalid group"),this.regexp_disjunction(e),e.eat(41))return e.numCapturingParens+=1,!0;e.raise("Unterminated group");}return !1},Hr.regexp_eatExtendedAtom=function(e){return e.eat(46)||this.regexp_eatReverseSolidusAtomEscape(e)||this.regexp_eatCharacterClass(e)||this.regexp_eatUncapturingGroup(e)||this.regexp_eatCapturingGroup(e)||this.regexp_eatInvalidBracedQuantifier(e)||this.regexp_eatExtendedPatternCharacter(e)},Hr.regexp_eatInvalidBracedQuantifier=function(e){return this.regexp_eatBracedQuantifier(e,!0)&&e.raise("Nothing to repeat"),!1},Hr.regexp_eatSyntaxCharacter=function(e){var t=e.current();return !!Xr(t)&&(e.lastIntValue=t,e.advance(),!0)},Hr.regexp_eatPatternCharacters=function(e){for(var t=e.pos,s=0;-1!==(s=e.current())&&!Xr(s);)e.advance();return e.pos!==t},Hr.regexp_eatExtendedPatternCharacter=function(e){var t=e.current();return !(-1===t||36===t||t>=40&&t<=43||46===t||63===t||91===t||94===t||124===t)&&(e.advance(),!0)},Hr.regexp_groupSpecifier=function(e){if(e.eat(63)){if(this.regexp_eatGroupName(e))return -1!==e.groupNames.indexOf(e.lastStringValue)&&e.raise("Duplicate capture group name"),void e.groupNames.push(e.lastStringValue);e.raise("Invalid group");}},Hr.regexp_eatGroupName=function(e){if(e.lastStringValue="",e.eat(60)){if(this.regexp_eatRegExpIdentifierName(e)&&e.eat(62))return !0;e.raise("Invalid capture group name");}return !1},Hr.regexp_eatRegExpIdentifierName=function(e){if(e.lastStringValue="",this.regexp_eatRegExpIdentifierStart(e)){for(e.lastStringValue+=Kr(e.lastIntValue);this.regexp_eatRegExpIdentifierPart(e);)e.lastStringValue+=Kr(e.lastIntValue);return !0}return !1},Hr.regexp_eatRegExpIdentifierStart=function(e){var t=e.pos,s=this.options.ecmaVersion>=11,i=e.current(s);return e.advance(s),92===i&&this.regexp_eatRegExpUnicodeEscapeSequence(e,s)&&(i=e.lastIntValue),function(e){return Un(e,!0)||36===e||95===e}(i)?(e.lastIntValue=i,!0):(e.pos=t,!1)},Hr.regexp_eatRegExpIdentifierPart=function(e){var t=e.pos,s=this.options.ecmaVersion>=11,i=e.current(s);return e.advance(s),92===i&&this.regexp_eatRegExpUnicodeEscapeSequence(e,s)&&(i=e.lastIntValue),function(e){return zn(e,!0)||36===e||95===e||8204===e||8205===e}(i)?(e.lastIntValue=i,!0):(e.pos=t,!1)},Hr.regexp_eatAtomEscape=function(e){return !!(this.regexp_eatBackReference(e)||this.regexp_eatCharacterClassEscape(e)||this.regexp_eatCharacterEscape(e)||e.switchN&&this.regexp_eatKGroupName(e))||(e.switchU&&(99===e.current()&&e.raise("Invalid unicode escape"),e.raise("Invalid escape")),!1)},Hr.regexp_eatBackReference=function(e){var t=e.pos;if(this.regexp_eatDecimalEscape(e)){var s=e.lastIntValue;if(e.switchU)return s>e.maxBackReference&&(e.maxBackReference=s),!0;if(s<=e.numCapturingParens)return !0;e.pos=t;}return !1},Hr.regexp_eatKGroupName=function(e){if(e.eat(107)){if(this.regexp_eatGroupName(e))return e.backReferenceNames.push(e.lastStringValue),!0;e.raise("Invalid named reference");}return !1},Hr.regexp_eatCharacterEscape=function(e){return this.regexp_eatControlEscape(e)||this.regexp_eatCControlLetter(e)||this.regexp_eatZero(e)||this.regexp_eatHexEscapeSequence(e)||this.regexp_eatRegExpUnicodeEscapeSequence(e,!1)||!e.switchU&&this.regexp_eatLegacyOctalEscapeSequence(e)||this.regexp_eatIdentityEscape(e)},Hr.regexp_eatCControlLetter=function(e){var t=e.pos;if(e.eat(99)){if(this.regexp_eatControlLetter(e))return !0;e.pos=t;}return !1},Hr.regexp_eatZero=function(e){return 48===e.current()&&!Zr(e.lookahead())&&(e.lastIntValue=0,e.advance(),!0)},Hr.regexp_eatControlEscape=function(e){var t=e.current();return 116===t?(e.lastIntValue=9,e.advance(),!0):110===t?(e.lastIntValue=10,e.advance(),!0):118===t?(e.lastIntValue=11,e.advance(),!0):102===t?(e.lastIntValue=12,e.advance(),!0):114===t&&(e.lastIntValue=13,e.advance(),!0)},Hr.regexp_eatControlLetter=function(e){var t=e.current();return !!Yr(t)&&(e.lastIntValue=t%32,e.advance(),!0)},Hr.regexp_eatRegExpUnicodeEscapeSequence=function(e,t){void 0===t&&(t=!1);var s,i=e.pos,n=t||e.switchU;if(e.eat(117)){if(this.regexp_eatFixedHexDigits(e,4)){var r=e.lastIntValue;if(n&&r>=55296&&r<=56319){var a=e.pos;if(e.eat(92)&&e.eat(117)&&this.regexp_eatFixedHexDigits(e,4)){var o=e.lastIntValue;if(o>=56320&&o<=57343)return e.lastIntValue=1024*(r-55296)+(o-56320)+65536,!0}e.pos=a,e.lastIntValue=r;}return !0}if(n&&e.eat(123)&&this.regexp_eatHexDigits(e)&&e.eat(125)&&((s=e.lastIntValue)>=0&&s<=1114111))return !0;n&&e.raise("Invalid unicode escape"),e.pos=i;}return !1},Hr.regexp_eatIdentityEscape=function(e){if(e.switchU)return !!this.regexp_eatSyntaxCharacter(e)||!!e.eat(47)&&(e.lastIntValue=47,!0);var t=e.current();return !(99===t||e.switchN&&107===t)&&(e.lastIntValue=t,e.advance(),!0)},Hr.regexp_eatDecimalEscape=function(e){e.lastIntValue=0;var t=e.current();if(t>=49&&t<=57){do{e.lastIntValue=10*e.lastIntValue+(t-48),e.advance();}while((t=e.current())>=48&&t<=57);return !0}return !1},Hr.regexp_eatCharacterClassEscape=function(e){var t=e.current();if(function(e){return 100===e||68===e||115===e||83===e||119===e||87===e}(t))return e.lastIntValue=-1,e.advance(),!0;if(e.switchU&&this.options.ecmaVersion>=9&&(80===t||112===t)){if(e.lastIntValue=-1,e.advance(),e.eat(123)&&this.regexp_eatUnicodePropertyValueExpression(e)&&e.eat(125))return !0;e.raise("Invalid property name");}return !1},Hr.regexp_eatUnicodePropertyValueExpression=function(e){var t=e.pos;if(this.regexp_eatUnicodePropertyName(e)&&e.eat(61)){var s=e.lastStringValue;if(this.regexp_eatUnicodePropertyValue(e)){var i=e.lastStringValue;return this.regexp_validateUnicodePropertyNameAndValue(e,s,i),!0}}if(e.pos=t,this.regexp_eatLoneUnicodePropertyNameOrValue(e)){var n=e.lastStringValue;return this.regexp_validateUnicodePropertyNameOrValue(e,n),!0}return !1},Hr.regexp_validateUnicodePropertyNameAndValue=function(e,t,s){rr(e.unicodeProperties.nonBinary,t)||e.raise("Invalid property name"),e.unicodeProperties.nonBinary[t].test(s)||e.raise("Invalid property value");},Hr.regexp_validateUnicodePropertyNameOrValue=function(e,t){e.unicodeProperties.binary.test(t)||e.raise("Invalid property name");},Hr.regexp_eatUnicodePropertyName=function(e){var t=0;for(e.lastStringValue="";Qr(t=e.current());)e.lastStringValue+=Kr(t),e.advance();return ""!==e.lastStringValue},Hr.regexp_eatUnicodePropertyValue=function(e){var t=0;for(e.lastStringValue="";Jr(t=e.current());)e.lastStringValue+=Kr(t),e.advance();return ""!==e.lastStringValue},Hr.regexp_eatLoneUnicodePropertyNameOrValue=function(e){return this.regexp_eatUnicodePropertyValue(e)},Hr.regexp_eatCharacterClass=function(e){if(e.eat(91)){if(e.eat(94),this.regexp_classRanges(e),e.eat(93))return !0;e.raise("Unterminated character class");}return !1},Hr.regexp_classRanges=function(e){for(;this.regexp_eatClassAtom(e);){var t=e.lastIntValue;if(e.eat(45)&&this.regexp_eatClassAtom(e)){var s=e.lastIntValue;!e.switchU||-1!==t&&-1!==s||e.raise("Invalid character class"),-1!==t&&-1!==s&&t>s&&e.raise("Range out of order in character class");}}},Hr.regexp_eatClassAtom=function(e){var t=e.pos;if(e.eat(92)){if(this.regexp_eatClassEscape(e))return !0;if(e.switchU){var s=e.current();(99===s||sa(s))&&e.raise("Invalid class escape"),e.raise("Invalid escape");}e.pos=t;}var i=e.current();return 93!==i&&(e.lastIntValue=i,e.advance(),!0)},Hr.regexp_eatClassEscape=function(e){var t=e.pos;if(e.eat(98))return e.lastIntValue=8,!0;if(e.switchU&&e.eat(45))return e.lastIntValue=45,!0;if(!e.switchU&&e.eat(99)){if(this.regexp_eatClassControlLetter(e))return !0;e.pos=t;}return this.regexp_eatCharacterClassEscape(e)||this.regexp_eatCharacterEscape(e)},Hr.regexp_eatClassControlLetter=function(e){var t=e.current();return !(!Zr(t)&&95!==t)&&(e.lastIntValue=t%32,e.advance(),!0)},Hr.regexp_eatHexEscapeSequence=function(e){var t=e.pos;if(e.eat(120)){if(this.regexp_eatFixedHexDigits(e,2))return !0;e.switchU&&e.raise("Invalid escape"),e.pos=t;}return !1},Hr.regexp_eatDecimalDigits=function(e){var t=e.pos,s=0;for(e.lastIntValue=0;Zr(s=e.current());)e.lastIntValue=10*e.lastIntValue+(s-48),e.advance();return e.pos!==t},Hr.regexp_eatHexDigits=function(e){var t=e.pos,s=0;for(e.lastIntValue=0;ea(s=e.current());)e.lastIntValue=16*e.lastIntValue+ta(s),e.advance();return e.pos!==t},Hr.regexp_eatLegacyOctalEscapeSequence=function(e){if(this.regexp_eatOctalDigit(e)){var t=e.lastIntValue;if(this.regexp_eatOctalDigit(e)){var s=e.lastIntValue;t<=3&&this.regexp_eatOctalDigit(e)?e.lastIntValue=64*t+8*s+e.lastIntValue:e.lastIntValue=8*t+s;}else e.lastIntValue=t;return !0}return !1},Hr.regexp_eatOctalDigit=function(e){var t=e.current();return sa(t)?(e.lastIntValue=t-48,e.advance(),!0):(e.lastIntValue=0,!1)},Hr.regexp_eatFixedHexDigits=function(e,t){var s=e.pos;e.lastIntValue=0;for(var i=0;i<t;++i){var n=e.current();if(!ea(n))return e.pos=s,!1;e.lastIntValue=16*e.lastIntValue+ta(n),e.advance();}return !0};var ia=function(e){this.type=e.type,this.value=e.value,this.start=e.start,this.end=e.end,e.options.locations&&(this.loc=new lr(e,e.startLoc,e.endLoc)),e.options.ranges&&(this.range=[e.start,e.end]);},na=fr.prototype;function ra(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(55296+(e>>10),56320+(1023&e)))}na.next=function(e){!e&&this.type.keyword&&this.containsEsc&&this.raiseRecoverable(this.start,"Escape sequence in keyword "+this.type.keyword),this.options.onToken&&this.options.onToken(new ia(this)),this.lastTokEnd=this.end,this.lastTokStart=this.start,this.lastTokEndLoc=this.endLoc,this.lastTokStartLoc=this.startLoc,this.nextToken();},na.getToken=function(){return this.next(),new ia(this)},"undefined"!=typeof Symbol&&(na[Symbol.iterator]=function(){var e=this;return {next:function(){var t=e.getToken();return {done:t.type===Yn.eof,value:t}}}}),na.curContext=function(){return this.context[this.context.length-1]},na.nextToken=function(){var e=this.curContext();return e&&e.preserveSpace||this.skipSpace(),this.start=this.pos,this.options.locations&&(this.startLoc=this.curPosition()),this.pos>=this.input.length?this.finishToken(Yn.eof):e.override?e.override(this):void this.readToken(this.fullCharCodeAtPos())},na.readToken=function(e){return Un(e,this.options.ecmaVersion>=6)||92===e?this.readWord():this.getTokenFromCode(e)},na.fullCharCodeAtPos=function(){var e=this.input.charCodeAt(this.pos);return e<=55295||e>=57344?e:(e<<10)+this.input.charCodeAt(this.pos+1)-56613888},na.skipBlockComment=function(){var e,t=this.options.onComment&&this.curPosition(),s=this.pos,i=this.input.indexOf("*/",this.pos+=2);if(-1===i&&this.raise(this.pos-2,"Unterminated comment"),this.pos=i+2,this.options.locations)for(Jn.lastIndex=s;(e=Jn.exec(this.input))&&e.index<this.pos;)++this.curLine,this.lineStart=e.index+e[0].length;this.options.onComment&&this.options.onComment(!0,this.input.slice(s+2,i),s,this.pos,t,this.curPosition());},na.skipLineComment=function(e){for(var t=this.pos,s=this.options.onComment&&this.curPosition(),i=this.input.charCodeAt(this.pos+=e);this.pos<this.input.length&&!Zn(i);)i=this.input.charCodeAt(++this.pos);this.options.onComment&&this.options.onComment(!1,this.input.slice(t+e,this.pos),t,this.pos,s,this.curPosition());},na.skipSpace=function(){e:for(;this.pos<this.input.length;){var e=this.input.charCodeAt(this.pos);switch(e){case 32:case 160:++this.pos;break;case 13:10===this.input.charCodeAt(this.pos+1)&&++this.pos;case 10:case 8232:case 8233:++this.pos,this.options.locations&&(++this.curLine,this.lineStart=this.pos);break;case 47:switch(this.input.charCodeAt(this.pos+1)){case 42:this.skipBlockComment();break;case 47:this.skipLineComment(2);break;default:break e}break;default:if(!(e>8&&e<14||e>=5760&&er.test(String.fromCharCode(e))))break e;++this.pos;}}},na.finishToken=function(e,t){this.end=this.pos,this.options.locations&&(this.endLoc=this.curPosition());var s=this.type;this.type=e,this.value=t,this.updateContext(s);},na.readToken_dot=function(){var e=this.input.charCodeAt(this.pos+1);if(e>=48&&e<=57)return this.readNumber(!0);var t=this.input.charCodeAt(this.pos+2);return this.options.ecmaVersion>=6&&46===e&&46===t?(this.pos+=3,this.finishToken(Yn.ellipsis)):(++this.pos,this.finishToken(Yn.dot))},na.readToken_slash=function(){var e=this.input.charCodeAt(this.pos+1);return this.exprAllowed?(++this.pos,this.readRegexp()):61===e?this.finishOp(Yn.assign,2):this.finishOp(Yn.slash,1)},na.readToken_mult_modulo_exp=function(e){var t=this.input.charCodeAt(this.pos+1),s=1,i=42===e?Yn.star:Yn.modulo;return this.options.ecmaVersion>=7&&42===e&&42===t&&(++s,i=Yn.starstar,t=this.input.charCodeAt(this.pos+2)),61===t?this.finishOp(Yn.assign,s+1):this.finishOp(i,s)},na.readToken_pipe_amp=function(e){var t=this.input.charCodeAt(this.pos+1);return t===e?this.finishOp(124===e?Yn.logicalOR:Yn.logicalAND,2):61===t?this.finishOp(Yn.assign,2):this.finishOp(124===e?Yn.bitwiseOR:Yn.bitwiseAND,1)},na.readToken_caret=function(){return 61===this.input.charCodeAt(this.pos+1)?this.finishOp(Yn.assign,2):this.finishOp(Yn.bitwiseXOR,1)},na.readToken_plus_min=function(e){var t=this.input.charCodeAt(this.pos+1);return t===e?45!==t||this.inModule||62!==this.input.charCodeAt(this.pos+2)||0!==this.lastTokEnd&&!Qn.test(this.input.slice(this.lastTokEnd,this.pos))?this.finishOp(Yn.incDec,2):(this.skipLineComment(3),this.skipSpace(),this.nextToken()):61===t?this.finishOp(Yn.assign,2):this.finishOp(Yn.plusMin,1)},na.readToken_lt_gt=function(e){var t=this.input.charCodeAt(this.pos+1),s=1;return t===e?(s=62===e&&62===this.input.charCodeAt(this.pos+2)?3:2,61===this.input.charCodeAt(this.pos+s)?this.finishOp(Yn.assign,s+1):this.finishOp(Yn.bitShift,s)):33!==t||60!==e||this.inModule||45!==this.input.charCodeAt(this.pos+2)||45!==this.input.charCodeAt(this.pos+3)?(61===t&&(s=2),this.finishOp(Yn.relational,s)):(this.skipLineComment(4),this.skipSpace(),this.nextToken())},na.readToken_eq_excl=function(e){var t=this.input.charCodeAt(this.pos+1);return 61===t?this.finishOp(Yn.equality,61===this.input.charCodeAt(this.pos+2)?3:2):61===e&&62===t&&this.options.ecmaVersion>=6?(this.pos+=2,this.finishToken(Yn.arrow)):this.finishOp(61===e?Yn.eq:Yn.prefix,1)},na.readToken_question=function(){if(this.options.ecmaVersion>=11){var e=this.input.charCodeAt(this.pos+1);if(46===e){var t=this.input.charCodeAt(this.pos+2);if(t<48||t>57)return this.finishOp(Yn.questionDot,2)}if(63===e)return this.finishOp(Yn.coalesce,2)}return this.finishOp(Yn.question,1)},na.getTokenFromCode=function(e){switch(e){case 46:return this.readToken_dot();case 40:return ++this.pos,this.finishToken(Yn.parenL);case 41:return ++this.pos,this.finishToken(Yn.parenR);case 59:return ++this.pos,this.finishToken(Yn.semi);case 44:return ++this.pos,this.finishToken(Yn.comma);case 91:return ++this.pos,this.finishToken(Yn.bracketL);case 93:return ++this.pos,this.finishToken(Yn.bracketR);case 123:return ++this.pos,this.finishToken(Yn.braceL);case 125:return ++this.pos,this.finishToken(Yn.braceR);case 58:return ++this.pos,this.finishToken(Yn.colon);case 96:if(this.options.ecmaVersion<6)break;return ++this.pos,this.finishToken(Yn.backQuote);case 48:var t=this.input.charCodeAt(this.pos+1);if(120===t||88===t)return this.readRadixNumber(16);if(this.options.ecmaVersion>=6){if(111===t||79===t)return this.readRadixNumber(8);if(98===t||66===t)return this.readRadixNumber(2)}case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(!1);case 34:case 39:return this.readString(e);case 47:return this.readToken_slash();case 37:case 42:return this.readToken_mult_modulo_exp(e);case 124:case 38:return this.readToken_pipe_amp(e);case 94:return this.readToken_caret();case 43:case 45:return this.readToken_plus_min(e);case 60:case 62:return this.readToken_lt_gt(e);case 61:case 33:return this.readToken_eq_excl(e);case 63:return this.readToken_question();case 126:return this.finishOp(Yn.prefix,1)}this.raise(this.pos,"Unexpected character '"+ra(e)+"'");},na.finishOp=function(e,t){var s=this.input.slice(this.pos,this.pos+t);return this.pos+=t,this.finishToken(e,s)},na.readRegexp=function(){for(var e,t,s=this.pos;;){this.pos>=this.input.length&&this.raise(s,"Unterminated regular expression");var i=this.input.charAt(this.pos);if(Qn.test(i)&&this.raise(s,"Unterminated regular expression"),e)e=!1;else {if("["===i)t=!0;else if("]"===i&&t)t=!1;else if("/"===i&&!t)break;e="\\"===i;}++this.pos;}var n=this.input.slice(s,this.pos);++this.pos;var r=this.pos,a=this.readWord1();this.containsEsc&&this.unexpected(r);var o=this.regexpState||(this.regexpState=new qr(this));o.reset(s,n,a),this.validateRegExpFlags(o),this.validateRegExpPattern(o);var h=null;try{h=new RegExp(n,a);}catch(e){}return this.finishToken(Yn.regexp,{pattern:n,flags:a,value:h})},na.readInt=function(e,t){for(var s=this.pos,i=0,n=0,r=null==t?1/0:t;n<r;++n){var a=this.input.charCodeAt(this.pos),o=void 0;if((o=a>=97?a-97+10:a>=65?a-65+10:a>=48&&a<=57?a-48:1/0)>=e)break;++this.pos,i=i*e+o;}return this.pos===s||null!=t&&this.pos-s!==t?null:i},na.readRadixNumber=function(e){var t=this.pos;this.pos+=2;var s=this.readInt(e);return null==s&&this.raise(this.start+2,"Expected number in radix "+e),this.options.ecmaVersion>=11&&110===this.input.charCodeAt(this.pos)?(s="undefined"!=typeof BigInt?BigInt(this.input.slice(t,this.pos)):null,++this.pos):Un(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number"),this.finishToken(Yn.num,s)},na.readNumber=function(e){var t=this.pos;e||null!==this.readInt(10)||this.raise(t,"Invalid number");var s=this.pos-t>=2&&48===this.input.charCodeAt(t);s&&this.strict&&this.raise(t,"Invalid number");var i=this.input.charCodeAt(this.pos);if(!s&&!e&&this.options.ecmaVersion>=11&&110===i){var n=this.input.slice(t,this.pos),r="undefined"!=typeof BigInt?BigInt(n):null;return ++this.pos,Un(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number"),this.finishToken(Yn.num,r)}s&&/[89]/.test(this.input.slice(t,this.pos))&&(s=!1),46!==i||s||(++this.pos,this.readInt(10),i=this.input.charCodeAt(this.pos)),69!==i&&101!==i||s||(43!==(i=this.input.charCodeAt(++this.pos))&&45!==i||++this.pos,null===this.readInt(10)&&this.raise(t,"Invalid number")),Un(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number");var a=this.input.slice(t,this.pos),o=s?parseInt(a,8):parseFloat(a);return this.finishToken(Yn.num,o)},na.readCodePoint=function(){var e;if(123===this.input.charCodeAt(this.pos)){this.options.ecmaVersion<6&&this.unexpected();var t=++this.pos;e=this.readHexChar(this.input.indexOf("}",this.pos)-this.pos),++this.pos,e>1114111&&this.invalidStringToken(t,"Code point out of bounds");}else e=this.readHexChar(4);return e},na.readString=function(e){for(var t="",s=++this.pos;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated string constant");var i=this.input.charCodeAt(this.pos);if(i===e)break;92===i?(t+=this.input.slice(s,this.pos),t+=this.readEscapedChar(!1),s=this.pos):(Zn(i,this.options.ecmaVersion>=10)&&this.raise(this.start,"Unterminated string constant"),++this.pos);}return t+=this.input.slice(s,this.pos++),this.finishToken(Yn.string,t)};var aa={};na.tryReadTemplateToken=function(){this.inTemplateElement=!0;try{this.readTmplToken();}catch(e){if(e!==aa)throw e;this.readInvalidTemplateToken();}this.inTemplateElement=!1;},na.invalidStringToken=function(e,t){if(this.inTemplateElement&&this.options.ecmaVersion>=9)throw aa;this.raise(e,t);},na.readTmplToken=function(){for(var e="",t=this.pos;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated template");var s=this.input.charCodeAt(this.pos);if(96===s||36===s&&123===this.input.charCodeAt(this.pos+1))return this.pos!==this.start||this.type!==Yn.template&&this.type!==Yn.invalidTemplate?(e+=this.input.slice(t,this.pos),this.finishToken(Yn.template,e)):36===s?(this.pos+=2,this.finishToken(Yn.dollarBraceL)):(++this.pos,this.finishToken(Yn.backQuote));if(92===s)e+=this.input.slice(t,this.pos),e+=this.readEscapedChar(!0),t=this.pos;else if(Zn(s)){switch(e+=this.input.slice(t,this.pos),++this.pos,s){case 13:10===this.input.charCodeAt(this.pos)&&++this.pos;case 10:e+="\n";break;default:e+=String.fromCharCode(s);}this.options.locations&&(++this.curLine,this.lineStart=this.pos),t=this.pos;}else ++this.pos;}},na.readInvalidTemplateToken=function(){for(;this.pos<this.input.length;this.pos++)switch(this.input[this.pos]){case"\\":++this.pos;break;case"$":if("{"!==this.input[this.pos+1])break;case"`":return this.finishToken(Yn.invalidTemplate,this.input.slice(this.start,this.pos))}this.raise(this.start,"Unterminated template");},na.readEscapedChar=function(e){var t=this.input.charCodeAt(++this.pos);switch(++this.pos,t){case 110:return "\n";case 114:return "\r";case 120:return String.fromCharCode(this.readHexChar(2));case 117:return ra(this.readCodePoint());case 116:return "\t";case 98:return "\b";case 118:return "\v";case 102:return "\f";case 13:10===this.input.charCodeAt(this.pos)&&++this.pos;case 10:return this.options.locations&&(this.lineStart=this.pos,++this.curLine),"";case 56:case 57:if(e){var s=this.pos-1;return this.invalidStringToken(s,"Invalid escape sequence in template string"),null}default:if(t>=48&&t<=55){var i=this.input.substr(this.pos-1,3).match(/^[0-7]+/)[0],n=parseInt(i,8);return n>255&&(i=i.slice(0,-1),n=parseInt(i,8)),this.pos+=i.length-1,t=this.input.charCodeAt(this.pos),"0"===i&&56!==t&&57!==t||!this.strict&&!e||this.invalidStringToken(this.pos-1-i.length,e?"Octal literal in template string":"Octal literal in strict mode"),String.fromCharCode(n)}return Zn(t)?"":String.fromCharCode(t)}},na.readHexChar=function(e){var t=this.pos,s=this.readInt(16,e);return null===s&&this.invalidStringToken(t,"Bad character escape sequence"),s},na.readWord1=function(){this.containsEsc=!1;for(var e="",t=!0,s=this.pos,i=this.options.ecmaVersion>=6;this.pos<this.input.length;){var n=this.fullCharCodeAtPos();if(zn(n,i))this.pos+=n<=65535?1:2;else {if(92!==n)break;this.containsEsc=!0,e+=this.input.slice(s,this.pos);var r=this.pos;117!==this.input.charCodeAt(++this.pos)&&this.invalidStringToken(this.pos,"Expecting Unicode escape sequence \\uXXXX"),++this.pos;var a=this.readCodePoint();(t?Un:zn)(a,i)||this.invalidStringToken(r,"Invalid Unicode escape"),e+=ra(a),s=this.pos;}t=!1;}return e+this.input.slice(s,this.pos)},na.readWord=function(){var e=this.readWord1(),t=Yn.name;return this.keywords.test(e)&&(t=Kn[e]),this.finishToken(t,e)};fr.acorn={Parser:fr,version:"7.3.1",defaultOptions:ur,Position:hr,SourceLocation:lr,getLineInfo:cr,Node:$r,TokenType:jn,tokTypes:Yn,keywordTypes:Kn,TokContext:Lr,tokContexts:Rr,isIdentifierChar:zn,isIdentifierStart:Un,Token:ia,isNewLine:Zn,lineBreak:Qn,lineBreakG:Jn,nonASCIIwhitespace:er};var oa=Object.freeze({__proto__:null,Node:$r,Parser:fr,Position:hr,SourceLocation:lr,TokContext:Lr,Token:ia,TokenType:jn,defaultOptions:ur,getLineInfo:cr,isIdentifierChar:zn,isIdentifierStart:Un,isNewLine:Zn,keywordTypes:Kn,lineBreak:Qn,lineBreakG:Jn,nonASCIIwhitespace:er,parse:function(e,t){return fr.parse(e,t)},parseExpressionAt:function(e,t,s){return fr.parseExpressionAt(e,t,s)},tokContexts:Rr,tokTypes:Yn,tokenizer:function(e,t){return fr.tokenizer(e,t)},version:"7.3.1"});var Ta=function(e){return e&&e.default||e}(oa);var yo;!function(e){e[e.ENTRY_CHUNK=0]="ENTRY_CHUNK",e[e.SECONDARY_CHUNK=1]="SECONDARY_CHUNK",e[e.ASSET=2]="ASSET";}(yo||(yo={}));

	// Reserved word lists for various dialects of the language

	var reservedWords = {
	  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
	  5: "class enum extends super const export import",
	  6: "enum",
	  strict: "implements interface let package private protected public static yield",
	  strictBind: "eval arguments"
	};

	// And the keywords

	var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";

	var keywords = {
	  5: ecma5AndLessKeywords,
	  "5module": ecma5AndLessKeywords + " export import",
	  6: ecma5AndLessKeywords + " const class extends export import super"
	};

	var keywordRelationalOperator = /^in(stanceof)?$/;

	// ## Character categories

	// Big ugly regular expressions that match characters in the
	// whitespace, identifier, and identifier-start categories. These
	// are only applied when a character is found to actually have a
	// code point above 128.
	// Generated by `bin/generate-identifier-regex.js`.
	var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08c7\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9ffc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7ca\ua7f5-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
	var nonASCIIidentifierChars = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf\u1ac0\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";

	var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
	var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

	nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;

	// These are a run-length and offset encoded representation of the
	// >0xffff code points that are a valid part of identifiers. The
	// offset starts at 0x10000, and each pair of numbers represents an
	// offset to the next range, and then a size of the range. They were
	// generated by bin/generate-identifier-regex.js

	// eslint-disable-next-line comma-spacing
	var astralIdentifierStartCodes = [0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,107,20,28,22,13,52,76,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8952,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42717,35,4148,12,221,3,5761,15,7472,3104,541,1507,4938];

	// eslint-disable-next-line comma-spacing
	var astralIdentifierCodes = [509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,4759,9,787719,239];

	// This has a complexity linear to the value of the code. The
	// assumption is that looking up astral identifier characters is
	// rare.
	function isInAstralSet(code, set) {
	  var pos = 0x10000;
	  for (var i = 0; i < set.length; i += 2) {
	    pos += set[i];
	    if (pos > code) { return false }
	    pos += set[i + 1];
	    if (pos >= code) { return true }
	  }
	}

	// Test whether a given character code starts an identifier.

	function isIdentifierStart(code, astral) {
	  if (code < 65) { return code === 36 }
	  if (code < 91) { return true }
	  if (code < 97) { return code === 95 }
	  if (code < 123) { return true }
	  if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code)) }
	  if (astral === false) { return false }
	  return isInAstralSet(code, astralIdentifierStartCodes)
	}

	// Test whether a given character is part of an identifier.

	function isIdentifierChar(code, astral) {
	  if (code < 48) { return code === 36 }
	  if (code < 58) { return true }
	  if (code < 65) { return false }
	  if (code < 91) { return true }
	  if (code < 97) { return code === 95 }
	  if (code < 123) { return true }
	  if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code)) }
	  if (astral === false) { return false }
	  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes)
	}

	// ## Token types

	// The assignment of fine-grained, information-carrying type objects
	// allows the tokenizer to store the information it has about a
	// token in a way that is very cheap for the parser to look up.

	// All token type variables start with an underscore, to make them
	// easy to recognize.

	// The `beforeExpr` property is used to disambiguate between regular
	// expressions and divisions. It is set on all token types that can
	// be followed by an expression (thus, a slash after them would be a
	// regular expression).
	//
	// The `startsExpr` property is used to check if the token ends a
	// `yield` expression. It is set on all token types that either can
	// directly start an expression (like a quotation mark) or can
	// continue an expression (like the body of a string).
	//
	// `isLoop` marks a keyword as starting a loop, which is important
	// to know when parsing a label, in order to allow or disallow
	// continue jumps to that label.

	var TokenType = function TokenType(label, conf) {
	  if ( conf === void 0 ) conf = {};

	  this.label = label;
	  this.keyword = conf.keyword;
	  this.beforeExpr = !!conf.beforeExpr;
	  this.startsExpr = !!conf.startsExpr;
	  this.isLoop = !!conf.isLoop;
	  this.isAssign = !!conf.isAssign;
	  this.prefix = !!conf.prefix;
	  this.postfix = !!conf.postfix;
	  this.binop = conf.binop || null;
	  this.updateContext = null;
	};

	function binop(name, prec) {
	  return new TokenType(name, {beforeExpr: true, binop: prec})
	}
	var beforeExpr = {beforeExpr: true}, startsExpr = {startsExpr: true};

	// Map keyword names to token types.

	var keywords$1 = {};

	// Succinct definitions of keyword token types
	function kw(name, options) {
	  if ( options === void 0 ) options = {};

	  options.keyword = name;
	  return keywords$1[name] = new TokenType(name, options)
	}

	var types = {
	  num: new TokenType("num", startsExpr),
	  regexp: new TokenType("regexp", startsExpr),
	  string: new TokenType("string", startsExpr),
	  name: new TokenType("name", startsExpr),
	  eof: new TokenType("eof"),

	  // Punctuation token types.
	  bracketL: new TokenType("[", {beforeExpr: true, startsExpr: true}),
	  bracketR: new TokenType("]"),
	  braceL: new TokenType("{", {beforeExpr: true, startsExpr: true}),
	  braceR: new TokenType("}"),
	  parenL: new TokenType("(", {beforeExpr: true, startsExpr: true}),
	  parenR: new TokenType(")"),
	  comma: new TokenType(",", beforeExpr),
	  semi: new TokenType(";", beforeExpr),
	  colon: new TokenType(":", beforeExpr),
	  dot: new TokenType("."),
	  question: new TokenType("?", beforeExpr),
	  questionDot: new TokenType("?."),
	  arrow: new TokenType("=>", beforeExpr),
	  template: new TokenType("template"),
	  invalidTemplate: new TokenType("invalidTemplate"),
	  ellipsis: new TokenType("...", beforeExpr),
	  backQuote: new TokenType("`", startsExpr),
	  dollarBraceL: new TokenType("${", {beforeExpr: true, startsExpr: true}),

	  // Operators. These carry several kinds of properties to help the
	  // parser use them properly (the presence of these properties is
	  // what categorizes them as operators).
	  //
	  // `binop`, when present, specifies that this operator is a binary
	  // operator, and will refer to its precedence.
	  //
	  // `prefix` and `postfix` mark the operator as a prefix or postfix
	  // unary operator.
	  //
	  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
	  // binary operators with a very low precedence, that should result
	  // in AssignmentExpression nodes.

	  eq: new TokenType("=", {beforeExpr: true, isAssign: true}),
	  assign: new TokenType("_=", {beforeExpr: true, isAssign: true}),
	  incDec: new TokenType("++/--", {prefix: true, postfix: true, startsExpr: true}),
	  prefix: new TokenType("!/~", {beforeExpr: true, prefix: true, startsExpr: true}),
	  logicalOR: binop("||", 1),
	  logicalAND: binop("&&", 2),
	  bitwiseOR: binop("|", 3),
	  bitwiseXOR: binop("^", 4),
	  bitwiseAND: binop("&", 5),
	  equality: binop("==/!=/===/!==", 6),
	  relational: binop("</>/<=/>=", 7),
	  bitShift: binop("<</>>/>>>", 8),
	  plusMin: new TokenType("+/-", {beforeExpr: true, binop: 9, prefix: true, startsExpr: true}),
	  modulo: binop("%", 10),
	  star: binop("*", 10),
	  slash: binop("/", 10),
	  starstar: new TokenType("**", {beforeExpr: true}),
	  coalesce: binop("??", 1),

	  // Keyword token types.
	  _break: kw("break"),
	  _case: kw("case", beforeExpr),
	  _catch: kw("catch"),
	  _continue: kw("continue"),
	  _debugger: kw("debugger"),
	  _default: kw("default", beforeExpr),
	  _do: kw("do", {isLoop: true, beforeExpr: true}),
	  _else: kw("else", beforeExpr),
	  _finally: kw("finally"),
	  _for: kw("for", {isLoop: true}),
	  _function: kw("function", startsExpr),
	  _if: kw("if"),
	  _return: kw("return", beforeExpr),
	  _switch: kw("switch"),
	  _throw: kw("throw", beforeExpr),
	  _try: kw("try"),
	  _var: kw("var"),
	  _const: kw("const"),
	  _while: kw("while", {isLoop: true}),
	  _with: kw("with"),
	  _new: kw("new", {beforeExpr: true, startsExpr: true}),
	  _this: kw("this", startsExpr),
	  _super: kw("super", startsExpr),
	  _class: kw("class", startsExpr),
	  _extends: kw("extends", beforeExpr),
	  _export: kw("export"),
	  _import: kw("import", startsExpr),
	  _null: kw("null", startsExpr),
	  _true: kw("true", startsExpr),
	  _false: kw("false", startsExpr),
	  _in: kw("in", {beforeExpr: true, binop: 7}),
	  _instanceof: kw("instanceof", {beforeExpr: true, binop: 7}),
	  _typeof: kw("typeof", {beforeExpr: true, prefix: true, startsExpr: true}),
	  _void: kw("void", {beforeExpr: true, prefix: true, startsExpr: true}),
	  _delete: kw("delete", {beforeExpr: true, prefix: true, startsExpr: true})
	};

	// Matches a whole line break (where CRLF is considered a single
	// line break). Used to count lines.

	var lineBreak = /\r\n?|\n|\u2028|\u2029/;
	var lineBreakG = new RegExp(lineBreak.source, "g");

	function isNewLine(code, ecma2019String) {
	  return code === 10 || code === 13 || (!ecma2019String && (code === 0x2028 || code === 0x2029))
	}

	var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;

	var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;

	var ref = Object.prototype;
	var hasOwnProperty = ref.hasOwnProperty;
	var toString = ref.toString;

	// Checks if an object has a property.

	function has(obj, propName) {
	  return hasOwnProperty.call(obj, propName)
	}

	var isArray = Array.isArray || (function (obj) { return (
	  toString.call(obj) === "[object Array]"
	); });

	function wordsRegexp(words) {
	  return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$")
	}

	// These are used when `options.locations` is on, for the
	// `startLoc` and `endLoc` properties.

	var Position = function Position(line, col) {
	  this.line = line;
	  this.column = col;
	};

	Position.prototype.offset = function offset (n) {
	  return new Position(this.line, this.column + n)
	};

	var SourceLocation = function SourceLocation(p, start, end) {
	  this.start = start;
	  this.end = end;
	  if (p.sourceFile !== null) { this.source = p.sourceFile; }
	};

	// The `getLineInfo` function is mostly useful when the
	// `locations` option is off (for performance reasons) and you
	// want to find the line/column position for a given character
	// offset. `input` should be the code string that the offset refers
	// into.

	function getLineInfo(input, offset) {
	  for (var line = 1, cur = 0;;) {
	    lineBreakG.lastIndex = cur;
	    var match = lineBreakG.exec(input);
	    if (match && match.index < offset) {
	      ++line;
	      cur = match.index + match[0].length;
	    } else {
	      return new Position(line, offset - cur)
	    }
	  }
	}

	// A second optional argument can be given to further configure
	// the parser process. These options are recognized:

	var defaultOptions = {
	  // `ecmaVersion` indicates the ECMAScript version to parse. Must be
	  // either 3, 5, 6 (2015), 7 (2016), 8 (2017), 9 (2018), or 10
	  // (2019). This influences support for strict mode, the set of
	  // reserved words, and support for new syntax features. The default
	  // is 10.
	  ecmaVersion: 10,
	  // `sourceType` indicates the mode the code should be parsed in.
	  // Can be either `"script"` or `"module"`. This influences global
	  // strict mode and parsing of `import` and `export` declarations.
	  sourceType: "script",
	  // `onInsertedSemicolon` can be a callback that will be called
	  // when a semicolon is automatically inserted. It will be passed
	  // the position of the comma as an offset, and if `locations` is
	  // enabled, it is given the location as a `{line, column}` object
	  // as second argument.
	  onInsertedSemicolon: null,
	  // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
	  // trailing commas.
	  onTrailingComma: null,
	  // By default, reserved words are only enforced if ecmaVersion >= 5.
	  // Set `allowReserved` to a boolean value to explicitly turn this on
	  // an off. When this option has the value "never", reserved words
	  // and keywords can also not be used as property names.
	  allowReserved: null,
	  // When enabled, a return at the top level is not considered an
	  // error.
	  allowReturnOutsideFunction: false,
	  // When enabled, import/export statements are not constrained to
	  // appearing at the top of the program.
	  allowImportExportEverywhere: false,
	  // When enabled, await identifiers are allowed to appear at the top-level scope,
	  // but they are still not allowed in non-async functions.
	  allowAwaitOutsideFunction: false,
	  // When enabled, hashbang directive in the beginning of file
	  // is allowed and treated as a line comment.
	  allowHashBang: false,
	  // When `locations` is on, `loc` properties holding objects with
	  // `start` and `end` properties in `{line, column}` form (with
	  // line being 1-based and column 0-based) will be attached to the
	  // nodes.
	  locations: false,
	  // A function can be passed as `onToken` option, which will
	  // cause Acorn to call that function with object in the same
	  // format as tokens returned from `tokenizer().getToken()`. Note
	  // that you are not allowed to call the parser from the
	  // callback—that will corrupt its internal state.
	  onToken: null,
	  // A function can be passed as `onComment` option, which will
	  // cause Acorn to call that function with `(block, text, start,
	  // end)` parameters whenever a comment is skipped. `block` is a
	  // boolean indicating whether this is a block (`/* */`) comment,
	  // `text` is the content of the comment, and `start` and `end` are
	  // character offsets that denote the start and end of the comment.
	  // When the `locations` option is on, two more parameters are
	  // passed, the full `{line, column}` locations of the start and
	  // end of the comments. Note that you are not allowed to call the
	  // parser from the callback—that will corrupt its internal state.
	  onComment: null,
	  // Nodes have their start and end characters offsets recorded in
	  // `start` and `end` properties (directly on the node, rather than
	  // the `loc` object, which holds line/column data. To also add a
	  // [semi-standardized][range] `range` property holding a `[start,
	  // end]` array with the same numbers, set the `ranges` option to
	  // `true`.
	  //
	  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
	  ranges: false,
	  // It is possible to parse multiple files into a single AST by
	  // passing the tree produced by parsing the first file as
	  // `program` option in subsequent parses. This will add the
	  // toplevel forms of the parsed file to the `Program` (top) node
	  // of an existing parse tree.
	  program: null,
	  // When `locations` is on, you can pass this to record the source
	  // file in every node's `loc` object.
	  sourceFile: null,
	  // This value, if given, is stored in every node, whether
	  // `locations` is on or off.
	  directSourceFile: null,
	  // When enabled, parenthesized expressions are represented by
	  // (non-standard) ParenthesizedExpression nodes
	  preserveParens: false
	};

	// Interpret and default an options object

	function getOptions(opts) {
	  var options = {};

	  for (var opt in defaultOptions)
	    { options[opt] = opts && has(opts, opt) ? opts[opt] : defaultOptions[opt]; }

	  if (options.ecmaVersion >= 2015)
	    { options.ecmaVersion -= 2009; }

	  if (options.allowReserved == null)
	    { options.allowReserved = options.ecmaVersion < 5; }

	  if (isArray(options.onToken)) {
	    var tokens = options.onToken;
	    options.onToken = function (token) { return tokens.push(token); };
	  }
	  if (isArray(options.onComment))
	    { options.onComment = pushComment(options, options.onComment); }

	  return options
	}

	function pushComment(options, array) {
	  return function(block, text, start, end, startLoc, endLoc) {
	    var comment = {
	      type: block ? "Block" : "Line",
	      value: text,
	      start: start,
	      end: end
	    };
	    if (options.locations)
	      { comment.loc = new SourceLocation(this, startLoc, endLoc); }
	    if (options.ranges)
	      { comment.range = [start, end]; }
	    array.push(comment);
	  }
	}

	// Each scope gets a bitset that may contain these flags
	var
	    SCOPE_TOP = 1,
	    SCOPE_FUNCTION = 2,
	    SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION,
	    SCOPE_ASYNC = 4,
	    SCOPE_GENERATOR = 8,
	    SCOPE_ARROW = 16,
	    SCOPE_SIMPLE_CATCH = 32,
	    SCOPE_SUPER = 64,
	    SCOPE_DIRECT_SUPER = 128;

	function functionFlags(async, generator) {
	  return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0)
	}

	// Used in checkLVal and declareName to determine the type of a binding
	var
	    BIND_NONE = 0, // Not a binding
	    BIND_VAR = 1, // Var-style binding
	    BIND_LEXICAL = 2, // Let- or const-style binding
	    BIND_FUNCTION = 3, // Function declaration
	    BIND_SIMPLE_CATCH = 4, // Simple (identifier pattern) catch binding
	    BIND_OUTSIDE = 5; // Special case for function names as bound inside the function

	var Parser = function Parser(options, input, startPos) {
	  this.options = options = getOptions(options);
	  this.sourceFile = options.sourceFile;
	  this.keywords = wordsRegexp(keywords[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
	  var reserved = "";
	  if (options.allowReserved !== true) {
	    for (var v = options.ecmaVersion;; v--)
	      { if (reserved = reservedWords[v]) { break } }
	    if (options.sourceType === "module") { reserved += " await"; }
	  }
	  this.reservedWords = wordsRegexp(reserved);
	  var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
	  this.reservedWordsStrict = wordsRegexp(reservedStrict);
	  this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
	  this.input = String(input);

	  // Used to signal to callers of `readWord1` whether the word
	  // contained any escape sequences. This is needed because words with
	  // escape sequences must not be interpreted as keywords.
	  this.containsEsc = false;

	  // Set up token state

	  // The current position of the tokenizer in the input.
	  if (startPos) {
	    this.pos = startPos;
	    this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
	    this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
	  } else {
	    this.pos = this.lineStart = 0;
	    this.curLine = 1;
	  }

	  // Properties of the current token:
	  // Its type
	  this.type = types.eof;
	  // For tokens that include more information than their type, the value
	  this.value = null;
	  // Its start and end offset
	  this.start = this.end = this.pos;
	  // And, if locations are used, the {line, column} object
	  // corresponding to those offsets
	  this.startLoc = this.endLoc = this.curPosition();

	  // Position information for the previous token
	  this.lastTokEndLoc = this.lastTokStartLoc = null;
	  this.lastTokStart = this.lastTokEnd = this.pos;

	  // The context stack is used to superficially track syntactic
	  // context to predict whether a regular expression is allowed in a
	  // given position.
	  this.context = this.initialContext();
	  this.exprAllowed = true;

	  // Figure out if it's a module code.
	  this.inModule = options.sourceType === "module";
	  this.strict = this.inModule || this.strictDirective(this.pos);

	  // Used to signify the start of a potential arrow function
	  this.potentialArrowAt = -1;

	  // Positions to delayed-check that yield/await does not exist in default parameters.
	  this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
	  // Labels in scope.
	  this.labels = [];
	  // Thus-far undefined exports.
	  this.undefinedExports = {};

	  // If enabled, skip leading hashbang line.
	  if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!")
	    { this.skipLineComment(2); }

	  // Scope tracking for duplicate variable names (see scope.js)
	  this.scopeStack = [];
	  this.enterScope(SCOPE_TOP);

	  // For RegExp validation
	  this.regexpState = null;
	};

	var prototypeAccessors = { inFunction: { configurable: true },inGenerator: { configurable: true },inAsync: { configurable: true },allowSuper: { configurable: true },allowDirectSuper: { configurable: true },treatFunctionsAsVar: { configurable: true } };

	Parser.prototype.parse = function parse () {
	  var node = this.options.program || this.startNode();
	  this.nextToken();
	  return this.parseTopLevel(node)
	};

	prototypeAccessors.inFunction.get = function () { return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0 };
	prototypeAccessors.inGenerator.get = function () { return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0 };
	prototypeAccessors.inAsync.get = function () { return (this.currentVarScope().flags & SCOPE_ASYNC) > 0 };
	prototypeAccessors.allowSuper.get = function () { return (this.currentThisScope().flags & SCOPE_SUPER) > 0 };
	prototypeAccessors.allowDirectSuper.get = function () { return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0 };
	prototypeAccessors.treatFunctionsAsVar.get = function () { return this.treatFunctionsAsVarInScope(this.currentScope()) };

	// Switch to a getter for 7.0.0.
	Parser.prototype.inNonArrowFunction = function inNonArrowFunction () { return (this.currentThisScope().flags & SCOPE_FUNCTION) > 0 };

	Parser.extend = function extend () {
	    var plugins = [], len = arguments.length;
	    while ( len-- ) plugins[ len ] = arguments[ len ];

	  var cls = this;
	  for (var i = 0; i < plugins.length; i++) { cls = plugins[i](cls); }
	  return cls
	};

	Parser.parse = function parse (input, options) {
	  return new this(options, input).parse()
	};

	Parser.parseExpressionAt = function parseExpressionAt (input, pos, options) {
	  var parser = new this(options, input, pos);
	  parser.nextToken();
	  return parser.parseExpression()
	};

	Parser.tokenizer = function tokenizer (input, options) {
	  return new this(options, input)
	};

	Object.defineProperties( Parser.prototype, prototypeAccessors );

	var pp = Parser.prototype;

	// ## Parser utilities

	var literal = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)")/;
	pp.strictDirective = function(start) {
	  for (;;) {
	    // Try to find string literal.
	    skipWhiteSpace.lastIndex = start;
	    start += skipWhiteSpace.exec(this.input)[0].length;
	    var match = literal.exec(this.input.slice(start));
	    if (!match) { return false }
	    if ((match[1] || match[2]) === "use strict") {
	      skipWhiteSpace.lastIndex = start + match[0].length;
	      var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
	      var next = this.input.charAt(end);
	      return next === ";" || next === "}" ||
	        (lineBreak.test(spaceAfter[0]) &&
	         !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === "!" && this.input.charAt(end + 1) === "="))
	    }
	    start += match[0].length;

	    // Skip semicolon, if any.
	    skipWhiteSpace.lastIndex = start;
	    start += skipWhiteSpace.exec(this.input)[0].length;
	    if (this.input[start] === ";")
	      { start++; }
	  }
	};

	// Predicate that tests whether the next token is of the given
	// type, and if yes, consumes it as a side effect.

	pp.eat = function(type) {
	  if (this.type === type) {
	    this.next();
	    return true
	  } else {
	    return false
	  }
	};

	// Tests whether parsed token is a contextual keyword.

	pp.isContextual = function(name) {
	  return this.type === types.name && this.value === name && !this.containsEsc
	};

	// Consumes contextual keyword if possible.

	pp.eatContextual = function(name) {
	  if (!this.isContextual(name)) { return false }
	  this.next();
	  return true
	};

	// Asserts that following token is given contextual keyword.

	pp.expectContextual = function(name) {
	  if (!this.eatContextual(name)) { this.unexpected(); }
	};

	// Test whether a semicolon can be inserted at the current position.

	pp.canInsertSemicolon = function() {
	  return this.type === types.eof ||
	    this.type === types.braceR ||
	    lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
	};

	pp.insertSemicolon = function() {
	  if (this.canInsertSemicolon()) {
	    if (this.options.onInsertedSemicolon)
	      { this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc); }
	    return true
	  }
	};

	// Consume a semicolon, or, failing that, see if we are allowed to
	// pretend that there is a semicolon at this position.

	pp.semicolon = function() {
	  if (!this.eat(types.semi) && !this.insertSemicolon()) { this.unexpected(); }
	};

	pp.afterTrailingComma = function(tokType, notNext) {
	  if (this.type === tokType) {
	    if (this.options.onTrailingComma)
	      { this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc); }
	    if (!notNext)
	      { this.next(); }
	    return true
	  }
	};

	// Expect a token of a given type. If found, consume it, otherwise,
	// raise an unexpected token error.

	pp.expect = function(type) {
	  this.eat(type) || this.unexpected();
	};

	// Raise an unexpected token error.

	pp.unexpected = function(pos) {
	  this.raise(pos != null ? pos : this.start, "Unexpected token");
	};

	function DestructuringErrors() {
	  this.shorthandAssign =
	  this.trailingComma =
	  this.parenthesizedAssign =
	  this.parenthesizedBind =
	  this.doubleProto =
	    -1;
	}

	pp.checkPatternErrors = function(refDestructuringErrors, isAssign) {
	  if (!refDestructuringErrors) { return }
	  if (refDestructuringErrors.trailingComma > -1)
	    { this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element"); }
	  var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
	  if (parens > -1) { this.raiseRecoverable(parens, "Parenthesized pattern"); }
	};

	pp.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
	  if (!refDestructuringErrors) { return false }
	  var shorthandAssign = refDestructuringErrors.shorthandAssign;
	  var doubleProto = refDestructuringErrors.doubleProto;
	  if (!andThrow) { return shorthandAssign >= 0 || doubleProto >= 0 }
	  if (shorthandAssign >= 0)
	    { this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns"); }
	  if (doubleProto >= 0)
	    { this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property"); }
	};

	pp.checkYieldAwaitInDefaultParams = function() {
	  if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos))
	    { this.raise(this.yieldPos, "Yield expression cannot be a default value"); }
	  if (this.awaitPos)
	    { this.raise(this.awaitPos, "Await expression cannot be a default value"); }
	};

	pp.isSimpleAssignTarget = function(expr) {
	  if (expr.type === "ParenthesizedExpression")
	    { return this.isSimpleAssignTarget(expr.expression) }
	  return expr.type === "Identifier" || expr.type === "MemberExpression"
	};

	var pp$1 = Parser.prototype;

	// ### Statement parsing

	// Parse a program. Initializes the parser, reads any number of
	// statements, and wraps them in a Program node.  Optionally takes a
	// `program` argument.  If present, the statements will be appended
	// to its body instead of creating a new node.

	pp$1.parseTopLevel = function(node) {
	  var exports = {};
	  if (!node.body) { node.body = []; }
	  while (this.type !== types.eof) {
	    var stmt = this.parseStatement(null, true, exports);
	    node.body.push(stmt);
	  }
	  if (this.inModule)
	    { for (var i = 0, list = Object.keys(this.undefinedExports); i < list.length; i += 1)
	      {
	        var name = list[i];

	        this.raiseRecoverable(this.undefinedExports[name].start, ("Export '" + name + "' is not defined"));
	      } }
	  this.adaptDirectivePrologue(node.body);
	  this.next();
	  node.sourceType = this.options.sourceType;
	  return this.finishNode(node, "Program")
	};

	var loopLabel = {kind: "loop"}, switchLabel = {kind: "switch"};

	pp$1.isLet = function(context) {
	  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) { return false }
	  skipWhiteSpace.lastIndex = this.pos;
	  var skip = skipWhiteSpace.exec(this.input);
	  var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
	  // For ambiguous cases, determine if a LexicalDeclaration (or only a
	  // Statement) is allowed here. If context is not empty then only a Statement
	  // is allowed. However, `let [` is an explicit negative lookahead for
	  // ExpressionStatement, so special-case it first.
	  if (nextCh === 91) { return true } // '['
	  if (context) { return false }

	  if (nextCh === 123) { return true } // '{'
	  if (isIdentifierStart(nextCh, true)) {
	    var pos = next + 1;
	    while (isIdentifierChar(this.input.charCodeAt(pos), true)) { ++pos; }
	    var ident = this.input.slice(next, pos);
	    if (!keywordRelationalOperator.test(ident)) { return true }
	  }
	  return false
	};

	// check 'async [no LineTerminator here] function'
	// - 'async /*foo*/ function' is OK.
	// - 'async /*\n*/ function' is invalid.
	pp$1.isAsyncFunction = function() {
	  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
	    { return false }

	  skipWhiteSpace.lastIndex = this.pos;
	  var skip = skipWhiteSpace.exec(this.input);
	  var next = this.pos + skip[0].length;
	  return !lineBreak.test(this.input.slice(this.pos, next)) &&
	    this.input.slice(next, next + 8) === "function" &&
	    (next + 8 === this.input.length || !isIdentifierChar(this.input.charAt(next + 8)))
	};

	// Parse a single statement.
	//
	// If expecting a statement and finding a slash operator, parse a
	// regular expression literal. This is to handle cases like
	// `if (foo) /blah/.exec(foo)`, where looking at the previous token
	// does not help.

	pp$1.parseStatement = function(context, topLevel, exports) {
	  var starttype = this.type, node = this.startNode(), kind;

	  if (this.isLet(context)) {
	    starttype = types._var;
	    kind = "let";
	  }

	  // Most types of statements are recognized by the keyword they
	  // start with. Many are trivial to parse, some require a bit of
	  // complexity.

	  switch (starttype) {
	  case types._break: case types._continue: return this.parseBreakContinueStatement(node, starttype.keyword)
	  case types._debugger: return this.parseDebuggerStatement(node)
	  case types._do: return this.parseDoStatement(node)
	  case types._for: return this.parseForStatement(node)
	  case types._function:
	    // Function as sole body of either an if statement or a labeled statement
	    // works, but not when it is part of a labeled statement that is the sole
	    // body of an if statement.
	    if ((context && (this.strict || context !== "if" && context !== "label")) && this.options.ecmaVersion >= 6) { this.unexpected(); }
	    return this.parseFunctionStatement(node, false, !context)
	  case types._class:
	    if (context) { this.unexpected(); }
	    return this.parseClass(node, true)
	  case types._if: return this.parseIfStatement(node)
	  case types._return: return this.parseReturnStatement(node)
	  case types._switch: return this.parseSwitchStatement(node)
	  case types._throw: return this.parseThrowStatement(node)
	  case types._try: return this.parseTryStatement(node)
	  case types._const: case types._var:
	    kind = kind || this.value;
	    if (context && kind !== "var") { this.unexpected(); }
	    return this.parseVarStatement(node, kind)
	  case types._while: return this.parseWhileStatement(node)
	  case types._with: return this.parseWithStatement(node)
	  case types.braceL: return this.parseBlock(true, node)
	  case types.semi: return this.parseEmptyStatement(node)
	  case types._export:
	  case types._import:
	    if (this.options.ecmaVersion > 10 && starttype === types._import) {
	      skipWhiteSpace.lastIndex = this.pos;
	      var skip = skipWhiteSpace.exec(this.input);
	      var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
	      if (nextCh === 40 || nextCh === 46) // '(' or '.'
	        { return this.parseExpressionStatement(node, this.parseExpression()) }
	    }

	    if (!this.options.allowImportExportEverywhere) {
	      if (!topLevel)
	        { this.raise(this.start, "'import' and 'export' may only appear at the top level"); }
	      if (!this.inModule)
	        { this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'"); }
	    }
	    return starttype === types._import ? this.parseImport(node) : this.parseExport(node, exports)

	    // If the statement does not start with a statement keyword or a
	    // brace, it's an ExpressionStatement or LabeledStatement. We
	    // simply start parsing an expression, and afterwards, if the
	    // next token is a colon and the expression was a simple
	    // Identifier node, we switch to interpreting it as a label.
	  default:
	    if (this.isAsyncFunction()) {
	      if (context) { this.unexpected(); }
	      this.next();
	      return this.parseFunctionStatement(node, true, !context)
	    }

	    var maybeName = this.value, expr = this.parseExpression();
	    if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon))
	      { return this.parseLabeledStatement(node, maybeName, expr, context) }
	    else { return this.parseExpressionStatement(node, expr) }
	  }
	};

	pp$1.parseBreakContinueStatement = function(node, keyword) {
	  var isBreak = keyword === "break";
	  this.next();
	  if (this.eat(types.semi) || this.insertSemicolon()) { node.label = null; }
	  else if (this.type !== types.name) { this.unexpected(); }
	  else {
	    node.label = this.parseIdent();
	    this.semicolon();
	  }

	  // Verify that there is an actual destination to break or
	  // continue to.
	  var i = 0;
	  for (; i < this.labels.length; ++i) {
	    var lab = this.labels[i];
	    if (node.label == null || lab.name === node.label.name) {
	      if (lab.kind != null && (isBreak || lab.kind === "loop")) { break }
	      if (node.label && isBreak) { break }
	    }
	  }
	  if (i === this.labels.length) { this.raise(node.start, "Unsyntactic " + keyword); }
	  return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement")
	};

	pp$1.parseDebuggerStatement = function(node) {
	  this.next();
	  this.semicolon();
	  return this.finishNode(node, "DebuggerStatement")
	};

	pp$1.parseDoStatement = function(node) {
	  this.next();
	  this.labels.push(loopLabel);
	  node.body = this.parseStatement("do");
	  this.labels.pop();
	  this.expect(types._while);
	  node.test = this.parseParenExpression();
	  if (this.options.ecmaVersion >= 6)
	    { this.eat(types.semi); }
	  else
	    { this.semicolon(); }
	  return this.finishNode(node, "DoWhileStatement")
	};

	// Disambiguating between a `for` and a `for`/`in` or `for`/`of`
	// loop is non-trivial. Basically, we have to parse the init `var`
	// statement or expression, disallowing the `in` operator (see
	// the second parameter to `parseExpression`), and then check
	// whether the next token is `in` or `of`. When there is no init
	// part (semicolon immediately after the opening parenthesis), it
	// is a regular `for` loop.

	pp$1.parseForStatement = function(node) {
	  this.next();
	  var awaitAt = (this.options.ecmaVersion >= 9 && (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction)) && this.eatContextual("await")) ? this.lastTokStart : -1;
	  this.labels.push(loopLabel);
	  this.enterScope(0);
	  this.expect(types.parenL);
	  if (this.type === types.semi) {
	    if (awaitAt > -1) { this.unexpected(awaitAt); }
	    return this.parseFor(node, null)
	  }
	  var isLet = this.isLet();
	  if (this.type === types._var || this.type === types._const || isLet) {
	    var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
	    this.next();
	    this.parseVar(init$1, true, kind);
	    this.finishNode(init$1, "VariableDeclaration");
	    if ((this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) && init$1.declarations.length === 1) {
	      if (this.options.ecmaVersion >= 9) {
	        if (this.type === types._in) {
	          if (awaitAt > -1) { this.unexpected(awaitAt); }
	        } else { node.await = awaitAt > -1; }
	      }
	      return this.parseForIn(node, init$1)
	    }
	    if (awaitAt > -1) { this.unexpected(awaitAt); }
	    return this.parseFor(node, init$1)
	  }
	  var refDestructuringErrors = new DestructuringErrors;
	  var init = this.parseExpression(true, refDestructuringErrors);
	  if (this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
	    if (this.options.ecmaVersion >= 9) {
	      if (this.type === types._in) {
	        if (awaitAt > -1) { this.unexpected(awaitAt); }
	      } else { node.await = awaitAt > -1; }
	    }
	    this.toAssignable(init, false, refDestructuringErrors);
	    this.checkLVal(init);
	    return this.parseForIn(node, init)
	  } else {
	    this.checkExpressionErrors(refDestructuringErrors, true);
	  }
	  if (awaitAt > -1) { this.unexpected(awaitAt); }
	  return this.parseFor(node, init)
	};

	pp$1.parseFunctionStatement = function(node, isAsync, declarationPosition) {
	  this.next();
	  return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync)
	};

	pp$1.parseIfStatement = function(node) {
	  this.next();
	  node.test = this.parseParenExpression();
	  // allow function declarations in branches, but only in non-strict mode
	  node.consequent = this.parseStatement("if");
	  node.alternate = this.eat(types._else) ? this.parseStatement("if") : null;
	  return this.finishNode(node, "IfStatement")
	};

	pp$1.parseReturnStatement = function(node) {
	  if (!this.inFunction && !this.options.allowReturnOutsideFunction)
	    { this.raise(this.start, "'return' outside of function"); }
	  this.next();

	  // In `return` (and `break`/`continue`), the keywords with
	  // optional arguments, we eagerly look for a semicolon or the
	  // possibility to insert one.

	  if (this.eat(types.semi) || this.insertSemicolon()) { node.argument = null; }
	  else { node.argument = this.parseExpression(); this.semicolon(); }
	  return this.finishNode(node, "ReturnStatement")
	};

	pp$1.parseSwitchStatement = function(node) {
	  this.next();
	  node.discriminant = this.parseParenExpression();
	  node.cases = [];
	  this.expect(types.braceL);
	  this.labels.push(switchLabel);
	  this.enterScope(0);

	  // Statements under must be grouped (by label) in SwitchCase
	  // nodes. `cur` is used to keep the node that we are currently
	  // adding statements to.

	  var cur;
	  for (var sawDefault = false; this.type !== types.braceR;) {
	    if (this.type === types._case || this.type === types._default) {
	      var isCase = this.type === types._case;
	      if (cur) { this.finishNode(cur, "SwitchCase"); }
	      node.cases.push(cur = this.startNode());
	      cur.consequent = [];
	      this.next();
	      if (isCase) {
	        cur.test = this.parseExpression();
	      } else {
	        if (sawDefault) { this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"); }
	        sawDefault = true;
	        cur.test = null;
	      }
	      this.expect(types.colon);
	    } else {
	      if (!cur) { this.unexpected(); }
	      cur.consequent.push(this.parseStatement(null));
	    }
	  }
	  this.exitScope();
	  if (cur) { this.finishNode(cur, "SwitchCase"); }
	  this.next(); // Closing brace
	  this.labels.pop();
	  return this.finishNode(node, "SwitchStatement")
	};

	pp$1.parseThrowStatement = function(node) {
	  this.next();
	  if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start)))
	    { this.raise(this.lastTokEnd, "Illegal newline after throw"); }
	  node.argument = this.parseExpression();
	  this.semicolon();
	  return this.finishNode(node, "ThrowStatement")
	};

	// Reused empty array added for node fields that are always empty.

	var empty = [];

	pp$1.parseTryStatement = function(node) {
	  this.next();
	  node.block = this.parseBlock();
	  node.handler = null;
	  if (this.type === types._catch) {
	    var clause = this.startNode();
	    this.next();
	    if (this.eat(types.parenL)) {
	      clause.param = this.parseBindingAtom();
	      var simple = clause.param.type === "Identifier";
	      this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
	      this.checkLVal(clause.param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
	      this.expect(types.parenR);
	    } else {
	      if (this.options.ecmaVersion < 10) { this.unexpected(); }
	      clause.param = null;
	      this.enterScope(0);
	    }
	    clause.body = this.parseBlock(false);
	    this.exitScope();
	    node.handler = this.finishNode(clause, "CatchClause");
	  }
	  node.finalizer = this.eat(types._finally) ? this.parseBlock() : null;
	  if (!node.handler && !node.finalizer)
	    { this.raise(node.start, "Missing catch or finally clause"); }
	  return this.finishNode(node, "TryStatement")
	};

	pp$1.parseVarStatement = function(node, kind) {
	  this.next();
	  this.parseVar(node, false, kind);
	  this.semicolon();
	  return this.finishNode(node, "VariableDeclaration")
	};

	pp$1.parseWhileStatement = function(node) {
	  this.next();
	  node.test = this.parseParenExpression();
	  this.labels.push(loopLabel);
	  node.body = this.parseStatement("while");
	  this.labels.pop();
	  return this.finishNode(node, "WhileStatement")
	};

	pp$1.parseWithStatement = function(node) {
	  if (this.strict) { this.raise(this.start, "'with' in strict mode"); }
	  this.next();
	  node.object = this.parseParenExpression();
	  node.body = this.parseStatement("with");
	  return this.finishNode(node, "WithStatement")
	};

	pp$1.parseEmptyStatement = function(node) {
	  this.next();
	  return this.finishNode(node, "EmptyStatement")
	};

	pp$1.parseLabeledStatement = function(node, maybeName, expr, context) {
	  for (var i$1 = 0, list = this.labels; i$1 < list.length; i$1 += 1)
	    {
	    var label = list[i$1];

	    if (label.name === maybeName)
	      { this.raise(expr.start, "Label '" + maybeName + "' is already declared");
	  } }
	  var kind = this.type.isLoop ? "loop" : this.type === types._switch ? "switch" : null;
	  for (var i = this.labels.length - 1; i >= 0; i--) {
	    var label$1 = this.labels[i];
	    if (label$1.statementStart === node.start) {
	      // Update information about previous labels on this node
	      label$1.statementStart = this.start;
	      label$1.kind = kind;
	    } else { break }
	  }
	  this.labels.push({name: maybeName, kind: kind, statementStart: this.start});
	  node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
	  this.labels.pop();
	  node.label = expr;
	  return this.finishNode(node, "LabeledStatement")
	};

	pp$1.parseExpressionStatement = function(node, expr) {
	  node.expression = expr;
	  this.semicolon();
	  return this.finishNode(node, "ExpressionStatement")
	};

	// Parse a semicolon-enclosed block of statements, handling `"use
	// strict"` declarations when `allowStrict` is true (used for
	// function bodies).

	pp$1.parseBlock = function(createNewLexicalScope, node, exitStrict) {
	  if ( createNewLexicalScope === void 0 ) createNewLexicalScope = true;
	  if ( node === void 0 ) node = this.startNode();

	  node.body = [];
	  this.expect(types.braceL);
	  if (createNewLexicalScope) { this.enterScope(0); }
	  while (this.type !== types.braceR) {
	    var stmt = this.parseStatement(null);
	    node.body.push(stmt);
	  }
	  if (exitStrict) { this.strict = false; }
	  this.next();
	  if (createNewLexicalScope) { this.exitScope(); }
	  return this.finishNode(node, "BlockStatement")
	};

	// Parse a regular `for` loop. The disambiguation code in
	// `parseStatement` will already have parsed the init statement or
	// expression.

	pp$1.parseFor = function(node, init) {
	  node.init = init;
	  this.expect(types.semi);
	  node.test = this.type === types.semi ? null : this.parseExpression();
	  this.expect(types.semi);
	  node.update = this.type === types.parenR ? null : this.parseExpression();
	  this.expect(types.parenR);
	  node.body = this.parseStatement("for");
	  this.exitScope();
	  this.labels.pop();
	  return this.finishNode(node, "ForStatement")
	};

	// Parse a `for`/`in` and `for`/`of` loop, which are almost
	// same from parser's perspective.

	pp$1.parseForIn = function(node, init) {
	  var isForIn = this.type === types._in;
	  this.next();

	  if (
	    init.type === "VariableDeclaration" &&
	    init.declarations[0].init != null &&
	    (
	      !isForIn ||
	      this.options.ecmaVersion < 8 ||
	      this.strict ||
	      init.kind !== "var" ||
	      init.declarations[0].id.type !== "Identifier"
	    )
	  ) {
	    this.raise(
	      init.start,
	      ((isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer")
	    );
	  } else if (init.type === "AssignmentPattern") {
	    this.raise(init.start, "Invalid left-hand side in for-loop");
	  }
	  node.left = init;
	  node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
	  this.expect(types.parenR);
	  node.body = this.parseStatement("for");
	  this.exitScope();
	  this.labels.pop();
	  return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement")
	};

	// Parse a list of variable declarations.

	pp$1.parseVar = function(node, isFor, kind) {
	  node.declarations = [];
	  node.kind = kind;
	  for (;;) {
	    var decl = this.startNode();
	    this.parseVarId(decl, kind);
	    if (this.eat(types.eq)) {
	      decl.init = this.parseMaybeAssign(isFor);
	    } else if (kind === "const" && !(this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of")))) {
	      this.unexpected();
	    } else if (decl.id.type !== "Identifier" && !(isFor && (this.type === types._in || this.isContextual("of")))) {
	      this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
	    } else {
	      decl.init = null;
	    }
	    node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
	    if (!this.eat(types.comma)) { break }
	  }
	  return node
	};

	pp$1.parseVarId = function(decl, kind) {
	  decl.id = this.parseBindingAtom();
	  this.checkLVal(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
	};

	var FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4;

	// Parse a function declaration or literal (depending on the
	// `statement & FUNC_STATEMENT`).

	// Remove `allowExpressionBody` for 7.0.0, as it is only called with false
	pp$1.parseFunction = function(node, statement, allowExpressionBody, isAsync) {
	  this.initFunction(node);
	  if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
	    if (this.type === types.star && (statement & FUNC_HANGING_STATEMENT))
	      { this.unexpected(); }
	    node.generator = this.eat(types.star);
	  }
	  if (this.options.ecmaVersion >= 8)
	    { node.async = !!isAsync; }

	  if (statement & FUNC_STATEMENT) {
	    node.id = (statement & FUNC_NULLABLE_ID) && this.type !== types.name ? null : this.parseIdent();
	    if (node.id && !(statement & FUNC_HANGING_STATEMENT))
	      // If it is a regular function declaration in sloppy mode, then it is
	      // subject to Annex B semantics (BIND_FUNCTION). Otherwise, the binding
	      // mode depends on properties of the current scope (see
	      // treatFunctionsAsVar).
	      { this.checkLVal(node.id, (this.strict || node.generator || node.async) ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION); }
	  }

	  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
	  this.yieldPos = 0;
	  this.awaitPos = 0;
	  this.awaitIdentPos = 0;
	  this.enterScope(functionFlags(node.async, node.generator));

	  if (!(statement & FUNC_STATEMENT))
	    { node.id = this.type === types.name ? this.parseIdent() : null; }

	  this.parseFunctionParams(node);
	  this.parseFunctionBody(node, allowExpressionBody, false);

	  this.yieldPos = oldYieldPos;
	  this.awaitPos = oldAwaitPos;
	  this.awaitIdentPos = oldAwaitIdentPos;
	  return this.finishNode(node, (statement & FUNC_STATEMENT) ? "FunctionDeclaration" : "FunctionExpression")
	};

	pp$1.parseFunctionParams = function(node) {
	  this.expect(types.parenL);
	  node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
	  this.checkYieldAwaitInDefaultParams();
	};

	// Parse a class declaration or literal (depending on the
	// `isStatement` parameter).

	pp$1.parseClass = function(node, isStatement) {
	  this.next();

	  // ecma-262 14.6 Class Definitions
	  // A class definition is always strict mode code.
	  var oldStrict = this.strict;
	  this.strict = true;

	  this.parseClassId(node, isStatement);
	  this.parseClassSuper(node);
	  var classBody = this.startNode();
	  var hadConstructor = false;
	  classBody.body = [];
	  this.expect(types.braceL);
	  while (this.type !== types.braceR) {
	    var element = this.parseClassElement(node.superClass !== null);
	    if (element) {
	      classBody.body.push(element);
	      if (element.type === "MethodDefinition" && element.kind === "constructor") {
	        if (hadConstructor) { this.raise(element.start, "Duplicate constructor in the same class"); }
	        hadConstructor = true;
	      }
	    }
	  }
	  this.strict = oldStrict;
	  this.next();
	  node.body = this.finishNode(classBody, "ClassBody");
	  return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression")
	};

	pp$1.parseClassElement = function(constructorAllowsSuper) {
	  var this$1 = this;

	  if (this.eat(types.semi)) { return null }

	  var method = this.startNode();
	  var tryContextual = function (k, noLineBreak) {
	    if ( noLineBreak === void 0 ) noLineBreak = false;

	    var start = this$1.start, startLoc = this$1.startLoc;
	    if (!this$1.eatContextual(k)) { return false }
	    if (this$1.type !== types.parenL && (!noLineBreak || !this$1.canInsertSemicolon())) { return true }
	    if (method.key) { this$1.unexpected(); }
	    method.computed = false;
	    method.key = this$1.startNodeAt(start, startLoc);
	    method.key.name = k;
	    this$1.finishNode(method.key, "Identifier");
	    return false
	  };

	  method.kind = "method";
	  method.static = tryContextual("static");
	  var isGenerator = this.eat(types.star);
	  var isAsync = false;
	  if (!isGenerator) {
	    if (this.options.ecmaVersion >= 8 && tryContextual("async", true)) {
	      isAsync = true;
	      isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
	    } else if (tryContextual("get")) {
	      method.kind = "get";
	    } else if (tryContextual("set")) {
	      method.kind = "set";
	    }
	  }
	  if (!method.key) { this.parsePropertyName(method); }
	  var key = method.key;
	  var allowsDirectSuper = false;
	  if (!method.computed && !method.static && (key.type === "Identifier" && key.name === "constructor" ||
	      key.type === "Literal" && key.value === "constructor")) {
	    if (method.kind !== "method") { this.raise(key.start, "Constructor can't have get/set modifier"); }
	    if (isGenerator) { this.raise(key.start, "Constructor can't be a generator"); }
	    if (isAsync) { this.raise(key.start, "Constructor can't be an async method"); }
	    method.kind = "constructor";
	    allowsDirectSuper = constructorAllowsSuper;
	  } else if (method.static && key.type === "Identifier" && key.name === "prototype") {
	    this.raise(key.start, "Classes may not have a static property named prototype");
	  }
	  this.parseClassMethod(method, isGenerator, isAsync, allowsDirectSuper);
	  if (method.kind === "get" && method.value.params.length !== 0)
	    { this.raiseRecoverable(method.value.start, "getter should have no params"); }
	  if (method.kind === "set" && method.value.params.length !== 1)
	    { this.raiseRecoverable(method.value.start, "setter should have exactly one param"); }
	  if (method.kind === "set" && method.value.params[0].type === "RestElement")
	    { this.raiseRecoverable(method.value.params[0].start, "Setter cannot use rest params"); }
	  return method
	};

	pp$1.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
	  method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
	  return this.finishNode(method, "MethodDefinition")
	};

	pp$1.parseClassId = function(node, isStatement) {
	  if (this.type === types.name) {
	    node.id = this.parseIdent();
	    if (isStatement)
	      { this.checkLVal(node.id, BIND_LEXICAL, false); }
	  } else {
	    if (isStatement === true)
	      { this.unexpected(); }
	    node.id = null;
	  }
	};

	pp$1.parseClassSuper = function(node) {
	  node.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
	};

	// Parses module export declaration.

	pp$1.parseExport = function(node, exports) {
	  this.next();
	  // export * from '...'
	  if (this.eat(types.star)) {
	    if (this.options.ecmaVersion >= 11) {
	      if (this.eatContextual("as")) {
	        node.exported = this.parseIdent(true);
	        this.checkExport(exports, node.exported.name, this.lastTokStart);
	      } else {
	        node.exported = null;
	      }
	    }
	    this.expectContextual("from");
	    if (this.type !== types.string) { this.unexpected(); }
	    node.source = this.parseExprAtom();
	    this.semicolon();
	    return this.finishNode(node, "ExportAllDeclaration")
	  }
	  if (this.eat(types._default)) { // export default ...
	    this.checkExport(exports, "default", this.lastTokStart);
	    var isAsync;
	    if (this.type === types._function || (isAsync = this.isAsyncFunction())) {
	      var fNode = this.startNode();
	      this.next();
	      if (isAsync) { this.next(); }
	      node.declaration = this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
	    } else if (this.type === types._class) {
	      var cNode = this.startNode();
	      node.declaration = this.parseClass(cNode, "nullableID");
	    } else {
	      node.declaration = this.parseMaybeAssign();
	      this.semicolon();
	    }
	    return this.finishNode(node, "ExportDefaultDeclaration")
	  }
	  // export var|const|let|function|class ...
	  if (this.shouldParseExportStatement()) {
	    node.declaration = this.parseStatement(null);
	    if (node.declaration.type === "VariableDeclaration")
	      { this.checkVariableExport(exports, node.declaration.declarations); }
	    else
	      { this.checkExport(exports, node.declaration.id.name, node.declaration.id.start); }
	    node.specifiers = [];
	    node.source = null;
	  } else { // export { x, y as z } [from '...']
	    node.declaration = null;
	    node.specifiers = this.parseExportSpecifiers(exports);
	    if (this.eatContextual("from")) {
	      if (this.type !== types.string) { this.unexpected(); }
	      node.source = this.parseExprAtom();
	    } else {
	      for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
	        // check for keywords used as local names
	        var spec = list[i];

	        this.checkUnreserved(spec.local);
	        // check if export is defined
	        this.checkLocalExport(spec.local);
	      }

	      node.source = null;
	    }
	    this.semicolon();
	  }
	  return this.finishNode(node, "ExportNamedDeclaration")
	};

	pp$1.checkExport = function(exports, name, pos) {
	  if (!exports) { return }
	  if (has(exports, name))
	    { this.raiseRecoverable(pos, "Duplicate export '" + name + "'"); }
	  exports[name] = true;
	};

	pp$1.checkPatternExport = function(exports, pat) {
	  var type = pat.type;
	  if (type === "Identifier")
	    { this.checkExport(exports, pat.name, pat.start); }
	  else if (type === "ObjectPattern")
	    { for (var i = 0, list = pat.properties; i < list.length; i += 1)
	      {
	        var prop = list[i];

	        this.checkPatternExport(exports, prop);
	      } }
	  else if (type === "ArrayPattern")
	    { for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
	      var elt = list$1[i$1];

	        if (elt) { this.checkPatternExport(exports, elt); }
	    } }
	  else if (type === "Property")
	    { this.checkPatternExport(exports, pat.value); }
	  else if (type === "AssignmentPattern")
	    { this.checkPatternExport(exports, pat.left); }
	  else if (type === "RestElement")
	    { this.checkPatternExport(exports, pat.argument); }
	  else if (type === "ParenthesizedExpression")
	    { this.checkPatternExport(exports, pat.expression); }
	};

	pp$1.checkVariableExport = function(exports, decls) {
	  if (!exports) { return }
	  for (var i = 0, list = decls; i < list.length; i += 1)
	    {
	    var decl = list[i];

	    this.checkPatternExport(exports, decl.id);
	  }
	};

	pp$1.shouldParseExportStatement = function() {
	  return this.type.keyword === "var" ||
	    this.type.keyword === "const" ||
	    this.type.keyword === "class" ||
	    this.type.keyword === "function" ||
	    this.isLet() ||
	    this.isAsyncFunction()
	};

	// Parses a comma-separated list of module exports.

	pp$1.parseExportSpecifiers = function(exports) {
	  var nodes = [], first = true;
	  // export { x, y as z } [from '...']
	  this.expect(types.braceL);
	  while (!this.eat(types.braceR)) {
	    if (!first) {
	      this.expect(types.comma);
	      if (this.afterTrailingComma(types.braceR)) { break }
	    } else { first = false; }

	    var node = this.startNode();
	    node.local = this.parseIdent(true);
	    node.exported = this.eatContextual("as") ? this.parseIdent(true) : node.local;
	    this.checkExport(exports, node.exported.name, node.exported.start);
	    nodes.push(this.finishNode(node, "ExportSpecifier"));
	  }
	  return nodes
	};

	// Parses import declaration.

	pp$1.parseImport = function(node) {
	  this.next();
	  // import '...'
	  if (this.type === types.string) {
	    node.specifiers = empty;
	    node.source = this.parseExprAtom();
	  } else {
	    node.specifiers = this.parseImportSpecifiers();
	    this.expectContextual("from");
	    node.source = this.type === types.string ? this.parseExprAtom() : this.unexpected();
	  }
	  this.semicolon();
	  return this.finishNode(node, "ImportDeclaration")
	};

	// Parses a comma-separated list of module imports.

	pp$1.parseImportSpecifiers = function() {
	  var nodes = [], first = true;
	  if (this.type === types.name) {
	    // import defaultObj, { x, y as z } from '...'
	    var node = this.startNode();
	    node.local = this.parseIdent();
	    this.checkLVal(node.local, BIND_LEXICAL);
	    nodes.push(this.finishNode(node, "ImportDefaultSpecifier"));
	    if (!this.eat(types.comma)) { return nodes }
	  }
	  if (this.type === types.star) {
	    var node$1 = this.startNode();
	    this.next();
	    this.expectContextual("as");
	    node$1.local = this.parseIdent();
	    this.checkLVal(node$1.local, BIND_LEXICAL);
	    nodes.push(this.finishNode(node$1, "ImportNamespaceSpecifier"));
	    return nodes
	  }
	  this.expect(types.braceL);
	  while (!this.eat(types.braceR)) {
	    if (!first) {
	      this.expect(types.comma);
	      if (this.afterTrailingComma(types.braceR)) { break }
	    } else { first = false; }

	    var node$2 = this.startNode();
	    node$2.imported = this.parseIdent(true);
	    if (this.eatContextual("as")) {
	      node$2.local = this.parseIdent();
	    } else {
	      this.checkUnreserved(node$2.imported);
	      node$2.local = node$2.imported;
	    }
	    this.checkLVal(node$2.local, BIND_LEXICAL);
	    nodes.push(this.finishNode(node$2, "ImportSpecifier"));
	  }
	  return nodes
	};

	// Set `ExpressionStatement#directive` property for directive prologues.
	pp$1.adaptDirectivePrologue = function(statements) {
	  for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
	    statements[i].directive = statements[i].expression.raw.slice(1, -1);
	  }
	};
	pp$1.isDirectiveCandidate = function(statement) {
	  return (
	    statement.type === "ExpressionStatement" &&
	    statement.expression.type === "Literal" &&
	    typeof statement.expression.value === "string" &&
	    // Reject parenthesized strings.
	    (this.input[statement.start] === "\"" || this.input[statement.start] === "'")
	  )
	};

	var pp$2 = Parser.prototype;

	// Convert existing expression atom to assignable pattern
	// if possible.

	pp$2.toAssignable = function(node, isBinding, refDestructuringErrors) {
	  if (this.options.ecmaVersion >= 6 && node) {
	    switch (node.type) {
	    case "Identifier":
	      if (this.inAsync && node.name === "await")
	        { this.raise(node.start, "Cannot use 'await' as identifier inside an async function"); }
	      break

	    case "ObjectPattern":
	    case "ArrayPattern":
	    case "RestElement":
	      break

	    case "ObjectExpression":
	      node.type = "ObjectPattern";
	      if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
	      for (var i = 0, list = node.properties; i < list.length; i += 1) {
	        var prop = list[i];

	      this.toAssignable(prop, isBinding);
	        // Early error:
	        //   AssignmentRestProperty[Yield, Await] :
	        //     `...` DestructuringAssignmentTarget[Yield, Await]
	        //
	        //   It is a Syntax Error if |DestructuringAssignmentTarget| is an |ArrayLiteral| or an |ObjectLiteral|.
	        if (
	          prop.type === "RestElement" &&
	          (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")
	        ) {
	          this.raise(prop.argument.start, "Unexpected token");
	        }
	      }
	      break

	    case "Property":
	      // AssignmentProperty has type === "Property"
	      if (node.kind !== "init") { this.raise(node.key.start, "Object pattern can't contain getter or setter"); }
	      this.toAssignable(node.value, isBinding);
	      break

	    case "ArrayExpression":
	      node.type = "ArrayPattern";
	      if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
	      this.toAssignableList(node.elements, isBinding);
	      break

	    case "SpreadElement":
	      node.type = "RestElement";
	      this.toAssignable(node.argument, isBinding);
	      if (node.argument.type === "AssignmentPattern")
	        { this.raise(node.argument.start, "Rest elements cannot have a default value"); }
	      break

	    case "AssignmentExpression":
	      if (node.operator !== "=") { this.raise(node.left.end, "Only '=' operator can be used for specifying default value."); }
	      node.type = "AssignmentPattern";
	      delete node.operator;
	      this.toAssignable(node.left, isBinding);
	      // falls through to AssignmentPattern

	    case "AssignmentPattern":
	      break

	    case "ParenthesizedExpression":
	      this.toAssignable(node.expression, isBinding, refDestructuringErrors);
	      break

	    case "ChainExpression":
	      this.raiseRecoverable(node.start, "Optional chaining cannot appear in left-hand side");
	      break

	    case "MemberExpression":
	      if (!isBinding) { break }

	    default:
	      this.raise(node.start, "Assigning to rvalue");
	    }
	  } else if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
	  return node
	};

	// Convert list of expression atoms to binding list.

	pp$2.toAssignableList = function(exprList, isBinding) {
	  var end = exprList.length;
	  for (var i = 0; i < end; i++) {
	    var elt = exprList[i];
	    if (elt) { this.toAssignable(elt, isBinding); }
	  }
	  if (end) {
	    var last = exprList[end - 1];
	    if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier")
	      { this.unexpected(last.argument.start); }
	  }
	  return exprList
	};

	// Parses spread element.

	pp$2.parseSpread = function(refDestructuringErrors) {
	  var node = this.startNode();
	  this.next();
	  node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
	  return this.finishNode(node, "SpreadElement")
	};

	pp$2.parseRestBinding = function() {
	  var node = this.startNode();
	  this.next();

	  // RestElement inside of a function parameter must be an identifier
	  if (this.options.ecmaVersion === 6 && this.type !== types.name)
	    { this.unexpected(); }

	  node.argument = this.parseBindingAtom();

	  return this.finishNode(node, "RestElement")
	};

	// Parses lvalue (assignable) atom.

	pp$2.parseBindingAtom = function() {
	  if (this.options.ecmaVersion >= 6) {
	    switch (this.type) {
	    case types.bracketL:
	      var node = this.startNode();
	      this.next();
	      node.elements = this.parseBindingList(types.bracketR, true, true);
	      return this.finishNode(node, "ArrayPattern")

	    case types.braceL:
	      return this.parseObj(true)
	    }
	  }
	  return this.parseIdent()
	};

	pp$2.parseBindingList = function(close, allowEmpty, allowTrailingComma) {
	  var elts = [], first = true;
	  while (!this.eat(close)) {
	    if (first) { first = false; }
	    else { this.expect(types.comma); }
	    if (allowEmpty && this.type === types.comma) {
	      elts.push(null);
	    } else if (allowTrailingComma && this.afterTrailingComma(close)) {
	      break
	    } else if (this.type === types.ellipsis) {
	      var rest = this.parseRestBinding();
	      this.parseBindingListItem(rest);
	      elts.push(rest);
	      if (this.type === types.comma) { this.raise(this.start, "Comma is not permitted after the rest element"); }
	      this.expect(close);
	      break
	    } else {
	      var elem = this.parseMaybeDefault(this.start, this.startLoc);
	      this.parseBindingListItem(elem);
	      elts.push(elem);
	    }
	  }
	  return elts
	};

	pp$2.parseBindingListItem = function(param) {
	  return param
	};

	// Parses assignment pattern around given atom if possible.

	pp$2.parseMaybeDefault = function(startPos, startLoc, left) {
	  left = left || this.parseBindingAtom();
	  if (this.options.ecmaVersion < 6 || !this.eat(types.eq)) { return left }
	  var node = this.startNodeAt(startPos, startLoc);
	  node.left = left;
	  node.right = this.parseMaybeAssign();
	  return this.finishNode(node, "AssignmentPattern")
	};

	// Verify that a node is an lval — something that can be assigned
	// to.
	// bindingType can be either:
	// 'var' indicating that the lval creates a 'var' binding
	// 'let' indicating that the lval creates a lexical ('let' or 'const') binding
	// 'none' indicating that the binding should be checked for illegal identifiers, but not for duplicate references

	pp$2.checkLVal = function(expr, bindingType, checkClashes) {
	  if ( bindingType === void 0 ) bindingType = BIND_NONE;

	  switch (expr.type) {
	  case "Identifier":
	    if (bindingType === BIND_LEXICAL && expr.name === "let")
	      { this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name"); }
	    if (this.strict && this.reservedWordsStrictBind.test(expr.name))
	      { this.raiseRecoverable(expr.start, (bindingType ? "Binding " : "Assigning to ") + expr.name + " in strict mode"); }
	    if (checkClashes) {
	      if (has(checkClashes, expr.name))
	        { this.raiseRecoverable(expr.start, "Argument name clash"); }
	      checkClashes[expr.name] = true;
	    }
	    if (bindingType !== BIND_NONE && bindingType !== BIND_OUTSIDE) { this.declareName(expr.name, bindingType, expr.start); }
	    break

	  case "ChainExpression":
	    this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
	    break

	  case "MemberExpression":
	    if (bindingType) { this.raiseRecoverable(expr.start, "Binding member expression"); }
	    break

	  case "ObjectPattern":
	    for (var i = 0, list = expr.properties; i < list.length; i += 1)
	      {
	    var prop = list[i];

	    this.checkLVal(prop, bindingType, checkClashes);
	  }
	    break

	  case "Property":
	    // AssignmentProperty has type === "Property"
	    this.checkLVal(expr.value, bindingType, checkClashes);
	    break

	  case "ArrayPattern":
	    for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
	      var elem = list$1[i$1];

	    if (elem) { this.checkLVal(elem, bindingType, checkClashes); }
	    }
	    break

	  case "AssignmentPattern":
	    this.checkLVal(expr.left, bindingType, checkClashes);
	    break

	  case "RestElement":
	    this.checkLVal(expr.argument, bindingType, checkClashes);
	    break

	  case "ParenthesizedExpression":
	    this.checkLVal(expr.expression, bindingType, checkClashes);
	    break

	  default:
	    this.raise(expr.start, (bindingType ? "Binding" : "Assigning to") + " rvalue");
	  }
	};

	// A recursive descent parser operates by defining functions for all

	var pp$3 = Parser.prototype;

	// Check if property name clashes with already added.
	// Object/class getters and setters are not allowed to clash —
	// either with each other or with an init property — and in
	// strict mode, init properties are also not allowed to be repeated.

	pp$3.checkPropClash = function(prop, propHash, refDestructuringErrors) {
	  if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement")
	    { return }
	  if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand))
	    { return }
	  var key = prop.key;
	  var name;
	  switch (key.type) {
	  case "Identifier": name = key.name; break
	  case "Literal": name = String(key.value); break
	  default: return
	  }
	  var kind = prop.kind;
	  if (this.options.ecmaVersion >= 6) {
	    if (name === "__proto__" && kind === "init") {
	      if (propHash.proto) {
	        if (refDestructuringErrors) {
	          if (refDestructuringErrors.doubleProto < 0)
	            { refDestructuringErrors.doubleProto = key.start; }
	          // Backwards-compat kludge. Can be removed in version 6.0
	        } else { this.raiseRecoverable(key.start, "Redefinition of __proto__ property"); }
	      }
	      propHash.proto = true;
	    }
	    return
	  }
	  name = "$" + name;
	  var other = propHash[name];
	  if (other) {
	    var redefinition;
	    if (kind === "init") {
	      redefinition = this.strict && other.init || other.get || other.set;
	    } else {
	      redefinition = other.init || other[kind];
	    }
	    if (redefinition)
	      { this.raiseRecoverable(key.start, "Redefinition of property"); }
	  } else {
	    other = propHash[name] = {
	      init: false,
	      get: false,
	      set: false
	    };
	  }
	  other[kind] = true;
	};

	// ### Expression parsing

	// These nest, from the most general expression type at the top to
	// 'atomic', nondivisible expression types at the bottom. Most of
	// the functions will simply let the function(s) below them parse,
	// and, *if* the syntactic construct they handle is present, wrap
	// the AST node that the inner parser gave them in another node.

	// Parse a full expression. The optional arguments are used to
	// forbid the `in` operator (in for loops initalization expressions)
	// and provide reference for storing '=' operator inside shorthand
	// property assignment in contexts where both object expression
	// and object pattern might appear (so it's possible to raise
	// delayed syntax error at correct position).

	pp$3.parseExpression = function(noIn, refDestructuringErrors) {
	  var startPos = this.start, startLoc = this.startLoc;
	  var expr = this.parseMaybeAssign(noIn, refDestructuringErrors);
	  if (this.type === types.comma) {
	    var node = this.startNodeAt(startPos, startLoc);
	    node.expressions = [expr];
	    while (this.eat(types.comma)) { node.expressions.push(this.parseMaybeAssign(noIn, refDestructuringErrors)); }
	    return this.finishNode(node, "SequenceExpression")
	  }
	  return expr
	};

	// Parse an assignment expression. This includes applications of
	// operators like `+=`.

	pp$3.parseMaybeAssign = function(noIn, refDestructuringErrors, afterLeftParse) {
	  if (this.isContextual("yield")) {
	    if (this.inGenerator) { return this.parseYield(noIn) }
	    // The tokenizer will assume an expression is allowed after
	    // `yield`, but this isn't that kind of yield
	    else { this.exprAllowed = false; }
	  }

	  var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1;
	  if (refDestructuringErrors) {
	    oldParenAssign = refDestructuringErrors.parenthesizedAssign;
	    oldTrailingComma = refDestructuringErrors.trailingComma;
	    refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
	  } else {
	    refDestructuringErrors = new DestructuringErrors;
	    ownDestructuringErrors = true;
	  }

	  var startPos = this.start, startLoc = this.startLoc;
	  if (this.type === types.parenL || this.type === types.name)
	    { this.potentialArrowAt = this.start; }
	  var left = this.parseMaybeConditional(noIn, refDestructuringErrors);
	  if (afterLeftParse) { left = afterLeftParse.call(this, left, startPos, startLoc); }
	  if (this.type.isAssign) {
	    var node = this.startNodeAt(startPos, startLoc);
	    node.operator = this.value;
	    node.left = this.type === types.eq ? this.toAssignable(left, false, refDestructuringErrors) : left;
	    if (!ownDestructuringErrors) {
	      refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1;
	    }
	    if (refDestructuringErrors.shorthandAssign >= node.left.start)
	      { refDestructuringErrors.shorthandAssign = -1; } // reset because shorthand default was used correctly
	    this.checkLVal(left);
	    this.next();
	    node.right = this.parseMaybeAssign(noIn);
	    return this.finishNode(node, "AssignmentExpression")
	  } else {
	    if (ownDestructuringErrors) { this.checkExpressionErrors(refDestructuringErrors, true); }
	  }
	  if (oldParenAssign > -1) { refDestructuringErrors.parenthesizedAssign = oldParenAssign; }
	  if (oldTrailingComma > -1) { refDestructuringErrors.trailingComma = oldTrailingComma; }
	  return left
	};

	// Parse a ternary conditional (`?:`) operator.

	pp$3.parseMaybeConditional = function(noIn, refDestructuringErrors) {
	  var startPos = this.start, startLoc = this.startLoc;
	  var expr = this.parseExprOps(noIn, refDestructuringErrors);
	  if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
	  if (this.eat(types.question)) {
	    var node = this.startNodeAt(startPos, startLoc);
	    node.test = expr;
	    node.consequent = this.parseMaybeAssign();
	    this.expect(types.colon);
	    node.alternate = this.parseMaybeAssign(noIn);
	    return this.finishNode(node, "ConditionalExpression")
	  }
	  return expr
	};

	// Start the precedence parser.

	pp$3.parseExprOps = function(noIn, refDestructuringErrors) {
	  var startPos = this.start, startLoc = this.startLoc;
	  var expr = this.parseMaybeUnary(refDestructuringErrors, false);
	  if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
	  return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, noIn)
	};

	// Parse binary operators with the operator precedence parsing
	// algorithm. `left` is the left-hand side of the operator.
	// `minPrec` provides context that allows the function to stop and
	// defer further parser to one of its callers when it encounters an
	// operator that has a lower precedence than the set it is parsing.

	pp$3.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, noIn) {
	  var prec = this.type.binop;
	  if (prec != null && (!noIn || this.type !== types._in)) {
	    if (prec > minPrec) {
	      var logical = this.type === types.logicalOR || this.type === types.logicalAND;
	      var coalesce = this.type === types.coalesce;
	      if (coalesce) {
	        // Handle the precedence of `tt.coalesce` as equal to the range of logical expressions.
	        // In other words, `node.right` shouldn't contain logical expressions in order to check the mixed error.
	        prec = types.logicalAND.binop;
	      }
	      var op = this.value;
	      this.next();
	      var startPos = this.start, startLoc = this.startLoc;
	      var right = this.parseExprOp(this.parseMaybeUnary(null, false), startPos, startLoc, prec, noIn);
	      var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
	      if ((logical && this.type === types.coalesce) || (coalesce && (this.type === types.logicalOR || this.type === types.logicalAND))) {
	        this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
	      }
	      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn)
	    }
	  }
	  return left
	};

	pp$3.buildBinary = function(startPos, startLoc, left, right, op, logical) {
	  var node = this.startNodeAt(startPos, startLoc);
	  node.left = left;
	  node.operator = op;
	  node.right = right;
	  return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression")
	};

	// Parse unary operators, both prefix and postfix.

	pp$3.parseMaybeUnary = function(refDestructuringErrors, sawUnary) {
	  var startPos = this.start, startLoc = this.startLoc, expr;
	  if (this.isContextual("await") && (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction))) {
	    expr = this.parseAwait();
	    sawUnary = true;
	  } else if (this.type.prefix) {
	    var node = this.startNode(), update = this.type === types.incDec;
	    node.operator = this.value;
	    node.prefix = true;
	    this.next();
	    node.argument = this.parseMaybeUnary(null, true);
	    this.checkExpressionErrors(refDestructuringErrors, true);
	    if (update) { this.checkLVal(node.argument); }
	    else if (this.strict && node.operator === "delete" &&
	             node.argument.type === "Identifier")
	      { this.raiseRecoverable(node.start, "Deleting local variable in strict mode"); }
	    else { sawUnary = true; }
	    expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
	  } else {
	    expr = this.parseExprSubscripts(refDestructuringErrors);
	    if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
	    while (this.type.postfix && !this.canInsertSemicolon()) {
	      var node$1 = this.startNodeAt(startPos, startLoc);
	      node$1.operator = this.value;
	      node$1.prefix = false;
	      node$1.argument = expr;
	      this.checkLVal(expr);
	      this.next();
	      expr = this.finishNode(node$1, "UpdateExpression");
	    }
	  }

	  if (!sawUnary && this.eat(types.starstar))
	    { return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false), "**", false) }
	  else
	    { return expr }
	};

	// Parse call, dot, and `[]`-subscript expressions.

	pp$3.parseExprSubscripts = function(refDestructuringErrors) {
	  var startPos = this.start, startLoc = this.startLoc;
	  var expr = this.parseExprAtom(refDestructuringErrors);
	  if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
	    { return expr }
	  var result = this.parseSubscripts(expr, startPos, startLoc);
	  if (refDestructuringErrors && result.type === "MemberExpression") {
	    if (refDestructuringErrors.parenthesizedAssign >= result.start) { refDestructuringErrors.parenthesizedAssign = -1; }
	    if (refDestructuringErrors.parenthesizedBind >= result.start) { refDestructuringErrors.parenthesizedBind = -1; }
	  }
	  return result
	};

	pp$3.parseSubscripts = function(base, startPos, startLoc, noCalls) {
	  var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" &&
	      this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 &&
	      this.potentialArrowAt === base.start;
	  var optionalChained = false;

	  while (true) {
	    var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained);

	    if (element.optional) { optionalChained = true; }
	    if (element === base || element.type === "ArrowFunctionExpression") {
	      if (optionalChained) {
	        var chainNode = this.startNodeAt(startPos, startLoc);
	        chainNode.expression = element;
	        element = this.finishNode(chainNode, "ChainExpression");
	      }
	      return element
	    }

	    base = element;
	  }
	};

	pp$3.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained) {
	  var optionalSupported = this.options.ecmaVersion >= 11;
	  var optional = optionalSupported && this.eat(types.questionDot);
	  if (noCalls && optional) { this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions"); }

	  var computed = this.eat(types.bracketL);
	  if (computed || (optional && this.type !== types.parenL && this.type !== types.backQuote) || this.eat(types.dot)) {
	    var node = this.startNodeAt(startPos, startLoc);
	    node.object = base;
	    node.property = computed ? this.parseExpression() : this.parseIdent(this.options.allowReserved !== "never");
	    node.computed = !!computed;
	    if (computed) { this.expect(types.bracketR); }
	    if (optionalSupported) {
	      node.optional = optional;
	    }
	    base = this.finishNode(node, "MemberExpression");
	  } else if (!noCalls && this.eat(types.parenL)) {
	    var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
	    this.yieldPos = 0;
	    this.awaitPos = 0;
	    this.awaitIdentPos = 0;
	    var exprList = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
	    if (maybeAsyncArrow && !optional && !this.canInsertSemicolon() && this.eat(types.arrow)) {
	      this.checkPatternErrors(refDestructuringErrors, false);
	      this.checkYieldAwaitInDefaultParams();
	      if (this.awaitIdentPos > 0)
	        { this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"); }
	      this.yieldPos = oldYieldPos;
	      this.awaitPos = oldAwaitPos;
	      this.awaitIdentPos = oldAwaitIdentPos;
	      return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true)
	    }
	    this.checkExpressionErrors(refDestructuringErrors, true);
	    this.yieldPos = oldYieldPos || this.yieldPos;
	    this.awaitPos = oldAwaitPos || this.awaitPos;
	    this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
	    var node$1 = this.startNodeAt(startPos, startLoc);
	    node$1.callee = base;
	    node$1.arguments = exprList;
	    if (optionalSupported) {
	      node$1.optional = optional;
	    }
	    base = this.finishNode(node$1, "CallExpression");
	  } else if (this.type === types.backQuote) {
	    if (optional || optionalChained) {
	      this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
	    }
	    var node$2 = this.startNodeAt(startPos, startLoc);
	    node$2.tag = base;
	    node$2.quasi = this.parseTemplate({isTagged: true});
	    base = this.finishNode(node$2, "TaggedTemplateExpression");
	  }
	  return base
	};

	// Parse an atomic expression — either a single token that is an
	// expression, an expression started by a keyword like `function` or
	// `new`, or an expression wrapped in punctuation like `()`, `[]`,
	// or `{}`.

	pp$3.parseExprAtom = function(refDestructuringErrors) {
	  // If a division operator appears in an expression position, the
	  // tokenizer got confused, and we force it to read a regexp instead.
	  if (this.type === types.slash) { this.readRegexp(); }

	  var node, canBeArrow = this.potentialArrowAt === this.start;
	  switch (this.type) {
	  case types._super:
	    if (!this.allowSuper)
	      { this.raise(this.start, "'super' keyword outside a method"); }
	    node = this.startNode();
	    this.next();
	    if (this.type === types.parenL && !this.allowDirectSuper)
	      { this.raise(node.start, "super() call outside constructor of a subclass"); }
	    // The `super` keyword can appear at below:
	    // SuperProperty:
	    //     super [ Expression ]
	    //     super . IdentifierName
	    // SuperCall:
	    //     super ( Arguments )
	    if (this.type !== types.dot && this.type !== types.bracketL && this.type !== types.parenL)
	      { this.unexpected(); }
	    return this.finishNode(node, "Super")

	  case types._this:
	    node = this.startNode();
	    this.next();
	    return this.finishNode(node, "ThisExpression")

	  case types.name:
	    var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
	    var id = this.parseIdent(false);
	    if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types._function))
	      { return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true) }
	    if (canBeArrow && !this.canInsertSemicolon()) {
	      if (this.eat(types.arrow))
	        { return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false) }
	      if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types.name && !containsEsc) {
	        id = this.parseIdent(false);
	        if (this.canInsertSemicolon() || !this.eat(types.arrow))
	          { this.unexpected(); }
	        return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true)
	      }
	    }
	    return id

	  case types.regexp:
	    var value = this.value;
	    node = this.parseLiteral(value.value);
	    node.regex = {pattern: value.pattern, flags: value.flags};
	    return node

	  case types.num: case types.string:
	    return this.parseLiteral(this.value)

	  case types._null: case types._true: case types._false:
	    node = this.startNode();
	    node.value = this.type === types._null ? null : this.type === types._true;
	    node.raw = this.type.keyword;
	    this.next();
	    return this.finishNode(node, "Literal")

	  case types.parenL:
	    var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow);
	    if (refDestructuringErrors) {
	      if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr))
	        { refDestructuringErrors.parenthesizedAssign = start; }
	      if (refDestructuringErrors.parenthesizedBind < 0)
	        { refDestructuringErrors.parenthesizedBind = start; }
	    }
	    return expr

	  case types.bracketL:
	    node = this.startNode();
	    this.next();
	    node.elements = this.parseExprList(types.bracketR, true, true, refDestructuringErrors);
	    return this.finishNode(node, "ArrayExpression")

	  case types.braceL:
	    return this.parseObj(false, refDestructuringErrors)

	  case types._function:
	    node = this.startNode();
	    this.next();
	    return this.parseFunction(node, 0)

	  case types._class:
	    return this.parseClass(this.startNode(), false)

	  case types._new:
	    return this.parseNew()

	  case types.backQuote:
	    return this.parseTemplate()

	  case types._import:
	    if (this.options.ecmaVersion >= 11) {
	      return this.parseExprImport()
	    } else {
	      return this.unexpected()
	    }

	  default:
	    this.unexpected();
	  }
	};

	pp$3.parseExprImport = function() {
	  var node = this.startNode();

	  // Consume `import` as an identifier for `import.meta`.
	  // Because `this.parseIdent(true)` doesn't check escape sequences, it needs the check of `this.containsEsc`.
	  if (this.containsEsc) { this.raiseRecoverable(this.start, "Escape sequence in keyword import"); }
	  var meta = this.parseIdent(true);

	  switch (this.type) {
	  case types.parenL:
	    return this.parseDynamicImport(node)
	  case types.dot:
	    node.meta = meta;
	    return this.parseImportMeta(node)
	  default:
	    this.unexpected();
	  }
	};

	pp$3.parseDynamicImport = function(node) {
	  this.next(); // skip `(`

	  // Parse node.source.
	  node.source = this.parseMaybeAssign();

	  // Verify ending.
	  if (!this.eat(types.parenR)) {
	    var errorPos = this.start;
	    if (this.eat(types.comma) && this.eat(types.parenR)) {
	      this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
	    } else {
	      this.unexpected(errorPos);
	    }
	  }

	  return this.finishNode(node, "ImportExpression")
	};

	pp$3.parseImportMeta = function(node) {
	  this.next(); // skip `.`

	  var containsEsc = this.containsEsc;
	  node.property = this.parseIdent(true);

	  if (node.property.name !== "meta")
	    { this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'"); }
	  if (containsEsc)
	    { this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters"); }
	  if (this.options.sourceType !== "module")
	    { this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module"); }

	  return this.finishNode(node, "MetaProperty")
	};

	pp$3.parseLiteral = function(value) {
	  var node = this.startNode();
	  node.value = value;
	  node.raw = this.input.slice(this.start, this.end);
	  if (node.raw.charCodeAt(node.raw.length - 1) === 110) { node.bigint = node.raw.slice(0, -1); }
	  this.next();
	  return this.finishNode(node, "Literal")
	};

	pp$3.parseParenExpression = function() {
	  this.expect(types.parenL);
	  var val = this.parseExpression();
	  this.expect(types.parenR);
	  return val
	};

	pp$3.parseParenAndDistinguishExpression = function(canBeArrow) {
	  var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
	  if (this.options.ecmaVersion >= 6) {
	    this.next();

	    var innerStartPos = this.start, innerStartLoc = this.startLoc;
	    var exprList = [], first = true, lastIsComma = false;
	    var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
	    this.yieldPos = 0;
	    this.awaitPos = 0;
	    // Do not save awaitIdentPos to allow checking awaits nested in parameters
	    while (this.type !== types.parenR) {
	      first ? first = false : this.expect(types.comma);
	      if (allowTrailingComma && this.afterTrailingComma(types.parenR, true)) {
	        lastIsComma = true;
	        break
	      } else if (this.type === types.ellipsis) {
	        spreadStart = this.start;
	        exprList.push(this.parseParenItem(this.parseRestBinding()));
	        if (this.type === types.comma) { this.raise(this.start, "Comma is not permitted after the rest element"); }
	        break
	      } else {
	        exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
	      }
	    }
	    var innerEndPos = this.start, innerEndLoc = this.startLoc;
	    this.expect(types.parenR);

	    if (canBeArrow && !this.canInsertSemicolon() && this.eat(types.arrow)) {
	      this.checkPatternErrors(refDestructuringErrors, false);
	      this.checkYieldAwaitInDefaultParams();
	      this.yieldPos = oldYieldPos;
	      this.awaitPos = oldAwaitPos;
	      return this.parseParenArrowList(startPos, startLoc, exprList)
	    }

	    if (!exprList.length || lastIsComma) { this.unexpected(this.lastTokStart); }
	    if (spreadStart) { this.unexpected(spreadStart); }
	    this.checkExpressionErrors(refDestructuringErrors, true);
	    this.yieldPos = oldYieldPos || this.yieldPos;
	    this.awaitPos = oldAwaitPos || this.awaitPos;

	    if (exprList.length > 1) {
	      val = this.startNodeAt(innerStartPos, innerStartLoc);
	      val.expressions = exprList;
	      this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
	    } else {
	      val = exprList[0];
	    }
	  } else {
	    val = this.parseParenExpression();
	  }

	  if (this.options.preserveParens) {
	    var par = this.startNodeAt(startPos, startLoc);
	    par.expression = val;
	    return this.finishNode(par, "ParenthesizedExpression")
	  } else {
	    return val
	  }
	};

	pp$3.parseParenItem = function(item) {
	  return item
	};

	pp$3.parseParenArrowList = function(startPos, startLoc, exprList) {
	  return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList)
	};

	// New's precedence is slightly tricky. It must allow its argument to
	// be a `[]` or dot subscript expression, but not a call — at least,
	// not without wrapping it in parentheses. Thus, it uses the noCalls
	// argument to parseSubscripts to prevent it from consuming the
	// argument list.

	var empty$1 = [];

	pp$3.parseNew = function() {
	  if (this.containsEsc) { this.raiseRecoverable(this.start, "Escape sequence in keyword new"); }
	  var node = this.startNode();
	  var meta = this.parseIdent(true);
	  if (this.options.ecmaVersion >= 6 && this.eat(types.dot)) {
	    node.meta = meta;
	    var containsEsc = this.containsEsc;
	    node.property = this.parseIdent(true);
	    if (node.property.name !== "target")
	      { this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'"); }
	    if (containsEsc)
	      { this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters"); }
	    if (!this.inNonArrowFunction())
	      { this.raiseRecoverable(node.start, "'new.target' can only be used in functions"); }
	    return this.finishNode(node, "MetaProperty")
	  }
	  var startPos = this.start, startLoc = this.startLoc, isImport = this.type === types._import;
	  node.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
	  if (isImport && node.callee.type === "ImportExpression") {
	    this.raise(startPos, "Cannot use new with import()");
	  }
	  if (this.eat(types.parenL)) { node.arguments = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false); }
	  else { node.arguments = empty$1; }
	  return this.finishNode(node, "NewExpression")
	};

	// Parse template expression.

	pp$3.parseTemplateElement = function(ref) {
	  var isTagged = ref.isTagged;

	  var elem = this.startNode();
	  if (this.type === types.invalidTemplate) {
	    if (!isTagged) {
	      this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
	    }
	    elem.value = {
	      raw: this.value,
	      cooked: null
	    };
	  } else {
	    elem.value = {
	      raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
	      cooked: this.value
	    };
	  }
	  this.next();
	  elem.tail = this.type === types.backQuote;
	  return this.finishNode(elem, "TemplateElement")
	};

	pp$3.parseTemplate = function(ref) {
	  if ( ref === void 0 ) ref = {};
	  var isTagged = ref.isTagged; if ( isTagged === void 0 ) isTagged = false;

	  var node = this.startNode();
	  this.next();
	  node.expressions = [];
	  var curElt = this.parseTemplateElement({isTagged: isTagged});
	  node.quasis = [curElt];
	  while (!curElt.tail) {
	    if (this.type === types.eof) { this.raise(this.pos, "Unterminated template literal"); }
	    this.expect(types.dollarBraceL);
	    node.expressions.push(this.parseExpression());
	    this.expect(types.braceR);
	    node.quasis.push(curElt = this.parseTemplateElement({isTagged: isTagged}));
	  }
	  this.next();
	  return this.finishNode(node, "TemplateLiteral")
	};

	pp$3.isAsyncProp = function(prop) {
	  return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" &&
	    (this.type === types.name || this.type === types.num || this.type === types.string || this.type === types.bracketL || this.type.keyword || (this.options.ecmaVersion >= 9 && this.type === types.star)) &&
	    !lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
	};

	// Parse an object literal or binding pattern.

	pp$3.parseObj = function(isPattern, refDestructuringErrors) {
	  var node = this.startNode(), first = true, propHash = {};
	  node.properties = [];
	  this.next();
	  while (!this.eat(types.braceR)) {
	    if (!first) {
	      this.expect(types.comma);
	      if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types.braceR)) { break }
	    } else { first = false; }

	    var prop = this.parseProperty(isPattern, refDestructuringErrors);
	    if (!isPattern) { this.checkPropClash(prop, propHash, refDestructuringErrors); }
	    node.properties.push(prop);
	  }
	  return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression")
	};

	pp$3.parseProperty = function(isPattern, refDestructuringErrors) {
	  var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
	  if (this.options.ecmaVersion >= 9 && this.eat(types.ellipsis)) {
	    if (isPattern) {
	      prop.argument = this.parseIdent(false);
	      if (this.type === types.comma) {
	        this.raise(this.start, "Comma is not permitted after the rest element");
	      }
	      return this.finishNode(prop, "RestElement")
	    }
	    // To disallow parenthesized identifier via `this.toAssignable()`.
	    if (this.type === types.parenL && refDestructuringErrors) {
	      if (refDestructuringErrors.parenthesizedAssign < 0) {
	        refDestructuringErrors.parenthesizedAssign = this.start;
	      }
	      if (refDestructuringErrors.parenthesizedBind < 0) {
	        refDestructuringErrors.parenthesizedBind = this.start;
	      }
	    }
	    // Parse argument.
	    prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
	    // To disallow trailing comma via `this.toAssignable()`.
	    if (this.type === types.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
	      refDestructuringErrors.trailingComma = this.start;
	    }
	    // Finish
	    return this.finishNode(prop, "SpreadElement")
	  }
	  if (this.options.ecmaVersion >= 6) {
	    prop.method = false;
	    prop.shorthand = false;
	    if (isPattern || refDestructuringErrors) {
	      startPos = this.start;
	      startLoc = this.startLoc;
	    }
	    if (!isPattern)
	      { isGenerator = this.eat(types.star); }
	  }
	  var containsEsc = this.containsEsc;
	  this.parsePropertyName(prop);
	  if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
	    isAsync = true;
	    isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
	    this.parsePropertyName(prop, refDestructuringErrors);
	  } else {
	    isAsync = false;
	  }
	  this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
	  return this.finishNode(prop, "Property")
	};

	pp$3.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
	  if ((isGenerator || isAsync) && this.type === types.colon)
	    { this.unexpected(); }

	  if (this.eat(types.colon)) {
	    prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
	    prop.kind = "init";
	  } else if (this.options.ecmaVersion >= 6 && this.type === types.parenL) {
	    if (isPattern) { this.unexpected(); }
	    prop.kind = "init";
	    prop.method = true;
	    prop.value = this.parseMethod(isGenerator, isAsync);
	  } else if (!isPattern && !containsEsc &&
	             this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" &&
	             (prop.key.name === "get" || prop.key.name === "set") &&
	             (this.type !== types.comma && this.type !== types.braceR && this.type !== types.eq)) {
	    if (isGenerator || isAsync) { this.unexpected(); }
	    prop.kind = prop.key.name;
	    this.parsePropertyName(prop);
	    prop.value = this.parseMethod(false);
	    var paramCount = prop.kind === "get" ? 0 : 1;
	    if (prop.value.params.length !== paramCount) {
	      var start = prop.value.start;
	      if (prop.kind === "get")
	        { this.raiseRecoverable(start, "getter should have no params"); }
	      else
	        { this.raiseRecoverable(start, "setter should have exactly one param"); }
	    } else {
	      if (prop.kind === "set" && prop.value.params[0].type === "RestElement")
	        { this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params"); }
	    }
	  } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
	    if (isGenerator || isAsync) { this.unexpected(); }
	    this.checkUnreserved(prop.key);
	    if (prop.key.name === "await" && !this.awaitIdentPos)
	      { this.awaitIdentPos = startPos; }
	    prop.kind = "init";
	    if (isPattern) {
	      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
	    } else if (this.type === types.eq && refDestructuringErrors) {
	      if (refDestructuringErrors.shorthandAssign < 0)
	        { refDestructuringErrors.shorthandAssign = this.start; }
	      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
	    } else {
	      prop.value = prop.key;
	    }
	    prop.shorthand = true;
	  } else { this.unexpected(); }
	};

	pp$3.parsePropertyName = function(prop) {
	  if (this.options.ecmaVersion >= 6) {
	    if (this.eat(types.bracketL)) {
	      prop.computed = true;
	      prop.key = this.parseMaybeAssign();
	      this.expect(types.bracketR);
	      return prop.key
	    } else {
	      prop.computed = false;
	    }
	  }
	  return prop.key = this.type === types.num || this.type === types.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never")
	};

	// Initialize empty function node.

	pp$3.initFunction = function(node) {
	  node.id = null;
	  if (this.options.ecmaVersion >= 6) { node.generator = node.expression = false; }
	  if (this.options.ecmaVersion >= 8) { node.async = false; }
	};

	// Parse object or class method.

	pp$3.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
	  var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;

	  this.initFunction(node);
	  if (this.options.ecmaVersion >= 6)
	    { node.generator = isGenerator; }
	  if (this.options.ecmaVersion >= 8)
	    { node.async = !!isAsync; }

	  this.yieldPos = 0;
	  this.awaitPos = 0;
	  this.awaitIdentPos = 0;
	  this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));

	  this.expect(types.parenL);
	  node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
	  this.checkYieldAwaitInDefaultParams();
	  this.parseFunctionBody(node, false, true);

	  this.yieldPos = oldYieldPos;
	  this.awaitPos = oldAwaitPos;
	  this.awaitIdentPos = oldAwaitIdentPos;
	  return this.finishNode(node, "FunctionExpression")
	};

	// Parse arrow function expression with given parameters.

	pp$3.parseArrowExpression = function(node, params, isAsync) {
	  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;

	  this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
	  this.initFunction(node);
	  if (this.options.ecmaVersion >= 8) { node.async = !!isAsync; }

	  this.yieldPos = 0;
	  this.awaitPos = 0;
	  this.awaitIdentPos = 0;

	  node.params = this.toAssignableList(params, true);
	  this.parseFunctionBody(node, true, false);

	  this.yieldPos = oldYieldPos;
	  this.awaitPos = oldAwaitPos;
	  this.awaitIdentPos = oldAwaitIdentPos;
	  return this.finishNode(node, "ArrowFunctionExpression")
	};

	// Parse function body and check parameters.

	pp$3.parseFunctionBody = function(node, isArrowFunction, isMethod) {
	  var isExpression = isArrowFunction && this.type !== types.braceL;
	  var oldStrict = this.strict, useStrict = false;

	  if (isExpression) {
	    node.body = this.parseMaybeAssign();
	    node.expression = true;
	    this.checkParams(node, false);
	  } else {
	    var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
	    if (!oldStrict || nonSimple) {
	      useStrict = this.strictDirective(this.end);
	      // If this is a strict mode function, verify that argument names
	      // are not repeated, and it does not try to bind the words `eval`
	      // or `arguments`.
	      if (useStrict && nonSimple)
	        { this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list"); }
	    }
	    // Start a new scope with regard to labels and the `inFunction`
	    // flag (restore them to their old value afterwards).
	    var oldLabels = this.labels;
	    this.labels = [];
	    if (useStrict) { this.strict = true; }

	    // Add the params to varDeclaredNames to ensure that an error is thrown
	    // if a let/const declaration in the function clashes with one of the params.
	    this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
	    // Ensure the function name isn't a forbidden identifier in strict mode, e.g. 'eval'
	    if (this.strict && node.id) { this.checkLVal(node.id, BIND_OUTSIDE); }
	    node.body = this.parseBlock(false, undefined, useStrict && !oldStrict);
	    node.expression = false;
	    this.adaptDirectivePrologue(node.body.body);
	    this.labels = oldLabels;
	  }
	  this.exitScope();
	};

	pp$3.isSimpleParamList = function(params) {
	  for (var i = 0, list = params; i < list.length; i += 1)
	    {
	    var param = list[i];

	    if (param.type !== "Identifier") { return false
	  } }
	  return true
	};

	// Checks function params for various disallowed patterns such as using "eval"
	// or "arguments" and duplicate parameters.

	pp$3.checkParams = function(node, allowDuplicates) {
	  var nameHash = {};
	  for (var i = 0, list = node.params; i < list.length; i += 1)
	    {
	    var param = list[i];

	    this.checkLVal(param, BIND_VAR, allowDuplicates ? null : nameHash);
	  }
	};

	// Parses a comma-separated list of expressions, and returns them as
	// an array. `close` is the token type that ends the list, and
	// `allowEmpty` can be turned on to allow subsequent commas with
	// nothing in between them to be parsed as `null` (which is needed
	// for array literals).

	pp$3.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
	  var elts = [], first = true;
	  while (!this.eat(close)) {
	    if (!first) {
	      this.expect(types.comma);
	      if (allowTrailingComma && this.afterTrailingComma(close)) { break }
	    } else { first = false; }

	    var elt = (void 0);
	    if (allowEmpty && this.type === types.comma)
	      { elt = null; }
	    else if (this.type === types.ellipsis) {
	      elt = this.parseSpread(refDestructuringErrors);
	      if (refDestructuringErrors && this.type === types.comma && refDestructuringErrors.trailingComma < 0)
	        { refDestructuringErrors.trailingComma = this.start; }
	    } else {
	      elt = this.parseMaybeAssign(false, refDestructuringErrors);
	    }
	    elts.push(elt);
	  }
	  return elts
	};

	pp$3.checkUnreserved = function(ref) {
	  var start = ref.start;
	  var end = ref.end;
	  var name = ref.name;

	  if (this.inGenerator && name === "yield")
	    { this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator"); }
	  if (this.inAsync && name === "await")
	    { this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function"); }
	  if (this.keywords.test(name))
	    { this.raise(start, ("Unexpected keyword '" + name + "'")); }
	  if (this.options.ecmaVersion < 6 &&
	    this.input.slice(start, end).indexOf("\\") !== -1) { return }
	  var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
	  if (re.test(name)) {
	    if (!this.inAsync && name === "await")
	      { this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function"); }
	    this.raiseRecoverable(start, ("The keyword '" + name + "' is reserved"));
	  }
	};

	// Parse the next token as an identifier. If `liberal` is true (used
	// when parsing properties), it will also convert keywords into
	// identifiers.

	pp$3.parseIdent = function(liberal, isBinding) {
	  var node = this.startNode();
	  if (this.type === types.name) {
	    node.name = this.value;
	  } else if (this.type.keyword) {
	    node.name = this.type.keyword;

	    // To fix https://github.com/acornjs/acorn/issues/575
	    // `class` and `function` keywords push new context into this.context.
	    // But there is no chance to pop the context if the keyword is consumed as an identifier such as a property name.
	    // If the previous token is a dot, this does not apply because the context-managing code already ignored the keyword
	    if ((node.name === "class" || node.name === "function") &&
	        (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
	      this.context.pop();
	    }
	  } else {
	    this.unexpected();
	  }
	  this.next(!!liberal);
	  this.finishNode(node, "Identifier");
	  if (!liberal) {
	    this.checkUnreserved(node);
	    if (node.name === "await" && !this.awaitIdentPos)
	      { this.awaitIdentPos = node.start; }
	  }
	  return node
	};

	// Parses yield expression inside generator.

	pp$3.parseYield = function(noIn) {
	  if (!this.yieldPos) { this.yieldPos = this.start; }

	  var node = this.startNode();
	  this.next();
	  if (this.type === types.semi || this.canInsertSemicolon() || (this.type !== types.star && !this.type.startsExpr)) {
	    node.delegate = false;
	    node.argument = null;
	  } else {
	    node.delegate = this.eat(types.star);
	    node.argument = this.parseMaybeAssign(noIn);
	  }
	  return this.finishNode(node, "YieldExpression")
	};

	pp$3.parseAwait = function() {
	  if (!this.awaitPos) { this.awaitPos = this.start; }

	  var node = this.startNode();
	  this.next();
	  node.argument = this.parseMaybeUnary(null, false);
	  return this.finishNode(node, "AwaitExpression")
	};

	var pp$4 = Parser.prototype;

	// This function is used to raise exceptions on parse errors. It
	// takes an offset integer (into the current `input`) to indicate
	// the location of the error, attaches the position to the end
	// of the error message, and then raises a `SyntaxError` with that
	// message.

	pp$4.raise = function(pos, message) {
	  var loc = getLineInfo(this.input, pos);
	  message += " (" + loc.line + ":" + loc.column + ")";
	  var err = new SyntaxError(message);
	  err.pos = pos; err.loc = loc; err.raisedAt = this.pos;
	  throw err
	};

	pp$4.raiseRecoverable = pp$4.raise;

	pp$4.curPosition = function() {
	  if (this.options.locations) {
	    return new Position(this.curLine, this.pos - this.lineStart)
	  }
	};

	var pp$5 = Parser.prototype;

	var Scope = function Scope(flags) {
	  this.flags = flags;
	  // A list of var-declared names in the current lexical scope
	  this.var = [];
	  // A list of lexically-declared names in the current lexical scope
	  this.lexical = [];
	  // A list of lexically-declared FunctionDeclaration names in the current lexical scope
	  this.functions = [];
	};

	// The functions in this module keep track of declared variables in the current scope in order to detect duplicate variable names.

	pp$5.enterScope = function(flags) {
	  this.scopeStack.push(new Scope(flags));
	};

	pp$5.exitScope = function() {
	  this.scopeStack.pop();
	};

	// The spec says:
	// > At the top level of a function, or script, function declarations are
	// > treated like var declarations rather than like lexical declarations.
	pp$5.treatFunctionsAsVarInScope = function(scope) {
	  return (scope.flags & SCOPE_FUNCTION) || !this.inModule && (scope.flags & SCOPE_TOP)
	};

	pp$5.declareName = function(name, bindingType, pos) {
	  var redeclared = false;
	  if (bindingType === BIND_LEXICAL) {
	    var scope = this.currentScope();
	    redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
	    scope.lexical.push(name);
	    if (this.inModule && (scope.flags & SCOPE_TOP))
	      { delete this.undefinedExports[name]; }
	  } else if (bindingType === BIND_SIMPLE_CATCH) {
	    var scope$1 = this.currentScope();
	    scope$1.lexical.push(name);
	  } else if (bindingType === BIND_FUNCTION) {
	    var scope$2 = this.currentScope();
	    if (this.treatFunctionsAsVar)
	      { redeclared = scope$2.lexical.indexOf(name) > -1; }
	    else
	      { redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1; }
	    scope$2.functions.push(name);
	  } else {
	    for (var i = this.scopeStack.length - 1; i >= 0; --i) {
	      var scope$3 = this.scopeStack[i];
	      if (scope$3.lexical.indexOf(name) > -1 && !((scope$3.flags & SCOPE_SIMPLE_CATCH) && scope$3.lexical[0] === name) ||
	          !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
	        redeclared = true;
	        break
	      }
	      scope$3.var.push(name);
	      if (this.inModule && (scope$3.flags & SCOPE_TOP))
	        { delete this.undefinedExports[name]; }
	      if (scope$3.flags & SCOPE_VAR) { break }
	    }
	  }
	  if (redeclared) { this.raiseRecoverable(pos, ("Identifier '" + name + "' has already been declared")); }
	};

	pp$5.checkLocalExport = function(id) {
	  // scope.functions must be empty as Module code is always strict.
	  if (this.scopeStack[0].lexical.indexOf(id.name) === -1 &&
	      this.scopeStack[0].var.indexOf(id.name) === -1) {
	    this.undefinedExports[id.name] = id;
	  }
	};

	pp$5.currentScope = function() {
	  return this.scopeStack[this.scopeStack.length - 1]
	};

	pp$5.currentVarScope = function() {
	  for (var i = this.scopeStack.length - 1;; i--) {
	    var scope = this.scopeStack[i];
	    if (scope.flags & SCOPE_VAR) { return scope }
	  }
	};

	// Could be useful for `this`, `new.target`, `super()`, `super.property`, and `super[property]`.
	pp$5.currentThisScope = function() {
	  for (var i = this.scopeStack.length - 1;; i--) {
	    var scope = this.scopeStack[i];
	    if (scope.flags & SCOPE_VAR && !(scope.flags & SCOPE_ARROW)) { return scope }
	  }
	};

	var Node = function Node(parser, pos, loc) {
	  this.type = "";
	  this.start = pos;
	  this.end = 0;
	  if (parser.options.locations)
	    { this.loc = new SourceLocation(parser, loc); }
	  if (parser.options.directSourceFile)
	    { this.sourceFile = parser.options.directSourceFile; }
	  if (parser.options.ranges)
	    { this.range = [pos, 0]; }
	};

	// Start an AST node, attaching a start offset.

	var pp$6 = Parser.prototype;

	pp$6.startNode = function() {
	  return new Node(this, this.start, this.startLoc)
	};

	pp$6.startNodeAt = function(pos, loc) {
	  return new Node(this, pos, loc)
	};

	// Finish an AST node, adding `type` and `end` properties.

	function finishNodeAt(node, type, pos, loc) {
	  node.type = type;
	  node.end = pos;
	  if (this.options.locations)
	    { node.loc.end = loc; }
	  if (this.options.ranges)
	    { node.range[1] = pos; }
	  return node
	}

	pp$6.finishNode = function(node, type) {
	  return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc)
	};

	// Finish node at given position

	pp$6.finishNodeAt = function(node, type, pos, loc) {
	  return finishNodeAt.call(this, node, type, pos, loc)
	};

	// The algorithm used to determine whether a regexp can appear at a

	var TokContext = function TokContext(token, isExpr, preserveSpace, override, generator) {
	  this.token = token;
	  this.isExpr = !!isExpr;
	  this.preserveSpace = !!preserveSpace;
	  this.override = override;
	  this.generator = !!generator;
	};

	var types$1 = {
	  b_stat: new TokContext("{", false),
	  b_expr: new TokContext("{", true),
	  b_tmpl: new TokContext("${", false),
	  p_stat: new TokContext("(", false),
	  p_expr: new TokContext("(", true),
	  q_tmpl: new TokContext("`", true, true, function (p) { return p.tryReadTemplateToken(); }),
	  f_stat: new TokContext("function", false),
	  f_expr: new TokContext("function", true),
	  f_expr_gen: new TokContext("function", true, false, null, true),
	  f_gen: new TokContext("function", false, false, null, true)
	};

	var pp$7 = Parser.prototype;

	pp$7.initialContext = function() {
	  return [types$1.b_stat]
	};

	pp$7.braceIsBlock = function(prevType) {
	  var parent = this.curContext();
	  if (parent === types$1.f_expr || parent === types$1.f_stat)
	    { return true }
	  if (prevType === types.colon && (parent === types$1.b_stat || parent === types$1.b_expr))
	    { return !parent.isExpr }

	  // The check for `tt.name && exprAllowed` detects whether we are
	  // after a `yield` or `of` construct. See the `updateContext` for
	  // `tt.name`.
	  if (prevType === types._return || prevType === types.name && this.exprAllowed)
	    { return lineBreak.test(this.input.slice(this.lastTokEnd, this.start)) }
	  if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR || prevType === types.arrow)
	    { return true }
	  if (prevType === types.braceL)
	    { return parent === types$1.b_stat }
	  if (prevType === types._var || prevType === types._const || prevType === types.name)
	    { return false }
	  return !this.exprAllowed
	};

	pp$7.inGeneratorContext = function() {
	  for (var i = this.context.length - 1; i >= 1; i--) {
	    var context = this.context[i];
	    if (context.token === "function")
	      { return context.generator }
	  }
	  return false
	};

	pp$7.updateContext = function(prevType) {
	  var update, type = this.type;
	  if (type.keyword && prevType === types.dot)
	    { this.exprAllowed = false; }
	  else if (update = type.updateContext)
	    { update.call(this, prevType); }
	  else
	    { this.exprAllowed = type.beforeExpr; }
	};

	// Token-specific context update code

	types.parenR.updateContext = types.braceR.updateContext = function() {
	  if (this.context.length === 1) {
	    this.exprAllowed = true;
	    return
	  }
	  var out = this.context.pop();
	  if (out === types$1.b_stat && this.curContext().token === "function") {
	    out = this.context.pop();
	  }
	  this.exprAllowed = !out.isExpr;
	};

	types.braceL.updateContext = function(prevType) {
	  this.context.push(this.braceIsBlock(prevType) ? types$1.b_stat : types$1.b_expr);
	  this.exprAllowed = true;
	};

	types.dollarBraceL.updateContext = function() {
	  this.context.push(types$1.b_tmpl);
	  this.exprAllowed = true;
	};

	types.parenL.updateContext = function(prevType) {
	  var statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
	  this.context.push(statementParens ? types$1.p_stat : types$1.p_expr);
	  this.exprAllowed = true;
	};

	types.incDec.updateContext = function() {
	  // tokExprAllowed stays unchanged
	};

	types._function.updateContext = types._class.updateContext = function(prevType) {
	  if (prevType.beforeExpr && prevType !== types.semi && prevType !== types._else &&
	      !(prevType === types._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) &&
	      !((prevType === types.colon || prevType === types.braceL) && this.curContext() === types$1.b_stat))
	    { this.context.push(types$1.f_expr); }
	  else
	    { this.context.push(types$1.f_stat); }
	  this.exprAllowed = false;
	};

	types.backQuote.updateContext = function() {
	  if (this.curContext() === types$1.q_tmpl)
	    { this.context.pop(); }
	  else
	    { this.context.push(types$1.q_tmpl); }
	  this.exprAllowed = false;
	};

	types.star.updateContext = function(prevType) {
	  if (prevType === types._function) {
	    var index = this.context.length - 1;
	    if (this.context[index] === types$1.f_expr)
	      { this.context[index] = types$1.f_expr_gen; }
	    else
	      { this.context[index] = types$1.f_gen; }
	  }
	  this.exprAllowed = true;
	};

	types.name.updateContext = function(prevType) {
	  var allowed = false;
	  if (this.options.ecmaVersion >= 6 && prevType !== types.dot) {
	    if (this.value === "of" && !this.exprAllowed ||
	        this.value === "yield" && this.inGeneratorContext())
	      { allowed = true; }
	  }
	  this.exprAllowed = allowed;
	};

	// This file contains Unicode properties extracted from the ECMAScript
	// specification. The lists are extracted like so:
	// $$('#table-binary-unicode-properties > figure > table > tbody > tr > td:nth-child(1) code').map(el => el.innerText)

	// #table-binary-unicode-properties
	var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
	var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
	var ecma11BinaryProperties = ecma10BinaryProperties;
	var unicodeBinaryProperties = {
	  9: ecma9BinaryProperties,
	  10: ecma10BinaryProperties,
	  11: ecma11BinaryProperties
	};

	// #table-unicode-general-category-values
	var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";

	// #table-unicode-script-values
	var ecma9ScriptValues = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
	var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
	var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
	var unicodeScriptValues = {
	  9: ecma9ScriptValues,
	  10: ecma10ScriptValues,
	  11: ecma11ScriptValues
	};

	var data = {};
	function buildUnicodeData(ecmaVersion) {
	  var d = data[ecmaVersion] = {
	    binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
	    nonBinary: {
	      General_Category: wordsRegexp(unicodeGeneralCategoryValues),
	      Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
	    }
	  };
	  d.nonBinary.Script_Extensions = d.nonBinary.Script;

	  d.nonBinary.gc = d.nonBinary.General_Category;
	  d.nonBinary.sc = d.nonBinary.Script;
	  d.nonBinary.scx = d.nonBinary.Script_Extensions;
	}
	buildUnicodeData(9);
	buildUnicodeData(10);
	buildUnicodeData(11);

	var pp$8 = Parser.prototype;

	var RegExpValidationState = function RegExpValidationState(parser) {
	  this.parser = parser;
	  this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "");
	  this.unicodeProperties = data[parser.options.ecmaVersion >= 11 ? 11 : parser.options.ecmaVersion];
	  this.source = "";
	  this.flags = "";
	  this.start = 0;
	  this.switchU = false;
	  this.switchN = false;
	  this.pos = 0;
	  this.lastIntValue = 0;
	  this.lastStringValue = "";
	  this.lastAssertionIsQuantifiable = false;
	  this.numCapturingParens = 0;
	  this.maxBackReference = 0;
	  this.groupNames = [];
	  this.backReferenceNames = [];
	};

	RegExpValidationState.prototype.reset = function reset (start, pattern, flags) {
	  var unicode = flags.indexOf("u") !== -1;
	  this.start = start | 0;
	  this.source = pattern + "";
	  this.flags = flags;
	  this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
	  this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
	};

	RegExpValidationState.prototype.raise = function raise (message) {
	  this.parser.raiseRecoverable(this.start, ("Invalid regular expression: /" + (this.source) + "/: " + message));
	};

	// If u flag is given, this returns the code point at the index (it combines a surrogate pair).
	// Otherwise, this returns the code unit of the index (can be a part of a surrogate pair).
	RegExpValidationState.prototype.at = function at (i, forceU) {
	    if ( forceU === void 0 ) forceU = false;

	  var s = this.source;
	  var l = s.length;
	  if (i >= l) {
	    return -1
	  }
	  var c = s.charCodeAt(i);
	  if (!(forceU || this.switchU) || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l) {
	    return c
	  }
	  var next = s.charCodeAt(i + 1);
	  return next >= 0xDC00 && next <= 0xDFFF ? (c << 10) + next - 0x35FDC00 : c
	};

	RegExpValidationState.prototype.nextIndex = function nextIndex (i, forceU) {
	    if ( forceU === void 0 ) forceU = false;

	  var s = this.source;
	  var l = s.length;
	  if (i >= l) {
	    return l
	  }
	  var c = s.charCodeAt(i), next;
	  if (!(forceU || this.switchU) || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l ||
	      (next = s.charCodeAt(i + 1)) < 0xDC00 || next > 0xDFFF) {
	    return i + 1
	  }
	  return i + 2
	};

	RegExpValidationState.prototype.current = function current (forceU) {
	    if ( forceU === void 0 ) forceU = false;

	  return this.at(this.pos, forceU)
	};

	RegExpValidationState.prototype.lookahead = function lookahead (forceU) {
	    if ( forceU === void 0 ) forceU = false;

	  return this.at(this.nextIndex(this.pos, forceU), forceU)
	};

	RegExpValidationState.prototype.advance = function advance (forceU) {
	    if ( forceU === void 0 ) forceU = false;

	  this.pos = this.nextIndex(this.pos, forceU);
	};

	RegExpValidationState.prototype.eat = function eat (ch, forceU) {
	    if ( forceU === void 0 ) forceU = false;

	  if (this.current(forceU) === ch) {
	    this.advance(forceU);
	    return true
	  }
	  return false
	};

	function codePointToString(ch) {
	  if (ch <= 0xFFFF) { return String.fromCharCode(ch) }
	  ch -= 0x10000;
	  return String.fromCharCode((ch >> 10) + 0xD800, (ch & 0x03FF) + 0xDC00)
	}

	/**
	 * Validate the flags part of a given RegExpLiteral.
	 *
	 * @param {RegExpValidationState} state The state to validate RegExp.
	 * @returns {void}
	 */
	pp$8.validateRegExpFlags = function(state) {
	  var validFlags = state.validFlags;
	  var flags = state.flags;

	  for (var i = 0; i < flags.length; i++) {
	    var flag = flags.charAt(i);
	    if (validFlags.indexOf(flag) === -1) {
	      this.raise(state.start, "Invalid regular expression flag");
	    }
	    if (flags.indexOf(flag, i + 1) > -1) {
	      this.raise(state.start, "Duplicate regular expression flag");
	    }
	  }
	};

	/**
	 * Validate the pattern part of a given RegExpLiteral.
	 *
	 * @param {RegExpValidationState} state The state to validate RegExp.
	 * @returns {void}
	 */
	pp$8.validateRegExpPattern = function(state) {
	  this.regexp_pattern(state);

	  // The goal symbol for the parse is |Pattern[~U, ~N]|. If the result of
	  // parsing contains a |GroupName|, reparse with the goal symbol
	  // |Pattern[~U, +N]| and use this result instead. Throw a *SyntaxError*
	  // exception if _P_ did not conform to the grammar, if any elements of _P_
	  // were not matched by the parse, or if any Early Error conditions exist.
	  if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
	    state.switchN = true;
	    this.regexp_pattern(state);
	  }
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-Pattern
	pp$8.regexp_pattern = function(state) {
	  state.pos = 0;
	  state.lastIntValue = 0;
	  state.lastStringValue = "";
	  state.lastAssertionIsQuantifiable = false;
	  state.numCapturingParens = 0;
	  state.maxBackReference = 0;
	  state.groupNames.length = 0;
	  state.backReferenceNames.length = 0;

	  this.regexp_disjunction(state);

	  if (state.pos !== state.source.length) {
	    // Make the same messages as V8.
	    if (state.eat(0x29 /* ) */)) {
	      state.raise("Unmatched ')'");
	    }
	    if (state.eat(0x5D /* ] */) || state.eat(0x7D /* } */)) {
	      state.raise("Lone quantifier brackets");
	    }
	  }
	  if (state.maxBackReference > state.numCapturingParens) {
	    state.raise("Invalid escape");
	  }
	  for (var i = 0, list = state.backReferenceNames; i < list.length; i += 1) {
	    var name = list[i];

	    if (state.groupNames.indexOf(name) === -1) {
	      state.raise("Invalid named capture referenced");
	    }
	  }
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-Disjunction
	pp$8.regexp_disjunction = function(state) {
	  this.regexp_alternative(state);
	  while (state.eat(0x7C /* | */)) {
	    this.regexp_alternative(state);
	  }

	  // Make the same message as V8.
	  if (this.regexp_eatQuantifier(state, true)) {
	    state.raise("Nothing to repeat");
	  }
	  if (state.eat(0x7B /* { */)) {
	    state.raise("Lone quantifier brackets");
	  }
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-Alternative
	pp$8.regexp_alternative = function(state) {
	  while (state.pos < state.source.length && this.regexp_eatTerm(state))
	    { }
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Term
	pp$8.regexp_eatTerm = function(state) {
	  if (this.regexp_eatAssertion(state)) {
	    // Handle `QuantifiableAssertion Quantifier` alternative.
	    // `state.lastAssertionIsQuantifiable` is true if the last eaten Assertion
	    // is a QuantifiableAssertion.
	    if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
	      // Make the same message as V8.
	      if (state.switchU) {
	        state.raise("Invalid quantifier");
	      }
	    }
	    return true
	  }

	  if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
	    this.regexp_eatQuantifier(state);
	    return true
	  }

	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Assertion
	pp$8.regexp_eatAssertion = function(state) {
	  var start = state.pos;
	  state.lastAssertionIsQuantifiable = false;

	  // ^, $
	  if (state.eat(0x5E /* ^ */) || state.eat(0x24 /* $ */)) {
	    return true
	  }

	  // \b \B
	  if (state.eat(0x5C /* \ */)) {
	    if (state.eat(0x42 /* B */) || state.eat(0x62 /* b */)) {
	      return true
	    }
	    state.pos = start;
	  }

	  // Lookahead / Lookbehind
	  if (state.eat(0x28 /* ( */) && state.eat(0x3F /* ? */)) {
	    var lookbehind = false;
	    if (this.options.ecmaVersion >= 9) {
	      lookbehind = state.eat(0x3C /* < */);
	    }
	    if (state.eat(0x3D /* = */) || state.eat(0x21 /* ! */)) {
	      this.regexp_disjunction(state);
	      if (!state.eat(0x29 /* ) */)) {
	        state.raise("Unterminated group");
	      }
	      state.lastAssertionIsQuantifiable = !lookbehind;
	      return true
	    }
	  }

	  state.pos = start;
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-Quantifier
	pp$8.regexp_eatQuantifier = function(state, noError) {
	  if ( noError === void 0 ) noError = false;

	  if (this.regexp_eatQuantifierPrefix(state, noError)) {
	    state.eat(0x3F /* ? */);
	    return true
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-QuantifierPrefix
	pp$8.regexp_eatQuantifierPrefix = function(state, noError) {
	  return (
	    state.eat(0x2A /* * */) ||
	    state.eat(0x2B /* + */) ||
	    state.eat(0x3F /* ? */) ||
	    this.regexp_eatBracedQuantifier(state, noError)
	  )
	};
	pp$8.regexp_eatBracedQuantifier = function(state, noError) {
	  var start = state.pos;
	  if (state.eat(0x7B /* { */)) {
	    var min = 0, max = -1;
	    if (this.regexp_eatDecimalDigits(state)) {
	      min = state.lastIntValue;
	      if (state.eat(0x2C /* , */) && this.regexp_eatDecimalDigits(state)) {
	        max = state.lastIntValue;
	      }
	      if (state.eat(0x7D /* } */)) {
	        // SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-term
	        if (max !== -1 && max < min && !noError) {
	          state.raise("numbers out of order in {} quantifier");
	        }
	        return true
	      }
	    }
	    if (state.switchU && !noError) {
	      state.raise("Incomplete quantifier");
	    }
	    state.pos = start;
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-Atom
	pp$8.regexp_eatAtom = function(state) {
	  return (
	    this.regexp_eatPatternCharacters(state) ||
	    state.eat(0x2E /* . */) ||
	    this.regexp_eatReverseSolidusAtomEscape(state) ||
	    this.regexp_eatCharacterClass(state) ||
	    this.regexp_eatUncapturingGroup(state) ||
	    this.regexp_eatCapturingGroup(state)
	  )
	};
	pp$8.regexp_eatReverseSolidusAtomEscape = function(state) {
	  var start = state.pos;
	  if (state.eat(0x5C /* \ */)) {
	    if (this.regexp_eatAtomEscape(state)) {
	      return true
	    }
	    state.pos = start;
	  }
	  return false
	};
	pp$8.regexp_eatUncapturingGroup = function(state) {
	  var start = state.pos;
	  if (state.eat(0x28 /* ( */)) {
	    if (state.eat(0x3F /* ? */) && state.eat(0x3A /* : */)) {
	      this.regexp_disjunction(state);
	      if (state.eat(0x29 /* ) */)) {
	        return true
	      }
	      state.raise("Unterminated group");
	    }
	    state.pos = start;
	  }
	  return false
	};
	pp$8.regexp_eatCapturingGroup = function(state) {
	  if (state.eat(0x28 /* ( */)) {
	    if (this.options.ecmaVersion >= 9) {
	      this.regexp_groupSpecifier(state);
	    } else if (state.current() === 0x3F /* ? */) {
	      state.raise("Invalid group");
	    }
	    this.regexp_disjunction(state);
	    if (state.eat(0x29 /* ) */)) {
	      state.numCapturingParens += 1;
	      return true
	    }
	    state.raise("Unterminated group");
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedAtom
	pp$8.regexp_eatExtendedAtom = function(state) {
	  return (
	    state.eat(0x2E /* . */) ||
	    this.regexp_eatReverseSolidusAtomEscape(state) ||
	    this.regexp_eatCharacterClass(state) ||
	    this.regexp_eatUncapturingGroup(state) ||
	    this.regexp_eatCapturingGroup(state) ||
	    this.regexp_eatInvalidBracedQuantifier(state) ||
	    this.regexp_eatExtendedPatternCharacter(state)
	  )
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-InvalidBracedQuantifier
	pp$8.regexp_eatInvalidBracedQuantifier = function(state) {
	  if (this.regexp_eatBracedQuantifier(state, true)) {
	    state.raise("Nothing to repeat");
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-SyntaxCharacter
	pp$8.regexp_eatSyntaxCharacter = function(state) {
	  var ch = state.current();
	  if (isSyntaxCharacter(ch)) {
	    state.lastIntValue = ch;
	    state.advance();
	    return true
	  }
	  return false
	};
	function isSyntaxCharacter(ch) {
	  return (
	    ch === 0x24 /* $ */ ||
	    ch >= 0x28 /* ( */ && ch <= 0x2B /* + */ ||
	    ch === 0x2E /* . */ ||
	    ch === 0x3F /* ? */ ||
	    ch >= 0x5B /* [ */ && ch <= 0x5E /* ^ */ ||
	    ch >= 0x7B /* { */ && ch <= 0x7D /* } */
	  )
	}

	// https://www.ecma-international.org/ecma-262/8.0/#prod-PatternCharacter
	// But eat eager.
	pp$8.regexp_eatPatternCharacters = function(state) {
	  var start = state.pos;
	  var ch = 0;
	  while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
	    state.advance();
	  }
	  return state.pos !== start
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedPatternCharacter
	pp$8.regexp_eatExtendedPatternCharacter = function(state) {
	  var ch = state.current();
	  if (
	    ch !== -1 &&
	    ch !== 0x24 /* $ */ &&
	    !(ch >= 0x28 /* ( */ && ch <= 0x2B /* + */) &&
	    ch !== 0x2E /* . */ &&
	    ch !== 0x3F /* ? */ &&
	    ch !== 0x5B /* [ */ &&
	    ch !== 0x5E /* ^ */ &&
	    ch !== 0x7C /* | */
	  ) {
	    state.advance();
	    return true
	  }
	  return false
	};

	// GroupSpecifier ::
	//   [empty]
	//   `?` GroupName
	pp$8.regexp_groupSpecifier = function(state) {
	  if (state.eat(0x3F /* ? */)) {
	    if (this.regexp_eatGroupName(state)) {
	      if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
	        state.raise("Duplicate capture group name");
	      }
	      state.groupNames.push(state.lastStringValue);
	      return
	    }
	    state.raise("Invalid group");
	  }
	};

	// GroupName ::
	//   `<` RegExpIdentifierName `>`
	// Note: this updates `state.lastStringValue` property with the eaten name.
	pp$8.regexp_eatGroupName = function(state) {
	  state.lastStringValue = "";
	  if (state.eat(0x3C /* < */)) {
	    if (this.regexp_eatRegExpIdentifierName(state) && state.eat(0x3E /* > */)) {
	      return true
	    }
	    state.raise("Invalid capture group name");
	  }
	  return false
	};

	// RegExpIdentifierName ::
	//   RegExpIdentifierStart
	//   RegExpIdentifierName RegExpIdentifierPart
	// Note: this updates `state.lastStringValue` property with the eaten name.
	pp$8.regexp_eatRegExpIdentifierName = function(state) {
	  state.lastStringValue = "";
	  if (this.regexp_eatRegExpIdentifierStart(state)) {
	    state.lastStringValue += codePointToString(state.lastIntValue);
	    while (this.regexp_eatRegExpIdentifierPart(state)) {
	      state.lastStringValue += codePointToString(state.lastIntValue);
	    }
	    return true
	  }
	  return false
	};

	// RegExpIdentifierStart ::
	//   UnicodeIDStart
	//   `$`
	//   `_`
	//   `\` RegExpUnicodeEscapeSequence[+U]
	pp$8.regexp_eatRegExpIdentifierStart = function(state) {
	  var start = state.pos;
	  var forceU = this.options.ecmaVersion >= 11;
	  var ch = state.current(forceU);
	  state.advance(forceU);

	  if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
	    ch = state.lastIntValue;
	  }
	  if (isRegExpIdentifierStart(ch)) {
	    state.lastIntValue = ch;
	    return true
	  }

	  state.pos = start;
	  return false
	};
	function isRegExpIdentifierStart(ch) {
	  return isIdentifierStart(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */
	}

	// RegExpIdentifierPart ::
	//   UnicodeIDContinue
	//   `$`
	//   `_`
	//   `\` RegExpUnicodeEscapeSequence[+U]
	//   <ZWNJ>
	//   <ZWJ>
	pp$8.regexp_eatRegExpIdentifierPart = function(state) {
	  var start = state.pos;
	  var forceU = this.options.ecmaVersion >= 11;
	  var ch = state.current(forceU);
	  state.advance(forceU);

	  if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
	    ch = state.lastIntValue;
	  }
	  if (isRegExpIdentifierPart(ch)) {
	    state.lastIntValue = ch;
	    return true
	  }

	  state.pos = start;
	  return false
	};
	function isRegExpIdentifierPart(ch) {
	  return isIdentifierChar(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */ || ch === 0x200C /* <ZWNJ> */ || ch === 0x200D /* <ZWJ> */
	}

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-AtomEscape
	pp$8.regexp_eatAtomEscape = function(state) {
	  if (
	    this.regexp_eatBackReference(state) ||
	    this.regexp_eatCharacterClassEscape(state) ||
	    this.regexp_eatCharacterEscape(state) ||
	    (state.switchN && this.regexp_eatKGroupName(state))
	  ) {
	    return true
	  }
	  if (state.switchU) {
	    // Make the same message as V8.
	    if (state.current() === 0x63 /* c */) {
	      state.raise("Invalid unicode escape");
	    }
	    state.raise("Invalid escape");
	  }
	  return false
	};
	pp$8.regexp_eatBackReference = function(state) {
	  var start = state.pos;
	  if (this.regexp_eatDecimalEscape(state)) {
	    var n = state.lastIntValue;
	    if (state.switchU) {
	      // For SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-atomescape
	      if (n > state.maxBackReference) {
	        state.maxBackReference = n;
	      }
	      return true
	    }
	    if (n <= state.numCapturingParens) {
	      return true
	    }
	    state.pos = start;
	  }
	  return false
	};
	pp$8.regexp_eatKGroupName = function(state) {
	  if (state.eat(0x6B /* k */)) {
	    if (this.regexp_eatGroupName(state)) {
	      state.backReferenceNames.push(state.lastStringValue);
	      return true
	    }
	    state.raise("Invalid named reference");
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-CharacterEscape
	pp$8.regexp_eatCharacterEscape = function(state) {
	  return (
	    this.regexp_eatControlEscape(state) ||
	    this.regexp_eatCControlLetter(state) ||
	    this.regexp_eatZero(state) ||
	    this.regexp_eatHexEscapeSequence(state) ||
	    this.regexp_eatRegExpUnicodeEscapeSequence(state, false) ||
	    (!state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state)) ||
	    this.regexp_eatIdentityEscape(state)
	  )
	};
	pp$8.regexp_eatCControlLetter = function(state) {
	  var start = state.pos;
	  if (state.eat(0x63 /* c */)) {
	    if (this.regexp_eatControlLetter(state)) {
	      return true
	    }
	    state.pos = start;
	  }
	  return false
	};
	pp$8.regexp_eatZero = function(state) {
	  if (state.current() === 0x30 /* 0 */ && !isDecimalDigit(state.lookahead())) {
	    state.lastIntValue = 0;
	    state.advance();
	    return true
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-ControlEscape
	pp$8.regexp_eatControlEscape = function(state) {
	  var ch = state.current();
	  if (ch === 0x74 /* t */) {
	    state.lastIntValue = 0x09; /* \t */
	    state.advance();
	    return true
	  }
	  if (ch === 0x6E /* n */) {
	    state.lastIntValue = 0x0A; /* \n */
	    state.advance();
	    return true
	  }
	  if (ch === 0x76 /* v */) {
	    state.lastIntValue = 0x0B; /* \v */
	    state.advance();
	    return true
	  }
	  if (ch === 0x66 /* f */) {
	    state.lastIntValue = 0x0C; /* \f */
	    state.advance();
	    return true
	  }
	  if (ch === 0x72 /* r */) {
	    state.lastIntValue = 0x0D; /* \r */
	    state.advance();
	    return true
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-ControlLetter
	pp$8.regexp_eatControlLetter = function(state) {
	  var ch = state.current();
	  if (isControlLetter(ch)) {
	    state.lastIntValue = ch % 0x20;
	    state.advance();
	    return true
	  }
	  return false
	};
	function isControlLetter(ch) {
	  return (
	    (ch >= 0x41 /* A */ && ch <= 0x5A /* Z */) ||
	    (ch >= 0x61 /* a */ && ch <= 0x7A /* z */)
	  )
	}

	// https://www.ecma-international.org/ecma-262/8.0/#prod-RegExpUnicodeEscapeSequence
	pp$8.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
	  if ( forceU === void 0 ) forceU = false;

	  var start = state.pos;
	  var switchU = forceU || state.switchU;

	  if (state.eat(0x75 /* u */)) {
	    if (this.regexp_eatFixedHexDigits(state, 4)) {
	      var lead = state.lastIntValue;
	      if (switchU && lead >= 0xD800 && lead <= 0xDBFF) {
	        var leadSurrogateEnd = state.pos;
	        if (state.eat(0x5C /* \ */) && state.eat(0x75 /* u */) && this.regexp_eatFixedHexDigits(state, 4)) {
	          var trail = state.lastIntValue;
	          if (trail >= 0xDC00 && trail <= 0xDFFF) {
	            state.lastIntValue = (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
	            return true
	          }
	        }
	        state.pos = leadSurrogateEnd;
	        state.lastIntValue = lead;
	      }
	      return true
	    }
	    if (
	      switchU &&
	      state.eat(0x7B /* { */) &&
	      this.regexp_eatHexDigits(state) &&
	      state.eat(0x7D /* } */) &&
	      isValidUnicode(state.lastIntValue)
	    ) {
	      return true
	    }
	    if (switchU) {
	      state.raise("Invalid unicode escape");
	    }
	    state.pos = start;
	  }

	  return false
	};
	function isValidUnicode(ch) {
	  return ch >= 0 && ch <= 0x10FFFF
	}

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-IdentityEscape
	pp$8.regexp_eatIdentityEscape = function(state) {
	  if (state.switchU) {
	    if (this.regexp_eatSyntaxCharacter(state)) {
	      return true
	    }
	    if (state.eat(0x2F /* / */)) {
	      state.lastIntValue = 0x2F; /* / */
	      return true
	    }
	    return false
	  }

	  var ch = state.current();
	  if (ch !== 0x63 /* c */ && (!state.switchN || ch !== 0x6B /* k */)) {
	    state.lastIntValue = ch;
	    state.advance();
	    return true
	  }

	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalEscape
	pp$8.regexp_eatDecimalEscape = function(state) {
	  state.lastIntValue = 0;
	  var ch = state.current();
	  if (ch >= 0x31 /* 1 */ && ch <= 0x39 /* 9 */) {
	    do {
	      state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
	      state.advance();
	    } while ((ch = state.current()) >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */)
	    return true
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClassEscape
	pp$8.regexp_eatCharacterClassEscape = function(state) {
	  var ch = state.current();

	  if (isCharacterClassEscape(ch)) {
	    state.lastIntValue = -1;
	    state.advance();
	    return true
	  }

	  if (
	    state.switchU &&
	    this.options.ecmaVersion >= 9 &&
	    (ch === 0x50 /* P */ || ch === 0x70 /* p */)
	  ) {
	    state.lastIntValue = -1;
	    state.advance();
	    if (
	      state.eat(0x7B /* { */) &&
	      this.regexp_eatUnicodePropertyValueExpression(state) &&
	      state.eat(0x7D /* } */)
	    ) {
	      return true
	    }
	    state.raise("Invalid property name");
	  }

	  return false
	};
	function isCharacterClassEscape(ch) {
	  return (
	    ch === 0x64 /* d */ ||
	    ch === 0x44 /* D */ ||
	    ch === 0x73 /* s */ ||
	    ch === 0x53 /* S */ ||
	    ch === 0x77 /* w */ ||
	    ch === 0x57 /* W */
	  )
	}

	// UnicodePropertyValueExpression ::
	//   UnicodePropertyName `=` UnicodePropertyValue
	//   LoneUnicodePropertyNameOrValue
	pp$8.regexp_eatUnicodePropertyValueExpression = function(state) {
	  var start = state.pos;

	  // UnicodePropertyName `=` UnicodePropertyValue
	  if (this.regexp_eatUnicodePropertyName(state) && state.eat(0x3D /* = */)) {
	    var name = state.lastStringValue;
	    if (this.regexp_eatUnicodePropertyValue(state)) {
	      var value = state.lastStringValue;
	      this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
	      return true
	    }
	  }
	  state.pos = start;

	  // LoneUnicodePropertyNameOrValue
	  if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
	    var nameOrValue = state.lastStringValue;
	    this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
	    return true
	  }
	  return false
	};
	pp$8.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
	  if (!has(state.unicodeProperties.nonBinary, name))
	    { state.raise("Invalid property name"); }
	  if (!state.unicodeProperties.nonBinary[name].test(value))
	    { state.raise("Invalid property value"); }
	};
	pp$8.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
	  if (!state.unicodeProperties.binary.test(nameOrValue))
	    { state.raise("Invalid property name"); }
	};

	// UnicodePropertyName ::
	//   UnicodePropertyNameCharacters
	pp$8.regexp_eatUnicodePropertyName = function(state) {
	  var ch = 0;
	  state.lastStringValue = "";
	  while (isUnicodePropertyNameCharacter(ch = state.current())) {
	    state.lastStringValue += codePointToString(ch);
	    state.advance();
	  }
	  return state.lastStringValue !== ""
	};
	function isUnicodePropertyNameCharacter(ch) {
	  return isControlLetter(ch) || ch === 0x5F /* _ */
	}

	// UnicodePropertyValue ::
	//   UnicodePropertyValueCharacters
	pp$8.regexp_eatUnicodePropertyValue = function(state) {
	  var ch = 0;
	  state.lastStringValue = "";
	  while (isUnicodePropertyValueCharacter(ch = state.current())) {
	    state.lastStringValue += codePointToString(ch);
	    state.advance();
	  }
	  return state.lastStringValue !== ""
	};
	function isUnicodePropertyValueCharacter(ch) {
	  return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch)
	}

	// LoneUnicodePropertyNameOrValue ::
	//   UnicodePropertyValueCharacters
	pp$8.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
	  return this.regexp_eatUnicodePropertyValue(state)
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClass
	pp$8.regexp_eatCharacterClass = function(state) {
	  if (state.eat(0x5B /* [ */)) {
	    state.eat(0x5E /* ^ */);
	    this.regexp_classRanges(state);
	    if (state.eat(0x5D /* ] */)) {
	      return true
	    }
	    // Unreachable since it threw "unterminated regular expression" error before.
	    state.raise("Unterminated character class");
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-ClassRanges
	// https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRanges
	// https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRangesNoDash
	pp$8.regexp_classRanges = function(state) {
	  while (this.regexp_eatClassAtom(state)) {
	    var left = state.lastIntValue;
	    if (state.eat(0x2D /* - */) && this.regexp_eatClassAtom(state)) {
	      var right = state.lastIntValue;
	      if (state.switchU && (left === -1 || right === -1)) {
	        state.raise("Invalid character class");
	      }
	      if (left !== -1 && right !== -1 && left > right) {
	        state.raise("Range out of order in character class");
	      }
	    }
	  }
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtom
	// https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtomNoDash
	pp$8.regexp_eatClassAtom = function(state) {
	  var start = state.pos;

	  if (state.eat(0x5C /* \ */)) {
	    if (this.regexp_eatClassEscape(state)) {
	      return true
	    }
	    if (state.switchU) {
	      // Make the same message as V8.
	      var ch$1 = state.current();
	      if (ch$1 === 0x63 /* c */ || isOctalDigit(ch$1)) {
	        state.raise("Invalid class escape");
	      }
	      state.raise("Invalid escape");
	    }
	    state.pos = start;
	  }

	  var ch = state.current();
	  if (ch !== 0x5D /* ] */) {
	    state.lastIntValue = ch;
	    state.advance();
	    return true
	  }

	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassEscape
	pp$8.regexp_eatClassEscape = function(state) {
	  var start = state.pos;

	  if (state.eat(0x62 /* b */)) {
	    state.lastIntValue = 0x08; /* <BS> */
	    return true
	  }

	  if (state.switchU && state.eat(0x2D /* - */)) {
	    state.lastIntValue = 0x2D; /* - */
	    return true
	  }

	  if (!state.switchU && state.eat(0x63 /* c */)) {
	    if (this.regexp_eatClassControlLetter(state)) {
	      return true
	    }
	    state.pos = start;
	  }

	  return (
	    this.regexp_eatCharacterClassEscape(state) ||
	    this.regexp_eatCharacterEscape(state)
	  )
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassControlLetter
	pp$8.regexp_eatClassControlLetter = function(state) {
	  var ch = state.current();
	  if (isDecimalDigit(ch) || ch === 0x5F /* _ */) {
	    state.lastIntValue = ch % 0x20;
	    state.advance();
	    return true
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
	pp$8.regexp_eatHexEscapeSequence = function(state) {
	  var start = state.pos;
	  if (state.eat(0x78 /* x */)) {
	    if (this.regexp_eatFixedHexDigits(state, 2)) {
	      return true
	    }
	    if (state.switchU) {
	      state.raise("Invalid escape");
	    }
	    state.pos = start;
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalDigits
	pp$8.regexp_eatDecimalDigits = function(state) {
	  var start = state.pos;
	  var ch = 0;
	  state.lastIntValue = 0;
	  while (isDecimalDigit(ch = state.current())) {
	    state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
	    state.advance();
	  }
	  return state.pos !== start
	};
	function isDecimalDigit(ch) {
	  return ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */
	}

	// https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigits
	pp$8.regexp_eatHexDigits = function(state) {
	  var start = state.pos;
	  var ch = 0;
	  state.lastIntValue = 0;
	  while (isHexDigit(ch = state.current())) {
	    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
	    state.advance();
	  }
	  return state.pos !== start
	};
	function isHexDigit(ch) {
	  return (
	    (ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */) ||
	    (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) ||
	    (ch >= 0x61 /* a */ && ch <= 0x66 /* f */)
	  )
	}
	function hexToInt(ch) {
	  if (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) {
	    return 10 + (ch - 0x41 /* A */)
	  }
	  if (ch >= 0x61 /* a */ && ch <= 0x66 /* f */) {
	    return 10 + (ch - 0x61 /* a */)
	  }
	  return ch - 0x30 /* 0 */
	}

	// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-LegacyOctalEscapeSequence
	// Allows only 0-377(octal) i.e. 0-255(decimal).
	pp$8.regexp_eatLegacyOctalEscapeSequence = function(state) {
	  if (this.regexp_eatOctalDigit(state)) {
	    var n1 = state.lastIntValue;
	    if (this.regexp_eatOctalDigit(state)) {
	      var n2 = state.lastIntValue;
	      if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
	        state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
	      } else {
	        state.lastIntValue = n1 * 8 + n2;
	      }
	    } else {
	      state.lastIntValue = n1;
	    }
	    return true
	  }
	  return false
	};

	// https://www.ecma-international.org/ecma-262/8.0/#prod-OctalDigit
	pp$8.regexp_eatOctalDigit = function(state) {
	  var ch = state.current();
	  if (isOctalDigit(ch)) {
	    state.lastIntValue = ch - 0x30; /* 0 */
	    state.advance();
	    return true
	  }
	  state.lastIntValue = 0;
	  return false
	};
	function isOctalDigit(ch) {
	  return ch >= 0x30 /* 0 */ && ch <= 0x37 /* 7 */
	}

	// https://www.ecma-international.org/ecma-262/8.0/#prod-Hex4Digits
	// https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigit
	// And HexDigit HexDigit in https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
	pp$8.regexp_eatFixedHexDigits = function(state, length) {
	  var start = state.pos;
	  state.lastIntValue = 0;
	  for (var i = 0; i < length; ++i) {
	    var ch = state.current();
	    if (!isHexDigit(ch)) {
	      state.pos = start;
	      return false
	    }
	    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
	    state.advance();
	  }
	  return true
	};

	// Object type used to represent tokens. Note that normally, tokens
	// simply exist as properties on the parser object. This is only
	// used for the onToken callback and the external tokenizer.

	var Token = function Token(p) {
	  this.type = p.type;
	  this.value = p.value;
	  this.start = p.start;
	  this.end = p.end;
	  if (p.options.locations)
	    { this.loc = new SourceLocation(p, p.startLoc, p.endLoc); }
	  if (p.options.ranges)
	    { this.range = [p.start, p.end]; }
	};

	// ## Tokenizer

	var pp$9 = Parser.prototype;

	// Move to the next token

	pp$9.next = function(ignoreEscapeSequenceInKeyword) {
	  if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc)
	    { this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword); }
	  if (this.options.onToken)
	    { this.options.onToken(new Token(this)); }

	  this.lastTokEnd = this.end;
	  this.lastTokStart = this.start;
	  this.lastTokEndLoc = this.endLoc;
	  this.lastTokStartLoc = this.startLoc;
	  this.nextToken();
	};

	pp$9.getToken = function() {
	  this.next();
	  return new Token(this)
	};

	// If we're in an ES6 environment, make parsers iterable
	if (typeof Symbol !== "undefined")
	  { pp$9[Symbol.iterator] = function() {
	    var this$1 = this;

	    return {
	      next: function () {
	        var token = this$1.getToken();
	        return {
	          done: token.type === types.eof,
	          value: token
	        }
	      }
	    }
	  }; }

	// Toggle strict mode. Re-reads the next number or string to please
	// pedantic tests (`"use strict"; 010;` should fail).

	pp$9.curContext = function() {
	  return this.context[this.context.length - 1]
	};

	// Read a single token, updating the parser object's token-related
	// properties.

	pp$9.nextToken = function() {
	  var curContext = this.curContext();
	  if (!curContext || !curContext.preserveSpace) { this.skipSpace(); }

	  this.start = this.pos;
	  if (this.options.locations) { this.startLoc = this.curPosition(); }
	  if (this.pos >= this.input.length) { return this.finishToken(types.eof) }

	  if (curContext.override) { return curContext.override(this) }
	  else { this.readToken(this.fullCharCodeAtPos()); }
	};

	pp$9.readToken = function(code) {
	  // Identifier or keyword. '\uXXXX' sequences are allowed in
	  // identifiers, so '\' also dispatches to that.
	  if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92 /* '\' */)
	    { return this.readWord() }

	  return this.getTokenFromCode(code)
	};

	pp$9.fullCharCodeAtPos = function() {
	  var code = this.input.charCodeAt(this.pos);
	  if (code <= 0xd7ff || code >= 0xe000) { return code }
	  var next = this.input.charCodeAt(this.pos + 1);
	  return (code << 10) + next - 0x35fdc00
	};

	pp$9.skipBlockComment = function() {
	  var startLoc = this.options.onComment && this.curPosition();
	  var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
	  if (end === -1) { this.raise(this.pos - 2, "Unterminated comment"); }
	  this.pos = end + 2;
	  if (this.options.locations) {
	    lineBreakG.lastIndex = start;
	    var match;
	    while ((match = lineBreakG.exec(this.input)) && match.index < this.pos) {
	      ++this.curLine;
	      this.lineStart = match.index + match[0].length;
	    }
	  }
	  if (this.options.onComment)
	    { this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos,
	                           startLoc, this.curPosition()); }
	};

	pp$9.skipLineComment = function(startSkip) {
	  var start = this.pos;
	  var startLoc = this.options.onComment && this.curPosition();
	  var ch = this.input.charCodeAt(this.pos += startSkip);
	  while (this.pos < this.input.length && !isNewLine(ch)) {
	    ch = this.input.charCodeAt(++this.pos);
	  }
	  if (this.options.onComment)
	    { this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos,
	                           startLoc, this.curPosition()); }
	};

	// Called at the start of the parse and after every token. Skips
	// whitespace and comments, and.

	pp$9.skipSpace = function() {
	  loop: while (this.pos < this.input.length) {
	    var ch = this.input.charCodeAt(this.pos);
	    switch (ch) {
	    case 32: case 160: // ' '
	      ++this.pos;
	      break
	    case 13:
	      if (this.input.charCodeAt(this.pos + 1) === 10) {
	        ++this.pos;
	      }
	    case 10: case 8232: case 8233:
	      ++this.pos;
	      if (this.options.locations) {
	        ++this.curLine;
	        this.lineStart = this.pos;
	      }
	      break
	    case 47: // '/'
	      switch (this.input.charCodeAt(this.pos + 1)) {
	      case 42: // '*'
	        this.skipBlockComment();
	        break
	      case 47:
	        this.skipLineComment(2);
	        break
	      default:
	        break loop
	      }
	      break
	    default:
	      if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
	        ++this.pos;
	      } else {
	        break loop
	      }
	    }
	  }
	};

	// Called at the end of every token. Sets `end`, `val`, and
	// maintains `context` and `exprAllowed`, and skips the space after
	// the token, so that the next one's `start` will point at the
	// right position.

	pp$9.finishToken = function(type, val) {
	  this.end = this.pos;
	  if (this.options.locations) { this.endLoc = this.curPosition(); }
	  var prevType = this.type;
	  this.type = type;
	  this.value = val;

	  this.updateContext(prevType);
	};

	// ### Token reading

	// This is the function that is called to fetch the next token. It
	// is somewhat obscure, because it works in character codes rather
	// than characters, and because operator parsing has been inlined
	// into it.
	//
	// All in the name of speed.
	//
	pp$9.readToken_dot = function() {
	  var next = this.input.charCodeAt(this.pos + 1);
	  if (next >= 48 && next <= 57) { return this.readNumber(true) }
	  var next2 = this.input.charCodeAt(this.pos + 2);
	  if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) { // 46 = dot '.'
	    this.pos += 3;
	    return this.finishToken(types.ellipsis)
	  } else {
	    ++this.pos;
	    return this.finishToken(types.dot)
	  }
	};

	pp$9.readToken_slash = function() { // '/'
	  var next = this.input.charCodeAt(this.pos + 1);
	  if (this.exprAllowed) { ++this.pos; return this.readRegexp() }
	  if (next === 61) { return this.finishOp(types.assign, 2) }
	  return this.finishOp(types.slash, 1)
	};

	pp$9.readToken_mult_modulo_exp = function(code) { // '%*'
	  var next = this.input.charCodeAt(this.pos + 1);
	  var size = 1;
	  var tokentype = code === 42 ? types.star : types.modulo;

	  // exponentiation operator ** and **=
	  if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
	    ++size;
	    tokentype = types.starstar;
	    next = this.input.charCodeAt(this.pos + 2);
	  }

	  if (next === 61) { return this.finishOp(types.assign, size + 1) }
	  return this.finishOp(tokentype, size)
	};

	pp$9.readToken_pipe_amp = function(code) { // '|&'
	  var next = this.input.charCodeAt(this.pos + 1);
	  if (next === code) { return this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2) }
	  if (next === 61) { return this.finishOp(types.assign, 2) }
	  return this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1)
	};

	pp$9.readToken_caret = function() { // '^'
	  var next = this.input.charCodeAt(this.pos + 1);
	  if (next === 61) { return this.finishOp(types.assign, 2) }
	  return this.finishOp(types.bitwiseXOR, 1)
	};

	pp$9.readToken_plus_min = function(code) { // '+-'
	  var next = this.input.charCodeAt(this.pos + 1);
	  if (next === code) {
	    if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 &&
	        (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
	      // A `-->` line comment
	      this.skipLineComment(3);
	      this.skipSpace();
	      return this.nextToken()
	    }
	    return this.finishOp(types.incDec, 2)
	  }
	  if (next === 61) { return this.finishOp(types.assign, 2) }
	  return this.finishOp(types.plusMin, 1)
	};

	pp$9.readToken_lt_gt = function(code) { // '<>'
	  var next = this.input.charCodeAt(this.pos + 1);
	  var size = 1;
	  if (next === code) {
	    size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
	    if (this.input.charCodeAt(this.pos + size) === 61) { return this.finishOp(types.assign, size + 1) }
	    return this.finishOp(types.bitShift, size)
	  }
	  if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 &&
	      this.input.charCodeAt(this.pos + 3) === 45) {
	    // `<!--`, an XML-style comment that should be interpreted as a line comment
	    this.skipLineComment(4);
	    this.skipSpace();
	    return this.nextToken()
	  }
	  if (next === 61) { size = 2; }
	  return this.finishOp(types.relational, size)
	};

	pp$9.readToken_eq_excl = function(code) { // '=!'
	  var next = this.input.charCodeAt(this.pos + 1);
	  if (next === 61) { return this.finishOp(types.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) }
	  if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) { // '=>'
	    this.pos += 2;
	    return this.finishToken(types.arrow)
	  }
	  return this.finishOp(code === 61 ? types.eq : types.prefix, 1)
	};

	pp$9.readToken_question = function() { // '?'
	  if (this.options.ecmaVersion >= 11) {
	    var next = this.input.charCodeAt(this.pos + 1);
	    if (next === 46) {
	      var next2 = this.input.charCodeAt(this.pos + 2);
	      if (next2 < 48 || next2 > 57) { return this.finishOp(types.questionDot, 2) }
	    }
	    if (next === 63) { return this.finishOp(types.coalesce, 2) }
	  }
	  return this.finishOp(types.question, 1)
	};

	pp$9.getTokenFromCode = function(code) {
	  switch (code) {
	  // The interpretation of a dot depends on whether it is followed
	  // by a digit or another two dots.
	  case 46: // '.'
	    return this.readToken_dot()

	  // Punctuation tokens.
	  case 40: ++this.pos; return this.finishToken(types.parenL)
	  case 41: ++this.pos; return this.finishToken(types.parenR)
	  case 59: ++this.pos; return this.finishToken(types.semi)
	  case 44: ++this.pos; return this.finishToken(types.comma)
	  case 91: ++this.pos; return this.finishToken(types.bracketL)
	  case 93: ++this.pos; return this.finishToken(types.bracketR)
	  case 123: ++this.pos; return this.finishToken(types.braceL)
	  case 125: ++this.pos; return this.finishToken(types.braceR)
	  case 58: ++this.pos; return this.finishToken(types.colon)

	  case 96: // '`'
	    if (this.options.ecmaVersion < 6) { break }
	    ++this.pos;
	    return this.finishToken(types.backQuote)

	  case 48: // '0'
	    var next = this.input.charCodeAt(this.pos + 1);
	    if (next === 120 || next === 88) { return this.readRadixNumber(16) } // '0x', '0X' - hex number
	    if (this.options.ecmaVersion >= 6) {
	      if (next === 111 || next === 79) { return this.readRadixNumber(8) } // '0o', '0O' - octal number
	      if (next === 98 || next === 66) { return this.readRadixNumber(2) } // '0b', '0B' - binary number
	    }

	  // Anything else beginning with a digit is an integer, octal
	  // number, or float.
	  case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: // 1-9
	    return this.readNumber(false)

	  // Quotes produce strings.
	  case 34: case 39: // '"', "'"
	    return this.readString(code)

	  // Operators are parsed inline in tiny state machines. '=' (61) is
	  // often referred to. `finishOp` simply skips the amount of
	  // characters it is given as second argument, and returns a token
	  // of the type given by its first argument.

	  case 47: // '/'
	    return this.readToken_slash()

	  case 37: case 42: // '%*'
	    return this.readToken_mult_modulo_exp(code)

	  case 124: case 38: // '|&'
	    return this.readToken_pipe_amp(code)

	  case 94: // '^'
	    return this.readToken_caret()

	  case 43: case 45: // '+-'
	    return this.readToken_plus_min(code)

	  case 60: case 62: // '<>'
	    return this.readToken_lt_gt(code)

	  case 61: case 33: // '=!'
	    return this.readToken_eq_excl(code)

	  case 63: // '?'
	    return this.readToken_question()

	  case 126: // '~'
	    return this.finishOp(types.prefix, 1)
	  }

	  this.raise(this.pos, "Unexpected character '" + codePointToString$1(code) + "'");
	};

	pp$9.finishOp = function(type, size) {
	  var str = this.input.slice(this.pos, this.pos + size);
	  this.pos += size;
	  return this.finishToken(type, str)
	};

	pp$9.readRegexp = function() {
	  var escaped, inClass, start = this.pos;
	  for (;;) {
	    if (this.pos >= this.input.length) { this.raise(start, "Unterminated regular expression"); }
	    var ch = this.input.charAt(this.pos);
	    if (lineBreak.test(ch)) { this.raise(start, "Unterminated regular expression"); }
	    if (!escaped) {
	      if (ch === "[") { inClass = true; }
	      else if (ch === "]" && inClass) { inClass = false; }
	      else if (ch === "/" && !inClass) { break }
	      escaped = ch === "\\";
	    } else { escaped = false; }
	    ++this.pos;
	  }
	  var pattern = this.input.slice(start, this.pos);
	  ++this.pos;
	  var flagsStart = this.pos;
	  var flags = this.readWord1();
	  if (this.containsEsc) { this.unexpected(flagsStart); }

	  // Validate pattern
	  var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
	  state.reset(start, pattern, flags);
	  this.validateRegExpFlags(state);
	  this.validateRegExpPattern(state);

	  // Create Literal#value property value.
	  var value = null;
	  try {
	    value = new RegExp(pattern, flags);
	  } catch (e) {
	    // ESTree requires null if it failed to instantiate RegExp object.
	    // https://github.com/estree/estree/blob/a27003adf4fd7bfad44de9cef372a2eacd527b1c/es5.md#regexpliteral
	  }

	  return this.finishToken(types.regexp, {pattern: pattern, flags: flags, value: value})
	};

	// Read an integer in the given radix. Return null if zero digits
	// were read, the integer value otherwise. When `len` is given, this
	// will return `null` unless the integer has exactly `len` digits.

	pp$9.readInt = function(radix, len) {
	  var start = this.pos, total = 0;
	  for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
	    var code = this.input.charCodeAt(this.pos), val = (void 0);
	    if (code >= 97) { val = code - 97 + 10; } // a
	    else if (code >= 65) { val = code - 65 + 10; } // A
	    else if (code >= 48 && code <= 57) { val = code - 48; } // 0-9
	    else { val = Infinity; }
	    if (val >= radix) { break }
	    ++this.pos;
	    total = total * radix + val;
	  }
	  if (this.pos === start || len != null && this.pos - start !== len) { return null }

	  return total
	};

	pp$9.readRadixNumber = function(radix) {
	  var start = this.pos;
	  this.pos += 2; // 0x
	  var val = this.readInt(radix);
	  if (val == null) { this.raise(this.start + 2, "Expected number in radix " + radix); }
	  if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
	    val = typeof BigInt !== "undefined" ? BigInt(this.input.slice(start, this.pos)) : null;
	    ++this.pos;
	  } else if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
	  return this.finishToken(types.num, val)
	};

	// Read an integer, octal integer, or floating-point number.

	pp$9.readNumber = function(startsWithDot) {
	  var start = this.pos;
	  if (!startsWithDot && this.readInt(10) === null) { this.raise(start, "Invalid number"); }
	  var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
	  if (octal && this.strict) { this.raise(start, "Invalid number"); }
	  var next = this.input.charCodeAt(this.pos);
	  if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
	    var str$1 = this.input.slice(start, this.pos);
	    var val$1 = typeof BigInt !== "undefined" ? BigInt(str$1) : null;
	    ++this.pos;
	    if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
	    return this.finishToken(types.num, val$1)
	  }
	  if (octal && /[89]/.test(this.input.slice(start, this.pos))) { octal = false; }
	  if (next === 46 && !octal) { // '.'
	    ++this.pos;
	    this.readInt(10);
	    next = this.input.charCodeAt(this.pos);
	  }
	  if ((next === 69 || next === 101) && !octal) { // 'eE'
	    next = this.input.charCodeAt(++this.pos);
	    if (next === 43 || next === 45) { ++this.pos; } // '+-'
	    if (this.readInt(10) === null) { this.raise(start, "Invalid number"); }
	  }
	  if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }

	  var str = this.input.slice(start, this.pos);
	  var val = octal ? parseInt(str, 8) : parseFloat(str);
	  return this.finishToken(types.num, val)
	};

	// Read a string value, interpreting backslash-escapes.

	pp$9.readCodePoint = function() {
	  var ch = this.input.charCodeAt(this.pos), code;

	  if (ch === 123) { // '{'
	    if (this.options.ecmaVersion < 6) { this.unexpected(); }
	    var codePos = ++this.pos;
	    code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
	    ++this.pos;
	    if (code > 0x10FFFF) { this.invalidStringToken(codePos, "Code point out of bounds"); }
	  } else {
	    code = this.readHexChar(4);
	  }
	  return code
	};

	function codePointToString$1(code) {
	  // UTF-16 Decoding
	  if (code <= 0xFFFF) { return String.fromCharCode(code) }
	  code -= 0x10000;
	  return String.fromCharCode((code >> 10) + 0xD800, (code & 1023) + 0xDC00)
	}

	pp$9.readString = function(quote) {
	  var out = "", chunkStart = ++this.pos;
	  for (;;) {
	    if (this.pos >= this.input.length) { this.raise(this.start, "Unterminated string constant"); }
	    var ch = this.input.charCodeAt(this.pos);
	    if (ch === quote) { break }
	    if (ch === 92) { // '\'
	      out += this.input.slice(chunkStart, this.pos);
	      out += this.readEscapedChar(false);
	      chunkStart = this.pos;
	    } else {
	      if (isNewLine(ch, this.options.ecmaVersion >= 10)) { this.raise(this.start, "Unterminated string constant"); }
	      ++this.pos;
	    }
	  }
	  out += this.input.slice(chunkStart, this.pos++);
	  return this.finishToken(types.string, out)
	};

	// Reads template string tokens.

	var INVALID_TEMPLATE_ESCAPE_ERROR = {};

	pp$9.tryReadTemplateToken = function() {
	  this.inTemplateElement = true;
	  try {
	    this.readTmplToken();
	  } catch (err) {
	    if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
	      this.readInvalidTemplateToken();
	    } else {
	      throw err
	    }
	  }

	  this.inTemplateElement = false;
	};

	pp$9.invalidStringToken = function(position, message) {
	  if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
	    throw INVALID_TEMPLATE_ESCAPE_ERROR
	  } else {
	    this.raise(position, message);
	  }
	};

	pp$9.readTmplToken = function() {
	  var out = "", chunkStart = this.pos;
	  for (;;) {
	    if (this.pos >= this.input.length) { this.raise(this.start, "Unterminated template"); }
	    var ch = this.input.charCodeAt(this.pos);
	    if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) { // '`', '${'
	      if (this.pos === this.start && (this.type === types.template || this.type === types.invalidTemplate)) {
	        if (ch === 36) {
	          this.pos += 2;
	          return this.finishToken(types.dollarBraceL)
	        } else {
	          ++this.pos;
	          return this.finishToken(types.backQuote)
	        }
	      }
	      out += this.input.slice(chunkStart, this.pos);
	      return this.finishToken(types.template, out)
	    }
	    if (ch === 92) { // '\'
	      out += this.input.slice(chunkStart, this.pos);
	      out += this.readEscapedChar(true);
	      chunkStart = this.pos;
	    } else if (isNewLine(ch)) {
	      out += this.input.slice(chunkStart, this.pos);
	      ++this.pos;
	      switch (ch) {
	      case 13:
	        if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; }
	      case 10:
	        out += "\n";
	        break
	      default:
	        out += String.fromCharCode(ch);
	        break
	      }
	      if (this.options.locations) {
	        ++this.curLine;
	        this.lineStart = this.pos;
	      }
	      chunkStart = this.pos;
	    } else {
	      ++this.pos;
	    }
	  }
	};

	// Reads a template token to search for the end, without validating any escape sequences
	pp$9.readInvalidTemplateToken = function() {
	  for (; this.pos < this.input.length; this.pos++) {
	    switch (this.input[this.pos]) {
	    case "\\":
	      ++this.pos;
	      break

	    case "$":
	      if (this.input[this.pos + 1] !== "{") {
	        break
	      }
	    // falls through

	    case "`":
	      return this.finishToken(types.invalidTemplate, this.input.slice(this.start, this.pos))

	    // no default
	    }
	  }
	  this.raise(this.start, "Unterminated template");
	};

	// Used to read escaped characters

	pp$9.readEscapedChar = function(inTemplate) {
	  var ch = this.input.charCodeAt(++this.pos);
	  ++this.pos;
	  switch (ch) {
	  case 110: return "\n" // 'n' -> '\n'
	  case 114: return "\r" // 'r' -> '\r'
	  case 120: return String.fromCharCode(this.readHexChar(2)) // 'x'
	  case 117: return codePointToString$1(this.readCodePoint()) // 'u'
	  case 116: return "\t" // 't' -> '\t'
	  case 98: return "\b" // 'b' -> '\b'
	  case 118: return "\u000b" // 'v' -> '\u000b'
	  case 102: return "\f" // 'f' -> '\f'
	  case 13: if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; } // '\r\n'
	  case 10: // ' \n'
	    if (this.options.locations) { this.lineStart = this.pos; ++this.curLine; }
	    return ""
	  case 56:
	  case 57:
	    if (inTemplate) {
	      var codePos = this.pos - 1;

	      this.invalidStringToken(
	        codePos,
	        "Invalid escape sequence in template string"
	      );

	      return null
	    }
	  default:
	    if (ch >= 48 && ch <= 55) {
	      var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
	      var octal = parseInt(octalStr, 8);
	      if (octal > 255) {
	        octalStr = octalStr.slice(0, -1);
	        octal = parseInt(octalStr, 8);
	      }
	      this.pos += octalStr.length - 1;
	      ch = this.input.charCodeAt(this.pos);
	      if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
	        this.invalidStringToken(
	          this.pos - 1 - octalStr.length,
	          inTemplate
	            ? "Octal literal in template string"
	            : "Octal literal in strict mode"
	        );
	      }
	      return String.fromCharCode(octal)
	    }
	    if (isNewLine(ch)) {
	      // Unicode new line characters after \ get removed from output in both
	      // template literals and strings
	      return ""
	    }
	    return String.fromCharCode(ch)
	  }
	};

	// Used to read character escape sequences ('\x', '\u', '\U').

	pp$9.readHexChar = function(len) {
	  var codePos = this.pos;
	  var n = this.readInt(16, len);
	  if (n === null) { this.invalidStringToken(codePos, "Bad character escape sequence"); }
	  return n
	};

	// Read an identifier, and return it as a string. Sets `this.containsEsc`
	// to whether the word contained a '\u' escape.
	//
	// Incrementally adds only escaped chars, adding other chunks as-is
	// as a micro-optimization.

	pp$9.readWord1 = function() {
	  this.containsEsc = false;
	  var word = "", first = true, chunkStart = this.pos;
	  var astral = this.options.ecmaVersion >= 6;
	  while (this.pos < this.input.length) {
	    var ch = this.fullCharCodeAtPos();
	    if (isIdentifierChar(ch, astral)) {
	      this.pos += ch <= 0xffff ? 1 : 2;
	    } else if (ch === 92) { // "\"
	      this.containsEsc = true;
	      word += this.input.slice(chunkStart, this.pos);
	      var escStart = this.pos;
	      if (this.input.charCodeAt(++this.pos) !== 117) // "u"
	        { this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"); }
	      ++this.pos;
	      var esc = this.readCodePoint();
	      if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral))
	        { this.invalidStringToken(escStart, "Invalid Unicode escape"); }
	      word += codePointToString$1(esc);
	      chunkStart = this.pos;
	    } else {
	      break
	    }
	    first = false;
	  }
	  return word + this.input.slice(chunkStart, this.pos)
	};

	// Read an identifier or keyword token. Will check for reserved
	// words when necessary.

	pp$9.readWord = function() {
	  var word = this.readWord1();
	  var type = types.name;
	  if (this.keywords.test(word)) {
	    type = keywords$1[word];
	  }
	  return this.finishToken(type, word)
	};

	// Acorn is a tiny, fast JavaScript parser written in JavaScript.

	var version = "7.3.1";

	Parser.acorn = {
	  Parser: Parser,
	  version: version,
	  defaultOptions: defaultOptions,
	  Position: Position,
	  SourceLocation: SourceLocation,
	  getLineInfo: getLineInfo,
	  Node: Node,
	  TokenType: TokenType,
	  tokTypes: types,
	  keywordTypes: keywords$1,
	  TokContext: TokContext,
	  tokContexts: types$1,
	  isIdentifierChar: isIdentifierChar,
	  isIdentifierStart: isIdentifierStart,
	  Token: Token,
	  isNewLine: isNewLine,
	  lineBreak: lineBreak,
	  lineBreakG: lineBreakG,
	  nonASCIIwhitespace: nonASCIIwhitespace
	};

	self.window = self; // egregious hack to get magic-string to work in a worker

	let packagesUrl;
	let svelteUrl;
	let current_id;

	self.addEventListener('message', event => {
	    switch (event.data.type) {
	        case 'init':
	            packagesUrl = event.data.packagesUrl;
	            svelteUrl = event.data.svelteUrl;
	            importScripts(`${svelteUrl}/compiler.js`);

	            break;

	        case 'bundle':
	            const { uid, components } = event.data;

	            if (components.length === 0) return;

	            current_id = uid;

	            setTimeout(async () => {
	                if (current_id !== uid) return;

	                const result = await bundle({ uid, components });

	                if (result.error === ABORT) return;
	                if (result && uid === current_id) postMessage(result);
	            });

	            break;
	    }
	});

	let cached = {
	    dom: {},
	    ssr: {}
	};

	const ABORT = { aborted: true };

	async function get_bundle(uid, mode, cache, lookup) {

	    // try {
	    //     bundle = await rollup.rollup({
	    //         input: './App.svelte',
	    //         plugins: [
	    //             repl_plugin,
	    //             commonjs,
	    //             json,
	    //             glsl
	    //         ],
	    //         inlineDynamicImports: true,
	    //         onwarn(warning) {
	    //             all_warnings.push({
	    //                 message: warning.message
	    //             });
	    //         }
	    //     });

	    //     return { bundle, imports: Array.from(imports), cache: new_cache, error: null, warnings, all_warnings };
	    // } catch (error) {
	    //     return { error, imports: null, bundle: null, cache: new_cache, warnings, all_warnings };
	    // }
	}

	async function bundle({ uid, components }) {
	    console.clear();
	    console.log(`running Svelte compiler version %c${svelte.VERSION}`, 'font-weight: bold');

	    const lookup = {};
	    components.forEach(component => {
	        const path = `./${component.name}.${component.type}`;
	        lookup[path] = component;
	    });

	    let dom;

	    try {
	        dom = await get_bundle(uid, 'dom', cached.dom, lookup);
	        if (dom.error) {
	            throw dom.error;
	        }

	        cached.dom = dom.cache;

	        const dom_result = (await dom.bundle.generate({
	            format: 'iife',
	            name: 'SvelteComponent',
	            exports: 'named',
	            sourcemap: true
	        })).output[0];

	        const ssr = false // TODO how can we do SSR?
	            ? await get_bundle(uid, 'ssr', cached.ssr, lookup)
	            : null;

	        if (ssr) {
	            cached.ssr = ssr.cache;
	            if (ssr.error) {
	                throw ssr.error;
	            }
	        }

	        const ssr_result = ssr
	            ? (await ssr.bundle.generate({
	                format: 'iife',
	                name: 'SvelteComponent',
	                exports: 'named',
	                sourcemap: true
	            })).output[0]
	            : null;

	        return {
	            uid,
	            dom: dom_result,
	            ssr: ssr_result,
	            imports: dom.imports,
	            warnings: dom.warnings,
	            error: null
	        };
	    } catch (err) {
	        console.error(err);

	        const e =  err;
	        delete e.toString;

	        return {
	            uid,
	            dom: null,
	            ssr: null,
	            imports: null,
	            warnings: dom.warnings,
	            error: Object.assign({}, e, {
	                message: e.message,
	                stack: e.stack
	            })
	        };
	    }
	}

}());
