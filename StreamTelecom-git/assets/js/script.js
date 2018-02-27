$(function () {

   "use strict";

   var fixNavHeight = $('.navbar-fixed-top').height();
   if(fixNavHeight > 0) {
      $('body').css('padding-top', fixNavHeight);
   }

   // scroll body to 0px on click
   jQuery('.gotop').click(function () {
      jQuery('body,html').stop(false, false).animate({
         scrollTop: 0
      }, 800);
      return false;
   });

   /* Replace all SVG images with inline SVG */
   // "img.svg" img[src$=".svg"]
   jQuery('img.svg').each(function () {
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      jQuery.get(imgURL, function (data) {
         // Get the SVG tag, ignore the rest
         var $svg = jQuery(data).find('svg');

         // Add replaced image's ID to the new SVG
         if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
         }
         // Add replaced image's classes to the new SVG
         if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
         }

         // Remove any invalid XML tags as per http://validator.w3.org
         $svg = $svg.removeAttr('xmlns:a');

         // Replace image with new SVG
         $img.replaceWith($svg);

      }, 'xml');
   });

   //Equal Height Columns
   var eqCol = $('.eqcol');
   var highestBox = 0;
   $(eqCol).each(function () {
      if ($(this).height() > highestBox) {
         highestBox = $(this).height();
      }
   });

   $(eqCol).height(highestBox);

   $(window).resize(function () {
      $(eqCol).height(highestBox);
   });

});

