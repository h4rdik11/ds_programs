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
        this.length = 1;
    }

    insert(node){
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    reverseLast(n){
        let i = this.length;
        let top = this.head;
        let prevTop = null;
        while(i < n){
            top = top.next;
            i--;
            if(i == n+1) prevTop = top;
        }

        let prev = top;
        let current = top.next;
        let next = top.next.next;

        while(next != null){
            current.next = prev;
            prev = current;
            current = next;
            next = next.next;
            if(next == null){
                current.next = prev;
                top.next = null;
                prevTop.next = current;
                this.tail = top;
            }
        }
        return this.head;
    }
}