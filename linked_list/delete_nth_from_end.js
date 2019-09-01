class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(node){
        this.head = node;
        this.tail = node;
        this.top = this.head;
        this.length = 1;
    }

    insert(node){
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    deleteNthFromEnd(n){
        let i = this.length;
        while(i > n + 1){
            this.top = this.top.next;
            i--;
        }
        this.top.next = this.top.next.next;
        return this.head;
    }
}

let ll = new LinkedList(new Node(1));
ll.insert(new Node(2));
ll.insert(new Node(3));
ll.insert(new Node(4));
ll.insert(new Node(5));
ll.insert(new Node(6));
ll.insert(new Node(7));
ll.insert(new Node(8));
ll.insert(new Node(9));
ll.insert(new Node(10));
ll.insert(new Node(11));

console.log(ll.head);
console.log(ll.deleteNthFromEnd(3));
