/*
* Author: Diamond Moore and Gage Weber <dikmoore@ucsc.edu> <gaeweber@ucsc.edu>
* Created: 25 October 2022
* License: Public Domain
*/

function sub_five(x){
  return x - 5;
}

array = [5,55,555,25];

// output
document.writeln("Original Array:", array, "</br>");

map_array = array.map(sub_five);
document.writeln("Mapped -5 Array: ", map_array, "</br>");
