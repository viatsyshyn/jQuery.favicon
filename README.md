<h1>jQuery Favicon plugin</h1>
<p>Favicon is jQuery plugin that helps you manipulate browser's <a href="http://en.wikipedia.org/wiki/Favicon" target="_blank">favicon</a>. It allows you to change favicon dynamicly. If browser supports <em>HTML5 Canvas</em> element you can draw on icon before using it. Also you can provide alternative icon if broswer do not support canvas.</p>
<p><strong>Browser support</strong>: Firefox 3.5, Opera 9, Chrome 4.<br />
<b><small><em>Note: IE and Safari do not support dynamic favicon change.</em></small></b></p>
<p><small><i>Note: Canvas is supported by Firefox 4.0b1+, Opera 10+, Chrome 6+, Safari 5+, IE9+</i></small></p>

<h2>Plugin interface</h2>
<pre class="brush:javascript">
/**
 * Interface of onDrawCallback
 * @param {Context} context		HTML5 Canvas 2d Context
 */
var DrawCallback = function (context) {};

/**
 * jQuery.favicon interface
 * @param {String} iconURL
 * @param {String} alternativeURL			(optional) URL to use instead of iconURL if browser do NOT support HTML5 Canvas elem
 * @param {DrawCallback} onDrawCallback		(optional) Callback that draws something on icon before apply
 *
 * function (iconURL)
 * function (iconURL, onDraw)
 * function (iconURL, alternateURL, onDraw)
 */
jQuery.favicon = function (iconURL, alternativeURL, onDrawCallback) {};

/**
 * jQuery.favicon.animate - starts frames based animation
 *
 * @param {String}      animationURL    Should be image that contains frames joined horizontally
 * @param {String}      alternateURL    Normal one frame image that will be used if Canvas is not supported
 * @param {Object}      options         optional
 *
 * function (animationURL, alternateURL)
 * function (animationURL, alternateURL, {
 *   interval: 1000, // change frame in X ms, default is 1000ms
 *   onStart: function () {}, // is called after image is ready
 *   onDraw: function (context, frame) {}, // is called each frame
 *   onStop: function () {}, // is called on animation stop
 *   frames: [1,3,5] // display frames in this exact order, defaults is all frames
 * })
 */
jQuery.favicon.animate = function (animationURL, alternateURL, options) {};

/**
 * jQuery.favicon.unanimate - stops current animation
 */
jQuery.favicon.unanimate = function () {};

</pre>
<h2 id="animation">Animating with <em>jQuery.favicon.animate()</em></h2>
<p><strong>jQuery.favicon.animate</strong> is simple frames based animation implementation. This aproach requires image with all animation frames joined horizontally, like on image bellow</p>
<p><img width="256" height="128" src="http://hellowebapps.com/wp-content/uploads/2010/09/mail_icon_32_new_message_animation.png" /><br/>
<small>Sample 2 frames animation image used in example 4</small>
</p>

<h2>Download</h2>
<p>Vesion 0.1: <a href="jquery.favicon.js">jquery.favicon.js</a></p>

<h2>Usage examples</h2>
<h3>Example 1: Change favicon</h3>
<pre class="brush:javascript">jQuery.favicon('mail_icon_32_active.png');"</pre>

<h3 id="example2">Example 2: Draw something on favicon before apply</h3>
<pre class="brush:javascript">jQuery.favicon('mail_icon_32_new_message_active_g.png', function (ctx) {
  ctx.font = 'bold 15px "helvetica", sans-serif';
  ctx.fillStyle = '#FF0000';
  ctx.fillText('XX', 10, 27);
});</pre>

<h3 id="example3">Example 3: Draw something on favicon and provide custom alternative URL</h3>
<pre class="brush:javascript">jQuery.favicon('mail_icon_32_new_message_active_w.png', 'mail_icon_32_active.png', function (ctx) {
  ctx.font = 'bold 15px "helvetica", sans-serif';
  ctx.fillStyle = '#FF00FF';
  ctx.fillText('10', 10, 27);
});</pre>

<h3 id="example4">Example 4: Simple blink effect jQuery.favicon.animate()</h3>
<pre class="brush:javascript">
  var bool = false;
  function blink(button) {
    if (bool) {
       bool = false;
       jQuery.favicon.unanimate();
       return ;
    }
	
    jQuery.favicon.animate('mail_icon_32_new_message_animation.png', 'mail_icon_32_new_message.png', {
      frames: [1, 0],
      interval: 500,
      onDraw: function (ctx, frame) {
        ctx.font = 'bold 15px "helvetica", sans-serif';
        ctx.fillStyle = '#333333';
        ctx.fillText(count, 10, 27);
        if (Math.random() > .95)
          count++;
      },
      onStop: function () {
        jQuery.favicon('mail_icon_32.png');
      }
    });
 }
</pre>