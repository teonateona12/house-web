$(document).ready(function () {
  $.ajax({
    url: "https://localhost:7145/Slider",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
    method: "GET",
    dataType: "json",
    success: function (data) {
      $("#slider").empty();
      data.forEach(function (item) {
        var slide =
          '<div class="slide" style="position: relative; height:700px">' +
          '<div class="container" style="position: absolute; bottom:50px; left:30px; z-index:999;">' +
          '<div class="overlay">' +
          '<div class="info">' +
          '<div class="tag price" style="color: #fff; font-weight: bold; font-size: 24px;">$ ' +
          item.price +
          "</div>" +
          "<h3 style='color: #fff; font-weight: bold; font-size: 24px; margin:8px'>" +
          item.name +
          "</h3>" +
          "<figure style='color: #fff;  font-size: 20px;'>" +
          item.address +
          "</figure>" +
          "</div>" +
          "<hr />" +
          '<a href="#" style="color: #fff; margin-bottom: 10px" class="link-arrow">Read More</a>' +
          "</div>" +
          "</div>" +
          '<img alt="' +
          item.name +
          '" src="' +
          "https://localhost:7145/" +
          item.image +
          '" />' +
          "</div>";

        $("#slider").append(slide);
      });

      $("#slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
      });
    },
    error: function (error) {
      console.error("Error fetching data:", error);
    },
  });
});
