$(document).ready(function () {
  let index = 1;

  $("#next").click(function () {
    index += 1;
    console.log(index);

    if (index > 4) { index = 1; }

    switch (index) {
      case 1:
        $("#carousel").toggleClass('bg-d bg-a');
        $("#food").text("Pastry");
        break;


      case 2:
        $("#carousel").toggleClass('bg-a bg-b');
        $("#food").text("Croissants");
        break;


      case 3:
        $("#carousel").toggleClass('bg-b bg-c');
        $("#food").text("Breads");
        break;

      case 4:
        $("#carousel").toggleClass('bg-c bg-d');
        $("#food").text("Cupcakes");
        break;

      default:
        $("#carousel").addClass("bg-a");
        $("#food").text("Pastry");
    }

  });



  $("#prev").click(function () {
    index -= 1;
    console.log(index);

    if (index < 1) { index = 4; }

    switch (index) {
      case 1:
        $("#carousel").toggleClass('bg-b bg-a');
        $("#food").text("Pastry");
        break;


      case 2:
        $("#carousel").toggleClass('bg-c bg-b');
        $("#food").text("Croissants");
        break;


      case 3:
        $("#carousel").toggleClass('bg-d bg-c');
        $("#food").text("Breads");
        break;

      case 4:
        $("#carousel").toggleClass('bg-a bg-d');
        $("#food").text("Cupcakes");
        break;

      default:
        $("#carousel").addClass("bg-a");
    }

  });
});


