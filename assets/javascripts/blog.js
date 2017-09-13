$(document).ready(function() {
  getPosts();
});

function getPosts() {
  $.ajax({
    url: "https://public-api.wordpress.com/wp/v2/sites/ocupasite.wordpress.com/posts?per_page=100&orderby=date",
    dataType: 'json'
  }).then(function(data) {
    showPosts(data);
  });
}

function showPosts(data) {
  for (var i = 0; i <= data.length; i++) {
    var background = data[i].featured_media_url;
    var image = '.post-image'+i+'';
    var title = data[i].title.rendered;
    var content = $(data[i].excerpt.rendered).text();
    var date = dateConverter(data[i].date);
    var id = data[i].id;

    var item =
      '<a href="post.html?id='+id+'" class="post-item">'+
        '<div class="post-image post-image'+i+'"></div>'+
        '<h3 class="post-title">'+title+'</h3>'+
        '<div class="post-excerpt">'+content+'</div>'+
        '<p class="post-date">'+date+'</p>'+
      '</a>';

    $('.blog-posts').append(item);

    $(image).css('background','url("'+background+'") center/cover no-repeat');
  }
}

function dateConverter(date) {
  var rawDate = date.split('T');
  var shortDate = rawDate[0].split('-');
  var month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  var newDate = shortDate[2] + ' de ' + month[parseInt(shortDate[1])-1] + ' de ' + shortDate[0];

  return newDate;
}