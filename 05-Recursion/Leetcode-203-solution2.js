const removeElements = function (head, val) {
    while (head !== null && head.val === val) {
        let delNode = head;
        head = head.next;
        delNode.next = null
    }

    if (head === null) {
        return null
    }

    let prev = head;
    while (prev.next !== null) {
        if (prev.next.val === val) {
            prev.next = prev.next.next
        } else {
            prev = prev.next
        }
    }
    return head
};