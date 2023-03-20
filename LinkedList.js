class Node {
    constructor(data) {
      this.data = 0;
      this.next = null;
  
      this.data = this.data;
      this.next = null;
    }
  }

  let head = new Node(3);
  head.next = new Node(4);
  head.next.next = new Node(5);
  head.next.next.next = new Node(6);
  let temp = head;
  while (temp !== null) {
    console.log(temp.data);
    temp = temp.next;
  }
