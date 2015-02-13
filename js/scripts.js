var triangle = function(sideOne, sideTwo, sideThree){

  var sides = [sideOne, sideTwo, sideThree]

  if(sideOne === '' || sideTwo === '' || sideThree === '') {
    return "Please enter three side lengths";
  } else if (sides[2] >= sides[0] + sides[1])  {
    return "This is not a valid triangle";
  } else if (sides[0]===sides[1] && sides[1]===sides[2]) {
    return "Equilateral";
  } else if (sides[0]===sides[1]) {
    return "Isosceles";
  } else return sides; {;
  }
};
