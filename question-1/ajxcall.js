$(function () {
  $("#load-posts").click(function () {
    $.get("https://dummyjson.com/posts?limit=10&skip=10", function (res) {
      console.log(res);
      $("#rslt").empty();
      $("#rslt").append(JSON.stringify(res));
    });
  });
});
