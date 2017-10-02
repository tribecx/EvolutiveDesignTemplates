$(document).ready(function() {
  setHeight();
});

function setHeight() {
  var fontSize = $('.sky-blog').css('font-size');

  $('.article-item').css('font-size', fontSize);

  var height = $('.articles').height();

  $('.container').css('height', height);

  $(window).resize(function() {
    fontSize = $('.sky-blog').css('font-size');

    $('.article-item').css('font-size', fontSize);

    height = $('.articles').height();

    $('.container').css('height', height);
  });
}