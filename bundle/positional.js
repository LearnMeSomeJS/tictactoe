getPosition = (positionObject) => {
  const element = elementBuilder(positionObject);
  return positionIcon(element);
}

getLine = (line) => {
  const elementArray = lineElements(line);
  let array = [];
  for(let i = 0; i < elementArray.length; i++) {
    const element = $(elementArray[i]);
    array.push(
      positionIcon(element)
    );
  }
  return array;
}

getColumn = (line) => {
  const elementArray = columnElements(line);
  let array = [];
  for(let i = 0; i < elementArray.length; i++) {
    const element = $(elementArray[i]);
    array.push(
      positionIcon(element)
    );
  }
  return array;
}

// Private function

positionIcon = (element) => {
  if (element.children()[0] && element.children()[0].className) {
    return element.children()[0].className === 'fas fa-times' ? 'X' : 'O';
  }
  return null;
}
