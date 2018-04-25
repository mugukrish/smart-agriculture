// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear â€” @markgdyr â€” http://markgoodyear.com
 * License: MIT
 */
!function(l,o,e){"use strict";l.fn.scrollUp=function(o){l.data(e.body,"scrollUp")||(l.data(e.body,"scrollUp",!0),l.fn.scrollUp.init(o))},l.fn.scrollUp.init=function(r){var s,t,c,i,n,a,d,p=l.fn.scrollUp.settings=l.extend({},l.fn.scrollUp.defaults,r),f=!1;switch(d=p.scrollTrigger?l(p.scrollTrigger):l("<a/>",{id:p.scrollName,href:"#top"}),p.scrollTitle&&d.attr("title",p.scrollTitle),d.appendTo("body"),p.scrollImg||p.scrollTrigger||d.html(p.scrollText),d.css({display:"none",position:"fixed",zIndex:p.zIndex}),p.activeOverlay&&l("<div/>",{id:p.scrollName+"-active"}).css({position:"absolute",top:p.scrollDistance+"px",width:"100%",borderTop:"1px dotted"+p.activeOverlay,zIndex:p.zIndex}).appendTo("body"),p.animation){case"fade":s="fadeIn",t="fadeOut",c=p.animationSpeed;break;case"slide":s="slideDown",t="slideUp",c=p.animationSpeed;break;default:s="show",t="hide",c=0}i="top"===p.scrollFrom?p.scrollDistance:l(e).height()-l(o).height()-p.scrollDistance,n=l(o).scroll(function(){l(o).scrollTop()>i?f||(d[s](c),f=!0):f&&(d[t](c),f=!1)}),p.scrollTarget?"number"==typeof p.scrollTarget?a=p.scrollTarget:"string"==typeof p.scrollTarget&&(a=Math.floor(l(p.scrollTarget).offset().top)):a=0,d.click(function(o){o.preventDefault(),l("html, body").animate({scrollTop:a},p.scrollSpeed,p.easingType)})},l.fn.scrollUp.defaults={scrollName:"scrollUp",scrollDistance:300,scrollFrom:"top",scrollSpeed:300,easingType:"linear",animation:"fade",animationSpeed:200,scrollTrigger:!1,scrollTarget:!1,scrollText:"Scroll to top",scrollTitle:!1,scrollImg:!1,activeOverlay:!1,zIndex:2147483647},l.fn.scrollUp.destroy=function(r){l.removeData(e.body,"scrollUp"),l("#"+l.fn.scrollUp.settings.scrollName).remove(),l("#"+l.fn.scrollUp.settings.scrollName+"-active").remove(),l.fn.jquery.split(".")[1]>=7?l(o).off("scroll",r):l(o).unbind("scroll",r)},l.scrollUp=l.fn.scrollUp}(jQuery,window,document);
 

/*
	WOW JS - jQuery
---------------------------*/

/*! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a,b){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(b){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);

 
 /*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.9
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=c.options.asNavFor;d&&null!==d&&(d=a(d).not(c.$slider)),null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(a.currentSlide-1===0&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&(a("li",b.$dots).off("click.slick",b.changeSlide),b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",a.proxy(b.setPaused,b,!0)).off("mouseleave.slick",a.proxy(b.setPaused,b,!1))),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.setPaused,b,!0)).on("mouseleave.slick",a.proxy(b.setPaused,b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.$list.on("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}}))},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:0},100,function(){b.attr("src",c).animate({opacity:1},200,function(){b.removeAttr("data-lazy").removeClass("slick-loading")})})},d.src=c})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay(),b.options.accessibility===!0&&b.initADA()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",null),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,c.options.infinite||(c.slideCount<=c.options.slidesToShow?c.currentSlide=0:c.currentSlide>e&&(c.currentSlide=e)),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b]),b.options.autoplay===!0&&b.focusHandler()},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(b,c,d){var f,g,e=this;if("responsive"===b&&"array"===a.type(c))for(g in c)if("array"!==a.type(e.options.responsive))e.options.responsive=[c[g]];else{for(f=e.options.responsive.length-1;f>=0;)e.options.responsive[f].breakpoint===c[g].breakpoint&&e.options.responsive.splice(f,1),f--;e.options.responsive.push(c[g])}else e.options[b]=c;d===!0&&(e.unload(),e.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,a?b.autoPlayClear():b.autoPlay())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d);
}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(a){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):a.options.autoplay===!0&&(a.paused=!1,a.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.focusHandler=function(){var b=this;b.$slider.on("focus.slick blur.slick","*",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.isPlay&&(d.is(":focus")?(b.autoPlayClear(),b.paused=!0):(b.paused=!1,b.autoPlay()))},0)})},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
 
 
 /*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);
 
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);




/**
 * jQuery Validation Plugin 1.9.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(c){c.extend(c.fn,{validate:function(a){if(this.length){var b=c.data(this[0],"validator");if(b)return b;this.attr("novalidate","novalidate");b=new c.validator(a,this[0]);c.data(this[0],"validator",b);if(b.settings.onsubmit){a=this.find("input, button");a.filter(".cancel").click(function(){b.cancelSubmit=true});b.settings.submitHandler&&a.filter(":submit").click(function(){b.submitButton=this});this.submit(function(d){function e(){if(b.settings.submitHandler){if(b.submitButton)var f=c("<input type='hidden'/>").attr("name",
b.submitButton.name).val(b.submitButton.value).appendTo(b.currentForm);b.settings.submitHandler.call(b,b.currentForm);b.submitButton&&f.remove();return false}return true}b.settings.debug&&d.preventDefault();if(b.cancelSubmit){b.cancelSubmit=false;return e()}if(b.form()){if(b.pendingRequest){b.formSubmitted=true;return false}return e()}else{b.focusInvalid();return false}})}return b}else a&&a.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing")},valid:function(){if(c(this[0]).is("form"))return this.validate().form();
else{var a=true,b=c(this[0].form).validate();this.each(function(){a&=b.element(this)});return a}},removeAttrs:function(a){var b={},d=this;c.each(a.split(/\s/),function(e,f){b[f]=d.attr(f);d.removeAttr(f)});return b},rules:function(a,b){var d=this[0];if(a){var e=c.data(d.form,"validator").settings,f=e.rules,g=c.validator.staticRules(d);switch(a){case "add":c.extend(g,c.validator.normalizeRule(b));f[d.name]=g;if(b.messages)e.messages[d.name]=c.extend(e.messages[d.name],b.messages);break;case "remove":if(!b){delete f[d.name];
return g}var h={};c.each(b.split(/\s/),function(j,i){h[i]=g[i];delete g[i]});return h}}d=c.validator.normalizeRules(c.extend({},c.validator.metadataRules(d),c.validator.classRules(d),c.validator.attributeRules(d),c.validator.staticRules(d)),d);if(d.required){e=d.required;delete d.required;d=c.extend({required:e},d)}return d}});c.extend(c.expr[":"],{blank:function(a){return!c.trim(""+a.value)},filled:function(a){return!!c.trim(""+a.value)},unchecked:function(a){return!a.checked}});c.validator=function(a,
b){this.settings=c.extend(true,{},c.validator.defaults,a);this.currentForm=b;this.init()};c.validator.format=function(a,b){if(arguments.length==1)return function(){var d=c.makeArray(arguments);d.unshift(a);return c.validator.format.apply(this,d)};if(arguments.length>2&&b.constructor!=Array)b=c.makeArray(arguments).slice(1);if(b.constructor!=Array)b=[b];c.each(b,function(d,e){a=a.replace(RegExp("\\{"+d+"\\}","g"),e)});return a};c.extend(c.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",
validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:c([]),errorLabelContainer:c([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(a){this.lastActive=a;if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass);this.addWrapper(this.errorsFor(a)).hide()}},onfocusout:function(a){if(!this.checkable(a)&&(a.name in this.submitted||!this.optional(a)))this.element(a)},
onkeyup:function(a){if(a.name in this.submitted||a==this.lastElement)this.element(a)},onclick:function(a){if(a.name in this.submitted)this.element(a);else a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(a,b,d){a.type==="radio"?this.findByName(a.name).addClass(b).removeClass(d):c(a).addClass(b).removeClass(d)},unhighlight:function(a,b,d){a.type==="radio"?this.findByName(a.name).removeClass(b).addClass(d):c(a).removeClass(b).addClass(d)}},setDefaults:function(a){c.extend(c.validator.defaults,
a)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:c.validator.format("Please enter no more than {0} characters."),
minlength:c.validator.format("Please enter at least {0} characters."),rangelength:c.validator.format("Please enter a value between {0} and {1} characters long."),range:c.validator.format("Please enter a value between {0} and {1}."),max:c.validator.format("Please enter a value less than or equal to {0}."),min:c.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){function a(e){var f=c.data(this[0].form,"validator"),g="on"+e.type.replace(/^validate/,
"");f.settings[g]&&f.settings[g].call(f,this[0],e)}this.labelContainer=c(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||c(this.currentForm);this.containers=c(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var b=this.groups={};c.each(this.settings.groups,function(e,f){c.each(f.split(/\s/),function(g,h){b[h]=e})});var d=
this.settings.rules;c.each(d,function(e,f){d[e]=c.validator.normalizeRule(f)});c(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",a).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",
a);this.settings.invalidHandler&&c(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){this.checkForm();c.extend(this.submitted,this.errorMap);this.invalid=c.extend({},this.errorMap);this.valid()||c(this.currentForm).triggerHandler("invalid-form",[this]);this.showErrors();return this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(a){this.lastElement=
a=this.validationTargetFor(this.clean(a));this.prepareElement(a);this.currentElements=c(a);var b=this.check(a);if(b)delete this.invalid[a.name];else this.invalid[a.name]=true;if(!this.numberOfInvalids())this.toHide=this.toHide.add(this.containers);this.showErrors();return b},showErrors:function(a){if(a){c.extend(this.errorMap,a);this.errorList=[];for(var b in a)this.errorList.push({message:a[b],element:this.findByName(b)[0]});this.successList=c.grep(this.successList,function(d){return!(d.name in a)})}this.settings.showErrors?
this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){c.fn.resetForm&&c(this.currentForm).resetForm();this.submitted={};this.lastElement=null;this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b=0,d;for(d in a)b++;return b},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return this.size()==
0},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{c(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(a){}},findLastActive:function(){var a=this.lastActive;return a&&c.grep(this.errorList,function(b){return b.element.name==a.name}).length==1&&a},elements:function(){var a=this,b={};return c(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&
a.settings.debug&&window.console&&console.error("%o has no name assigned",this);if(this.name in b||!a.objectLength(c(this).rules()))return false;return b[this.name]=true})},clean:function(a){return c(a)[0]},errors:function(){return c(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext)},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=c([]);this.toHide=c([]);this.currentElements=c([])},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers)},
prepareElement:function(a){this.reset();this.toHide=this.errorsFor(a)},check:function(a){a=this.validationTargetFor(this.clean(a));var b=c(a).rules(),d=false,e;for(e in b){var f={method:e,parameters:b[e]};try{var g=c.validator.methods[e].call(this,a.value.replace(/\r/g,""),a,f.parameters);if(g=="dependency-mismatch")d=true;else{d=false;if(g=="pending"){this.toHide=this.toHide.not(this.errorsFor(a));return}if(!g){this.formatAndAdd(a,f);return false}}}catch(h){this.settings.debug&&window.console&&console.log("exception occured when checking element "+
a.id+", check the '"+f.method+"' method",h);throw h;}}if(!d){this.objectLength(b)&&this.successList.push(a);return true}},customMetaMessage:function(a,b){if(c.metadata){var d=this.settings.meta?c(a).metadata()[this.settings.meta]:c(a).metadata();return d&&d.messages&&d.messages[b]}},customMessage:function(a,b){var d=this.settings.messages[a];return d&&(d.constructor==String?d:d[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(arguments[a]!==undefined)return arguments[a]},defaultMessage:function(a,
b){return this.findDefined(this.customMessage(a.name,b),this.customMetaMessage(a,b),!this.settings.ignoreTitle&&a.title||undefined,c.validator.messages[b],"<strong>Warning: No message defined for "+a.name+"</strong>")},formatAndAdd:function(a,b){var d=this.defaultMessage(a,b.method),e=/\$?\{(\d+)\}/g;if(typeof d=="function")d=d.call(this,b.parameters,a);else if(e.test(d))d=jQuery.format(d.replace(e,"{$1}"),b.parameters);this.errorList.push({message:d,element:a});this.errorMap[a.name]=d;this.submitted[a.name]=
d},addWrapper:function(a){if(this.settings.wrapper)a=a.add(a.parent(this.settings.wrapper));return a},defaultShowErrors:function(){for(var a=0;this.errorList[a];a++){var b=this.errorList[a];this.settings.highlight&&this.settings.highlight.call(this,b.element,this.settings.errorClass,this.settings.validClass);this.showLabel(b.element,b.message)}if(this.errorList.length)this.toShow=this.toShow.add(this.containers);if(this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);
if(this.settings.unhighlight){a=0;for(b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass)}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return c(this.errorList).map(function(){return this.element})},showLabel:function(a,b){var d=this.errorsFor(a);if(d.length){d.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
d.attr("generated")&&d.html(b)}else{d=c("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(a),generated:true}).addClass(this.settings.errorClass).html(b||"");if(this.settings.wrapper)d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,c(a)):d.insertAfter(a))}if(!b&&this.settings.success){d.text("");typeof this.settings.success=="string"?d.addClass(this.settings.success):this.settings.success(d)}this.toShow=
this.toShow.add(d)},errorsFor:function(a){var b=this.idOrName(a);return this.errors().filter(function(){return c(this).attr("for")==b})},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(a){if(this.checkable(a))a=this.findByName(a.name).not(this.settings.ignore)[0];return a},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(a){var b=this.currentForm;return c(document.getElementsByName(a)).map(function(d,
e){return e.form==b&&e.name==a&&e||null})},getLength:function(a,b){switch(b.nodeName.toLowerCase()){case "select":return c("option:selected",b).length;case "input":if(this.checkable(b))return this.findByName(b.name).filter(":checked").length}return a.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):true},dependTypes:{"boolean":function(a){return a},string:function(a,b){return!!c(a,b.form).length},"function":function(a,b){return a(b)}},optional:function(a){return!c.validator.methods.required.call(this,
c.trim(a.value),a)&&"dependency-mismatch"},startRequest:function(a){if(!this.pending[a.name]){this.pendingRequest++;this.pending[a.name]=true}},stopRequest:function(a,b){this.pendingRequest--;if(this.pendingRequest<0)this.pendingRequest=0;delete this.pending[a.name];if(b&&this.pendingRequest==0&&this.formSubmitted&&this.form()){c(this.currentForm).submit();this.formSubmitted=false}else if(!b&&this.pendingRequest==0&&this.formSubmitted){c(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=
false}},previousValue:function(a){return c.data(a,"previousValue")||c.data(a,"previousValue",{old:null,valid:true,message:this.defaultMessage(a,"remote")})}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(a,b){a.constructor==String?this.classRuleSettings[a]=b:c.extend(this.classRuleSettings,
a)},classRules:function(a){var b={};(a=c(a).attr("class"))&&c.each(a.split(" "),function(){this in c.validator.classRuleSettings&&c.extend(b,c.validator.classRuleSettings[this])});return b},attributeRules:function(a){var b={};a=c(a);for(var d in c.validator.methods){var e;if(e=d==="required"&&typeof c.fn.prop==="function"?a.prop(d):a.attr(d))b[d]=e;else if(a[0].getAttribute("type")===d)b[d]=true}b.maxlength&&/-1|2147483647|524288/.test(b.maxlength)&&delete b.maxlength;return b},metadataRules:function(a){if(!c.metadata)return{};
var b=c.data(a.form,"validator").settings.meta;return b?c(a).metadata()[b]:c(a).metadata()},staticRules:function(a){var b={},d=c.data(a.form,"validator");if(d.settings.rules)b=c.validator.normalizeRule(d.settings.rules[a.name])||{};return b},normalizeRules:function(a,b){c.each(a,function(d,e){if(e===false)delete a[d];else if(e.param||e.depends){var f=true;switch(typeof e.depends){case "string":f=!!c(e.depends,b.form).length;break;case "function":f=e.depends.call(b,b)}if(f)a[d]=e.param!==undefined?
e.param:true;else delete a[d]}});c.each(a,function(d,e){a[d]=c.isFunction(e)?e(b):e});c.each(["minlength","maxlength","min","max"],function(){if(a[this])a[this]=Number(a[this])});c.each(["rangelength","range"],function(){if(a[this])a[this]=[Number(a[this][0]),Number(a[this][1])]});if(c.validator.autoCreateRanges){if(a.min&&a.max){a.range=[a.min,a.max];delete a.min;delete a.max}if(a.minlength&&a.maxlength){a.rangelength=[a.minlength,a.maxlength];delete a.minlength;delete a.maxlength}}a.messages&&delete a.messages;
return a},normalizeRule:function(a){if(typeof a=="string"){var b={};c.each(a.split(/\s/),function(){b[this]=true});a=b}return a},addMethod:function(a,b,d){c.validator.methods[a]=b;c.validator.messages[a]=d!=undefined?d:c.validator.messages[a];b.length<3&&c.validator.addClassRules(a,c.validator.normalizeRule(a))},methods:{required:function(a,b,d){if(!this.depend(d,b))return"dependency-mismatch";switch(b.nodeName.toLowerCase()){case "select":return(a=c(b).val())&&a.length>0;case "input":if(this.checkable(b))return this.getLength(a,
b)>0;default:return c.trim(a).length>0}},remote:function(a,b,d){if(this.optional(b))return"dependency-mismatch";var e=this.previousValue(b);this.settings.messages[b.name]||(this.settings.messages[b.name]={});e.originalMessage=this.settings.messages[b.name].remote;this.settings.messages[b.name].remote=e.message;d=typeof d=="string"&&{url:d}||d;if(this.pending[b.name])return"pending";if(e.old===a)return e.valid;e.old=a;var f=this;this.startRequest(b);var g={};g[b.name]=a;c.ajax(c.extend(true,{url:d,
mode:"abort",port:"validate"+b.name,dataType:"json",data:g,success:function(h){f.settings.messages[b.name].remote=e.originalMessage;var j=h===true;if(j){var i=f.formSubmitted;f.prepareElement(b);f.formSubmitted=i;f.successList.push(b);f.showErrors()}else{i={};h=h||f.defaultMessage(b,"remote");i[b.name]=e.message=c.isFunction(h)?h(a):h;f.showErrors(i)}e.valid=j;f.stopRequest(b,j)}},d));return"pending"},minlength:function(a,b,d){return this.optional(b)||this.getLength(c.trim(a),b)>=d},maxlength:function(a,
b,d){return this.optional(b)||this.getLength(c.trim(a),b)<=d},rangelength:function(a,b,d){a=this.getLength(c.trim(a),b);return this.optional(b)||a>=d[0]&&a<=d[1]},min:function(a,b,d){return this.optional(b)||a>=d},max:function(a,b,d){return this.optional(b)||a<=d},range:function(a,b,d){return this.optional(b)||a>=d[0]&&a<=d[1]},email:function(a,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)},
url:function(a,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},
date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a))},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 -]+/.test(a))return false;var d=0,e=0,f=false;a=a.replace(/\D/g,"");for(var g=a.length-1;g>=
0;g--){e=a.charAt(g);e=parseInt(e,10);if(f)if((e*=2)>9)e-=9;d+=e;f=!f}return d%10==0},accept:function(a,b,d){d=typeof d=="string"?d.replace(/,/g,"|"):"png|jpe?g|gif";return this.optional(b)||a.match(RegExp(".("+d+")$","i"))},equalTo:function(a,b,d){d=c(d).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){c(b).valid()});return a==d.val()}}});c.format=c.validator.format})(jQuery);
(function(c){var a={};if(c.ajaxPrefilter)c.ajaxPrefilter(function(d,e,f){e=d.port;if(d.mode=="abort"){a[e]&&a[e].abort();a[e]=f}});else{var b=c.ajax;c.ajax=function(d){var e=("port"in d?d:c.ajaxSettings).port;if(("mode"in d?d:c.ajaxSettings).mode=="abort"){a[e]&&a[e].abort();return a[e]=b.apply(this,arguments)}return b.apply(this,arguments)}}})(jQuery);
(function(c){!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(e){e=c.event.fix(e);e.type=b;return c.event.handle.call(this,e)}c.event.special[b]={setup:function(){this.addEventListener(a,d,true)},teardown:function(){this.removeEventListener(a,d,true)},handler:function(e){arguments[0]=c.event.fix(e);arguments[0].type=b;return c.event.handle.apply(this,arguments)}}});c.extend(c.fn,{validateDelegate:function(a,
b,d){return this.bind(b,function(e){var f=c(e.target);if(f.is(a))return d.apply(f,arguments)})}})})(jQuery);





// Camera slideshow v1.4.0 - a jQuery slideshow with many effects, transitions, easy to customize, using canvas and mobile ready, based on jQuery 1.9.1+
// Copyright (c) 2012 by Manuel Masia - www.pixedelic.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
;(function($){$.fn.camera = function(opts, callback) {
    
    var defaults = {
        alignment           : 'center', //topLeft, topCenter, topRight, centerLeft, center, centerRight, bottomLeft, bottomCenter, bottomRight
        
        autoAdvance         : true, //true, false
        
        mobileAutoAdvance   : true, //true, false. Auto-advancing for mobile devices
        
        barDirection        : 'leftToRight',    //'leftToRight', 'rightToLeft', 'topToBottom', 'bottomToTop'
        
        barPosition         : 'bottom', //'bottom', 'left', 'top', 'right'
        
        cols                : 6,
        
        easing              : 'easeInOutExpo',  //for the complete list http://jqueryui.com/demos/effect/easing.html
        
        mobileEasing        : '',   //leave empty if you want to display the same easing on mobile devices and on desktop etc.
        
        fx                  : 'random', //'random','simpleFade', 'curtainTopLeft', 'curtainTopRight', 'curtainBottomLeft', 'curtainBottomRight', 'curtainSliceLeft', 'curtainSliceRight', 'blindCurtainTopLeft', 'blindCurtainTopRight', 'blindCurtainBottomLeft', 'blindCurtainBottomRight', 'blindCurtainSliceBottom', 'blindCurtainSliceTop', 'stampede', 'mosaic', 'mosaicReverse', 'mosaicRandom', 'mosaicSpiral', 'mosaicSpiralReverse', 'topLeftBottomRight', 'bottomRightTopLeft', 'bottomLeftTopRight', 'bottomLeftTopRight'
                                        //you can also use more than one effect, just separate them with commas: 'simpleFade, scrollRight, scrollBottom'

        mobileFx            : '',   //leave empty if you want to display the same effect on mobile devices and on desktop etc.

        gridDifference      : 250,  //to make the grid blocks slower than the slices, this value must be smaller than transPeriod
        
        height              : '50%',    //here you can type pixels (for instance '300px'), a percentage (relative to the width of the slideshow, for instance '50%') or 'auto'
        
        imagePath           : 'images/',    //he path to the image folder (it serves for the blank.gif, when you want to display videos)
        
        hover               : true, //true, false. Puase on state hover. Not available for mobile devices
                
        loader              : 'pie',    //pie, bar, none (even if you choose "pie", old browsers like IE8- can't display it... they will display always a loading bar)
        
        loaderColor         : '#eeeeee', 
        
        loaderBgColor       : '#222222', 
        
        loaderOpacity       : .8,   //0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1
        
        loaderPadding       : 2,    //how many empty pixels you want to display between the loader and its background
        
        loaderStroke        : 7,    //the thickness both of the pie loader and of the bar loader. Remember: for the pie, the loader thickness must be less than a half of the pie diameter
                
        minHeight           : '200px',  //you can also leave it blank
        
        navigation          : true, //true or false, to display or not the navigation buttons
        
        navigationHover     : true, //if true the navigation button (prev, next and play/stop buttons) will be visible on hover state only, if false they will be visible always
        
        mobileNavHover      : true, //same as above, but only for mobile devices
        
        opacityOnGrid       : false,    //true, false. Decide to apply a fade effect to blocks and slices: if your slideshow is fullscreen or simply big, I recommend to set it false to have a smoother effect 
        
        overlayer           : true, //a layer on the images to prevent the users grab them simply by clicking the right button of their mouse (.camera_overlayer)
        
        pagination          : true,
        
        playPause           : true, //true or false, to display or not the play/pause buttons
        
        pauseOnClick        : true, //true, false. It stops the slideshow when you click the sliders.
        
        pieDiameter         : 38,
        
        piePosition         : 'rightTop',   //'rightTop', 'leftTop', 'leftBottom', 'rightBottom'
        
        portrait            : false, //true, false. Select true if you don't want that your images are cropped
        
        rows                : 4,
        
        slicedCols          : 12,   //if 0 the same value of cols
        
        slicedRows          : 8,    //if 0 the same value of rows
        
        slideOn             : 'random', //next, prev, random: decide if the transition effect will be applied to the current (prev) or the next slide
        
        thumbnails          : false,
        
        time                : 7000, //milliseconds between the end of the sliding effect and the start of the nex one
        
        transPeriod         : 1500, //lenght of the sliding effect in milliseconds
        
////////callbacks

        onEndTransition     : function() {  },  //this callback is invoked when the transition effect ends

        onLoaded            : function() {  },  //this callback is invoked when the image on a slide has completely loaded
        
        onStartLoading      : function() {  },  //this callback is invoked when the image on a slide start loading
        
        onStartTransition   : function() {  }   //this callback is invoked when the transition effect starts

    };
    
    
    function isMobile() {
        if( navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPod/i)
            ){
                return true;
        }
    }

    $.support.borderRadius = false;
    $.each(['borderRadius','BorderRadius','MozBorderRadius','WebkitBorderRadius','OBorderRadius','KhtmlBorderRadius'], function() {
        if(document.body.style[this] !== undefined) $.support.borderRadius = true;
    });

    var opts = $.extend({}, defaults, opts);
    
    var wrap = $(this).addClass('camera_wrap');
    
    wrap.wrapInner(
        '<div class="camera_src" />'
        ).wrapInner(
        '<div class="camera_fakehover" />'
        );
        
    var fakeHover = $('.camera_fakehover',wrap);
    var fakeHoverSelector = ('.camera_fakehover',wrap);
    
    fakeHover.append(
        '<div class="camera_target"></div>'
        );
    if(opts.overlayer == true){
        fakeHover.append(
            '<div class="camera_overlayer"></div>'
            )
    }
        fakeHover.append(
        '<div class="camera_target_content"></div>'
        );
        
    var loader;
    
    if(opts.loader=='pie' && !$.support.borderRadius){
        loader = 'bar';
    } else {
        loader = opts.loader;
    }
    
    if(loader == 'pie'){
        fakeHover.append(
            '<div class="camera_pie"></div>'
            )
    } else if (loader == 'bar') {
        fakeHover.append(
            '<div class="camera_bar"></div>'
            )
    } else {
        fakeHover.append(
            '<div class="camera_bar" style="display:none"></div>'
            )
    }
    
    if(opts.playPause==true){
        fakeHover.append(
        '<div class="camera_commands"></div>'
        )
    }
        
    if(opts.navigation==true){
        fakeHover.append(
            '<div class="camera_prev"><span></span></div>'
            ).append(
            '<div class="camera_next"><span></span></div>'
            );
    }
        
    if(opts.thumbnails==true){
        wrap.append(
            '<div class="camera_thumbs_cont" />'
            );
    }
    
    if(opts.thumbnails==true && opts.pagination!=true){
        $('.camera_thumbs_cont',wrap).wrap(
            '<div />'
            ).wrap(
                '<div class="camera_thumbs" />'
            ).wrap(
                '<div />'
            ).wrap(
                '<div class="camera_command_wrap" />'
            );
    }
        
    if(opts.pagination==true){
        wrap.append(
            '<div class="camera_pag"></div>'
            );
    }
        
    wrap.append(
        '<div class="camera_loader"></div>'
        );
        
    $('.camera_caption',wrap).each(function(){
        $(this).wrapInner('<div />');
    });
        
                
    var pieID = 'pie_'+wrap.index(),
        elem = $('.camera_src',wrap),
        target = $('.camera_target',wrap),
        content = $('.camera_target_content',wrap),
        pieContainer = $('.camera_pie',wrap),
        barContainer = $('.camera_bar',wrap),
        prevNav = $('.camera_prev',wrap),
        nextNav = $('.camera_next',wrap),
        commands = $('.camera_commands',wrap),
        pagination = $('.camera_pag',wrap),
        thumbs = $('.camera_thumbs_cont',wrap); 

    
    var w,
        h;


    var allImg = new Array();
    $('> div', elem).each( function() { 
        allImg.push($(this).attr('data-src'));
    });
    
    var allLinks = new Array();
    $('> div', elem).each( function() {
        if($(this).attr('data-link')){
            allLinks.push($(this).attr('data-link'));
        } else {
            allLinks.push('');
        }
    });
    
    var allTargets = new Array();
    $('> div', elem).each( function() {
        if($(this).attr('data-target')){
            allTargets.push($(this).attr('data-target'));
        } else {
            allTargets.push('');
        }
    });
    
    var allPor = new Array();
    $('> div', elem).each( function() {
        if($(this).attr('data-portrait')){
            allPor.push($(this).attr('data-portrait'));
        } else {
            allPor.push('');
        }
    });
    
    var allAlign= new Array();
    $('> div', elem).each( function() { 
        if($(this).attr('data-alignment')){
            allAlign.push($(this).attr('data-alignment'));
        } else {
            allAlign.push('');
        }
    });
    
        
    var allThumbs = new Array();
    $('> div', elem).each( function() { 
        if($(this).attr('data-thumb')){
            allThumbs.push($(this).attr('data-thumb'));
        } else {
            allThumbs.push('');
        }
    });
    
    var amountSlide = allImg.length;

    $(content).append('<div class="cameraContents" />');
    var loopMove;
    for (loopMove=0;loopMove<amountSlide;loopMove++)
    {
        $('.cameraContents',content).append('<div class="cameraContent" />');
        if(allLinks[loopMove]!=''){
            //only for Wordpress plugin
            var dataBox = $('> div ',elem).eq(loopMove).attr('data-box');
            if(typeof dataBox !== 'undefined' && dataBox !== false && dataBox != '') {
                dataBox = 'data-box="'+$('> div ',elem).eq(loopMove).attr('data-box')+'"';
            } else {
                dataBox = '';
            }
            //
            $('.camera_target_content .cameraContent:eq('+loopMove+')',wrap).append('<a class="camera_link" href="'+allLinks[loopMove]+'" '+dataBox+' target="'+allTargets[loopMove]+'"></a>');
        }

    }
    $('.camera_caption',wrap).each(function(){
        var ind = $(this).parent().index(),
            cont = wrap.find('.cameraContent').eq(ind);
        $(this).appendTo(cont);
    });
    
    target.append('<div class="cameraCont" />');
    var cameraCont = $('.cameraCont',wrap);
    

    
    var loop;
    for (loop=0;loop<amountSlide;loop++)
    {
        cameraCont.append('<div class="cameraSlide cameraSlide_'+loop+'" />');
        var div = $('> div:eq('+loop+')',elem);
        target.find('.cameraSlide_'+loop).clone(div);
    }
    
    
    function thumbnailVisible() {
        var wTh = $(thumbs).width();
        $('li', thumbs).removeClass('camera_visThumb');
        $('li', thumbs).each(function(){
            var pos = $(this).position(),
                ulW = $('ul', thumbs).outerWidth(),
                offUl = $('ul', thumbs).offset().left,
                offDiv = $('> div',thumbs).offset().left,
                ulLeft = offDiv-offUl;
                if(ulLeft>0){
                    $('.camera_prevThumbs',camera_thumbs_wrap).removeClass('hideNav');
                } else {
                    $('.camera_prevThumbs',camera_thumbs_wrap).addClass('hideNav');
                }
                if((ulW-ulLeft)>wTh){
                    $('.camera_nextThumbs',camera_thumbs_wrap).removeClass('hideNav');
                } else {
                    $('.camera_nextThumbs',camera_thumbs_wrap).addClass('hideNav');
                }
                var left = pos.left,
                    right = pos.left+($(this).width());
                if(right-ulLeft<=wTh && left-ulLeft>=0){
                    $(this).addClass('camera_visThumb');
                }
        });
    }
    
    $(window).bind('load resize pageshow',function(){
        thumbnailPos();
        thumbnailVisible();
    });


    cameraCont.append('<div class="cameraSlide cameraSlide_'+loop+'" />');
    
    
    var started;
    
    wrap.show();
    var w = target.width();
    var h = target.height();
    
    var setPause;
        
    $(window).bind('resize pageshow',function(){
        if(started == true) {
            resizeImage();
        }
        $('ul', thumbs).animate({'margin-top':0},0,thumbnailPos);
        if(!elem.hasClass('paused')){
            elem.addClass('paused');
            if($('.camera_stop',camera_thumbs_wrap).length){
                $('.camera_stop',camera_thumbs_wrap).hide()
                $('.camera_play',camera_thumbs_wrap).show();
                if(loader!='none'){
                    $('#'+pieID).hide();
                }
            } else {
                if(loader!='none'){
                    $('#'+pieID).hide();
                }
            }
            clearTimeout(setPause);
            setPause = setTimeout(function(){
                elem.removeClass('paused');
                if($('.camera_play',camera_thumbs_wrap).length){
                    $('.camera_play',camera_thumbs_wrap).hide();
                    $('.camera_stop',camera_thumbs_wrap).show();
                    if(loader!='none'){
                        $('#'+pieID).fadeIn();
                    }
                } else {
                    if(loader!='none'){
                        $('#'+pieID).fadeIn();
                    }
                }
            },1500);
        }
    });
    
    function resizeImage(){ 
        var res;
        function resizeImageWork(){
            w = wrap.width();
            if(opts.height.indexOf('%')!=-1) {
                var startH = Math.round(w / (100/parseFloat(opts.height)));
                if(opts.minHeight != '' && startH < parseFloat(opts.minHeight)){
                    h = parseFloat(opts.minHeight);
                } else {
                    h = startH;
                }
                wrap.css({height:h});
            } else if (opts.height=='auto') {
                h = wrap.height();
            } else {
                h = parseFloat(opts.height);
                wrap.css({height:h});
            }
            $('.camerarelative',target).css({'width':w,'height':h});
            $('.imgLoaded',target).each(function(){
                var t = $(this),
                    wT = t.attr('width'),
                    hT = t.attr('height'),
                    imgLoadIn = t.index(),
                    mTop,
                    mLeft,
                    alignment = t.attr('data-alignment'),
                    portrait =  t.attr('data-portrait');
                    
                    if(typeof alignment === 'undefined' || alignment === false || alignment === ''){
                        alignment = opts.alignment;
                    }
                    
                    if(typeof portrait === 'undefined' || portrait === false || portrait === ''){
                        portrait = opts.portrait;
                    }
                                        
                    if(portrait==false||portrait=='false'){
                        if((wT/hT)<(w/h)) {
                            var r = w / wT;
                            var d = (Math.abs(h - (hT*r)))*0.5;
                            switch(alignment){
                                case 'topLeft':
                                    mTop = 0;
                                    break;
                                case 'topCenter':
                                    mTop = 0;
                                    break;
                                case 'topRight':
                                    mTop = 0;
                                    break;
                                case 'centerLeft':
                                    mTop = '-'+d+'px';
                                    break;
                                case 'center':
                                    mTop = '-'+d+'px';
                                    break;
                                case 'centerRight':
                                    mTop = '-'+d+'px';
                                    break;
                                case 'bottomLeft':
                                    mTop = '-'+d*2+'px';
                                    break;
                                case 'bottomCenter':
                                    mTop = '-'+d*2+'px';
                                    break;
                                case 'bottomRight':
                                    mTop = '-'+d*2+'px';
                                    break;
                            }
                            t.css({
                                'height' : hT*r,
                                'margin-left' : 0,
                                'margin-right' : 0,
                                'margin-top' : mTop,
                                'position' : 'absolute',
                                'visibility' : 'visible',
                                'width' : w
                            });
                        }
                        else {
                            var r = h / hT;
                            var d = (Math.abs(w - (wT*r)))*0.5;
                            switch(alignment){
                                case 'topLeft':
                                    mLeft = 0;
                                    break;
                                case 'topCenter':
                                    mLeft = '-'+d+'px';
                                    break;
                                case 'topRight':
                                    mLeft = '-'+d*2+'px';
                                    break;
                                case 'centerLeft':
                                    mLeft = 0;
                                    break;
                                case 'center':
                                    mLeft = '-'+d+'px';
                                    break;
                                case 'centerRight':
                                    mLeft = '-'+d*2+'px';
                                    break;
                                case 'bottomLeft':
                                    mLeft = 0;
                                    break;
                                case 'bottomCenter':
                                    mLeft = '-'+d+'px';
                                    break;
                                case 'bottomRight':
                                    mLeft = '-'+d*2+'px';
                                    break;
                            }
                            t.css({
                                'height' : h,
                                'margin-left' : mLeft,
                                'margin-right' : mLeft,
                                'margin-top' : 0,
                                'position' : 'absolute',
                                'visibility' : 'visible',
                                'width' : wT*r
                            });
                        }
                    } else {
                        if((wT/hT)<(w/h)) {
                            var r = h / hT;
                            var d = (Math.abs(w - (wT*r)))*0.5;
                            switch(alignment){
                                case 'topLeft':
                                    mLeft = 0;
                                    break;
                                case 'topCenter':
                                    mLeft = d+'px';
                                    break;
                                case 'topRight':
                                    mLeft = d*2+'px';
                                    break;
                                case 'centerLeft':
                                    mLeft = 0;
                                    break;
                                case 'center':
                                    mLeft = d+'px';
                                    break;
                                case 'centerRight':
                                    mLeft = d*2+'px';
                                    break;
                                case 'bottomLeft':
                                    mLeft = 0;
                                    break;
                                case 'bottomCenter':
                                    mLeft = d+'px';
                                    break;
                                case 'bottomRight':
                                    mLeft = d*2+'px';
                                    break;
                            }
                            t.css({
                                'height' : h,
                                'margin-left' : mLeft,
                                'margin-right' : mLeft,
                                'margin-top' : 0,
                                'position' : 'absolute',
                                'visibility' : 'visible',
                                'width' : wT*r
                            });
                        }
                        else {
                            var r = w / wT;
                            var d = (Math.abs(h - (hT*r)))*0.5;
                            switch(alignment){
                                case 'topLeft':
                                    mTop = 0;
                                    break;
                                case 'topCenter':
                                    mTop = 0;
                                    break;
                                case 'topRight':
                                    mTop = 0;
                                    break;
                                case 'centerLeft':
                                    mTop = d+'px';
                                    break;
                                case 'center':
                                    mTop = d+'px';
                                    break;
                                case 'centerRight':
                                    mTop = d+'px';
                                    break;
                                case 'bottomLeft':
                                    mTop = d*2+'px';
                                    break;
                                case 'bottomCenter':
                                    mTop = d*2+'px';
                                    break;
                                case 'bottomRight':
                                    mTop = d*2+'px';
                                    break;
                            }
                            t.css({
                                'height' : hT*r,
                                'margin-left' : 0,
                                'margin-right' : 0,
                                'margin-top' : mTop,
                                'position' : 'absolute',
                                'visibility' : 'visible',
                                'width' : w
                            });
                        }
                    }
            });
        }
        if (started == true) {
            clearTimeout(res);
            res = setTimeout(resizeImageWork,200);
        } else {
            resizeImageWork();
        }
        
        started = true;
    }
    
    
    var u,
        setT;

    var clickEv,
        autoAdv,
        navHover,
        commands,
        pagination;

    var videoHover,
        videoPresent;
        
    if(isMobile() && opts.mobileAutoAdvance!=''){
        autoAdv = opts.mobileAutoAdvance;
    } else {
        autoAdv = opts.autoAdvance;
    }
    
    if(autoAdv==false){
        elem.addClass('paused');
    }

    if(isMobile() && opts.mobileNavHover!=''){
        navHover = opts.mobileNavHover;
    } else {
        navHover = opts.navigationHover;
    }

    if(elem.length!=0){
            
        var selector = $('.cameraSlide',target);
        selector.wrapInner('<div class="camerarelative" />');
        
        var navSlide;
            
        var barDirection = opts.barDirection;
    
        var camera_thumbs_wrap = wrap;


        $('iframe',fakeHover).each(function(){
            var t = $(this);
            var src = t.attr('src');
            t.attr('data-src',src);
            var divInd = t.parent().index('.camera_src > div');
            $('.camera_target_content .cameraContent:eq('+divInd+')',wrap).append(t);
        });
        function imgFake() {
                $('iframe',fakeHover).each(function(){
                    $('.camera_caption',fakeHover).show();
                    var t = $(this);
                    var cloneSrc = t.attr('data-src');
                    t.attr('src',cloneSrc);
                    var imgFakeUrl = opts.imagePath+'blank.gif';
                    var imgFake = new Image();
                    imgFake.src = imgFakeUrl;
                    if(opts.height.indexOf('%')!=-1) {
                        var startH = Math.round(w / (100/parseFloat(opts.height)));
                        if(opts.minHeight != '' && startH < parseFloat(opts.minHeight)){
                            h = parseFloat(opts.minHeight);
                        } else {
                            h = startH;
                        }
                    } else if (opts.height=='auto') {
                        h = wrap.height();
                    } else {
                        h = parseFloat(opts.height);
                    }
                    t.after($(imgFake).attr({'class':'imgFake','width':w,'height':h}));
                    var clone = t.clone();
                    t.remove();
                    $(imgFake).bind('click',function(){
                        if($(this).css('position')=='absolute') {
                            $(this).remove();
                            if(cloneSrc.indexOf('vimeo') != -1 || cloneSrc.indexOf('youtube') != -1) {
                                if(cloneSrc.indexOf('?') != -1){
                                    autoplay = '&autoplay=1';
                                } else {
                                    autoplay = '?autoplay=1';
                                }
                            } else if(cloneSrc.indexOf('dailymotion') != -1) {
                                if(cloneSrc.indexOf('?') != -1){
                                    autoplay = '&autoPlay=1';
                                } else {
                                    autoplay = '?autoPlay=1';
                                }
                            }
                            clone.attr('src',cloneSrc+autoplay);
                            videoPresent = true;
                        } else {
                            $(this).css({position:'absolute',top:0,left:0,zIndex:10}).after(clone);
                            clone.css({position:'absolute',top:0,left:0,zIndex:9});
                        }
                    });
                });
        }
        
        imgFake();
        
        
        if(opts.hover==true){
            if(!isMobile()){
                fakeHover.hover(function(){
                    elem.addClass('hovered');
                },function(){
                    elem.removeClass('hovered');
                });
            }
        }

        if(navHover==true){
            $(prevNav,wrap).animate({opacity:0},0);
            $(nextNav,wrap).animate({opacity:0},0);
            $(commands,wrap).animate({opacity:0},0);
            if(isMobile()){
                $(document).on('vmouseover',fakeHoverSelector,function(){
                    $(prevNav,wrap).animate({opacity:1},200);
                    $(nextNav,wrap).animate({opacity:1},200);
                    $(commands,wrap).animate({opacity:1},200);
                });
                $(document).on('vmouseout',fakeHoverSelector,function(){
                    $(prevNav,wrap).delay(500).animate({opacity:0},200);
                    $(nextNav,wrap).delay(500).animate({opacity:0},200);
                    $(commands,wrap).delay(500).animate({opacity:0},200);
                });
            } else {
                fakeHover.hover(function(){
                    $(prevNav,wrap).animate({opacity:1},200);
                    $(nextNav,wrap).animate({opacity:1},200);
                    $(commands,wrap).animate({opacity:1},200);
                },function(){
                    $(prevNav,wrap).animate({opacity:0},200);
                    $(nextNav,wrap).animate({opacity:0},200);
                    $(commands,wrap).animate({opacity:0},200);
                });
            }
        }
        
    
        camera_thumbs_wrap.on('click','.camera_stop',function(){
            autoAdv = false;
            elem.addClass('paused');
            if($('.camera_stop',camera_thumbs_wrap).length){
                $('.camera_stop',camera_thumbs_wrap).hide()
                $('.camera_play',camera_thumbs_wrap).show();
                if(loader!='none'){
                    $('#'+pieID).hide();
                }
            } else {
                if(loader!='none'){
                    $('#'+pieID).hide();
                }
            }
        });
    
        camera_thumbs_wrap.on('click','.camera_play',function(){
            autoAdv = true;
            elem.removeClass('paused');
            if($('.camera_play',camera_thumbs_wrap).length){
                $('.camera_play',camera_thumbs_wrap).hide();
                $('.camera_stop',camera_thumbs_wrap).show();
                if(loader!='none'){
                    $('#'+pieID).show();
                }
            } else {
                if(loader!='none'){
                    $('#'+pieID).show();
                }
            }
        });
    
        if(opts.pauseOnClick==true){
            $('.camera_target_content',fakeHover).mouseup(function(){
                autoAdv = false;
                elem.addClass('paused');
                $('.camera_stop',camera_thumbs_wrap).hide()
                $('.camera_play',camera_thumbs_wrap).show();
                $('#'+pieID).hide();
            });
        }
        $('.cameraContent, .imgFake',fakeHover).hover(function(){
            videoHover = true;
        },function(){
            videoHover = false;
        });
        
        $('.cameraContent, .imgFake',fakeHover).bind('click',function(){
            if(videoPresent == true && videoHover == true) {
                autoAdv = false;
                $('.camera_caption',fakeHover).hide();
                elem.addClass('paused');
                $('.camera_stop',camera_thumbs_wrap).hide()
                $('.camera_play',camera_thumbs_wrap).show();
                $('#'+pieID).hide();
            }
        });
        
        
    }
    
    
        function shuffle(arr) {
            for(
              var j, x, i = arr.length; i;
              j = parseInt(Math.random() * i),
              x = arr[--i], arr[i] = arr[j], arr[j] = x
            );
            return arr;
        }
    
        function isInteger(s) {
            return Math.ceil(s) == Math.floor(s);
        }   
    
        if (loader != 'pie') {
            barContainer.append('<span class="camera_bar_cont" />');
            $('.camera_bar_cont',barContainer)
                .animate({opacity:opts.loaderOpacity},0)
                .css({'position':'absolute', 'left':0, 'right':0, 'top':0, 'bottom':0, 'background-color':opts.loaderBgColor})
                .append('<span id="'+pieID+'" />');
            $('#'+pieID).animate({opacity:0},0);
            var canvas = $('#'+pieID);
            canvas.css({'position':'absolute', 'background-color':opts.loaderColor});
            switch(opts.barPosition){
                case 'left':
                    barContainer.css({right:'auto',width:opts.loaderStroke});
                    break;
                case 'right':
                    barContainer.css({left:'auto',width:opts.loaderStroke});
                    break;
                case 'top':
                    barContainer.css({bottom:'auto',height:opts.loaderStroke});
                    break;
                case 'bottom':
                    barContainer.css({top:'auto',height:opts.loaderStroke});
                    break;
            }
            switch(barDirection){
                case 'leftToRight':
                    canvas.css({'left':0, 'right':0, 'top':opts.loaderPadding, 'bottom':opts.loaderPadding});
                    break;
                case 'rightToLeft':
                    canvas.css({'left':0, 'right':0, 'top':opts.loaderPadding, 'bottom':opts.loaderPadding});
                    break;
                case 'topToBottom':
                    canvas.css({'left':opts.loaderPadding, 'right':opts.loaderPadding, 'top':0, 'bottom':0});
                    break;
                case 'bottomToTop':
                    canvas.css({'left':opts.loaderPadding, 'right':opts.loaderPadding, 'top':0, 'bottom':0});
                    break;
            }
        } else {
            pieContainer.append('<canvas id="'+pieID+'"></canvas>');
            var G_vmlCanvasManager;
            var canvas = document.getElementById(pieID);
            canvas.setAttribute("width", opts.pieDiameter);
            canvas.setAttribute("height", opts.pieDiameter);
            var piePosition;
            switch(opts.piePosition){
                case 'leftTop' :
                    piePosition = 'left:0; top:0;';
                    break;
                case 'rightTop' :
                    piePosition = 'right:0; top:0;';
                    break;
                case 'leftBottom' :
                    piePosition = 'left:0; bottom:0;';
                    break;
                case 'rightBottom' :
                    piePosition = 'right:0; bottom:0;';
                    break;
            }
            canvas.setAttribute("style", "position:absolute; z-index:1002; "+piePosition);
            var rad;
            var radNew;
    
            if (canvas && canvas.getContext) {
                var ctx = canvas.getContext("2d");
                ctx.rotate(Math.PI*(3/2));
                ctx.translate(-opts.pieDiameter,0);
            }
        
        }
        if(loader=='none' || autoAdv==false) {
            $('#'+pieID).hide();
            $('.camera_canvas_wrap',camera_thumbs_wrap).hide();
        }
        
        if($(pagination).length) {
            $(pagination).append('<ul class="camera_pag_ul" />');
            var li;
            for (li = 0; li < amountSlide; li++){
                $('.camera_pag_ul',wrap).append('<li class="pag_nav_'+li+'" style="position:relative; z-index:1002"><span><span>'+li+'</span></span></li>');
            }
            $('.camera_pag_ul li',wrap).hover(function(){
                $(this).addClass('camera_hover');
                if($('.camera_thumb',this).length){
                    var wTh = $('.camera_thumb',this).outerWidth(),
                    hTh = $('.camera_thumb',this).outerHeight(),
                    wTt = $(this).outerWidth();
                    $('.camera_thumb',this).show().css({'top':'-'+hTh+'px','left':'-'+(wTh-wTt)/2+'px'}).animate({'opacity':1,'margin-top':'-3px'},200);
                    $('.thumb_arrow',this).show().animate({'opacity':1,'margin-top':'-3px'},200);
                }
            },function(){
                $(this).removeClass('camera_hover');
                $('.camera_thumb',this).animate({'margin-top':'-20px','opacity':0},200,function(){
                    $(this).css({marginTop:'5px'}).hide();
                });
                $('.thumb_arrow',this).animate({'margin-top':'-20px','opacity':0},200,function(){
                    $(this).css({marginTop:'5px'}).hide();
                });
            });
        }
            
    
    
        if($(thumbs).length) {
            var thumbUrl;
            if(!$(pagination).length) {
                $(thumbs).append('<div />');
                $(thumbs).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>');
                $('> div',thumbs).append('<ul />');
                $.each(allThumbs, function(i, val) {
                    if($('> div', elem).eq(i).attr('data-thumb')!='') {
                        var thumbUrl = $('> div', elem).eq(i).attr('data-thumb'),
                            newImg = new Image();
                        newImg.src = thumbUrl;
                        $('ul',thumbs).append('<li class="pix_thumb pix_thumb_'+i+'" />');
                        $('li.pix_thumb_'+i,thumbs).append($(newImg).attr('class','camera_thumb'));
                    }
                });
            } else {
                $.each(allThumbs, function(i, val) {
                    if($('> div', elem).eq(i).attr('data-thumb')!='') {
                        var thumbUrl = $('> div', elem).eq(i).attr('data-thumb'),
                            newImg = new Image();
                        newImg.src = thumbUrl;
                        $('li.pag_nav_'+i,pagination).append($(newImg).attr('class','camera_thumb').css({'position':'absolute'}).animate({opacity:0},0));
                        $('li.pag_nav_'+i+' > img',pagination).after('<div class="thumb_arrow" />');
                        $('li.pag_nav_'+i+' > .thumb_arrow',pagination).animate({opacity:0},0);
                    }
                });
                wrap.css({marginBottom:$(pagination).outerHeight()});
            }
        } else if(!$(thumbs).length && $(pagination).length) {
            wrap.css({marginBottom:$(pagination).outerHeight()});
        }

    
        var firstPos = true;

        function thumbnailPos() {
            if($(thumbs).length && !$(pagination).length) {
                var wTh = $(thumbs).outerWidth(),
                    owTh = $('ul > li',thumbs).outerWidth(),
                    pos = $('li.cameracurrent', thumbs).length ? $('li.cameracurrent', thumbs).position() : '',
                    ulW = ($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth()),
                    offUl = $('ul', thumbs).offset().left,
                    offDiv = $('> div', thumbs).offset().left,
                    ulLeft;

                    if(offUl<0){
                        ulLeft = '-'+ (offDiv-offUl);
                    } else {
                        ulLeft = offDiv-offUl;
                    }
                    
                    
                    
                if(firstPos == true) {
                    $('ul', thumbs).width($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth());
                    if($(thumbs).length && !$(pagination).lenght) {
                        wrap.css({marginBottom:$(thumbs).outerHeight()});
                    }
                    thumbnailVisible();
                    /*I repeat this two lines because of a problem with iPhones*/
                    $('ul', thumbs).width($('ul > li', thumbs).length * $('ul > li', thumbs).outerWidth());
                    if($(thumbs).length && !$(pagination).lenght) {
                        wrap.css({marginBottom:$(thumbs).outerHeight()});
                    }
                    /*...*/
                }
                firstPos = false;
                
                    var left = $('li.cameracurrent', thumbs).length ? pos.left : '',
                        right = $('li.cameracurrent', thumbs).length ? pos.left+($('li.cameracurrent', thumbs).outerWidth()) : '';
                    if(left<$('li.cameracurrent', thumbs).outerWidth()) {
                        left = 0;
                    }
                    if(right-ulLeft>wTh){
                        if((left+wTh)<ulW){
                            $('ul', thumbs).animate({'margin-left':'-'+(left)+'px'},500,thumbnailVisible);
                        } else {
                            $('ul', thumbs).animate({'margin-left':'-'+($('ul', thumbs).outerWidth()-wTh)+'px'},500,thumbnailVisible);
                        }
                    } else if(left-ulLeft<0) {
                        $('ul', thumbs).animate({'margin-left':'-'+(left)+'px'},500,thumbnailVisible);
                    } else {
                        $('ul', thumbs).css({'margin-left':'auto', 'margin-right':'auto'});
                        setTimeout(thumbnailVisible,100);
                    }
                    
            }
        }

        if($(commands).length) {
            $(commands).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>');
            if(autoAdv==true){
                $('.camera_play',camera_thumbs_wrap).hide();
                $('.camera_stop',camera_thumbs_wrap).show();
            } else {
                $('.camera_stop',camera_thumbs_wrap).hide();
                $('.camera_play',camera_thumbs_wrap).show();
            }
            
        }
            
            
        function canvasLoader() {
            rad = 0;
            var barWidth = $('.camera_bar_cont',camera_thumbs_wrap).width(),
                barHeight = $('.camera_bar_cont',camera_thumbs_wrap).height();

            if (loader != 'pie') {
                switch(barDirection){
                    case 'leftToRight':
                        $('#'+pieID).css({'right':barWidth});
                        break;
                    case 'rightToLeft':
                        $('#'+pieID).css({'left':barWidth});
                        break;
                    case 'topToBottom':
                        $('#'+pieID).css({'bottom':barHeight});
                        break;
                    case 'bottomToTop':
                        $('#'+pieID).css({'top':barHeight});
                        break;
                }
            } else {
                ctx.clearRect(0,0,opts.pieDiameter,opts.pieDiameter); 
            }
        }
        
        
        canvasLoader();
        
        
        $('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom',fakeHover).each(function(){
            $(this).css('visibility','hidden');
        });
        
        opts.onStartLoading.call(this);
        
        nextSlide();
        
    
    /*************************** FUNCTION nextSlide() ***************************/
    
    function nextSlide(navSlide){ 
        elem.addClass('camerasliding');
        
        videoPresent = false;
        var vis = parseFloat($('div.cameraSlide.cameracurrent',target).index());

        if(navSlide>0){ 
            var slideI = navSlide-1;
        } else if (vis == amountSlide-1) { 
            var slideI = 0;
        } else {
            var slideI = vis+1;
        }
        
                
        var slide = $('.cameraSlide:eq('+slideI+')',target);
        var slideNext = $('.cameraSlide:eq('+(slideI+1)+')',target).addClass('cameranext');
        if( vis != slideI+1 ) {
            slideNext.hide();
        }
        $('.cameraContent',fakeHover).fadeOut(600);
        $('.camera_caption',fakeHover).show();
        
        $('.camerarelative',slide).append($('> div ',elem).eq(slideI).find('> div.camera_effected'));

        $('.camera_target_content .cameraContent:eq('+slideI+')',wrap).append($('> div ',elem).eq(slideI).find('> div'));
        
        if(!$('.imgLoaded',slide).length){
            var imgUrl = allImg[slideI];
            var imgLoaded = new Image();
            imgLoaded.src = imgUrl +"?"+ new Date().getTime();
            slide.css('visibility','hidden');
            slide.prepend($(imgLoaded).attr('class','imgLoaded').css('visibility','hidden'));
            var wT, hT;
            if (!$(imgLoaded).get(0).complete || wT == '0' || hT == '0' || typeof wT === 'undefined' || wT === false || typeof hT === 'undefined' || hT === false) {
                $('.camera_loader',wrap).delay(500).fadeIn(400);
                imgLoaded.onload = function() {
                    wT = imgLoaded.naturalWidth;
                    hT = imgLoaded.naturalHeight;
                    $(imgLoaded).attr('data-alignment',allAlign[slideI]).attr('data-portrait',allPor[slideI]);
                    $(imgLoaded).attr('width',wT);
                    $(imgLoaded).attr('height',hT);
                    target.find('.cameraSlide_'+slideI).hide().css('visibility','visible');
                    resizeImage();
                    nextSlide(slideI+1);
                };
            }
        } else {
            if( allImg.length > (slideI+1) && !$('.imgLoaded',slideNext).length ){
                var imgUrl2 = allImg[(slideI+1)];
                var imgLoaded2 = new Image();
                imgLoaded2.src = imgUrl2 +"?"+ new Date().getTime();
                slideNext.prepend($(imgLoaded2).attr('class','imgLoaded').css('visibility','hidden'));
                imgLoaded2.onload = function() {
                    wT = imgLoaded2.naturalWidth;
                    hT = imgLoaded2.naturalHeight;
                    $(imgLoaded2).attr('data-alignment',allAlign[slideI+1]).attr('data-portrait',allPor[slideI+1]);
                    $(imgLoaded2).attr('width',wT);
                    $(imgLoaded2).attr('height',hT);
                    resizeImage();
                };
            }
            opts.onLoaded.call(this);
            if($('.camera_loader',wrap).is(':visible')){
                $('.camera_loader',wrap).fadeOut(400);
            } else {
                $('.camera_loader',wrap).css({'visibility':'hidden'});
                $('.camera_loader',wrap).fadeOut(400,function(){
                    $('.camera_loader',wrap).css({'visibility':'visible'});
                });
            }
            var rows = opts.rows,
                cols = opts.cols,
                couples = 1,
                difference = 0,
                dataSlideOn,
                time,
                transPeriod,
                fx,
                easing,
                randomFx = new Array('simpleFade','curtainTopLeft','curtainTopRight','curtainBottomLeft','curtainBottomRight','curtainSliceLeft','curtainSliceRight','blindCurtainTopLeft','blindCurtainTopRight','blindCurtainBottomLeft','blindCurtainBottomRight','blindCurtainSliceBottom','blindCurtainSliceTop','stampede','mosaic','mosaicReverse','mosaicRandom','mosaicSpiral','mosaicSpiralReverse','topLeftBottomRight','bottomRightTopLeft','bottomLeftTopRight','topRightBottomLeft','scrollLeft','scrollRight','scrollTop','scrollBottom','scrollHorz');
                marginLeft = 0,
                marginTop = 0,
                opacityOnGrid = 0;
                
                if(opts.opacityOnGrid==true){
                    opacityOnGrid = 0;
                } else {
                    opacityOnGrid = 1;
                }
 
            
            
            var dataFx = $(' > div',elem).eq(slideI).attr('data-fx');
                
            if(isMobile()&&opts.mobileFx!=''&&opts.mobileFx!='default'){
                fx = opts.mobileFx;
            } else {
                if(typeof dataFx !== 'undefined' && dataFx!== false && dataFx!== 'default'){
                    fx = dataFx;
                } else {
                    fx = opts.fx;
                }
            }
            
            if(fx=='random') {
                fx = shuffle(randomFx);
                fx = fx[0];
            } else {
                fx = fx;
                if(fx.indexOf(',')>0){
                    fx = fx.replace(/ /g,'');
                    fx = fx.split(',');
                    fx = shuffle(fx);
                    fx = fx[0];
                }
            }
            
            dataEasing = $(' > div',elem).eq(slideI).attr('data-easing');
            mobileEasing = $(' > div',elem).eq(slideI).attr('data-mobileEasing');

            if(isMobile()&&opts.mobileEasing!=''&&opts.mobileEasing!='default'){
                if(typeof mobileEasing !== 'undefined' && mobileEasing!== false && mobileEasing!== 'default') {
                    easing = mobileEasing;
                } else {
                    easing = opts.mobileEasing;
                }
            } else {
                if(typeof dataEasing !== 'undefined' && dataEasing!== false && dataEasing!== 'default') {
                    easing = dataEasing;
                } else {
                    easing = opts.easing;
                }
            }
    
            dataSlideOn = $(' > div',elem).eq(slideI).attr('data-slideOn');
            if(typeof dataSlideOn !== 'undefined' && dataSlideOn!== false){
                slideOn = dataSlideOn;
            } else {
                if(opts.slideOn=='random'){
                    var slideOn = new Array('next','prev');
                    slideOn = shuffle(slideOn);
                    slideOn = slideOn[0];
                } else {
                    slideOn = opts.slideOn;
                }
            }
                
            var dataTime = $(' > div',elem).eq(slideI).attr('data-time');
            if(typeof dataTime !== 'undefined' && dataTime!== false && dataTime!== ''){
                time = parseFloat(dataTime);
            } else {
                time = opts.time;
            }
                
            var dataTransPeriod = $(' > div',elem).eq(slideI).attr('data-transPeriod');
            if(typeof dataTransPeriod !== 'undefined' && dataTransPeriod!== false && dataTransPeriod!== ''){
                transPeriod = parseFloat(dataTransPeriod);
            } else {
                transPeriod = opts.transPeriod;
            }
                
            if(!$(elem).hasClass('camerastarted')){
                fx = 'simpleFade';
                slideOn = 'next';
                easing = '';
                transPeriod = 400;
                $(elem).addClass('camerastarted')
            }
    
            switch(fx){
                case 'simpleFade':
                    cols = 1;
                    rows = 1;
                        break;
                case 'curtainTopLeft':
                    if(opts.slicedCols == 0) {
                        cols = opts.cols;
                    } else {
                        cols = opts.slicedCols;
                    }
                    rows = 1;
                        break;
                case 'curtainTopRight':
                    if(opts.slicedCols == 0) {
                        cols = opts.cols;
                    } else {
                        cols = opts.slicedCols;
                    }
                    rows = 1;
                        break;
                case 'curtainBottomLeft':
                    if(opts.slicedCols == 0) {
                        cols = opts.cols;
                    } else {
                        cols = opts.slicedCols;
                    }
                    rows = 1;
                        break;
                case 'curtainBottomRight':
                    if(opts.slicedCols == 0) {
                        cols = opts.cols;
                    } else {
                        cols = opts.slicedCols;
                    }
                    rows = 1;
                        break;
                case 'curtainSliceLeft':
                    if(opts.slicedCols == 0) {
                        cols = opts.cols;
                    } else {
                        cols = opts.slicedCols;
                    }
                    rows = 1;
                        break;
                case 'curtainSliceRight':
                    if(opts.slicedCols == 0) {
                        cols = opts.cols;
                    } else {
                        cols = opts.slicedCols;
                    }
                    rows = 1;
                        break;
                case 'blindCurtainTopLeft':
                    if(opts.slicedRows == 0) {
                        rows = opts.rows;
                    } else {
                        rows = opts.slicedRows;
                    }
                    cols = 1;
                        break;
                case 'blindCurtainTopRight':
                    if(opts.slicedRows == 0) {
                        rows = opts.rows;
                    } else {
                        rows = opts.slicedRows;
                    }
                    cols = 1;
                        break;
                case 'blindCurtainBottomLeft':
                    if(opts.slicedRows == 0) {
                        rows = opts.rows;
                    } else {
                        rows = opts.slicedRows;
                    }
                    cols = 1;
                        break;
                case 'blindCurtainBottomRight':
                    if(opts.slicedRows == 0) {
                        rows = opts.rows;
                    } else {
                        rows = opts.slicedRows;
                    }
                    cols = 1;
                        break;
                case 'blindCurtainSliceTop':
                    if(opts.slicedRows == 0) {
                        rows = opts.rows;
                    } else {
                        rows = opts.slicedRows;
                    }
                    cols = 1;
                        break;
                case 'blindCurtainSliceBottom':
                    if(opts.slicedRows == 0) {
                        rows = opts.rows;
                    } else {
                        rows = opts.slicedRows;
                    }
                    cols = 1;
                        break;
                case 'stampede':
                    difference = '-'+transPeriod;
                        break;
                case 'mosaic':
                    difference = opts.gridDifference;
                        break;
                case 'mosaicReverse':
                    difference = opts.gridDifference;
                        break;
                case 'mosaicRandom':
                        break;
                case 'mosaicSpiral':
                    difference = opts.gridDifference;
                    couples = 1.7;
                        break;
                case 'mosaicSpiralReverse':
                    difference = opts.gridDifference;
                    couples = 1.7;
                        break;
                case 'topLeftBottomRight':
                    difference = opts.gridDifference;
                    couples = 6;
                        break;
                case 'bottomRightTopLeft':
                    difference = opts.gridDifference;
                    couples = 6;
                        break;
                case 'bottomLeftTopRight':
                    difference = opts.gridDifference;
                    couples = 6;
                        break;
                case 'topRightBottomLeft':
                    difference = opts.gridDifference;
                    couples = 6;
                        break;
                case 'scrollLeft':
                    cols = 1;
                    rows = 1;
                        break;
                case 'scrollRight':
                    cols = 1;
                    rows = 1;
                        break;
                case 'scrollTop':
                    cols = 1;
                    rows = 1;
                        break;
                case 'scrollBottom':
                    cols = 1;
                    rows = 1;
                        break;
                case 'scrollHorz':
                    cols = 1;
                    rows = 1;
                        break;
            }
            
            var cycle = 0;
            var blocks = rows*cols;
            var leftScrap = w-(Math.floor(w/cols)*cols);
            var topScrap = h-(Math.floor(h/rows)*rows);
            var addLeft;
            var addTop;
            var tAppW = 0;  
            var tAppH = 0;
            var arr = new Array();
            var delay = new Array();
            var order = new Array();
            while(cycle < blocks){
                arr.push(cycle);
                delay.push(cycle);
                cameraCont.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');
                var tApp = $('.cameraappended:eq('+cycle+')',target);
                if(fx=='scrollLeft' || fx=='scrollRight' || fx=='scrollTop' || fx=='scrollBottom' || fx=='scrollHorz'){
                    selector.eq(slideI).clone().show().appendTo(tApp);
                } else {
                    if(slideOn=='next'){
                        selector.eq(slideI).clone().show().appendTo(tApp);
                    } else {
                        selector.eq(vis).clone().show().appendTo(tApp);
                    }
                }

                if(cycle%cols<leftScrap){
                    addLeft = 1;
                } else {
                    addLeft = 0;
                }
                if(cycle%cols==0){
                    tAppW = 0;
                }
                if(Math.floor(cycle/cols)<topScrap){
                    addTop = 1;
                } else {
                    addTop = 0;
                }
                tApp.css({
                    'height': Math.floor((h/rows)+addTop+1),
                    'left': tAppW,
                    'top': tAppH,
                    'width': Math.floor((w/cols)+addLeft+1)
                });
                $('> .cameraSlide', tApp).css({
                    'height': h,
                    'margin-left': '-'+tAppW+'px',
                    'margin-top': '-'+tAppH+'px',
                    'width': w
                });
                tAppW = tAppW+tApp.width()-1;
                if(cycle%cols==cols-1){
                    tAppH = tAppH + tApp.height() - 1;
                }
                cycle++;
            }
            

            
            switch(fx){
                case 'curtainTopLeft':
                        break;
                case 'curtainBottomLeft':
                        break;
                case 'curtainSliceLeft':
                        break;
                case 'curtainTopRight':
                    arr = arr.reverse();
                        break;
                case 'curtainBottomRight':
                    arr = arr.reverse();
                        break;
                case 'curtainSliceRight':
                    arr = arr.reverse();
                        break;
                case 'blindCurtainTopLeft':
                        break;
                case 'blindCurtainBottomLeft':
                    arr = arr.reverse();
                        break;
                case 'blindCurtainSliceTop':
                        break;
                case 'blindCurtainTopRight':
                        break;
                case 'blindCurtainBottomRight':
                    arr = arr.reverse();
                        break;
                case 'blindCurtainSliceBottom':
                    arr = arr.reverse();
                        break;
                case 'stampede':
                    arr = shuffle(arr);
                        break;
                case 'mosaic':
                        break;
                case 'mosaicReverse':
                    arr = arr.reverse();
                        break;
                case 'mosaicRandom':
                    arr = shuffle(arr);
                        break;
                case 'mosaicSpiral':
                    var rows2 = rows/2, x, y, z, n=0;
                        for (z = 0; z < rows2; z++){
                            y = z;
                            for (x = z; x < cols - z - 1; x++) {
                                order[n++] = y * cols + x;
                            }
                            x = cols - z - 1;
                            for (y = z; y < rows - z - 1; y++) {
                                order[n++] = y * cols + x;
                            }
                            y = rows - z - 1;
                            for (x = cols - z - 1; x > z; x--) {
                                order[n++] = y * cols + x;
                            }
                            x = z;
                            for (y = rows - z - 1; y > z; y--) {
                                order[n++] = y * cols + x;
                            }
                        }
                        
                        arr = order;

                        break;
                case 'mosaicSpiralReverse':
                    var rows2 = rows/2, x, y, z, n=blocks-1;
                        for (z = 0; z < rows2; z++){
                            y = z;
                            for (x = z; x < cols - z - 1; x++) {
                                order[n--] = y * cols + x;
                            }
                            x = cols - z - 1;
                            for (y = z; y < rows - z - 1; y++) {
                                order[n--] = y * cols + x;
                            }
                            y = rows - z - 1;
                            for (x = cols - z - 1; x > z; x--) {
                                order[n--] = y * cols + x;
                            }
                            x = z;
                            for (y = rows - z - 1; y > z; y--) {
                                order[n--] = y * cols + x;
                            }
                        }

                        arr = order;
                        
                        break;
                case 'topLeftBottomRight':
                    for (var y = 0; y < rows; y++)
                    for (var x = 0; x < cols; x++) {
                        order.push(x + y);
                    }
                        delay = order;
                        break;
                case 'bottomRightTopLeft':
                    for (var y = 0; y < rows; y++)
                    for (var x = 0; x < cols; x++) {
                        order.push(x + y);
                    }
                        delay = order.reverse();
                        break;
                case 'bottomLeftTopRight':
                    for (var y = rows; y > 0; y--)
                    for (var x = 0; x < cols; x++) {
                        order.push(x + y);
                    }
                        delay = order;
                        break;
                case 'topRightBottomLeft':
                    for (var y = 0; y < rows; y++)
                    for (var x = cols; x > 0; x--) {
                        order.push(x + y);
                    }
                        delay = order;
                        break;
            }
            
            
                        
            $.each(arr, function(index, value) {

                if(value%cols<leftScrap){
                    addLeft = 1;
                } else {
                    addLeft = 0;
                }
                if(value%cols==0){
                    tAppW = 0;
                }
                if(Math.floor(value/cols)<topScrap){
                    addTop = 1;
                } else {
                    addTop = 0;
                }
                            
                switch(fx){
                    case 'simpleFade':
                        height = h;
                        width = w;
                        opacityOnGrid = 0;
                            break;
                    case 'curtainTopLeft':
                        height = 0,
                        width = Math.floor((w/cols)+addLeft+1),
                        marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';
                            break;
                    case 'curtainTopRight':
                        height = 0,
                        width = Math.floor((w/cols)+addLeft+1),
                        marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';
                            break;
                    case 'curtainBottomLeft':
                        height = 0,
                        width = Math.floor((w/cols)+addLeft+1),
                        marginTop = Math.floor((h/rows)+addTop+1)+'px';
                            break;
                    case 'curtainBottomRight':
                        height = 0,
                        width = Math.floor((w/cols)+addLeft+1),
                        marginTop = Math.floor((h/rows)+addTop+1)+'px';
                            break;
                    case 'curtainSliceLeft':
                        height = 0,
                        width = Math.floor((w/cols)+addLeft+1);
                        if(value%2==0){
                            marginTop = Math.floor((h/rows)+addTop+1)+'px';                 
                        } else {
                            marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';                 
                        }
                            break;
                    case 'curtainSliceRight':
                        height = 0,
                        width = Math.floor((w/cols)+addLeft+1);
                        if(value%2==0){
                            marginTop = Math.floor((h/rows)+addTop+1)+'px';                 
                        } else {
                            marginTop = '-'+Math.floor((h/rows)+addTop+1)+'px';                 
                        }
                            break;
                    case 'blindCurtainTopLeft':
                        height = Math.floor((h/rows)+addTop+1),
                        width = 0,
                        marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
                            break;
                    case 'blindCurtainTopRight':
                        height = Math.floor((h/rows)+addTop+1),
                        width = 0,
                        marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
                            break;
                    case 'blindCurtainBottomLeft':
                        height = Math.floor((h/rows)+addTop+1),
                        width = 0,
                        marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
                            break;
                    case 'blindCurtainBottomRight':
                        height = Math.floor((h/rows)+addTop+1),
                        width = 0,
                        marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
                            break;
                    case 'blindCurtainSliceBottom':
                        height = Math.floor((h/rows)+addTop+1),
                        width = 0;
                        if(value%2==0){
                            marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
                        } else {
                            marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
                        }
                            break;
                    case 'blindCurtainSliceTop':
                        height = Math.floor((h/rows)+addTop+1),
                        width = 0;
                        if(value%2==0){
                            marginLeft = '-'+Math.floor((w/cols)+addLeft+1)+'px';
                        } else {
                            marginLeft = Math.floor((w/cols)+addLeft+1)+'px';
                        }
                            break;
                    case 'stampede':
                        height = 0;
                        width = 0;                  
                        marginLeft = (w*0.2)*(((index)%cols)-(cols-(Math.floor(cols/2))))+'px';                 
                        marginTop = (h*0.2)*((Math.floor(index/cols)+1)-(rows-(Math.floor(rows/2))))+'px';  
                            break;
                    case 'mosaic':
                        height = 0;
                        width = 0;                  
                            break;
                    case 'mosaicReverse':
                        height = 0;
                        width = 0;                  
                        marginLeft = Math.floor((w/cols)+addLeft+1)+'px';                   
                        marginTop = Math.floor((h/rows)+addTop+1)+'px';                 
                            break;
                    case 'mosaicRandom':
                        height = 0;
                        width = 0;                  
                        marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';                   
                        marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';                 
                            break;
                    case 'mosaicSpiral':
                        height = 0;
                        width = 0;
                        marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';                   
                        marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';                 
                            break;
                    case 'mosaicSpiralReverse':
                        height = 0;
                        width = 0;
                        marginLeft = Math.floor((w/cols)+addLeft+1)*0.5+'px';                   
                        marginTop = Math.floor((h/rows)+addTop+1)*0.5+'px';                 
                            break;
                    case 'topLeftBottomRight':
                        height = 0;
                        width = 0;                  
                            break;
                    case 'bottomRightTopLeft':
                        height = 0;
                        width = 0;                  
                        marginLeft = Math.floor((w/cols)+addLeft+1)+'px';                   
                        marginTop = Math.floor((h/rows)+addTop+1)+'px';                 
                            break;
                    case 'bottomLeftTopRight':
                        height = 0;
                        width = 0;                  
                        marginLeft = 0;                 
                        marginTop = Math.floor((h/rows)+addTop+1)+'px';                 
                            break;
                    case 'topRightBottomLeft':
                        height = 0;
                        width = 0;                  
                        marginLeft = Math.floor((w/cols)+addLeft+1)+'px';                   
                        marginTop = 0;                  
                            break;
                    case 'scrollRight':
                        height = h;
                        width = w;
                        marginLeft = -w;                    
                            break;
                    case 'scrollLeft':
                        height = h;
                        width = w;
                        marginLeft = w;                 
                            break;
                    case 'scrollTop':
                        height = h;
                        width = w;
                        marginTop = h;                  
                            break;
                    case 'scrollBottom':
                        height = h;
                        width = w;
                        marginTop = -h;                 
                            break;
                    case 'scrollHorz':
                        height = h;
                        width = w;
                        if(vis==0 && slideI==amountSlide-1) {
                            marginLeft = -w;    
                        } else if(vis<slideI  || (vis==amountSlide-1 && slideI==0)) {
                            marginLeft = w; 
                        } else {
                            marginLeft = -w;    
                        }
                            break;
                    }
                    
            
                var tApp = $('.cameraappended:eq('+value+')',target);
                                
                if(typeof u !== 'undefined'){
                    clearInterval(u);
                    clearTimeout(setT);
                    setT = setTimeout(canvasLoader,transPeriod+difference);
                }
                
                
                if($(pagination).length){
                    $('.camera_pag li',wrap).removeClass('cameracurrent');
                    $('.camera_pag li',wrap).eq(slideI).addClass('cameracurrent');
                }
                        
                if($(thumbs).length){
                    $('li', thumbs).removeClass('cameracurrent');
                    $('li', thumbs).eq(slideI).addClass('cameracurrent');
                    $('li', thumbs).not('.cameracurrent').find('img').animate({opacity:.5},0);
                    $('li.cameracurrent img', thumbs).animate({opacity:1},0);
                    $('li', thumbs).hover(function(){
                        $('img',this).stop(true,false).animate({opacity:1},150);
                    },function(){
                        if(!$(this).hasClass('cameracurrent')){
                            $('img',this).stop(true,false).animate({opacity:.5},150);
                        }
                    });
                }
                                
                        
                var easedTime = parseFloat(transPeriod)+parseFloat(difference);
                
                function cameraeased() {

                    $(this).addClass('cameraeased');
                    if($('.cameraeased',target).length>=0){
                        $(thumbs).css({visibility:'visible'});
                    }
                    if($('.cameraeased',target).length==blocks){
                        
                        thumbnailPos();
                        
                        $('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom',fakeHover).each(function(){
                            $(this).css('visibility','hidden');
                        });
        
                        selector.eq(slideI).show().css('z-index','999').removeClass('cameranext').addClass('cameracurrent');
                        selector.eq(vis).css('z-index','1').removeClass('cameracurrent');
                        $('.cameraContent',fakeHover).eq(slideI).addClass('cameracurrent');
                        if (vis >= 0) {
                            $('.cameraContent',fakeHover).eq(vis).removeClass('cameracurrent');
                        }
                        
                        opts.onEndTransition.call(this);
                        
                        if($('> div', elem).eq(slideI).attr('data-video')!='hide' && $('.cameraContent.cameracurrent .imgFake',fakeHover).length ){
                            $('.cameraContent.cameracurrent .imgFake',fakeHover).click();
                        }

                        
                        var lMoveIn = selector.eq(slideI).find('.fadeIn').length;
                        var lMoveInContent = $('.cameraContent',fakeHover).eq(slideI).find('.moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom').length;
                        
                        if (lMoveIn!=0){
                            $('.cameraSlide.cameracurrent .fadeIn',fakeHover).each(function(){
                                if($(this).attr('data-easing')!=''){
                                    var easeMove = $(this).attr('data-easing');
                                } else {
                                    var easeMove = easing;
                                }
                                var t = $(this);
                                if(typeof t.attr('data-outerWidth') === 'undefined' || t.attr('data-outerWidth') === false || t.attr('data-outerWidth') === '') {
                                    var wMoveIn = t.outerWidth();
                                    t.attr('data-outerWidth',wMoveIn);
                                } else {
                                    var wMoveIn = t.attr('data-outerWidth');
                                }
                                if(typeof t.attr('data-outerHeight') === 'undefined' || t.attr('data-outerHeight') === false || t.attr('data-outerHeight') === '') {
                                    var hMoveIn = t.outerHeight();
                                    t.attr('data-outerHeight',hMoveIn);
                                } else {
                                    var hMoveIn = t.attr('data-outerHeight');
                                }
                                //t.css('width',wMoveIn);
                                var pos = t.position();
                                var left = pos.left;
                                var top = pos.top;
                                var tClass = t.attr('class');
                                var ind = t.index();
                                var hRel = t.parents('.camerarelative').outerHeight();
                                var wRel = t.parents('.camerarelative').outerWidth();
                                if(tClass.indexOf("fadeIn") != -1) {
                                    t.animate({opacity:0},0).css('visibility','visible').delay((time/lMoveIn)*(0.1*(ind-1))).animate({opacity:1},(time/lMoveIn)*0.15,easeMove);
                                } else {
                                    t.css('visibility','visible');
                                }
                            });
                        }

                        $('.cameraContent.cameracurrent',fakeHover).show();
                        if (lMoveInContent!=0){
                            
                            $('.cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom',fakeHover).each(function(){
                                if($(this).attr('data-easing')!=''){
                                    var easeMove = $(this).attr('data-easing');
                                } else {
                                    var easeMove = easing;
                                }
                                var t = $(this);
                                var pos = t.position();
                                var left = pos.left;
                                var top = pos.top;
                                var tClass = t.attr('class');
                                var ind = t.index();
                                var thisH = t.outerHeight();
                                if(tClass.indexOf("moveFromLeft") != -1) {
                                    t.css({'left':'-'+(w)+'px','right':'auto'});
                                    t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left},(time/lMoveInContent)*0.15,easeMove);
                                } else if(tClass.indexOf("moveFromRight") != -1) {
                                    t.css({'left':w+'px','right':'auto'});
                                    t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left},(time/lMoveInContent)*0.15,easeMove);
                                } else if(tClass.indexOf("moveFromTop") != -1) {
                                    t.css({'top':'-'+h+'px','bottom':'auto'});
                                    t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top},(time/lMoveInContent)*0.15,easeMove,function(){
                                        t.css({top:'auto',bottom:0});
                                    });
                                } else if(tClass.indexOf("moveFromBottom") != -1) {
                                    t.css({'top':h+'px','bottom':'auto'});
                                    t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top},(time/lMoveInContent)*0.15,easeMove);
                                } else if(tClass.indexOf("fadeFromLeft") != -1) {
                                    t.animate({opacity:0},0).css({'left':'-'+(w)+'px','right':'auto'});
                                    t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left,opacity:1},(time/lMoveInContent)*0.15,easeMove);
                                } else if(tClass.indexOf("fadeFromRight") != -1) {
                                    t.animate({opacity:0},0).css({'left':(w)+'px','right':'auto'});
                                    t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'left':pos.left,opacity:1},(time/lMoveInContent)*0.15,easeMove);
                                } else if(tClass.indexOf("fadeFromTop") != -1) {
                                    t.animate({opacity:0},0).css({'top':'-'+(h)+'px','bottom':'auto'});
                                    t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'top':pos.top,opacity:1},(time/lMoveInContent)*0.15,easeMove,function(){
                                        t.css({top:'auto',bottom:0});
                                    });
                                } else if(tClass.indexOf("fadeFromBottom") != -1) {
                                    t.animate({opacity:0},0).css({'bottom':'-'+thisH+'px'});
                                    t.css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({'bottom':'0',opacity:1},(time/lMoveInContent)*0.15,easeMove);
                                } else if(tClass.indexOf("fadeIn") != -1) {
                                    t.animate({opacity:0},0).css('visibility','visible').delay((time/lMoveInContent)*(0.1*(ind-1))).animate({opacity:1},(time/lMoveInContent)*0.15,easeMove);
                                } else {
                                    t.css('visibility','visible');
                                }
                            });
                        }

                        
                        $('.cameraappended',target).remove();
                        elem.removeClass('camerasliding');  
                            selector.eq(vis).hide();
                            var barWidth = $('.camera_bar_cont',camera_thumbs_wrap).width(),
                                barHeight = $('.camera_bar_cont',camera_thumbs_wrap).height(),
                                radSum;
                            if (loader != 'pie') {
                                radSum = 0.05;
                            } else {
                                radSum = 0.005;
                            }
                            $('#'+pieID).animate({opacity:opts.loaderOpacity},200);
                            u = setInterval(
                                function(){
                                    if(elem.hasClass('stopped')){
                                        clearInterval(u);
                                    }
                                    if (loader != 'pie') {
                                        if(rad<=1.002 && !elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')){
                                            rad = (rad+radSum);
                                        } else if (rad<=1 && (elem.hasClass('stopped') || elem.hasClass('paused') || elem.hasClass('stopped') || elem.hasClass('hovered'))){
                                            rad = rad;
                                        } else {
                                            if(!elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')) {
                                                clearInterval(u);
                                                imgFake();
                                                $('#'+pieID).animate({opacity:0},200,function(){
                                                    clearTimeout(setT);
                                                    setT = setTimeout(canvasLoader,easedTime);
                                                    nextSlide();
                                                    opts.onStartLoading.call(this);
                                                });
                                            }
                                        }
                                        switch(barDirection){
                                            case 'leftToRight':
                                                $('#'+pieID).animate({'right':barWidth-(barWidth*rad)},(time*radSum),'linear');
                                                break;
                                            case 'rightToLeft':
                                                $('#'+pieID).animate({'left':barWidth-(barWidth*rad)},(time*radSum),'linear');
                                                break;
                                            case 'topToBottom':
                                                $('#'+pieID).animate({'bottom':barHeight-(barHeight*rad)},(time*radSum),'linear');
                                                break;
                                            case 'bottomToTop':
                                                $('#'+pieID).animate({'bottom':barHeight-(barHeight*rad)},(time*radSum),'linear');
                                                break;
                                        }
                                        
                                    } else {
                                        radNew = rad;
                                        ctx.clearRect(0,0,opts.pieDiameter,opts.pieDiameter);
                                        ctx.globalCompositeOperation = 'destination-over';
                                        ctx.beginPath();
                                        ctx.arc((opts.pieDiameter)/2, (opts.pieDiameter)/2, (opts.pieDiameter)/2-opts.loaderStroke,0,Math.PI*2,false);
                                        ctx.lineWidth = opts.loaderStroke;
                                        ctx.strokeStyle = opts.loaderBgColor;
                                        ctx.stroke();
                                        ctx.closePath();
                                        ctx.globalCompositeOperation = 'source-over';
                                        ctx.beginPath();
                                        ctx.arc((opts.pieDiameter)/2, (opts.pieDiameter)/2, (opts.pieDiameter)/2-opts.loaderStroke,0,Math.PI*2*radNew,false);
                                        ctx.lineWidth = opts.loaderStroke-(opts.loaderPadding*2);
                                        ctx.strokeStyle = opts.loaderColor;
                                        ctx.stroke();
                                        ctx.closePath();
                                                
                                        if(rad<=1.002 && !elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')){
                                            rad = (rad+radSum);
                                        } else if (rad<=1 && (elem.hasClass('stopped') || elem.hasClass('paused') || elem.hasClass('hovered'))){
                                            rad = rad;
                                        } else {
                                            if(!elem.hasClass('stopped') && !elem.hasClass('paused') && !elem.hasClass('hovered')) {
                                                clearInterval(u);
                                                imgFake();
                                                $('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},200,function(){
                                                    clearTimeout(setT);
                                                    setT = setTimeout(canvasLoader,easedTime);
                                                    nextSlide();
                                                    opts.onStartLoading.call(this);
                                                });
                                            }
                                        }
                                    }
                                },time*radSum
                            );
                        }

                }


                
                if(fx=='scrollLeft' || fx=='scrollRight' || fx=='scrollTop' || fx=='scrollBottom' || fx=='scrollHorz'){
                    opts.onStartTransition.call(this);
                    easedTime = 0;
                    tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
                            'display' : 'block',
                            'height': height,
                            'margin-left': marginLeft,
                            'margin-top': marginTop,
                            'width': width
                        }).animate({
                            'height': Math.floor((h/rows)+addTop+1),
                            'margin-top' : 0,
                            'margin-left' : 0,
                            'width' : Math.floor((w/cols)+addLeft+1)
                        },(transPeriod-difference),easing,cameraeased);
                    selector.eq(vis).delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).animate({
                            'margin-left': marginLeft*(-1),
                            'margin-top': marginTop*(-1)
                        },(transPeriod-difference),easing,function(){
                            $(this).css({'margin-top' : 0,'margin-left' : 0});
                        });
                } else {
                    opts.onStartTransition.call(this);
                    easedTime = parseFloat(transPeriod)+parseFloat(difference);
                    if(slideOn=='next'){
                        tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
                                'display' : 'block',
                                'height': height,
                                'margin-left': marginLeft,
                                'margin-top': marginTop,
                                'width': width,
                                'opacity' : opacityOnGrid
                            }).animate({
                                'height': Math.floor((h/rows)+addTop+1),
                                'margin-top' : 0,
                                'margin-left' : 0,
                                'opacity' : 1,
                                'width' : Math.floor((w/cols)+addLeft+1)
                            },(transPeriod-difference),easing,cameraeased);
                    } else {
                        selector.eq(slideI).show().css('z-index','999').addClass('cameracurrent');
                        selector.eq(vis).css('z-index','1').removeClass('cameracurrent');
                        $('.cameraContent',fakeHover).eq(slideI).addClass('cameracurrent');
                        $('.cameraContent',fakeHover).eq(vis).removeClass('cameracurrent');
                        tApp.delay((((transPeriod+difference)/blocks)*delay[index]*couples)*0.5).css({
                                'display' : 'block',
                                'height': Math.floor((h/rows)+addTop+1),
                                'margin-top' : 0,
                                'margin-left' : 0,
                                'opacity' : 1,
                                'width' : Math.floor((w/cols)+addLeft+1)
                            }).animate({
                                'height': height,
                                'margin-left': marginLeft,
                                'margin-top': marginTop,
                                'width': width,
                                'opacity' : opacityOnGrid
                            },(transPeriod-difference),easing,cameraeased);
                    }
                }





            });
                
                
                
     
        }
    }


                if($(prevNav).length){
                    $(prevNav).click(function(){
                        if(!elem.hasClass('camerasliding')){
                            var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
                            clearInterval(u);
                            imgFake();
                            $('#'+pieID+', .camera_canvas_wrap',wrap).animate({opacity:0},0);
                            canvasLoader();
                            if(idNum!=0){
                                nextSlide(idNum);
                            } else {
                                nextSlide(amountSlide);
                           }
                           opts.onStartLoading.call(this);
                        }
                    });
                }
            
                if($(nextNav).length){
                    $(nextNav).click(function(){
                        if(!elem.hasClass('camerasliding')){
                            var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index()); 
                            clearInterval(u);
                            imgFake();
                            $('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
                            canvasLoader();
                            if(idNum==amountSlide-1){
                                nextSlide(1);
                            } else {
                                nextSlide(idNum+2);
                           }
                           opts.onStartLoading.call(this);
                        }
                    });
                }


                if(isMobile()){
                    fakeHover.bind('swipeleft',function(event){
                        if(!elem.hasClass('camerasliding')){
                            var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index()); 
                            clearInterval(u);
                            imgFake();
                            $('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
                            canvasLoader();
                            if(idNum==amountSlide-1){
                                nextSlide(1);
                            } else {
                                nextSlide(idNum+2);
                           }
                           opts.onStartLoading.call(this);
                        }
                    });
                    fakeHover.bind('swiperight',function(event){
                        if(!elem.hasClass('camerasliding')){
                            var idNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
                            clearInterval(u);
                            imgFake();
                            $('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
                            canvasLoader();
                            if(idNum!=0){
                                nextSlide(idNum);
                            } else {
                                nextSlide(amountSlide);
                           }
                           opts.onStartLoading.call(this);
                        }
                    });
                }

                if($(pagination).length){
                    $('.camera_pag li',wrap).click(function(){
                        if(!elem.hasClass('camerasliding')){
                            var idNum = parseFloat($(this).index());
                            var curNum = parseFloat($('.cameraSlide.cameracurrent',target).index());
                            if(idNum!=curNum) {
                                clearInterval(u);
                                imgFake();
                                $('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
                                canvasLoader();
                                nextSlide(idNum+1);
                                opts.onStartLoading.call(this);
                            }
                        }
                    });
                }

                if($(thumbs).length) {

                    $('.pix_thumb img',thumbs).click(function(){
                        if(!elem.hasClass('camerasliding')){
                            var idNum = parseFloat($(this).parents('li').index());
                            var curNum = parseFloat($('.cameracurrent',target).index());
                            if(idNum!=curNum) {
                                clearInterval(u);
                                imgFake();
                                $('#'+pieID+', .camera_canvas_wrap',camera_thumbs_wrap).animate({opacity:0},0);
                                $('.pix_thumb',thumbs).removeClass('cameracurrent');
                                $(this).parents('li').addClass('cameracurrent');
                                canvasLoader();
                                nextSlide(idNum+1);
                                thumbnailPos();
                                opts.onStartLoading.call(this);
                            }
                        }
                    });

                    $('.camera_thumbs_cont .camera_prevThumbs',camera_thumbs_wrap).hover(function(){
                        $(this).stop(true,false).animate({opacity:1},250);
                    },function(){
                        $(this).stop(true,false).animate({opacity:.7},250);
                    });
                    $('.camera_prevThumbs',camera_thumbs_wrap).click(function(){
                        var sum = 0,
                            wTh = $(thumbs).outerWidth(),
                            offUl = $('ul', thumbs).offset().left,
                            offDiv = $('> div', thumbs).offset().left,
                            ulLeft = offDiv-offUl;
                            $('.camera_visThumb',thumbs).each(function(){
                                var tW = $(this).outerWidth();
                                sum = sum+tW;
                            });
                            if(ulLeft-sum>0){
                                $('ul', thumbs).animate({'margin-left':'-'+(ulLeft-sum)+'px'},500,thumbnailVisible);
                            } else {
                                $('ul', thumbs).animate({'margin-left':0},500,thumbnailVisible);
                            }
                    });

                    $('.camera_thumbs_cont .camera_nextThumbs',camera_thumbs_wrap).hover(function(){
                        $(this).stop(true,false).animate({opacity:1},250);
                    },function(){
                        $(this).stop(true,false).animate({opacity:.7},250);
                    });
                    $('.camera_nextThumbs',camera_thumbs_wrap).click(function(){
                        var sum = 0,
                            wTh = $(thumbs).outerWidth(),
                            ulW = $('ul', thumbs).outerWidth(),
                            offUl = $('ul', thumbs).offset().left,
                            offDiv = $('> div', thumbs).offset().left,
                            ulLeft = offDiv-offUl;
                            $('.camera_visThumb',thumbs).each(function(){
                                var tW = $(this).outerWidth();
                                sum = sum+tW;
                            });
                            if(ulLeft+sum+sum<ulW){
                                $('ul', thumbs).animate({'margin-left':'-'+(ulLeft+sum)+'px'},500,thumbnailVisible);
                            } else {
                                $('ul', thumbs).animate({'margin-left':'-'+(ulW-wTh)+'px'},500,thumbnailVisible);
                            }
                    });

                }
        
        
    
}

})(jQuery);

;(function($){$.fn.cameraStop = function() {
    var wrap = $(this),
        elem = $('.camera_src',wrap),
        pieID = 'pie_'+wrap.index();
    elem.addClass('stopped');
    if($('.camera_showcommands').length) {
        var camera_thumbs_wrap = $('.camera_thumbs_wrap',wrap);
    } else {
        var camera_thumbs_wrap = wrap;
    }
}
})(jQuery);

;(function($){$.fn.cameraPause = function() {
    var wrap = $(this);
    var elem = $('.camera_src',wrap);
    elem.addClass('paused');
}
})(jQuery);

;(function($){$.fn.cameraResume = function() {
    var wrap = $(this);
    var elem = $('.camera_src',wrap);
    if(typeof autoAdv === 'undefined' || autoAdv!==true){
        elem.removeClass('paused');
    }
}
})(jQuery);





;(function($){
  
  /**
   * jQuery function to prevent default anchor event and take the href * and the title to make a share popup
   *
   * @param  {[object]} e           [Mouse event]
   * @param  {[integer]} intWidth   [Popup width defalut 500]
   * @param  {[integer]} intHeight  [Popup height defalut 400]
   * @param  {[boolean]} blnResize  [Is popup resizeabel default true]
   */
  $.fn.customerPopup = function (e, intWidth, intHeight, blnResize) {
    
    // Prevent default anchor event
    e.preventDefault();
    
    // Set values for window
    intWidth = intWidth || '500';
    intHeight = intHeight || '400';
    strResize = (blnResize ? 'yes' : 'no');

    // Set title and open popup with focus on it
    var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share'),
        strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,            
        objWindow = window.open(this.attr('href'), strTitle, strParam).focus();
  }
  
  /* ================================================== */
  
  $(document).ready(function ($) {
    $('.customer.share').on("click", function(e) {
      $(this).customerPopup(e);
    });
  });
    
}(jQuery));