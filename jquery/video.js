
var offset;
var current_pos;//for video;
var scroll_video;
$(document).ready(function(){
  $('.video-button').hide();//this is for video
scroll_video=$('.scroll-video');
scroll_video.data('status','nothing');


   if($(window).width()>768){//making it only work for big screen(responsive)
   //for video....<
   
  $('#newsVideos').on('play', function() {
   scroll_video.data('status','played');
  });

  $('#newsVideos').on('pause', function() {
  scroll_video.data('status','nothing');
  
  });

  
  }

var videoBox=scroll_video;
var top=videoBox.offset().top;
offset = Math.floor( top + (videoBox.outerHeight()/ 2 ) );


$('.video-button').on('click',function(){
  $(this).hide();
  scroll_video.data('status','nothing').removeClass('stick-video');

  $('#newsVideos').each(function () { 
    this.pause();
  $('#newsVideos').addClass('video-box'); 
  });
  });
});



$(window)

.on('load',function(){
})
.on('scroll',function(){
var scrolltop=$(window).scrollTop();
var scrollBottom=offset-$(window).height();//getting value of top on scrolldown
     //for scrolling top
     if((scrolltop>offset) || (scrolltop<scrollBottom)){
      if(scroll_video.data('status') == 'played')
        {   scroll_video.data('status','paused').addClass('stick-video');
            $('.video-button').show();
            $('#newsVideos').removeClass('video-box');

        }
      }
    else 
    {
        if((scroll_video.data('status') == 'paused'))
        { scroll_video.removeClass('stick-video').data('status','played');
         $('.video-button').hide();
         $('#newsVideos').addClass('video-box');

        }
      }    
});


/*$(document).ready(function(){
  $('.video-button').hide();

 $('#newsVideos').on('play',function(){
   scroll_video.data('status','played');
   
 });

 $('#newsVideos').on('pause',function(){
   $('.scroll-video').data('status','paused');
 });

$('.video-button').on('click',function(){
  $('.scroll-video').removeClass('stick-video');
  $(this).hide();
  $('#newsVideos').each(function () { 
    this.pause() 
  });
});

});



$(window).scroll(function(){
 if($(document).scrollTop()>400){
  if($('.scroll-video').data('status')=='played'){

      $('.scroll-video').data('status','paused').addClass('stick-video');
      $('.video-button').show();
      $('#newsVideos').removeClass('video-box');
  }
 }
 else{
  if($('.scroll-video').data('status')=='paused'){
      $('.scroll-video').data('status','played').removeClass('stick-video').addClass('video-box');
      $('.video-button').hide();
      $('#newsVideos').addClass('video-box');
  }
 }
});
*/
/*var offset;
var current_pos;//for video;
var scroll_video;
$(document).ready(function(){
  $('.video-button').hide();//this is for video
scroll_video=$('.scroll-video');


   if($(window).width()>768){//making it only work for big screen(responsive)
   //for video....<
   $('#newsVideos').on('play', function() {
   scroll_video.data('status','played');
  });

  $('#newsVideos').on('pause', function() {
  scroll_video.data('status','paused');
  });

  $('.video-button').on('click',function(){
  scroll_video.removeClass('stick-video').data('status','paused');
  $(this).hide();
  $('#newsVideos').each(function () { 
    this.pause() 
  });
  });
  }

var videoBox=scroll_video;
var top=videoBox.offset().top;
offset = Math.floor( top + (videoBox.outerHeight()/ 2 ) );

});



$(window)

.on('load',function(){
})
.on('scroll',function(){
var scrolltop=$(window).scrollTop();
var scrollBottom=offset-$(window).height();//getting value of top on scrolldown
     //for scrolling top
     if((scrolltop>offset) || (scrolltop<scrollBottom)){
      if(scroll_video.data('status') == 'played')
        {   scroll_video.data('status','paused').addClass('stick-video');
            $('.video-button').show();
            $('#newsVideos').removeClass('video-box');

        }
      }
    else 
    {
        if((scroll_video.data('status') == 'paused'))
        { scroll_video.removeClass('stick-video').data('status','played');
         $('.video-button').hide();
         $('#newsVideos').addClass('video-box');

        }
      }    
});


/*$(document).ready(function(){
  $('.video-button').hide();

 $('#newsVideos').on('play',function(){
   scroll_video.data('status','played');
   
 });

 $('#newsVideos').on('pause',function(){
   $('.scroll-video').data('status','paused');
 });

$('.video-button').on('click',function(){
  $('.scroll-video').removeClass('stick-video');
  $(this).hide();
  $('#newsVideos').each(function () { 
    this.pause() 
  });
});

});



$(window).scroll(function(){
 if($(document).scrollTop()>400){
 	if($('.scroll-video').data('status')=='played'){

      $('.scroll-video').data('status','paused').addClass('stick-video');
      $('.video-button').show();
      $('#newsVideos').removeClass('video-box');
 	}
 }
 else{
 	if($('.scroll-video').data('status')=='paused'){
      $('.scroll-video').data('status','played').removeClass('stick-video').addClass('video-box');
      $('.video-button').hide();
      $('#newsVideos').addClass('video-box');
 	}
 }
});
*/