(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{xvk3:function(t,e,i){"use strict";i.r(e),i.d(e,"IonItemOption",function(){return l}),i.d(e,"IonItemOptions",function(){return d}),i.d(e,"IonItemSliding",function(){return c});var n,o=i("B5Ai"),s=i("cBjU"),r=i("n9sr"),a=i("TJRR"),l=function(){function t(){this.disabled=!1,this.expandable=!1}return t.prototype.clickedOptionButton=function(t){return!!t.target.closest("ion-item-option")},t.prototype.hostData=function(){return{"ion-activatable":!0,class:Object.assign({},Object(r.d)(this.color),{"item-option-expandable":this.expandable})}},t.prototype.render=function(){var t=void 0===this.href?"button":"a";return Object(s.b)(t,{type:"button",class:"item-option-native",disabled:this.disabled,href:this.href,onClick:this.clickedOptionButton.bind(this)},Object(s.b)("span",{class:"item-option-button-inner"},Object(s.b)("slot",{name:"start"}),Object(s.b)("slot",{name:"top"}),Object(s.b)("slot",{name:"icon-only"}),Object(s.b)("slot",null),Object(s.b)("slot",{name:"bottom"}),Object(s.b)("slot",{name:"end"})),"md"===this.mode&&Object(s.b)("ion-ripple-effect",null))},Object.defineProperty(t,"is",{get:function(){return"ion-item-option"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},expandable:{type:Boolean,attr:"expandable"},href:{type:String,attr:"href"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-item-option-md-h{--ion-color-base:var(--ion-color-primary, #3880ff);--ion-color-contrast:var(--ion-color-primary-contrast, #fff);background:var(--ion-color-base);color:var(--ion-color-contrast);font-family:var(--ion-font-family,inherit)}.item-option-native.sc-ion-item-option-md{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding:0 .7em;position:relative;width:100%;height:100%;border:0;outline:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.item-option-button-inner.sc-ion-item-option-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit}.sc-ion-item-option-md-s > [slot=icon-only]{padding:0;margin:0 10px;min-width:.9em;font-size:1.8em}.item-option-expandable.sc-ion-item-option-md-h{-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(.65,.05,.36,1);transition-timing-function:cubic-bezier(.65,.05,.36,1)}.sc-ion-item-option-md-h{font-size:14px;font-weight:500;text-transform:uppercase}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),d=function(){function t(){this.side="end"}return t.prototype.fireSwipeEvent=function(){this.ionSwipe.emit({side:this.side})},t.prototype.hostData=function(){var t=Object(a.h)(this.win,this.side);return{class:{"item-options-start":!t,"item-options-end":t}}},Object.defineProperty(t,"is",{get:function(){return"ion-item-options"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},fireSwipeEvent:{method:!0},side:{type:String,attr:"side"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionSwipe",method:"ionSwipe",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-item-options{top:0;right:0;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}.item-options-start{right:auto;left:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.item-sliding-active-slide ion-item-options{display:-webkit-box;display:-ms-flexbox;display:flex}.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start),.item-sliding-active-slide.item-sliding-active-options-start .item-options-start{width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:rgba(var(--ion-item-border-color-rgb,0,0,0),.13)}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),c=function(){function t(){this.item=null,this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.sides=0,this.optsDirty=!0,this.state=2,this.disabled=!1}return t.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},t.prototype.componentDidLoad=function(){return o.a(this,void 0,void 0,function(){var t,e=this;return o.c(this,function(n){switch(n.label){case 0:return this.item=this.el.querySelector("ion-item"),[4,this.updateOptions()];case 1:return n.sent(),t=this,[4,i.e(160).then(i.bind(null,"2jMD"))];case 2:return t.gesture=n.sent().createGesture({el:this.el,queue:this.queue,gestureName:"item-swipe",gesturePriority:20,threshold:5,canStart:function(){return e.canStart()},onStart:function(){return e.onStart()},onMove:function(t){return e.onMove(t)},onEnd:function(t){return e.onEnd(t)}}),this.disabledChanged(),[2]}})})},t.prototype.componentDidUnload=function(){this.gesture&&this.gesture.destroy(),this.item=null,this.leftOptions=this.rightOptions=void 0},t.prototype.getOpenAmount=function(){return Promise.resolve(this.openAmount)},t.prototype.getSlidingRatio=function(){return Promise.resolve(this.getSlidingRatioSync())},t.prototype.close=function(){return o.a(this,void 0,void 0,function(){return o.c(this,function(t){return this.setOpenAmount(0,!0),[2]})})},t.prototype.closeOpened=function(){return o.a(this,void 0,void 0,function(){return o.c(this,function(t){return void 0!==n?(n.close(),[2,!0]):[2,!1]})})},t.prototype.updateOptions=function(){return o.a(this,void 0,void 0,function(){var t,e,i,n;return o.c(this,function(o){switch(o.label){case 0:t=this.el.querySelectorAll("ion-item-options"),e=0,this.leftOptions=this.rightOptions=void 0,i=0,o.label=1;case 1:return i<t.length?[4,t.item(i).componentOnReady()]:[3,4];case 2:"start"===(n=o.sent()).side?(this.leftOptions=n,e|=1):(this.rightOptions=n,e|=2),o.label=3;case 3:return i++,[3,1];case 4:return this.optsDirty=!0,this.sides=e,[2]}})})},t.prototype.canStart=function(){return n&&n!==this.el?(this.closeOpened(),!1):!(!this.rightOptions&&!this.leftOptions)},t.prototype.onStart=function(){n=this.el,void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),0===this.openAmount&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item&&(this.item.style.transition="none")},t.prototype.onMove=function(t){this.optsDirty&&this.calculateOptsWidth();var e,i=this.initialOpenAmount-t.deltaX;switch(this.sides){case 2:i=Math.max(0,i);break;case 1:i=Math.min(0,i);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides)}i>this.optsWidthRightSide?i=(e=this.optsWidthRightSide)+.55*(i-e):i<-this.optsWidthLeftSide&&(i=(e=-this.optsWidthLeftSide)+.55*(i-e)),this.setOpenAmount(i,!1)},t.prototype.onEnd=function(t){var e=t.velocityX,i=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide;(function(t,e,i){return!e&&i||t&&e})(this.openAmount>0==!(e<0),Math.abs(e)>.3,Math.abs(this.openAmount)<Math.abs(i/2))&&(i=0);var n=this.state;this.setOpenAmount(i,!0),0!=(32&n)&&this.rightOptions?this.rightOptions.fireSwipeEvent():0!=(64&n)&&this.leftOptions&&this.leftOptions.fireSwipeEvent()},t.prototype.calculateOptsWidth=function(){this.optsWidthRightSide=0,this.rightOptions&&(this.optsWidthRightSide=this.rightOptions.offsetWidth),this.optsWidthLeftSide=0,this.leftOptions&&(this.optsWidthLeftSide=this.leftOptions.offsetWidth),this.optsDirty=!1},t.prototype.setOpenAmount=function(t,e){var i=this;if(void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),this.item){var o=this.item.style;if(this.openAmount=t,e&&(o.transition=""),t>0)this.state=t>=this.optsWidthRightSide+30?40:8;else{if(!(t<0))return this.tmr=window.setTimeout(function(){i.state=2,i.tmr=void 0},600),n=void 0,void(o.transform="");this.state=t<=-this.optsWidthLeftSide-30?80:16}o.transform="translate3d("+-t+"px,0,0)",this.ionDrag.emit({amount:t,ratio:this.getSlidingRatioSync()})}},t.prototype.getSlidingRatioSync=function(){return this.openAmount>0?this.openAmount/this.optsWidthRightSide:this.openAmount<0?this.openAmount/this.optsWidthLeftSide:0},t.prototype.hostData=function(){return{class:{"item-sliding-active-slide":2!==this.state,"item-sliding-active-options-end":0!=(8&this.state),"item-sliding-active-options-start":0!=(16&this.state),"item-sliding-active-swipe-end":0!=(32&this.state),"item-sliding-active-swipe-start":0!=(64&this.state)}}},Object.defineProperty(t,"is",{get:function(){return"ion-item-sliding"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{close:{method:!0},closeOpened:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},getOpenAmount:{method:!0},getSlidingRatio:{method:!0},queue:{context:"queue"},state:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionDrag",method:"ionDrag",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1),-webkit-transform .5s cubic-bezier(.36,.66,.04,1);background:var(--ion-item-background-color,var(--ion-background-color,#fff));opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:90%;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-left;transition-property:padding-left}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:90%;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-right;transition-property:padding-right}"},enumerable:!0,configurable:!0}),t}()}}]);