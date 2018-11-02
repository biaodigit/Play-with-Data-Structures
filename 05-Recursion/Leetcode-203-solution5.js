const removeElements = function (head, val) {
    if (head == null)
        return head;

    head.next = removeElements(head.next, val);
    return head.val === val ? head.next : head;
};