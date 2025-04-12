var lengthOfLongestSubstring = function(s) {
    const track = new Set()  
    let left = 0
    let longestValue = 0;
    
    for(let right = 0; right < s.length; right++){
        while(track.has(s[right])){
            track.delete(s[left]);
            left++;
        }
        track.add(s[right]);
        console.log(longestValue, right - left + 1)
        longestValue = Math.max(longestValue, right - left + 1);
    }
    
    return longestValue;
};

console.log(lengthOfLongestSubstring("pwwkew"))