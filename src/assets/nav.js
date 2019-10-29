var Nav = function() {
  'use strict';

  var handleNav = function() {

// Sidebar toggle behavior
 $('#sidebarCollapse').on('click', function() {
   $('#sidebar, #content').toggleClass('active');
 });

}

 return {
   init: function() {
     handleNav();
   }
 }
}();

$(document).ready(function() {
 Nav.init();
});
