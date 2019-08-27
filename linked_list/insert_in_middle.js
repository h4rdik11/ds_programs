class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(node){
        this.head = node;
        this.tail = node;
        this.pointer = null;
        this.length = 1;
    }

    insert(node){
        this.tail.next = node;
        this.tail = node;
        this.length++;
        if(node.value == 50) this.pointer = this.tail;
    }

    insertInMiddle(node){
      let temp = node;
      temp.next = this.pointer.next;
      this.pointer.next = temp;
      this.pointer.value += this.pointer.next.value;
      this.pointer.next.value = this.pointer.value - this.pointer.next.value;
      this.pointer.value -= this.pointer.next.value;
    }
}

let ll = new LinkedList(new Node(10));
ll.insert(new Node(30));
ll.insert(new Node(50));
ll.insert(new Node(70));

console.log(ll.head);

ll.insertInMiddle(new Node(40));

console.log(ll.head);