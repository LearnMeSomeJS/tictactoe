/*
  Some notes:
  There are a few ways to write JS functions:
  There's the ES2015/javascript ways:

    function doSomething(thing) {
      ...
    }

    doSomething = function(thing) {
      ...
    }
  There's the new ES2016+/ES6+/ECMAScript ways:
    doSomething = () => {
      ...
    }

    doSomething = () => ...

    They are all valid and most of them exist in the files of this project.
    Except for very small details they work about the same.
    I'd dare you to change. Both the function below and the following functions you might do to the ES2016+ way.
*/
var isPlayerOne = true;

function clickedPlace(positionObject) {
  console.log(positionObject);
}
