var findPairs = function(nums, k) {
  if(nums.length === 0 || k < 0) {
    return 0;
  }
  var dict = {};
  var count = 0;

  nums.sort(function(a,b){ return a - b });
  for(var i = 0; i < nums.length; i++) {
    var number = nums[i];
    dict[number] = (dict[number] === undefined)? 1 : dict[number] += dict[number];
  }
  for(var numb in dict) {
    numb = parseInt(numb);
    if(k === 0) {
      if(dict[numb] > 1) {
        count++;
      }
    } else if(dict[numb + k] !== undefined){
      count++;
    }
  }
  return count;
};
