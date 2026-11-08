class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const set: Set<number> = new Set(nums);
        let duplicate = false;

        for (const n of set) {
            duplicate = nums.filter((n1) => n1 === n).length > 1
            if (duplicate) break;
        }

        return duplicate;
    }
}
