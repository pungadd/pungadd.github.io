var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
  'Hi there, I\'m GU3LT03M and you?',
  'Nice to meet you',
  'How are you?',
  'Honestly, I love you so much!',
  'Response by contacting me',
  'http://facebook.com/noobdefacer',
  'I really need your answer:)',
  'I think you\'re a nice person',
  'U want ur Data Back?/',
  'U can Contact Me ^_^',
  'http://facebbok.com/noobdefacer',
  'It was a pleasure chat with you',
  'Time to Leave',
  'Bye',
  ':)'
]

function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="https://1.bp.blogspot.com/-EcwHJf4miEk/WMUyfdb4FdI/AAAAAAAAAoY/k1VJnYELtTw3GYjhhwATSltYyv7Ey-snwCLcB/s320/FAC2017.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="https://1.bp.blogspot.com/-EcwHJf4miEk/WMUyfdb4FdI/AAAAAAAAAoY/k1VJnYELtTw3GYjhhwATSltYyv7Ey-snwCLcB/s320/FAC2017.png" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}