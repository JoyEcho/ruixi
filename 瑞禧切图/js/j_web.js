(function (){
　　"use strict";
	
//pc导航
$('#nav ul li').hover(function(){
    $(this).find('.sub').stop().slideDown('fast');
},function(){
    $(this).find('.sub').slideUp(0);
})

//手机导航展开特效
$(function(){
$("#m_nav .title .list").css({"opacity":"1","visibility":"visible"});
$("#m_nav .title .a").click(function(){
   var tt = $(this).parents(".title");
  if ($(tt).hasClass('on')) {
	  $(tt).children(".list").slideUp(600); //展开
	  $(tt).removeClass("on"); 
	}else{
	  $("#m_nav .title ").removeClass("on");
	  $("#m_nav .title .list").slideUp();
	  $(tt).children(".list").slideDown();
	  $(tt).toggleClass("on"); 
	}
});
$("#nav_btn_box").click(function(){
  $("#nav_btn_box .point").toggleClass("on"); 
  $("#nav_btn_box").toggleClass("on"); 
  $("#m_nav").toggleClass("act");
  $(".nav_mask").fadeToggle();
});

$(".nav_mask").click(function(){
$("#nav_btn_box .point").removeClass("on"); 
$("#nav_btn_box").removeClass("on"); 
$(this).fadeToggle();
$(".nav_btn_box").removeClass("act");
$("#m_nav").removeClass("act");
});
 


});	
 

 $(document).mouseup(function (e) {
    var _con = $('.header_search,.search_wrap,.tel_dt,.tel_dd'); // 设置目标区域
    if (!_con.is(e.target) && _con.has(e.target).length === 0) { // Mark 1
        $(".header_search").removeClass("on");
        $(".search_wrap").removeClass("on");
        $(".tel_dt").removeClass("on");
        $(".tel_dd").removeClass("on");
    }
});



//IE8下提示浏览器版本过低，升级浏览器
(function(window) {
    var theUA = window.navigator.userAgent.toLowerCase();
    if ((theUA.match(/msie\s\d+/) && theUA.match(/msie\s\d+/)[0]) || (theUA.match(/trident\s?\d+/) && theUA.match(/trident\s?\d+/)[0])) {
        var ieVersion = theUA.match(/msie\s\d+/)[0].match(/\d+/)[0] || theUA.match(/trident\s?\d+/)[0];
        if (ieVersion < 9) {
            var str = "您现在使用的浏览器版本过低，无法正常浏览本网站！";
            var str2 = "";
            document.writeln("<pre style='background-image:url(images/s_pro_bg.jpg);text-align:center; font-size:14px;color:#666; line-height:40px; font-family:微软雅黑; font-weight:nomal; background-color:#fff; height:100%;border:0;position:fixed;top:0;left:0;width:100%;z-index:1234'>" +
                "<h2 style='padding-top:300px;margin:0'><span>" + str + "<br/></span></h2><h2>" +
                str2 + "</h2><h2 style='margin:0'><span>请更新并使用<a href='http://browsehappy.osfipin.com/' style='text-decoration: underline;'>最新的浏览器版本</a>。<br/></span></h2></pre>");
            document.execCommand("Stop");
        }
    }
})(window);


$('.tc_btn[name]').click(function() {
    var tf_name_id = $(this).attr('name');
    $('.tc[name=' + tf_name_id + ']').addClass('act');
});
$('.tc_close').click(function() {
    $(this).parents('.tc').removeClass('act');
});
$('.tc_bg').click(function() {
    $(this).parents('.tc').removeClass('act');
});


//banner切换
$(".banner_slider").on('init', function(event, slick, currentSlide, nextSlide){
    $(".banner_slider li").first().removeClass("slick-current");
    setTimeout(function(){
        $(".banner_slider li").first().addClass("slick-current");
    },1);
});

 $('.banner_slider').init(function(slick){
    $('.banner_slider li.slick-current').addClass('active').siblings().removeClass('active');
})
$('.banner_slider').on('afterChange',function(slick,currentSlide){
    $('.banner_slider li.slick-current').addClass('active').siblings().removeClass('active');
})
$('.banner_slider').on('beforeChange',function(event, slick, currentSlide, nextSlide){
    $(".fenzi").html(nextSlide + 1);
$(".fenmu").html(slick.slideCount);
    $('.banner_slider li.slick-current').addClass('remove').siblings().removeClass('remove');
    setTimeout(function(){
        $('.banner_slider li').removeClass('remove')
    },500)
})

$('.banner_slider').slick({
slidesToShow: 1,
slidesToScroll: 1,
dots: false,
arrows:true,
infinite: true,//循环播放
speed: 1000,
fade: true,
pauseOnHover: false,
autoplay: true,
autoplaySpeed:7000,
appendDots:'.slickdotbox',
});


// $('.banner_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//     var i= nextSlide;
//     console.log(nextSlide);
//     $('.banner_nav ul li').removeClass('slick-current').eq(i).addClass('slick-current');
//   }); 

//  $('.banner_nav ul li').click(function(){
//     $('.banner_nav ul li').removeClass('slick-current');
//     $(this).addClass('slick-current');
//  })
$(window).scroll(function(){
    var winHeight=$(this).scrollTop()
    if(winHeight>1){
           $('#header').addClass('xg')
       }else{
           $('#header').removeClass("xg")
       }
     if ($(this).scrollTop()>300){
         $("#gotop").removeClass("hide");
     }else{
         $("#gotop").addClass("hide");
     }
 });

 $('#gotop').click(function () {
     $('html,body').animate({
         scrollTop : '0px'
     }, 800);
 });
 

$(function(){$('a[href*="#"],area[href*="#"]').click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var $target=$(this.hash);$target=$target.length&&$target||$('[name='+this.hash.slice(1)+']');if($target.length){var targetOffset=$target.offset().top;$('html,body').animate({scrollTop:targetOffset},600);return false}}})});

$(window).scroll(function(){
    if ($(this).scrollTop()>300){
        $("#gotop").removeClass("hide");
    }else{
        $("#gotop").addClass("hide");
    }
});
$('#gotop').click(function () {
    $('html,body').animate({
        scrollTop : '0px'
    }, 800);
});

$("#bnt_sub_nav").click(function(){
    $(this).toggleClass("on");
    $("#sub_nav_content").slideToggle();
});
 
// $('.s_yewu_slide1').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: true,
//   fade: false,
//   asNavFor: '.s_yewu_slide2'
// });
// $('.s_yewu_slide2').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: false,
//   asNavFor: '.s_yewu_slide1'
// });
$('.s_pro .bd ul').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows:true,  
  autoplay: true,
  touchThreshold:20,
  prevArrow:".pro_left",
  nextArrow:".pro_right",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});
   
$('.s_hecheng .bd ul').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows:true, 
    autoplay: true,
    touchThreshold:20, 
    prevArrow:".hecheng_left",
    nextArrow:".hecheng_right",
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
  });

  $('.s_danpin .bd ul').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows:true,  
    autoplay: true,
    touchThreshold:20,
    prevArrow:".danpin_left",
    nextArrow:".danpin_right",
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
  });

  $('.s_news .bd ul').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows:true,  
    touchThreshold:20,
    autoplay: true,
    prevArrow:".news_left",
    nextArrow:".news_right",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            }
          },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
  });
  $('.pro_xq_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows:true,
    touchThreshold:20,
    autoplay: true,
    prevArrow:".pro_xq_left",
    nextArrow:".pro_xq_right",
  });

//标题分割动画	
let w = document.body.offsetWidth || document.body.clientWidth;
let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
const _ = function (select) { return document.querySelector(select) };
const _$ = function (select) { return document.querySelectorAll(select)};
const clickEvent = (function() {
    if ('ontouchstart' in document.documentElement === true){
        return 'touchstart';
    }else{
        return 'mousedown';
    }
})();
const getScrollbarWidth = function() {
    const container = document.createElement('div');
    container.style.visibility = 'hidden';
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.width = '100px';
    container.style.overflow = 'scroll';
    document.body.appendChild(container);
    const containerWidth = container.offsetWidth;
    const inner = document.createElement('div');
    inner.style.width = '100%';
    container.appendChild(inner);
    const innerWidth = inner.offsetWidth;
    container.parentNode.removeChild(container);
    return containerWidth - innerWidth;
};

const scrollMarginRightTrue = function(){
    if ('ontouchstart' in document.documentElement === false){
        _('html').style.marginRight = getScrollbarWidth() + 'px';
        _('header').style.width =_('header').offsetWidth + 'px';
        document.documentElement.style.overflowY='hidden';
    }
}
const scrollMarginRightFalse = function(){
    if ('ontouchstart' in document.documentElement === false){
        _('html').style.marginRight = 0;
        document.documentElement.style.overflowY = 'scroll';
    }
}
const splitlist = function(splitlist,bool){
    Array.prototype.forEach.call(_$(splitlist), function (item) {
        let flag = false,
            isRandom = bool,
            delays = parseInt(item.getAttribute('delay')),
            speeds = parseInt(item.getAttribute('speed')),
            Arrays = item.innerHTML.replace(/<br>/g, "\n").replace(/<i>/g, "\\").replace(/<\/i>/g, "\t").replace(/&amp;/g, "&").split("");
        item.innerHTML = '';
        if(!delays){
            delays = 100;
        }
        if(!speeds){
            speeds = 100;
        }
        Array.prototype.forEach.call(Arrays,function(letter, i) {
            let span = document.createElement("span"),
                br = document.createElement("br"),
                random = 1;
            if(letter.indexOf("\n") >= 0){
                item.appendChild(br);
                return;
            }
            if(letter.indexOf("\\") >= 0){
                flag = true;
                return;
            }
            if(letter.indexOf("\t") >= 0){
                flag = false;
                return;
            }
            if(flag){
                span.className = 'letters';
            }
            if(isRandom){
                random = Math.random();
            }
            delays += speeds;
            span.style.animationDelay = delays * random  + 'ms';
            span.innerHTML = letter;
            item.appendChild(span);
        });
    });
};
function scrollAnimate() {
    const viewHeight =window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;    
    Array.prototype.forEach.call(_$('.flags'),function(slider){
        const top = slider.getBoundingClientRect().top;
        if (top + 100 <= viewHeight ) {
            slider.classList.add('flag');
        }
    });
    Array.prototype.forEach.call(_$('.photoActives'),function(slider){
        const top = slider.getBoundingClientRect().top;
        if (top + 100 <= viewHeight ) {
            slider.classList.add('reset_photoActive');
        }
    });
    Array.prototype.forEach.call(_$('.itemAnimates'),function(slider){
        const top = slider.getBoundingClientRect().top;
        if (top + 100 <= viewHeight ) {
            slider.classList.add('animates');
        }
    });
};
//图片动画
function photoActives(){
    let photoActives = _$('.photoActives');
    let section = document.createElement('section');
    section.classList.add('photoActive');
    if(!photoActives){
        return
    }
    for(let i = 0 ;i < photoActives.length; i++){
        photoActives[i].appendChild(section.cloneNode());
    }
};

function itemAnimates(){
    let itemAnimates = _$(".itemAnimates");
    if(!itemAnimates){return}
    for (let i = 0; i < itemAnimates.length; i++) {
      let itemAnimate = itemAnimates[i].querySelectorAll('.itemAnimate');
      let delay = 0;
      for (let j = 0; j < itemAnimate.length; j++) {
        if(itemAnimates[i].getAttribute('random') == '1'){
            delay = Math.random() * itemAnimates[i].getAttribute('randomMax');
          }else{
            delay += 300;
          }
          itemAnimate[j].style.animationDelay = delay + "ms";
      }
    }
};

function newspaper(){
    Array.prototype.forEach.call(_$('.newspaper table'), function(el) {
        let section = document.createElement('section');
        section.className = 'tablebox';
        el.parentNode.replaceChild(section, el);
        section.appendChild(el);
    });
    Array.prototype.forEach.call(_$('.newspaper img'), function(el) {
        let section = document.createElement('section');
        section.className = 'photoActives';
        el.parentNode.replaceChild(section, el);
        section.appendChild(el);
    });
};
	
scrollAnimate();
photoActives();
splitlist('.splitlist',false);
window.addEventListener('scroll',function(){
    scrollAnimate();
});
	
　　// some code here
})();
