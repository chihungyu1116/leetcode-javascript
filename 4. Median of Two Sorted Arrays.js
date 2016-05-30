/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 
// http://blog.csdn.net/yutianzuijin/article/details/11499917
var findMedianSortedArrays = function(nums1, nums2) {
    var m = nums1.length;
    var n = nums2.length;
    var total = m + n;
    
    if(total%2 === 1) {
        return findKth(nums1, m, nums2, n, parseInt(total/2) + 1);
    } else {
        return (findKth(nums1, m, nums2, n, parseInt(total/2)) + findKth(nums1, m, nums2, n, parseInt(total/2) + 1))/2;
    }
};


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