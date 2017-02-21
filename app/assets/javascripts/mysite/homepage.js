
$(function(){
  $('.submit').click(function(){
    if($('input#message_name').val() == '' || $('input#message_email').val() == '' || $('textarea#message_text').val() == '') {
      $('.error-message').slideDown('fast');
      return false
    } else if($('textarea#message_text').val().length < 7){
      $('.error-message').slideDown('fast');
      return false
    }
    // $('form').submit();
    var email = $('input#message_email').val()
    var message = $('textarea#message_text').val()
    var name = $('input#message_name').val()
    $.ajax({
      url: '/message',
      type: 'post',
      data: {email: email, message: message, name: name},
      dataType: 'script'
    })

    $('form').fadeOut('slow');
    $('.thanks').fadeIn('slow').css('display','inline-block')
    $('.thanks-mobile').fadeIn('slow').css('display','inline-block')
  })
})


$(function(){
  $('.about').click(function(){
    $('html,body').animate({scrollTop: 729},'slow')
  })
  $('.projects').click(function(){
    $('html,body').animate({scrollTop: 1550},'slow')
  })
  $('.contact-me').click(function(){
    $('html,body').animate({scrollTop: 2631},'slow')
  })
})

$(function(){
  $('.about-mobile').click(function(){
    $('html,body').animate({scrollTop: 1744},'slow')
  })
  $('.projects-mobile').click(function(){
    $('html,body').animate({scrollTop: 3777},'slow')
  })
  $('.contact-me-mobile').click(function(){
    $('html,body').animate({scrollTop: 4780},'slow')
  })
})


var map;
function initMap() {
  var myLatLng = {lat: 40.7454474, lng: -73.952307};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: myLatLng,
    scrollwheel: false,
    draggable: false
  });

  google.maps.event.addListener(map, 'click', function(event){
          this.setOptions({scrollwheel:true});
        });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}

// $(window).scroll(function(){
//   console.log($(window).scrollTop())
// })
