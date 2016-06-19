var findKth = (a1, a2, kth) => {
  var alen1 = a1.length;
  var alen2 = a2.length;
  
  if(alen1 > alen2) {
    return findKth(a2, a1, kth);
  }
  
  if(alen1 === 0) {
    return a2[kth -1];
  }
  
  if(kth === 1) {
    return Math.min(a1[0], a2[0]);
  }
  
//   need to make sure that kth is not 1 as kth/2 = 0 
  var p1 = Math.min(parseInt(kth/2), alen1);
  var p2 = kth - p1;
  
  if(a1[p1 - 1] < a2[p2 - 1]) {
     return findKth(a1.slice(p1), a2, kth - p1);
  } else if(a1[p1 - 1] > a2[p2 - 1]) {
    return findKth(a1, a2.slice(p2), kth - p2);
  } else {
    return a1[p1 - 1]; 
  }
}


// function findKth(a, aStart, aEnd, b, bStart, bEnd, kth) {
//     // use array position rather than use slice to get array
//     // always assume that m is equal or smaller than n
//     var aLen = aEnd - aStart + 1; // same as a.length as index 3 - 3 = 0 but still it has one element compared to a.length === 0 has notthing
//     var bLen = bEnd - bStart + 1;
//     var mid;
//     if(aLen > bLen) {
//         return findKth(b, bStart, bEnd, a, aStart, aEnd, kth);
//     }
    
//     if(aLen <= 0) {
//         return b[kth - 1];
//     }
    
//     if(kth === 1) {
//         return Math.min(a[aStart], b[bStart]);
//     }
    
//     var k1 = Math.min(parseInt(kth/2), aLen); 
//     var k2 = kth - k1;
    
//     if(a[aStart + k1 - 1] < b[bStart + k2 - 1]) {
//         return findKth(a, aStart + k1, aEnd, b, bStart, bEnd, kth -k1);
//     } else if(a[aStart + k1 - 1] > b[bStart + k2 - 1]) {
//         return findKth(a, aStart, aEnd, b, bStart + k2, bEnd, kth -k2);
//     } else {
//         return a[aStart + k1 -1];
//     }
// }