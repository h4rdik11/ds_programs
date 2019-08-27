class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList{
    constructor(node){
        this.head = node;
        this.tail = node;
        this.length = 1;
    }

    insert(node){
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    isPalindrome(){
        let i = 0;
        let a = this.head;
        let b = this.tail;
        while(i < (this.length%2 == 0 ? this.length/2 : Math.floor(this.length/2) + 1 )){
            if(a.value == b.value){
                a = a.next;
                b = b.prev;
                i++;
            }else return false;
        }
        return true;
    }
}