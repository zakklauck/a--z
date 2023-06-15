// Image gallery

import throttle from 'lodash/throttle'

App.pageLoad.push(function() {
  var $images = $('.image-wrapper img');

  var isLightboxOpen = function() {
    return App.$html.hasClass('lightbox-is-open');
  };

  var setCaptionSize = function($lightbox, $lightboxImage, $lightboxCaption) {
    $lightboxImage.css({ height: 0 });

    var captionHeight = $lightboxCaption.outerHeight(true);

    if ( $lightboxCaption.html().trim() == '' ) {
      captionHeight = 0;
      $lightboxCaption.remove();
    }

    $lightboxImage.css({ height: '' });
    $lightboxImage.height(App.windowHeight - captionHeight);
  };

  var closeLightbox = function() {
    $('#lightbox').remove();
    App.$html.removeClass('lightbox-is-open');
    $(document).off('keyup.lightbox');
    App.$window.off('resize.lightbox');
  };

  var openLightbox = function($image) {
    var src = $image.attr('src');
    var $wrapper = $image.closest('.image-wrapper');
    var $caption = $wrapper.find('.caption');
    var caption = $caption.html();
    caption = caption ? caption : '';

    closeLightbox();

    var lightboxHTML = '<div id="lightbox" class="lightbox">\
      <div id="lightbox__image" class="lightbox__image d-flex"></div>\
      <div id="lightbox__caption" class="lightbox__caption caption py-3">\
        ' + caption + '\
      </div>\
    </div>';

    App.$body.append(lightboxHTML);

    var $lightbox = $('#lightbox');
    var $lightboxImage = $('#lightbox__image');
    var $lightboxCaption =  $('#lightbox__caption');

    setCaptionSize($lightbox, $lightboxImage, $lightboxCaption);

    $lightboxImage.append('<img src="' + src + '" class="m-auto">');

    App.$html.addClass('lightbox-is-open');

    $(document).on('keyup.lightbox', function(e) {
      // Escape key
      if ( e.keyCode === 27 && isLightboxOpen() ) closeLightbox();
    });

    App.$window.on('resize.lightbox', throttle(function() {
      setCaptionSize($lightbox, $lightboxImage, $lightboxCaption);
    }, 200));
  };

  $images.on('click', function() {
    if ( App.breakpoint.isMobile() ) return;

    var $image = $(this);

    openLightbox($image);
  });

  App.$document.on('click', '#lightbox__image', function() {
    closeLightbox();
  });
});
