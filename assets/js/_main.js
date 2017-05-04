/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){

  var currentX = 0;
  var currentY = 0;

  window.onmousemove = function (e) {
      var x = e.clientX,
          y = e.clientY;
      currentX = x;
      currentY = y;
  };

  $(".is-fancy").each(function() {
    var node = $(this);

    node.on('click', function(e) {
      e.preventDefault();

      var gutter = '20px';

      var bigImage = $([
        '<div style="position: absolute; z-index: 100; left: ' + gutter + '; right: ' + gutter + '; top: ' + gutter + '; bottom: ' + gutter + '">',
          '<img style="max-width: none" src="' + node.attr('href') + '" usemap="' + node.data('map') + '" />',
        '</div>'
      ].join(''));

      var closeDiv = $('<div class="close" style="z-index: 500; position: absolute; right: 20px; top: 20px; cursor: pointer; font-size: 2rem; text-align: center; width: 50px; color: #fff; background-color: #000">&times;</div>');

      var backdrop = $('<div style="opacity: 0.8; background-color: #000; cursor: crosshair; z-index: 50; position: absolute; right: 0; top: 0; left: 0; bottom: 0;"></div>')

      $("body").css("overflow", "hidden");

      bigImage.appendTo("body");
      closeDiv.appendTo("body");
      backdrop.appendTo("body");

      var close = function() {
        bigImage.remove();
        closeDiv.remove();
        backdrop.remove();
        $("body").css("overflow", "auto");

        $(".tooltipstered").tooltipster('destroy');

        zoom.parent().off('mousewheel.focal');
      }

      closeDiv.on('click', close);
      backdrop.on('click', close);

      bigImage.find('img').maphilight({
        alwaysOn: true
      });

      var zoom = bigImage.panzoom({
        maxScale: 1,
        minScale: 0.1
      });

      var map = $('map[name="' + node.data('map').substring(1) + '"]');

      map.find('area').each(function() {
        var area = $(this);

        var content = '<span>' + area.data('name') + '</span>';

        if(area.data('lair')) {
          content += '<br><a target="_blank" href="lairs#' + area.data('name').split(' ').join('+') + '">Lair Info</a>';
        }

        if(area.data('quests')) {
          var quests = area.data('quests');

          if(quests.indexOf(',') === -1) {
            quests = [quests];
          } else {
            quests = quests.split(',');
          }

          quests = quests.map(function(q) {
            return '<a target="_blank" href="quests#' + q.split(' ').join('+') + '">' + q + '</a>';
          });

          content += '<br><br>Related Quests<br>' + quests.join('<br>');
        }

        area.tooltipster({
          theme: 'borderless',
          trigger: 'click',
          interactive: true,
          content: $(content),
          delay: 0,
          functionPosition: function(instance, helper, props) {
            props.coord.left = currentX - $(helper.tooltipClone).width();
            props.coord.top = currentY - $(helper.tooltipClone).height() - 20;
            return props;
          }
        });

      });

      zoom.parent().on('mousewheel.focal', function(e) {
        e.preventDefault();

        var delta = e.delta || e.originalEvent.wheelDelta;
        var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;

        zoom.panzoom('zoom', zoomOut, {
          increment: 0.1,
          animate: false,
          focal: e
        });
/*
        $(".tooltipstered").each(function() {
          $(this).tooltipster('instance').reposition();
        });
*/
      });

    });
  });
});
