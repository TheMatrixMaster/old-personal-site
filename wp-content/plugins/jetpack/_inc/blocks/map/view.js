!function(){var e={27538:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},94824:function(e,t,n){"use strict";var o=n(27538),r=n.n(o),i=n(69307),a=n(65736),s=n(92819),l=n(55609),c=n(85608),p=n(57918),d=n(49383),u=n(71644),m=n(45388);const __=a.__;class h extends i.Component{constructor(){super(...arguments),r()(this,"onMarkerClick",(e=>{const{onMarkerClick:t}=this.props;this.setState({activeMarker:e}),t()})),r()(this,"onMapClick",(()=>{this.setState({activeMarker:null})})),r()(this,"clearCurrentMarker",(()=>{this.setState({activeMarker:null})})),r()(this,"updateActiveMarker",(e=>{const{points:t}=this.props,{activeMarker:n}=this.state,{index:o}=n.props,r=t.slice(0);(0,s.assign)(r[o],e),this.props.onSetPoints(r)})),r()(this,"deleteActiveMarker",(()=>{const{points:e}=this.props,{activeMarker:t}=this.state,{index:n}=t.props,o=e.slice(0);o.splice(n,1),this.props.onSetPoints(o),this.setState({activeMarker:null})})),r()(this,"sizeMap",(()=>{const{mapHeight:e}=this.props,{map:t}=this.state,n=this.mapRef.current;if(e)n.style.height=e+"px";else{const e=n.offsetWidth,t=window.location.search.indexOf("map-block-counter")>-1?window.innerHeight:.8*window.innerHeight,o=Math.min(e*(3/4),t);n.style.height=o+"px"}t.resize(),this.setBoundsByMarkers()})),r()(this,"updateZoom",(()=>{const{zoom:e}=this.props,{map:t}=this.state;t.setZoom(e),t.updateZoom(e)})),r()(this,"setBoundsByMarkers",(()=>{const{admin:e,onSetMapCenter:t,onSetZoom:n,points:o,zoom:r}=this.props,{map:i,activeMarker:a,mapboxgl:s,zoomControl:l,boundsSetProgrammatically:c}=this.state;if(!i)return;if(o.length&&e?i.dragPan.disable():i.dragPan.enable(),!o.length)return;if(a)return;const p=new s.LngLatBounds;if(o.forEach((e=>{p.extend([e.coordinates.longitude,e.coordinates.latitude])})),t(p.getCenter()),o.length>1){i.fitBounds(p,{padding:{top:80,bottom:80,left:40,right:40}}),this.setState({boundsSetProgrammatically:!0});try{i.removeControl(l)}catch(e){}}else{if(i.setCenter(p.getCenter()),c){const e=12;i.setZoom(e),n(e)}else i.setZoom(parseInt(r,10));i.addControl(l),this.setState({boundsSetProgrammatically:!1})}})),r()(this,"scriptsLoaded",(()=>{const{mapCenter:e,points:t}=this.props;this.setState({loaded:!0}),t.length,this.initMap(e)})),r()(this,"googlePoint2Mapbox",(e=>e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")?e:{lat:e.latitude||0,lng:e.longitude||0})),this.state={map:null,fit_to_bounds:!1,loaded:!1,mapboxgl:null},this.mapRef=(0,i.createRef)(),this.debouncedSizeMap=(0,s.debounce)(this.sizeMap,250)}render(){const{points:e,admin:t,children:n,markerColor:o}=this.props,{map:r,activeMarker:a,mapboxgl:d}=this.state,{onMarkerClick:u,deleteActiveMarker:m,updateActiveMarker:h}=this,f=(0,s.get)(a,"props.point")||{},{title:g,caption:k}=f,b=i.Children.map(n,(e=>{if("AddPoint"===(0,s.get)(e,"props.tagName"))return e})),w=r&&d&&e.map(((e,t)=>(0,i.createElement)(c.Z,{mapRef:this.mapRef,key:t,point:e,index:t,map:r,mapboxgl:d,markerColor:o,onClick:u}))),v=d&&(0,i.createElement)(p.Z,{activeMarker:a,map:r,mapboxgl:d,unsetActiveMarker:()=>this.setState({activeMarker:null})},a&&t&&(0,i.createElement)(i.Fragment,null,(0,i.createElement)(l.TextControl,{label:__("Marker Title","jetpack"),value:g,onChange:e=>h({title:e})}),(0,i.createElement)(l.TextareaControl,{className:"wp-block-jetpack-map__marker-caption",label:__("Marker Caption","jetpack"),value:k,rows:"2",tag:"textarea",onChange:e=>h({caption:e})}),(0,i.createElement)(l.Button,{onClick:m,className:"wp-block-jetpack-map__delete-btn"},(0,i.createElement)(l.Dashicon,{icon:"trash",size:"15"})," ",__("Delete Marker","jetpack"))),a&&!t&&(0,i.createElement)(i.Fragment,null,(0,i.createElement)("h3",null,g),(0,i.createElement)("p",null,k)));return(0,i.createElement)(i.Fragment,null,(0,i.createElement)("div",{className:"wp-block-jetpack-map__gm-container",ref:this.mapRef},w),v,b)}componentDidMount(){const{apiKey:e}=this.props;e&&this.loadMapLibraries()}componentWillUnmount(){this.debouncedSizeMap.cancel(),window.removeEventListener("resize",this.debouncedSizeMap)}componentDidUpdate(e){const{admin:t,apiKey:n,children:o,points:r,mapStyle:i,mapDetails:a,scrollToZoom:s,showFullscreenButton:l}=this.props,{map:c,fullscreenControl:p}=this.state;n&&n.length>0&&n!==e.apiKey&&this.loadMapLibraries(),o!==e.children&&!1!==o&&this.clearCurrentMarker(),r!==e.points&&this.setBoundsByMarkers(),r.length!==e.points.length&&this.clearCurrentMarker(),i===e.mapStyle&&a===e.mapDetails||c.setStyle(this.getMapStyle()),s!==e.scrollToZoom&&(s?c.scrollZoom.enable():c.scrollZoom.disable()),l!==e.showFullscreenButton&&(l?(c.addControl(p),t&&p._fullscreenButton&&(p._fullscreenButton.disabled=!0)):c.removeControl(p))}getMapStyle(){const{mapStyle:e,mapDetails:t}=this.props;return(0,d.h)(e,t)}getMapType(){const{mapStyle:e}=this.props;switch(e){case"satellite":return"HYBRID";case"terrain":return"TERRAIN";default:return"ROADMAP"}}loadMapLibraries(){const{apiKey:e}=this.props,{currentWindow:t}=(0,u.bL)(this.mapRef.current),n={"mapbox-gl-js":()=>{(0,u.Dz)(t,"mapboxgl").then((t=>{t.accessToken=e,this.setState({mapboxgl:t},this.scriptsLoaded)}))}};(0,u.Pp)(m,n,this.mapRef.current)}initMap(e){const{mapboxgl:t}=this.state,{zoom:n,onMapLoaded:o,onError:r,scrollToZoom:i,showFullscreenButton:a,admin:s}=this.props;let l=null;try{l=new t.Map({container:this.mapRef.current,style:this.getMapStyle(),center:this.googlePoint2Mapbox(e),zoom:parseInt(n,10),pitchWithRotate:!1,attributionControl:!1,dragRotate:!1})}catch(e){return void r("mapbox_error",e.message)}i||l.scrollZoom.disable();const c=new t.FullscreenControl;l.on("error",(e=>{r("mapbox_error",e.error.message)}));const p=new t.NavigationControl({showCompass:!1,showZoom:!0});l.on("zoomend",(()=>{this.props.onSetZoom(l.getZoom())})),l.on("moveend",(()=>{const{onSetMapCenter:e,points:t}=this.props;t.length<1&&e(l.getCenter())})),l.getCanvas().addEventListener("click",this.onMapClick),this.setState({map:l,zoomControl:p,fullscreenControl:c},(()=>{this.debouncedSizeMap(),l.addControl(p),a&&(l.addControl(c),s&&c._fullscreenButton&&(c._fullscreenButton.disabled=!0)),this.mapRef.current.addEventListener("alignmentChanged",this.debouncedSizeMap),l.resize(),o(),this.setState({loaded:!0}),window.addEventListener("resize",this.debouncedSizeMap)}))}}h.defaultProps={points:[],mapStyle:"default",zoom:13,onSetZoom:()=>{},onSetMapCenter:()=>{},onMapLoaded:()=>{},onMarkerClick:()=>{},onError:()=>{},markerColor:"red",apiKey:null,mapCenter:{}},t.Z=h},57918:function(e,t,n){"use strict";var o=n(27538),r=n.n(o),i=n(69307);class a extends i.Component{constructor(){super(...arguments),r()(this,"closeClick",(()=>{this.props.unsetActiveMarker()}))}componentDidMount(){const{mapboxgl:e}=this.props;this.el=document.createElement("DIV"),this.infowindow=new e.Popup({closeButton:!0,closeOnClick:!1,offset:{left:[0,0],top:[0,5],right:[0,0],bottom:[0,-40]}}),this.infowindow.setDOMContent(this.el),this.infowindow.on("close",this.closeClick)}componentDidUpdate(e){this.props.activeMarker!==e.activeMarker&&(this.props.activeMarker?this.openWindow():this.closeWindow())}render(){return this.el?(0,i.createPortal)(this.props.children,this.el):null}openWindow(){const{map:e,activeMarker:t}=this.props;this.infowindow.setLngLat(t.getPoint()).addTo(e)}closeWindow(){this.infowindow.remove()}}a.defaultProps={unsetActiveMarker:()=>{},activeMarker:null,map:null,mapboxgl:null},t.Z=a},85608:function(e,t,n){"use strict";var o=n(27538),r=n.n(o),i=n(69307),a=n(71644);class s extends i.Component{constructor(){super(...arguments),r()(this,"handleClick",(()=>{const{onClick:e}=this.props;e(this)})),r()(this,"getPoint",(()=>{const{point:e}=this.props;return[e.coordinates.longitude,e.coordinates.latitude]}))}componentDidMount(){this.renderMarker()}componentWillUnmount(){this.marker&&this.marker.remove()}componentDidUpdate(){this.renderMarker()}renderMarker(){const{map:e,point:t,mapboxgl:n,markerColor:o,mapRef:r}=this.props,{handleClick:i}=this,s=[t.coordinates.longitude,t.coordinates.latitude],{currentDoc:l}=(0,a.bL)(r.current),c=this.marker?this.marker.getElement():l.createElement("div");this.marker?this.marker.setLngLat(s):(c.className="wp-block-jetpack-map-marker",this.marker=new n.Marker(c).setLngLat(s).setOffset([0,-19]).addTo(e),this.marker.getElement().addEventListener("click",i)),c.innerHTML='<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" viewBox="0 0 32 38" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g fill-rule="evenodd"><path id="d" d="m16 38s16-11.308 16-22-7.1634-16-16-16-16 5.3076-16 16 16 22 16 22z" fill="'+o+'" mask="url(#c)"/></g></svg>'}render(){return null}}s.defaultProps={point:{},map:null,markerColor:"#000000",mapboxgl:null,onClick:()=>{}},t.Z=s},49383:function(e,t,n){"use strict";function o(e,t){return{default:{details:"mapbox://styles/automattic/cjolkhmez0qdd2ro82dwog1in",no_details:"mapbox://styles/automattic/cjolkci3905d82soef4zlmkdo"},black_and_white:{details:"mapbox://styles/automattic/cjolkixvv0ty42spgt2k4j434",no_details:"mapbox://styles/automattic/cjolkgc540tvj2spgzzoq37k4"},satellite:{details:"mapbox://styles/mapbox/satellite-streets-v10",no_details:"mapbox://styles/mapbox/satellite-v9"},terrain:{details:"mapbox://styles/automattic/cjolkf8p405fh2soet2rdt96b",no_details:"mapbox://styles/automattic/cjolke6fz12ys2rpbpvgl12ha"}}[e][t?"details":"no_details"]}n.d(t,{h:function(){return o}})},19648:function(e,t,n){"use strict";n.d(t,{X:function(){return c}});var o=n(69307),r=n(65736),i=n(56932),a=n(45107),s=n(65765),l=n(34140);const __=r.__,_x=r._x,c={name:"map",prefix:"jetpack",title:__("Map","jetpack"),icon:(0,o.createElement)("svg",{xmlns:"https://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",role:"img","aria-hidden":"true",focusable:"false"},(0,o.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),(0,o.createElement)("path",{d:"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"})),category:"embed",keywords:[_x("maps","block search term","jetpack"),_x("location","block search term","jetpack"),_x("navigation","block search term","jetpack")],description:__("Add an interactive map showing one or more locations.","jetpack"),attributes:{align:{type:"string"},points:{type:"array",default:[]},address:{type:"string",default:""},mapDetails:{type:"boolean",default:!0},zoom:{type:"integer",default:13},mapCenter:{type:"object",default:{longitude:-122.41941550000001,latitude:37.7749295}},markerColor:{type:"string",default:"red"},preview:{type:"boolean",default:!1},scrollToZoom:{type:"boolean",default:!1},mapHeight:{type:"integer"},showFullscreenButton:{type:"boolean",default:!0}},supports:{defaultStylePicker:!1,html:!1},styles:[{name:"default",label:__("Basic","jetpack"),preview:i,isDefault:!0},{name:"black_and_white",label:__("Black and white","jetpack"),preview:a},{name:"satellite",label:__("Satellite","jetpack"),preview:s},{name:"terrain",label:__("Terrain","jetpack"),preview:l}],validAlignments:["center","wide","full"],markerIcon:(0,o.createElement)("svg",{width:"14",height:"20",viewBox:"0 0 14 20",xmlns:"https://www.w3.org/2000/svg"},(0,o.createElement)("g",{id:"Page-1",fill:"none",fillRule:"evenodd"},(0,o.createElement)("g",{id:"outline-add_location-24px",transform:"translate(-5 -2)"},(0,o.createElement)("polygon",{id:"Shape",points:"0 0 24 0 24 24 0 24"}),(0,o.createElement)("path",{d:"M12,2 C8.14,2 5,5.14 5,9 C5,14.25 12,22 12,22 C12,22 19,14.25 19,9 C19,5.14 15.86,2 12,2 Z M7,9 C7,6.24 9.24,4 12,4 C14.76,4 17,6.24 17,9 C17,11.88 14.12,16.19 12,18.88 C9.92,16.21 7,11.85 7,9 Z M13,6 L11,6 L11,8 L9,8 L9,10 L11,10 L11,12 L13,12 L13,10 L15,10 L15,8 L13,8 L13,6 Z",id:"Shape",fill:"#000",fillRule:"nonzero"})))),example:{attributes:{preview:!0}}}},71644:function(e,t,n){"use strict";function o(e){const t=e.ownerDocument;return{currentDoc:t,currentWindow:t.defaultView||t.parentWindow}}function r(e,t,n){const r=`${window.Jetpack_Block_Assets_Base_Url.url}editor-assets`,{currentDoc:i}=o(n),a=i.getElementsByTagName("head")[0];e.forEach((e=>{const[n,o]=e.file.split("/").pop().split(".");if("css"===o){if(i.getElementById(e.id))return;const t=i.createElement("link");t.id=e.id,t.rel="stylesheet",t.href=`${r}/${n}-${e.version}.${o}`,a.appendChild(t)}if("js"===o){const s=t[e.id]?t[e.id]:null;if(i.getElementById(e.id))return s();const l=i.createElement("script");l.id=e.id,l.type="text/javascript",l.src=`${r}/${n}-${e.version}.${o}`,l.onload=s,a.appendChild(l)}}))}function i(e,t){return new Promise((n=>{const o=()=>{e[t]?n(e[t]):e.requestAnimationFrame(o)};o()}))}n.d(t,{bL:function(){return o},Pp:function(){return r},Dz:function(){return i}})},65301:function(e,t,n){"use strict";n.d(t,{t:function(){return a}});var o=n(29512),r=n.n(o),i=n(92819);function a(e,t){const n=function(e,t){for(const n of new(r())(t).values()){if(-1===n.indexOf("is-style-"))continue;const t=n.substring(9),o=(0,i.find)(e,{name:t});if(o)return o}return(0,i.find)(e,"isDefault")}(e,t);return n?n.name:null}},59088:function(e,t,n){"use strict";var o=n(92819),r=n(69307);t.Z=class{blockIterator(e,t){t.forEach((t=>{this.initializeFrontendReactBlocks(t.component,t.options,e)}))}initializeFrontendReactBlocks(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const{attributes:i,name:a,prefix:s}=t.settings,{selector:l}=t,c=`.wp-block-${(s&&s.length?`${s}/${a}`:a).replace("/","-")}`,p=n.querySelectorAll(c);for(const n of p){if("true"===n.getAttribute("data-jetpack-block-initialized"))continue;const a=this.extractAttributesFromContainer(n,i);(0,o.assign)(a,t.props);const s=this.extractChildrenFromContainer(n),c=(0,r.createElement)(e,a,s);(0,r.render)(c,l?n.querySelector(l):n),n.setAttribute("data-jetpack-block-initialized",!0)}}extractAttributesFromContainer(e,t){const n={};for(const r in t){const i=t[r],a="data-"+(0,o.kebabCase)(r);if(n[r]=e.getAttribute(a),"boolean"===i.type&&(n[r]="false"!==n[r]&&!!n[r]),"array"===i.type||"object"===i.type)try{n[r]=JSON.parse(n[r])}catch(e){n[r]=null}}return n}extractChildrenFromContainer(e){return[...e.childNodes].map((e=>{const t={};for(let n=0;n<e.attributes.length;n++){const o=e.attributes[n];t[o.nodeName]=o.nodeValue}return t.dangerouslySetInnerHTML={__html:e.innerHTML},(0,r.createElement)(e.tagName.toLowerCase(),t)}))}}},37836:function(e,t,n){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(n.p=window.Jetpack_Block_Assets_Base_Url.url)},45107:function(e,t,n){"use strict";e.exports=n.p+"images/map-theme_black_and_white-b6ad81a7dd09d09fb34d.jpg"},56932:function(e,t,n){"use strict";e.exports=n.p+"images/map-theme_default-b53ccdf170e5ac873ff0.jpg"},65765:function(e,t,n){"use strict";e.exports=n.p+"images/map-theme_satellite-cc50c608e244f90d18dc.jpg"},34140:function(e,t,n){"use strict";e.exports=n.p+"images/map-theme_terrain-ac291441b3461820747d.jpg"},92819:function(e){"use strict";e.exports=window.lodash},55609:function(e){"use strict";e.exports=window.wp.components},47701:function(e){"use strict";e.exports=window.wp.domReady},69307:function(e){"use strict";e.exports=window.wp.element},65736:function(e){"use strict";e.exports=window.wp.i18n},29512:function(e){"use strict";e.exports=window.wp.tokenList},45388:function(e){"use strict";e.exports=JSON.parse('[{"id":"mapbox-gl-js","file":"node_modules/mapbox-gl/dist/mapbox-gl.js","version":"1.13.0"},{"id":"mapbox-gl-css","file":"node_modules/mapbox-gl/dist/mapbox-gl.css","version":"1.13.0"}]')}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"}(),function(){"use strict";n(37836)}(),function(){"use strict";var e=n(47701),t=n.n(e),o=n(94824),r=n(19648),i=n(59088),a=n(65301);t()((function(){(new i.Z).blockIterator(document,[{component:o.Z,options:{settings:{...r.X,attributes:{...r.X.attributes,mapStyle:(0,a.t)(r.X.styles,r.X.className),apiKey:{type:"string",default:""}}}}}])}))}()}();