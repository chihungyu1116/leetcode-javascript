// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */

// // http://blog.csdn.net/yutianzuijin/article/details/11499917
// var findMedianSortedArrays = function(nums1, nums2) {
//     var m = nums1.length;
//     var n = nums2.length;
//     var total = m + n;

//     if(total%2 === 1) {
//         return findKth(nums1, m, nums2, n, parseInt(total/2) + 1);
//     } else {
//         return (findKth(nums1, m, nums2, n, parseInt(total/2)) + findKth(nums1, m, nums2, n, parseInt(total/2) + 1))/2;
//     }
// };


// function findKth(a, m, b, n, k) {
//     // always assume that m is equal or smaller than n
//     if(m > n) {
//         return findKth(b, n, a, m, k);
//     }

//     if(m === 0) {
//         return b[k-1];
//     }

//     if(k === 1) {
//         return Math.min(a[0],b[0]);
//     }

//     // divide k into two parts
//     var pa = Math.min(parseInt(k/2), m);
//     var pb = k - pa;

//     if(a[pa - 1] < b[pb - 1]) {
//         return findKth(a.slice(pa), m - pa, b, n, k - pa);
//     } else if(a[pa - 1] > b[pb - 1]) {
//         return findKth(a, m, b.slice(pb), n - pb, k - pb);
//     } else {
//         return a[pa - 1];
//     }
// }


// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// var findMedianSortedArrays = function(nums1, nums2) {
//     var total = nums1.length + nums2.length;
//
//     if (total % 2 === 1) {
//         return findKth(nums1, 0, nums2, 0, parseInt(total/2) + 1);
//     } else {
//         return (
//             findKth(nums1, 0, nums2, 0, parseInt(total/2))
//             + findKth(nums1, 0, nums2, 0, parseInt(total/2) + 1)
//         )/2;
//     }
// };
//
// function findKth(nums1, start1, nums2, start2, kth) {
//     var len1 = nums1.length - start1;
//     var len2 = nums2.length - start2;
//
//     if (len1 > len2) {
//         return findKth(nums2, start2, nums1, start1, kth);
//     }
//
//     if (len1 === 0) {
//         return nums2[kth - 1];
//     }
//
//     if (kth === 1) {
//         return Math.min(nums1[start1], nums2[start2]);
//     }
//
//     // divide kth into 2 parts
//     var part1 = Math.min(parseInt(kth/2), len1);
//     var part2 = kth - part1;
//
//     if (nums1[start1 + part1 - 1] < nums2[start2 + part2 - 1]) {
//         return findKth(nums1, start1 + part1, nums2, start2, kth - part1);
//     } else if (nums1[start1 + part1 - 1] > nums2[start2 + part2 - 1]) {
//         return findKth(nums1, start1, nums2, start2 + part2, kth - part2);
//     } else {
//         return nums1[start1 + part1 - 1];
//     }
// }



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const len = nums1.length + nums2.length;

    if (len % 2 === 1) {
        return findKth(nums1, 0, nums2, 0, Math.floor(len/2) + 1);
    } else {
        const first = findKth(nums1, 0, nums2, 0, Math.floor(len/2));
        const second = findKth(nums1, 0, nums2, 0, Math.floor(len/2) + 1);

        return (first + second) / 2;
    }
};

function findKth(nums1, start1, nums2, start2, kth) {
    const len1 = nums1.length - start1;
    const len2 = nums2.length - start2;

    if (len1 > len2) {
        return findKth(nums2, start2, nums1, start1, kth);
    }

    if (len1 === 0) {
        return nums2[kth - 1];
    }

    if (kth === 1) {
        return Math.min(nums1[start1], nums2[start2]);
    }

    // Three conditions here, len1 < kth/2, len1 === kth/2, len1 > kth/2
    const kth1 = Math.min(Math.floor(kth/2), len1);
    const kth2 = kth - kth1;

    const nums1Kth = nums1[start1 + kth1 - 1];
    const nums2Kth = nums2[start2 + kth2 - 1];

    if (nums1Kth < nums2Kth) {
        return findKth(nums1, start1 + kth1, nums2, start2, kth2);
    } else if (nums1Kth > nums2Kth) {
        return findKth(nums1, start1, nums2, start2 + kth2, kth1);
    } else {
        return nums1Kth;
    }
}
