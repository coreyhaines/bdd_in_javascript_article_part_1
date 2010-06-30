var CustomMatchers = {};

CustomMatchers.toBeInside = function(thisContainer) {
  var element = this.actual;

  thisContainerPosition = thisContainer.position();
  elementPosition = element.position();

  inside = (elementPosition.left >= thisContainerPosition.left) &&
  (elementPosition.left <= thisContainerPosition.left + thisContainer.width()) &&
  (elementPosition.top >= thisContainerPosition.top) &&
  (elementPosition.top <= thisContainerPosition.top + thisContainer.height());

  return inside;
}
