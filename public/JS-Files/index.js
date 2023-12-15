$(".btn-modal").click(function() {
  $("#overlay").removeClass("modal-toggle");
});

$("#overlay").click(function() {
  $("#overlay").addClass("modal-toggle");
});
