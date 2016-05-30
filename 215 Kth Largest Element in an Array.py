class Solution(object):
    def findKthLargest(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """

        pivot = random.choice(nums);
        nums1, nums2 = [], []
        for num in nums:
          if num > pivot:
            nums1.append(num)
          elif num < pivot:
            nums2.append(num)

        if k <= len(nums1):
          return self.findKthLargest(nums1, k)
        if k > len(nums) - len(nums2): # draw a graph to visualize it! It's not in the top k assortment, but in the small section
          return self.findKthLargest(nums2, k - (len(nums) - len(nums2)))

        return pivot