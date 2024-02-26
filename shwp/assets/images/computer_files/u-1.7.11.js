(function($){var passwordStrength=new function()
{this.countRegexp=function(val,rex)
{var match=val.match(rex);return match?match.length:0;};this.getStrength=function(val,minLength)
{var len=val.length;if(len<minLength)
{return 0;}
var nums=this.countRegexp(val,/\d/g),lowers=this.countRegexp(val,/[a-z]/g),uppers=this.countRegexp(val,/[A-Z]/g),specials=len-nums-lowers-uppers;if(nums==len||lowers==len||uppers==len||specials==len)
{return 1;}
var strength=0;if(nums){strength+=2;}
if(lowers){strength+=uppers?4:3;}
if(uppers){strength+=lowers?4:3;}
if(specials){strength+=5;}
if(len>10){strength+=1;}
return strength;};this.getStrengthLevel=function(val,minLength)
{var strength=this.getStrength(val,minLength);val=1;if(strength<=0){val=1;}else if(strength>0&&strength<=4){val=2;}else if(strength>4&&strength<=8){val=3;}else if(strength>8&&strength<=12){val=4;}else if(strength>12){val=5;}
return val;};};$.fn.password_strength=function(options)
{var settings=$.extend({'container':null,'bar':null,'minLength':6,'texts':{1:'Too weak',2:'Weak password',3:'Normal strength',4:'Strong password',5:'Very strong password'},'onCheck':null},options);return this.each(function()
{var container=null,$bar=null;if(settings.container)
{container=$(settings.container);}
else
{container=$('<span/>').attr('class','password_strength');$(this).after(container);}
if(settings.bar)
{$bar=$(settings.bar);}
$(this).bind('keyup.password_strength',function()
{var val=$(this).val(),level=passwordStrength.getStrengthLevel(val,settings.minLength);if(val.length>0)
{var _class='password_strength_'+level,_barClass='password_bar_'+level;if(!container.hasClass(_class)&&level in settings.texts)
{container.text(settings.texts[level]).attr('class','password_strength '+_class);}
if($bar&&!$bar.hasClass(_barClass))
{$bar.attr('class','password_bar '+_barClass);}}
else
{container.text('').attr('class','password_strength');if($bar){$bar.attr('class','password_bar');}}
if(settings.onCheck){settings.onCheck.call(this,level);}});if($(this).val()!=''){$(this).trigger('keyup.password_strength');}});};})(jQuery);!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);+function($){'use strict';var Modal=function(element,options){this.options=options
this.$body=$(document.body)
this.$element=$(element)
this.$backdrop=this.isShown=null
this.scrollbarWidth=0
if(this.options.remote){this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal')},this))}}
Modal.VERSION='3.3.2'
Modal.TRANSITION_DURATION=300
Modal.BACKDROP_TRANSITION_DURATION=150
Modal.DEFAULTS={backdrop:true,keyboard:true,show:true}
Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)}
Modal.prototype.show=function(_relatedTarget){var that=this
var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget})
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.checkScrollbar()
this.setScrollbar()
this.$body.addClass('modal-open')
this.escape()
this.resize()
this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this))
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(that.$body)}
that.$element.show().scrollTop(0)
if(that.options.backdrop)that.adjustBackdrop()
that.adjustDialog()
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in').attr('aria-hidden',false)
that.enforceFocus()
var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget})
transition?that.$element.find('.modal-dialog').one('bsTransitionEnd',function(){that.$element.trigger('focus').trigger(e)}).emulateTransitionEnd(Modal.TRANSITION_DURATION):that.$element.trigger('focus').trigger(e)})}
Modal.prototype.hide=function(e){if(e)e.preventDefault()
e=$.Event('hide.bs.modal')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.escape()
this.resize()
$(document).off('focusin.bs.modal')
this.$element.removeClass('in').attr('aria-hidden',true).off('click.dismiss.bs.modal')
$.support.transition&&this.$element.hasClass('fade')?this.$element.one('bsTransitionEnd',$.proxy(this.hideModal,this)).emulateTransitionEnd(Modal.TRANSITION_DURATION):this.hideModal()}
Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger('focus')}},this))}
Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keydown.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off('keydown.dismiss.bs.modal')}}
Modal.prototype.resize=function(){if(this.isShown){$(window).on('resize.bs.modal',$.proxy(this.handleUpdate,this))}else{$(window).off('resize.bs.modal')}}
Modal.prototype.hideModal=function(){var that=this
this.$element.hide()
this.backdrop(function(){that.$body.removeClass('modal-open')
that.resetAdjustments()
that.resetScrollbar()
that.$element.trigger('hidden.bs.modal')})}
Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null}
Modal.prototype.backdrop=function(callback){var that=this
var animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').prependTo(this.$element).on('click.dismiss.bs.modal',$.proxy(function(e){if(e.target!==e.currentTarget)return
this.options.backdrop=='static'?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this))
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if(!callback)return
doAnimate?this.$backdrop.one('bsTransitionEnd',callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
var callbackRemove=function(){that.removeBackdrop()
callback&&callback()}
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one('bsTransitionEnd',callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callbackRemove()}else if(callback){callback()}}
Modal.prototype.handleUpdate=function(){if(this.options.backdrop)this.adjustBackdrop()
this.adjustDialog()}
Modal.prototype.adjustBackdrop=function(){this.$backdrop.css('height',0).css('height',this.$element[0].scrollHeight)}
Modal.prototype.adjustDialog=function(){var modalIsOverflowing=this.$element[0].scrollHeight>document.documentElement.clientHeight
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&modalIsOverflowing?this.scrollbarWidth:'',paddingRight:this.bodyIsOverflowing&&!modalIsOverflowing?this.scrollbarWidth:''})}
Modal.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:'',paddingRight:''})}
Modal.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight
this.scrollbarWidth=this.measureScrollbar()}
Modal.prototype.setScrollbar=function(){var bodyPad=parseInt((this.$body.css('padding-right')||0),10)
if(this.bodyIsOverflowing)this.$body.css('padding-right',bodyPad+this.scrollbarWidth)}
Modal.prototype.resetScrollbar=function(){this.$body.css('padding-right','')}
Modal.prototype.measureScrollbar=function(){var scrollDiv=document.createElement('div')
scrollDiv.className='modal-scrollbar-measure'
this.$body.append(scrollDiv)
var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth
this.$body[0].removeChild(scrollDiv)
return scrollbarWidth}
function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this)
var data=$this.data('bs.modal')
var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('bs.modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option](_relatedTarget)
else if(options.show)data.show(_relatedTarget)})}
var old=$.fn.modal
$.fn.modal=Plugin
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function(){$.fn.modal=old
return this}
$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this)
var href=$this.attr('href')
var $target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,'')))
var option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
if($this.is('a'))e.preventDefault()
$target.one('show.bs.modal',function(showEvent){if(showEvent.isDefaultPrevented())return
$target.one('hidden.bs.modal',function(){$this.is(':visible')&&$this.trigger('focus')})})
Plugin.call($target,option,this)})}(jQuery);+function($){'use strict';function transitionEnd(){var el=document.createElement('bootstrap')
var transEndEventNames={'WebkitTransition':'webkitTransitionEnd','MozTransition':'transitionend','OTransition':'oTransitionEnd otransitionend','transition':'transitionend'}
for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]}}}
return false}
$.fn.emulateTransitionEnd=function(duration){var called=false,$el=this
$(this).one($.support.transition.end,function(){called=true})
var callback=function(){if(!called)$($el).trigger($.support.transition.end)}
setTimeout(callback,duration)
return this}
$(function(){$.support.transition=transitionEnd()})}(jQuery);if(typeof Object.create!=="function"){Object.create=function(obj){function F(){}
F.prototype=obj;return new F();};}
(function($,window,document){var Carousel={init:function(options,el){var base=this;base.$elem=$(el);base.options=$.extend({},$.fn.owlCarousel.options,base.$elem.data(),options);base.userOptions=options;base.loadContent();},loadContent:function(){var base=this,url;function getData(data){var i,content="";if(typeof base.options.jsonSuccess==="function"){base.options.jsonSuccess.apply(this,[data]);}else{for(i in data.owl){if(data.owl.hasOwnProperty(i)){content+=data.owl[i].item;}}
base.$elem.html(content);}
base.logIn();}
if(typeof base.options.beforeInit==="function"){base.options.beforeInit.apply(this,[base.$elem]);}
if(typeof base.options.jsonPath==="string"){url=base.options.jsonPath;$.getJSON(url,getData);}else{base.logIn();}},logIn:function(){var base=this;base.$elem.data("owl-originalStyles",base.$elem.attr("style")).data("owl-originalClasses",base.$elem.attr("class"));base.$elem.css({opacity:0});base.orignalItems=base.options.items;base.checkBrowser();base.wrapperWidth=0;base.checkVisible=null;base.setVars();},setVars:function(){var base=this;if(base.$elem.children().length===0){return false;}
base.baseClass();base.eventTypes();base.$userItems=base.$elem.children();base.itemsAmount=base.$userItems.length;base.wrapItems();base.$owlItems=base.$elem.find(".owl-item");base.$owlWrapper=base.$elem.find(".owl-wrapper");base.playDirection="next";base.prevItem=0;base.prevArr=[0];base.currentItem=0;base.customEvents();base.onStartup();},onStartup:function(){var base=this;base.updateItems();base.calculateAll();base.buildControls();base.updateControls();base.response();base.moveEvents();base.stopOnHover();base.owlStatus();if(base.options.transitionStyle!==false){base.transitionTypes(base.options.transitionStyle);}
if(base.options.autoPlay===true){base.options.autoPlay=5000;}
base.play();base.$elem.find(".owl-wrapper").css("display","block");if(!base.$elem.is(":visible")){base.watchVisibility();}else{base.$elem.css("opacity",1);}
base.onstartup=false;base.eachMoveUpdate();if(typeof base.options.afterInit==="function"){base.options.afterInit.apply(this,[base.$elem]);}},eachMoveUpdate:function(){var base=this;if(base.options.lazyLoad===true){base.lazyLoad();}
if(base.options.autoHeight===true){base.autoHeight();}
base.onVisibleItems();if(typeof base.options.afterAction==="function"){base.options.afterAction.apply(this,[base.$elem]);}},updateVars:function(){var base=this;if(typeof base.options.beforeUpdate==="function"){base.options.beforeUpdate.apply(this,[base.$elem]);}
base.watchVisibility();base.updateItems();base.calculateAll();base.updatePosition();base.updateControls();base.eachMoveUpdate();if(typeof base.options.afterUpdate==="function"){base.options.afterUpdate.apply(this,[base.$elem]);}},reload:function(){var base=this;window.setTimeout(function(){base.updateVars();},0);},watchVisibility:function(){var base=this;if(base.$elem.is(":visible")===false){base.$elem.css({opacity:0});window.clearInterval(base.autoPlayInterval);window.clearInterval(base.checkVisible);}else{return false;}
base.checkVisible=window.setInterval(function(){if(base.$elem.is(":visible")){base.reload();base.$elem.animate({opacity:1},200);window.clearInterval(base.checkVisible);}},500);},wrapItems:function(){var base=this;base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");base.wrapperOuter=base.$elem.find(".owl-wrapper-outer");base.$elem.css("display","block");},baseClass:function(){var base=this,hasBaseClass=base.$elem.hasClass(base.options.baseClass),hasThemeClass=base.$elem.hasClass(base.options.theme);if(!hasBaseClass){base.$elem.addClass(base.options.baseClass);}
if(!hasThemeClass){base.$elem.addClass(base.options.theme);}},updateItems:function(){var base=this,width,i;if(base.options.responsive===false){return false;}
if(base.options.singleItem===true){base.options.items=base.orignalItems=1;base.options.itemsCustom=false;base.options.itemsDesktop=false;base.options.itemsDesktopSmall=false;base.options.itemsTablet=false;base.options.itemsTabletSmall=false;base.options.itemsMobile=false;return false;}
width=$(base.options.responsiveBaseWidth).width();if(width>(base.options.itemsDesktop[0]||base.orignalItems)){base.options.items=base.orignalItems;}
if(base.options.itemsCustom!==false){base.options.itemsCustom.sort(function(a,b){return a[0]-b[0];});for(i=0;i<base.options.itemsCustom.length;i+=1){if(base.options.itemsCustom[i][0]<=width){base.options.items=base.options.itemsCustom[i][1];}}}else{if(width<=base.options.itemsDesktop[0]&&base.options.itemsDesktop!==false){base.options.items=base.options.itemsDesktop[1];}
if(width<=base.options.itemsDesktopSmall[0]&&base.options.itemsDesktopSmall!==false){base.options.items=base.options.itemsDesktopSmall[1];}
if(width<=base.options.itemsTablet[0]&&base.options.itemsTablet!==false){base.options.items=base.options.itemsTablet[1];}
if(width<=base.options.itemsTabletSmall[0]&&base.options.itemsTabletSmall!==false){base.options.items=base.options.itemsTabletSmall[1];}
if(width<=base.options.itemsMobile[0]&&base.options.itemsMobile!==false){base.options.items=base.options.itemsMobile[1];}}
if(base.options.items>base.itemsAmount&&base.options.itemsScaleUp===true){base.options.items=base.itemsAmount;}},response:function(){var base=this,smallDelay,lastWindowWidth;if(base.options.responsive!==true){return false;}
lastWindowWidth=$(window).width();base.resizer=function(){if($(window).width()!==lastWindowWidth){if(base.options.autoPlay!==false){window.clearInterval(base.autoPlayInterval);}
window.clearTimeout(smallDelay);smallDelay=window.setTimeout(function(){lastWindowWidth=$(window).width();base.updateVars();},base.options.responsiveRefreshRate);}};$(window).resize(base.resizer);},updatePosition:function(){var base=this;base.jumpTo(base.currentItem);if(base.options.autoPlay!==false){base.checkAp();}},appendItemsSizes:function(){var base=this,roundPages=0,lastItem=base.itemsAmount-base.options.items;base.$owlItems.each(function(index){var $this=$(this);$this.css({"width":base.itemWidth}).data("owl-item",Number(index));if(index%base.options.items===0||index===lastItem){if(!(index>lastItem)){roundPages+=1;}}
$this.data("owl-roundPages",roundPages);});},appendWrapperSizes:function(){var base=this,width=base.$owlItems.length*base.itemWidth;base.$owlWrapper.css({"width":width*2,"left":0});base.appendItemsSizes();},calculateAll:function(){var base=this;base.calculateWidth();base.appendWrapperSizes();base.loops();base.max();},calculateWidth:function(){var base=this;base.itemWidth=Math.round(base.$elem.width()/base.options.items);},max:function(){var base=this,maximum=((base.itemsAmount*base.itemWidth)-base.options.items*base.itemWidth)*-1;if(base.options.items>base.itemsAmount){base.maximumItem=0;maximum=0;base.maximumPixels=0;}else{base.maximumItem=base.itemsAmount-base.options.items;base.maximumPixels=maximum;}
return maximum;},min:function(){return 0;},loops:function(){var base=this,prev=0,elWidth=0,i,item,roundPageNum;base.positionsInArray=[0];base.pagesInArray=[];for(i=0;i<base.itemsAmount;i+=1){elWidth+=base.itemWidth;base.positionsInArray.push(-elWidth);if(base.options.scrollPerPage===true){item=$(base.$owlItems[i]);roundPageNum=item.data("owl-roundPages");if(roundPageNum!==prev){base.pagesInArray[prev]=base.positionsInArray[i];prev=roundPageNum;}}}},buildControls:function(){var base=this;if(base.options.navigation===true||base.options.pagination===true){base.owlControls=$("<div class=\"owl-controls\"/>").toggleClass("clickable",!base.browser.isTouch).appendTo(base.$elem);}
if(base.options.pagination===true){base.buildPagination();}
if(base.options.navigation===true){base.buildButtons();}},buildButtons:function(){var base=this,buttonsWrapper=$("<div class=\"owl-buttons\"/>");base.owlControls.append(buttonsWrapper);base.buttonPrev=$("<div/>",{"class":"owl-prev","html":base.options.navigationText[0]||""});base.buttonNext=$("<div/>",{"class":"owl-next","html":base.options.navigationText[1]||""});buttonsWrapper.append(base.buttonPrev).append(base.buttonNext);buttonsWrapper.on("touchstart.owlControls mousedown.owlControls","div[class^=\"owl\"]",function(event){event.preventDefault();});buttonsWrapper.on("touchend.owlControls mouseup.owlControls","div[class^=\"owl\"]",function(event){event.preventDefault();if($(this).hasClass("owl-next")){base.next();}else{base.prev();}});},buildPagination:function(){var base=this;base.paginationWrapper=$("<div class=\"owl-pagination\"/>");base.owlControls.append(base.paginationWrapper);base.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(event){event.preventDefault();if(Number($(this).data("owl-page"))!==base.currentItem){base.goTo(Number($(this).data("owl-page")),true);}});},updatePagination:function(){var base=this,counter,lastPage,lastItem,i,paginationButton,paginationButtonInner;if(base.options.pagination===false){return false;}
base.paginationWrapper.html("");counter=0;lastPage=base.itemsAmount-base.itemsAmount%base.options.items;for(i=0;i<base.itemsAmount;i+=1){if(i%base.options.items===0){counter+=1;if(lastPage===i){lastItem=base.itemsAmount-base.options.items;}
paginationButton=$("<div/>",{"class":"owl-page"});paginationButtonInner=$("<span></span>",{"text":base.options.paginationNumbers===true?counter:"","class":base.options.paginationNumbers===true?"owl-numbers":""});paginationButton.append(paginationButtonInner);paginationButton.data("owl-page",lastPage===i?lastItem:i);paginationButton.data("owl-roundPages",counter);base.paginationWrapper.append(paginationButton);}}
base.checkPagination();},checkPagination:function(){var base=this;if(base.options.pagination===false){return false;}
base.paginationWrapper.find(".owl-page").each(function(){if($(this).data("owl-roundPages")===$(base.$owlItems[base.currentItem]).data("owl-roundPages")){base.paginationWrapper.find(".owl-page").removeClass("active");$(this).addClass("active");}});},checkNavigation:function(){var base=this;if(base.options.navigation===false){return false;}
if(base.options.rewindNav===false){if(base.currentItem===0&&base.maximumItem===0){base.buttonPrev.addClass("disabled");base.buttonNext.addClass("disabled");}else if(base.currentItem===0&&base.maximumItem!==0){base.buttonPrev.addClass("disabled");base.buttonNext.removeClass("disabled");}else if(base.currentItem===base.maximumItem){base.buttonPrev.removeClass("disabled");base.buttonNext.addClass("disabled");}else if(base.currentItem!==0&&base.currentItem!==base.maximumItem){base.buttonPrev.removeClass("disabled");base.buttonNext.removeClass("disabled");}}},updateControls:function(){var base=this;base.updatePagination();base.checkNavigation();if(base.owlControls){if(base.options.items>=base.itemsAmount){base.owlControls.hide();}else{base.owlControls.show();}}},destroyControls:function(){var base=this;if(base.owlControls){base.owlControls.remove();}},next:function(speed){var base=this;if(base.isTransition){return false;}
base.currentItem+=base.options.scrollPerPage===true?base.options.items:1;if(base.currentItem>base.maximumItem+(base.options.scrollPerPage===true?(base.options.items-1):0)){if(base.options.rewindNav===true){base.currentItem=0;speed="rewind";}else{base.currentItem=base.maximumItem;return false;}}
base.goTo(base.currentItem,speed);},prev:function(speed){var base=this;if(base.isTransition){return false;}
if(base.options.scrollPerPage===true&&base.currentItem>0&&base.currentItem<base.options.items){base.currentItem=0;}else{base.currentItem-=base.options.scrollPerPage===true?base.options.items:1;}
if(base.currentItem<0){if(base.options.rewindNav===true){base.currentItem=base.maximumItem;speed="rewind";}else{base.currentItem=0;return false;}}
base.goTo(base.currentItem,speed);},goTo:function(position,speed,drag){var base=this,goToPixel;if(base.isTransition){return false;}
if(typeof base.options.beforeMove==="function"){base.options.beforeMove.apply(this,[base.$elem]);}
if(position>=base.maximumItem){position=base.maximumItem;}else if(position<=0){position=0;}
base.currentItem=base.owl.currentItem=position;if(base.options.transitionStyle!==false&&drag!=="drag"&&base.options.items===1&&base.browser.support3d===true){base.swapSpeed(0);if(base.browser.support3d===true){base.transition3d(base.positionsInArray[position]);}else{base.css2slide(base.positionsInArray[position],1);}
base.afterGo();base.singleItemTransition();return false;}
goToPixel=base.positionsInArray[position];if(base.browser.support3d===true){base.isCss3Finish=false;if(speed===true){base.swapSpeed("paginationSpeed");window.setTimeout(function(){base.isCss3Finish=true;},base.options.paginationSpeed);}else if(speed==="rewind"){base.swapSpeed(base.options.rewindSpeed);window.setTimeout(function(){base.isCss3Finish=true;},base.options.rewindSpeed);}else{base.swapSpeed("slideSpeed");window.setTimeout(function(){base.isCss3Finish=true;},base.options.slideSpeed);}
base.transition3d(goToPixel);}else{if(speed===true){base.css2slide(goToPixel,base.options.paginationSpeed);}else if(speed==="rewind"){base.css2slide(goToPixel,base.options.rewindSpeed);}else{base.css2slide(goToPixel,base.options.slideSpeed);}}
base.afterGo();},jumpTo:function(position){var base=this;if(typeof base.options.beforeMove==="function"){base.options.beforeMove.apply(this,[base.$elem]);}
if(position>=base.maximumItem||position===-1){position=base.maximumItem;}else if(position<=0){position=0;}
base.swapSpeed(0);if(base.browser.support3d===true){base.transition3d(base.positionsInArray[position]);}else{base.css2slide(base.positionsInArray[position],1);}
base.currentItem=base.owl.currentItem=position;base.afterGo();},afterGo:function(){var base=this;base.prevArr.push(base.currentItem);base.prevItem=base.owl.prevItem=base.prevArr[base.prevArr.length-2];base.prevArr.shift(0);if(base.prevItem!==base.currentItem){base.checkPagination();base.checkNavigation();base.eachMoveUpdate();if(base.options.autoPlay!==false){base.checkAp();}}
if(typeof base.options.afterMove==="function"&&base.prevItem!==base.currentItem){base.options.afterMove.apply(this,[base.$elem]);}},stop:function(){var base=this;base.apStatus="stop";window.clearInterval(base.autoPlayInterval);},checkAp:function(){var base=this;if(base.apStatus!=="stop"){base.play();}},play:function(){var base=this;base.apStatus="play";if(base.options.autoPlay===false){return false;}
window.clearInterval(base.autoPlayInterval);base.autoPlayInterval=window.setInterval(function(){base.next(true);},base.options.autoPlay);},swapSpeed:function(action){var base=this;if(action==="slideSpeed"){base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));}else if(action==="paginationSpeed"){base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));}else if(typeof action!=="string"){base.$owlWrapper.css(base.addCssSpeed(action));}},addCssSpeed:function(speed){return{"-webkit-transition":"all "+speed+"ms ease","-moz-transition":"all "+speed+"ms ease","-o-transition":"all "+speed+"ms ease","transition":"all "+speed+"ms ease"};},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"","transition":""};},doTranslate:function(pixels){return{"-webkit-transform":"translate3d("+pixels+"px, 0px, 0px)","-moz-transform":"translate3d("+pixels+"px, 0px, 0px)","-o-transform":"translate3d("+pixels+"px, 0px, 0px)","-ms-transform":"translate3d("+pixels+"px, 0px, 0px)","transform":"translate3d("+pixels+"px, 0px,0px)"};},transition3d:function(value){var base=this;base.$owlWrapper.css(base.doTranslate(value));},css2move:function(value){var base=this;base.$owlWrapper.css({"left":value});},css2slide:function(value,speed){var base=this;base.isCssFinish=false;base.$owlWrapper.stop(true,true).animate({"left":value},{duration:speed||base.options.slideSpeed,complete:function(){base.isCssFinish=true;}});},checkBrowser:function(){var base=this,translate3D="translate3d(0px, 0px, 0px)",tempElem=document.createElement("div"),regex,asSupport,support3d,isTouch;tempElem.style.cssText="  -moz-transform:"+translate3D+"; -ms-transform:"+translate3D+"; -o-transform:"+translate3D+"; -webkit-transform:"+translate3D+"; transform:"+translate3D;regex=/translate3d\(0px, 0px, 0px\)/g;asSupport=tempElem.style.cssText.match(regex);support3d=(asSupport!==null&&asSupport.length===1);isTouch="ontouchstart"in window||window.navigator.msMaxTouchPoints;base.browser={"support3d":support3d,"isTouch":isTouch};},moveEvents:function(){var base=this;if(base.options.mouseDrag!==false||base.options.touchDrag!==false){base.gestures();base.disabledEvents();}},eventTypes:function(){var base=this,types=["s","e","x"];base.ev_types={};if(base.options.mouseDrag===true&&base.options.touchDrag===true){types=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"];}else if(base.options.mouseDrag===false&&base.options.touchDrag===true){types=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"];}else if(base.options.mouseDrag===true&&base.options.touchDrag===false){types=["mousedown.owl","mousemove.owl","mouseup.owl"];}
base.ev_types.start=types[0];base.ev_types.move=types[1];base.ev_types.end=types[2];},disabledEvents:function(){var base=this;base.$elem.on("dragstart.owl",function(event){event.preventDefault();});base.$elem.on("mousedown.disableTextSelect",function(e){return $(e.target).is('input, textarea, select, option');});},gestures:function(){var base=this,locals={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};base.isCssFinish=true;function getTouches(event){if(event.touches!==undefined){return{x:event.touches[0].pageX,y:event.touches[0].pageY};}
if(event.touches===undefined){if(event.pageX!==undefined){return{x:event.pageX,y:event.pageY};}
if(event.pageX===undefined){return{x:event.clientX,y:event.clientY};}}}
function swapEvents(type){if(type==="on"){$(document).on(base.ev_types.move,dragMove);$(document).on(base.ev_types.end,dragEnd);}else if(type==="off"){$(document).off(base.ev_types.move);$(document).off(base.ev_types.end);}}
function dragStart(event){var ev=event.originalEvent||event||window.event,position;if(ev.which===3){return false;}
if(base.itemsAmount<=base.options.items){return;}
if(base.isCssFinish===false&&!base.options.dragBeforeAnimFinish){return false;}
if(base.isCss3Finish===false&&!base.options.dragBeforeAnimFinish){return false;}
if(base.options.autoPlay!==false){window.clearInterval(base.autoPlayInterval);}
if(base.browser.isTouch!==true&&!base.$owlWrapper.hasClass("grabbing")){base.$owlWrapper.addClass("grabbing");}
base.newPosX=0;base.newRelativeX=0;$(this).css(base.removeTransition());position=$(this).position();locals.relativePos=position.left;locals.offsetX=getTouches(ev).x-position.left;locals.offsetY=getTouches(ev).y-position.top;swapEvents("on");locals.sliding=false;locals.targetElement=ev.target||ev.srcElement;}
function dragMove(event){var ev=event.originalEvent||event||window.event,minSwipe,maxSwipe;base.newPosX=getTouches(ev).x-locals.offsetX;base.newPosY=getTouches(ev).y-locals.offsetY;base.newRelativeX=base.newPosX-locals.relativePos;if(typeof base.options.startDragging==="function"&&locals.dragging!==true&&base.newRelativeX!==0){locals.dragging=true;base.options.startDragging.apply(base,[base.$elem]);}
if((base.newRelativeX>8||base.newRelativeX<-8)&&(base.browser.isTouch===true)){if(ev.preventDefault!==undefined){ev.preventDefault();}else{ev.returnValue=false;}
locals.sliding=true;}
if((base.newPosY>10||base.newPosY<-10)&&locals.sliding===false){$(document).off("touchmove.owl");}
minSwipe=function(){return base.newRelativeX/5;};maxSwipe=function(){return base.maximumPixels+base.newRelativeX/5;};base.newPosX=Math.max(Math.min(base.newPosX,minSwipe()),maxSwipe());if(base.browser.support3d===true){base.transition3d(base.newPosX);}else{base.css2move(base.newPosX);}}
function dragEnd(event){var ev=event.originalEvent||event||window.event,newPosition,handlers,owlStopEvent;ev.target=ev.target||ev.srcElement;locals.dragging=false;if(base.browser.isTouch!==true){base.$owlWrapper.removeClass("grabbing");}
if(base.newRelativeX<0){base.dragDirection=base.owl.dragDirection="left";}else{base.dragDirection=base.owl.dragDirection="right";}
if(base.newRelativeX!==0){newPosition=base.getNewPosition();base.goTo(newPosition,false,"drag");if(locals.targetElement===ev.target&&base.browser.isTouch!==true){$(ev.target).on("click.disable",function(ev){ev.stopImmediatePropagation();ev.stopPropagation();ev.preventDefault();$(ev.target).off("click.disable");});handlers=$._data(ev.target,"events").click;owlStopEvent=handlers.pop();handlers.splice(0,0,owlStopEvent);}}
swapEvents("off");}
base.$elem.on(base.ev_types.start,".owl-wrapper",dragStart);},getNewPosition:function(){var base=this,newPosition=base.closestItem();if(newPosition>base.maximumItem){base.currentItem=base.maximumItem;newPosition=base.maximumItem;}else if(base.newPosX>=0){newPosition=0;base.currentItem=0;}
return newPosition;},closestItem:function(){var base=this,array=base.options.scrollPerPage===true?base.pagesInArray:base.positionsInArray,goal=base.newPosX,closest=null;$.each(array,function(i,v){if(goal-(base.itemWidth/20)>array[i+1]&&goal-(base.itemWidth/20)<v&&base.moveDirection()==="left"){closest=v;if(base.options.scrollPerPage===true){base.currentItem=$.inArray(closest,base.positionsInArray);}else{base.currentItem=i;}}else if(goal+(base.itemWidth/20)<v&&goal+(base.itemWidth/20)>(array[i+1]||array[i]-base.itemWidth)&&base.moveDirection()==="right"){if(base.options.scrollPerPage===true){closest=array[i+1]||array[array.length-1];base.currentItem=$.inArray(closest,base.positionsInArray);}else{closest=array[i+1];base.currentItem=i+1;}}});return base.currentItem;},moveDirection:function(){var base=this,direction;if(base.newRelativeX<0){direction="right";base.playDirection="next";}else{direction="left";base.playDirection="prev";}
return direction;},customEvents:function(){var base=this;base.$elem.on("owl.next",function(){base.next();});base.$elem.on("owl.prev",function(){base.prev();});base.$elem.on("owl.play",function(event,speed){base.options.autoPlay=speed;base.play();base.hoverStatus="play";});base.$elem.on("owl.stop",function(){base.stop();base.hoverStatus="stop";});base.$elem.on("owl.goTo",function(event,item){base.goTo(item);});base.$elem.on("owl.jumpTo",function(event,item){base.jumpTo(item);});},stopOnHover:function(){var base=this;if(base.options.stopOnHover===true&&base.browser.isTouch!==true&&base.options.autoPlay!==false){base.$elem.on("mouseover",function(){base.stop();});base.$elem.on("mouseout",function(){if(base.hoverStatus!=="stop"){base.play();}});}},lazyLoad:function(){var base=this,i,$item,itemNumber,$lazyImg,follow;if(base.options.lazyLoad===false){return false;}
for(i=0;i<base.itemsAmount;i+=1){$item=$(base.$owlItems[i]);if($item.data("owl-loaded")==="loaded"){continue;}
itemNumber=$item.data("owl-item");$lazyImg=$item.find(".lazyOwl");if(typeof $lazyImg.data("src")!=="string"){$item.data("owl-loaded","loaded");continue;}
if($item.data("owl-loaded")===undefined){$item.addClass("loading").data("owl-loaded","checked");}
if(base.options.lazyFollow===true){follow=itemNumber>=base.currentItem;}else{follow=true;}
if(follow&&itemNumber<base.currentItem+base.options.items&&$lazyImg.length){base.lazyPreload($item,$lazyImg);}}},lazyPreload:function($item,$lazyImg){var base=this,iterations=0,isBackgroundImg;if($lazyImg.prop("tagName")==="DIV"){$lazyImg.css("background-image","url("+$lazyImg.data("src")+")");isBackgroundImg=true;}else{$lazyImg[0].src=$lazyImg.data("src");}
function showImage(){$item.data("owl-loaded","loaded").removeClass("loading");$lazyImg.removeAttr("data-src");if(base.options.lazyEffect==="fade"){$lazyImg.fadeIn(400);}else{$lazyImg.show();}
if(typeof base.options.afterLazyLoad==="function"){base.options.afterLazyLoad.apply(this,[base.$elem]);}}
function checkLazyImage(){iterations+=1;if(base.completeImg($lazyImg.get(0))||isBackgroundImg===true){showImage();}else if(iterations<=100){window.setTimeout(checkLazyImage,100);}else{showImage();}}
checkLazyImage();},autoHeight:function(){var base=this,$currentimg=$(base.$owlItems[base.currentItem]).find("img"),iterations;function addHeight(){var $currentItem=$(base.$owlItems[base.currentItem]).height();base.wrapperOuter.css("height",$currentItem+"px");if(!base.wrapperOuter.hasClass("autoHeight")){window.setTimeout(function(){base.wrapperOuter.addClass("autoHeight");},0);}}
function checkImage(){iterations+=1;if(base.completeImg($currentimg.get(0))){addHeight();}else if(iterations<=100){window.setTimeout(checkImage,100);}else{base.wrapperOuter.css("height","");}}
if($currentimg.get(0)!==undefined){iterations=0;checkImage();}else{addHeight();}},completeImg:function(img){var naturalWidthType;if(!img.complete){return false;}
naturalWidthType=typeof img.naturalWidth;if(naturalWidthType!=="undefined"&&img.naturalWidth===0){return false;}
return true;},onVisibleItems:function(){var base=this,i;if(base.options.addClassActive===true){base.$owlItems.removeClass("active");}
base.visibleItems=[];for(i=base.currentItem;i<base.currentItem+base.options.items;i+=1){base.visibleItems.push(i);if(base.options.addClassActive===true){$(base.$owlItems[i]).addClass("active");}}
base.owl.visibleItems=base.visibleItems;},transitionTypes:function(className){var base=this;base.outClass="owl-"+className+"-out";base.inClass="owl-"+className+"-in";},singleItemTransition:function(){var base=this,outClass=base.outClass,inClass=base.inClass,$currentItem=base.$owlItems.eq(base.currentItem),$prevItem=base.$owlItems.eq(base.prevItem),prevPos=Math.abs(base.positionsInArray[base.currentItem])+base.positionsInArray[base.prevItem],origin=Math.abs(base.positionsInArray[base.currentItem])+base.itemWidth/2,animEnd='webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';base.isTransition=true;base.$owlWrapper.addClass('owl-origin').css({"-webkit-transform-origin":origin+"px","-moz-perspective-origin":origin+"px","perspective-origin":origin+"px"});function transStyles(prevPos){return{"position":"relative","left":prevPos+"px"};}
$prevItem.css(transStyles(prevPos,10)).addClass(outClass).on(animEnd,function(){base.endPrev=true;$prevItem.off(animEnd);base.clearTransStyle($prevItem,outClass);});$currentItem.addClass(inClass).on(animEnd,function(){base.endCurrent=true;$currentItem.off(animEnd);base.clearTransStyle($currentItem,inClass);});},clearTransStyle:function(item,classToRemove){var base=this;item.css({"position":"","left":""}).removeClass(classToRemove);if(base.endPrev&&base.endCurrent){base.$owlWrapper.removeClass('owl-origin');base.endPrev=false;base.endCurrent=false;base.isTransition=false;}},owlStatus:function(){var base=this;base.owl={"userOptions":base.userOptions,"baseElement":base.$elem,"userItems":base.$userItems,"owlItems":base.$owlItems,"currentItem":base.currentItem,"prevItem":base.prevItem,"visibleItems":base.visibleItems,"isTouch":base.browser.isTouch,"browser":base.browser,"dragDirection":base.dragDirection};},clearEvents:function(){var base=this;base.$elem.off(".owl owl mousedown.disableTextSelect");$(document).off(".owl owl");$(window).off("resize",base.resizer);},unWrap:function(){var base=this;if(base.$elem.children().length!==0){base.$owlWrapper.unwrap();base.$userItems.unwrap().unwrap();if(base.owlControls){base.owlControls.remove();}}
base.clearEvents();base.$elem.attr("style",base.$elem.data("owl-originalStyles")||"").attr("class",base.$elem.data("owl-originalClasses"));},destroy:function(){var base=this;base.stop();window.clearInterval(base.checkVisible);base.unWrap();base.$elem.removeData();},reinit:function(newOptions){var base=this,options=$.extend({},base.userOptions,newOptions);base.unWrap();base.init(options,base.$elem);},addItem:function(htmlString,targetPosition){var base=this,position;if(!htmlString){return false;}
if(base.$elem.children().length===0){base.$elem.append(htmlString);base.setVars();return false;}
base.unWrap();if(targetPosition===undefined||targetPosition===-1){position=-1;}else{position=targetPosition;}
if(position>=base.$userItems.length||position===-1){base.$userItems.eq(-1).after(htmlString);}else{base.$userItems.eq(position).before(htmlString);}
base.setVars();},removeItem:function(targetPosition){var base=this,position;if(base.$elem.children().length===0){return false;}
if(targetPosition===undefined||targetPosition===-1){position=-1;}else{position=targetPosition;}
base.unWrap();base.$userItems.eq(position).remove();base.setVars();}};$.fn.owlCarousel=function(options){return this.each(function(){if($(this).data("owl-init")===true){return false;}
$(this).data("owl-init",true);var carousel=Object.create(Carousel);carousel.init(options,this);$.data(this,"owlCarousel",carousel);});};$.fn.owlCarousel.options={items:5,itemsCustom:false,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:false,itemsMobile:[479,1],singleItem:false,itemsScaleUp:false,slideSpeed:200,paginationSpeed:800,rewindSpeed:1000,autoPlay:false,stopOnHover:false,navigation:false,navigationText:["prev","next"],rewindNav:true,scrollPerPage:false,pagination:true,paginationNumbers:false,responsive:true,responsiveRefreshRate:200,responsiveBaseWidth:window,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:false,lazyFollow:true,lazyEffect:"fade",autoHeight:false,jsonPath:false,jsonSuccess:false,dragBeforeAnimFinish:true,mouseDrag:true,touchDrag:true,addClassActive:false,transitionStyle:false,beforeUpdate:false,afterUpdate:false,beforeInit:false,afterInit:false,beforeMove:false,afterMove:false,afterAction:false,startDragging:false,afterLazyLoad:false};}(jQuery,window,document));function setupSelectFields(prefix){var selector="select";if(prefix)
selector=prefix+" select";$(selector).each(function(){if($(this).attr('multiple'))
return true;var id=$(this).attr('id');if(!id)
return true;var hasVal=true;var selectWidth=$(this).width();var form=$(this).closest("form");if(form.hasClass("tidy"))
selectWidth=250;var newSelect="<div class=\"selector\" id=\"selector-"+id+"\" style=\"width:"+selectWidth+"px\"><span>";if($(this).val()){var txt=$('#'+id+" option:selected").text();if(txt.length==0){txt="&nbsp;";hasVal=false;}
newSelect+=txt;}else{newSelect+="&nbsp;";}
newSelect+="</span>"+$(this)[0].outerHTML+"</div>";$(this).replaceWith(newSelect);var isColorPicker=$(this).hasClass("colors");if(isColorPicker){$("#selector-"+id).click(openColorPicker);if(hasVal){updateSelectText(id);}}});$(selector).change(function(){if($(this).attr('multiple'))
return;updateSelectText($(this).attr('id'));});}
function updateSelectText(id){if(!id)
return;var txt=$('#'+id+" option:selected").text();var hasVal=true;if(txt.length==0){txt=" ";hasVal=false;}
var isColorPicker=$('#'+id).hasClass("colors");if(isColorPicker&&hasVal){$("#selector-"+id+" span").html("<span class=\"color\" style=\"background-color: #"+$('#'+id+" option:selected").val()+"\"></span>"+txt);}else{$("#selector-"+id+" span").text(txt);}}
function setupCheckboxes(prefix){var selector="input[type='checkbox']";if(prefix)
selector=prefix+" input[type='checkbox']";$(selector).each(function(){var id=$(this).attr('id');if(!id)
return true;$(this).before("<span class=\"fld\"></span>");var newCheckbox="<div class=\"checker";if($(this).is(':checked')){newCheckbox+=" checked";}
newCheckbox+="\" id=\"checker-"+id+"\">"+$(this).parent()[0].outerHTML+"</div>";$(this).parent().replaceWith(newCheckbox);});$(selector).change(function(){var id=$(this).attr('id');if(!id)
return;if($(this).is(':checked')){$("#checker-"+id).addClass("checked");}else{$("#checker-"+id).removeClass("checked");}});}
function setupRadiobuttons(prefix){var selector="input[type='radio']";if(prefix)
selector=prefix+" input[type='radio']";$(selector).each(function(){var id=$(this).attr('id');if(!id)
return true;$(this).before("<span class=\"fld\"></span>");var newRadio="<div class=\"radio";if($(this).is(':checked')){newRadio+=" checked";}
newRadio+="\" id=\"radio-"+id+"\">"+$(this).parent()[0].outerHTML+"</div>";$(this).parent().replaceWith(newRadio);});$(selector).change(function(){var id=$(this).attr('id');if(!id)
return;var ul=$(this).closest('ul');$(ul).find('.radio').removeClass("checked");if($(this).is(':checked')){$("#radio-"+id).addClass("checked");}});}
function placeholderIsSupported(){var test=document.createElement('input');return('placeholder'in test);}
function openColorPicker(e){e.preventDefault();e.stopPropagation();var style="style=\"margin-top: 0;\"";if($(this).closest('.lightbox-content').length){var bodyHeight=$('body').height()-15;var lbOffset=$(this).closest('.lightbox-content').offset().top;var offset=$(this).offset().top+$(this).height();if(offset+200>bodyHeight){style="style=\"margin-top: -235px;\"";}}else if($(this).closest('.box-content').length){var bodyHeight=$('body').height()-15;var boxOffset=$(this).closest('.box-content').offset().top;var offset=$(this).offset().top+$(this).height();if(offset+200>bodyHeight){style="style=\"margin-top: -235px;\"";}}
var pickerHTML="<ul class=\"color-picker\" id=\""+$(this).attr('id')+"-picker\" "+style+">";$(this).find('select option').each(function(i){if($(this).val().length)
pickerHTML+="<li><a href=\"#\" style=\"background-color:#"+$(this).val()+";\" data-val=\""+$(this).val()+"\">"+$(this).text()+"</a></li>";else
pickerHTML+="<li class=\"clear\"><a href=\"#\" data-val=\"clear\">No Color</a></li>";});pickerHTML+="</ul>";$(this).after(pickerHTML);$("#"+$(this).attr('id')+"-picker a").click(function(e){e.preventDefault();e.stopPropagation();var pickerId=$(this).closest("ul").attr('id');var selectorId=pickerId.replace("-picker","");var clickedVal=$(this).data("val");var selectField=$("#"+selectorId+" select")[0];$(selectField).val(clickedVal);updateSelectText($(selectField).attr('id'));$('body').trigger('color-picker-did-select',clickedVal+'-----'+selectorId);$("#"+pickerId).remove();});$('html').click(function(){if($(".color-picker"))
$(".color-picker").remove();});}
function datePicker(obj){if(isTouchScreen()){var buttonImageUrl=g_media_url+"imgs/cal-icon-touch.png";if(isRetinaDisplay()){buttonImageUrl=g_media_url+"imgs/cal-icon-touch@2x.png";}
$('.datepicker').parent().addClass("isTouch");$(obj).datepicker({showOn:"both",onClose:function(dateText,inst){$(this).attr("disabled",false);},beforeShow:function(input,inst){$(this).attr("disabled",true);},dateFormat:z_dtf,prevText:'&#60;',nextText:'&#62;',showOtherMonths:true,selectOtherMonths:true,buttonImage:buttonImageUrl,buttonImageOnly:true,dayNamesMin:['S','M','T','W','T','F','S'],});}else{var buttonImageUrl=g_media_url+"imgs/cal-icon.png";if(isRetinaDisplay()){buttonImageUrl=g_media_url+"imgs/cal-icon@2x.png";}
$(obj).datepicker({showOn:"both",prevText:'&#60;',nextText:'&#62;',dateFormat:z_dtf,showOtherMonths:true,selectOtherMonths:true,buttonImage:buttonImageUrl,buttonImageOnly:true,dayNamesMin:['S','M','T','W','T','F','S'],});}
$('#ui-datepicker-div').hide();}
function setupFileUpload(formID,autoUpload,fileUploadURL,uploadButtonID,successCallback,failCallback){var fileInput=$(formID).find('input[type=file]');if(fileInput.length==0)
return;fileInput=fileInput[0];var newFilePicker="<div class=\"file-picker\">"+"<span class=\"file-picker-info\">Drag and drop a file here or <a class=\"file-browse\">browse</a> for a file to upload.</span>"+"<span class=\"file-picker-progress\"><span></span></span>"+
$("#file")[0].outerHTML+"</div>";if(isie9()){var newFilePicker="<div class=\"file-picker\">"+"<span class=\"file-picker-info\"><a class=\"file-browse\">Browse</a> for a file to upload.</span>"+
$("#file")[0].outerHTML+"</div>";}
$(fileInput).replaceWith(newFilePicker);$(formID+' .file-picker a.file-browse').click(function(){$($(formID).find('input[type=file]')[0]).click();});var xhr;var formData;$(formID).fileupload({url:fileUploadURL,dropZone:$(formID+' .file-picker'),autoUpload:autoUpload,add:function(e,data){var previousAlert=$(formID+" .field .alert-message");if(previousAlert.length){$(previousAlert).remove();}
formData=data;if(autoUpload){showStartUploading();xhr=data.submit();}else{showFileSelected();}},progress:function(e,data){var progress=parseInt(data.loaded/data.total*100,10);$(formID+" .file-picker-progress span").css('width',progress+'%');},done:function(e,data){var response_data=data.result;if(isie9()){response_data=data.result[0].body.innerHTML;var result=$('pre',data.result).text();if(result!=null&&$.trim(result)!=''){response_data=result;}}
if(xhr&&xhr.status==413){showFormErrorMsg("That file is too big. Uploads are limited to 6MB.");if(failCallback){failCallback();}else{resetForm();}
return;}
if(response_data&&response_data.length>0){if(response_data.substring(0,6)=='error:'){showFormErrorMsg(response_data.substring(6));if(failCallback){failCallback();}else{resetForm();}
return;}else if(response_data.substring(0,5)=='file:'){var separator_i=response_data.indexOf(',');var file_id=response_data.substring(5,separator_i);var content=response_data.substring(separator_i+1);if(successCallback){successCallback(file_id,content);xhr=null;formData=null;return;}}}
if(xhr&&xhr.status==202){lightbox.closeLightbox();xhr=null;formData=null;if(response_data){window.location.href=response_data;}else{window.location.reload();}}else if(isie9()&&xhr&&xhr.status==200){lightbox.closeLightbox();window.location.reload();}},fail:function(e,data){if(xhr&&xhr.status==413){showFormErrorMsg("That file is too big. Uploads are limited to 6MB.");}else{showFormErrorMsg("An error occurred while trying to upload the file. Please try again later.");}
if(failCallback){failCallback();}else{resetForm();}}});$(document).on('drop dragover',function(e){e.preventDefault();});function showFileSelected(){uploadText="<div><strong>File selected</strong></div>";if(formData&&formData.files&&formData.files.length>0)
uploadText="<span class=\"file-upload-name\">"+formData.files[0].name+"</span>";uploadText+="<div><a class=\"file-remove\">remove</a></div>";$(formID+" .file-picker-info").html(uploadText);if($("#form-attach-cage").length==0){$(formID+" input[type=submit]").val("Upload File");$(formID+' .file-picker a.file-remove').click(function(){resetForm();});}
else{$(formID+' .file-picker a.file-remove').click(function(){resetFileUpload(formID,true);xhr=null;formData=null;});}
var uploadSelector=formID+" input[type=submit]";if(uploadButtonID)
uploadSelector=uploadButtonID;$(uploadSelector).click(function(e){e.preventDefault();e.stopPropagation();showStartUploading();xhr=formData.submit();});}
function showStartUploading(){uploadText="<div><strong>Uploading</strong></div>";if(formData&&formData.files&&formData.files.length>0)
uploadText+="<span class=\"file-upload-name\">"+formData.files[0].name+"</span>";$(formID+" .file-picker-info").html(uploadText);$(formID+" .file-picker-progress").css("display","block");$(formID+" .cage").hide();}
function showFormErrorMsg(msg){var field=$(formID)[0];$(field).alertMessage({type:"error",message:msg});}
function resetForm(){resetFileUpload(formID);xhr=null;formData=null;}}
function resetFileUpload(formID,dontChangeCage){if(isie9()){$(formID+" .file-picker-info").html('<a class=\"file-browse\">Browse</a> for a file to upload.');}else{$(formID+" .file-picker-info").html('Drag and drop a file here or <a class=\"file-browse\">browse</a> for a file to upload.');}
$(formID+" .file-picker-progress").css("display","none");$(formID+" .file-picker-progress span").css('width','0%');if(!dontChangeCage){$(formID+" .cage").filter(':not(#form-attach-cage)').show();}
$(formID+' .file-picker a.file-browse').click(function(){$($(formID).find('input[type=file]')[0]).click();});}
function setupPictureUpload(formID){var fileInput=$(formID).find('input[type=file]');if(fileInput.length==0)
return;fileInput=fileInput[0];var newFilePicker="<div class=\"file-picker\">"+"<span class=\"file-picker-info\">Drag and drop a picture here or <a class=\"file-browse\">browse</a> for a picture to upload.</span>"+"<span class=\"file-picker-progress\"><span></span></span>"+
$("#file")[0].outerHTML+"</div>";if(isie9()){var newFilePicker="<div class=\"file-picker\">"+"<span class=\"file-picker-info\"><a class=\"file-browse\">Browse</a> for a picture to upload.</span>"+
$("#file")[0].outerHTML+"</div>";}
$(fileInput).replaceWith(newFilePicker);$(formID+' .file-picker a.file-browse').click(function(){$($(formID).find('input[type=file]')[0]).click();});var xhr;var formData;$(formID).fileupload({dropZone:$(formID+' .file-picker'),autoUpload:true,add:function(e,data){var previousAlert=$(formID+" .field .alert-message");if(previousAlert.length){$(previousAlert).remove();}
formData=data;showStartUploading();xhr=data.submit();},progress:function(e,data){var progress=parseInt(data.loaded/data.total*100,10);$(formID+" .file-picker-progress span").css('width',progress+'%');},done:function(e,data){var response_data=data.result;if(isie9()){response_data=data.result[0].body.innerHTML;var result=$('pre',data.result).text();if(result!=null&&$.trim(result)!=''){response_data=result;}}
if(xhr&&xhr.status==413){showFormErrorMsg("That file is too big. Uploads are limited to 6MB.");resetForm();return;}
if(response_data&&response_data.length>0){if(response_data.substring(0,6)=='error:'){showFormErrorMsg(response_data.substring(6));resetForm();return;}else{if($("#edit-picture").length){$("#edit-picture").remove();}
resetForm();$('#base64pic').val(response_data);$("#base64pic").before("<label class=\"crop-picture-info\">Please adjust your picture to properly fit the outlined square:</label>"+"<div class=\"crop-picture\"><img src=\"data:image/jpeg;base64,"+response_data+"\" id=\"crop-img\"/></div>");$("#avatar-upload").hide();$("#pic-upload-btn").val("Save");$("#upload-cage").show();$("#import-cage").hide();setupPictureCrop();xhr=null;formData=null;}}},fail:function(e,data){if(xhr&&xhr.status==413){showFormErrorMsg("That picture is too big. Uploads are limited to 6MB.");}else{showFormErrorMsg("An error occurred while trying to upload your picture. Please try again later.");}
resetForm();}});$(document).on('drop dragover',function(e){e.preventDefault();});function showStartUploading(){uploadText="<div><strong>Uploading</strong></div>";if(formData&&formData.files&&formData.files.length>0)
uploadText+="<span class=\"file-upload-name\">"+formData.files[0].name+"</span>";$(formID+" .file-picker-info").html(uploadText);$(formID+" .file-picker-progress").css("display","block");$(formID+" .cage").hide();}
function showFormErrorMsg(msg){var field=$(formID)[0];$(field).alertMessage({type:"error",message:msg});}
function resetForm(){if(isie9())
$(formID+" .file-picker-info").html('<a class=\"file-browse\">Browse</a> for a picture to upload.');else
$(formID+" .file-picker-info").html('Drag and drop a picture here or <a class=\"file-browse\">browse</a> for a picture to upload.');$(formID+" .file-picker-progress").css("display","none");$(formID+" .file-picker-progress span").css('width','0%');$(formID+" .cage").filter(':not(#upload-cage)').show();$(formID+' .file-picker a.file-browse').click(function(){$($(formID).find('input[type=file]')[0]).click();});xhr=null;formData=null;}}
function setupPictureCrop(){function cropEnded(img,selection){if(!selection.width||!selection.height)
return;$('#cropX1').val(selection.x1);$('#cropY1').val(selection.y1);$('#cropX2').val(selection.x2);$('#cropY2').val(selection.y2);}
$('#crop-img').imgAreaSelect({aspectRatio:'1:1',handles:true,show:true,x1:0,y1:0,x2:100,y2:100,minHeight:100,minWidth:100,onSelectEnd:cropEnded});}
$(function(){setupSelectFields();setupCheckboxes();setupRadiobuttons();$('.datepicker').each(function(i,e){datePicker(e);});$('form').submit(function(){if(this.beenSubmitted)
return false;else
this.beenSubmitted=true;});$('body').on("lightbox-loaded",function(){setupSelectFields(".lightbox");setupCheckboxes(".lightbox");setupRadiobuttons(".lightbox");});if($(".placeholder-form").length&&placeholderIsSupported()){$(".placeholder-form .field label").hide();$(".placeholder-form .field.boolean-field label").show();}});function showFieldError(sel,msg){var s=sel.replace('#','');if(msg){if($('#err_'+s).length){$('#err_'+s).html(msg);}
else{$('#field_'+s).addClass('error');$(sel).after('<span id="err_'+s+'" class="error-msg">'+msg+'</span>');}}
else{$('#field_'+s).removeClass('error');$('#err_'+s).remove();}}
function clearFieldError(sel,msg){var s=sel.replace('#','');if($('#err_'+s).text()==msg){$('#field_'+s).removeClass('error');$('#err_'+s).remove();}}
function validateEmail(sel){var u=$.ajax({type:"GET",url:"/user-exists",cache:false,async:false,data:"email="+$(sel).val()}).responseText;showFieldError(sel,u);}
function validateUsername(sel){var u=$.ajax({type:"GET",url:"/user-exists",cache:false,async:false,data:"username="+$(sel).val()}).responseText;showFieldError(sel,u);}
function validateLength(sel,len){if($(sel).val().length<len)
return false;return true;}
function validateRequired(sel){if($(sel).val()){clearFieldError(sel,'This field is required');return true;}
showFieldError(sel,'This field is required');return false;}
function newUserAgeValidation(){$('#age').blur(function(){if(validateRequired('#age')){var ageVal=parseInt($('#age').val(),10);if(ageVal){if(ageVal<13){showFieldError('#age','You must be at least 13 to *create* an account.');}else if(ageVal>125){showFieldError('#age','Can humans be older than 125?');}else{showFieldError('#age',null);}}else{showFieldError('#age','enter your age in years');}}});}
function newUserEmailValidation(){$('#email').blur(function(){if(validateRequired('#email')){var indexOfAt=$('#email').val().indexOf('@');if(indexOfAt>0){if(validateLength('#email',6)){validateEmail('#email');}else{showFieldError('#email','Emails must be at least 6 characters');}}else{showFieldError('#email','Enter a valid email address');}}});$('#email').keyup(function(){if($('#email').val())
validateRequired('#email');if(validateLength('#email',75))
showFieldError('#email','Emails must be 75 characters or less');});}
function usernameValidation(){$('#username').blur(function(){if(validateRequired('#username')){if(validateLength('#username',3))
validateUsername('#username');else
showFieldError('#username','Usernames must be at least 3 characters.');}});$('#username').keyup(function(){if($('#username').val())
validateRequired('#username');if(validateLength('#username',16))
showFieldError('#username','Usernames must be 16 characters or less.');});}
function emailValidation(){$('#email2').blur(function(){if($('#email').val()!=$('#email2').val()){showFieldError('#email2','Emails must match');}else{clearFieldError('#email2','Emails must match');clearFieldError('#email2','Emails must match');}});}
function emailRequiredValidation(){$('#email').blur(function(){if(validateRequired('#email')){var indexOfAt=$('#email').val().indexOf('@');if(indexOfAt>0){if(!validateLength('#email',6)){showFieldError('#email','Emails must be at least 6 characters');}}else{showFieldError('#email','Enter a valid email address');}}});$('#email').keyup(function(){if($('#email').val())
validateRequired('#email');if(validateLength('#email',75))
showFieldError('#email','Emails must be 75 characters or less');});}
function passwordsValidation(){$('#password').blur(function(){if(validateRequired('#password')){if(validateLength('#password',6))
showFieldError('#password','');else
showFieldError('#password','Passwords must be at least 6 characters');}});$('#password').keyup(function(){if($('#password').val())
validateRequired('#password');if($('#password').val().length>=6)
showFieldError('#password');});$('#password2').blur(function(){if($('#password').val()!=$('#password2').val())
showFieldError('#password2','Passwords must match');else
clearFieldError('#password2','Passwords must match');});$('#password2').keyup(function(){if($('#password2').val()&&$('#err_password2').text()){if($('#password').val()==$('#password2').val())
clearFieldError('#password2','Passwords must match');}});$('#password').after('<span class="password-strength"><span id="ps-bar"><span class="ps-bar-meter"></span></span><span id="ps-text"></span></span>')
$('#password').password_strength({container:'#ps-text',bar:'#ps-bar',texts:{1:'Very weak password',2:'Weak password',3:'Good password',4:'Strong password',5:'Very strong password'}});}
$(function(){function placeholderFocus(e){if($(this).val()==$(this).attr('data-controls-placeholder')){$(this).val('');$(this).removeClass('placeholder');}}
function placeholderFocusOut(e){if($(this).val()==''){$(this).val($(this).attr('data-controls-placeholder'));$(this).addClass('placeholder');}}
$('input[data-controls-placeholder]').focus(placeholderFocus);$('input[data-controls-placeholder]').focusout(placeholderFocusOut);});function strStartsWith(str,substr){return str.lastIndexOf(substr)===0;}
function strEndsWith(str,substr){return str.indexOf(substr,str.length-substr.length)!=-1;}
function strContains(str,substr){return str.indexOf(substr)>=0;}
function isTouchScreen(){return"ontouchstart"in window||window.navigator.msMaxTouchPoints||'onmsgesturechange'in window;}
function isiOS(){return/(iPad|iPhone|iPod)/g.test(navigator.userAgent);}
function isMac(){return/(Mac)/g.test(navigator.userAgent);}
function isie10(){return'onmsgesturechange'in window;}
function isie9(){return/MSIE 9/i.test(navigator.userAgent);}
function isie(){return isie9()||isie10()}
function isRetinaDisplay(){return window.matchMedia&&window.matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)").matches;}
function isSmallScreen(){return $(window).width()<=600;}
function isNoAppPlatform(){return/(BB10|IEMobile)/g.test(navigator.userAgent);}
function handleScroll(f){if(isTouchScreen()){document.addEventListener('touchmove',f,true);if(isiOS()||isie10())
document.addEventListener('scroll',f,true);}
else{$(window).scroll(f);}}
function handleElementScroll(e,f){if(isTouchScreen()){$(e).on('touchmove',f);if(isiOS())
$(e).on('scroll',f);}
else{$(e).scroll(f);}}
(function($){$.fn.Lightbox=function(){var $lightbox=null,offset=null,position=null,close_enabled=true;var openLightbox=function(e){if(isSmallScreen()){return;}
if($(this).attr('opening')=='true'){return;}
e.preventDefault();e.stopPropagation();close_enabled=true;$(this).attr('opening','true');sendUrlToAnalytics(this.pathname);$.ajax({type:"get",url:this.href,success:success,error:error});return false;}
var openLightboxWithURL=function(url,options){if(options)
close_enabled=options.close_enabled;sendUrlToAnalytics(url);$.ajax({type:"get",url:url,success:success,error:error});return false;}
var openinLightbox=function(e){if(isSmallScreen()){return;}
if(e.which&&e.which==2)
return;e.preventDefault();e.stopPropagation();sendUrlToAnalytics(this.pathname);$.ajax({type:"get",url:this.href,success:loadLightboxData,error:error});return false;}
var openinLightboxWithURL=function(url){if(!$lightbox){openLightboxWithURL(url);return false;}
sendUrlToAnalytics(url);$.ajax({type:"get",url:url,success:loadLightboxData,error:error});return false;}
var submitLightboxForm=function(e){var $form=this.tagName=="form"?$(this):$(this).closest("form");if($form.hasClass('pic-frm')&&$.browser.msie&&parseInt($.browser.version)<8)
return;e.preventDefault();e.stopPropagation();if($form.attr('data-submitted'))
return;$form.attr('data-submitted',true);if($form.find('input[type=submit]').length)
$form.find('input[type=submit]').attr('disabled','disabled').addClass('disabled');if($form.find('button[type=submit]').length)
$form.find('button[type=submit]').attr('disabled','disabled').addClass('disabled');if($form.attr("data-form-has-editor")){var nicEditContainer=$form.find('.nicEdit-container');var nicEditMain=$form.find('.nicEdit-main');$(nicEditContainer).siblings("textarea").val(nicEditMain.html());}
var form_data=$form.serialize();if(this.name)
form_data=form_data+"&"+this.name+"="+escape(this.value);var formURL=$form.attr("action");$.ajax({type:$form.attr("method"),url:formURL,data:form_data,statusCode:{200:function(html){success(html,formURL)},202:function(location){sendFormStatusToAnalytics(formURL,"success");closeAndRelocate(location);},204:function(e){sendFormStatusToAnalytics(formURL,"success");closeLightbox(e);},205:function(e){sendFormStatusToAnalytics(formURL,"success");closeAndReload(e);}}}).error(function(jqXHR,textStatus,errorThrown){sendFormStatusToAnalytics(formURL,"error");error(jqXHR,textStatus,errorThrown);$form.removeAttr('data-submitted');if($form.find('input[type=submit]').length)
$form.find('input[type=submit]').removeAttr('disabled').removeClass('disabled');if($form.find('button[type=submit]').length)
$form.find('button[type=submit]').removeAttr('disabled').removeClass('disabled');});}
var error=function(jqXHR,textStatus,errorThrown){$('body').trigger("lightbox-failed",jqXHR.responseText||"An error has occurred. Please try again later.");if($lightbox){$lightbox.removeAttr('opening');$('.lightbox-content').alertMessage({type:"error",message:"An error has occurred. Please try again later."})}}
var success=function(html,url){if($lightbox){if(html&&html.length>0&&html.substring(0,6)=='error:'){$('.lightbox-content').alertMessage({type:"error",message:html.substring(6)});sendFormStatusToAnalytics(url,"error");return;}
loadLightboxData(html);$('body').trigger("lightbox-reloaded");}else{if(html&&html.length>0&&html.substring(0,6)=='error:'){$('.box-content').alertMessage({type:"error",message:html.substring(6)});sendFormStatusToAnalytics(url,"error");return;}
$lightbox=$(html).appendTo('body')
if(isie()){$(".modal-backdrop").addClass("in");$(".modal").show().addClass("in");$("body").addClass("modal-open");}
else{$lightbox.modal({backdrop:false,keyboard:false});}
lightboxLoaded();}}
var closeLightbox=function(e){if(e)
e.preventDefault();$lightbox.modal('hide');$('#main-section').removeClass('no-print-when-lightbox');setTimeout(function(){if($lightbox){$lightbox.remove();$lightbox=null;}},500);}
var closeLightboxFromBackdrop=function(e){if(!close_enabled)
return;if($(e.target).hasClass("modal")){if($('.modal').scrollTop()>100){$('.modal').animate({scrollTop:0},300,"swing",animateCloseLink);}
else{animateCloseLink();}}}
var animateCloseLink=function(){$('.lightbox-close').addClass("shake");setTimeout(function(){$('.lightbox-close').removeClass("shake");},500);}
var closeAndReload=function(e){$lightbox.modal('hide');window.location.reload();}
var closeAndRelocate=function(location){$lightbox.modal('hide');if(location){window.location.href=location;}}
var loadLightboxData=function(html){var new_lb=$(html).find('.lightbox')[0];$($lightbox.find('.lightbox')[0]).replaceWith(new_lb);lightboxLoaded();}
var lightboxLoaded=function(){$("[data-controls-load-lightbox='true']").removeAttr('opening');$('.lightbox input[type="text"], .lightbox input[type="email"], .lightbox input[type="url"], .lightbox input[type="number"], .lightbox input[type="search"], .lightbox input[type="password"], .lightbox textarea, .lightbox select').filter(':visible:not([readonly]):not(#display):first').focus();$('.lightbox .datepicker').each(function(i,e){datePicker(e);});if($('.lightbox-content .lb-title').length){var lbTitle=$('.lightbox-content .lb-title').text();$('.lightbox-content .lb-title').hide();$(".lightbox-header h2").text(lbTitle);}
$('body').trigger("lightbox-loaded");$('#main-section').addClass('no-print-when-lightbox');if(!close_enabled)
$('.lightbox-close').hide();else
$('.lightbox-close').show();}
return{success:success,openLightbox:openLightbox,openLightboxWithURL:openLightboxWithURL,openinLightbox:openinLightbox,openinLightboxWithURL:openinLightboxWithURL,submitLightboxForm:submitLightboxForm,closeLightbox:closeLightbox,closeLightboxFromBackdrop:closeLightboxFromBackdrop}};})(jQuery);var lightbox=$().Lightbox();$('body').delegate('a[data-controls-load-lightbox]','click',lightbox.openLightbox).delegate('.lightbox a[data-open-in-lightbox]','click',lightbox.openinLightbox).delegate('.lightbox form input[type=submit]','click',lightbox.submitLightboxForm).delegate('.lightbox form button[type=submit]','click',lightbox.submitLightboxForm).delegate('.lightbox','submit',lightbox.submitLightboxForm).delegate('.lightbox .close','click',lightbox.closeLightbox).delegate('.modal','click',lightbox.closeLightboxFromBackdrop);$(window).resize(function(){if($(".modal").length&&isSmallScreen()){lightbox.closeLightbox();}});function clean_nmbr_str(s){s=$.trim(s);cleaned_s="";for(x=0;x<s.length;++x){i=s.charAt(x);if(i!=' '&&i!='-'&&i!='.'){cleaned_s+=i}}
return cleaned_s;}
function isluhn(cc){var sum=0;var numdigits=cc.length;var parity=numdigits%2;for(var i=0;i<numdigits;++i){var digit=parseInt(cc.charAt(i));if(i%2==parity)digit*=2;if(digit>9)digit-=9;sum+=digit;}
return(sum%10)==0;}
function isdigit(str){if(str.length<1){return false;}
for(x=0;x<str.length;++x){i=str.charAt(x);if(i!='1'&&i!='2'&&i!='3'&&i!='4'&&i!='5'&&i!='6'&&i!='7'&&i!='8'&&i!='9'&&i!='0'){return false;}}
return true;}
function ismastercard(cc){first_two=cc.substring(0,2);return first_two=='51'||first_two=='52'||first_two=='53'||first_two=='54'||first_two=='55';}
function isvisa(cc){return cc.charAt(0)=="4";}
function isdiscover(cc){first_two=cc.substring(0,2);return first_two=='60'||first_two=='62'||first_two=='64'||first_two=='65';}
function isamex(cc){first_two=cc.substring(0,2);return first_two=='34'||first_two=='37';}
function field_err(id,msg){$('#field_'+id).addClass('error');$('#err_'+id).text(msg);}
function field_clean(id){$('#field_'+id).removeClass('error');$('#err_'+id).text("");}
function clean_amnt(minimumPayment){amnt=$.trim($('#amount').val());amnt=amnt.replace("$","");amnt=amnt.replace(".00","");amnt=amnt.replace(",","");amnt_val=parseInt(amnt,10);if(!amnt_val){field_err('amount','Enter a whole number please.');return'';}
if(amnt_val<minimumPayment){field_err('amount','Minimum amount is $'+minimumPayment);return'';}
if(amnt_val>10000){field_err('amount',"$10K or less please. Contact us for larger payments.");return'';}
$('#amount').val(amnt);field_clean("amount");return amnt;}
function pick_card_type(typ){$('#visa_cc').removeClass('active');$('#mastercard_cc').removeClass('active');$('#amex_cc').removeClass('active');$('#discover_cc').removeClass('active');if(typ){$('#'+typ+'_cc').addClass('active');}}
function adjust_card_selection(){cc=clean_nmbr_str($('#cc').val());if(!cc)
pick_card_type();else if(isamex(cc))
pick_card_type("amex");else if(isvisa(cc))
pick_card_type("visa");else if(ismastercard(cc))
pick_card_type("mastercard");else if(isdiscover(cc))
pick_card_type("discover");else
pick_card_type();}
function clean_cc(){cc=clean_nmbr_str($('#cc').val());if(!cc){field_err('cc','Please enter a valid credit card number.');pick_card_type();return'';}
if(!isdigit(cc)){field_err('cc','Numbers only please.');pick_card_type();return'';}
if(isamex(cc)){pick_card_type("amex");if(cc.length!=15){field_err('cc','American Express card numbers are 15 digits.');return'';}}else{if(isvisa(cc)){pick_card_type("visa");}else if(ismastercard(cc)){pick_card_type("mastercard");}else if(isdiscover(cc)){pick_card_type("discover");}else{pick_card_type();field_err('cc','Please use a Visa, Mastercard, American Express or Discover card.');return'';}
if(cc.length!=16){field_err('cc','Your card number should have 16 digits.');return'';}}
if(!isluhn(cc)){pick_card_type();field_err('cc',"That doesn't look quite right. Check your numbers to make sure they match your card.");return'';}
$('#cc').val(cc);field_clean("cc");if(isamex(cc)){$('#cvc-help').text("4 digit number on the front of your American Express card.");}else{$('#cvc-help').text("3 digit number on the back of your card.");}
return cc;}
function clean_cvc(){cvc=clean_nmbr_str($('#cvc').val());if(!cvc){field_err('cvc','This field is required.');return'';}
if(!isdigit(cvc)){field_err('cvc','Numbers only please.');return'';}
cc=clean_cc();if(cc){if(isamex(cc)){if(cvc.length!=4){field_err('cvc','4 digits please');return'';}}else{if(cvc.length!=3){field_err('cvc','3 digits please');return'';}}}else{if(cvc.length<3){field_err('cvc','Security codes are either 3 or 4 digits.');return'';}}
$('#cvc').val(cvc);field_clean("cvc");return cvc;}
function clean_exp(curr_year,curr_month){exp_month=$('#exp_month').val();exp_year=$('#exp_year').val();if(!exp_month||!exp_year){if(!exp_month){field_err('exp','This field is required.');}else{field_clean("exp_month");}
if(!exp_year){field_err('exp','This field is required.');}else{field_clean("exp_year");}
return'';}
field_clean("exp_month");field_clean("exp_year");if(exp_year==curr_year&&parseInt(exp_month)<curr_month){field_err('exp','Expiration date cannot be in the past.');return'';}
return{month:exp_month,year:exp_year};}
function clean_card_name(){name=$.trim($('#card_name').val());if(!name||name.length<2){field_err('card_name','This field is required.');return'';}
$('#card_name').val(name);field_clean("card_name");return name;}
function stripeResponseHandler(status,response){if(response.error){$("#payment-form-err-msg").addClass("alert-message error");$("#payment-form-err-msg").text(response.error.message);$(".submit-button").removeAttr("disabled");}else{if($('#name').length&&response.card&&response.card.name){if($('#name').val()!=response.card.name)
$("#name").val(response.card.name);}
$("#tkn").val(response['id']);var form$=$("#payment-form");form$.get(0).submit();}}
var currentVideo=1;var totalVideoCount=1;var playBtn=null;function setupVideos(total){totalVideoCount=total;$(".play-btn").click(function(e){if($(window).width()<=768)
return;e.preventDefault();playBtn=this;var videoID=$(this).data('video');var video=document.getElementById(videoID);if(video.paused){video.play();$(this).hide();}
else{video.pause();$(this).show();}
video.addEventListener('ended',function(){$(playBtn).show();var v=this;setTimeout(function(){v.currentTime=0;v.load();$('#next-btn').addClass("shake");setTimeout(function(){$('#next-btn').removeClass("shake");},500);},500);});});$("#next-btn").click(nextVideo);$("#prev-btn").click(previousVideo);var hash=window.location.hash;if(hash&&hash.indexOf("#video-")>=0){var index=parseInt(hash.replace("#video-",""));if(index>1&&index<=totalVideoCount){moveToVideo(index);}}}
function reloadVideo(){if(playBtn){var videoID=$(playBtn).data('video');var video=document.getElementById(videoID);video.pause();video.currentTime=0;video.load();$(playBtn).show();}};function moveToVideo(index){$("#video-"+currentVideo).removeClass("active");currentVideo=index;showCurrentVideo();}
function nextVideo(e){if(e)e.preventDefault();reloadVideo();$("#video-"+currentVideo).removeClass("active");currentVideo++;showCurrentVideo();}
function previousVideo(e){if(e)e.preventDefault();reloadVideo();$("#video-"+currentVideo).removeClass("active");currentVideo-=1;showCurrentVideo();}
function showCurrentVideo(){if(!$("#video-"+currentVideo).length){currentVideo=1;}
if(currentVideo>1){$("#prev-btn").show();}
else{$("#prev-btn").hide();}
if(currentVideo==totalVideoCount){$("#next-btn").hide();}
else{$("#next-btn").show();}
$("#next-btn").attr("href","#video-"+(currentVideo+1));$("#prev-btn").attr("href","#video-"+(currentVideo-1));$("#video-"+currentVideo).addClass("active");}!function($){$('body').delegate(".alert-message .close-button","click",function closeAlert(e){e.preventDefault();var alert=$(this).closest(".alert-message");alert.fadeOut(300,function(){alert.remove()});});$.fn.alertMessage=function(options){var settings={type:null,duration:300,message:null,show_close:true};return this.each(function(){if(options)
$.extend(settings,options);var alert=$("<div class=\"alert-message\"><div>").hide();if(settings.show_close)
$(alert).append("<a href=\"#\" class=\"close-button\">Close</a>");if(settings.message)
$(alert).append("<p>"+settings.message+"</p>");if(settings.type)
$(alert).addClass(settings.type);$(this).prepend(alert);$(alert).fadeIn(settings.duration);});};}(window.jQuery);$.ajaxSetup({beforeSend:function(xhr,settings){function getCookie(name){var cookieVal=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieVal=decodeURIComponent(cookie.substring(name.length+1));break;}}}
return cookieVal;}
if(!(/^http:.*/.test(settings.url)||/^https:.*/.test(settings.url))){c=getCookie('myhw_csrf');if(c){xhr.setRequestHeader("X-CSRFToken",c);}}}});function lazyLoadImages(){if(isRetinaDisplay()){$(".retina").each(function(i,e){var original=$(this).attr('data-original');if(original){var retina=original.replace('.jpg','@2x.jpg');if(original==retina)
retina=retina.replace('.png','@2x.png');$(this).attr('data-original',retina);}
else{original=$(this).attr('data-src');var retina=original.replace('.jpg','@2x.jpg');if(original==retina)
retina=retina.replace('.png','@2x.png');$(this).attr('data-src',retina);}});}
$(".lazy").lazyload({threshold:200});}
$(function(){if(isiOS()){window.scrollTo(0,0);}
if(isMac()){$("body").addClass("isMac");}});function isFF(){return!(window.mozInnerScreenX==null);}
function sendUrlToAnalytics(url){if(typeof(ga)!='undefined'){ga('send','pageview',url);}}
function sendFormStatusToAnalytics(url,status){if(typeof(ga)!='undefined'){if(!url||url=="success")
return;if(url.indexOf("/",url.length-"/".length)==-1)
url+="/";ga('send','pageview',url+status);}}
function setupHomeNav(){var navFloating=false;var navTakingOff=false;handleScroll(function(){if($(window).scrollTop()>100){if(!navTakingOff){navTakingOff=true;$("#main-header").addClass("takingoff");}}
else if(navTakingOff){navTakingOff=false;$("#main-header").removeClass("takingoff");}
if($(window).scrollTop()>=$(window).height()){if(!navFloating){navFloating=true;$("#main-header").addClass("floating");}}
else if(navFloating){navFloating=false;$("#main-header").removeClass("floating");}});}
function setupUnauthNav(){var navFloating=false;var navTakingOff=false;handleScroll(function(){if($(window).scrollTop()>70){if(!navTakingOff){navTakingOff=true;$("#main-header").addClass("takingoff");}}
else if(navTakingOff){navTakingOff=false;$("#main-header").removeClass("takingoff");}
if($(window).scrollTop()>=85){if(!navFloating){navFloating=true;$("#main-header").addClass("floating");}}
else if(navFloating){navFloating=false;$("#main-header").removeClass("floating");}});setupMobileNav();}
function setupAltNav(){var offsets=[],targets=[],$nav=$('.alt-nav a').each(function(){if(this.hash){targets.push(this.hash);offsets.push($(this.hash).offset().top);}});var activeTarget=targets[0];var navFloating=false;function processScroll(e){if($(window).width()<=600){$(".alt-nav-placeholder").hide();return;}
if($(window).scrollTop()>=$('.main-sec').height()+35){if(!navFloating){navFloating=true;$(".alt-nav").addClass("floating");$(".alt-nav-placeholder").show();}}
else if(navFloating){navFloating=false;$(".alt-nav").removeClass("floating");$(".alt-nav-placeholder").hide();}
var scrollTop=$(window).scrollTop()+180,i=offsets.length;for(i;i--;){if(activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||scrollTop<=offsets[i+1])){$nav.filter("[href="+activeTarget+"]").removeClass("sel");$nav.filter("[href="+(activeTarget=targets[i])+"]").addClass("sel");break;}}}
$nav.click(function(e){if(!this.hash)
return;$('html, body').animate({scrollTop:$(this.hash).offset().top-130},600);processScroll();e.preventDefault();});handleScroll(processScroll);}
function setupMobileNav(){$('#mobile-nav-btn').click(function(){$('#main-nav').toggleClass('open');});handleScroll(function(){if($(window).width()<=768){if($('#main-nav').hasClass('open')){$('#main-nav').removeClass('open');}}});}
function setupSideNav(){function resizeSideNav(){if($(window).width()<=600)
return;if($(".side-sec").height()>$(".side-nav nav").height()+60){$(".side-nav").css("height",($(".side-sec").height()+60)+"px");}}
$(window).resize(resizeSideNav);resizeSideNav();}
function setupUnauthHome(){setupHomeNav();setupMobileNav();lazyLoadImages();setupQuotesScroll();if(isNoAppPlatform())
setupNoAppPlatform();else
setupSlider();$('a').click(function(e){var href=$(this).attr('href');if(href=="#learn-more"){e.preventDefault();$('html, body').animate({scrollTop:$(href).offset().top-30},600);}});}
function setupSlider(){function resizeSlider(){var h=$(window).height();if(navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i)&&window.matchMedia&&window.matchMedia("(orientation:landscape)").matches){h="672px";}
$("#slider .slide").css({"width":$(window).width(),"height":h});}
$(window).bind("resize focus",resizeSlider);resizeSlider();$("#slider").owlCarousel({navigation:false,theme:"",slideSpeed:300,paginationSpeed:700000,pagination:false,singleItem:true,autoPlay:false,lazyLoad:true,afterMove:sliderMoved,lazyFollow:false});var slider=$("#slider").data('owlCarousel');$("#next-arrow").click(function(){slider.next();});$("#prev-arrow").click(function(){slider.prev();});$("#slider-nav li").click(function(){var value=$(this).data("value");slider.goTo(value);});function sliderMoved(){$("#slider-nav li").removeClass("active");$(".slide-"+slider.currentItem).addClass("active");if(slider.currentItem>0)
$("#prev-arrow").show();else
$("#prev-arrow").hide();if(slider.currentItem<5)
$("#next-arrow").show();else
$("#next-arrow").hide();lazyLoadNext();}
function lazyLoadNext(){var next=slider.currentItem+1;if(next>5)
return;var nextItem=$(".s-"+next);if(!nextItem.parent().hasClass("loading")){return;}
if(nextItem.data("src")){nextItem.css("background-image","url("+nextItem.data("src")+")");nextItem.removeAttr("data-src");nextItem.parent().removeClass("loading");nextItem.show();}}
lazyLoadNext();}
function setupNoAppPlatform(){$(".s-1, .s-2, .s-3, .s-4, .s-5, .slider-nav-container").hide();var firstSlide=$(".s-0");firstSlide.css({"width":$(window).width(),"height":$(window).height(),"background-image":"url("+firstSlide.data("src")+")","background-position":"0"});firstSlide.removeAttr("data-src");firstSlide.parent().removeClass("loading");firstSlide.show();$(".s-0 .l-link").css("margin-top","20px");$(".s-0 .d-link").replaceWith("<a href=\"/signup\" class=\"d-link\" style=\"width: 44%; text-align: center;\">Sign up</a><a href=\"/login\" class=\"d-link\" style=\"width: 44%; text-align: center;\">Login</a>");}
function setupQuotesScroll(){function centerQuotes(){$(".scrollx").scrollLeft(($(".scrollx ul").width()-$(window).width())/2,0);}
$(window).resize(centerQuotes);centerQuotes();}
function setupHelpLinks(){$('.questions a').click(function(e){var href=$(this).attr('href');e.preventDefault();$('html, body').animate({scrollTop:$(href).offset().top-100},600);});}
function setupScrollToTop(e,sy,ey){var elm=e;var showY=$(elm).height()+$(elm).position().top-100;if(sy!=null)
showY=sy;var endY=-1;if(ey!=null)
endY=ey;$('body').append("<a href='"+elm+"' class='scroll-top'>Top</a>");$(".scroll-top").click(function(e){e.preventDefault();$(".scroll-top").removeClass("active");if(endY<0)
endY=$(elm).offset().top-150;$('html, body').animate({scrollTop:endY},600);});handleScroll(function(){if($(window).scrollTop()>showY){$(".scroll-top").addClass("active");}
else{$(".scroll-top").removeClass("active");}});}
function setupGroupPayments(standardUpgradePrice){var toMoney=function(cents){cents=parseFloat(cents)?cents:0.0;var components=(cents/100).toFixed(2).toString().split(".");var decimal=components[1];var dollars=components[0]||"";var mod,remainder;var stringReverse=function(str){return str.split("").reverse().join("");};if(dollars.length>3){dollars=stringReverse(dollars);remainder=(mod=dollars.length%3)?stringReverse(dollars.slice(mod*-1))+",":"";dollars=remainder+stringReverse(dollars.match(/.../g).join(","));}
return["$",[dollars,decimal].join(".")].join("");};var roundToQuarter=function(dollars){var integer=Math.floor(dollars);var decimal=dollars%1;if(decimal<.25)
decimal=.00;else if(decimal<.50)
decimal=.25;else if(decimal<.75)
decimal=.50;else
decimal=.75;return integer+decimal;};$('#field_amount').hide();$('#card_name').change(function(){$('#name').val($('#card_name').val());});function _updateDiscount(){var qnty=$('#quantity').val()||0;if(qnty<1){$('#amount').val(0);$('#total-with-discount').html(toMoney(0));_discountError('Quantity must be at least 1.');}
else if(qnty==1){$('#amount').val(standardUpgradePrice);$('#total-with-discount').html(toMoney($('#amount').val()*100));_discountOK();}
else if(qnty<50){$('#amount').val(roundToQuarter(qnty*standardUpgradePrice*.9));$('#total-with-discount').html(toMoney($('#amount').val()*100));_discountOK();}
else if(qnty>100){$('#amount').val(roundToQuarter(qnty*standardUpgradePrice*.8));$('#total-with-discount').html(toMoney(0));_discountError('For groups over 100, <a href="/contact">Contact Us</a> so we can provide better safety and service.');}
else{$('#amount').val(roundToQuarter(qnty*standardUpgradePrice*.8));$('#total-with-discount').html(toMoney($('#amount').val()*100));_discountOK();}}
function _discountError(msg){$('#quantity-error').html(msg).show();$('#field_quantity').addClass('error');$('#total-with-discount').addClass('error');}
function _discountOK(){$('#quantity-error').hide();$('#field_quantity').removeClass('error');$('#total-with-discount').removeClass('error');}
$('#quantity').on('input',_updateDiscount);_updateDiscount();emailRequiredValidation();$('#customize-recepit').change(function(){if($(this).is(':checked'))
$('#field_receipt_info').show();else
$('#field_receipt_info').hide();});}