$(document).ready(function () {
  console.log(
    "Top: " + $("img").position().top + " Left: " + $("img").position().left
  );

  // alert("Top: " + $("img").position().top + " Left: " + $("img").position().left);

  // $("img").draggable({
  //   stop: function () {
  //     console.log("stopping???");

  //     // if( img is far right side  then ) user wins.

  //     let dogeLeft = $("img").position().left;

  //     if (dogeLeft > 300) {
  //       console.log("we above 300", dogeLeft);

  //       $("p").text("you won. good for you.");

  //       $("img").attr("src", "https://picsum.photos/200/300");
  //       // $("#my_image").attr("src","second.jpg");
  //     } else {
  //       console.log("we NOT above 500");
  //     }
  //   },
  // });

  
  $("#dogePic").draggable(
    {
      stop: function () {
      console.log("stopping???");

      // if( img is far right side  then ) user wins.

      let dogeLeft = $("img").position().left;

      if (dogeLeft > 300) {
        console.log("we above 300", dogeLeft);

        $("p").text("you won. good for you.");

        $("img").attr("src", "https://picsum.photos/200/300");
        // $("#my_image").attr("src","second.jpg");
      } else {
        console.log("we NOT above 500");
      }
    },
      containment: "#containment-wrapper",
      scroll: false
    }
  );




  //TODO: if position is on the far rihgt side, tell user they won
});
