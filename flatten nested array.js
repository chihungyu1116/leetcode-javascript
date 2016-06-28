var arr = [1,2,[3,4,[5,[6]],7],8,9];

function flatten(arr) {
  return arr.reduce(function(self, el){
    var items = Array.isArray(el) ? flatten(el) : [el];
    return self.concat(items);
  }, []);
}

function flatten(array, result) {
    result === undefined && (result = []);

    for (var i = 0, len = array.length; i < len; i++) {
        if (Object.prototype.toString.call(array[i]) === '[object Array]') {
            flatten(array[i], result);
        } else {
            result.push(array[i]);
        }
    }

    return result;
}

console.log(flatten(arr));