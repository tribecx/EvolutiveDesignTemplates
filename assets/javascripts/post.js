$(document).ready(function() {
  getPost();
});

function getPost() {
  var id = getUrlParameter('id');

  $.ajax({
    url: "https://public-api.wordpress.com/wp/v2/sites/ocupasite.wordpress.com/posts/"+id+"",
    dataType: 'json'
  }).then(function(data) {
    drawPost(data);
  });

  $.ajax({
    url: "https://public-api.wordpress.com/wp/v2/sites/ocupasite.wordpress.com/posts?per_page=4&orderby=date",
    dataType: 'json'
  }).then(function(data) {
    drawLast(data);
  });
}

function drawPost(data) {
  var background = data.featured_media_url;
  var title = data.title.rendered
  var date = dateConverter(data.date);
  var content = data.content.rendered;

  $('.post-cover').css('background','url("'+background+'") center/cover no-repeat fixed');
  $('.post-title').html(title);
  $('.post-date').html(date);
  $('.post-text').html(content);
}

function drawLast(data) {
  for (var i = 3; i >= 0; i--) {
    var background = data[i].featured_media_url;
    var image = '.post-image'+i+'';
    var title = data[i].title.rendered;
    var date = dateConverter(data[i].date);
    var id = data[i].id;

    var news =
      '<a href="post.html?id='+id+'" class="post-item">'+
        '<div class="post-image post-image'+i+'"></div>'+
        '<h3 class="post-lasttitle">'+title+'</h3>'+
        '<p class="post-info">'+date+'</p>'+
      '</a>';

    $('.post-label').after(news);

    $(image).css('background','url("'+background+'") center/cover no-repeat');
  }
}

function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}

function dateConverter(date) {
  var rawDate = date.split('T');
  var shortDate = rawDate[0].split('-');
  var month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  var newDate = shortDate[2] + ' de ' + month[parseInt(shortDate[1])-1] + ' de ' + shortDate[0];

  return newDate;
}