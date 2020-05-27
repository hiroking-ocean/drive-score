// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


console.log('ok')

// 以下htmlの読み込み後に読み込まれる

$(function(){ 

  $('.select').on('click', function(){
    var id = $(this).attr("id");
    addrem(id)
    cl(id)
  });

  function addrem(no){
    $(".bars *").removeClass("active text-primary");
    $("#"+no).addClass("active text-primary");
  };

  $('#myCarousel').on('slide.bs.carousel', showindex) ;
  function showindex(e){
    console.log(e.to + ' showindex');
    addrem(e.to);
  };
  
  function cl(n){
    console.log(n + ' cl')
    $('.carousel').carousel(Number(n))
  };
});

