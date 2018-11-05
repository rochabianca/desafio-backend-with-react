$(document).on("turbolinks:load", function() {
  setTimeout(function() {
    $(".flashMessages").slideUp(200);
  }, 2000);
});
