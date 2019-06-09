document.addEventListener("DOMContentLoaded", function(carousel) {
  console.log("works");
  const flkty = new Flickity(".main-carousel", {
    cellAlign: "left",
    contain: "true",
    freeScroll: "true",
    wrapAround: "true"
  });
});
// main accessibility code

$(function() {
  $("a[href^='#']")
    .not("a[href='#']")
    .click(function() {
      $(
        "#" +
          $(this)
            .attr("href")
            .slice(1) +
          ""
      ).focus();
    });
});
