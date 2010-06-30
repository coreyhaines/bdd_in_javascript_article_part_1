describe("Pressing the start button", function() {
  var gameBoard, originalGameBoardStructure, ballDraggerGame;
  function InitializeGame(){
    ballDraggerGame = BallDragger.initialize(gameBoard);
    gameBoard.find("#start-button").click(ballDraggerGame.start);
  }

  function PressStart(){
    gameBoard.find("#start-button").click();
  }

  function MoveBallTo(locationKey){
    var locationLookup, location, locationPosition,
        ball, ballPosition, dx, dy,
        inside;
    var locationLookup = { 
      "start": "#ball-start",
      "destination": "#ball-destination"
    };

    location = gameBoard.find(locationLookup[locationKey]);
    ball = gameBoard.find("#ball");

    locationPosition = location.position();
    ballPosition = ball.position();
    dx = locationPosition.left - ballPosition.left;
    dy = locationPosition.top - ballPosition.top;

    ball.simulate("drag", { dx: dx, dy: dy });
  }

  function BallShouldBeIn(locationKey){
    var locationLookup, location, locationPosition,
        ball, ballPosition,
        inside;
    var locationLookup = { 
      "start": "#ball-start",
      "destination": "#ball-destination"
    };

    location = gameBoard.find(locationLookup[locationKey]);
    ball = gameBoard.find("#ball");

    expect(ball).toBeInside(location);
  }

  beforeEach(function() {
    originalGameBoardStructure = $("#game");
    gameBoard = originalGameBoardStructure.clone();
    originalGameBoardStructure.replaceWith(gameBoard);
  });

  beforeEach(function() {
    this.addMatchers(CustomMatchers);
  });

  afterEach(function(){
    gameBoard.replaceWith(originalGameBoardStructure);
  });


  it("creates a ball in the start location", function() {
    InitializeGame();

    PressStart();

    BallShouldBeIn("start");
  });

  describe("When pressed a second time", function() {
    it("moves the ball back to the start location", function() {
      InitializeGame();

      PressStart();

      MoveBallTo("destination");

      BallShouldBeIn("destination");

      PressStart();

      BallShouldBeIn("start");
    });
  }); 
});
