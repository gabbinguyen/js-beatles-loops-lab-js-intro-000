// add solution here
function theBeatlesPlay (musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
  array.push(musicians[i] + ` plays ` + instruments[i]);
}
  return array;
}

function johnLennonFacts(array) {
  var i = 0;
  while (i < array.length) {
    array[i] = array[i] + `!!!`;
    i++;
  }
  return array
}

function iLoveTheBeatles(num) {
  var array = []
  var i = 15
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < i);
  return array;
}
