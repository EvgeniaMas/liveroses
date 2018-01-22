;(function($){$.fn.jSlider=function(options){var settings=$.extend({slidingTime:500,rotateDelay:2000},options);var slidingTime=settings.slidingTime,rotateDelay=settings.rotateDelay;this.addClass('slider');var $slider=this.find('slider'),$sliderItem=this.find('.slider-item'),$sliderBox=this.find('.slider-box'),$sliderPointers=this.find('.slider-pointers'),$sliderLeft=this.find('.slider-left'),$sliderRight=this.find('.slider-right');var slideNumbers=$sliderItem.length,currentSlide=0,prevSlide,slideTimer;var imgWidth,imgHeight;var img=[];img.push($sliderBox.find("img").eq(0)[0].src);$(new Image()).attr("src",img[0]).on("load",function(){imgWidth=$sliderBox.find("img").eq(0)[0].naturalWidth;$sliderBox.css({'max-width':imgWidth});var sliderWidth=$sliderBox[0].clientWidth;if(imgWidth>sliderWidth){imgWidth=sliderWidth;$sliderBox.find("img").css({'width':imgWidth});}else{$sliderBox.css({'width':imgWidth});}imgHeight=$sliderBox.find("img").eq(0)[0].clientHeight;$sliderBox.css({'height':imgHeight});});$sliderItem.hide().eq(0).show();for(var i=0;i<slideNumbers;i++){$sliderPointers.append("<li></li>").find('li').addClass('slider-point');};var $sliderPoint=$(this).find('.slider-point');$sliderPoint.eq(0).addClass('active');startRotation();var rotateSlider=function(rotateDirection){var nextSlide;$sliderPoint.eq(currentSlide).removeClass('active');if(rotateDirection==='left'){nextSlide=currentSlide+1;if(nextSlide===slideNumbers){nextSlide=0};moveToLeft(nextSlide);}else if(rotateDirection==='right'){nextSlide=currentSlide-1;if(nextSlide<0){nextSlide=slideNumbers-1};moveToRight(nextSlide);}else{nextSlide=rotateDirection;if(nextSlide-currentSlide>0){moveToLeft(nextSlide);}else if(nextSlide-currentSlide<0){moveToRight(nextSlide);}}prevSlide=currentSlide;currentSlide=nextSlide;$sliderPoint.eq(currentSlide).addClass('active');};var moveToLeft=function(nextSlide){$sliderItem.eq(prevSlide).css({display:'none'});$sliderItem.eq(nextSlide).css({left:imgWidth+'px',display:'inline','z-index':1}).animate({left:0},slidingTime);$sliderItem.eq(currentSlide).animate({left:'-'+imgWidth+'px'},slidingTime);};var moveToRight=function(nextSlide){$sliderItem.eq(prevSlide).css({display:'none'});$sliderItem.eq(nextSlide).css({left:'-'+imgWidth+'px',display:'inline','z-index':1}).animate({left:0},slidingTime);$sliderItem.eq(currentSlide).animate({left:imgWidth+'px'},slidingTime);};function startRotation(){slideTimer=setTimeout(function timer(){rotateSlider('left');slideTimer=setTimeout(timer,rotateDelay);},rotateDelay);};$sliderBox.hover(function(){clearTimeout(slideTimer);$sliderLeft.show();$sliderRight.show();},function(){startRotation();$sliderLeft.hide();$sliderRight.hide();});$sliderLeft.click(function(){rotateSlider('right');});$sliderRight.click(function(){rotateSlider('left');});$sliderPoint.hover(function(){clearTimeout(slideTimer);}).click(function(){rotateSlider($(this).index());});$(window).resize(function(){clearTimeout(slideTimer);$sliderItem.eq(Number(prevSlide)).css({"z-index":0,"display":'none'});imgWidth=$sliderBox[0].clientWidth;$sliderBox.find('img').css({'width':imgWidth});imgHeight=$sliderBox.find("img").eq(currentSlide)[0].clientHeight;$sliderBox.css({'height':imgHeight});$slider.css({'height':imgHeight});startRotation();});return this;};})(jQuery);