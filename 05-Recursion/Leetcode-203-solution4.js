const removeElements = function (head, val) {
    if (head === null) {
        return null
    }

    let res = removeElements(head.next, val)
    if (head.val === val) {
        return res
    } else {
        head.next = res;
        return head
    }
};