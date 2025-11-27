$(function () {
  // exercise 1
  $(".accordion-header").click(function () {
    $(this).next(".accordion-content").slideToggle();
  });

  // exercise 2
  $("button").click(function () {
    $.ajax({
      url: "https://dummyjson.com/todos",
      method: "GET",
      success: function (data) {
        data.todos.map((todo) => {
          $(".todos ul").append(`<li>${todo.todo}</li>`);
        });
      },
      error: function (error) {
        $(".todos ul").append(`<li style="color: red;">Error occurred</li>`);
      },
    });
  });
});
