class LinkedList {
  constructor() {
    this.head = null;
  }

  insertElement(element) {
    let node = new Node(element);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  printElements() {
    let current = this.head;
    while (current) {
      console.log(current.element);
      current = current.next;
    }
  }

  getList() {
    return this.head;
  }

  mergeLinkedList(list1, list2) {
    let ptr1 = list1;
    let ptr2 = list2;
    let node = new Node()
    const ptr3 = node;
    while (ptr1 && ptr2) {
      if (ptr1.element > ptr2.element) {
        node.next = ptr2;
        ptr2 = ptr2.next;
      } else if (ptr1.element < ptr2.element) {
        node.next = ptr1;
        ptr1 = ptr1.next;
      } else if (ptr1.element === ptr2.element) {
        node.next = ptr1;
        ptr1 = ptr1.next;
      }
      node = node.next;
    }
    if (ptr1) node.next = ptr1;
    if (ptr2) node.next = ptr2;
    this.head = ptr3.next;
  }
}

class Node {
  constructor(element, next = null) {
    this.element = element;
    this.next = next;
  }
}

((list1, list2) => {
  const linkedList1 = new LinkedList();
  const linkedList2 = new LinkedList();

  for (const element of list1) {
    linkedList1.insertElement(element);
  }
  for (const element of list2) {
    linkedList2.insertElement(element);
  }
  const listObj2 = linkedList2.getList();
  const listObj1 = linkedList1.getList();

  const linkedList = new LinkedList();
  linkedList.mergeLinkedList(listObj1, listObj2);
  linkedList.printElements();
})([-9,3], [5,7]);
