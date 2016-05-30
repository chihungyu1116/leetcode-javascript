class Solution(object):
    def increasingTriplet(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        a = b = None
        for n in nums:
            if a is None or a >= n:
                a = n
                print "a: ", a
            elif b is None or b >= n:
                b = n
                print "b: ", b
            else:
                return True
        return False

foo = Solution()
print foo.increasingTriplet([1,2,3])
print foo.increasingTriplet([3,2,1])
print foo.increasingTriplet([1,1,2])