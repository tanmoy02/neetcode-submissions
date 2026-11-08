class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const sArray: string[] = s.split('');
        const tArray: string[] = t.split('');
        const sSet: Set<string> = new Set(sArray);
        const tSet: Set<string> = new Set(tArray);
        if (sSet.size !== tSet.size) return false

        let anagrams: boolean = true;

        for (const sN of sSet) {
            if (sArray.filter(v => v === sN).length !== tArray.filter(v => v === sN).length) {
                anagrams = false;
                break;
            } else {
                continue;
            }
        }

        return anagrams;
    }
}
