const map = {
    '(': ')',
    '[': ']',
    '{': '}'
};

const isValid = (s) => {
    let stack = [];
    for (let key of s) {
        if (map[key]) {
            stack.push(map[key])
        } else {
            if (key !== stack.pop()) {
                return false
            }
        }
    }
    return stack.length === 0
};