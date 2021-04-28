class DSNode {
    constructor(data = null, type = null, next = null, previous = null) {
        this.data = data;
        this.type = type;
        this.next = next;
        this.previous = previous;
    }
}

export default DSNode;