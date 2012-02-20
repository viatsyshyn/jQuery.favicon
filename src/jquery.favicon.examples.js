(function (jQuery) {
  this.example1 = function () {
    jQuery.favicon('images/mail_icon_32_active.png');
  };

  this.example2 = function () {
    jQuery.favicon('images/mail_icon_32_new_message_active_g.png', function (ctx) {
      ctx.font = 'bold 15px "helvetica", sans-serif';
      ctx.fillStyle = '#FF0000';
      ctx.fillText('XX', 10, 27);
    });
  };

  this.example3 = function () {
    jQuery.favicon('images/mail_icon_32_new_message_active_w.png', 'images/mail_icon_32_active.png', function (ctx) {
      ctx.font = 'bold 15px "helvetica", sans-serif';
      ctx.fillStyle = '#FF00FF';
      ctx.fillText('10', 10, 27);
    });
  };

  var bool = false;
  this.example4 = function (button) {
    if (bool) {
      bool = false;
      jQuery.favicon.unanimate();
      return;
    }

    bool = true;
    var count = 1;
    jQuery.favicon.animate('images/mail_icon_32_new_message_animation.png'
      , 'images/mail_icon_32_new_message.png', {
        frames: [1, 0],
        interval: 500,
        onDraw: function (ctx) {
          ctx.font = 'bold 15px "helvetica", sans-serif';
          ctx.fillStyle = '#333333';
          ctx.fillText(count, 10, 27);
          if (Math.random() > .95)
            count++;
        },
        onStop: function () {
          jQuery.favicon('images/mail_icon_32.png');
        }
      });
  }
}).apply(window, jQuery);