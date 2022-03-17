((head) => {
  if (head === null || head.next === null) return head;
  let current = head;
  let previous = current;
  while (current) {
    current = current.next;
    if (current.val === previous.val) {
      previous.next = current.next;
    } else {
      previous = previous.next;
    }
  }
  return head;
})([1, 2, 4, 4]);
