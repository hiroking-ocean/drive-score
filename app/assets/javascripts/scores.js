// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


console.log('ok')

// 以下はtableへのclass適用script

// 以下htmlの読み込み後に読み込まれる

$(function(){ 

  $('.select').on('click', function(){
    var id = $(this).attr("id");
    addrem(id)
    cl(id)
  });

  function addrem(no){
    $(".bars *").removeClass("active bg-info text-white");
    $("#"+no).addClass("active bg-info text-white");
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

  $('thead .details').addClass('text-center align-middle')
  $('thead .apply').addClass('text-center align-middle')
  $('thead .points').addClass('text-center align-middle');

  $('.vr').addClass('text-center align-middle')
  $('tbody .details').addClass('text-center align-middle vr')
  $('tbody .apply').addClass('align-middle')
  $('tbody .points').addClass('text-center align-middle');

});

