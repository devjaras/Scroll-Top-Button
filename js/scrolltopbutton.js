(function ($) {
  'use strict';

  let ScrollToTop = function () {
    return {
      $el_button: {},
      init: function ($el_button) {
        this.$el_button = $el_button;
        this.onClick();
      },
      onClick: function () {
        let _this = this;
        this.$el_button.on("click", function () {
          _this.scroll();
        })
      },
      scroll: function () {
        $('html, body').animate({
          scrollTop: 0
        }, 500);
      }
    };
  };

  Drupal.behaviors.scrolltotop = {
    attach: function (context, settings) {
      $('button#scroll-to-top', context).once('scrolltotop').each(function () {
        let scrolltotop = new ScrollToTop();
        scrolltotop.init($(this));
      });
    }
  };

})(jQuery);