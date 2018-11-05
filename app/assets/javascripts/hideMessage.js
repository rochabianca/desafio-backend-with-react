$(document).on("turbolinks:load", function() {
  setTimeout(function() {
    console.log("foi?");
    $(".flashMessages").slideUp(200);
  }, 2000);
});
