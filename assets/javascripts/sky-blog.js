$(document).ready(function() {
  setHeight();
});

function setHeight() {
  var fontSize = $('.sky-blog').css('font-size');

  $('.article-item').css('font-size', fontSize);

  var articlesHeight = $('.articles').height();
  var popularHeight = $('.popular').height();

  if ($(window).width() >= 769 || $(window).width() <= 480) {
    $('.container').css('height', articlesHeight);
  } else if ($(window).width() <= 768 && $(window).width() >= 481) {
    $('.container').css('height', articlesHeight + popularHeight);
  }

  $(window).resize(function() {
    fontSize = $('.sky-blog').css('font-size');
    $('.article-item').css('font-size', fontSize);

    if ($(window).width() <= 769) {
      $('.container').css('height', articlesHeight);
    }

    articlesHeight = $('.articles').height();
    popularHeight = $('.popular').height();

    if ($(window).width() >= 769 || $(window).width() <= 480) {
      $('.container').css('height', articlesHeight);
    } else if ($(window).width() <= 768 && $(window).width() >= 481) {
      $('.container').css('height', articlesHeight + popularHeight);
    }
  });
}