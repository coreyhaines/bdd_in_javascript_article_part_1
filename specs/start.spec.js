describe("BallDragger#start", function() {
  var gameBoard, originalGameBoardStructure, ballDraggerGame;

  beforeEach(function() {
    originalGameBoardStructure = $("#game");
    gameBoard = originalGameBoardStructure.clone();
    originalGameBoardStructure.replaceWith(gameBoard);

    ballDraggerGame = BallDragger.initialize(gameBoard);
  });

  beforeEach(function() {
    this.addMatchers(CustomMatchers);
  });

  afterEach(function(){
    gameBoard.replaceWith(originalGameBoardStructure);
  });
  
  describe("with no ball on field", function() {
    it("creates a ball in the start box", function() {
      var ball, startBox;
      ballDraggerGame.start();

      ball = gameBoard.find("#field #ball");
      startBox = gameBoard.find("#field #ball-start");

      expect(ball).toBeInside(startBox);
    });
  });
});
