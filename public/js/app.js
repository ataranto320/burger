$(function() {
    // $(".devour-burger").on("click", function(event) {
    //     var id = $(this).data("id");
    //     var eaten = $(this).data("eaten");
    //     var eatObject = {
    //         devoured: eaten
    //     };

    //     $.ajax("/api/burgers/" + id, {
    //         type: "GET",
    //         data: eatObject
    //     }).then(
    //         function() {
    //             console.log("Ate burger with id: " + id);
    //             location.reload();
    //         }
    //     );
    // });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#new-burger").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added another burger to the menu");
            location.reload();
        });
    });
});