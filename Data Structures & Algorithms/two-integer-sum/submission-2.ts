class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const ans: number[] = [];

        for (let i = 0; i <= nums.length; i++) {
            const leftOverItems = [...nums];
            leftOverItems.splice(i, 1);
            const leftOverIndex = leftOverItems.indexOf(target - nums[i]);
            if (leftOverIndex != -1) {
                ans.push(i);
                ans.push(leftOverIndex + 1);

                break;
            }
        }

        return ans;
    }
}
