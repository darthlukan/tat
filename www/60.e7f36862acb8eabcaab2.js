(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{TFNG:function(e,t,n){"use strict";n.r(t),n.d(t,"IonRange",function(){return s});var o=n("B5Ai"),r=n("cBjU"),a=n("TJRR"),i=n("n9sr"),s=function(){function e(){this.noUpdate=!1,this.hasFocus=!1,this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.snaps=!1,this.step=1,this.disabled=!1,this.value=0}return e.prototype.debounceChanged=function(){this.ionChange=Object(a.g)(this.ionChange,this.debounce)},e.prototype.minChanged=function(){this.noUpdate||this.updateRatio()},e.prototype.maxChanged=function(){this.noUpdate||this.updateRatio()},e.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled),this.emitStyle()},e.prototype.valueChanged=function(e){this.noUpdate||this.updateRatio(),this.ionChange.emit({value:e})},e.prototype.componentWillLoad=function(){this.ionStyle=Object(a.e)(this.ionStyle),this.updateRatio(),this.debounceChanged(),this.emitStyle()},e.prototype.componentDidLoad=function(){return o.a(this,void 0,void 0,function(){var e,t=this;return o.c(this,function(o){switch(o.label){case 0:return e=this,[4,n.e(160).then(n.bind(null,"2jMD"))];case 1:return e.gesture=o.sent().createGesture({el:this.rangeSlider,queue:this.queue,gestureName:"range",gesturePriority:100,threshold:0,onStart:function(e){return t.onStart(e)},onMove:function(e){return t.onMove(e)},onEnd:function(e){return t.onEnd(e)}}),this.gesture.setDisabled(this.disabled),[2]}})})},e.prototype.keyChng=function(e){var t=this.step;t=t>0?t:1,t/=this.max-this.min,e.detail.isIncrease||(t*=-1),"A"===e.detail.knob?this.ratioA+=t:this.ratioB+=t,this.updateValue()},e.prototype.handleKeyboard=function(e,t){var n=this.step;n=n>0?n:1,n/=this.max-this.min,t||(n*=-1),"A"===e?this.ratioA+=n:this.ratioB+=n,this.updateValue()},e.prototype.getValue=function(){var e=this.value||0;return this.dualKnobs?"object"==typeof e?e:{lower:0,upper:e}:"object"==typeof e?e.upper:e},e.prototype.emitStyle=function(){this.ionStyle.emit({"interactive-disabled":this.disabled})},e.prototype.fireBlur=function(){this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit(),this.emitStyle())},e.prototype.fireFocus=function(){this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit(),this.emitStyle())},e.prototype.onStart=function(e){this.fireFocus();var t=this.rect=this.rangeSlider.getBoundingClientRect(),n=e.currentX,o=Object(a.j)(0,(n-t.left)/t.width,1);this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-o)<Math.abs(this.ratioB-o)?"A":"B",this.update(n)},e.prototype.onMove=function(e){this.update(e.currentX)},e.prototype.onEnd=function(e){this.update(e.currentX),this.pressedKnob=void 0,this.fireBlur()},e.prototype.update=function(e){var t=this.rect,n=Object(a.j)(0,(e-t.left)/t.width,1);this.snaps&&(n=c(l(n,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=n:this.ratioB=n,this.updateValue()},Object.defineProperty(e.prototype,"valA",{get:function(){return l(this.ratioA,this.min,this.max,this.step)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"valB",{get:function(){return l(this.ratioB,this.min,this.max,this.step)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ratioLower",{get:function(){return this.dualKnobs?Math.min(this.ratioA,this.ratioB):0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ratioUpper",{get:function(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA},enumerable:!0,configurable:!0}),e.prototype.updateRatio=function(){var e=this.getValue(),t=this.min,n=this.max;this.dualKnobs?(this.ratioA=c(e.lower,t,n),this.ratioB=c(e.upper,t,n)):this.ratioA=c(e,t,n)},e.prototype.updateValue=function(){this.noUpdate=!0;var e=this.valA,t=this.valB;this.value=this.dualKnobs?{lower:Math.min(e,t),upper:Math.max(e,t)}:e,this.noUpdate=!1},e.prototype.hostData=function(){return{class:Object.assign({},Object(i.d)(this.color),{"in-item":Object(i.f)("ion-item",this.el),"range-disabled":this.disabled,"range-pressed":void 0!==this.pressedKnob,"range-has-pin":this.pin})}},e.prototype.render=function(){var e=this,t=this,n=t.min,o=t.max,a=t.step,i=t.ratioLower,s=t.ratioUpper,l=100*i+"%",d=100-100*s+"%",u=[];if(this.snaps)for(var h=n;h<=o;h+=a){var p=c(h,n,o);u.push({ratio:p,active:p>=i&&p<=s,left:100*p+"%"})}return[Object(r.b)("slot",{name:"start"}),Object(r.b)("div",{class:"range-slider",ref:function(t){return e.rangeSlider=t}},u.map(function(e){return Object(r.b)("div",{style:{left:e.left},role:"presentation",class:{"range-tick":!0,"range-tick-active":e.active}})}),Object(r.b)("div",{class:"range-bar",role:"presentation"}),Object(r.b)("div",{class:"range-bar range-bar-active",role:"presentation",style:{left:l,right:d}}),b({knob:"A",pressed:"A"===this.pressedKnob,value:this.valA,ratio:this.ratioA,pin:this.pin,disabled:this.disabled,handleKeyboard:this.handleKeyboard.bind(this),min:n,max:o}),this.dualKnobs&&b({knob:"B",pressed:"B"===this.pressedKnob,value:this.valB,ratio:this.ratioB,pin:this.pin,disabled:this.disabled,handleKeyboard:this.handleKeyboard.bind(this),min:n,max:o})),Object(r.b)("slot",{name:"end"})]},Object.defineProperty(e,"is",{get:function(){return"ion-range"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},dualKnobs:{type:Boolean,attr:"dual-knobs"},el:{elementRef:!0},max:{type:Number,attr:"max",watchCallbacks:["maxChanged"]},min:{type:Number,attr:"min",watchCallbacks:["minChanged"]},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},pin:{type:Boolean,attr:"pin"},pressedKnob:{state:!0},queue:{context:"queue"},ratioA:{state:!0},ratioB:{state:!0},snaps:{type:Boolean,attr:"snaps"},step:{type:Number,attr:"step"},value:{type:Number,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionIncrease",method:"keyChng"},{name:"ionDecrease",method:"keyChng"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:var(--ion-background-color-step-250, #bfbfbf);--bar-background-active:var(--ion-color-primary, #3880ff);--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff);padding:8px;font-size:12px}::slotted(ion-label){-webkit-box-flex:initial;-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size))/ 2);margin-left:calc(0px - var(--knob-handle-size)/ 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle:active,.range-knob-handle:focus{outline:0}.range-bar{left:0;top:calc((var(--height) - var(--bar-height))/ 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size)/ 2);top:calc(50% - var(--knob-size)/ 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);pointer-events:none;-webkit-transform:scale(.67);transform:scale(.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color,border,-webkit-transform;transition-property:background-color,border,-webkit-transform;transition-property:transform,background-color,border;transition-property:transform,background-color,border,-webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}:host(.range-pressed) .range-bar-active{will-change:left,right}:host(.range-pressed) .range-knob-handle{will-change:left}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:50%;position:absolute;top:21px;width:2px;height:2px;background:var(--ion-background-color,#fff);z-index:1;pointer-events:none}.range-tick-active{background:var(--ion-background-color,#fff)}.range-pin{padding:8px 0;border-radius:50%;-webkit-transform:translate3d(0,28px,0) scale(.01);transform:translate3d(0,28px,0) scale(.01);display:inline-block;position:relative;top:-20px;min-width:28px;height:28px;-webkit-transition:background 120ms ease,-webkit-transform 120ms ease;transition:background 120ms ease,-webkit-transform 120ms ease;transition:transform 120ms ease,background 120ms ease;transition:transform 120ms ease,background 120ms ease,-webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color);text-align:center}.range-pin::before{left:50%;top:3px;margin-left:-13px;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1;border-radius:50% 50% 50% 0}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,0,0) scale(1);transform:translate3d(0,0,0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{-webkit-transform:scale(1);transform:scale(1)}.range-knob-min.range-knob-min .range-knob{border:2px solid var(--ion-background-color-step-250,#bfbfbf);background:var(--ion-background-color,#fff)}.range-knob-min.range-knob-min .range-pin,.range-knob-min.range-knob-min .range-pin::before{background:var(--ion-background-color-step-250,#bfbfbf);color:var(--ion-color-primary-contrast,#fff)}:host(.range-disabled) .range-bar-active{background-color:var(--ion-background-color-step-250,#bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(.55);transform:scale(.55);outline:#fff solid 5px;background-color:var(--ion-background-color-step-250,#bfbfbf)}'},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function b(e){var t=e.knob,n=e.value,o=e.ratio,a=e.min,i=e.max,s=e.disabled,b=e.pressed,l=e.pin,c=e.handleKeyboard;return Object(r.b)("div",{onKeyDown:function(e){var n=e.key;"ArrowLeft"===n||"ArrowDown"===n?(c(t,!1),e.preventDefault(),e.stopPropagation()):"ArrowRight"!==n&&"ArrowUp"!==n||(c(t,!0),e.preventDefault(),e.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-pressed":b,"range-knob-min":n===a,"range-knob-max":n===i},style:{left:100*o+"%"},role:"slider",tabindex:s?-1:0,"aria-valuemin":a,"aria-valuemax":i,"aria-disabled":s?"true":null,"aria-valuenow":n},l&&Object(r.b)("div",{class:"range-pin",role:"presentation"},Math.round(n)),Object(r.b)("div",{class:"range-knob",role:"presentation"}))}function l(e,t,n,o){var r=(n-t)*e;return o>0&&(r=Math.round(r/o)*o+t),Object(a.j)(t,r,n)}function c(e,t,n){return Object(a.j)(0,(e-t)/(n-t),1)}}}]);