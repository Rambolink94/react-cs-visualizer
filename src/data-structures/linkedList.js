import DSNode from './dataNode.js';

class LinkedList {
    constructor() {
        this.head = new DSNode();
        this.length = 0;
    }

    add(data) {
        let current = this.head;
        while(current.next != null)
        {
            current = current.next;
        }
        current.next = new DSNode(data, "int");
    }

    print() {
        let current = this.head;
        while(current.next != null)
        {
            console.log(`Data: ${current.data} Type: ${current.type}`)
            current = current.next;
        }
        console.log(`Data: ${current.data} Type: ${current.type}`)
        console.log("----------");
    }
}

export default LinkedList;