var data  = [
  [1,2,3,4,5,6,7,19],
  [2,3,5,7,8,10,11],
  [2,3,5,7,8,9],
  [10,13,15,17,18,100],
  [5,8,100,1002,1033,1044]
];

findMedianInKSortedArrays(data);

function findMedianInKSortedArrays(arrs) {
  var len = 0;

  for(var i = 0; i < arrs.length; i++) {
    len += arrs[i].length;
  }

  var kth = Math.floor(len/arrs.length);
  var list = [];


}


function findMedianInKArrs(arrs) {
  var len = 0;
  for(var i = 0; i < arrs.length; i++) {
    len = arrs[i].length;
  }

  findKthInKArrs(arrs, len);
}


function findKthInKArrs(arrs, n) {
  var min = Infinity;
  var max = -Infinity;

  for(var i = 0; i < arrs.length; i++) {
    min = Math.min(arrs[i][0], min);
    max = Math.max(arrs[i][arrs[i].length - 1], max);
  }

  var removed = 0;
  var dividers = [];

  for(var i = 0; i < arrs.length; i++) {

  }
}





function findKth(a, m, b, n, k) {
    // always assume that m is equal or smaller than n
    if(m > n) {
        return findKth(b, n, a, m, k);
    }
    
    if(m === 0) {
        return b[k-1];
    }
    
    if(k === 1) {
        return Math.min(a[0],b[0]);
    }
    
    // divide k into two parts
    var pa = Math.min(parseInt(k/2), m);
    var pb = k - pa;
    
    if(a[pa - 1] < b[pb - 1]) {
        return findKth(a.slice(pa), m - pa, b, n, k - pa);
    } else if(a[pa - 1] > b[pb - 1]) {
        return findKth(a, m, b.slice(pb), n - pb, k - pb);
    } else {
        return a[pa - 1];
    }
}













// function findMedian(arrs) {
//   var n = 0;
//   var min, max;

//   for(var i = 0; i < arrs.length; i++) {
//     n += arrs[i].length;
//   }

//   var res = mergeKLists(arrs, 0, arrs.length - 1);

//   function mergeKLists(arrs, left, right) {
//     if(left === right) {
//       return arrs[left];
//     }

//     if(left > right) {
//       return [];
//     }

//     var mid = Math.floor((left + right)/2);

//     var arr1 = mergeKLists(arrs, left, mid);
//     var arr2 = mergeKLists(arrs, mid + 1, right);

//     return merge2Lists(arr1, arr2);
//   }

//   function merge2Lists(arr1, arr2) {
//     var res = [];
//     var i = 0;
//     var j = 0;
//     while(i < arr1.length && j < arr2.length) {
//       if(arr1[i] < arr2[j]) {
//         res.push(arr1[i++]);
//       } else {
//         res.push(arr2[j++]);
//       }
//     }

//     while(i < arr1.length) {
//       res.push(arr1[i++]);
//     }
//     while(j < arr2.length) {
//       res.push(arr2[j++]);
//     }

//     return res;
//   }

//   return res;
// }

// console.log(findMedian(data));