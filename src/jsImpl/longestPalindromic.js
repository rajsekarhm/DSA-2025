/**
 * @param {string} s
 * @return {string}
 */

// brute force
var longestPalindrome = function(s) {
        let res = "";
        let resLen = 0;

        for (let i = 0; i < s.length; i++) {
            for (let j = i; j < s.length; j++) {
                let l = i, r = j;
                while (l < r && s[l] === s[r]) {
                    l++;
                    r--;
                }

                if (l >= r && resLen < (j - i + 1)) {
                    res = s.slice(i, j + 1);
                    resLen = j - i + 1;
                }
            }
        }
        console.log(res)
        return res;

    }


    // function longestPalindromeDP(s) {
    //     let resIdx = 0, resLen = 0;
    //     const n = s.length;
    //     const dp = Array.from({ length: n }, () => Array(n).fill(false));

    //     for (let i = n - 1; i >= 0; i--) {
    //         for (let j = i; j < n; j++) {
               
    //             if (s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
    //                 console.log(s[i] ,s[j],"j-i",j-i)
    //                 dp[i][j] = true;
    //                 if (j - i + 1 > resLen) {
    //                     resIdx = i;
    //                     resLen = j - i + 1;
    //                 }
    //             }
    //         }
    //     }

    //     return s.slice(resIdx, resIdx + resLen);
    // }

    longestPalindrome("babad")