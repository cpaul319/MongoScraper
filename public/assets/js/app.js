$("#scrape").on("click", function () {
  alert("Articles scraped");
  $.ajax({
    method: "GET",
    url: "/scrape",
  }).done(function (data) {
    console.log(data)
    window.location = "/"
  })
});
// Grab the articles as a json
// $.getJSON("/articles", function (data) {
//   // For each one
//   for (var i = 0; i < data.length; i++) {
//     // Display the apropos information on the page "<p>" + data[i].title + "</p>"
//     $(".jumbotron").append(
//       '<div class="card">'
//       + '<div class="card-body">' 
//       + '<h5 class="card-title">' 
//       + data[i].title 
//       + '</h5>' 
      
//       + "<a href="
//       + "https://www.columbiamissourian.com"
//       + data[i].link
//       + " "
//       + 'class="btn btn-primary"'+ 'target="_blank">Click for the full story</a><br />'
//       +'<button data-id=' 
//       + data[i]._id 
//       + " " 
//       +'class="btn btn-primary" data-toggle="modal" id="notesButton"'
//       +'data-target="#modalPostForm"'
//       + 'data-title='
//       + data[i].title 
//       +'>Add note</button>'
//       +'<button class="btn btn-primary save">Save this article</button>'
//       + '</div></div>');

//   }
// });
//Handle Save Article button
$(".save").on("click", function() {
  var thisId = $(this).attr("data-id");
  $.ajax({
      method: "POST",
      url: "/articles/save/" + thisId
  }).done(function(data) {
      window.location = "/"
  })
});
 
//data-title=' + data[i].title +"

// Whenever someone clicks a p tag
// $(document).on("click", "p", function () {
//   // Empty the notes from the note section
//   $("#notes").empty();
//   // Save the id from the p tag
//   var thisId = $(this).attr("data-id");
//   var title = $(this).attr("data-title");

//   // Now make an ajax call for the Article
//   $.ajax({
//     method: "GET",
//     url: "/articles/" + thisId
//   })
//     // With that done, add the note information to the page
//     .then(function (data) {
//       console.log(data);
      

//       // If there's a note in the article
//       if (data.note) {
//         // Place the title of the note in the title input
//         $("#titleinput").val(data.note.title);
//         // Place the body of the note in the body textarea
//         $("#bodyinput").val(data.note.body);
//       }
//     });
// });

$(".saveNote").on("click", function() {
  var thisId = $(this).attr("data-id");
  if (!$("#noteText" + thisId).val()) {
      alert("please enter a note to save")
  }else {
    $.ajax({
          method: "POST",
          url: "/notes/save/" + thisId,
          data: {
            text: $("#noteText" + thisId).val()
          }
        }).done(function(data) {
            // Log the response
            console.log(data);
            // Empty the notes section
            // $("#noteText" + thisId).val("");
            // $(".modalNote").modal("hide");
            window.location = "/"
        });
  }
});

$('.saveNote').on('click', function (e){
  // $('#noteArea').empty();
  // $('#noteTitleEntry, #noteBodyEntry').val('');
  let id = $(this).data('id');
  $('#submitNote, #noteBodyEntry').attr('data-id', id);
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      // Value taken from title input
      title: $("#titleinput").val(),
      // Value taken from note textarea
      body: $("#bodyinput").val()
    }
  })
    // With that done
    .then(function (data) {
      // Log the response
      console.log(data);
      // Empty the notes section
      $("#notes").empty();
    });
});
// When you click the savenote button
 
