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
        this.topPrev = null;
        this.top = this.head;
        this.length++;
    }

    insert(node){
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    skip(i, latch){
        if(i < this.step){
            this.top = this.top.next;
            i++;
        }else{
            i = 0;
            latch = 1;
            this.topPrev = this.top;
            this.top = this.top.next;
        }
    }

    reverse(i, latch){
        let prev = this.top;
        let current = prev.next;
        let next = current.next;
        if(i < this.step){
            current.next = prev;
            prev = current;
            current = next;
            next = next.next;
            i++;
        }else{
            i = 0;
            latch = 0;
            this.topPrev.next.next = current;
            this.topPrev.next = prev;
            this.top = current;
        }
    }

    funnyReverse(k){
        this.step = k;
        let latch = 0;
        let i = 0;
        while(this.top.next != null){
            if(latch == 0) this.skip(i,latch);
            else this.reverse(i,latch);
        }
        return this.head;
    }
}