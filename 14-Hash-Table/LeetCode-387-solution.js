let firstUniqChar = function (s) {
    let freq = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        freq[s[i].charCodeAt(0) - 97]++;
    }

    for (let j = 0; j < s.length; j++) {
        if (freq[s[j].charCodeAt(0) - 97] === 1) {
            return j
        }
    }
    return -1
};