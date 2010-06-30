var BallDragger = {
  initialize: function(gameBoard) { 
    var field, startBox, startBoxPosition, ball;
    field = gameBoard.find("#field");
    startBox = field.find("#ball-start");
    startBoxPosition = startBox.position();
    ball = $("<div id='ball'></div>").draggable({containment:"#field"});

    return {
      start: function() {
        ball.appendTo(field);
        ball.css("left", startBoxPosition.left);
        ball.css("top", startBoxPosition.top);
      }
    };
  }
};
