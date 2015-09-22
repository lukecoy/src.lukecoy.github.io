$(document).ready(function() {
  var $allContent;
  $allContent = $('.pusher .all-content');
  
  $('.bottom.demo.sidebar').sidebar('setting', {
    dimPage: false,
    transition: 'overlay',
    mobileTransition: 'overlay'
  });

  return $('.button.links').on('click', function() {
    if ($(this).filter('.disabled').size() === 0) {
      return $('.bottom.demo.sidebar').sidebar('toggle');
    }
  });
});
