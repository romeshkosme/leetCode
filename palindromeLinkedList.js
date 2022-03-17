function Node(element, next) {
  this.element = element;
  this.next = next;
}

function LinkedList() {
  this.head = null;
  this.insertLast = function (element) {
    let node = new Node(element);
    let current = this.head;
    if (!this.head) this.head = node;
    while (current) {
      if (!current.next) {
        current.next = node;
        break;
      }
      current = current.next;
    }
  };
  this.printElement = function () {
      let current = this.head;
      let numberStr = ""
      let numberRvs = ""
      while (current) {
        //   console.log(current.element)
          numberStr += current.element
          numberRvs = current.element + numberRvs
          current = current.next
      }
      if (numberStr === numberRvs) 
      console.log(numberStr);
      console.log(numberRvs);
      return numberStr === numberRvs ? true : false
  }
}

((head) => {
    const linkedList = new LinkedList();
    for (const element of head) {
        linkedList.insertLast(element)
    }
    linkedList.printElement()
})([1,2,3,4]);
