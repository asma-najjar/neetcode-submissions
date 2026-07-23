class Solution {
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l <= r) {
            if (!this.isAlnum(s[l])) {
                l++;
            } else if (!this.isAlnum(s[r])) {
                r--;
            } else if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            } else {
                l++;
                r--;
            }
        }

        return true;
    }

    isAlnum(char) {
        return /^[a-z0-9]+$/i.test(char);
    }
}
