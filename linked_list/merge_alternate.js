class Node {
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
}

const merge_alternate = function(list1, list2){
    let i = 0;
    let shorterList = list1.length > list2.length ? list2 : list1;
    let longerList = list1.length > list2.length ? list1 : list2;
    while(i < shorterList.length){
        let temp = new Node(shorterList.top.value);
        temp.next = longerList.top.next;
        longerList.top.next = temp;
        longerList.top = temp.next;
        shorterList.top = shorterList.top.next;
        i++;
    }
    return longerList;
}

let list1 = new LinkedList(new Node(1));
list1.insert(new Node(2));
list1.insert(new Node(3));
list1.insert(new Node(4));

let list2 = new LinkedList(new Node(5));
list2.insert(new Node(6));
list2.insert(new Node(7));

console.log("List 1 : ", list1.head);
console.log("List 2 : ", list2.head);

console.log(merge_alternate(list1,list2).head);