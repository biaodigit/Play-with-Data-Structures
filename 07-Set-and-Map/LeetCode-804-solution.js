let uniqueMorseRepresentations = (words) => {
    let code = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."],
        res = [];
    words.forEach((str) => {
        let morse = '';
        for (let i = 0; i < str.length; i++) {
            morse += code[str[i].charCodeAt(0) - 97]
        }
        if (!res.includes(morse)) {
            res.push(morse)
        }
    })
    return res.length
};